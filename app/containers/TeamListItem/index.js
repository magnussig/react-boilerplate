/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import IssueIcon from './IssueIcon';
import IssueLink from './IssueLink';
import RepoLink from './RepoLink';
import Wrapper from './Wrapper';

export class TeamListItem extends React.PureComponent {
  render() {
    const { item, match, selectItem, isTeam } = this.props;
    const link = isTeam ? `/user/${item.id}` : `/team/${item.name}`;
    // Put together the content of the repository
    const content = (
      <Wrapper>
        <RepoLink to={link} onClick={() => selectItem(item.id)} value={item.id}>
          {item.name}
        </RepoLink>
        <IssueLink href="https://www.theverge.com/" target="_blank">
          <IssueIcon />
          <FormattedNumber value={match ? match.params.teamId : 69} />
        </IssueLink>
      </Wrapper>
    );

    // Render the content into a list item
    return <ListItem key={`repo-list-item-${item.full_name}`} item={content} />;
  }
}

TeamListItem.propTypes = {
  item: PropTypes.object,
  match: PropTypes.object,
  selectItem: PropTypes.func,
  isTeam: PropTypes.bool,
};

export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser(),
  }),
)(TeamListItem);
