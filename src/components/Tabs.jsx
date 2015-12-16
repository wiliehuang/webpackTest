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
import TableContainer from './TableContainer.jsx';
import Grid from './Grid.jsx';
import Checkbox from 'material-ui/lib/checkbox';
import DataPreview from './TableData.jsx';
import RaisedButton from 'material-ui/lib/raised-button';
import CardText from 'material-ui/lib/card/card-text';
import CardActions from 'material-ui/lib/card/card-actions';
import {Link} from 'react-router';

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
            <Tab label="Flash Update" value="1" />
            <Tab label="Stats" value="0" />
            <Tab label="About" value="2" />
          </Tabs>

          <SwipeableViews index={this.state.slideIndex} onChangeIndex={this._handleChangeIndex.bind(this)}>
            <div style={styles.slide}>
              <Card style={{

                  maxWidth: 1280,
                  margin: '30px auto',
                  padding: 30
                }}>
              <h2 style={styles.headline}>CFL Stats</h2>

              <TableContainer />


            </Card>

            </div>
            <div style={styles.slide}>
              <Card style={{

                  maxWidth: 1000,
                  margin: '30px auto',
                  padding: 30
                }}>
                <h2 style={styles.headline}>Game Moments</h2>

                <Checkbox
                  name="SubscribeBox"
                  value="checkboxValue2"
                  label="Subscribe to Events"
                  defaultChecked={true}/>

                <Grid />
              </Card>

              <Slider name="slider0" defaultValue={0.5} />

            </div>
            <div style={styles.slide}>
              <Card>
                <CardText>
                  The CFL data provided are used to display corresponding events for a specific game.
                  The related GIF serve as a source for event promotion and potential future monetization.
                  For further information regarding this technology, click the about button below.
                </CardText>
                <CardActions>
                  <Link to="about">
                    <RaisedButton label="About" primary={true} />
                  </Link>
              </CardActions>

              </Card>

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
