import React, { Fragment } from 'react';

const Scroll = (props) => (
  <div style={{ overflowY: 'scroll', border: '1px solid black', height: '83vh' }}>
    {props.children}

  </div>
);

export default Scroll;