import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <>
      <Container spacing={4}>
        <Typography component="div">
          <Header />
          <Main />
          <Footer />
        </Typography>
      </Container>
    </>
  );
}

export default App;
