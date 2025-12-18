import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="container" style={{ padding: 'var(--spacing-xl) var(--spacing-md)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{
                    textAlign: 'center',
                    marginBottom: 'var(--spacing-xl)',
                    fontSize: '2.5rem',
                    fontFamily: 'var(--font-heading)'
                }}>
                    私たちの物語
                </h1>

                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '400px',
                    marginBottom: 'var(--spacing-xl)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    backgroundColor: 'var(--color-surface-alt)'
                }}>
                    {/* Placeholder for the generated image - will be replaced with actual image path */}
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-text-muted)',
                        fontSize: '1.5rem'
                    }}>
                        Brand Image
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                    <section>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary)' }}>
                            あなたと共に成熟する美しさ
                        </h2>
                        <p style={{ lineHeight: 1.8, color: 'var(--color-text-muted)', fontSize: '1.125rem' }}>
                            LUMIÈRE（ルミエール）は、年齢を重ねるごとに増していく、女性の内面的な輝きと自信を祝福するために生まれました。
                            30代後半から40代にかけて、私たちの肌は変化し、美しさの定義もまた進化します。
                            私たちは、その変化を隠すのではなく、受け入れ、より美しく輝かせるためのベースメイクを提案します。
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary)' }}>
                            妥協のない品質と心地よさ
                        </h2>
                        <p style={{ lineHeight: 1.8, color: 'var(--color-text-muted)', fontSize: '1.125rem' }}>
                            忙しい日々を送る現代の女性にとって、メイクアップは単なる装飾ではなく、自分自身をいたわる時間でもあります。
                            だからこそ、LUMIÈREは肌への優しさと機能性を追求しました。
                            厳選された天然由来成分を配合し、長時間つけていても肌が呼吸するような軽やかなつけ心地を実現。
                            スキンケアのような潤いで、素肌そのものを美しく見せます。
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary)' }}>
                            サステナブルな未来へ
                        </h2>
                        <p style={{ lineHeight: 1.8, color: 'var(--color-text-muted)', fontSize: '1.125rem' }}>
                            美しさは、地球環境への配慮と共にあるべきだと私たちは考えます。
                            パッケージにはリサイクル可能な素材を使用し、動物実験を行わないクルエルティフリーな製品づくりを徹底しています。
                            LUMIÈREを選ぶことが、あなた自身だけでなく、未来の地球にとっても美しい選択であることを願っています。
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
