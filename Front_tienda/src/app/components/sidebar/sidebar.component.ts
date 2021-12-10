import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Inicio',
    rtlTitle: 'لوحة القيادة',
    icon: 'icon-basket-simple',
    class: ''
  },
  {
    path: '/login',
    title: 'Inicio de sesión',
    rtlTitle: 'الرموز',
    icon: 'icon-badge',
    class: ''
  },
  {
    path: '/user',
    title: 'Usuarios',
    rtlTitle: 'ملف تعريفي للمستخدم',
    icon: 'icon-single-02',
    class: ''
  },
  {
    path: '/clientes',
    title: 'Clientes',
    rtlTitle: 'ملف تعريفي للمستخدم',
    icon: 'icon-satisfied',
    class: ''
  },
  {
    path: '/productos',
    title: 'Productos',
    rtlTitle: 'الرموز',
    icon: 'icon-paper',
    class: ''
  },
  {
    path: '/icons',
    title: 'Icons',
    rtlTitle: 'الرموز',
    icon: 'icon-atom',
    class: ''
  },
  {
    path: '/ventas',
    title: 'Ventas',
    rtlTitle: 'LasVentas',
    icon: 'icon-basket-simple',
    class: '' },
  {
    path: '/notifications',
    title: 'Notifications',
    rtlTitle: 'إخطارات',
    icon: 'icon-bell-55',
    class: ''
  },
  {
    path: '/consolidado',
    title: 'Consolidado',
    rtlTitle: '',
    icon: 'icon-bell-55',
    class: ''
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
