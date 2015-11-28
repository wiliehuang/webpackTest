import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import mui from 'material-ui';
import AppBar from 'material-ui/lib/app-bar';
import BarChart from 'react-d3-components/lib/BarChart';
import BarChart1 from 'react-d3/barchart/BarChart';
import Tab from './Tabs.jsx';


class App extends React.Component {
  constructor(){
    super();

  }

  render(){
    return(
      <div>
        <Tab />
      </div>

    );

  }

}

export default App;
