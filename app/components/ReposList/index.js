import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import TeamListItem from 'containers/TeamListItem';

function ReposList({ loading, error, repos, onSelectTeam, isTeam }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (repos !== false) {
    return (
      <List
        items={repos}
        component={TeamListItem}
        selectItem={onSelectTeam}
        isTeam={isTeam}
      />
    );
  }

  return null;
}

ReposList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  repos: PropTypes.any,
  onSelectTeam: PropTypes.any,
  isTeam: PropTypes.bool,
};

export default ReposList;
