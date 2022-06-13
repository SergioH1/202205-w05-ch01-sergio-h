import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './app/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { gotReducer } from './reducer/got-reducer';
import { Provider } from 'react-redux';

const container = document.getElementById('root')!;
const root = createRoot(container);

const store = configureStore({
    reducer: gotReducer,
});
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
