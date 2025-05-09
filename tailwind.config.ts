/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',   // Menyertakan semua file di dalam folder `pages`
      './components/**/*.{js,ts,jsx,tsx}', // Menyertakan semua file di dalam folder `components`
      './app/**/*.{js,ts,jsx,tsx}',      // Jika kamu menggunakan struktur folder `app/` di Next.js
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  