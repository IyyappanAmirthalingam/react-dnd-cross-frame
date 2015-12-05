import React, { Component } from 'react';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend/src';
import Dustbin from './Dustbin';
import Box from './Box';
import Frame from './Frame';

@DragDropContext(HTML5Backend)
export default class App extends Component {
  render() {
    return (
      <div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Frame>
            <Dustbin />
          </Frame>
        </div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Box name='Glass' />
          <Box name='Banana' />
          <Box name='Paper' />
        </div>
      </div>
    );
  }
}
