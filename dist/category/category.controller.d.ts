import { CategoryService } from './category.service';
import { CategoryDto } from './category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getAll(): Promise<{
        name?: string;
        createdAt?: Date;
        updatedAt?: Date;
        id?: number;
        slug?: string;
        _count?: import(".prisma/client").Prisma.CategoryCountOutputType;
        products?: import(".prisma/client").Product[];
    }[]>;
    update(dto: CategoryDto, id: string | number): Promise<import(".prisma/client").Category>;
    create(): Promise<import(".prisma/client").Category>;
    delete(id: string | number): Promise<import(".prisma/client").Category>;
    getById(id: string | number): Promise<{
        name?: string;
        createdAt?: Date;
        updatedAt?: Date;
        id?: number;
        slug?: string;
        _count?: import(".prisma/client").Prisma.CategoryCountOutputType;
        products?: import(".prisma/client").Product[];
    }>;
    getBySlug(slug: string): Promise<{
        name?: string;
        createdAt?: Date;
        updatedAt?: Date;
        id?: number;
        slug?: string;
        _count?: import(".prisma/client").Prisma.CategoryCountOutputType;
        products?: import(".prisma/client").Product[];
    }>;
}
