import React from 'react';
import Loader from '../../shared/Loader';
import styled from 'styled-components';
import HomepageBg from '../../homepage-bg.jpg';
import { Link } from 'react-router-dom';

const Banner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  flex-direction: column;
  padding: 20px;
  height: 50%;
  color: white;
  position: absolute;
  left: 0;
  align-items: center;

  h1 {
    font-size: 64px;
    margin-bottom: 20px;
    color: #91c11e;
  }
`;

const BannerWrapper = styled.div`
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: calc(100vh - 70px);
  overflow: hidden;
  position: relative;
`;

const BannerButton = styled(Link)`
  height: 50px;
  color: #91c11e;
  border: 1px solid #91c11e;
  background-color: white;
  display: inline-flex;
  min-width: 150px;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 4px;
`;

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
    };
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {
    return (
      <Loader
        mounted={this.state.mounted}
        render={() => (
          <BannerWrapper
            className="hf-wrapper"
            style={{ backgroundImage: `url(${HomepageBg})` }}>
            <div className="hf-container">
              <div className="row">
                <div className="col">
                  <Banner>
                    <h1 className="App-title">Welcome to HelloFresh</h1>
                    <p className="App-intro">
                      <BannerButton to="/recipes">
                        Click here to find amazing Recipes
                      </BannerButton>
                    </p>
                  </Banner>
                </div>
              </div>
            </div>
          </BannerWrapper>
        )}
      />
    );
  }
}
