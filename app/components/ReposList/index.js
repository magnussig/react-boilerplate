import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import TeamListItem from 'containers/TeamListItem';

function ReposList({ loading, error, items, onSelect, isTeam }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (items !== false) {
    return (
      <List
        items={items}
        component={TeamListItem}
        selectItem={onSelect}
        isTeam={isTeam}
      />
    );
  }

  return null;
}

ReposList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  items: PropTypes.any,
  onSelect: PropTypes.any,
  isTeam: PropTypes.bool,
};

export default ReposList;
