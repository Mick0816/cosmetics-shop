import Link from 'next/link';

export default function AccountPage() {
    // Mock data
    const nextShipment = {
        date: 'November 25, 2025',
        items: ['Luminous Silk Foundation - Shade 4'],
        total: 58.50
    };

    const recentOrders = [
        { id: 'ORD-12345', date: 'Oct 25, 2025', total: 58.50, status: 'Delivered' },
        { id: 'ORD-12300', date: 'Sep 25, 2025', total: 58.50, status: 'Delivered' },
    ];

    return (
        <div className="container" style={{ padding: 'var(--spacing-xl) var(--spacing-md)' }}>
            <h1 style={{ marginBottom: 'var(--spacing-lg)' }}>マイページ</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)' }}>

                {/* Next Shipment / Subscription */}
                <div style={{
                    border: '1px solid var(--color-primary)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--spacing-lg)',
                    backgroundColor: 'var(--color-surface-alt)'
                }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)' }}>次回の配送</h2>
                    <div style={{ marginBottom: 'var(--spacing-md)' }}>
                        <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                            {nextShipment.date}
                        </div>
                        <div style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                            お届け予定日
                        </div>
                    </div>

                    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                        {nextShipment.items.map((item, index) => (
                            <div key={index} style={{ marginBottom: 'var(--spacing-xs)' }}>{item}</div>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                        <button className="btn btn-primary" style={{ fontSize: '0.875rem' }}>定期便の管理</button>
                        <button className="btn btn-outline" style={{ fontSize: '0.875rem' }}>今月はスキップ</button>
                    </div>
                </div>

                {/* Order History */}
                <div style={{
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--spacing-lg)'
                }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)' }}>注文履歴</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                        {recentOrders.map(order => (
                            <div key={order.id} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderBottom: '1px solid var(--color-border)',
                                paddingBottom: 'var(--spacing-sm)'
                            }}>
                                <div>
                                    <div style={{ fontWeight: 600 }}>{order.date}</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{order.id}</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontWeight: 600 }}>${order.total.toFixed(2)}</div>
                                    <button style={{
                                        background: 'none',
                                        border: 'none',
                                        color: 'var(--color-primary)',
                                        fontSize: '0.875rem',
                                        textDecoration: 'underline',
                                        padding: 0,
                                        marginTop: '0.25rem'
                                    }}>
                                        再注文
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ marginTop: 'var(--spacing-md)', textAlign: 'center' }}>
                        <Link href="/account/orders" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>
                            すべての注文を見る
                        </Link>
                    </div>
                </div>

                {/* Profile Settings */}
                <div style={{
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--spacing-lg)'
                }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)' }}>設定</h2>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                            <Link href="/account/profile">プロフィール・パスワード</Link>
                        </li>
                        <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                            <Link href="/account/addresses">お届け先住所</Link>
                        </li>
                        <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                            <Link href="/account/payment">お支払い方法</Link>
                        </li>
                        <li style={{ marginTop: 'var(--spacing-lg)' }}>
                            <button style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--color-text-muted)',
                                cursor: 'pointer'
                            }}>
                                ログアウト
                            </button>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
