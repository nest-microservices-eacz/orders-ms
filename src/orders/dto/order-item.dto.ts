import { IsInt, IsNumber, IsPositive } from 'class-validator';

export class OrderItemDto {
  @IsInt()
  @IsPositive()
  productId: number;

  @IsInt()
  @IsPositive()
  quantity: number;

  @IsNumber({ maxDecimalPlaces: 4 })
  @IsPositive()
  price: number;
}
