import { BellIcon, CalendarDaysIcon, ChatBubbleLeftRightIcon, ClockIcon, DocumentIcon, PencilSquareIcon, PhotoIcon, TableCellsIcon, TruckIcon } from '@heroicons/react/24/outline'
const iconClassName = 'w-7 h-7 text-black';
export const FUNCTIONS = [
    {
        icon: <CalendarDaysIcon className={iconClassName} />,
        title: "Naptár",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon: <BellIcon className={iconClassName} />,
        title: "Hírdetőtábla",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon: <PhotoIcon className={iconClassName} />,
        title: "Képtár",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon: <DocumentIcon className={iconClassName} />,
        title: "Dokumentumtár",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon: <TableCellsIcon className={iconClassName} />,
        title: "Beosztások kezelése",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon: <ChatBubbleLeftRightIcon className={iconClassName} />,
        title: "Üzenetek",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon: <ClockIcon className={iconClassName} />,
        title: "Időpontfoglalás",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon: <PencilSquareIcon className={iconClassName} />,
        title: "Igényfelmérések",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon: <TruckIcon className={iconClassName} />,
        title: "Ételrendelés",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
]