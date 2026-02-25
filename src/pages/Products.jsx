import { Helmet } from 'react-helmet-async';
import PawReveal from '../components/PawReveal';
import ProductCard from '../components/ProductCard';

export default function Products() {
    const products = [
        { id: 1, title: "Royal Canin Maxi Adult", category: "Food", price: 2150, image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=400" },
        { id: 2, title: "Pedigree Meat Jerky", category: "Treats", price: 250, image: "https://images.unsplash.com/photo-1623366302587-bca3daffef49?auto=format&fit=crop&q=80&w=400" },
        { id: 3, title: "Chew Rope Toy", category: "Toys", price: 350, image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=400" },
        { id: 4, title: "Plush Squeaky Bone", category: "Toys", price: 400, image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=400" },
        { id: 5, title: "Cozy Pet Bed (Large)", category: "Beds", price: 1200, image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=400" },
        { id: 6, title: "Adjustable Harness", category: "Accessories", price: 650, image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <Helmet>
                <title>Products | PawParadise</title>
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <PawReveal>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-display font-extrabold text-slate-800 mb-4">Our Products</h1>
                        <p className="text-slate-600 max-w-2xl mx-auto">Browse our selection of premium food, fun toys, and cozy beds for your beloved pets.</p>
                    </div>
                </PawReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product, idx) => (
                        <PawReveal key={product.id} delay={idx * 0.1}>
                            <ProductCard {...product} />
                        </PawReveal>
                    ))}
                </div>
            </div>
        </div>
    );
}
