export interface IAccount {
  id: number;
  login: string;
  name: string;
  surname: string;
  phone: string;
}

export class Account implements IAccount {
  id: number;
  login: string;
  name: string;
  phone: string;
  surname: string;

  static empty(): Account {
    return new Account({
      id: -1,
      login: null,
      name: null,
      phone: null,
      surname: null,
    });
  }

  constructor(data: IAccount) {
    Object.assign(this, data);
  }

}
