import React from 'react';
import Loader from '../../../shared/Loader';
import RecipeItem, { RecipeItemSkeleton } from './RecipeItem';
import styled from 'styled-components';

const RecipesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class Recipes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      loading: true,
    };

    this.renderSkeleton = this.renderSkeleton.bind(this);
    this.renderRecipes = this.renderRecipes.bind(this);
  }

  componentDidMount() {
    fetch('https://s3-eu-west-1.amazonaws.com/frontend-dev-test/recipes.json', {
      mode: 'cors',
      method: 'get',
      cache: 'default',
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ recipes: data, loading: false });
      });
  }

  renderSkeleton() {
    return (
      <RecipesContainer className="recipes-container">
        <RecipeItemSkeleton />
        <RecipeItemSkeleton />
      </RecipesContainer>
    );
  }

  renderRecipes() {
    if (this.state.recipes.length === 0) return <h3>No Recipes</h3>;

    return (
      <RecipesContainer>
        {this.state.recipes.map(recipe => {
          return <RecipeItem key={recipe.id} data={recipe} />;
        })}
      </RecipesContainer>
    );
  }

  render() {
    if (this.state.loading) return this.renderSkeleton();

    return (
      <>
        <h1>Recipes</h1>
        <Loader
          mounted={!this.state.loading}
          render={this.renderRecipes}
          skeleton={this.renderSkeleton}
        />
      </>
    );
  }
}

export default Recipes;
