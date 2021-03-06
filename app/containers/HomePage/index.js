/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
  makeSelectTeam,
  makeSelectAllTeams,
  makeSelectAllUsers,
  makeSelectCurrTeamLead,
  makeSelectUsername,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import H3 from 'components/H3';
import A from 'components/A';
import InfoList from 'components/InfoList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadInfo, changeUsername } from '../App/actions';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load info
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, info, match, location, currTeamLead, username } = this.props;
    let { onSelectTeam } = this.props;
    const isTeam = location && location.pathname.includes('team');
    if (isTeam) onSelectTeam = () => {};
    const reposFiltered = (username === '' && !info) ?
      info : info.filter(r => r.name.toLowerCase().includes(username.toLowerCase()));

    return (
      <article>
        <Helmet>
          <title>Teams and users</title>
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.startProjectHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.startProjectMessage} />
            </p>
          </CenteredSection>
          <Section>
            <H2>
              {isTeam
                ? `Members of ${match.params.teamName}:`
                : 'Click Get teams to view all teams!'}
            </H2>
            {isTeam &&
              currTeamLead && <H3>Team lead is: {currTeamLead.name}</H3>}
            <Form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="username">
                <FormattedMessage {...messages.trymeMessage} />
                <AtPrefix>
                  <FormattedMessage {...messages.trymeAtPrefix} />
                </AtPrefix>
                <Input
                  id="username"
                  type="text"
                  placeholder="blablabla"
                  value={this.props.username}
                  onChange={this.props.onChangeUsername}
                />
                <A onClick={this.props.onSubmitForm}>Get teams</A>
              </label>
            </Form>
            <InfoList
              loading={loading}
              error={error}
              items={reposFiltered}
              onSelect={onSelectTeam}
              isTeam={isTeam} // TODO: change this to route
              location={location}
              match={match}
            />
          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  info: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
  onSelectTeam: PropTypes.func,
  onSelectUser: PropTypes.func,
  teamId: PropTypes.number,
  match: PropTypes.object,
  location: PropTypes.object,
  allTeams: PropTypes.array,
  allUsers: PropTypes.array,
  currTeamLead: PropTypes.object,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) =>
      dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadInfo(evt.target.value));
    },
    onSelectTeam: teamId => dispatch(loadInfo(teamId)),
  };
}

const mapStateToProps = createStructuredSelector({
  info: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  teamId: makeSelectTeam(),
  allTeams: makeSelectAllTeams(),
  allUsers: makeSelectAllUsers(),
  currTeamLead: makeSelectCurrTeamLead(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'feature', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
