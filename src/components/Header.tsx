import Link from 'next/link';

export default function Header() {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      backgroundColor: 'var(--color-surface)',
      borderBottom: '1px solid var(--color-border)',
      zIndex: 100,
      padding: 'var(--spacing-md) 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link href="/" style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.5rem',
          fontWeight: 600,
          letterSpacing: '0.05em'
        }}>
          LUMIÈRE
        </Link>

        <nav style={{ display: 'flex', gap: 'var(--spacing-lg)' }}>
          <Link href="/products" style={{ fontWeight: 500 }}>商品一覧</Link>
          <Link href="/about" style={{ fontWeight: 500 }}>ブランドストーリー</Link>
        </nav>

        <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
          <Link href="/account" className="btn btn-outline" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
            マイページ
          </Link>
          <Link href="/cart" style={{ fontSize: '1.25rem' }}>
            🛒
          </Link>
        </div>
      </div>
    </header>
  );
}
