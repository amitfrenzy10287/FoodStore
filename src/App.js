import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import StoreSettings from './containers/StoreSettings/StoreSettings'; 
import StoreSettingsView from './containers/StoreSettings/StoreSettingsView'; 

class App extends Component {

    render(){ 

    let routes = (
      <Switch>
        <Route path="/" exact component={StoreSettings} />
        <Route path="/StoreSettings" component={StoreSettings} />
        <Route path="/StoreSettingsView" component={StoreSettingsView} />
        <Redirect to="/" /> 
      </Switch>
    );  
    
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    ); 
  }
}

export default withRouter( App );
