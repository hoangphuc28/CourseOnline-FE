interface Subcategory {
    id: string;
    name: string;
    categoryId: string;
}

interface Category {
    id: string;
    name: string;
    subcategories?: Subcategory[];
}