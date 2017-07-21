import {  RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'داشبورد',  icon: 'dashboard', class: '' },
    { path: 'user-profile', title: 'پروفایل اشخاص',  icon:'person', class: '' },
    { path: 'table-list', title: 'اسناد',  icon:'content_paste', class: '' },
    { path: 'typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: 'icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: 'maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: 'upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];
