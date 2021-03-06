import React from 'react';
import Message from './Message.jsx';
import Card from 'material-ui/lib/card/card';
import List from 'material-ui/lib/lists/list';

class MessageList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [
        'Addnna the phail Ko',
        'Phat Joe'
      ]
    };
  }

  render(){
    var messageNodes = this.state.messages.map((message)=> {
      return (
        <Message message={message} />
      );
    });

    return (
      <Card style={{
          flexGrow: 2,
          marginLeft: 30
        }}>
        <List>
          {messageNodes}
        </List>
      </Card>
    );
  }
}

export default MessageList;
