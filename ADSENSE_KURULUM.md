# 💰 Google AdSense Kurulum Rehberi — Türk Tarihi Satrancı

Web sitenizden reklam geliri elde etmek için AdSense kurulumu.

---

## 📋 Adım 1: AdSense Hesabı Aç

1. [google.com/adsense](https://www.google.com/adsense) → **Başla**
2. Google hesabınızla giriş yapın
3. **Web sitenizi ekleyin:** `turktarihsatranc.com`
4. Ülke: Türkiye, Para birimi: seçin (TRY veya USD)
5. Ödeme bilgilerinizi girin

---

## 📋 Adım 2: Siteyi Doğrula ve Onay Bekle

1. AdSense size bir **doğrulama kodu** verir (script)
2. Bu kod zaten `index.html`'de hazır (yorum satırında)
3. **Publisher ID'nizi** (`ca-pub-XXXXXXXXXXXXXXXX`) alın
4. Siteyi AdSense'e gönderin
5. **⏳ Onay bekleyin** — genelde 1-14 gün sürer

> ⚠️ AdSense onayı için sitenizin **canlı, erişilebilir ve içerikli** olması gerekir.
> Domain'inizi (`turktarihsatranc.com`) Cloudflare'e deploy etmiş olmalısınız.

---

## 📋 Adım 3: Kodları Güncelle (Onay Sonrası)

Onay geldikten sonra **3 dosyada** `XXXX` yerlerini gerçek ID'lerinizle değiştirin:

### 1️⃣ `index.html`
```html
<!-- Yorumu kaldırın ve ID'yi yazın -->
<script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-GERÇEK_ID"
  crossorigin="anonymous"
></script>
```

### 2️⃣ `src/chess/AdSense.tsx`
```typescript
export const ADSENSE_CLIENT = 'ca-pub-GERÇEK_ID';      // Publisher ID
export const ADSENSE_SLOT_BANNER = 'GERÇEK_SLOT_ID';   // Reklam birimi ID
```

### 3️⃣ `public/ads.txt`
```
google.com, pub-GERÇEK_ID, DIRECT, f08c47fec0942fa0
```

---

## 📋 Adım 4: Reklam Birimi Oluştur

1. AdSense paneli → **Reklamlar** → **Reklam birimine göre**
2. **Görüntülü reklam** seçin
3. Ad: "Banner - Türk Tarihi Satrancı"
4. **Oluştur** → size bir **slot ID** verir (10 haneli sayı)
5. Bu slot ID'yi `AdSense.tsx`'teki `ADSENSE_SLOT_BANNER`'a yazın

---

## 📍 Reklamların Gösterildiği Yerler

Sitede reklamlar **kullanıcıyı rahatsız etmeyecek** şekilde yerleştirildi:

| Konum | Açıklama |
|-------|----------|
| **Landing sayfası** | "Nasıl Oynanır" ve "Hakkında" arasında |
| **Oyun ekranı** | Tahtanın altında (oyun sırasında dikkat dağıtmaz) |

❌ **Oyun tahtasının üstünde reklam YOK** (oynanışı bozmamak için)

---

## 💡 Onay Öncesi Durum

AdSense onayı gelmeden önce:
- Reklam alanları **"📢 Reklam Alanı"** yazan gri kutular olarak görünür
- Kod `XXXX` içerdiği sürece gerçek reklam yüklenmez
- Site tamamen normal çalışır

Onay + ID güncellemesi sonrası:
- Gri kutular yerine **gerçek reklamlar** görünür
- Gelir kazanmaya başlarsınız

---

## 💰 Gelir Beklentisi

| Metrik | Türkiye | Global |
|--------|---------|--------|
| eCPM (1000 gösterim) | $0.30-1.50 | $1-5 |
| Tıklama başına (CPC) | $0.02-0.15 | $0.10-0.50 |

**Örnek:** Günde 1000 ziyaretçi → aylık ~$30-150 (Türkiye), ~$60-300 (global karışık)

> 💡 Trafik arttıkça gelir katlanır. SEO ve sosyal medya ile ziyaretçi çekin.

---

## ⚖️ AdSense Politikaları (Önemli!)

✅ **Yapın:**
- Kaliteli, özgün içerik (oyun + tarih bilgisi zaten var)
- Reklamları açıkça "reklam" olarak işaretleyin
- Mobil uyumlu tasarım (zaten var)

❌ **Yapmayın:**
- Kendi reklamlarınıza tıklamayın (hesap kapanır!)
- Arkadaşlarınızdan tıklamalarını istemeyin
- Yanıltıcı reklam yerleşimi ("buraya tıkla" gibi)
- Çok fazla reklam (sayfa başına 3'ten fazla önerilmez)

---

## 🔄 Alternatif Reklam Ağları

AdSense onayı gelmezse veya beklemek istemezseniz:

| Ağ | Avantaj | Onay Süresi |
|----|---------|-------------|
| **Google AdSense** | En yüksek gelir | 1-14 gün |
| **Media.net** | Yahoo/Bing reklamları | 1-3 gün |
| **PropellerAds** | Anında onay | Hemen |
| **Adsterra** | Kolay onay | 1-2 gün |
| **Ezoic** | AI optimizasyon | Orta |

---

## 📞 Özet Kontrol Listesi

```
☐ Domain canlı (turktarihsatranc.com Cloudflare'de)
☐ AdSense hesabı açıldı
☐ Site AdSense'e eklendi
☐ Onay beklendi (1-14 gün)
☐ index.html'de Publisher ID güncellendi + yorum kaldırıldı
☐ AdSense.tsx'te ID'ler güncellendi
☐ ads.txt güncellendi
☐ Reklam birimi oluşturuldu, slot ID girildi
☐ GitHub'a push → Cloudflare otomatik deploy
☐ Reklamlar canlıda görünüyor
☐ Gelir kazanılıyor! 💰
```

Başarılar! Reklamlar kullanıcı deneyimini bozmadan gelir getirecek şekilde ayarlandı. ⚔️♛
