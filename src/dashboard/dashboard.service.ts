import { Injectable } from '@nestjs/common';
import { ExpensesService } from '../expenses/expenses.service';
import { IncomeService } from '../income/income.service';

@Injectable()
export class DashboardService {
  constructor(
    private readonly expensesService: ExpensesService,
    private readonly incomeService: IncomeService,
  ) {}

  getStats() {
    const expenses = this.expensesService.findAll();
    const incomes = this.incomeService.findAll();

    const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
    const totalIncome = incomes.reduce((sum, i) => sum + i.amount, 0);

    const balance = totalIncome - totalExpenses;

    return {
      totalIncome,
      totalExpenses,
      balance,
      numberOfExpenses: expenses.length,
      numberOfIncomes: incomes.length,
    };
  }
}
