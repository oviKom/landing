import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout: React.FC = (): ReactElement => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;
