import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {browserHistory} from 'react-router'
import Root from './Root'
import configureStore from './stores/configureStore'
import RedBox from 'redbox-react'

const rootEl = document.getElementById('app');
const store = configureStore(window.__INITIAL_STATE__)

render(
    <AppContainer errorReporter={RedBox}>
        <Root store={store} history={browserHistory}/>
    </AppContainer>,
    rootEl
);

if (module.hot) {
    console.log("hot.....")
    /**
     * Warning from React Router, caused by react-hot-loader.
     * The warning can be safely ignored, so filter it from the console.
     * Otherwise you'll see it every time something changes.
     * See https://github.com/gaearon/react-hot-loader/issues/298
     */
    const orgError = console.error; // eslint-disable-line no-console
    console.error = (message) => { // eslint-disable-line no-console
        if (message && message.indexOf('You cannot change <Router routes>;') === -1) {
            // Log the error as normally
            orgError.apply(console, [message]);
        }
    };

    module.hot.accept('./Root', () => {
        // If you use Webpack 2 in ES modules mode, you can
        // use <App /> here rather than require() a <NextApp />.
        const NextApp = require('./Root').default;
        render(
            <AppContainer errorReporter={Redbox}>
                <NextApp store={store} history={browserHistory}/>
            </AppContainer>,
            rootEl
        )
    });
}