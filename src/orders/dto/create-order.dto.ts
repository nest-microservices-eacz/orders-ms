import { OrderStatus } from '@prisma/client';
import { IsEnum, IsInt, IsNumber, IsOptional, IsPositive } from 'class-validator';
import { OrderStatusList } from '../enum/order';

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  totalAmount: number;

  @IsNumber()
  @IsPositive()
  @IsInt()
  totalItems: number;

  @IsEnum(OrderStatusList, {message: `Possible status values are ${OrderStatusList}`})
  @IsOptional()
  status: OrderStatus = OrderStatus.PENDING;

}
