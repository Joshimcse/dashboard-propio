import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome} from '@fortawesome/free-solid-svg-icons'

library.add(faHome)

const App = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
}

export default App;

