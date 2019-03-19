import React from 'react';
import Loader from '../../../shared/Loader';
import Container from '../../../shared/Container';
import RecipeItem, { RecipeItemSkeleton } from './RecipeItem';
import styled from 'styled-components';

export const RecipesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class Recipes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      loading: true,
      error: false,
    };

    this.renderSkeleton = this.renderSkeleton.bind(this);
    this.renderRecipes = this.renderRecipes.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
  }

  componentDidMount() {
    this.getRecipes();
  }

  async getRecipes() {
    await fetch(
      'https://s3-eu-west-1.amazonaws.com/frontend-dev-test/recipes.json',
      {
        mode: 'cors',
        method: 'get',
        cache: 'default',
      }
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ recipes: data, loading: false, error: false });
      })
      .catch(_ => {
        this.setState({ loading: false, error: true });
      });
  }

  renderSkeleton() {
    return (
      <Container>
        <h1 className="skeleton square" style={{ marginBottom: '20px' }} />
        <RecipesContainer className="recipes-container">
          <RecipeItemSkeleton />
          <RecipeItemSkeleton />
        </RecipesContainer>
      </Container>
    );
  }

  renderError() {
    if (this.state.error) return <h3>Could not load recipes</h3>;
    if (this.state.recipes.length === 0) return <h3>No Recipes</h3>;
  }

  renderRecipes() {
    const isError = this.state.error || this.state.recipes.length === 0;

    return (
      <Container>
        <h1>Recipes</h1>
        {!isError ? (
          <RecipesContainer>
            {this.state.recipes.map(recipe => {
              return <RecipeItem key={recipe.id} data={recipe} />;
            })}
          </RecipesContainer>
        ) : (
          this.renderError()
        )}
      </Container>
    );
  }

  render() {
    return (
      <Loader
        mounted={!this.state.loading}
        render={this.renderRecipes}
        skeleton={this.renderSkeleton}
      />
    );
  }
}

export default Recipes;
