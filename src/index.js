import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import Images from './components/Images'
import Pokemons from './components/Pokemons'

const app = (
  <div>
    <style type="text/css">{`
      body {
        background-color: #242424;
        margin: 0;
        font-family: menlo, "andale mono", "courier new", system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }
    `}</style>

    <HashRouter>
      <Switch>
        <Redirect exact from='/' to='/images' />
        <Route exact path='/images' component={Images} />
        <Route exact path='/pokemons' component={Pokemons} />
      </Switch>
    </HashRouter>
  </div>
)

ReactDOM.render(app, document.querySelector('#app'))