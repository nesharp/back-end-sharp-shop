import { Product } from '@prisma/client'
import { IsEmail, IsOptional, IsString } from 'class-validator'

export class userDto {
	@IsEmail()
	email: string

	@IsString()
	@IsOptional()
	password?: string

	@IsString()
	@IsOptional()
	name: string

	@IsString()
	@IsOptional()
	avatarPath: string

	@IsString()
	@IsOptional()
	phone?: string
}
