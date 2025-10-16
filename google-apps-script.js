// Google Apps Script - Google Sheets'e form verilerini kaydetmek için
// Bu kodu Google Sheets > Extensions > Apps Script içine yapıştırın

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
