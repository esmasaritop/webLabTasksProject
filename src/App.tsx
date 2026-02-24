import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="app-container">

      <header>
        <nav>
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hakkimda" aria-labelledby="hakkimda-baslik">
          <h2 id="hakkimda-baslik">Hakkımda</h2>

          <article aria-labelledby="profil-baslik">
            <h3 id="profil-baslik">Kişisel Bilgiler</h3>
            <img src="/photos/esmaSaritopProfil.jpeg" alt="Esma Sarıtop profil fotoğrafı" className="profile-img" />
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

            <p>
              Fırat Üniversitesi Teknofest Kulübü'nde etkinlik ve organizasyon komite başkanı
              olarak görev yapıyorum.
            </p>

            <p>
              2024 Teknofest yarışmasında Deneyap Girişim Programı kapsamında 117 proje arasından
              ilk 5'e girerek ekip arkadaşlarımla birlikte derece elde edip ödül ve destek almaya
              hak kazandık.
            </p>
          </article>

          <article aria-labelledby="teknolojiler-baslik">
            <h3 id="teknolojiler-baslik">Kullandığım Teknolojiler</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>Laravel</li>
              <li>React</li>
              <li>Web Services & API</li>
              <li>C#</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>jQuery</li>
              <li>AJAX</li>
            </ul>
          </article>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <p className="content-placeholder">
            Henüz eklenmiş bir proje bulunmamaktadır. Gelecek haftalarda burada yeni çalışmalar yer alacak!
          </p>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
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
