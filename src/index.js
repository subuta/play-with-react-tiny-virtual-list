import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import Images from './components/Images'
import Pokemons from './components/Pokemons'
import LoadMore from './components/LoadMore'

const app = (
  <div>

    { /*language=CSS*/ }
    <style type="text/css">{`
      body {
        background-color: #242424;
        margin: 0;
        font-family: menlo, "andale mono", "courier new", system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }

      footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 8px;
        background-color: white;
        color: #242424;
        text-align: right;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
      }

      img {
          max-width: 100vw;
      }

      .c-comment {
        margin: 8px 0 0;
      }

      .c-search-form {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 100;
        background-color: white;
        padding: 8px;
      }

      @media (min-width: 576px) {
        footer {
            padding: 8px 8px 32px;
            justify-content: space-between;
        }

        img {
          max-width: initial;
        }

        .c-credits {
          margin: 0;
        }
      }
    `}</style>

    <HashRouter>
      <Switch>
        <Redirect exact from='/' to='/images' />
        <Route exact path='/images' component={Images} />
        <Route exact path='/pokemons' component={Pokemons} />
        <Route exact path='/load-more' component={LoadMore} />
      </Switch>
    </HashRouter>
  </div>
)

ReactDOM.render(app, document.querySelector('#app'))