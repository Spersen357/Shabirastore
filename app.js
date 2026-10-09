const products = [
  {id:1,name:"Paket Akun Digital",category:"Akun Digital",description:"Contoh produk akun atau layanan digital.",price:25000,symbol:"ID",art:"art-lilac"},
  {id:2,name:"Template Premium",category:"File Digital",description:"Contoh template siap pakai untuk kebutuhanmu.",price:15000,symbol:"T",art:"art-peach"},
  {id:3,name:"E-Book Digital",category:"File Digital",description:"Contoh file digital yang bisa diakses online.",price:12000,symbol:"e",art:"art-mint"},
  {id:4,name:"Voucher Digital",category:"Voucher",description:"Contoh voucher atau kode digital.",price:20000,symbol:"✦",art:"art-blue"}
];
let activeCategory = "Semua";
let cart = [];
const rupiah = n => new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
const grid = document.getElementById("productGrid");
const empty = document.getElementById("emptyState");
const search = document.getElementById("searchInput");
const toast = document.getElementById("toast");
let toastTimer;
function showToast(message){toast.textContent=message;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),2600)}
function renderProducts(){
  const q=search.value.trim().toLowerCase();
  const shown=products.filter(p=>(activeCategory==="Semua"||p.category===activeCategory)&&(p.name+" "+p.category+" "+p.description).toLowerCase().includes(q));
  grid.innerHTML=shown.map(p=>`<article class="product-card"><div class="product-art ${p.art}"><span class="art-symbol">${p.symbol}</span></div><div class="product-info"><span class="product-category">${p.category}</span><h3>${p.name}</h3><p>${p.description}</p><div class="product-bottom"><span class="product-price">${rupiah(p.price)}</span><button class="add-button" data-add="${p.id}" aria-label="Tambah ${p.name} ke keranjang">+</button></div></div></article>`).join("");
  empty.hidden=shown.length>0;
}
document.getElementById("filterRow").addEventListener("click",e=>{const b=e.target.closest("button[data-category]");if(!b)return;activeCategory=b.dataset.category;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));renderProducts()});
search.addEventListener("input",renderProducts);
grid.addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(!b)return;const p=products.find(x=>x.id===Number(b.dataset.add));cart.push(p);document.getElementById("cartCount").textContent=cart.length;showToast(`${p.name} ditambahkan ke keranjang demo.`)});
document.getElementById("cartButton").addEventListener("click",()=>{if(!cart.length){showToast("Keranjang masih kosong.");return}const total=cart.reduce((s,p)=>s+p.price,0);showToast(`Demo keranjang: ${cart.length} item · ${rupiah(total)}. Checkout belum terhubung.`)});
document.getElementById("year").textContent=new Date().getFullYear();
renderProducts();
