import Link from 'next/link';

interface ProductProps {
    id: string;
    name: string;
    price: number;
    category: string;
    imageColor: string;
}

export default function ProductCard({ product }: { product: ProductProps }) {
    return (
        <div style={{
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            backgroundColor: 'var(--color-surface)'
        }}
            className="product-card"
        >
            <div style={{
                height: '250px',
                backgroundColor: product.imageColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem'
            }}>
                {/* Placeholder for product image */}
                {product.name.charAt(0)}
            </div>
            <div style={{ padding: 'var(--spacing-md)' }}>
                <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: 'var(--spacing-xs)'
                }}>
                    {product.category}
                </div>
                <h3 style={{
                    fontSize: '1.125rem',
                    marginBottom: 'var(--spacing-xs)',
                    fontFamily: 'var(--font-heading)'
                }}>
                    <Link href={`/products/${product.id}`}>
                        {product.name}
                    </Link>
                </h3>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 'var(--spacing-md)'
                }}>
                    <span style={{ fontWeight: 600 }}>${product.price}</span>
                    <button className="btn btn-outline" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                        カートに入れる
                    </button>
                </div>
            </div>
        </div>
    );
}
