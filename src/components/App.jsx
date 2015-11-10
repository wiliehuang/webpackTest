import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import mui from 'material-ui';
import AppBar from 'material-ui/lib/app-bar';

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
    </div>

    );

  }

}

export default App;
