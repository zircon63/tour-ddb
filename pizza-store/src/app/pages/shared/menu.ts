import { MenuItem } from '@ui/ui-components/shared/menu.item';
import { Role } from '@backend/users/user-role.enum';

export const MENU: MenuItem[] = [
  {
    title: 'Главная',
    link: '',
    icon: 'home',
  },
  {
    title: 'Админ-панель',
    link: 'admin-panel',
    icon: 'apps',
    roles: [Role.Admin],
  },
  {
    title: 'Каталог',
    link: 'products',
    icon: 'collections',
  },
  {
    title: 'Заказы',
    link: 'orders',
    icon: 'shopping_basket',
    roles: [Role.Buyer],
  },
];
