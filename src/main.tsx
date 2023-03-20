import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ApplicationRoot from './ApplicationRoot';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <ApplicationRoot />
        </BrowserRouter>
    </React.StrictMode>
);
