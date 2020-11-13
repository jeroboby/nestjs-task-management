import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { TaskStatus, taskStatusArray } from './../task.model';

export class GetTaskFilterDto {
  @IsOptional()
  @IsIn(taskStatusArray)
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
