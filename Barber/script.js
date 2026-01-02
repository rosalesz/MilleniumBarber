// Initialize Lucide Icons
lucide.createIcons();

// Data
const services = [
    { id: '1', name: 'Corte Sencillo', desc: 'Corte clásico de precisión.', price: 18, time: '25 MIN', icon: 'scissors' },
    { id: '2', name: 'Corte y Cejas', desc: 'Corte + diseño de cejas.', price: 20, time: '30 MIN', icon: 'user' },
    { id: '3', name: 'Corte y Línea', desc: 'Corte + perfilado de línea.', price: 20, time: '30 MIN', icon: 'move' },
    { id: '4', name: 'Corte y Barba', desc: 'Combo completo de estilo.', price: 25, time: '45 MIN', icon: 'sparkles' },
    { id: '5', name: 'Barba', desc: 'Perfilado y arreglo de barba.', price: 15, time: '20 MIN', icon: 'zap' },
    { id: '6', name: 'Corte Millenium', desc: 'Nuestro servicio premium.', price: 30, time: '50 MIN', icon: 'award' }
];

const products = [
    { id: '1', name: 'Cera Modeladora', price: 15, image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop' },
    { id: '2', name: 'Pomada Fijación Fuerte', price: 18, image: 'https://images.unsplash.com/photo-1623860661910-e8b28e3246e5?w=400&h=400&fit=crop' },
    { id: '3', name: 'Aceite para Barba', price: 12, image: 'https://images.unsplash.com/photo-1631729371254-42c2559e6e79?w=400&h=400&fit=crop' },
    { id: '4', name: 'Shampoo Premium', price: 20, image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop' },
    { id: '5', name: 'Gel Fijador', price: 14, image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=400&fit=crop' },
    { id: '6', name: 'Bálsamo para Barba', price: 16, image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400&h=400&fit=crop' },
    { id: '7', name: 'Cepillo de Barba', price: 10, image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=400&h=400&fit=crop' },
    { id: '8', name: 'Spray Texturizante', price: 17, image: 'https://images.unsplash.com/photo-1585838533984-9e4d9f43b2e9?w=400&h=400&fit=crop' },
    { id: '9', name: 'Aftershave Lotion', price: 19, image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop' },
    { id: '10', name: 'Kit Completo Grooming', price: 45, image: 'https://images.unsplash.com/photo-1595348020949-87cdfbb44174?w=400&h=400&fit=crop' }
];

// Render Services Grid
function renderServices() {
    const grid = document.getElementById('services-grid');
    services.forEach(s => {
        grid.innerHTML += `
            <div class="service-card bg-white rounded-[3rem] p-12 flex flex-col group">
                <div class="flex justify-between items-start mb-12">
                    <div class="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center transition-colors group-hover:bg-emerald-600">
                        <i data-lucide="${s.icon}" class="w-6 h-6"></i>
                    </div>
                    <span class="text-3xl font-black text-black">$${s.price}</span>
                </div>
                <h3 class="text-2xl font-black mb-4 uppercase tracking-tighter">${s.name}</h3>
                <p class="text-black/40 text-sm leading-relaxed mb-10 flex-grow font-medium">${s.desc}</p>
                <button onclick="scrollToId('reservar')" class="w-full py-5 border border-black/5 rounded-2xl text-[9px] font-black uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all">Seleccionar</button>
            </div>
        `;
    });
    lucide.createIcons();
}

// Render Pricing List
function renderPricing() {
    const list = document.getElementById('pricing-list');
    services.forEach((s, idx) => {
        const isLast = idx === services.length - 1;
        list.innerHTML += `
            <div class="flex items-center justify-between py-8 ${isLast ? '' : 'border-b border-black/5'} group">
                <div class="flex items-center gap-8">
                    <span class="text-black/10 font-black text-2xl">${idx + 1}</span>
                    <div>
                        <h4 class="font-black text-xl uppercase tracking-tighter text-black">${s.name}</h4>
                        <p class="text-[9px] text-black/30 font-black uppercase tracking-widest">${s.time}</p>
                    </div>
                </div>
                <div class="flex items-center gap-10">
                    <span class="text-3xl font-black text-black tracking-tighter">$${s.price}</span>
                    <button onclick="scrollToId('reservar')" class="hidden sm:block bg-black text-white px-8 py-2.5 rounded-full font-black text-[9px] uppercase tracking-[0.2em] hover:bg-emerald-600 transition-all">Book</button>
                </div>
            </div>
        `;
    });
}

// Smooth Scroll Function
function scrollToId(id) {
    document.getElementById('mobile-menu').classList.add('hidden');
    const target = document.getElementById(id);
    if (target) {
        const offset = 100;
        const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: pos, behavior: 'smooth' });
    }
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 30) {
        nav.classList.add('glass-nav');
        nav.classList.remove('py-8');
        nav.classList.add('py-4');
    } else {
        nav.classList.remove('glass-nav');
        nav.classList.add('py-8');
        nav.classList.remove('py-4');
    }
});

// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth Scroll for Hash Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            scrollToId(href.substring(1));
        }
    });
});

// Initialize
renderServices();
renderPricing();