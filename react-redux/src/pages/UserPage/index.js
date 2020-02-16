import React from 'react';
import { connect } from 'react-redux';
import UserCard from '../../components/UserCard';

const UserPage = ({ users }) => {
  if (!users || users.length === 0) return <div>無資料</div>;

  return users.map(user => (
    <UserCard user={user} key={user.node_id} />
  ));
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  null
)(UserPage);
