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
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <div className="student-info">
            <p><strong>Ad Soyad:</strong> ESMA SARITOP</p>
            <p><strong>Öğrenci No:</strong> 230541100</p>
          </div>
          <p className="content-placeholder">
            Web tasarımı ve programlama tutkusuyla kendimi geliştiren bir öğrenciyim.
            Bu portfolyo, dönem boyunca öğrendiğim teknolojileri ve geliştirdiğim projeleri sergilemek için hazırlanmıştır.
          </p>
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
