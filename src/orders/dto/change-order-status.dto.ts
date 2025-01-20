import { OrderStatus } from '@prisma/client';
import { IsEnum, IsUUID } from 'class-validator';
import { OrderStatusList } from '../enum/order';

export class ChangeOrderStatusDto {
  @IsEnum(OrderStatusList, { message: `Valid values are ${OrderStatusList}` })
  status: OrderStatus;

  @IsUUID()
  id: string;
}
