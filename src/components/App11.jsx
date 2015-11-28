import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import mui from 'material-ui';
import AppBar from 'material-ui/lib/app-bar';
import BarChart from 'react-d3-components/lib/BarChart';
import BarChart1 from 'react-d3/barchart/BarChart';

// import Colors from 'material-ui/lib/styles/colors';
// import ThemeManager from 'material-ui/lib/styles/theme-manager';

// import ThemeManager from 'material-ui/lib/styles/theme-manager';
// import Colors from 'material-ui/lib/styles/colors';
// import AppBar from 'material-ui/lib/app-bar';
// import rawTheme1 from 'material-ui/lib/styles/themes/light-theme';
//import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

// const muiTheme = ThemeManager.modifyRawThemePalatte(ThemeManager.getMuiTheme(rawTheme1),{
//   primary1Color: Colors.blue500,
//   primary2Color: Colors.blue700,
//   primary3Color: Colors.blue100,
//   accent1Color: Colors.pink400
// });

var data = [
    {
    label: 'TA',
    values: [{x: 'teamA', y: 10}, {x: 'teamB', y: 4}, {x: 'teamC', y: 3}]
    },
    {
    label: 'TB',
    values: [{x: 'teamA', y: 6}, {x: 'teamB', y: 8}, {x: 'teamC', y: 5}]
    },
    {
    label: 'TC',
    values: [{x: 'teamA', y: 6}, {x: 'teamB', y: 8}, {x: 'teamC', y: 5}]
    }
];

class App extends React.Component {
  constructor(){
    super();

  }

  // static childContextTypes = {
  //   muiTheme: React.PropTypes.object
  // }
  //
  // getChildContext(){
  //   return {
  //     muiTheme: ThemeManager.getMuiTheme(MyRawTheme)
  //   }
  // }
  //var BarChart = Dthree.BarChart;



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
          fill={'#000000'}
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
