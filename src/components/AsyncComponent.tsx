import React from 'react';
import LoadingPage from './LoadingPage/LoadingPage';

export default function asyncComponent(getComponent: () => Promise<React.ComponentType>) {
  class AsyncComponent extends React.Component {
    static Component: any = null;
    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then((Component: React.ComponentType) => {
          AsyncComponent.Component = Component;
          this.setState({ Component });
        });
      }
    }
    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />;
      }
      return <LoadingPage />;
    }
  }
  return AsyncComponent;
}
