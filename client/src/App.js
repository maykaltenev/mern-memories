import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route exact path="/" element={() => <Navigate to="/posts" />} />
          <Route exact path="/posts" element={<Home />} />
          <Route exact path="/posts/search?" element={<Home />} />
          <Route exact path="/posts/:id" element={<PostDetails />} />
          <Route exact path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </MuiThemeProvider>
  </BrowserRouter>
);

export default App;