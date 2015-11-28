import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import mui from 'material-ui';
import AppBar from 'material-ui/lib/app-bar';
import BarChart from 'react-d3-components/lib/BarChart';
import BarChart1 from 'react-d3/barchart/BarChart';



class App extends React.Component {
  constructor(){
    super();

  }

  render(){
    return(
      <div>
        <AppBar title="Troll Levels" />
        <div style={{
            display: 'flex',
            flexFlow: 'row wrap',
            maxWidth: 1200,
            width: '100%',
            margin: '30px auto 30px'
          }}>
        <ChannelList />
        <MessageList />
        </div>
        <MessageBox />



      <BarChart
        style={{
            flexGrow: 1,
            marginLeft: 130
          }}
          data={data}
          width={400}
          height={400}
          fill='#bd6c35'
          margin={{top: 10, bottom: 50, left: 50, right: 10}}/>

        <BarChart1
          data={data}
          width={500}
          height={200}
          fill='#000000'
          title='Bar Chart'
          yAxisLabel='Label'
          xAxisLabel='Value'
          margin={{top: 10, bottom: 50, left: 50, right: 10}}
          />

    </div>

    );

  }

}

export default App;
