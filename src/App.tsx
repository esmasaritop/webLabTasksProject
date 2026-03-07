import { useState, useRef } from 'react'
import { Code2, Github, Linkedin } from 'lucide-react'
import './App.css'
import Swal from 'sweetalert2'
import ReCAPTCHA from 'react-google-recaptcha'

const WEB3FORMS_KEY      = 'c2f628b8-e12b-4131-bfc3-06aafff45961'
const RECAPTCHA_SITE_KEY = '6Lcw3YIsAAAAAIg5tIYDSjfag1G9aH7lA8-o73JP'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fullName = formData.get('full-name') as string;
    const email    = formData.get('email') as string;
    const subject  = formData.get('subject') as string;
    const message  = formData.get('message') as string;

    if (!email) {
      Swal.fire({ icon: 'warning', title: 'Eksik Bilgi', text: 'Mail adresi girmediniz', confirmButtonColor: '#1a2a3a' });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({ icon: 'warning', title: 'Geçersiz Format', text: 'Lütfen geçerli bir mail adresi giriniz', confirmButtonColor: '#1a2a3a' });
      return;
    }
    if (fullName.length < 3) {
      Swal.fire({ icon: 'warning', title: 'Geçersiz İsim', text: 'Adınız ve soyadınız en az 3 karakter olmalıdır', confirmButtonColor: '#1a2a3a' });
      return;
    }
    if (subject.length < 3) {
      Swal.fire({ icon: 'warning', title: 'Geçersiz Konu', text: 'Konu en az 3 karakter olmalıdır', confirmButtonColor: '#1a2a3a' });
      return;
    }
    if (message.length < 10) {
      Swal.fire({ icon: 'warning', title: 'Eksik Mesaj', text: 'Mesajınız en az 10 karakter olmalıdır', confirmButtonColor: '#1a2a3a' });
      return;
    }

    const captchaToken = recaptchaRef.current?.getValue();
    if (!captchaToken) {
      Swal.fire({ icon: 'warning', title: 'Doğrulama Gerekli', text: 'Lütfen robot olmadığınızı doğrulayın', confirmButtonColor: '#1a2a3a' });
      return;
    }

    setIsSending(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: fullName,
          email,
          subject,
          message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        Swal.fire({ icon: 'success', title: 'Gönderildi!', text: 'Mesajınız başarıyla iletildi, en kısa sürede dönüş yapacağım.', confirmButtonColor: '#28a745' });
        formRef.current?.reset();
        recaptchaRef.current?.reset();
      } else {
        throw new Error(data.message);
      }
    } catch {
      Swal.fire({ icon: 'error', title: 'Hata!', text: 'Mesaj gönderilemedi, lütfen tekrar deneyin.', confirmButtonColor: '#1a2a3a' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="app-container">
      <a href="#main-content" className="skip-link">İçeriğe Atla</a>
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
            <Code2 className="logo-icon" size={28} strokeWidth={2} aria-hidden="true" />
            <h1>ESMA SARITOP</h1>
          </div>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            aria-label="Menüyü aç/kapat"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={menuOpen ? 'nav-open' : ''}>
            <ul>
              <li><a href="#hakkimda" onClick={closeMenu}>HAKKIMIZDA</a></li>
              <li><a href="#projeler" onClick={closeMenu}>PROJELERİM</a></li>
              <li><a href="#iletisim" onClick={closeMenu}>İLETİŞİM</a></li>
            </ul>
          </nav>
          <div className="header-social">
            <a href="https://github.com/esmasaritop" target="_blank" rel="noopener noreferrer" aria-label="GitHub profilim">
              <Github size={22} strokeWidth={2} />
            </a>
            <a href="https://www.linkedin.com/in/esmasaritop/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profilim">
              <Linkedin size={22} strokeWidth={2} />
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
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

        
          <article aria-labelledby="timeline-baslik" className="timeline-article">
            <h3 id="timeline-baslik">Tecrübe ve Eğitim</h3>
            <ol className="timeline" role="list">
              <li className="timeline-item">
                <div className="timeline-date">Eylül 2021 – Halen</div>
                <div className="timeline-content">
                  <strong>Yazılım Mühendisliği Öğrencisi</strong>
                  <span className="timeline-org">Fırat Üniversitesi, Teknoloji Fakültesi</span>
                  <p>Yazılım mühendisliği alanında lisans eğitimim devam etmektedir.</p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-date">Ocak 2023 – Haziran 2023</div>
                <div className="timeline-content">
                  <strong>Code23 Eğitim Programı</strong>
                  <span className="timeline-org">Code23</span>
                  <p>Yazılım geliştirme becerilerimi pekiştiren yoğun eğitim programını tamamladım.</p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-date">Ekim 2023 – Ekim 2024</div>
                <div className="timeline-content">
                  <strong>Yazılım Geliştirici</strong>
                  <span className="timeline-org">Fırat Üniversitesi Dijital Dönüşüm ve Yazılım Ofisi</span>
                  <p>Üniversite bünyesindeki gerçek hayat projelerinde aktif rol aldım.</p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-date">Kasım 2024 – Halen</div>
                <div className="timeline-content">
                  <strong>Yarı Zamanlı Yazılım Geliştirici</strong>
                  <span className="timeline-org">Prodrom ICT Solutions, Fırat Teknokent</span>
                  <p>Şirketin yazılım geliştirme süreçlerine aktif olarak katılmaktayım.</p>
                </div>
              </li>
              <li className="timeline-item timeline-item--active">
                <div className="timeline-date">Ocak 2025 – Halen</div>
                <div className="timeline-content">
                  <strong>Eğitmen Mentor Bursiyeri</strong>
                  <span className="timeline-org">Türkiye Teknoloji Takımı Vakfı (T3 Vakfı)</span>
                  <p>Deneyap öğrencilerinin eğitimi ve mentörlüğü süreçlerinde görev almaktayım.</p>
                </div>
              </li>
            </ol>
          </article>

          <article aria-labelledby="teknolojiler-baslik">
            <h3 id="teknolojiler-baslik">Kullandığım Teknolojiler</h3>
            <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
              <li>HTML5</li><li>CSS3</li><li>Bootstrap</li><li>JavaScript</li><li>Laravel</li>
              <li>React</li><li>Web Services & API</li><li>C#</li><li>MySQL</li><li>PostgreSQL</li>
              <li>jQuery</li><li>AJAX</li><li>TypeScript</li><li>Vite</li><li>Git / GitHub</li><li>SweetAlert2</li>
            </ul>
          </article>
        </section>

        <section id="projeler" aria-labelledby="projeler-baslik">
          <h2 id="projeler-baslik">PROJELERİM</h2>
          <div className="project-grid">
            <article className="project-card" tabIndex={0}>
              <div className="project-image-container">
                <img src="/photos/enstitu.png" alt="LBYS Proje Görseli" className="project-img" />
              </div>
              <h3>Lisansüstü Eğitim Bilgi Yönetim Sistemi (LBYS)</h3>
              <span className="project-date">Ekim 2024 - Halen</span>
              <p>
                Öğrenci ve enstitü arasındaki tüm süreçleri ve bilgi akışlarını yöneten kapsamlı bir sistem.
              </p>
            </article>

            <article className="project-card" tabIndex={0}>
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


            <article className="project-card" tabIndex={0}>
              <div className="project-image-container">
                <img src="/photos/quicklit.png" alt="QuickLit Proje Görseli" className="project-img" />
              </div>
              <h3>QuickLit</h3>
              <span className="project-date">Mart 2025 - Haziran 2025</span>
              <p>
                Akademik kaynaklara hızlı erişim ve PDF özetleme sağlayan AI destekli platform.
              </p>
            </article>

            <article className="project-card" tabIndex={0}>
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

            <article className="project-card" tabIndex={0}>
              <div className="project-image-container">
                <img src="/photos/isaccl.png" alt="Isaccl Proje Görseli" className="project-img" />
              </div>
              <h3>Isaccl</h3>
              <span className="project-date">Ekim 2025 - Halen</span>
              <p>
                Isaccl, Üniversitemize kabul alınmış olan uluslararası öğrencilerin lisansüstü eğitim süreçlerinin başlaması için Yök'den yök-id'lerinin alındığı sistemdir.
              </p>
            </article>

            <article className="project-card" tabIndex={0}>
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

        <section id="iletisim" aria-labelledby="iletisim-baslik">
          <h2 id="iletisim-baslik">İLETİŞİM</h2>

          <div className="contact-layout">
            <div className="contact-info">
              
              <p>
                Yeni bir proje, bir iş birliği fırsatı veya sadece teknoloji üzerine
                sohbet etmek için aşağıdan bana ulaşabilirsiniz. İnovatif fikirlere
                ve zorlayıcı projelere her zaman açığım.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>ADRES</strong>
                    <p>Fırat Üniversitesi Teknoloji Fakültesi Yazılım Mühendisliği Bölümü <br /> Elazığ/Merkez</p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <strong>EMAIL</strong>
                    <p>esmasaritop@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="https://www.linkedin.com/in/esmasaritop/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">LinkedIn</a>
                <a href="https://github.com/esmasaritop" target="_blank" rel="noopener noreferrer" className="social-icon github">GitHub</a>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" noValidate onSubmit={handleSubmit} ref={formRef}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="full-name" className="sr-only">Adınız ve Soyadınız</label>
                    <input type="text" id="full-name" name="full-name" placeholder="Adınız ve Soyadınız" required minLength={3} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">Mail Adresiniz</label>
                    <input type="email" id="email" name="email" placeholder="Mail Adresiniz" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject" className="sr-only">Konu</label>
                  <input type="text" id="subject" name="subject" placeholder="Konu" required minLength={3} />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="sr-only">Mesajınız</label>
                  <textarea id="message" name="message" placeholder="Mesajınız" rows={6} required minLength={10}></textarea>
                </div>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_SITE_KEY}
                  theme="light"
                />
                <button type="submit" className="submit-btn" disabled={isSending}>
                  {isSending ? 'GÖNDERİLİYOR...' : 'MESAJ GÖNDER'} <span className="btn-arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 ESMA SARITOP. Tüm hakları saklıdır.</p>
      </footer>
    </div >
  )
}

export default App
