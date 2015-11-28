import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import IconButton from 'material-ui/lib/icon-button';
import Slider from 'material-ui/lib/slider';
import Colors from 'material-ui/lib/styles/colors';
import Typography from 'material-ui/lib/styles/typography';
import Paper from 'material-ui/lib/paper';
import Tab from 'material-ui/lib/tabs/tab';
import Tabs from 'material-ui/lib/tabs/tabs';
import InjectTapEvent from 'react-tap-event-plugin';
import Card from 'material-ui/lib/card/card';


export default class TabsPage extends React.Component {

  constructor(props) {
    super(props);
    this._handleTabActive = this._handleTabActive.bind(this);
    this.state = {
      tabsValue: 'a',
      slideIndex: 0,
    };
  }

  render() {


      InjectTapEvent();

    let padding = 400;

    let styles = {
      contentContainerStyle: {
        marginLeft: -padding,
      },
      div: {
        position: 'absolute',
        left: 48,
        backgroundColor: Colors.cyan500,
        width: padding,
        height: 48,
      },
      headline: {
        fontSize: 24,
        lineHeight: '32px',
        paddingTop: 16,
        marginBottom: 12,
        letterSpacing: 0,
        fontWeight: Typography.fontWeightNormal,
        color: Typography.textDarkBlack,
      },
      iconButton: {
        position: 'absolute',
        left: 0,
        backgroundColor: Colors.cyan500,
        color: 'white',
        marginRight: padding,
      },
      iconStyle: {
        color: Colors.white,
      },
      tabs: {
        position: 'relative',
      },
      tabsContainer: {
        position: 'relative',
        paddingLeft: padding,
      },
      slide: {
        padding: 10,
      },
    };

    return (


<div>

          <Tabs onChange={this._handleChangeTabs.bind(this)} value={this.state.slideIndex + ''}>
            <Tab label="Tab One" value="0" />
            <Tab label="Tab Two" value="1" />
            <Tab label="Tab Three" value="2" />
          </Tabs>
          <SwipeableViews index={this.state.slideIndex} onChangeIndex={this._handleChangeIndex.bind(this)}>
            <div style={styles.slide}>
              <Card style={{

                  maxWidth: 500,
                  margin: '30px auto',
                  padding: 30
                }}>
              <h2 style={styles.headline}>Mercury!1!</h2>
              <p>
                details
              </p>

            </Card>

            </div>
            <div style={styles.slide}>
              <Card style={{

                  maxWidth: 1000,
                  margin: '30px auto',
                  padding: 30
                }}>
              <h2 style={styles.headline}>Mercury!!</h2>
              <p>
                details
              </p>

            </Card>

                  <Slider name="slider0" defaultValue={0.5} />

            </div>
            <div style={styles.slide}>
              AX
            </div>
          </SwipeableViews>
    </div>

    );
  }

  _handleChangeIndex(index) {
    this.setState({
      slideIndex: index,
    });
  }

  _handleChangeTabs(value) {
    this.setState({
      slideIndex: parseInt(value, 10),
    });
  }

  _handleButtonClick() {
    this.setState({tabsValue: 'c'});
  }

  _handleTabActive(tab) {
    this.props.history.pushState(null, tab.props.route);
  }

  _handleTabsChange(value, e, tab) {
    this.setState({tabsValue: value});
  }
}
