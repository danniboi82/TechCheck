import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
  subheader: {
    fontSize: '50px',
    color: 'black', 
    padding: '50px 0',
    backgroundColor: 'red',
    textAlign: 'center'
  }
};

const dummyData = [
  {
    img: 'https://cdn.mos.cms.futurecdn.net/QSjwpofL4v2VgLvWaJWAhH.jpg',
    title: 'Video Card',
    author: '$10~500',
  },
  {
    img: 'https://a1.amlimg.com/MjJjODViYzNjMDFhYWFmODc2MmQzMjg5ZWQ0MDkyZGFivKkjqS15m5jyjDw7G-15aHR0cDovL21lZGlhLmFkc2ltZy5jb20vNTM4OWY0NzA0NjE1NzI2YTBjOGNjMmVmN2I3OTZkZWQ3NzMwYTJhYWVkOTgwYTI3YmRiNmM0NjY4NGNhOWJiZS5qcGd8fHx8fHw3MDB4NDYyfGh0dHA6Ly93d3cuYWR2ZXJ0cy5pZS9zdGF0aWMvaS93YXRlcm1hcmsucG5nfHx8.jpg',
    title: 'Mother Boards',
    author: '$10~200',
  },
  {
    img: 'https://images.techhive.com/images/article/2013/06/e3_2013_pc_gaming_slideshow_15_amd_rig-100041976-orig.jpg',
    title: 'Desktops',
    author: '$150~2000',
  },
  {
    img: 'http://hexus.net/media/uploaded/2016/1/02ad96e3-9802-47cf-bb97-93e4e7185e16.png',
    title: 'Peripherals',
    author: '$5~300',
  },
  {
    img: 'http://img.hexus.net/v2/qotw/gamingmice.jpg',
    title: 'Gaming Mouse',
    author: '$5~50',
  },
  {
    img: 'http://www.corsair.com/~/media/02C9A29302A447B89AF4BEBD0D3638BE.ashx?w=700',
    title: 'Full Systems',
    author: '$200~3500',
  },
  {
    img: 'https://venturebeat.com/wp-content/uploads/2017/06/omen_17_coreset_rearquarter.jpg?fit=578%2C491&strip=all',
    title: 'Laptops',
    author: '$200~4000',
  },
  {
    img: 'https://i.pinimg.com/736x/97/9b/ec/979beca61b0a01017aeabb94d6ddf5e5--console-gaming.jpg',
    title: 'Game Consoles',
    author: '$25~400',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const productCard = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
      cols={4}
    >
      <Subheader style={styles.subheader}>Search Results</Subheader>
      {dummyData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>Price Range<b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} alt='Searched Products'/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default productCard;