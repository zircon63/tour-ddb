import { ClientInterface } from '@backend/clients/client.interface';

export interface Client extends ClientInterface {
}

export function createClient(params: Partial<Client>) {
  return {} as Client;
}
