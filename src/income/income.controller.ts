import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { IncomeService } from './income.service';
import type { Income } from './income.entity';

@Controller('income')
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}

  @Get()
  getAll() {
    return this.incomeService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.incomeService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any) {
    return this.incomeService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.incomeService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incomeService.remove(Number(id));
  }
}
