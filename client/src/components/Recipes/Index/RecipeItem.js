import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { RecipeItemContainer, RecipeItemSkeleton } from './RecipeItemContainer';

export const RecipeWrapper = styled.div`
  width: 270px;
  margin-bottom: 25px;
  margin-right: 10px;
  min-height: 289px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);

  &:last-child {
    margin-right: unset;

    @media screen and (min-width: 769px) {
      margin-right: auto;
    }
  }
`;

class RecipeItem extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();

    this.state = {
      recipe: this.props.data,
      inView: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.inView = this.inView.bind(this);
  }

  inView() {
    const boundlingClient = this.ref.current.getBoundingClientRect();

    return (
      boundlingClient.top >= 0 &&
      boundlingClient.left >= 0 &&
      boundlingClient.right <=
        (window.innerWidth || document.documentElement.clientWidth) &&
      boundlingClient.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  handleScroll() {
    requestAnimationFrame(() => {
      if (!this.state.inView && this.inView()) {
        this.setState({ inView: true });
      }
    });
  }

  componentDidMount() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    if (!this.state.recipe) return <RecipeItemSkeleton />;

    return (
      <RecipeWrapper ref={this.ref}>
        {!this.state.inView ? (
          <RecipeItemSkeleton />
        ) : (
          <RecipeItemContainer recipe={this.state.recipe} />
        )}
      </RecipeWrapper>
    );
  }
}

RecipeItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default RecipeItem;
