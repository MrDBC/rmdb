import React from 'react';
//styles
import { GlobalStyle } from './GlobalStyle';

//components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import Login from './components/Login';

//context
import UserProvider from './context';

//routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => (
  <Router >
    <UserProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </UserProvider>
  </Router>
);

//header is going to be displayed in both the home page and the individual movie page,
//thats why we are placing Route
export default App;
