const products = [
  {id:1,name:"Netflix",category:"Streaming",description:"Contoh listing layanan streaming.",price:25000,logo:"N",imageClass:"bg-red",logoClass:"logo-red"},
  {id:2,name:"WeTV",category:"Streaming",description:"Contoh listing drama dan hiburan.",price:15000,logo:"W",imageClass:"bg-pink",logoClass:"logo-pink"},
  {id:3,name:"iQIYI",category:"Streaming",description:"Contoh listing layanan video.",price:18000,logo:"iQ",imageClass:"bg-blue",logoClass:"logo-blue"},
  {id:4,name:"CapCut",category:"Editing",description:"Contoh listing aplikasi editing.",price:20000,logo:"C",imageClass:"bg-teal",logoClass:"logo-teal"},
  {id:5,name:"Meitu",category:"Editing",description:"Contoh listing aplikasi foto.",price:15000,logo:"M",imageClass:"bg-pink",logoClass:"logo-pink"},
  {id:6,name:"CamScanner",category:"Produktivitas",description:"Contoh listing aplikasi produktivitas.",price:12000,logo:"CS",imageClass:"bg-blue",logoClass:"logo-blue"},
  {id:7,name:"Disney+",category:"Streaming",description:"Contoh listing hiburan keluarga.",price:28000,logo:"D+",imageClass:"bg-blue",logoClass:"logo-blue"},
  {id:8,name:"Layanan Digital",category:"Lainnya",description:"Tambahkan layanan digital lainnya.",price:10000,logo:"✦",imageClass:"bg-teal",logoClass:"logo-teal"}
];
let activeCategory = "Semua";
const grid = document.getElementById("productGrid");
const search = document.getElementById("searchInput");
const empty = document.getElementById("emptyState");
const count = document.getElementById("productCount");
const toast = document.getElementById("toast");
let toastTimer;
const rupiah = n => new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
function notify(msg){toast.textContent=msg;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),2500)}
function render(){
  const q=search.value.trim().toLowerCase();
  const shown=products.filter(p=>(activeCategory==="Semua"||p.category===activeCategory)&&(p.name+" "+p.category+" "+p.description).toLowerCase().includes(q));
  grid.innerHTML=shown.map(p=>`<article class="product-card"><div class="product-image ${p.imageClass}"><div class="product-logo ${p.logoClass}">${p.logo}</div></div><div class="product-info"><span class="product-category">${p.category}</span><h3>${p.name}</h3><p>${p.description}</p><div class="product-meta"><span class="price">${rupiah(p.price)}</span><button class="demo-button" data-detail="${p.id}">Detail ↗</button></div></div></article>`).join("");
  count.textContent=`${shown.length} produk`;
  empty.hidden=shown.length>0;
}
document.querySelector(".category-strip").addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(!b)return;activeCategory=b.dataset.category;document.querySelectorAll(".category-pill").forEach(x=>x.classList.toggle("active",x===b));render()});
// Pencarian hanya memperbarui hasil di tempat; tidak memindahkan posisi halaman.
search.addEventListener("input",render);
search.addEventListener("keydown",e=>{
  if(e.key==="Enter"){
    e.preventDefault();
    render();
    document.getElementById("katalog").scrollIntoView({behavior:"smooth",block:"start"});
    search.blur();
  }
});
grid.addEventListener("click",e=>{const b=e.target.closest("[data-detail]");if(!b)return;const p=products.find(x=>x.id===Number(b.dataset.detail));notify(`${p.name}: contoh produk. Pemesanan belum diaktifkan.`)});
document.getElementById("year").textContent=new Date().getFullYear();
render();
