import { RocketLaunchIcon } from "@heroicons/react/24/outline";

const iconClassName = 'w-7 h-7';

export const SOLUTIONS = [
    {
        icon: <RocketLaunchIcon className={iconClassName} />,
        title: 'Közösség',
        description: 'Légy aktív tagja egy kiterjedt óvodai/iskolai közösségnek és élvezd ki az információ dinamikus áramlását.'
    },
    {
        icon: <RocketLaunchIcon className={iconClassName} />,
        title: 'Funkcionalitás',
        description: 'A Buborékom mindkét felhasználói oldalra nagy hangsúlyt fektet, így is elősegítve a gyermek intézményi ügyeinek intézését.'
    },
    {
        icon: <RocketLaunchIcon className={iconClassName} />,
        title: 'Felhasználóbarát',
        description: 'A Buborékom applikáció fejlesztésénél nagy figyelmet fordítunk a felhasználói élmény megteremtésére, hogy ne csak gyors és funkcionális, de élvezhető is legyen az ügyintézés.'
    },
]