import React, { Component, PropTypes } from 'react';
import { findDOMNode, render } from 'react-dom';

// Propagates context to children
class FrameContent extends Component {
  static childContextTypes = {
    dragDropManager: PropTypes.object.isRequired
  };

  getChildContext() {
    return this.props.context;
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default class Frame extends Component {
  render() {
    return <iframe></iframe>;
  }

  static contextTypes = {
    dragDropManager: PropTypes.object.isRequired
  };

  renderContent() {
    const { body } = findDOMNode(this).contentDocument;

    // To avoid React warning when rendering into document.body
    body.innerHTML = '<div></div>';

    // Passing context as a property otherwise it will be lost
    render(
      <FrameContent context={this.context}>
        {this.props.children}
      </FrameContent>,
      body.firstChild
    );

    const { dragDropManager } = this.context;

    dragDropManager.backend.addEventListeners(body);
  }

  componentDidMount() {
    this.renderContent();
  }

  componentDidUpdate() {
    this.renderContent();
  }

  componentWillUnmount() {
    const { body } = findDOMNode(this).contentDocument;

    unmountComponentAtNode(body);

    const { dragDropManager } = this.context;

    dragDropManager.backend.removeEventListeners(body);
  }
}
