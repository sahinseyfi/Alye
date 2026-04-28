import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Menu Section */}
      <section id="menu" className="section container" style={{ paddingTop: '120px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary)' }}>Alye'ye Hoş Geldiniz</h1>
          <p style={{ color: '#a3a3a3', marginTop: '0.5rem' }}>Geleneksel tarifler ve taze malzemelerle hazırlanan eşsiz lezzetler. Hemen sipariş verin.</p>
        </div>
        <div className="menu-grid">
          
          <div className="menu-card">
            <div className="menu-img-wrapper">
              <img src="/images/tavukdöner.png" alt="Ekmek Arası Tavuk Döner" />
            </div>
            <div className="menu-content">
              <div className="menu-header">
                <h3 className="menu-item-title">Ekmek Arası Tavuk Döner</h3>
                <span className="menu-price">₺390</span>
              </div>
              <p className="menu-desc">100 gr. Kıvırcık ve domates ile servis edilir.</p>
              <div style={{ fontSize: '0.85rem', color: '#737373', marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>🔥 530 kcal</span>
                <span style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>🥩 Pro: 30g</span>
                <span style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>🌾 Kar: 62g</span>
                <span style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>🧈 Yağ: 15g</span>
              </div>
            </div>
          </div>

          <div className="menu-card">
            <div className="menu-img-wrapper">
              <img src="/images/et.png" alt="Ekmek Arası Et Döner" />
            </div>
            <div className="menu-content">
              <div className="menu-header">
                <h3 className="menu-item-title">Ekmek Arası Et Döner</h3>
                <span className="menu-price">₺590</span>
              </div>
              <p className="menu-desc">100 gr. Kıvırcık ve domates ile servis edilir.</p>
              <div style={{ fontSize: '0.85rem', color: '#737373', marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>🔥 630 kcal</span>
                <span style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>🥩 Pro: 30g</span>
                <span style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>🌾 Kar: 62g</span>
                <span style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>🧈 Yağ: 25g</span>
              </div>
            </div>
          </div>

          <div className="menu-card">
            <div className="menu-img-wrapper">
              <img src="/images/köfte.png" alt="Ekmek Arası Köfte" />
            </div>
            <div className="menu-content">
              <div className="menu-header">
                <h3 className="menu-item-title">Ekmek Arası Köfte</h3>
                <span className="menu-price">₺490</span>
              </div>
              <p className="menu-desc">100 gr. Kıvırcık ve domates ile servis edilir.</p>
              <div style={{ fontSize: '0.85rem', color: '#737373', marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>🔥 580 kcal</span>
                <span style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>🥩 Pro: 28g</span>
                <span style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>🌾 Kar: 68g</span>
                <span style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>🧈 Yağ: 20g</span>
              </div>
            </div>
          </div>

          <div className="menu-card">
            <div className="menu-img-wrapper">
              <img src="/images/ayran.jpeg" alt="Ayran" />
            </div>
            <div className="menu-content">
              <div className="menu-header">
                <h3 className="menu-item-title">Ayran</h3>
                <span className="menu-price">₺50</span>
              </div>
              <p className="menu-desc">Serinletici ayran.</p>
              <div style={{ fontSize: '0.85rem', color: '#737373', marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>🔥 75 kcal</span>
                <span style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>🥩 Pro: 4g</span>
                <span style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>🌾 Kar: 6g</span>
                <span style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>🧈 Yağ: 4g</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="nav-logo" style={{ marginBottom: '1.5rem' }}>
                <img src="/images/logo.jpeg" alt="Alye Logo" width="50" height="50" />
                Alye
              </div>
              <p className="footer-text">Gelenekten geleceğe uzanan, damaklarda iz bırakan bir et ziyafeti.</p>
            </div>
            <div>
              <h4 className="footer-title">İletişim & Sipariş</h4>
              <p className="footer-text">Siparişlerinizi doğrudan arayarak verebilirsiniz.</p>
              <p className="footer-text">📞 Telefon: <a href="tel:05324655180" style={{ color: 'var(--primary)' }}>0532 465 51 80</a></p>
            </div>
            <div>
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
