export interface ProductVariant {
    size: string
    stock: number
}

export interface Product {
    kode_brg: string
    nama: string
    harga_modal: number
    harga_jual: number
    kategori: string
    variants: ProductVariant[]
}

// Helper function to generate size variants based on category
const generateSizeVariants = (category: string): ProductVariant[] => {
    switch (category) {
        case 'baju anak':
            return ['NB', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map(size => ({
                size,
                stock: Math.floor(Math.random() * 10) + 1
            }));
        case 'baju dewasa':
            return ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map(size => ({
                size,
                stock: Math.floor(Math.random() * 10) + 1
            }));
        case 'celana anak':
            return Array.from({ length: 23 }, (_, i) => i + 2).map(size => ({
                size: size.toString(),
                stock: Math.floor(Math.random() * 10) + 1
            }));
        case 'celana dewasa':
            return Array.from({ length: 15 }, (_, i) => i + 26).map(size => ({
                size: size.toString(),
                stock: Math.floor(Math.random() * 10) + 1
            }));
        default:
            return [];
    }
};

export const products: Product[] = [
    {
        kode_brg: 'A1',
        nama: 'Batik Motif Pekalongan',
        harga_modal: 50000,
        harga_jual: 70000,
        kategori: 'baju dewasa',
        variants: generateSizeVariants('baju dewasa')
    },
    {
        kode_brg: 'A2',
        nama: 'Kemeja Lengan Pendek',
        harga_modal: 45000,
        harga_jual: 65000,
        kategori: 'baju dewasa',
        variants: generateSizeVariants('baju dewasa')
    },
    {
        kode_brg: 'A3',
        nama: 'Celana Chino Slim Fit',
        harga_modal: 60000,
        harga_jual: 85000,
        kategori: 'celana dewasa',
        variants: generateSizeVariants('celana dewasa')
    },
    {
        kode_brg: 'A4',
        nama: 'Baju Anak Polos',
        harga_modal: 35000,
        harga_jual: 50000,
        kategori: 'baju anak',
        variants: generateSizeVariants('baju anak')
    },
    {
        kode_brg: 'A5',
        nama: 'Celana Jeans Anak',
        harga_modal: 40000,
        harga_jual: 60000,
        kategori: 'celana anak',
        variants: generateSizeVariants('celana anak')
    },
    {
        kode_brg: 'A6',
        nama: 'Dress Anak Putih',
        harga_modal: 55000,
        harga_jual: 75000,
        kategori: 'baju anak',
        variants: generateSizeVariants('baju anak')
    },
    {
        kode_brg: 'A7',
        nama: 'Kemeja Formal',
        harga_modal: 75000,
        harga_jual: 95000,
        kategori: 'baju dewasa',
        variants: generateSizeVariants('baju dewasa')
    },
    {
        kode_brg: 'A8',
        nama: 'Celana Jeans Slim',
        harga_modal: 65000,
        harga_jual: 90000,
        kategori: 'celana dewasa',
        variants: generateSizeVariants('celana dewasa')
    }
]

export const categories = [
    { value: 'baju dewasa', label: 'Baju Dewasa' },
    { value: 'baju anak', label: 'Baju Anak' },
    { value: 'celana dewasa', label: 'Celana Dewasa' },
    { value: 'celana anak', label: 'Celana Anak' }
] 