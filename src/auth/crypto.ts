import * as crypto from 'crypto';

export function generateHash(value: string): string {
  return crypto.createHash('md5')
    .update(value)
    .digest('base64');
}

export function hashEqual(value: string, hash: string): boolean {
  return this.generateHash(value) === hash;
}
