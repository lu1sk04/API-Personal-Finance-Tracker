import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpensesModule } from './expenses/expenses.module';
import { IncomeModule } from './income/income.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [ExpensesModule, IncomeModule, DashboardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
