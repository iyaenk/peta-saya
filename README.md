# Map Project — Mapillary

Peta web sederhana untuk GitHub Pages menggunakan MapLibre GL JS dan MapillaryJS.

## Cara pakai
1. Buat repository GitHub, misalnya `map-project`.
2. Upload `index.html`, `style.css`, `app.js`, dan `README.md`.
3. GitHub → Settings → Pages → Deploy from branch → `main` → `/ (root)`.
4. Buka website GitHub Pages.
5. Klik **🔑 Token** dan masukkan Mapillary access token.
6. Zoom ke jalan yang memiliki coverage hijau lalu klik.

## Catatan keamanan
Jangan masukkan client secret ke JavaScript. Access token client-side dapat terlihat oleh pengguna browser, jadi gunakan token/scope yang sesuai dan jangan aktifkan WRITE/UPLOAD jika tidak dibutuhkan.

## Sumber resmi
Mapillary API: https://help.mapillary.com/hc/en-us/articles/360010234680-Accessing-imagery-and-data-through-the-Mapillary-API
MapillaryJS: https://help.mapillary.com/hc/en-us/articles/17367137171100-MapillaryJS
Contoh resmi: https://github.com/mapillary/api-demo
GitHub Pages: https://docs.github.com/en/pages

Aplikasi menampilkan atribusi Mapillary dan OpenStreetMap.
