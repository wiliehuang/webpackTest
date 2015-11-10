import React from 'react';
import Channel from './Channel.jsx';
import Card from 'material-ui/lib/card/card';
import List from 'material-ui/lib/lists/list';

class ChannelList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      channels: [
        'Jr Troll',
        'Sr Troll'
      ]
    };
  }

  render(){
    var channelNodes = this.state.channels.map((channel)=> {
      return (
        <Channel channel={channel} />
      );
    });

    return (
      <Card style={{
          flexGrow: 1
        }}>
        <List>
          {channelNodes}
        </List>
      </Card>
    );
  }
}

export default ChannelList;
