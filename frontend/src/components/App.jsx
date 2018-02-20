import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Editor from './Editor'
import Snippet from './Snippet'
import NotFound from './NotFound'

// new snnipet => <Link />でいい
// snippet list
// snippet preview
// snippet pagination
const App = () => (
  <Router>
    <div className="app">
      <Header />
      <p>Hello</p>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new" component={Editor} />
        <Route path="/:snippetId" component={Snippet} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </Router>
)

export default App
