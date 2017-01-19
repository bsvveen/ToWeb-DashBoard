
import React, { PropTypes }  from 'react';
import Tile from './Tile';

class Column extends React.Component {

  static propTypes = {      
    tiles: PropTypes.arrayOf(PropTypes.object).isRequired,
    moveTile: PropTypes.func.isRequired  
  } 

  render() { 
    return ( 
      <div className="column">
         {this.props.tiles.map((tile) => <Tile key={tile.key} tile={tile} moveTile={this.props.moveTile} />)}
      </div>  
    )  
  }
}

export default Column;