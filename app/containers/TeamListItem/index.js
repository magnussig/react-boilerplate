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
    const { item, match } = this.props;

    // Put together the content of the repository
    const content = (
      <Wrapper>
        <RepoLink href={`/${item.id}`}>{`Team name: ${item.name}`}</RepoLink>
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
};

export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser(),
  }),
)(TeamListItem);
