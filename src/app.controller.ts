import { Body, Controller, Get, Param } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}
	@Get('hello/:name')
	getHello(@Param('name') name: string): string {
		return this.appService.getHelloByName(name)
	}
	@Get()
	getBaseHello(): string {
		return this.appService.getHello()
	}
}
