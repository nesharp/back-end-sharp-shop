import { Prisma } from '@prisma/client'
export const returnReviewObject: Prisma.ReviewSelect = {
	user: {
		select: {
			id: true,
			name: true,
			avatarPath: true
		}
	},
	createdAt: true,
	updatedAt: true,
	text: true,
	rating: true
}
