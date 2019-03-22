import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="hf-wrapper">
          <div className="hf-container">
            <div className="skeleton intro square" />
            <br />
            <h4>Something went wrong. Please try again!</h4>
            <h1>{this.state.error.toString()}</h1>
            <a href="/recipes" style={{ color: 'green' }}>
              Go Back to Recipes
            </a>
            <br />
            <br />
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.info.componentStack}
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
