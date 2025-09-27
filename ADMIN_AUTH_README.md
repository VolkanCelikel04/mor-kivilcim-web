# Admin Authentication System

Bu dokümantasyon, MOR KIVILCIM WEB projesinde admin destek sayfası için oluşturulan kimlik doğrulama sistemini açıklar.

## Özellikler

### 🔐 Güvenli Giriş Sistemi
- Kullanıcı adı ve şifre ile giriş
- Token tabanlı kimlik doğrulama
- Oturum yönetimi (localStorage)
- Güvenli çıkış

### 🛡️ Korumalı Rotalar
- Admin sayfalarına erişim kontrolü
- Otomatik yönlendirme (giriş yapmamış kullanıcılar login sayfasına yönlendirilir)
- Yükleme durumu gösterimi

### 🎨 Modern UI/UX
- Responsive tasarım
- Şifre görünürlük toggle
- Hata mesajları
- Loading durumları

## Varsayılan Giriş Bilgileri

```
Kullanıcı Adı: admin
Şifre: admin123
```

**⚠️ Önemli:** Üretim ortamında bu bilgileri değiştirin ve güçlü şifreler kullanın!

## Dosya Yapısı

```
src/
├── contexts/
│   └── AuthContext.tsx          # Kimlik doğrulama context'i
├── components/
│   └── ProtectedRoute.tsx       # Korumalı route komponenti
├── pages/
│   ├── AdminLogin.tsx           # Giriş sayfası
│   └── AdminSupport.tsx         # Destek yönetim sayfası (güncellenmiş)
└── App.tsx                      # Ana uygulama (güncellenmiş)
```

## Kullanım

### 1. Admin Girişi
- Tarayıcıda `/admin/support` adresine gidin
- Otomatik olarak `/admin/login` sayfasına yönlendirileceksiniz
- Varsayılan kullanıcı adı ve şifre ile giriş yapın

### 2. Destek Paneli Erişimi
- Başarılı giriş sonrası destek yönetim paneline yönlendirilirsiniz
- Sağ üst köşedeki "Çıkış Yap" butonu ile güvenli çıkış yapabilirsiniz

### 3. Oturum Yönetimi
- Giriş bilgileri tarayıcıda saklanır (localStorage)
- Sayfa yenilendiğinde oturum devam eder
- Çıkış yapıldığında tüm oturum bilgileri temizlenir

## Güvenlik Özellikleri

- **Token Tabanlı Kimlik Doğrulama:** Her API isteğinde Authorization header ile token gönderilir
- **Route Koruması:** Korumalı sayfalara doğrudan erişim engellenir
- **Otomatik Yönlendirme:** Yetkisiz erişimlerde login sayfasına yönlendirme
- **Güvenli Çıkış:** Çıkış yapıldığında tüm kimlik bilgileri temizlenir

## Geliştirme Notları

### Backend Entegrasyonu
Mevcut kod yapısı backend API'leri ile çalışacak şekilde hazırlanmıştır:

```typescript
// API isteklerinde token kullanımı
headers: {
  'Authorization': `Bearer ${token}`
}
```

### Üretim Ortamı İçin Öneriler
1. **Güçlü Şifreler:** Varsayılan şifreyi değiştirin
2. **Backend Kimlik Doğrulama:** Gerçek API endpoint'leri oluşturun
3. **JWT Token:** Backend'de JWT token sistemi kullanın
4. **Şifre Hashleme:** Şifreleri hashleyerek saklayın
5. **Rate Limiting:** Giriş denemelerini sınırlayın

## API Endpoint'leri

Sistem şu endpoint'lerle çalışacak şekilde hazırlanmıştır:

- `POST /api/admin/login` - Giriş işlemi
- `GET /api/admin/support/tickets` - Ticket listesi
- `POST /api/admin/support/tickets/{id}/messages` - Mesaj gönderme
- `PATCH /api/admin/support/tickets/{id}` - Ticket güncelleme

## Sorun Giderme

### Giriş Yapamıyorum
- Kullanıcı adı ve şifreyi kontrol edin
- Tarayıcı konsolunda hata mesajlarını kontrol edin

### Sayfa Yüklenmiyor
- Tarayıcı cache'ini temizleyin
- Geliştirici araçlarında network sekmesini kontrol edin

### Token Hataları
- localStorage'ı temizleyin
- Tekrar giriş yapmayı deneyin

## İletişim

Herhangi bir sorun veya öneri için geliştirici ekibi ile iletişime geçin.
