import { ProductService } from './product.service';
import { GetAllProductDto } from './dto/get-all-product.dto';
import { ProductDto } from './product.dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getAll(queryDto: GetAllProductDto): Promise<{
        products: {
            name?: string;
            createdAt?: Date;
            updatedAt?: Date;
            reviews?: import(".prisma/client").Review[];
            id?: number;
            category?: import(".prisma/client").Category;
            description?: string;
            price?: number;
            images?: string[];
            categoryId?: number;
            slug?: string;
            userId?: number;
            orderItems?: import(".prisma/client").OrderItem[];
            _count?: import(".prisma/client").Prisma.ProductCountOutputType;
        }[];
        length: number;
    }>;
    getSimilar(id: string): Promise<Error | {
        name?: string;
        createdAt?: Date;
        updatedAt?: Date;
        reviews?: import(".prisma/client").Review[];
        id?: number;
        category?: import(".prisma/client").Category;
        description?: string;
        price?: number;
        images?: string[];
        categoryId?: number;
        slug?: string;
        userId?: number;
        orderItems?: import(".prisma/client").OrderItem[];
        _count?: import(".prisma/client").Prisma.ProductCountOutputType;
    }[]>;
    create(): Promise<import(".prisma/client").Product>;
    delete(id: string): Promise<import(".prisma/client").Product>;
    update(id: string, dto: ProductDto): Promise<import(".prisma/client").Product>;
    bySlug(slug: string): Promise<{
        name?: string;
        createdAt?: Date;
        updatedAt?: Date;
        reviews?: import(".prisma/client").Review[];
        id?: number;
        category?: import(".prisma/client").Category;
        description?: string;
        price?: number;
        images?: string[];
        categoryId?: number;
        slug?: string;
        userId?: number;
        orderItems?: import(".prisma/client").OrderItem[];
        _count?: import(".prisma/client").Prisma.ProductCountOutputType;
    }>;
    byId(id: string): Promise<{
        name?: string;
        createdAt?: Date;
        updatedAt?: Date;
        reviews?: import(".prisma/client").Review[];
        id?: number;
        category?: import(".prisma/client").Category;
        description?: string;
        price?: number;
        images?: string[];
        categoryId?: number;
        slug?: string;
        userId?: number;
        orderItems?: import(".prisma/client").OrderItem[];
        _count?: import(".prisma/client").Prisma.ProductCountOutputType;
    }>;
    byCategory(category: string): Promise<{
        name?: string;
        createdAt?: Date;
        updatedAt?: Date;
        reviews?: import(".prisma/client").Review[];
        id?: number;
        category?: import(".prisma/client").Category;
        description?: string;
        price?: number;
        images?: string[];
        categoryId?: number;
        slug?: string;
        userId?: number;
        orderItems?: import(".prisma/client").OrderItem[];
        _count?: import(".prisma/client").Prisma.ProductCountOutputType;
    }[]>;
}
