import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from '../redux/store';

import Index from "./Index";
import Salon from "./Salon/index";

const App = () => (
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/newgame" component={Salon} />
          <Route component={Index} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </AppContainer>
);

export default App;
