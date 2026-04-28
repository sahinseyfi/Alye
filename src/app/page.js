import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Menu Section */}
      <section id="menu" className="section container" style={{ paddingTop: '120px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary)' }}>Alye'ye Hoş Geldiniz</h1>
        </div>
        <div className="menu-grid">
          
          <div className="menu-card">
            <div className="menu-img-wrapper">
              <Image src="/images/tavukdöner.png" alt="Ekmek Arası Tavuk Döner" fill sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="menu-content">
              <div className="menu-header">
                <h3 className="menu-item-title">Ekmek Arası Tavuk Döner</h3>
                <span className="menu-price">₺390</span>
              </div>
              <p className="menu-desc">100 gr. Kıvırcık ve domates ile servis edilir.</p>

            </div>
          </div>

          <div className="menu-card">
            <div className="menu-img-wrapper">
              <Image src="/images/et.png" alt="Ekmek Arası Et Döner" fill sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="menu-content">
              <div className="menu-header">
                <h3 className="menu-item-title">Ekmek Arası Et Döner</h3>
                <span className="menu-price">₺590</span>
              </div>
              <p className="menu-desc">100 gr. Kıvırcık ve domates ile servis edilir.</p>

            </div>
          </div>

          <div className="menu-card">
            <div className="menu-img-wrapper">
              <Image src="/images/köfte.png" alt="Ekmek Arası Köfte" fill sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="menu-content">
              <div className="menu-header">
                <h3 className="menu-item-title">Ekmek Arası Köfte</h3>
                <span className="menu-price">₺490</span>
              </div>
              <p className="menu-desc">100 gr. Kıvırcık ve domates ile servis edilir.</p>

            </div>
          </div>

          <div className="menu-card">
            <div className="menu-img-wrapper" style={{ backgroundColor: '#fff', padding: '1rem' }}>
              <Image src="/images/ayran.png" alt="Ayran" fill style={{ objectFit: 'contain' }} sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="menu-content">
              <div className="menu-header">
                <h3 className="menu-item-title">Ayran</h3>
                <span className="menu-price">₺50</span>
              </div>
              <p className="menu-desc">Serinletici ayran.</p>

            </div>
          </div>

        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingBottom: '2rem', marginBottom: '1rem', borderBottom: '1px solid var(--card-border)' }}>
              <div style={{ position: 'relative', width: '150px', height: '150px' }}>
                <Image src="/images/logo.jpeg" alt="Alye Logo" fill sizes="150px" style={{ borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--primary)' }} />
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h4 className="footer-title">İletişim & Sipariş</h4>
              <p className="footer-text">Siparişlerinizi doğrudan arayarak verebilirsiniz.</p>
              <p className="footer-text">📞 Telefon: <a href="tel:05324655180" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>0532 465 51 80</a></p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h4 className="footer-title">Çalışma Saatleri</h4>
              <p className="footer-text" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary)' }}>7/24 Açığız</p>
              <p className="footer-text">Gece gündüz, her saat hizmetinizdeyiz.</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Alye. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
