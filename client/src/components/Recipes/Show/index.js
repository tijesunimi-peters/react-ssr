import React from 'react';
import styled from 'styled-components';
import Container from '../../../shared/Container';
import PropTypes from 'prop-types';
import { durationParser } from '../../../../../utils/timeParser';
import { Rating } from '../Rating/RecipeRating';
import Loader from '../../../shared/Loader';

const IngredientImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ececec;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (min-width: 600px) {
    width: 70px;
    height: 70px;
  }
`;

const RecipeImage = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const SpacedDescription = styled.div`
  margin-top: ${props => (props.normal ? 'unset' : '20px')};
  padding-top: ${props => (props.normal ? 'unset' : '20px')};
  padding-left: 15px;
  padding-right: 15px;
  border-top: ${props =>
    props.normal ? 'unset' : '1px solid rgb(247, 246, 244)'};
  flex: ${props => (props.flex1 ? 1 : 2)};
`;

const RelativeContainer = styled(Container)`
  position: relative;
  min-height: 350px;
  padding-bottom: 50px;
  border: solid 1px #f7f6f4;
  z-index: 100;
`;

const Pairs = styled.div`
  box-sizing: border-box;
  flex-basis: auto;
`;

const Title = styled.div`
  font-weight: bold;

  h4 {
    font-size: 24px;
  }
`;
const Value = styled.div`
  display: flex;
  justify-content: ${props => (props.left ? 'flex-start' : 'flex-end')};
  color: #343434;
`;

const WhiteSpacedCol = styled(SpacedDescription)`
  padding: 20px 30px;

  @media screen and (min-width: 769px) {
    margin-right: 15px;
    margin-left: 15px;

    &:last-child {
      margin-right: auto;
    }

    &:first-child {
      margin-left: auto;
    }
  }
`;

const StyledRating = styled(Rating)`
  margin-left: unset;
  margin: 20px 0;
`;

const IngredientText = styled.p`
  font-size: 14px;
  margin-right: 5px;
`;

export const RecipeSkeleton = () => {
  return (
    <>
      <div className="hf-wrapper mod-relative">
        <div className="skeleton square recipe-image-wrapper" />
      </div>
      <div className="hf-wrapper">
        <div className="hf-container mod-small white padded recipe-description">
          <div className="row">
            <div className="col mod-margin">
              <h1 className="skeleton square" />
              <h4 className="skeleton square small" />
            </div>
            <div className="col mod-margin">
              <div className="skeleton square" />
            </div>
          </div>
          <div className="row">
            <div className="col mod-margin">
              <h1 className="skeleton square" />
              <h4 className="skeleton square small" />
            </div>
            <div className="col mod-margin">
              <div className="skeleton square" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Ingredient = ({ thumb, text }) => {
  const textParts = text.trim().split(' ');
  const firstPart = textParts.slice(0, 2).join(' ');
  const remainigParts = textParts.slice(2).join(' ');
  return (
    <Pairs className="row pair ingredient">
      <Title className="col lean mod-margin">
        <IngredientImage style={{ backgroundImage: `url(${thumb})` }} />
      </Title>
      <Value className="col lean column ingredient" left>
        <IngredientText>{firstPart}</IngredientText>
        <IngredientText>{remainigParts}</IngredientText>
      </Value>
    </Pairs>
  );
};

export const RecipeContainer = props => {
  const {
    calories,
    ingredients,
    headline,
    description,
    difficulty,
    image,
    name,
    rating,
    favorites,
    fats,
    carbos,
    proteins,
    thumb,
    time,
  } = props;

  return (
    <>
      <div className="hf-wrapper mod-relative">
        <div className="recipe-image-wrapper">
          <RecipeImage src={image} />
        </div>
      </div>
      <RelativeContainer className="mod-small white padded recipe-description">
        <div className="row">
          <SpacedDescription className="col column" normal>
            <h1>{name}</h1>
            <h4>{headline}</h4>
            <StyledRating normal rating={rating || 0} starSize="24" label />
          </SpacedDescription>
          <SpacedDescription className="col" flex1 normal>
            <Pairs className="row pair">
              <Value className="col">{favorites}</Value>
            </Pairs>
          </SpacedDescription>
        </div>
        <div className="row">
          <SpacedDescription className="col">
            <p>{description}</p>
          </SpacedDescription>
          <SpacedDescription className="col column" flex1>
            <Pairs className="row pair">
              <Title className="col">Preparation Time</Title>
              <Value className="col">{durationParser(time)}</Value>
            </Pairs>
            <Pairs className="row pair">
              <Title className="col">Cooking Difficulty</Title>
              <Value className="col">Level {difficulty}</Value>
            </Pairs>
          </SpacedDescription>
        </div>
      </RelativeContainer>
      <RelativeContainer className="mod-small">
        <div className="row top-align">
          <WhiteSpacedCol className="col white" normal>
            <Pairs className="row pair">
              <Title className="col">
                <h4>Ingredients</h4>
              </Title>
            </Pairs>
            <div className="row no-column">
              {ingredients.map((ingredient, index) => {
                return (
                  <div
                    className="col half-basis no-column"
                    key={`${ingredient.replace(/\s/g, '_')}_${index}`}>
                    <Ingredient text={ingredient} thumb={thumb} />
                  </div>
                );
              })}
            </div>
          </WhiteSpacedCol>
          <WhiteSpacedCol className="col white column" flex1 normal>
            <Pairs className="row pair">
              <Title className="col">
                <h4>Nutrition Values</h4>
              </Title>
              <Value className="col">/per serving</Value>
            </Pairs>
            {calories && (
              <Pairs className="row pair">
                <Title className="col">Energy (kJ)</Title>
                <Value className="col">{calories}</Value>
              </Pairs>
            )}
            {carbos && (
              <Pairs className="row pair">
                <Title className="col">Carbohydrate</Title>
                <Value className="col">{carbos}</Value>
              </Pairs>
            )}
            {fats && (
              <Pairs className="row pair">
                <Title className="col">Fats</Title>
                <Value className="col">{fats}</Value>
              </Pairs>
            )}
            {proteins && (
              <Pairs className="row pair">
                <Title className="col">Proteins</Title>
                <Value className="col">{proteins}</Value>
              </Pairs>
            )}
          </WhiteSpacedCol>
        </div>
      </RelativeContainer>
    </>
  );
};

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = { mounted: false };
  }

  componentDidMount() {
    if (this.props.id == undefined) {
      throw new Error('Could not find Recipe!');
    } else {
      this.setState({ mounted: true });
    }
  }

  render() {
    return (
      <Loader
        mounted={this.state.mounted}
        skeleton={() => <RecipeSkeleton />}
        render={() => <RecipeContainer {...this.props} />}
      />
    );
  }
}

RecipeContainer.propTypes = {
  calories: PropTypes.string,
  carbos: PropTypes.string,
  description: PropTypes.string.isRequired,
  difficulty: PropTypes.number,
  favorites: PropTypes.number,
  headline: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number,
  thumb: PropTypes.string,
  time: PropTypes.string,
};

Recipe.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Recipe;
