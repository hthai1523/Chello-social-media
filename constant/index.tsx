import { ChartColumnBig, Hourglass, Image, Mic, Radio, Video } from 'lucide-react';

const sidebarLinks = [
    {
        label: 'Home',
        imgUrl: '/icons/home.svg',
        route: '/',
    },
    {
        label: 'Notifications',
        imgUrl: '/icons/notification-new.svg',
        route: '/notifications',
    },
    {
        label: 'Messages',
        imgUrl: '/icons/messages.svg',
        route: '/messages',
    },
    {
        label: 'Bookmarks',
        imgUrl: '/icons/bookmark.svg',
        route: '/bookmarks',
    },
    {
        label: 'Lists',
        imgUrl: '/icons/unordered-list-outlined.svg',
        route: '/lists',
    },
    {
        label: 'Groups',
        imgUrl: '/icons/people-group.svg',
        route: '/groups',
    },
    {
        label: 'Subscriptions',
        imgUrl: '/icons/subscriptions.svg',
        route: '/subscriptions',
    },
    {
        label: 'Add Card',
        imgUrl: '/icons/ic_twotone-add-card.svg',
        route: '/addCard',
    },
    {
        label: 'My Profile',
        imgUrl: '/icons/user-favorite.svg',
        route: '/profile',
    },
    {
        label: 'More',
        imgUrl: '/icons/more-circle-32-regular.svg',
        route: '/more',
    },
    {
        label: 'Private Event',
        imgUrl: '/icons/calendar-x.svg',
        route: '/privateEvent',
    },
];

const routes = [
    {
        path: '/postImage',
        label: 'postImage',
        icon: <Image size={20} className="" color="#a8a8a8" />,
    },
    {
        path: '/postVideo',
        label: 'postVideo',
        icon: <Video size={20} className="" color="#a8a8a8" />,
    },
    {
        path: '/record',
        label: 'record',
        icon: <Mic size={20} className="" color="#a8a8a8" />,
    },
    {
        path: '/postSurvey',
        label: 'postSurvey',
        icon: <ChartColumnBig size={20} className="" color="#a8a8a8" />,
    },
    {
        path: '/postLater',
        label: 'postLater',
        icon: <Hourglass size={20} className="" color="#a8a8a8" />
    },
    {
        path: '/postRadio',
        label: 'postRadio',
        icon: <Radio size={20} className="" color="#a8a8a8" />
    },
];

const listNotifications = [
    'All',
    'Subscriptions',
    'Payments',
    'Tips',
    'Followers',
    'Fans',
    'Likes',
    'Comments',
    'Mentions',
    'Campaigns',
]

export { sidebarLinks, routes, listNotifications };
