import React from 'react';

//Import statements:
const Table = require('material-ui/lib/table/table');
const TableBody = require('material-ui/lib/table/table-body');
const TableFooter = require('material-ui/lib/table/table-footer');
const TableHeader = require('material-ui/lib/table/table-header');
const TableHeaderColumn = require('material-ui/lib/table/table-header-column');
const TableRow = require('material-ui/lib/table/table-row');
const TableRowColumn = require('material-ui/lib/table/table-row-column');


  
class TableView extends React.Component {
  constructor(props){
    super(props);
  }

	_renderColumnHeaders() {
		return (<TableRow>
			{this.props.columns.map(x => <TableHeaderColumn key={x}>{x}</TableHeaderColumn>)}
		</TableRow>);
  	}

  	_renderCells(row) {
  		let cells = []
		for (var k in row) {
			cells.push(<TableRowColumn>{row[k]}</TableRowColumn>)
		}

		return cells;
  	}
  	_renderRow(row) {
  		return (
		<TableRow>
			{this._renderCells(row)}
	    </TableRow>);
  	}

	_renderBody() {
		return (
		  	<TableBody
			    deselectOnClickaway={true}
			    showRowHover={true}
			    stripedRows={true}>

			    {this.props.data.map(x => this._renderRow(x))}

		    </TableBody>

		);
  	}


  render(){
    return(
      <div>
      	<Table
		  fixedHeader={true}
		  fixedFooter={true}
		  selectable={true}
		  multiSelectable={false}>
		  <TableHeader enableSelectAll={false}>
		      {this._renderColumnHeaders()}
		  </TableHeader>
		  {this._renderBody()}
		  <TableFooter>
		    <TableRow>
		      <TableRowColumn>ID</TableRowColumn>
		      <TableRowColumn>Name</TableRowColumn>
		      <TableRowColumn>Status</TableRowColumn>
		    </TableRow>
		    <TableRow>
		      <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
		        Super Footer
		      </TableRowColumn>
		    </TableRow>
		  </TableFooter>
		  </Table>
	  </div>
    );
  }

}

export default TableView;
