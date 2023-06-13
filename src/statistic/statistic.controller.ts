import { Controller } from '@nestjs/common'
import { StatisticService } from './statistic.service'
import { PrismaService } from '../prisma.service'
import { UserService } from '../user/user.service'

@Controller('statistic')
export class StatisticController {}
