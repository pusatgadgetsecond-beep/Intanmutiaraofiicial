<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Intan Mutiara Cell - Marketplace</title>
  <style>
    body{font-family:'Poppins',sans-serif;background:#f9fafb;margin:0;}
    header{background:#1e40af;color:#fff;padding:15px;position:sticky;top:0;z-index:1000;display:flex;justify-content:space-between;align-items:center;}
    header .profile{display:flex;align-items:center;gap:12px;}
    header img{width:45px;height:45px;border-radius:50%;border:2px solid #fff;}
    header h1{margin:0;font-size:1.3rem;}

    .search-bar{flex:1;margin:0 20px;}
    .search-bar input{width:100%;padding:10px;border-radius:8px;border:none;font-size:1rem;}
    .market-links a{margin-left:10px;text-decoration:none;padding:8px 12px;border-radius:8px;color:#fff;font-weight:600;}
    .market-links .shopee{background:#f97316;}
    .market-links .tokopedia{background:#16a34a;}

    .banner{width:100%;height:220px;overflow:hidden;}
    .banner img{width:100%;height:100%;object-fit:cover;}

    .container{display:flex;max-width:1500px;margin:auto;padding:20px;}
    aside{width:220px;margin-right:20px;}
    aside h3{margin-bottom:10px;color:#1e3a8a;}
    aside ul{list-style:none;padding:0;}
    aside ul li{margin-bottom:8px;}
    aside ul li button{width:100%;text-align:left;background:none;border:none;padding:6px 8px;border-radius:6px;cursor:pointer;font-weight:500;color:#1e3a8a;transition:0.3s;}
    aside ul li button:hover, aside ul li button.active{background:#e0e7ff;}

    main{flex:1;}
    .product-grid{
      display:grid;
      grid-template-columns:repeat(5,1fr);
      gap:20px;
    }
    .product-card{background:#fff;border-radius:12px;box-shadow:0 3px 8px rgba(0,0,0,0.08);overflow:hidden;transition:0.3s;display:flex;flex-direction:column;}
    .product-card:hover{transform:translateY(-4px);}
    .product-image img{width:100%;height:180px;object-fit:cover;}
    .product-info{padding:12px;display:flex;flex-direction:column;flex-grow:1;}
    .product-title{font-weight:600;font-size:0.95rem;margin-bottom:6px;}
    .product-price{color:#e11d48;font-weight:700;margin-bottom:10px;font-size:0.9rem;}
    .buy-links{margin-top:auto;display:flex;gap:6px;}
    .buy-links a{flex:1;text-align:center;padding:7px;border-radius:6px;font-weight:600;text-decoration:none;color:#fff;font-size:0.85rem;}
    .buy-links .shopee{background:#f97316;}
    .buy-links .tokopedia{background:#16a34a;}

    .pagination{margin:30px 0;display:flex;justify-content:center;gap:6px;flex-wrap:wrap;}
    .pagination button{padding:6px 12px;border:none;background:#1e40af;color:#fff;border-radius:5px;cursor:pointer;font-weight:600;}
    .pagination button.active{background:#e11d48;}
    .pagination button:disabled{background:#94a3b8;cursor:not-allowed;}

    footer{background:#1e3a8a;color:#fff;padding:30px 20px;margin-top:40px;}
    footer .footer-container{max-width:1200px;margin:auto;display:flex;flex-wrap:wrap;justify-content:space-between;gap:20px;}
    footer h3{margin-bottom:12px;font-size:1.1rem;}
    footer p{margin:0;}

    /* === Follow Kami Horizontal + Ikon Bulat === */
    .follow-wrapper {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    .follow-wrapper h3 {
      margin: 0;
      white-space: nowrap;
    }
    .social-icons {
      display: flex;
      gap: 12px;
    }
    .social-icons a img {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #fff;
      padding: 6px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.15);
      transition: transform 0.4s, background 0.4s;
    }
    .social-icons a img:hover {
      transform: scale(1.2);
      background: #e0e7ff;
    }
  </style>
</head>
<body>

<header>
  <div class="profile">
    <img src="Intan Mutiara.jpg?text=Logo" alt="Logo Toko">
    <h1>Intan Mutiara Cell</h1>
  </div>
  <div class="search-bar"><input type="text" id="searchInput" placeholder="Cari produk..."></div>
  <div class="market-links">
    <a href="https://shopee.co.id/intanmutiaracell" target="_blank" class="shopee">Shopee</a>
    <a href="https://tokopedia.com/intanmutiaracell" target="_blank" class="tokopedia">Tokopedia</a>
  </div>
</header>

<div class="banner">
  <img src="Intan Mutiara Cell.jpg?text=Foto+Sampul+Toko" alt="Sampul Toko">
</div>

<div class="container">
  <!-- Sidebar Kategori Produk -->
  <aside>
    <h3>Kategori Produk</h3>
    <ul id="categoryList"></ul>
  </aside>

  <!-- Produk -->
  <main>
    <div id="productGrid" class="product-grid"></div>
    <div class="pagination" id="pagination"></div>
  </main>
</div>

<!-- Footer -->
<footer>
  <div class="footer-container">
    <div class="follow-wrapper">
      <h3>Follow Kami :</h3>
      <div class="social-icons">
        <a href="https://instagram.com/intanmutiaracell" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram"></a>
        <a href="https://tiktok.com/@intanmutiaracell" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046120.png" alt="TikTok"></a>
        <a href="https://youtube.com/@intanmutiaracell" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube"></a>
      </div>
    </div>
    <div>
      <h3>Alamat Toko</h3>
      <p>Intan Mutiara, Jl. Pemuda No.27-31, Embong Kaliasin, Kec. Genteng, Surabaya Jawa Timur</p>
      <p>Telp/WA: 0896 - 5342 - 9419</p>
    </div>
  </div>
</footer>

<!-- Tempel script ini di bagian paling bawah sebelum </body> -->
<script>
  const apiURL = "hhttps://script.google.com/macros/s/AKfycbz0ei6wSbGQd4duEMtSrSjANRz8Brk2hQxarEl76WZSo2gYlL4tUXo3spMXl3Jiv3M9/exec"; // GANTI INI!

  const perPage = 50;
  let currentPage = 1;
  let currentCategory = "All";
  let products = [];

  const productGrid = document.getElementById("productGrid");
  const pagination = document.getElementById("pagination");
  const searchInput = document.getElementById("searchInput");
  const categoryList = document.getElementById("categoryList");

  async function fetchProducts() {
    try {
      const res = await fetch(apiURL);
      const data = await res.json();
      products = data;
      generateCategories();
      renderProducts(currentPage);
    } catch (err) {
      productGrid.innerHTML = "<p>Gagal memuat produk. Periksa koneksi atau API!</p>";
      console.error(err);
    }
  }

  function generateCategories() {
    categoryList.innerHTML = "";
    const categories = ["All", ...new Set(products.map(p => p.category))];
    categories.forEach(cat => {
      let li = document.createElement("li");
      let btn = document.createElement("button");
      btn.textContent = cat;
      btn.addEventListener("click", () => {
        document.querySelectorAll("#categoryList button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = cat;
        currentPage = 1;
        renderProducts(currentPage, searchInput.value);
      });
      if (cat === "All") btn.classList.add("active");
      li.appendChild(btn);
      categoryList.appendChild(li);
    });
  }

  function renderProducts(page, keyword = "") {
    productGrid.innerHTML = "";
    let filtered = products.filter(p =>
      p.title.toLowerCase().includes(keyword.toLowerCase()) &&
      (currentCategory === "All" || p.category === currentCategory)
    );

    let totalPages = Math.ceil(filtered.length / perPage) || 1;
    let start = (page - 1) * perPage;
    let end = start + perPage;
    let paginated = filtered.slice(start, end);

    if (paginated.length === 0) {
      productGrid.innerHTML = "<p>Produk tidak ditemukan.</p>";
      pagination.innerHTML = "";
      return;
    }

    paginated.forEach(p => {
      let card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <div class="product-image"><img src="${p.image}" alt="${p.title}"></div>
        <div class="product-info">
          <div class="product-title">${p.title}</div>
          <div class="product-price">${p.price}</div>
          <div class="buy-links">
            <a href="${p.shopee}" target="_blank" class="shopee">Shopee</a>
            <a href="${p.tokopedia}" target="_blank" class="tokopedia">Tokopedia</a>
          </div>
        </div>
      `;
      productGrid.appendChild(card);
    });

    // PAGINATION
    pagination.innerHTML = "";
    let prev = document.createElement("button");
    prev.textContent = "<";
    prev.disabled = page === 1;
    prev.addEventListener("click", () => {
      currentPage--;
      renderProducts(currentPage, searchInput.value);
    });
    pagination.appendChild(prev);

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= page - 2 && i <= page + 2)) {
        let btn = document.createElement("button");
        btn.textContent = i;
        if (i === page) btn.classList.add("active");
        btn.addEventListener("click", () => {
          currentPage = i;
          renderProducts(currentPage, searchInput.value);
        });
        pagination.appendChild(btn);
      } else if (i === 2 && page > 4 || i === totalPages - 1 && page < totalPages - 3) {
        let dots = document.createElement("button");
        dots.textContent = "...";
        dots.disabled = true;
        pagination.appendChild(dots);
      }
    }

    let next = document.createElement("button");
    next.textContent = ">";
    next.disabled = page === totalPages;
    next.addEventListener("click", () => {
      currentPage++;
      renderProducts(currentPage, searchInput.value);
    });
    pagination.appendChild(next);
  }

  searchInput.addEventListener("input", () => {
    currentPage = 1;
    renderProducts(currentPage, searchInput.value);
  });

  fetchProducts();
</script>
</body>
</html>
