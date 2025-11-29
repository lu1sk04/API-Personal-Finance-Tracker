import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { ExpensesModule } from '../expenses/expenses.module'; 
import { IncomeModule } from '../income/income.module';

@Module({
  imports: [ExpensesModule, IncomeModule],
  controllers: [DashboardController],
  providers: [DashboardService]
})
export class DashboardModule {}
