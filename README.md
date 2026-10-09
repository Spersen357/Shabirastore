# Shabira Store — Starter Website

Starter frontend responsif untuk toko produk digital. Desain katalog dan interaksi keranjang masih berupa demo.

## Isi
- `index.html` — struktur halaman
- `style.css` — desain responsif
- `app.js` — katalog contoh, filter, pencarian, dan keranjang demo

## Jalankan lokal
Buka `index.html` di browser. Untuk pengembangan lebih lanjut, jalankan dengan server lokal sederhana atau gunakan preview dari editor.

## Deploy ke Cloudflare Pages
1. Buat repository GitHub baru, misalnya `shabira-store`.
2. Unggah file-file dalam folder ini ke root repository.
3. Di Cloudflare Dashboard, buka **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
4. Pilih repository tersebut.
5. Untuk situs statis ini, pilih framework preset **None**; biarkan build command kosong dan gunakan `/` sebagai output directory.
6. Deploy, lalu tambahkan custom domain dari menu proyek Pages.

## Tahap berikutnya sebelum transaksi nyata
- Tentukan katalog produk asli, deskripsi, harga, dan gambar.
- Bangun backend API dan database PostgreSQL (dapat di-host di Railway).
- Integrasikan payment gateway; validasi pembayaran harus dilakukan oleh backend lewat callback/webhook resmi.
- Buat dashboard admin dengan autentikasi.
- Untuk produk berupa file, gunakan object storage dan link unduhan terbatas; untuk kode/akun, buat sistem pengiriman yang sesuai.
- Simpan secret/API key di environment variables backend, jangan di JavaScript frontend.

## Catatan
Ini adalah prototipe tampilan awal, belum menerima pembayaran sungguhan dan belum mengirim produk otomatis. Produk dan harga saat ini hanyalah contoh.
