:root {
  --warna-utama: #ffcc00;
  --warna-latar: #222;
  --font-utama: Arial, sans-serif;
}

body {
  font-family: var(--font-utama);
  margin: 0;
  padding: 20px;
  background-color: var(--warna-latar);
  color: #fff;
}

.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.section {
  margin-bottom: 20px;
}

.product {
  border: 1px solid var(--warna-utama);
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  background-color: #444;
}

.product:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transform: scale(1.05);
}

footer {
  text-align: center;
  margin-top: 20px;
}
```