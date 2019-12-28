import { ID } from '@datorama/akita';
import { Role } from '@backend/users/user-role.enum';

export interface IAccount {
  id: ID;
  login: string;
  roles: Role[];
}

export class Account implements IAccount {
  id: ID;
  login: string;
  roles: Role[];

  static empty(): Account {
    return new Account({
      id: -1,
      login: null,
      roles: [],
    });
  }

  constructor(data: IAccount) {
    Object.assign(this, data);
  }

  hasRole(role: Role) {
    return this.roles.includes(role);
  }
}
