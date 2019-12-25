import * as crypto from 'crypto';

export function generateHash(value: string, salt: string): string {
  return crypto.createHash('md5')
    .update(value + salt)
    .digest('base64');
}

export function hashEqual(value: string, salt: string, hash: string): boolean {
  return this.generateHash(value, salt) === hash;
}
