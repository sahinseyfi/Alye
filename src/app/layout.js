import './globals.css';

export const metadata = {
  title: 'Alye | Geleneksel Lezzet',
  description: 'En lezzetli köfte ve et çeşitleri ile hizmetinizdeyiz. Alye.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <nav className="navbar">
          <div className="container nav-container">
            <div className="nav-logo">
              <img src="/images/logo.jpeg" alt="Alye Logo" width="40" height="40" />
              Alye
            </div>
            <div className="nav-links">
              <a href="#menu">Menü</a>
              <a href="#contact">İletişim</a>
            </div>
            <a className="btn-primary" href="tel:05324655180" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', textAlign: 'center' }}>
              Sipariş Ver
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
