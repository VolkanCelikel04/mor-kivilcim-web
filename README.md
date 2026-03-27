# MOR Kıvılcım Web Sitesi

MOR Kıvılcım şirketi için modern ve responsive web sitesi.

## 🚀 Özellikler

- **React + TypeScript** - Modern web teknolojileri
- **Tailwind CSS** - Hızlı ve responsive tasarım
- **React Router** - Sayfa yönlendirme
- **Mobil Uyumlu** - Tüm cihazlarda mükemmel görünüm
- **Türkçe İçerik** - Tamamen Türkçe arayüz

## 📱 Sayfalar

- **Ana Sayfa** - Hero bölümü, özellikler ve çağrı-to-action
- **Hakkımızda** - Şirket hikayesi, değerler ve ekip
- **Hizmetler** - 6 farklı hizmet kategorisi
- **İletişim** - İletişim formu ve bilgiler

## 🛠️ Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm start

# Production build oluştur
npm run build
```

## 🎨 Tasarım

- **MOR Renk Paleti** - Özel mor tonları
- **Modern Gradient** - Çekici arka plan geçişleri
- **Responsive Grid** - Tüm ekran boyutları için optimize
- **Hover Efektleri** - İnteraktif kullanıcı deneyimi

## 📞 İletişim

- **Adres:** Levent Mahallesi, Büyükdere Caddesi, İstanbul
- **Telefon:** +90 (212) 555 0123
- **E-posta:** info@morkivilcim.com

## 🔗 Daily Positive (mobil uygulama) API bağlantısı

Bu site, **`DailyPositiveServer`** REST API’sine bağlanır (Auth, destek biletleri vb.). Kaynak kod: `DailyPositive` reposundaki `DailyPositiveServer` projesi; canlı taban adresi varsayılan olarak **`https://api.morkivilcim.com`**.

| Dosya | Açıklama |
|--------|----------|
| `src/config/api.ts` | `BASE_URL`, endpoint yolları |
| `src/services/apiService.ts` | `fetch` / JWT ile istekler (`adminAuthService`, `sentenceInfoService`) |
| `/admin/login` | `POST /api/admin/auth/login` — yalnızca DB’de `IsAdmin = 1` olan kullanıcılar |
| `/admin/sentence-info` | `SentenceInfo` tablosuna yazma + son kayıtlar listesi |
| `/admin/support` | Destek biletleri admin paneli |

**Admin hesabı:** SQL’de `[User]` tablosunda kendi e-postanız için `IsAdmin = 1` olmalı. Aksi halde giriş reddedilir.

Yerel veya farklı ortam için proje kökünde `.env` oluşturun (örnek: `.env.example`):

```bash
REACT_APP_API_URL=https://api.morkivilcim.com
```

Yeni “tablo / içerik” girişleri web üzerinden gerekiyorsa, veriyi ya bu API’ye **yeni korumalı endpoint’ler** ekleyerek ya da (iç ağda) **paylaşılan SQL Server** ile yazarak bağlarsınız; tarayıcıdan doğrudan veritabanına bağlanılmaz.

## 🚀 Deployment

Bu proje Vercel ile deploy edilmiştir. Production’da API adresini Vercel **Environment Variables** içinde `REACT_APP_API_URL` ile ayarlayın; yoksa `api.ts` içindeki varsayılan kullanılır.

---

© 2024 MOR Kıvılcım. Tüm hakları saklıdır.
