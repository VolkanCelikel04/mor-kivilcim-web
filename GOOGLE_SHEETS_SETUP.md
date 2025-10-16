# 📊 Google Sheets İletişim Formu Kurulum Rehberi

## 🎯 Adım 1: Google Sheets Oluşturma

1. **Google Sheets'e gidin**: https://sheets.google.com
2. **Yeni bir sayfa oluşturun**: "MOR Kıvılcım İletişim Formları" adında
3. **İlk satıra başlıkları ekleyin** (A1'den başlayarak):
   - A1: `Tarih`
   - B1: `Ad Soyad`
   - C1: `E-posta`
   - D1: `Telefon`
   - E1: `Şirket`
   - F1: `Mesaj`

## 🔧 Adım 2: Apps Script Kurulumu

1. **Extensions menüsünü açın** → **Apps Script**'e tıklayın
2. **Açılan editörde `Code.gs` dosyasına** aşağıdaki kodu yapıştırın:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // JSON verisini parse et
    var data = JSON.parse(e.postData.contents);
    
    // Tarih bilgisi
    var timestamp = new Date();
    
    // Verileri satıra ekle
    sheet.appendRow([
      timestamp,
      data.name,
      data.email,
      data.phone || '-',
      data.company || '-',
      data.message
    ]);
    
    // Başarılı yanıt
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Form başarıyla kaydedildi'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Hata yanıtı
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Hata: ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'online',
    message: 'MOR Kıvılcım İletişim Formu API'
  })).setMimeType(ContentService.MimeType.JSON);
}
```

3. **Kaydet** butonuna tıklayın (💾 ikonu)
4. **Deploy** → **New deployment** seçin
5. **Select type** → **Web app** seçin
6. **Ayarları yapın**:
   - Description: `MOR Kıvılcım İletişim Formu v1`
   - Execute as: **Me**
   - Who has access: **Anyone** (önemli!)
7. **Deploy** butonuna tıklayın
8. **İzinleri onaylayın** (Google hesabınızla giriş yapın)
9. **Web app URL'ini kopyalayın** - Bu URL şuna benzer olacak:
   ```
   https://script.google.com/macros/s/AKfycby...../exec
   ```

## 🔐 Adım 3: Environment Variable Ekleme

1. **Proje klasöründe `.env` dosyası oluşturun** (yoksa)
2. **Aşağıdaki satırı ekleyin** (kopyaladığınız URL ile):
   ```
   REACT_APP_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/SIZIN_SCRIPT_ID/exec
   ```

## 🚀 Adım 4: Test

1. **Projeyi build edin**:
   ```bash
   npm run build
   ```

2. **Local'de test edin**:
   ```bash
   npm start
   ```

3. **İletişim formunu doldurun ve gönderin**

4. **Google Sheets'e gidin ve yeni satırı kontrol edin** ✅

## 📱 Adım 5: Netlify'da Environment Variable Ekleme

1. **Netlify Dashboard**'a gidin
2. **Site Settings** → **Environment variables**
3. **Add a variable** butonuna tıklayın
4. **Key**: `REACT_APP_GOOGLE_SCRIPT_URL`
5. **Value**: Kopyaladığınız Google Script URL'i
6. **Save** butonuna tıklayın
7. **Site'i yeniden deploy edin**

## ✅ Tamamlandı!

Artık web sitenizdeki iletişim formundan gelen tüm mesajlar otomatik olarak Google Sheets'e kaydedilecek.

### 📊 Google Sheets'te göreceğiniz bilgiler:
- ✅ Tarih ve saat
- ✅ Ad Soyad
- ✅ E-posta
- ✅ Telefon
- ✅ Şirket
- ✅ Mesaj içeriği

### 🔔 Bildirim almak isterseniz:
Google Sheets'te **Tools** → **Notification rules** menüsünden "herhangi bir değişiklik yapıldığında" email bildirimi alabilirsiniz.

## ⚠️ Önemli Notlar:

1. **.env dosyasını Git'e eklemeyin** (.gitignore'da olmalı)
2. **Apps Script'i "Anyone" erişimine açmayı unutmayın**
3. **Her deploy sonrası yeni URL alırsanız, environment variable'ı güncelleyin**

## 🆘 Sorun yaşarsanız:

- Google Sheets'te veri görünmüyorsa → Apps Script izinlerini kontrol edin
- Form gönderilmiyor uyarısı alıyorsanız → Environment variable'ın doğru olduğunu kontrol edin
- CORS hatası alıyorsanız → Apps Script'te "Who has access: Anyone" seçeneğini kontrol edin

İyi çalışmalar! 🎉
