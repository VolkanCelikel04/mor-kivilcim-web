# Azure API Entegrasyonu - MOR KIVILCIM WEB

Bu dokümantasyon, MOR KIVILCIM WEB projesinin Azure'da bulunan DailyPositive API'si ile entegrasyonunu açıklar.

## 🔗 Azure API Bilgileri

- **API URL:** `https://mor-kivilcim-server-c7dggnb6ccdbb9ds.canadacentral-01.azurewebsites.net`
- **Kaynak Proje:** DailyPositive
- **API Tipi:** ASP.NET Core Web API

## 📁 Yeni Dosya Yapısı

```
src/
├── config/
│   └── api.ts                    # Azure API konfigürasyonu
├── services/
│   └── apiService.ts             # API servis katmanı
├── contexts/
│   └── AuthContext.tsx           # Güncellenmiş auth context
├── pages/
│   ├── AdminLogin.tsx            # Güncellenmiş login sayfası
│   └── AdminSupport.tsx          # Güncellenmiş admin sayfası
└── components/
    └── ProtectedRoute.tsx        # Korumalı route komponenti
```

## 🚀 API Endpoint'leri

### Authentication Endpoints
- `POST /api/auth/login` - Kullanıcı girişi
- `POST /api/auth/register` - Kullanıcı kaydı
- `GET /api/auth/profile` - Kullanıcı profili

### Support System Endpoints
- `GET /api/admin/support/tickets` - Ticket listesi
- `GET /api/admin/support/tickets/{id}` - Ticket detayı
- `POST /api/admin/support/tickets/{id}/messages` - Mesaj gönderme
- `PATCH /api/admin/support/tickets/{id}` - Ticket güncelleme
- `GET /api/admin/support/statistics` - İstatistikler

### Categories Endpoints
- `GET /api/support/categories` - Destek kategorileri
- `GET /api/categories` - Genel kategoriler

## 🔐 Kimlik Doğrulama Sistemi

### 1. Giriş İşlemi
```typescript
// Azure API ile giriş
const response = await authService.login(email, password);

// Fallback: Test credentials
if (email === 'admin' && password === 'admin123') {
  // Local fallback authentication
}
```

### 2. Token Yönetimi
- JWT token Azure API'den alınır
- localStorage'da saklanır
- Her API isteğinde Authorization header'da gönderilir

### 3. Oturum Yönetimi
- Sayfa yenilendiğinde token kontrol edilir
- Token süresi dolduğunda otomatik çıkış
- Güvenli çıkış işlemi

## 🛠️ Kurulum ve Konfigürasyon

### 1. Environment Variables
```bash
# .env dosyası oluşturun
REACT_APP_API_URL=https://mor-kivilcim-server-c7dggnb6ccdbb9ds.canadacentral-01.azurewebsites.net
REACT_APP_ENV=development
```

### 2. API Servis Kullanımı
```typescript
import { supportService, authService } from '../services/apiService';

// Ticket'ları yükle
const tickets = await supportService.getTickets(token, { status: 'all' });

// Mesaj gönder
await supportService.sendMessage(token, ticketId, message);
```

### 3. Error Handling
```typescript
try {
  const response = await supportService.getTickets(token);
  if (response.success) {
    // Başarılı işlem
  }
} catch (error) {
  if (error.status === 401) {
    // Token geçersiz - çıkış yap
  }
  // Hata işleme
}
```

## 🔧 Geliştirme Notları

### 1. Fallback Sistemi
- Azure API erişilemezse local test credentials kullanılır
- Offline çalışma desteği
- Geliştirme ortamı için kolay test

### 2. Type Safety
- TypeScript ile tam tip güvenliği
- API response'ları için interface'ler
- Error handling için custom error sınıfları

### 3. Performance
- Request timeout: 10 saniye
- Retry mechanism: 3 deneme
- Loading states ve error handling

## 🚨 Güvenlik Özellikleri

### 1. Token Güvenliği
- Token localStorage'da şifrelenmeden saklanır (geliştirme)
- Production'da httpOnly cookie kullanılmalı
- Token expiration kontrolü

### 2. API Güvenliği
- CORS yapılandırması
- HTTPS zorunlu
- Input validation

### 3. Admin Yetkilendirme
- Sadece admin kullanıcılar erişebilir
- Protected route kontrolü
- Session timeout

## 📱 Kullanım Örnekleri

### 1. Admin Girişi
```typescript
// Azure API ile giriş
const success = await login('admin@morkivilcim.com', 'password123');

// Test için fallback
const success = await login('admin', 'admin123');
```

### 2. Ticket Yönetimi
```typescript
// Ticket listesi
const tickets = await supportService.getTickets(token);

// Ticket durumu güncelle
await supportService.updateTicketStatus(token, ticketId, 3);

// Mesaj gönder
await supportService.sendMessage(token, ticketId, 'Yanıt mesajı');
```

### 3. İstatistikler
```typescript
const stats = await supportService.getStatistics(token);
```

## 🔍 Sorun Giderme

### 1. API Bağlantı Sorunları
- Azure API URL'ini kontrol edin
- CORS ayarlarını kontrol edin
- Network bağlantısını kontrol edin

### 2. Authentication Sorunları
- Token'ın geçerli olduğunu kontrol edin
- Credentials'ları kontrol edin
- Browser localStorage'ı temizleyin

### 3. Performance Sorunları
- Network tab'ında request sürelerini kontrol edin
- API response boyutlarını kontrol edin
- Caching stratejilerini değerlendirin

## 🚀 Production Deployment

### 1. Environment Variables
```bash
REACT_APP_API_URL=https://mor-kivilcim-server-c7dggnb6ccdbb9ds.canadacentral-01.azurewebsites.net
REACT_APP_ENV=production
```

### 2. Security Checklist
- [ ] HTTPS kullanımı
- [ ] Token güvenliği
- [ ] CORS ayarları
- [ ] Input validation
- [ ] Error handling

### 3. Monitoring
- API response süreleri
- Error rates
- User authentication success rates

## 📞 Destek

Herhangi bir sorun yaşarsanız:
1. Browser console'da hata mesajlarını kontrol edin
2. Network tab'ında API isteklerini kontrol edin
3. Azure API'nin çalışır durumda olduğunu kontrol edin
4. Geliştirici ekibi ile iletişime geçin

---

**Son Güncelleme:** 2024
**Versiyon:** 1.0.0
**API Versiyonu:** DailyPositive v1.0
