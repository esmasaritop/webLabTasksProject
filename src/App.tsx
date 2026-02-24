import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="app-container">
      {/*
      <div className="top-bar">
        <div className="top-bar-content">
          <span><i className="phone-icon"></i> +90 544 773 33 74 </span>
          <span><i className="email-icon"></i> esmasaritop@gmail.com</span>
          <span><i className="location-icon"></i> Elazığ, Türkiye</span>
        </div>
      </div>
      */}

      <header>
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🏛️</span>
            <h1>ESMA SARITOP</h1>
          </div>
          <nav>
            <ul>
              <li><a href="#hakkimda">HAKKIMIZDA</a></li>
              <li><a href="#projeler">PROJELERİM</a></li>
              <li><a href="#iletisim">İLETİŞİM</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="hakkimda" aria-labelledby="hakkimda-baslik">
          <div className="hakkimda-layout">
            <div className="hakkimda-photo">
              <img src="/photos/esmaSaritopProfil.jpeg" alt="Esma Sarıtop profil fotoğrafı" />
            </div>
            <div className="hakkimda-info">
              <h2 id="hakkimda-baslik">Hakkımda</h2>
              <article aria-labelledby="profil-baslik">
                <h3 id="profil-baslik">KİŞİSEL BİLGİLER</h3>
                <p>
                  30 Ocak 2004 Elazığ doğumluyum. Fırat Üniversitesi Teknoloji Fakültesi
                  Yazılım Mühendisliği 3. sınıf öğrencisiyim.
                </p>
              </article>

              <article aria-labelledby="deneyim-baslik">
                <h3 id="deneyim-baslik">Eğitim ve Profesyonel Deneyim</h3>
                <p>
                  Okul içinde ve dışında çeşitli projelerde yer aldım. Code23 eğitim programını
                  tamamladıktan sonra Fırat Üniversitesi Dijital Dönüşüm ve Yazılım Ofisi'nde
                  gerçek hayat projelerinde aktif rol aldım.
                </p>
                <p>
                  Daha sonrasında Fırat Teknokent bünyesinde faaliyet gösteren Prodrom ICT Solutions
                  şirketinde yarı zamanlı çalışmaya başladım.
                </p>
                <p>
                  Aynı zamanda Türkiye Teknoloji Takımı Vakfı'nda (T3 Vakfı) eğitmen mentor bursiyeri
                  olarak Deneyap öğrencilerinin eğitimi ve mentörlüğü süreçlerinde görev almaktayım.
                </p>
              </article>
            </div>
          </div>

          <article aria-labelledby="teknolojiler-baslik">
            <h3 id="teknolojiler-baslik">Kullandığım Teknolojiler</h3>
            <ul className="tech-tags">
              <li>HTML5</li><li>CSS3</li><li>Bootstrap</li><li>JavaScript</li><li>Laravel</li>
              <li>React</li><li>Web Services & API</li><li>C#</li><li>MySQL</li><li>PostgreSQL</li>
              <li>jQuery</li><li>AJAX</li>
            </ul>
          </article>
        </section>

        <section id="projeler" aria-labelledby="projeler-baslik">
          <h2 id="projeler-baslik">PROJELERİM</h2>
          <div className="project-grid">
            <article className="project-card">
              <div className="project-image-container">
                <img src="/photos/enstitu.png" alt="LBYS Proje Görseli" className="project-img" />
              </div>
              <h3>Lisansüstü Eğitim Bilgi Yönetim Sistemi (LBYS)</h3>
              <span className="project-date">Ekim 2024 - Halen</span>
              <p>
                Öğrenci ve enstitü arasındaki tüm süreçleri ve bilgi akışlarını yöneten kapsamlı bir sistem.
              </p>
            </article>

            <article className="project-card">
              <div className="project-image-container">
                <img src="/photos/erasmus.png" alt="ErasmusGate Proje Görseli" className="project-img" />
              </div>
              <h3>ErasmusGate – Fırat Üniversitesi Erasmus Otomasyon Sistemi</h3>
              <span className="project-date">Ağustos 2025 - Ocak 2026</span>
              <p>
                Erasmus ofisi süreçlerini dijitalleştirmeyi ve otomatikleştirmeyi hedefleyen,
                modüler yapıda bir otomasyon sistemidir.
              </p>
            </article>


            <article className="project-card">
              <div className="project-image-container">
                <img src="/photos/quicklit.png" alt="QuickLit Proje Görseli" className="project-img" />
              </div>
              <h3>QuickLit</h3>
              <span className="project-date">Mart 2025 - Haziran 2025</span>
              <p>
                Akademik kaynaklara hızlı erişim ve PDF özetleme sağlayan AI destekli platform.
              </p>
            </article>

            <article className="project-card">
              <div className="project-image-container">
                <img src="/photos/atanma.png" alt="Atanma Sistemi Proje Görseli" className="project-img" />
              </div>
              <h3>Fırat Üniversitesi Atanma Sistemi Projesi</h3>
              <span className="project-date">Kasım 2024 - Nisan 2025</span>
              <p>
                Akademik personel alım süreçlerini dijitalleştirmek amacıyla geliştirilen,
                başvuruların değerlendirilmesini kolaylaştıran web tabanlı bir sistemdir.
              </p>
            </article>

            <article className="project-card">
              <div className="project-image-container">
                <img src="/photos/isaccl.png" alt="Isaccl Proje Görseli" className="project-img" />
              </div>
              <h3>Isaccl</h3>
              <span className="project-date">Ekim 2025 - Halen</span>
              <p>
                Isaccl, Üniversitemize kabul alınmış olan uluslararası öğrencilerin lisansüstü eğitim süreçlerinin başlaması için Yök'den yök-id'lerinin alındığı sistemdir.
              </p>
            </article>

            <article className="project-card">
              <div className="project-image-container">
                <img src="/photos/cybercortx.png" alt="CyberCortex Proje Görseli" className="project-img" />
              </div>
              <h3>CyberCortex</h3>
              <span className="project-date">Şubat 2026 - Halen</span>
              <p>
                CyberCortex, siber güvenlik alanında çalışan bir yapay zeka destekli sistemdir.
              </p>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>İLETİŞİM </h2>
          <p className="content-placeholder">
            Benimle iletişime geçmek için esma.saritop@example.com adresini kullanabilir veya
            sosyal medya üzerinden ulaşabilirsiniz.
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 ESMA SARITOP. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  )
}

export default App
