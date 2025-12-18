import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{
            backgroundColor: 'var(--color-surface-alt)',
            padding: 'var(--spacing-xl) 0',
            marginTop: 'auto'
        }}>
            <div className="container">
                <div style={{
                    textAlign: 'center',
                    color: 'var(--color-text-muted)',
                    fontSize: '0.75rem'
                }}>
                    © {new Date().getFullYear()} LUMIÈRE Cosmetics. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
