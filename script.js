//Scroll Section Active Link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  //Sticky Navbar
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  //Remove Icon Navbar when Scrolling
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

//Toggle Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

//Scroll Reveal
ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 1000,
  delay:100
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .services-container, .product-content, .contact-box', { origin: 'bottom' });

//Types JS (Macam2 Services)
const typed = new Typed('.multiple-text', {
  strings: ['Maintenance Welding Robot', 'Electrical and Mechanical', 'Machining', 'Fabrication', 'General Contractor and Supply', 'Rent CAR'],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});

//Widget Whatsapp
let isChatboxVisible = false;
const chatbox = document.querySelector(".wa-widget .wa-ChatBox");

function hideChatbox(){
  isChatboxVisible = false;
  chatbox.style.display = "none";
}

function toggleChatbox(){
  isChatboxVisible = !isChatboxVisible;
  chatbox.style.display = isChatboxVisible ? "block" : "none";
}

//Services togglecard
function toggleCard(id) {
  const card = document.getElementById(id);
  const allCards = document.querySelectorAll('.card');
  const container = document.querySelector('.card-container');

  const isActive = card.classList.contains('active');

  const btn = card.querySelector(".toggle-btn"); // tombol readmore/close

  // Reset semua card + reset tombol
  allCards.forEach(c => {
    c.classList.remove('active', 'hidden');
    const b = c.querySelector(".toggle-btn");
    if (b) b.textContent = "Selengkapnya";  // reset text
  });
  container.classList.remove('expanded');

  if (!isActive) {
    // Sembunyikan card lain
    allCards.forEach(c => {
      if (c !== card) c.classList.add('hidden');
    });

    card.classList.add('active');
    container.classList.add('expanded');

    // 👉 Ubah tulisan tombol jadi Close
    if (btn) btn.textContent = "Tutup";

    // Auto scroll
    setTimeout(() => {
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);

  } else {
    // 👉 Jika card diklik lagi, kembalikan tombol ke Readmore
    if (btn) btn.textContent = "Selengkapnya";
  }
}

//Product togglproduct
function toggleProduct(id) {
  const product = document.getElementById(id);
  const allProduct = document.querySelectorAll('.products');
  const containers = document.querySelector('.product-container');

  const isActive = product.classList.contains('active');

  // Ambil elemen H3 yang ingin berubah text
  const h3text = product.querySelector(".selengkapnya");

  // Reset semua produk + reset tulisan H3
  allProduct.forEach(p => {
    p.classList.remove('active', 'hidden');
    const h = p.querySelector(".selengkapnya");
    if (h) h.textContent = "selengkapnya";
  });

  containers.classList.remove('expanded');

  if (!isActive) {
    allProduct.forEach(p => {
      if (p !== product) p.classList.add('hidden');
    });
    product.classList.add('active');
    containers.classList.add('expanded');

    // 👉 Ubah H3 menjadi Close
    if (h3text) h3text.textContent = "tutup";

    setTimeout(() => {
      product.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);

  } else {
    // 👉 Jika aktif lalu diklik lagi → kembali Readmore
    if (h3text) h3text.textContent = "selengkapnya";
  }
}


//Scripts for Product slider
var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: true,
      },
      autoplay:{
        delay:1000,
        disableOnInteraction:false,
      }
    });

