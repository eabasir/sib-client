import {RouteInfo} from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {path: 'dashboard', title: 'داشبورد', icon: 'dashboard', class: ''},
  {path: 'user-profile', title: 'پروفایل اشخاص', icon: 'person', class: ''},
  {path: 'document', title: 'اسناد', icon: 'content_paste', class: ''},
  {path: 'statistics', title: 'آمار', icon: 'library_books', class: ''},
  {path: 'reports', title: 'گزارش ها', icon: 'report', class: ''},
  {path: 'charts', title: 'نمودار ها', icon: 'insert_chart', class: ''},
  // { path: 'test', title: 'تست',  icon:'location_on', class: '' },
  {path: 'about', title: 'درباره سیب', icon: 'unarchive', class: 'active-pro'},
];
