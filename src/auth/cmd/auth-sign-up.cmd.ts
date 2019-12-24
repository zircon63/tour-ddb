import { UserInterface } from '../../users/user.interface';

export class AuthSignUpCmd implements UserInterface {
  public login: string;
  public password: string;

  constructor(data: UserInterface) {
    Object.assign(this, data);
  }
}
