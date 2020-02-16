import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchUserData } from '../actions';
import Header from '../components/Header';
import Main from '../components/Main';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import UserPage from './UserPage';
import NotFoundPage from './NotFoundPage';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Container = styled.div`
  text-align: center;
`;

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
  });

  return (
    <Container>
      <GlobalStyle />
      <Router>
        <Header>
          <Link to="/">回首頁</Link>
          <Link to="/about">關於我</Link>
          <Link to="/user">用戶列表</Link>
        </Header>
        <Main padding={20}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/user" component={UserPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Main>
      </Router>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUserData())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
