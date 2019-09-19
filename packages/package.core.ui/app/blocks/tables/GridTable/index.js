import React from 'react'
import styled, {keyframes, css} from 'styled-components'
import Cell from '../../../cells/Cell'

const ScrollContainerStyled = styled.div`
    display: flex;
    height: 80vh; // should be 100% of panel region
    width: 100%;
    overflow: hidden;

    > .ScrollBar {
        position: relative;
        top: 10rem;
        flex: 0 0 1rem;
        z-index: 20;
        background: #64b2b7;

        > .ScrollHandle {
            position: relative;
            top: 10rem;
            width: 1rem;
            height: 5rem;
            background: #0a66b7;

            &:hover {
                background: #1111b7;
            }
        }
    }
`

const GridTableStyled = styled.div`
    color: ${props => props.theme.primaryColor};
    flex: 5 0 101%;
    display: grid;
    grid-template-columns: minmax(0px, min-content) 1fr 1fr 1fr;
    height: 100%;
    margin-right: -2rem;
    overflow: auto;
    justify-items: stretch;
    align-items: stretch;

    > .Cell {
        border: 1px solid grey;
        border-top: none;
        border-left: none;
    }

    > .Cell:hover {
        background-color: #ccc;
    }

    > .active {
        background-color: #12b796;
    }

    > .Cell:nth-child(4n) {
        // order: 1;
    }

    > .Cell:nth-of-type(4n + 1) {
        border-left: 1px solid grey;
    }

    .head {
        position: sticky;
        z-index: 10;
        top: 0;
        border-top: 1px solid grey;
        background-color: yellow;
    }

    .head.row {
        //  position: sticky;
        position: relative;
        z-index: 5;
    }

    .row {
        grid-column-start: 1;
        grid-column-end: -1;
        min-height: 1rem;
        position: relative;
        // opacity: 0.5;
        border-top: 1px solid grey;
        // background-color: lightblue;
    }
`

class GridTable extends React.Component {
    state = {
        scrollPosition: 0
    }

    GridTableRef = React.createRef()
    ScrollBarRef = React.createRef()
    ScrollHandleRef = React.createRef()
    ScrollContainerRef = React.createRef()

    lastHoveredRow = null
    currentHoveredRow = null

    renderGridCells() {
        // Array.apply(null, { length: this.config.cellCount })
        let gridCells = []
        // loop over the rows
        for (let rowIndex = 0; rowIndex < this.props.data.length; rowIndex++) {
            console.log('GridTable this.props.data', this.props.data)
            const rowDataDummy = this.props.data[rowIndex]
            gridCells.push(
                <Cell
                    key={`Cell.${this.props.dna.meta.name}.body.r${rowIndex}`}
                    address={`Cell.${this.props.dna.meta.name}.body.r${rowIndex}`}
                    instanceType={this.props.dna.meta.instanceType}
                    instanceId={rowDataDummy.id}
                    data={rowDataDummy}
                    components={[
                        {
                            db: {dataKey: null},
                            ui: {
                                cellComponent: {
                                    cellComponentName: 'RowStartCell'
                                }
                            }
                        }
                    ]}
                    style={{
                        className: 'row'
                    }}
                    options={{
                        operationMode: 'ui.table',
                        row: rowIndex
                    }}
                />
            )

            // loop over the columns
            this.props.dna.config.columns.map((column, colIndex) => {
                gridCells.push(
                    <Cell
                        key={`Cell${this.props.dna.meta.name}.body.r${rowIndex}.c${colIndex}`}
                        address={`Cell.${this.props.dna.meta.name}.body.r${rowIndex}.c${colIndex}`}
                        instanceType={column.cell.meta.instanceType || this.props.dna.meta.instanceType}
                        instanceId={rowDataDummy.id}
                        data={rowDataDummy}
                        components={column.cell.components}
                        style={column.cell.styles}
                        options={{
                            ...column.cell.meta.options,
                            operationMode: 'db.table',
                            row: rowIndex,
                            col: colIndex
                        }}
                    />
                )
            })

            gridCells.push(
                <Cell
                    key={`Cell.${this.props.dna.meta.name}.body.r${rowIndex}`}
                    address={`Cell.${this.props.dna.meta.name}.body.r${rowIndex}`}
                    instanceType={this.props.dna.meta.instanceType}
                    instanceId={rowDataDummy.id}
                    data={rowDataDummy}
                    components={[
                        {
                            db: {dataKey: null},
                            ui: {
                                cellComponent: {
                                    cellComponentName: 'RowStartCell'
                                }
                            }
                        }
                    ]}
                    style={{
                        className: 'row'
                    }}
                    options={{
                        operationMode: 'ui.table',
                        row: rowIndex
                    }}
                />
            )
        }
        return gridCells
    }

    onScrollBarScroll(e) {
        console.log('e onScrollBarScroll', e)
        const scrollDirectionIsDown = e.deltaY > 0

        console.log('this.GridTableRef', this.GridTableRef)
        this.GridTableRef.current.dispatchEvent(new Event('scroll'))
        // const div = this.GridTableRef.current
        // div.scrollTop = div.scrollTop + 5
        this.GridTableRef.current.scrollTop = (scrollDirectionIsDown && this.GridTableRef.current.scrollTop + 5) || this.GridTableRef.current.scrollTop - 5
        // this.ScrollHandleRef.current.style.top = this.ScrollHandleRef.current.style.top + e.offsetY + 'px'
    }

    onScrollHandleMouseDown(e) {
        console.log('e onScrollHandleMouseDown', e)
    }

    onScrollBarMouseMove(e) {
        console.log('e onScrollBarMouseMove', e)
        console.log('this.ScrollHandleRef.current.style.top', this.ScrollHandleRef.current.style.top)
        // this.ScrollHandleRef.current.style.top = this.ScrollHandleRef.current.style.top + e.offsetY + 'px'
        const handle = document.getElementsByClassName('ScrollHandle')[0]
        console.log('handle', handle)
        console.log('newVal1', this.ScrollHandleRef.current.style.marginTop.slice(0, -2))
        console.log('newVal', parseFloat(this.ScrollHandleRef.current.style.marginTop.slice(0, -2)))
        const marginTop = parseInt(this.ScrollHandleRef.current.style.marginTop.slice(0, -2) || 0) + parseInt(e.offsetY)
        console.log('marginTop', marginTop)
        this.ScrollHandleRef.current.style.top = marginTop + 'px'
        //handle.style.marginTop = marginTop + 'px'
    }

    componentDidMount() {
        console.log('GridTable componentDidMount()')
        this.ScrollBarRef.current.addEventListener('wheel', this.onScrollBarScroll.bind(this), false)
        this.ScrollHandleRef.current.addEventListener('mousedown', this.onScrollHandleMouseDown.bind(this), false)
        this.ScrollBarRef.current.addEventListener('mousemove', this.onScrollBarMouseMove.bind(this), false)
    }

    componentWillMount() {
        console.log('GridTable componentWillMount()')
    }

    render() {
        console.log('GridTable render()')
        return (
            <ScrollContainerStyled className="ScrollContainer" ref={this.ScrollContainerRef}>
                <GridTableStyled
                    ref={this.GridTableRef}
                    className="GridTable"
                    onMouseOver={e => {
                        const address = e.target.getAttribute('address') || ''
                        if (address.startsWith('Cell')) {
                            this.lastHoveredRow && this.lastHoveredRow.classList.remove('active')
                            this.currentHoveredRow = document.querySelector(`.row[address="${address.slice(0, -3)}"]`)
                            this.currentHoveredRow && this.currentHoveredRow.classList.add('active')
                            this.lastHoveredRow = this.currentHoveredRow
                        }
                    }}
                    onScroll={e => {
                        console.log('scroll', e.target.scrollTop, window.scrollY)
                        const el = document.querySelector('.Cell[address="Cell.GridTable.PersonList.body.r00"]')
                        // console.log('el', el)
                        // this.setState({scrollPosition: e.target.scrollTop})
                    }}
                >
                    {this.props.dna.config.columns.map((column, colIndex) => {
                        console.log('column', column)
                        return (
                            <Cell
                                key={column.name}
                                address={`Cell.${this.props.dna.meta.name}.head.r0.c${colIndex}`}
                                instanceType={column.cell.meta.instanceType || this.props.dna.meta.instanceType}
                                data={column.name}
                                components={[
                                    {
                                        db: {dataKey: null},
                                        ui: {
                                            cellComponent: {
                                                cellComponentName: 'GridTableHeadCell'
                                            }
                                        }
                                    }
                                ]}
                                style={{className: 'head'}}
                                options={{
                                    operationMode: 'ui.table',
                                    row: 0,
                                    col: colIndex
                                }}
                            />
                        )
                    })}

                    <Cell
                        address={`Cell.${this.props.dna.meta.name}.head.r0`}
                        instanceType={this.props.dna.meta.instanceType}
                        data="TEST"
                        components={[
                            {
                                db: {dataKey: null},
                                ui: {
                                    cellComponent: {
                                        cellComponentName: 'RowStartCell'
                                    }
                                }
                            }
                        ]}
                        style={{className: 'head row'}}
                        options={{
                            operationMode: 'ui.table',
                            row: 0
                        }}
                    />

                    <Cell
                        key={`Cell.${this.props.dna.meta.name}.body.r00`}
                        address={`Cell.${this.props.dna.meta.name}.body.r00`}
                        instanceType={this.props.dna.meta.instanceType}
                        instanceId={null}
                        data={null}
                        components={[
                            {
                                db: {dataKey: null},
                                ui: {
                                    cellComponent: {
                                        cellComponentName: 'RowStartCell'
                                    }
                                }
                            }
                        ]}
                        style={{
                            className: 'row'
                        }}
                        options={{
                            operationMode: 'ui.table',
                            row: 0
                        }}
                    />

                    {this.renderGridCells()}
                </GridTableStyled>
                <div className="ScrollBar" ref={this.ScrollBarRef}>
                    <div className="ScrollHandle" ref={this.ScrollHandleRef} style={{position: 'relative'}} />
                </div>
            </ScrollContainerStyled>
        )
    }
}

export default GridTable

/**
 * data: [
 {
     name: 'Patrick Mualaba',
     firstName: 'Patrick',
     lastName: 'Mualaba',
     hasHomeAddressGeoLocation: {
         street: 'Gevaertstraat 25',
         zipCode: '1800',
         city: 'Vilvoorde',
         country: 'BE'
     }
 },



 tableId: 'CustomerList',
 tableName: 'Klanten',
 tableName_nl_NL: 'Klanten',
 tableName_fr_FR: 'Clients',
 tableName_en_GB: 'Customers',
 columns: [
 {
     name: 'Voornaam',
     name_nl_NL: 'Voornaam',
     name_fr_FR: 'Prénom',
     name_en_GB: 'Firstname',
     cell: {
         meta: {
            address: "package.core.identity.documents.home.layouts.BaseLayout.blocks.GridTable.PersonList.cell",
            instanceType: "package.core.identity:Identity",
            options: {
                width: 100,
                clickable: true,
                clickAction: '',
                customClass: '',
                cellComponentName: 'TextInputCell'
            }
         }
        styles: {},
        components: [
            {
                db: {
                    dataType: 'string|*|range|default',
                    dataKeys: {dbData: 'firstName'}
                }
                ui: {
                    cellComponent: {}
                    elementComponent: {}
                }

            }
        ]
     }
 },
 {
     name: 'Naam',
     name_nl_NL: 'Naam',
     name_fr_FR: 'Nom',
     name_en_GB: 'Last name',
     cellProps: {
         sortable: false,
         clickable: false,
         clickAction: '',
         customClass: '',
         cellComponentName: 'TextInputCell'
     },
     cellComponentProps: {
         dataType: 'string|*|range|default',
         dataKeys: {dbData: 'lastName'}
     }
 },
 {
     name: 'Email',
     name_nl_NL: 'Email',
     name_fr_FR: 'Email',
     name_en_GB: 'Email',
     cellProps: {
         sortable: false,
         clickable: false,
         clickAction: '',
         customClass: '',
         cellComponentName: 'TextInputCell'
     },
     cellComponentProps: {
         dataType: 'string|*|range|default',
         dataKeys: {dbData: 'email'}
     }
 },
 {
     name: 'Telefoon',
     name_nl_NL: 'Telefoon',
     name_fr_FR: 'Téléphone',
     name_en_GB: 'Phone',
     cellProps: {
         sortable: false,
         clickable: false,
         clickAction: '',
         customClass: '',
         cellComponentName: 'TextInputCell'
     },
     cellComponentProps: {
         dataType: 'string|*|range|default',
         dataKeys: {dbData: 'phone'}
     }
 },

 */
