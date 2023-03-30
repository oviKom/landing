import { ReactElement } from "react";
import FacebookSVG from "../components/atoms/FacebookSVG";
interface ContactInterface {
    email: string;
    socials: SocialsInterface[];
}

interface SocialsInterface {
    icon: ReactElement;
    url: string;
}

export const CONTACTS: ContactInterface[] = [
    {
        email: 'gyurinadhazy@gmail.com',
        socials: [
            {
                icon: <FacebookSVG />,
                url: 'https://www.facebook.com/gyurinadhazy'
            }
        ]
    }
];