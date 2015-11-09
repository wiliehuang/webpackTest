import React from 'react';
import Message from './Message.jsx'

class MessageList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [
        'test11 from es1XT webpack',
        'test11 complete'
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
      <div>{messageNodes}</div>
    );
  }
}

export default MessageList;
