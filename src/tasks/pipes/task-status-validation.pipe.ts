import { BadRequestException, PipeTransform } from '@nestjs/common';
import { taskStatusArray } from '../task-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowStatuses = taskStatusArray;

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`"${value}" is an invalid status`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    const idx = this.allowStatuses.indexOf(status);
    return idx !== -1;
  }
}
