import TableView from './TableView.jsx';
import React from 'react';



class TableContainer extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
	var dataset =
	  	{
	  		columns: [
          "details",
          "down",
          "game id",
          "id",
          "time"
	  		],
	  		data: CFLData
	  	};


  	return <TableView x={1} data={dataset.data} columns={dataset.columns} />
  }
}

export default TableContainer;
