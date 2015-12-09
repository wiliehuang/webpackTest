import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import mui from 'material-ui';
import AppBar from 'material-ui/lib/app-bar';
import BarChart from 'react-d3-components/lib/BarChart';
import BarChart1 from 'react-d3/barchart/BarChart';
import Tab from './Tabs.jsx';
import TableContainer from './TableContainer.jsx';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import IconButton from 'material-ui/lib/icon-button';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';


class Grid extends React.Component {
  constructor(){
    super();

  }

  switchData(flag){
    if(flag){

    }
  }

  render(){

    let tilesData = [
          {
            img: 'http://blacksportsonline.com/home/wp-content/uploads/2014/09/cfl-goal-posts.gif',
            title: 'That hit',
            author: 'Fan1',
            featured: false,
          },
          {
            img: 'http://www.totalprosports.com/wp-content/uploads/2012/10/cfl-celebration.gif',
            title: 'Around the post',
            author: 'Fan2',
            featured: false,
          },
          {
            img: 'http://twitpic.com/show/thumb/czrppg.gif',
            title: 'The pull',
            author: 'Fan3',
          },
          {
            img: 'http://cdn0.vox-cdn.com/uploads/chorus_asset/file/368548/punttd.0.gif',
            title: 'Recovery',
            author: 'Fan4',
            featured: false,
          },
          {
            img: 'http://cdn.bleacherreport.net/social_assets/random/CFL/BigHit1.gif',
            title: 'Tackle one',
            author: 'Fan5',
          },
          {
            img: 'http://cdn.bleacherreport.net/social_assets/random/CFL/BigHit2.gif',
            title: 'Tackle two',
            author: 'Fan6',
          },

        ];

        let gradientBg = 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)';



    return(
      <div>

          {/* Grid list with all possible overrides */}
          <GridList
            cols={2}
            cellHeight={200}
            padding={1}
            style={{width: 920, height: 640, overflowY: 'auto'}}
            >
            {
              tilesData.map(tile => <GridTile
                title={tile.title}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                actionPosition="left"
                titlePosition="top"
                titleBackground={gradientBg}
                cols={tile.featured ? 2 : 1}
                rows={tile.featured ? 2 : 1}
                ><img src={tile.img} /></GridTile>)
              }
            </GridList>

          </div>

        );

      }

    }

    export default Grid;
