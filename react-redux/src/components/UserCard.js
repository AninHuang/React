import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

const Avatar = styled.img`
  height: 100px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
`;

export default ({ user }) => (
  <Container>
    <Avatar src={user.avatar_url} alt="avatar" />
    <Info>
      <span>使用者名稱：{user.login}</span>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a>
    </Info>
  </Container>
);
