import { Module } from '@nestjs/common'
import { PaginationService } from './pagination.service'
import { PaginationController } from './pagination.controller'
import { PrismaService } from '../prisma.service'

@Module({
	controllers: [PaginationController],
	providers: [PaginationService, PrismaService],
	exports: [PaginationService]
})
export class PaginationModule {}
