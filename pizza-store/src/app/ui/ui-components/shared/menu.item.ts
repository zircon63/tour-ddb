import { Role } from '@backend/users/user-role.enum';

export interface MenuItem {
  link: string;
  title: string;
  icon: string;
  roles?: Role[];
}
