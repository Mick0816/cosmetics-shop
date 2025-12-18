import Link from 'next/link';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const bestSellers = [
    { id: '1', name: 'Luminous Silk Foundation', price: 65, category: 'Foundation', imageColor: '#E5C6A0' },
    { id: '2', name: 'Velvet Blur Primer', price: 45, category: 'Primer', imageColor: '#F0E0D0' },
    { id: '3', name: 'Radiant Setting Powder', price: 50, category: 'Powder', imageColor: '#F5E6D3' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        backgroundColor: 'var(--color-secondary)',
        padding: 'var(--spacing-xl) 0',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '600px' }}>
            <h1 style={{
              fontSize: '4rem',
              marginBottom: 'var(--spacing-md)',
              color: 'var(--color-primary-dark)'
            }}>
              あなたと共に成熟する美しさ。
            </h1>
            <p style={{
              fontSize: '1.25rem',
              marginBottom: 'var(--spacing-lg)',
              color: 'var(--color-primary-dark)',
              opacity: 0.9
            }}>
              隠すのではなく、引き立てる。エイジレスな輝きを放つ肌へ導くベースメイク。
            </p>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              <Link href="/products" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                コレクションを見る
              </Link>
              <Link href="/about" className="btn btn-outline" style={{
                borderColor: 'var(--color-primary-dark)',
                color: 'var(--color-primary-dark)',
                padding: '1rem 2rem',
                fontSize: '1.125rem'
              }}>
                詳しく見る
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative Circle */}
        <div style={{
          position: 'absolute',
          right: '-10%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.2)',
          zIndex: 0
        }} />
      </section>

      {/* Repeater / Welcome Back Section (Mock) */}
      <section style={{ padding: 'var(--spacing-lg) 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ color: 'var(--color-text-muted)', marginRight: 'var(--spacing-sm)' }}>おかえりなさい、Sarahさん！</span>
            <Link href="/account" style={{ textDecoration: 'underline', color: 'var(--color-primary)' }}>
              次回の配送を確認する
            </Link>
          </div>
          <Link href="/products/1" style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
            再購入: ルミナス シルク ファンデーション &rarr;
          </Link>
        </div>
      </section>

      {/* Best Sellers */}
      <section style={{ padding: 'var(--spacing-xl) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
            <h2 style={{ fontSize: '2.5rem' }}>ベストセラー</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>多くの女性に愛されています。</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 'var(--spacing-lg)'
          }}>
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section style={{ backgroundColor: 'var(--color-surface-alt)', padding: 'var(--spacing-xl) 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-xl)',
            textAlign: 'center'
          }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>潤い処方</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>ヒアルロン酸とセラミドを配合し、ふっくらと滑らかな肌へ。</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>エイジレスな仕上がり</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>厚塗り感なく、シワに入り込まない。素肌のような美しさ。</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>サステナブルなラグジュアリー</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>リフィル可能なパッケージと、倫理的に調達された成分。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
