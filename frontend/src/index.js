import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import store from "./store/store"
import { Provider } from 'react-redux';
import {SkeletonTheme} from "react-loading-skeleton";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SkeletonTheme baseColor="#FFFFFF" highlightColor="#F1F1F1">
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </SkeletonTheme>
);