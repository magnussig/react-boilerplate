/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {
  makeSelectRepos,
  makeSelectUsers,
  makeSelectLoading,
  makeSelectAllTeams,
} from 'containers/App/selectors';
import H1 from 'components/H1';
import LoadingIndicator from 'components/LoadingIndicator';
import { loadUsers } from '../App/actions';
import reducer from '../App/reducer';
import saga from './saga';

export class FeaturePage extends React.Component {
  componentDidMount() {
    const { match, getUser } = this.props;
    if (match && match.params) {
      const id = match.params.userId;
      getUser(id);
    }
  }

  render() {
    const { users, loading, allTeams } = this.props;

    if (loading) {
      return <LoadingIndicator />;
    }
    if (users === null) return null;
    return (
      <div>
        <Helmet>
          <title>User info</title>
        </Helmet>
        <H1>{users.username} user info</H1>
        <p>
          The users real name is: {users.name}
          <br />
        </p>
        {users && allTeams && (
          <div>
            <h2>{users.username} teams:</h2>
              <ul>
              {users.member_teams.map(m => (
                <li key={m}>{allTeams.find(t => m === t.id).name}</li>
              ))}
            </ul>
            {users.lead_teams.length !== 0 && (
                <div>
                <h2>{users.username} is team lead in:</h2>
                <ul>
                  {users.lead_teams.map(m => (
                    <li key={m}>{allTeams.find(t => m === t.id).name}</li>
                  ))}
                </ul>
              </div>
              )}
          </div>
        )}
      </div>
    );
  }
}

FeaturePage.propTypes = {
  users: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  match: PropTypes.object,
  loading: PropTypes.bool,
  allTeams: PropTypes.array,
  getUser: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    getUser: userId => dispatch(loadUsers(userId)),
  };
}

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
  info: makeSelectRepos(),
  allTeams: makeSelectAllTeams(),
  loading: makeSelectLoading(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'app', reducer });
const withSaga = injectSaga({ key: 'feature', saga });

export default compose(
  withReducer,
  withConnect,
  withSaga,
)(FeaturePage);
