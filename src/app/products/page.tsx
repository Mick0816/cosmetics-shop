import Link from 'next/link';
import ProductCard from '../../components/ProductCard';

export default function ProductsPage() {
    const products = [
        { id: '1', name: 'Luminous Silk Foundation', price: 65, category: 'Foundation', imageColor: '#E5C6A0' },
        { id: '2', name: 'Velvet Blur Primer', price: 45, category: 'Primer', imageColor: '#F0E0D0' },
        { id: '3', name: 'Radiant Setting Powder', price: 50, category: 'Powder', imageColor: '#F5E6D3' },
        { id: '4', name: 'Sheer Glow Tint', price: 42, category: 'Foundation', imageColor: '#DBC1A8' },
        { id: '5', name: 'Hydrating Concealer', price: 38, category: 'Concealer', imageColor: '#E8D0B5' },
        { id: '6', name: 'Mineral Finishing Powder', price: 48, category: 'Powder', imageColor: '#F2E8DC' },
    ];

    return (
        <div className="container" style={{ padding: 'var(--spacing-xl) var(--spacing-md)' }}>
            <h1 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>商品一覧</h1>

            <div style={{ display: 'flex', gap: 'var(--spacing-xl)' }}>
                {/* Sidebar Filters */}
                <aside style={{ width: '250px', flexShrink: 0 }} className="filters">
                    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                        <h3 style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-md)' }}>カテゴリ</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                                <input type="checkbox" /> ファンデーション
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                                <input type="checkbox" /> プライマー
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                                <input type="checkbox" /> パウダー
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                                <input type="checkbox" /> コンシーラー
                            </label>
                        </div>
                    </div>

                    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                        <h3 style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-md)' }}>仕上がり</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                                <input type="checkbox" /> マット
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                                <input type="checkbox" /> ツヤ
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                                <input type="checkbox" /> ナチュラル
                            </label>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <div style={{ flex: 1 }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: 'var(--spacing-lg)'
                    }}>
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
