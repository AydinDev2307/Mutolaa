// ============ ABOUT PAGE ============
import React from 'react';
import { Container, Flex } from '@mantine/core';

const About = () => {
  return (
    <>
      <style>{`
        .about-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
        }

        .about-hero {
          padding: 80px 0 60px;
          text-align: center;
          color: white;
          position: relative;
        }

        .about-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(255, 193, 7, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 20px;
          color: #FFC107;
          text-shadow: 0 0 30px rgba(255, 193, 7, 0.3);
          position: relative;
          z-index: 1;
        }

        .about-hero p {
          font-size: 1.3rem;
          opacity: 0.95;
          max-width: 700px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.9);
          position: relative;
          z-index: 1;
        }

        .about-content {
          background: linear-gradient(180deg, #2d2d2d 0%, #1a1a1a 100%);
          border-radius: 30px 30px 0 0;
          padding: 60px 0;
          margin-top: 40px;
        }

        .about-section {
          margin-bottom: 60px;
        }

        .about-section h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #FFC107;
          margin-bottom: 20px;
          text-shadow: 0 2px 10px rgba(255, 193, 7, 0.3);
        }

        .about-section p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 15px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin: 40px 0;
        }

        .stat-card {
          background: linear-gradient(135deg, #FFC107 0%, #FFD54F 100%);
          padding: 40px 30px;
          border-radius: 20px;
          text-align: center;
          color: #1a1a1a;
          transition: transform 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
        }

        .stat-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 25px rgba(255, 193, 7, 0.5);
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .stat-label {
          font-size: 1.1rem;
          opacity: 0.9;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .team-card {
          background: #2d2d2d;
          padding: 30px;
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s ease;
          border: 2px solid rgba(255, 193, 7, 0.2);
        }

        .team-card:hover {
          transform: translateY(-8px);
          border-color: #FFC107;
          box-shadow: 0 10px 30px rgba(255, 193, 7, 0.3);
        }

        .team-avatar {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #FFC107 0%, #FFD54F 100%);
          border-radius: 50%;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
        }

        .team-name {
          font-size: 1.3rem;
          font-weight: 700;
          color: #FFC107;
          margin-bottom: 8px;
        }

        .team-role {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 600;
        }

        .feature-card {
          flex: 1;
          min-width: 300px;
          padding: 30px;
          background: #2d2d2d;
          border-radius: 15px;
          border: 2px solid rgba(255, 193, 7, 0.2);
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          border-color: #FFC107;
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(255, 193, 7, 0.3);
        }

        .feature-card h3 {
          color: #FFC107;
          margin-bottom: 15px;
          font-size: 1.5rem;
        }

        .feature-card p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .about-hero h1 {
            font-size: 2.5rem;
          }

          .about-hero p {
            font-size: 1.1rem;
          }

          .stat-number {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <div className="about-page">
        <section className="about-hero">
          <Container style={{ width: '1240px', maxWidth: '100%' }}>
            <h1>Biz haqimizda</h1>
            <p>
              Mutolaa - O'zbekistondagi eng yirik raqamli kutubxona platformasi.
              Biz o'zbek tilida audio va elektron kitoblarni odamlarga yetkazish
              orqali mutolaa madaniyatini rivojlantiramiz.
            </p>
          </Container>
        </section>

        <section className="about-content">
          <Container style={{ width: '1240px', maxWidth: '100%' }}>
            <div className="about-section">
              <h2>Bizning missiyamiz</h2>
              <p>
                Biz har bir o'zbek oilasiga sifatli kitoblarni qulay va arzon
                narxda yetkazishni maqsad qilganmiz. Mutolaa orqali minglab
                audio va elektron kitoblarni tinglash va o'qish imkoniyati
                yaratamiz.
              </p>
              <p>
                Platformamiz foydalanuvchilarga istalgan vaqtda, istalgan joyda
                o'z sevimli kitoblarini o'qish va tinglash imkonini beradi. Biz
                mutolaa madaniyatini yangi avlodga yetkazishga intilamiz.
              </p>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Kitoblar</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Foydalanuvchilar</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Audio kitoblar</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100+</div>
                <div className="stat-label">Hamkor kutubxonalar</div>
              </div>
            </div>

            <div className="about-section">
              <h2>Bizning jamoamiz</h2>
              <p>
                Mutolaa jamoasi tajribali IT mutaxassislari, kitobseverlar va
                madaniyat tarqatuvchilaridan iborat. Biz birgalikda
                O'zbekistonda raqamli kutubxonachilik sohasini rivojlantiramiz.
              </p>

              <div className="team-grid">
                <div className="team-card">
                  <div className="team-avatar">👨‍💼</div>
                  <div className="team-name">Alisher Karimov</div>
                  <div className="team-role">Asoschisi va CEO</div>
                </div>
                <div className="team-card">
                  <div className="team-avatar">👩‍💻</div>
                  <div className="team-name">Nodira Rahimova</div>
                  <div className="team-role">CTO - Texnologiya bo'limi</div>
                </div>
                <div className="team-card">
                  <div className="team-avatar">👨‍🎨</div>
                  <div className="team-name">Jasur Tursunov</div>
                  <div className="team-role">Dizayn rahbari</div>
                </div>
                <div className="team-card">
                  <div className="team-avatar">👩‍📚</div>
                  <div className="team-name">Dilnoza Axmedova</div>
                  <div className="team-role">Kontent menejeri</div>
                </div>
              </div>
            </div>

            <div className="about-section">
              <h2>Nega Mutolaa?</h2>
              <Flex gap="20px" wrap="wrap" style={{ marginTop: '30px' }}>
                <div className="feature-card">
                  <h3>📚 Keng tanlash</h3>
                  <p>
                    10,000 dan ortiq kitoblar - klassik asarlardan zamonaviy
                    bestsellerlargacha
                  </p>
                </div>
                <div className="feature-card">
                  <h3>🎧 Audio kitoblar</h3>
                  <p>
                    Professional ovozda yozilgan audio kitoblarni istalgan joyda
                    tinglang
                  </p>
                </div>
                <div className="feature-card">
                  <h3>💰 Arzon narxlar</h3>
                  <p>
                    Oyiga atiga bir necha ming so'm evaziga cheksiz kitoblar
                    o'qing
                  </p>
                </div>
              </Flex>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default About;
