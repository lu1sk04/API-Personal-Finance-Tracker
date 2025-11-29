import { Injectable } from '@nestjs/common';
import { Income } from './income.entity';

@Injectable()
export class IncomeService {
  private incomes: Income[] = [];
  private currentId = 1;

  findAll(): Income[] {
    return this.incomes;
  }

  findOne(id: number): Income | null {
    return this.incomes.find((i) => i.id === id) || null;
  }

  create(data: any): Income {
    const newIncome: Income = {
      id: this.currentId++,
      title: data.title,
      amount: data.amount,
      date: data.date,
    };

    this.incomes.push(newIncome);
    return newIncome;
  }

  update(id: number, data: any): Income | null {
    const index = this.incomes.findIndex((i) => i.id === id);
    if (index === -1) return null;

    this.incomes[index] = { ...this.incomes[index], ...data };
    return this.incomes[index];
  }

  remove(id: number): boolean {
    const index = this.incomes.findIndex((i) => i.id === id);
    if (index === -1) return false;

    this.incomes.splice(index, 1);
    return true;
  }
}
