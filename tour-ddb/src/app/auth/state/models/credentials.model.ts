export interface ICredentials {
  email: string;
  password: string;
}

export class Credentials implements ICredentials {
  email: string;
  password: string;

  constructor(data: ICredentials) {
    this.email = data.email;
    this.password = data.password;
  }
}
