import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatusList } from '../enum/order';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { OrderStatus } from '@prisma/client';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatusList, { message: `valid status are ${OrderStatusList}` })
  status: OrderStatus;
}
