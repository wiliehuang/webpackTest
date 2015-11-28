import TableView from './TableView.jsx';
import React from 'react';


class TableContainer extends React.Component {
  constructor(){
    super();

  }

  render() {
	var dataset = 
	  	{
	  		columns: [
	  			'team',
	  			'sacks',
	  			'rushingYards'
	  		],
	  		data: [
	  			{
	  				team: 'BC',
	  				sacks: 10,
	  				rushingYards: 1750
	  			},
	  			{
	  				team: 'Sask',
	  				sacks: 30,
	  				rushingYards: 2500
	  			},
	  			{
	  				team: 'Ottawa',
	  				sacks: 10,
	  				rushingYards: 2000
	  			}  			
	  		]
	  	};


  	return <TableView x={1} data={dataset.data} columns={dataset.columns} />
  }
}

export default TableContainer;
