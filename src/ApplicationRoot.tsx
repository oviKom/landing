import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout';
import NoMatch from './components/layout/NoMatch';

const ApplicationRoot = (): ReactElement => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout />}>
                <Route index element={<div>{'home'}</div>} />
                <Route path={'*'} element={<NoMatch />} />
            </Route>
        </Routes>
    );
};

export default ApplicationRoot;
