import { ArrowTrendingUpIcon, BellIcon, CalendarDaysIcon, ChatBubbleLeftRightIcon, ClockIcon, CursorArrowRaysIcon, DocumentIcon, PencilSquareIcon, PhotoIcon, TableCellsIcon, TruckIcon } from '@heroicons/react/24/outline'
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
        icon: <ArrowTrendingUpIcon className={iconClassName} />,
        title: "Hiányzási/mulasztási napló",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon: <CursorArrowRaysIcon className={iconClassName} />,
        title: "Szakvélemény kiállítás",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
]