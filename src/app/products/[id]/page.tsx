'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ProductDetailsPage() {
    const params = useParams();
    const [purchaseType, setPurchaseType] = useState<'onetime' | 'subscription'>('subscription');
    const [frequency, setFrequency] = useState('1');

    // Mock product data
    const product = {
        id: params.id,
        name: 'Luminous Silk Foundation',
        price: 65,
        description: 'A lightweight, buildable foundation that delivers a radiant, airbrushed finish. Infused with hydrating ingredients to plump and smooth skin texture over time.',
        imageColor: '#E5C6A0',
        ingredients: 'Water, Dimethicone, Glycerin, Hyaluronic Acid, Vitamin E...'
    };

    const discountedPrice = (product.price * 0.9).toFixed(2);

    return (
        <div className="container" style={{ padding: 'var(--spacing-xl) var(--spacing-md)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-lg)' }}>
                <Link href="/products" style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                    &larr; 商品一覧に戻る
                </Link>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'var(--spacing-xl)'
            }}>
                {/* Product Image Placeholder */}
                <div style={{
                    backgroundColor: product.imageColor,
                    aspectRatio: '1/1',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '4rem'
                }}>
                    {product.name.charAt(0)}
                </div>

                {/* Product Details */}
                <div>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-xs)' }}>{product.name}</h1>
                    <div style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)' }}>${product.price}</div>

                    <p style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-text-muted)' }}>
                        {product.description}
                    </p>

                    {/* Purchase Options */}
                    <div style={{
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        padding: 'var(--spacing-md)',
                        marginBottom: 'var(--spacing-lg)'
                    }}>
                        {/* Subscription Option */}
                        <label style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 'var(--spacing-md)',
                            cursor: 'pointer',
                            marginBottom: 'var(--spacing-md)',
                            padding: 'var(--spacing-sm)',
                            backgroundColor: purchaseType === 'subscription' ? 'var(--color-surface-alt)' : 'transparent',
                            borderRadius: 'var(--radius-sm)'
                        }}>
                            <input
                                type="radio"
                                name="purchaseType"
                                value="subscription"
                                checked={purchaseType === 'subscription'}
                                onChange={() => setPurchaseType('subscription')}
                                style={{ marginTop: '0.25rem' }}
                            />
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
                                    <span>定期購入で10%OFF</span>
                                    <span>${discountedPrice}</span>
                                </div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: 'var(--spacing-xs)' }}>
                                    買い忘れの心配なし。いつでもキャンセル可能。
                                </div>
                                {purchaseType === 'subscription' && (
                                    <div style={{ marginTop: 'var(--spacing-sm)' }}>
                                        <label style={{ fontSize: '0.875rem', display: 'block', marginBottom: 'var(--spacing-xs)' }}>
                                            配送頻度:
                                        </label>
                                        <select
                                            value={frequency}
                                            onChange={(e) => setFrequency(e.target.value)}
                                            style={{
                                                padding: '0.5rem',
                                                borderRadius: 'var(--radius-sm)',
                                                border: '1px solid var(--color-border)',
                                                width: '100%'
                                            }}
                                        >
                                            <option value="1">1ヶ月ごと (一番人気)</option>
                                            <option value="2">2ヶ月ごと</option>
                                            <option value="3">3ヶ月ごと</option>
                                        </select>
                                    </div>
                                )}
                            </div>
                        </label>

                        {/* One-time Purchase Option */}
                        <label style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--spacing-md)',
                            cursor: 'pointer',
                            padding: 'var(--spacing-sm)',
                            backgroundColor: purchaseType === 'onetime' ? 'var(--color-surface-alt)' : 'transparent',
                            borderRadius: 'var(--radius-sm)'
                        }}>
                            <input
                                type="radio"
                                name="purchaseType"
                                value="onetime"
                                checked={purchaseType === 'onetime'}
                                onChange={() => setPurchaseType('onetime')}
                            />
                            <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
                                <span>通常購入</span>
                                <span>${product.price}</span>
                            </div>
                        </label>
                    </div>

                    <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.125rem' }}>
                        {purchaseType === 'subscription' ? '定期購入をカートに入れる' : 'カートに入れる'}
                    </button>

                    <div style={{ marginTop: 'var(--spacing-lg)', fontSize: '0.875rem' }}>
                        <strong>成分:</strong> <br />
                        <span style={{ color: 'var(--color-text-muted)' }}>{product.ingredients}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
