import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Provider} from "react-redux";
import store from "./store/store";
import { GoogleOAuthProvider } from '@react-oauth/google';
import {CLIENT_ID} from "./common/data/googleAuth";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <GoogleOAuthProvider
                clientId={CLIENT_ID}
            >
                <App/>
            </GoogleOAuthProvider>
        </React.StrictMode>
    </Provider>,
)
