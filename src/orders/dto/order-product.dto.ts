import { IsNumber } from 'class-validator';

export class OrderProductDTO {
  @IsNumber()
  id: number;
  @IsNumber()
  amount: number;
}
