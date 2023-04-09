import { ReactElement } from "react";
import { MenuElementInterface } from "../../utils/interfaces";
import { scrollToSection } from "../../utils/scrollToSection";

interface NavbarInterface {
    menuElements: MenuElementInterface[],
    className?: string,
    ulClassName?: string,
}

const Navbar: React.FC<NavbarInterface> = ({
    menuElements, className, ulClassName
}: NavbarInterface): ReactElement => {
    return (
        <nav className={className}>
            <ul className={ulClassName}>
                {
                    menuElements.map(element => {
                        return (
                            <li key={element.id}>
                                <a href="#" onClick={(event) => scrollToSection(event, `${element.id}-section`)}>
                                    {element.title}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
};

export default Navbar;
