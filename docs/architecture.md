# Architecture

## DNA
- DNA contains all configuration data necessary to build the component structure of the Page.
- Page DNA is fetched from a JSON Database together with the Page Instance Data 
 and then injected into the Page component. 
 The DNA will then dictate the Render process of the page, i.e. which Layouts, Regions and 
 Components will be rendered when and with which props. DNA should map the data to the Regions which in turn will provide their data to the containing Blocks

## Global

- < Global > is responsible for fetching global data and put it on the store (locale, user, PREFETCH_SELECTIONS)

## Document

- < Document > is the container of the Document Layout

## Layout

- Layout Component is a collection of Regions arranged in a usable UI/UX

## Region

- < Region > is connected to redux
- < Region > has cuid > registry
- < Region > contains Blocks or nested Layouts
- < Region > is responsible for fetching Region data chunks and put it on the store (WebPage, EntityLists, EntityDetails, DashboardMetrics, PREFETCH_SELECTIONS)
- < Region > is NOT responsible for data injection into its components. Cell has the responsibility to pull data form the store.
- < Region > has inheritable display OR edit mode


props.own:
- meta
	- id
	- address
	- name
	- cssName
- data
	- generate cuid
	- fetch
- settings
	mode: edit/display
- style
	- inheritable base (set region fontsize)
    - base
    - context variant
    - poses (opened, closed, expanded, collapsed)

props.fwd:

## Block

- Block level Component is a collection of related Blocks and Cells and Elements arranged in a usable UI/UX
- Block level Component is focus on UI/UX 
- < Block > renders Block level components (ComposableTable, Tree, Grid, FieldSection, Calendar, Dashboard, Page ...)
- < Block > acts as a dynamically connected redux container (for PersonList, PersonAdd, VehicleList, VehicleDetail, ...)
- < Block > is instantiated for every connected Block level component
- < Block > accepts a skeleton graph data prop that is used to represent the relations AND Array Order for the data of its connected Cells
- < Block > has a clean props api


context:
- locale
- theme

props.own: 
- meta
	- id
	- address
	- name
	- cssName
	
- ui
	- composition
		- PaginationElement
			- props
	- variant
	- theme
	
			``` 
    		{
                preset: {
                    slideTransition: 'slideImageText'
                },
                design : 'imageSlider',
                skin: {
                   tone: default,
                   typography: sans, //default
                   spacial: cozy, //default
                   motion: playful, //default
                   contextual: taxonomy // host
                },
                class: 'is-root-section'
            }
	
- data
	- graph			
- settings
- style
	- base
	- context variant
	- poses

props.fwd:


## Page

- Is a special Block level component that merges a PageContent Tree with a PageLayout Tree

## Cell

- < Cell > is a collection of Elements
- < Cell > provides data for Elements
- < Cell > renders Element level components
- < Cell > is connected to redux
- < Cell > is instantiated for every connected Cell component
- < Cell > fetches its own data from redux and injects it to its Elements based on the Cell descriptor (which contains a block for mapCellStateToElementProps)
- < Cell > mutates redux and graph based on the Cell descriptor (which contains a block for onValueUpdateMutationSchema)
- < Cell > is NOT responsible for fetching data over the network. This is done by Document or Region. 

props.own: 
- meta
	- id
	- address
	- name
	- cssName
- settings
- style
	- inheritable base (set cell fontsize)
	- theme
	- skin
- data
	- generate cuid
	- selector
	- mutator
	- value

props.fwd:

## Element

- < Element > has a clean props api
- < Element > is Cell agnostic
- < Element > has display/edit/loading/error states
- < Element > can be a building block for Block level component (ex Pagination component vs ButtonList)


props.own: 
- settings
- data
	- value

props.fwd:

## Composition

- Cell composition descriptor composes Elements into a named Cell Composition Presets (CCP)  
- Region composition descriptor composes Blocks and nested Layouts into named Region Composition Presets (RCP) 
