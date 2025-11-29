import { Injectable, NotFoundException } from '@nestjs/common';

interface Expense {
  id: number;
  title: string;
  amount: number;
  date: string;
  category?: string;
}

@Injectable()
export class ExpensesService {
  private expenses: Expense[] = [];
  private currentId = 1;

  findAll() {
    return this.expenses;
  }

  findOne(id: number) {
    const expense = this.expenses.find((e) => e.id === id);
    if (!expense) {
      throw new NotFoundException('Expense not found');
    }
    return expense;
  }

  create(data: Omit<Expense, 'id'>) {
    const newExpense: Expense = {
      id: this.currentId++,
      ...data,
    };
    this.expenses.push(newExpense);
    return newExpense;
  }

  update(id: number, data: Partial<Expense>) {
    const expense = this.findOne(id);
    Object.assign(expense, data);
    return expense;
  }

  remove(id: number) {
    const index = this.expenses.findIndex((e) => e.id === id);
    if (index === -1) {
      throw new NotFoundException('Expense not found');
    }
    const deleted = this.expenses[index];
    this.expenses.splice(index, 1);
    return deleted;
  }
}
