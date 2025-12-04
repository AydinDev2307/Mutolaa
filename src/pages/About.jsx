import React from 'react';
import { Container, Flex } from '@mantine/core';

const About = () => {
  return (
    <>
      <style>{`
        .about-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .about-hero {
          padding: 80px 0 60px;
          text-align: center;
          color: white;
        }

        .about-hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .about-hero p {
          font-size: 1.3rem;
          opacity: 0.95;
          max-width: 700px;
          margin: 0 auto;
        }

        .about-content {
          background: white;
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
          color: #667eea;
          margin-bottom: 20px;
        }

        .about-section p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #4a5568;
          margin-bottom: 15px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin: 40px 0;
        }

        .stat-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 40px 30px;
          border-radius: 20px;
          text-align: center;
          color: white;
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-10px);
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
          background: #f7fafc;
          padding: 30px;
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .team-card:hover {
          transform: translateY(-8px);
          border-color: #667eea;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
        }

        .team-avatar {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: white;
        }

        .team-name {
          font-size: 1.3rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 8px;
        }

        .team-role {
          font-size: 1rem;
          color: #667eea;
          font-weight: 600;
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
                <div
                  style={{
                    flex: '1',
                    minWidth: '300px',
                    padding: '30px',
                    background: '#f7fafc',
                    borderRadius: '15px',
                  }}>
                  <h3
                    style={{
                      color: '#667eea',
                      marginBottom: '15px',
                      fontSize: '1.5rem',
                    }}>
                    📚 Keng tanlash
                  </h3>
                  <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
                    10,000 dan ortiq kitoblar - klassik asarlardan zamonaviy
                    bestsellerlargacha
                  </p>
                </div>
                <div
                  style={{
                    flex: '1',
                    minWidth: '300px',
                    padding: '30px',
                    background: '#f7fafc',
                    borderRadius: '15px',
                  }}>
                  <h3
                    style={{
                      color: '#667eea',
                      marginBottom: '15px',
                      fontSize: '1.5rem',
                    }}>
                    🎧 Audio kitoblar
                  </h3>
                  <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
                    Professional ovozda yozilgan audio kitoblarni istalgan joyda
                    tinglang
                  </p>
                </div>
                <div
                  style={{
                    flex: '1',
                    minWidth: '300px',
                    padding: '30px',
                    background: '#f7fafc',
                    borderRadius: '15px',
                  }}>
                  <h3
                    style={{
                      color: '#667eea',
                      marginBottom: '15px',
                      fontSize: '1.5rem',
                    }}>
                    💰 Arzon narxlar
                  </h3>
                  <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
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
