const Footer = () => {
  return (
    <>
      <style>{`
        footer {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 60px 0 30px;
          margin-top: 80px;
        }

        .footer-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-section {
          flex: 1;
          min-width: 250px;
        }

        .footer-logo {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 15px;
          color: white;
        }

        .footer-logo span {
          color: #FFD93D;
        }

        .footer-description {
          font-size: 0.95rem;
          line-height: 1.6;
          opacity: 0.9;
          margin-bottom: 20px;
        }

        .footer-section h3 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: white;
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-links a {
          color: white;
          text-decoration: none;
          font-size: 0.95rem;
          opacity: 0.85;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .footer-links a:hover {
          opacity: 1;
          transform: translateX(5px);
          color: #FFD93D;
        }

        .footer-social {
          display: flex;
          gap: 15px;
          margin-top: 20px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: white;
          color: #667eea;
          transform: translateY(-3px);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 30px;
          text-align: center;
        }

        .footer-bottom p {
          font-size: 0.9rem;
          opacity: 0.85;
          margin: 5px 0;
        }

        .download-badges {
          display: flex;
          gap: 15px;
          margin-top: 20px;
        }

        .download-badge {
          background: white;
          color: #667eea;
          padding: 12px 20px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .download-badge:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 30px;
          }

          .footer-section {
            min-width: 100%;
          }

          .download-badges {
            flex-direction: column;
          }

          .footer-logo {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h2 className="footer-logo">
                Mutol<span>aa</span>
              </h2>
              <p className="footer-description">
                O'zbek tilidagi eng yirik mobil kutubxona. Minglab audio va
                elektron kitoblarni o'qing va tinglang.
              </p>
              <div className="footer-social">
                <a href="#" className="social-icon">
                  f
                </a>
                <a href="#" className="social-icon">
                  T
                </a>
                <a href="#" className="social-icon">
                  in
                </a>
                <a href="#" className="social-icon">
                  IG
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h3>Tezkor havolalar</h3>
              <ul className="footer-links">
                <li>
                  <a href="/">Bosh sahifa</a>
                </li>
                <li>
                  <a href="/about">Biz haqimizda</a>
                </li>
                <li>
                  <a href="/libraries">Kutubxonalar</a>
                </li>
                <li>
                  <a href="/books">Kitoblar</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Yordam</h3>
              <ul className="footer-links">
                <li>
                  <a href="/faq">Ko'p beriladigan savollar</a>
                </li>
                <li>
                  <a href="/contact">Bog'lanish</a>
                </li>
                <li>
                  <a href="/terms">Foydalanish shartlari</a>
                </li>
                <li>
                  <a href="/privacy">Maxfiylik siyosati</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Ilovani yuklab oling</h3>
              <div className="download-badges">
                <a href="#" className="download-badge">
                  📱 App Store
                </a>
                <a href="#" className="download-badge">
                  🤖 Google Play
                </a>
                <a href="#" className="download-badge">
                  🌐 App Gallery
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2024 Mutolaa. Barcha huquqlar himoyalangan.</p>
            <p>
              O'zbekistondagi eng yaxshi audio va elektron kitoblar platformasi
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
