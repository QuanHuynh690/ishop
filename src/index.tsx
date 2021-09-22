import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
// import Main from './pages/Main';
// import Register from './pages/Register'
// import Login from './pages/Login'
// import * as serviceWorker from './serviceWorker';
// import ProductDetail from './pages/ProductDetail'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import dataProduct from './product.json';
import LoadingComponent from './components/LoadingComponent'

import './scss/fontawesome-all.min.scss'
import './scss/index.scss'
import { ThemeProvider } from '@material-ui/core';
import { muiTheme } from './theme';
export const ThemeContext = React.createContext('light');
const MainPage = React.lazy(() => import('./pages/Main'));
const LoginPage = React.lazy(() => import('./pages/Login'));
const RegisterPage = React.lazy(() => import('./pages/Register'));
const DetailPage = React.lazy(() => import('./pages/ProductDetail'));
const StorePage = React.lazy(() => import('./pages/Store'));
const CameraPage = React.lazy(() => import('./pages/Camera'));
Sentry.init({
  dsn: "https://1cbe78c6c5104852a5c18c3c87174338@o718327.ingest.sentry.io/5780730",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
const client = new ApolloClient({
  uri: 'https://graphql-smartchoice.herokuapp.com/',
  cache: new InMemoryCache()
});
ReactDOM.render(
  <ThemeProvider theme={muiTheme}>
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Router>
        <React.Suspense fallback={<LoadingComponent />}>
          <ThemeContext.Provider value='darkgrey'>

            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/store" component={StorePage} />
              <Route exact path="/store/camera" component={CameraPage} />
              <Route exact path="/store/:slug" component={DetailPage} />
              {/* <Route exact path='/'>
            <Main />
          </Route>

          <Route exact path='/(login|dang-nhap)'>
            <Login />
          </Route>

          <Route exact path='/register'>
            <Register />
          </Route>

          <Route exact path='/productdetail/:id'>
            <ProductDetail />
          </Route> */}

              {/* <Route 
            exact 
              path='/productdetail/:id' 
              render={(props:any)=>{
                console.log("props.match",props.match.params.id)
                const product = dataProduct.data.find(elm=> elm.id == props.match.params.id)
                console.log('product',product)
                if (!product){
                  return <h1>404 KO TIM THAY SAN PHAM</h1>
                }
                return <ProductDetail name={product.name} price={product.price} priceMax={product.priceMax}/>}
            } 
          /> */}

              <Route path='*'>
                <div>404</div>
              </Route>
            </Switch>

          </ThemeContext.Provider>
        </React.Suspense>
      </Router>
    </React.StrictMode>
  </ApolloProvider>
  </ThemeProvider >
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();