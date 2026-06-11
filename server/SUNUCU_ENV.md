# Sunucuda (VPS) Çalışması İçin

Docker `env_file: ./server/.env` kullanıyor; **.env repoda yok** (güvenlik). Bu yüzden sunucuda bu dosyayı **elle** oluşturmanız gerekir.

## Adımlar

1. **SSH ile sunucuya bağlanın:**
   ```bash
   ssh kullanici@SUNUCU_IP
   ```

2. **Proje klasörüne gidin:**
   ```bash
   cd /home/rumpel
   ```

3. **server/.env dosyasını oluşturun veya düzenleyin:**
   ```bash
   nano server/.env
   ```
   (veya `vim server/.env`)

4. **Aşağıdaki tüm satırları ekleyin** (kendi değerlerinizle; eşittir sonrası boşluk bırakmayın):
   ```env
   BREVO_API_KEY=...
   BREVO_USER=...
   MONGODB_URI=mongodb://mongo:27017/objektraumung
   CLIENT_ORIGIN=https://objektraeumung.at

   TELEGRAM_CHAT_ID=...
   TELEGRAM_BOT_TOKEN=...

   GOOGLE_ADS_REFRESH_TOKEN=...
   GOOGLE_ADS_DEVELOPER_TOKEN=...
   GOOGLE_ADS_CUSTOMER_ID=...
   GOOGLE_ADS_CLIENT_ID=...
   GOOGLE_ADS_CLIENT_SECRET=...
   ```

5. **Kaydedip çıkın** (nano: Ctrl+O, Enter, Ctrl+X).

6. **Container'ları yeniden başlatın:**
   ```bash
   docker compose down
   docker compose up -d --build
   ```

7. **Logları kontrol edin (hata var mı):**
   ```bash
   docker compose logs server
   docker compose logs -f server
   ```
   "MongoDB connected" ve "Server running on http://localhost:4000" görmelisiniz.

## Sık sorunlar

- **.env sunucuda yok** → Backend eksik env ile çalışır; form, Telegram, Google Ads çalışmaz veya crash olur.
- **Eşittir sonrası boşluk** → Token/ID yanlış okunur; tüm değerlerde `KEY=value` (boşluksuz) kullanın.
- **MongoDB bağlanamıyor** → `docker compose logs mongo` ile mongo'nun ayakta olduğundan emin olun; MONGODB_URI'nin `mongodb://mongo:27017/...` olduğunu kontrol edin.
