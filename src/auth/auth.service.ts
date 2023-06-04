import { Injectable, BadRequestException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { authDto } from './auth.dto'
import { faker } from '@faker-js/faker'
import { hash } from 'argon2'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
	constructor(private prisma: PrismaService, private jwt:JwtService) {}
	async register(dto: authDto) {
		const oldUser = await this.prisma.user.findUnique({
			where: {
				email: dto.email
			}
		})
		if (oldUser) {
			throw new BadRequestException('User already exists')
		}

		const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                name: faker.name.firstName(),
                avatarPath: faker.image.avatar(),
                phone: faker.phone.number("+38(###)###-##-##").toString(),
                password: await hash(dto.password)

            }
        })
        return user
    }
    
    private async issueTokens(userId: number) {
        const data = { id: userId }

        // const accessToken = this.JwtService.sign(data, {})
    }

}
