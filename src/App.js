import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import Landing from './pages/Landing'

import * as routes from './constant_routes'

function AppLayout(props) {
  return (
    <Layout.Content style={{
      padding: 24,
      margin: 0,
      minHeight: 280,
    }}>
      {props.children}
    </Layout.Content>
  )
}

AppLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

function App() {
  return (
    <>
      <DocumentTitle title='FreeFood@MIT'>
        <>
          <Helmet>
            <meta name='description' content='Finding food at MIT–made easier.' />
          </Helmet>
          <Switch>
            <Route name='landing' exact path={routes.LANDING} render={() => <AppLayout> <Landing /> </AppLayout>} />
            <Route name='food-entry' path={routes.FOOD_ENTRY} />
          </Switch>
        </>
      </DocumentTitle>
    </>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWithRouter;
