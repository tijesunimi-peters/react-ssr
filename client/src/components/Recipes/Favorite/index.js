import React from 'react';
import FavoriteContainer from './FavoriteContainer';

/**
 * @class
 * @name FavoriteComponent
 * @description Renders the FavoriteContainer and also manages clicks on the favorite icon
 * @prop {boolean} paint for filling the svg or making it white
 * @prop {number} count: number of previous favorites. Increases on first click and decreases on second click
 */
export default class Favorite extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paint: false,
      count: this.props.count || 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * @method Favorite.handleClick
   * @description Favorites and Unfavorites a recipe being in the scenario of a logged in User
   */
  handleClick() {
    this.setState(({ count, paint }) => ({
      count: paint ? count - 1 : count + 1,
      paint: !paint,
    }));
  }

  render() {
    return (
      <FavoriteContainer
        count={this.state.count}
        paint={this.state.paint}
        onClick={this.handleClick}
      />
    );
  }
}
