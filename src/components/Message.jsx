import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';

class Message extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <ListItem
        leftAvatar={<Avatar src="http://www.fightgenossen.ch/scripts/toplist/images/medals/diamond_1.png" />}
        >{this.props.message}</ListItem>
    );
  }
}

export default Message;
