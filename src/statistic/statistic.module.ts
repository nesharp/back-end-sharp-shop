import { Module } from '@nestjs/common'
import { StatisticService } from './statistic.service'
import { StatisticController } from './statistic.controller'
import { PrismaService } from '../prisma.service'
import { UserService } from '../../dist/user/user.service'

@Module({
	controllers: [StatisticController],
	providers: [StatisticService, PrismaService]
})
export class StatisticModule {}
