# Code Guidelines

This document contains principal React code guidelines used in this project. 

# React Props Management
## Component Standard

In order to create a generic component library, the components should share a common Component Interface Standard. 
In analogy to the **F**lux **S**tandard **A**ction which defines a standardized way to create Redux Actions, 
a common Component Interface Standard should be agreed upon so that all components are architected, build 
and configured in a consistent and predictable way.

### Prop Management

Props are the Interface to our components. 
To achieve a consistent and predictable Interface throughout all components in the library, 
the same Toplevel props are reused across all components.

The Toplevel props objects are: 
- **meta**
- **data**
- **ui**
- **set**
- **evt**
- **own**
- **fwd**
------------------
- **meta**

The **meta** prop object contains special meta locator annotations such as @dna, @registry and @theme as well as other meta data 
which describes the component.

- **data**

The **data** prop object contains all data related properties, such as **accessors**, **mutators**, **selectors**, needed to fulfill the data requirements for the component.
this object could also contain the data itself at **data.value** or **data.graph**.

- **ui**

The **ui** prop object contains ui related properties such as the component's **theme** object.

- **set**

The **set** prop object is used as a public facing api to easily customize and congigure the component instance. 
It exposes the most important configurable properties to set the components in its desired functional state. 

- **evt**

The **evt** prop object contains component specific events which can be fired from the component. 
Other components can hook into these events.

- **own**
  
The **own** prop object contains internal props that are meant for the component itself

- **fwd**

The **fwd** prop object contains the props that are not used by the component itself 
but need to pass through the component for prop drilling. 

``` 
meta: {
    '@dna',
    '@registry',
    id,
    name,
    class,
    kind,
}

props: {
	data: {
        value,
        graph,
        selector,
        mutator,
        accessor: {},
        actions: {},
    },
	ui: {
		theme: {
            model: {
                param: value
            },
            design: 'asImageSlider',        [asDesignName (substitution) | inDesignName (context) ]
            skin: {
               tone: 'default',             [defaultInverted | taxonomyVehicles]
               typography: 'sans',          [default | sans | classic | heavy]
               spacial: 'compact',          [default | compact | open | wide]
               motion: 'smooth',            [default | smooth | playful | instant]
            },
            finish: {
                class: 'custom-class',
                style: {color: 'red'}
            }
        },
        actions: {}

	},
	set: {
		isEditMode: true
	},
	evt: {},
	own: {  
		actions: {}
		// private props
	},
	fwd: {
		// prop drilling
	}
}
```


### React Context Management

```
context:

{
	locale,
	theme,
}
```


    


# Theming Guidlines
## Multilayer & Multidimensional Theming

In order to theme a Component in a flexible and consistent way, a styled component should support a multi-layer and multi-dimensional theming strategy.


``` 
genes.ui.theme:

{
    model: {
        param: value
    },
    design : 'asImageSlider',
    skin: {
       tone: default,
       typography: sans, 
       spacial: cozy, 
       motion: smooth, 
    },
    finish: {
        class: 'custom-class',
        style: {color: 'red'}
    }
}
```


## First Theming Layer: Model

#### Modeling Styled Components

The first theming layer for a styled component is the modeling layer. 
A component and it's theme are modeled based on a predefined set of parameters
that each component can expose to model it's structure, functionality and behaviour.

The default model of the component is first styled with the minimal basic structural styling needed 
to make the component functional. 
The **default model**  should always be defined:

genes.ui.theme.model: 'default'

```
models = {
	default: {
		param: value
	},
}[genes.ui.theme.model]
```


Custom model variants can further be defined for the component and can affect 
structural, stylistic, and functional properties of the component. 
That is why models operate at the bottom layer of the Theming stack.
Only one **model** can be active for a styled component at the same time.

- use (custom selection 'string') : 
	- genes.ui.theme.model: 'modelVariantName'
- use (custom configuration {object}) : 
	- genes.ui.theme.model.custom = { param: value }


```
models = {
	default: {
		param: value
	},
	modelVariantName: {
		param: value
	},
	custom: null
}[genes.ui.theme.model]
```


The effective model is selected or customized at **genes.ui.theme.model**
The applied styles determine how the component should structurally look and behave. 
These styles are living inside the component and are always loaded. 
The component is now functional but not "Designed" yet. That's the task of the next Theming layer.




## Second Theming Layer: Design

#### Designing Styled Components
Once a styled component has been modeled into it's desired functional state, the next theming layer can be applied. 
The Design layer is the second theming layer of the Theming stack. 

These styles are not living inside the component but are declared inside a central theme folder or a global theme object (depending on the developers preference)  
The theme folder/object is project specific and should be swappable for another theme folder/object without affecting the functionality of our components.

Only one **design** can be active for a styled component at the same time. 
These designs do not change the functionality of the component, but they alter the layout and overall design of the component.   


Naming convention for designs:
- design substitution:
	- use genes.ui.theme.design.**as**DesignName to select an alternative design for the styled component
- design context:
	- use genes.ui.theme.design.**in**DesignName to select a design that changes depending on the context wherein the Styled Component is used.
 


## Third Theming Layer: Skin

#### Skinning Styled Components
Once a styled component has applied a Design, the next theming layer can be applied.
The Skin layer is the third theming layer of the Theming stack. 
These are CSS values which are responsible for the final look and feel of the styled component. 
These CSS values are defined globally at the global Theme level. 
The Skin theming level enables multi-dimensional theming of a styled component.

use: genes.ui.theme.skin.{skin} to apply a multi-dimensional skin to a styled component

```
genes.ui.theme.skin:

{
   tone: default,
   typography: sans, //default
   spacial: compact, //default
   motion: playful, //default, instant, smooth
}
```
                

## Fourth Theming Layer: Finish

#### Finishing Styled Components
Once a styled component has applied a Skin, the fourth and final theming layer can be applied.
These styles are injected ad-hoc by applying a class or by directly injecting inline styles.

use: genes.ui.theme.finish.{finish} to apply a class or inline styles to a styled component

```
genes.ui.theme.finish:

{
    class: 'is-custom-class',
    style: {color: 'red'}
}
```

