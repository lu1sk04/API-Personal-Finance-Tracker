import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Get()
  findAll(): any {
    return this.expensesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): any {
    return this.expensesService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any): any {
    return this.expensesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any): any {
    return this.expensesService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string): any {
    return this.expensesService.remove(Number(id));
  }
}
