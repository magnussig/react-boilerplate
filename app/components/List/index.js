import React from 'react';
import PropTypes from 'prop-types';

import Ul from './Ul';
import Wrapper from './Wrapper';

function List(props) {
  const ComponentToRender = props.component;
  let content = <div />;

  // If we have items, render them
  if (props.items) {
    content = props.items.map(item => (
      <ComponentToRender
        key={`item-${item.id}`}
        item={item}
        selectItem={props.selectItem}
        isTeam={props.isTeam}
      />
    ));
  } else {
    // Otherwise render a single component
    content = <ComponentToRender />;
  }

  return (
    <Wrapper>
      <Ul>{content}</Ul>
    </Wrapper>
  );
}

List.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array,
  selectItem: PropTypes.func,
  isTeam: PropTypes.bool,
};

export default List;
