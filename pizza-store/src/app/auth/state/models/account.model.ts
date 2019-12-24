import { ID } from '@datorama/akita';

export interface IAccount {
  id: ID;
  name: string;
  surname: any;
  email: string;
  phone: any;
  birth_day: any;
  role_id: number;
  token: string | null;
}

export class Account implements IAccount {
  birth_day: any;
  email: string;
  id: ID;
  name: string;
  phone: any;
  role_id: number;
  surname: any;
  token: string | null;

  static empty(): Account {
    return new Account({
      birth_day: null,
      email: '',
      id: -1,
      name: '',
      phone: '',
      role_id: -1,
      surname: '',
      token: 'zxc',
    });
  }

  constructor(data: IAccount) {
    this.birth_day = data.birth_day;
    this.email = data.email;
    this.id = data.id;
    this.name = data.name;
    this.phone = data.phone;
    this.role_id = data.role_id;
    this.surname = data.surname;
    this.token = data.token;
  }
}
