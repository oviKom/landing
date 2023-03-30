import { SyntheticEvent } from "react";

export const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent> | undefined, sectionId: string) => {
    event?.preventDefault();
    const sectionElement: HTMLElement | null = document.getElementById(sectionId);

    if (sectionElement === null) return;

    setTimeout(() => {
        //sectionElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
        window.scrollTo({ top: sectionElement.offsetTop, behavior: 'smooth' })
    }, 1);
}