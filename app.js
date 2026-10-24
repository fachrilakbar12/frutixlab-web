/**
 * FRUTIX APPLICATION CONTROLLER - FLAT GRAPHIC EDITION
 * Menghubungkan seluruh logika interaktif, kalkulasi nutrisi, audio sintetis, dan visual flat vector
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPop() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(700, now + 0.08);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {
      console.warn('Audio note error:', e);
    }
  }

  playChime() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const now = this.ctx.currentTime + idx * 0.08;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.4);
      });
    } catch (e) {
      console.warn('Chime error:', e);
    }
  }

  playBlender(duration = 1800) {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const bufferSize = Math.floor(this.ctx.sampleRate * (duration / 1000));
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(300, this.ctx.currentTime);
      filter.frequency.linearRampToValueAtTime(750, this.ctx.currentTime + 0.2);
      filter.frequency.linearRampToValueAtTime(300, this.ctx.currentTime + duration / 1000);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + 0.15);
      gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + duration / 1000);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start();
    } catch (e) {
      console.warn('Blender sound error:', e);
    }
  }
}

const sound = new SoundEngine();

// State Aplikasi
const AppState = {
  currentTab: 'fruits',
  selectedFilter: 'all',
  searchQuery: '',
  blenderSelection: ['jambu', 'jeruk', 'kiwi'],
  blenderBlended: false, // Menunggu user klik tombol racik sebelum hasil muncul
  activeDiseaseId: 'hipertensi',
  activeWellnessId: 'pre_workout',
  currentModalFruitId: 'jeruk',
  modalFruitMode: 'whole', // 'whole' or 'sliced'
  heroFruitId: 'jeruk',
  heroFruitMode: 'whole',
  calculator: {
    weight: 65,
    age: 28,
    activity: 'moderate'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initUI();
  initLucideIcons();
  updateHeroFruitDisplay();
  renderFruitsCatalog();
  renderMedicalConditions();
  renderWellnessGoals();
  renderBlenderIngredients();
  updateBlenderDisplay();
  calculateDailyFruitIntake();

  // First interaction unlocks AudioContext
  window.addEventListener('click', () => sound.init(), { once: true });
});

function initLucideIcons() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function initUI() {
  // Navigation button click listeners
  document.querySelectorAll('[data-nav-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-nav-target');
      switchSection(target);
    });
  });

  // Filter Chips Buah
  document.querySelectorAll('[data-filter]').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(c => {
        c.classList.remove('bg-[#191A19]', 'text-white');
        c.classList.add('bg-white', 'text-[#191A19]');
      });
      chip.classList.remove('bg-white', 'text-[#191A19]');
      chip.classList.add('bg-[#191A19]', 'text-white');

      AppState.selectedFilter = chip.getAttribute('data-filter');
      sound.playPop();
      renderFruitsCatalog();
    });
  });

  // Search Input Buah
  const searchInput = document.getElementById('fruitSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value.toLowerCase().trim();
      renderFruitsCatalog();
    });
  }

  // Audio Mute Toggle
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      sound.isMuted = !sound.isMuted;
      soundToggleBtn.innerHTML = sound.isMuted
        ? '<i data-lucide="volume-x" class="w-4 h-4 text-slate-400"></i>'
        : '<i data-lucide="volume-2" class="w-4 h-4 text-[#1E5128]"></i>';
      initLucideIcons();
    });
  }

  // Calculator Inputs
  const calcWeight = document.getElementById('calcWeight');
  const calcAge = document.getElementById('calcAge');
  const calcActivity = document.getElementById('calcActivity');

  [calcWeight, calcAge, calcActivity].forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        AppState.calculator.weight = parseFloat(calcWeight.value) || 60;
        AppState.calculator.age = parseInt(calcAge.value) || 25;
        AppState.calculator.activity = calcActivity.value;
        calculateDailyFruitIntake();
      });
    }
  });

  // Modal Close & Slice Toggle
  const closeModalBtn = document.getElementById('closeModalBtn');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeFruitModal);
  }

  const modalOverlay = document.getElementById('fruitDetailModal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeFruitModal();
    });
  }

  const toggleModalSliceBtn = document.getElementById('toggleModalSliceBtn');
  if (toggleModalSliceBtn) {
    toggleModalSliceBtn.addEventListener('click', () => {
      AppState.modalFruitMode = (AppState.modalFruitMode === 'whole') ? 'sliced' : 'whole';
      updateModalFruitVisual();
      sound.playPop();
    });
  }

  // Hero Fruit Toggle & Picker
  const heroToggleSliceBtn = document.getElementById('heroToggleSliceBtn');
  if (heroToggleSliceBtn) {
    heroToggleSliceBtn.addEventListener('click', () => {
      AppState.heroFruitMode = (AppState.heroFruitMode === 'whole') ? 'sliced' : 'whole';
      updateHeroFruitDisplay();
      sound.playPop();
    });
  }

  // Blender Blend Action
  const blendActionBtn = document.getElementById('blendActionBtn');
  if (blendActionBtn) {
    blendActionBtn.addEventListener('click', triggerBlenderProcess);
  }

  // Scrollspy via IntersectionObserver
  const sections = ['fruits', 'comparison', 'blender', 'medical', 'wellness', 'calculator'];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id.replace('section-', '');
        updateNavActiveState(id);
      }
    });
  }, { threshold: 0.25 });

  sections.forEach(secId => {
    const el = document.getElementById(`section-${secId}`);
    if (el) observer.observe(el);
  });
}

function switchSection(targetId) {
  AppState.currentTab = targetId;

  const activeSection = document.getElementById(`section-${targetId}`);
  if (activeSection) {
    const yOffset = -70;
    const y = activeSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  updateNavActiveState(targetId);
  sound.playPop();
  initLucideIcons();
}

function updateNavActiveState(targetId) {
  document.querySelectorAll('[data-nav-target]').forEach(btn => {
    const isTarget = btn.getAttribute('data-nav-target') === targetId;
    if (btn.classList.contains('mobile-nav-btn')) {
      btn.classList.toggle('active', isTarget);
      btn.classList.toggle('text-[#2D7D32]', isTarget);
      btn.classList.toggle('text-[#191A19]', !isTarget);
    } else {
      btn.classList.toggle('bg-[#2D7D32]', isTarget);
      btn.classList.toggle('text-white', isTarget);
      btn.classList.toggle('bg-[#FAF8F1]', !isTarget && btn.closest('.desktop-nav-pills'));
      btn.classList.toggle('bg-white', !isTarget && !btn.closest('.desktop-nav-pills'));
      btn.classList.toggle('text-[#191A19]', !isTarget);
    }
  });
}

/**
 * HERO FRUIT DISPLAY & SELECTOR
 */
function setHeroFruit(fruitId) {
  AppState.heroFruitId = fruitId;
  updateHeroFruitDisplay();
  sound.playPop();
}

function updateHeroFruitDisplay() {
  const container = document.getElementById('heroFruitSvgContainer');
  const title = document.getElementById('heroFruitTitle');
  const tag = document.getElementById('heroFruitTag');
  const toggleBtn = document.getElementById('heroToggleSliceBtn');

  if (!container) return;

  const fruit = FRUITS_DATABASE.find(f => f.id === AppState.heroFruitId) || FRUITS_DATABASE[1];
  
  // Render SVG Vector
  container.innerHTML = getFruitSVG(fruit.id, AppState.heroFruitMode);
  
  if (title) title.innerText = fruit.name;
  if (tag) tag.innerText = (AppState.heroFruitMode === 'whole') ? 'Bentuk Utuh (Whole Fruit)' : 'Irisan Belah (Cross-Section)';

  if (toggleBtn) {
    toggleBtn.innerHTML = (AppState.heroFruitMode === 'whole')
      ? '<i data-lucide="scissors" class="w-3.5 h-3.5"></i> Belah Buah'
      : '<i data-lucide="circle" class="w-3.5 h-3.5"></i> Bentuk Utuh';
  }

  // Update hero quick fruit chip active styles
  document.querySelectorAll('[data-hero-picker]').forEach(chip => {
    const isSelected = chip.getAttribute('data-hero-picker') === fruit.id;
    chip.classList.toggle('bg-[#191A19]', isSelected);
    chip.classList.toggle('text-white', isSelected);
    chip.classList.toggle('bg-white', !isSelected);
    chip.classList.toggle('text-[#191A19]', !isSelected);
  });

  initLucideIcons();
}

/**
 * RENDER ENSIKLOPEDIA BUAH
 */
function renderFruitsCatalog() {
  const container = document.getElementById('fruitsGrid');
  if (!container) return;

  let filtered = FRUITS_DATABASE.filter(fruit => {
    // Search
    const matchSearch = 
      fruit.name.toLowerCase().includes(AppState.searchQuery) ||
      fruit.scientificName.toLowerCase().includes(AppState.searchQuery) ||
      fruit.tagline.toLowerCase().includes(AppState.searchQuery) ||
      fruit.activeCompounds.some(c => c.name.toLowerCase().includes(AppState.searchQuery) || c.role.toLowerCase().includes(AppState.searchQuery));

    // Filter Chips
    if (AppState.selectedFilter === 'all') return matchSearch;
    if (AppState.selectedFilter === 'low_gi') return matchSearch && fruit.nutrition.glycemicIndex <= 45;
    if (AppState.selectedFilter === 'vit_c') return matchSearch && parseFloat(fruit.nutrition.vitaminC) > 20;
    if (AppState.selectedFilter === 'gerd_safe') return matchSearch && ['pepaya', 'pisang', 'alpukat', 'apel'].includes(fruit.id);
    if (AppState.selectedFilter === 'cardio') return matchSearch && ['semangka', 'delima', 'alpukat', 'apel', 'jambu'].includes(fruit.id);

    return matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 flat-card bg-white">
        <div class="text-4xl mb-2">🔍</div>
        <h3 class="text-lg font-black text-[#191A19]">Tidak ada buah yang sesuai</h3>
        <p class="text-xs text-slate-500 mt-1">Silakan coba kata kunci lain atau pilih Semua Buah.</p>
        <button onclick="resetFruitFilters()" class="mt-4 flat-btn flat-btn-orange px-5 py-2 text-xs">Reset Pencarian</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(fruit => `
    <div class="flat-card p-5 flex flex-col justify-between group">
      <div>
        <!-- Top Badges -->
        <div class="flex items-center justify-between mb-3">
          <span class="flat-pill bg-[#FAF8F1] text-[#191A19]">
            ${fruit.category}
          </span>
          <span class="text-xs font-black px-2.5 py-0.5 rounded-full border border-[#191A19] ${fruit.nutrition.glycemicIndex <= 45 ? 'bg-[#1E5128] text-white' : 'bg-[#F7C04A] text-[#191A19]'}">
            GI: ${fruit.nutrition.glycemicIndex}
          </span>
        </div>

        <!-- High-Contrast Vector Graphic Illustration -->
        <div class="w-full h-36 bg-[#FAF8F1] rounded-2xl border-2 border-[#191A19] p-3 flex items-center justify-center mb-4 group-hover:scale-102 transition-transform">
          <div class="w-28 h-28">
            ${getFruitSVG(fruit.id, 'whole')}
          </div>
        </div>

        <!-- Title & Tagline -->
        <h3 class="text-xl font-black text-[#191A19] leading-tight group-hover:text-[#FF6B35] transition-colors">
          ${fruit.name}
        </h3>
        <p class="text-[11px] font-semibold text-slate-500 italic mb-2">
          ${fruit.scientificName}
        </p>
        <p class="text-xs font-bold text-[#FF6B35] bg-[#FAF8F1] p-2 rounded-xl border border-[#191A19] mb-3">
          ${fruit.tagline}
        </p>

        <!-- Nutrition Data Bar -->
        <div class="grid grid-cols-3 gap-1.5 py-2 border-y-2 border-[#191A19] text-center my-3 bg-white">
          <div>
            <div class="text-[9px] uppercase font-bold text-slate-400">Kalori</div>
            <div class="text-xs font-black text-[#191A19]">${fruit.calories.split(' ')[0]} kkal</div>
          </div>
          <div>
            <div class="text-[9px] uppercase font-bold text-slate-400">Vit C</div>
            <div class="text-xs font-black text-[#FF6B35]">${fruit.nutrition.vitaminC.split(' ')[0]} mg</div>
          </div>
          <div>
            <div class="text-[9px] uppercase font-bold text-slate-400">Serat</div>
            <div class="text-xs font-black text-[#1E5128]">${fruit.nutrition.fiber}</div>
          </div>
        </div>

        <!-- Quick Summary Khasiat -->
        <div class="space-y-1.5 text-[11px] mt-3">
          <div class="p-2 rounded-xl bg-[#FAF8F1] border border-[#191A19]">
            <span class="font-black text-[#1E5128] block mb-0.5">🍏 Makan Utuh:</span>
            <span class="text-slate-700 leading-tight">${fruit.wholeFruitBenefits.points[0]}</span>
          </div>
          <div class="p-2 rounded-xl bg-[#FAF8F1] border border-[#191A19]">
            <span class="font-black text-[#FF6B35] block mb-0.5">🍹 Apabila Dijus:</span>
            <span class="text-slate-700 leading-tight">${fruit.juicedBenefits.points[0]}</span>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="mt-5 pt-3 border-t-2 border-[#191A19] flex items-center gap-2">
        <button onclick="openFruitModal('${fruit.id}')" class="flex-1 flat-btn flat-btn-black py-2.5 px-3 text-xs uppercase font-extrabold">
          <i data-lucide="eye" class="w-3.5 h-3.5"></i> Lihat Buah & Irisan
        </button>
        <button onclick="addFruitToBlender('${fruit.id}')" title="Tambahkan ke Blender" class="flat-btn flat-btn-orange p-2.5 text-xs">
          <i data-lucide="plus" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  `).join('');

  initLucideIcons();
}

function resetFruitFilters() {
  AppState.selectedFilter = 'all';
  AppState.searchQuery = '';
  const searchInput = document.getElementById('fruitSearchInput');
  if (searchInput) searchInput.value = '';

  document.querySelectorAll('[data-filter]').forEach(chip => {
    chip.classList.toggle('bg-[#191A19]', chip.getAttribute('data-filter') === 'all');
    chip.classList.toggle('text-white', chip.getAttribute('data-filter') === 'all');
    chip.classList.toggle('bg-white', chip.getAttribute('data-filter') !== 'all');
    chip.classList.toggle('text-[#191A19]', chip.getAttribute('data-filter') !== 'all');
  });

  renderFruitsCatalog();
}

/**
 * MODAL INSPEKTOR BUAH & ANATOMI IRISAN
 */
function openFruitModal(fruitId, mode = 'whole') {
  const fruit = FRUITS_DATABASE.find(f => f.id === fruitId);
  if (!fruit) return;

  AppState.currentModalFruitId = fruitId;
  AppState.modalFruitMode = mode;

  const modal = document.getElementById('fruitDetailModal');
  if (!modal) return;

  // Header Details
  document.getElementById('modalFruitName').innerText = fruit.name;
  document.getElementById('modalFruitScientific').innerText = fruit.scientificName;
  document.getElementById('modalFruitTagline').innerText = fruit.tagline;
  document.getElementById('modalFlavorProfile').innerText = fruit.flavorProfile;

  // Nutrition Facts
  document.getElementById('modalCalories').innerText = fruit.calories;
  document.getElementById('modalVitC').innerText = fruit.nutrition.vitaminC;
  document.getElementById('modalFiber').innerText = fruit.nutrition.fiber;
  document.getElementById('modalPotassium').innerText = fruit.nutrition.potassium;
  document.getElementById('modalWater').innerText = fruit.nutrition.water;
  document.getElementById('modalGI').innerText = `${fruit.nutrition.glycemicIndex} (Skala 100)`;
  document.getElementById('modalAntioxidant').innerText = fruit.nutrition.antioxidantScore;
  document.getElementById('modalBestTime').innerText = fruit.bestTime;
  document.getElementById('modalPrecautions').innerText = fruit.precautions;

  // Active Compounds
  const compContainer = document.getElementById('modalActiveCompounds');
  compContainer.innerHTML = fruit.activeCompounds.map(c => `
    <li class="bg-[#FAF8F1] p-3 rounded-xl border border-[#191A19]">
      <span class="font-black text-[#191A19] text-xs block mb-0.5">${c.name}</span>
      <span class="text-[11px] text-slate-700 leading-snug">${c.role}</span>
    </li>
  `).join('');

  // Whole vs Juiced Points
  const wholeList = document.getElementById('modalWholeBenefits');
  wholeList.innerHTML = fruit.wholeFruitBenefits.points.map(pt => `
    <li class="flex items-start gap-2 text-xs text-slate-800 leading-snug">
      <i data-lucide="check" class="w-3.5 h-3.5 text-[#1E5128] shrink-0 mt-0.5"></i>
      <span>${pt}</span>
    </li>
  `).join('');

  const juicedList = document.getElementById('modalJuicedBenefits');
  juicedList.innerHTML = fruit.juicedBenefits.points.map(pt => `
    <li class="flex items-start gap-2 text-xs text-slate-800 leading-snug">
      <i data-lucide="check" class="w-3.5 h-3.5 text-[#FF6B35] shrink-0 mt-0.5"></i>
      <span>${pt}</span>
    </li>
  `).join('');

  // Quick Fruit Switcher Bar inside Modal
  const pickerBar = document.getElementById('modalFruitPickerBar');
  if (pickerBar) {
    pickerBar.innerHTML = FRUITS_DATABASE.map(f => {
      const isCur = f.id === fruit.id;
      return `
        <button onclick="openFruitModal('${f.id}', '${AppState.modalFruitMode}')" 
                class="px-3 py-1 rounded-full text-[11px] font-black border border-[#191A19] whitespace-nowrap transition-all ${isCur ? 'bg-[#FF6B35] text-white' : 'bg-white text-[#191A19] hover:bg-[#FAF8F1]'}">
          ${f.name.split(' ')[0]}
        </button>
      `;
    }).join('');
  }

  // Update Visual Artwork
  updateModalFruitVisual();

  // Show Modal
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  initLucideIcons();
  sound.playPop();
}

function updateModalFruitVisual() {
  const container = document.getElementById('modalFruitSvgContainer');
  const toggleBtn = document.getElementById('toggleModalSliceBtn');
  const modeBadge = document.getElementById('modalModeBadge');

  if (container) {
    container.innerHTML = getFruitSVG(AppState.currentModalFruitId, AppState.modalFruitMode);
  }

  if (modeBadge) {
    modeBadge.innerText = (AppState.modalFruitMode === 'whole') ? 'Bentuk Utuh (Whole Fruit)' : 'Irisan / Belah (Cross-Section)';
  }

  if (toggleBtn) {
    toggleBtn.innerHTML = (AppState.modalFruitMode === 'whole')
      ? '<i data-lucide="scissors" class="w-4 h-4"></i> Tampilkan Irisan (Cross-Section)'
      : '<i data-lucide="circle" class="w-4 h-4"></i> Tampilkan Buah Utuh';
  }

  initLucideIcons();
}

function closeFruitModal() {
  const modal = document.getElementById('fruitDetailModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

/**
 * FRUIT FUSION LAB / BLENDER RACIKAN
 */
function renderBlenderIngredients() {
  const container = document.getElementById('blenderIngredientGrid');
  if (!container) return;

  container.innerHTML = FRUITS_DATABASE.map(fruit => {
    const isSelected = AppState.blenderSelection.includes(fruit.id);
    return `
      <div onclick="toggleBlenderIngredient('${fruit.id}')" 
           class="p-2.5 rounded-2xl border-2 border-[#191A19] flex items-center gap-2 cursor-pointer transition-all ${isSelected ? 'bg-[#FF6B35] text-white shadow-md' : 'bg-white text-[#191A19] hover:bg-[#FAF8F1]'}">
        <div class="w-8 h-8 shrink-0">
          ${getFruitSVG(fruit.id, 'whole')}
        </div>
        <div class="overflow-hidden">
          <div class="text-xs font-black truncate">${fruit.name.split(' ')[0]}</div>
          <div class="text-[9px] font-bold ${isSelected ? 'text-white/80' : 'text-slate-400'}">${fruit.category}</div>
        </div>
      </div>
    `;
  }).join('');
}

function toggleBlenderIngredient(fruitId) {
  const index = AppState.blenderSelection.indexOf(fruitId);
  if (index > -1) {
    if (AppState.blenderSelection.length <= 1) {
      alert('Pilih minimal 1 buah untuk diracik di blender!');
      return;
    }
    AppState.blenderSelection.splice(index, 1);
  } else {
    if (AppState.blenderSelection.length >= 3) {
      alert('Maksimal 3 buah sekaligus untuk kombinasi sinergi biokimia terbaik!');
      return;
    }
    AppState.blenderSelection.push(fruitId);
  }

  AppState.blenderBlended = false; // Tunggu user klik tombol racik
  sound.playPop();
  renderBlenderIngredients();
  updateBlenderDisplay();
}

function addFruitToBlender(fruitId) {
  if (!AppState.blenderSelection.includes(fruitId)) {
    if (AppState.blenderSelection.length >= 3) {
      AppState.blenderSelection.shift();
    }
    AppState.blenderSelection.push(fruitId);
  }
  AppState.blenderBlended = false; // Tunggu user klik tombol racik
  renderBlenderIngredients();
  updateBlenderDisplay();
  switchSection('blender');
}

function updateBlenderDisplay() {
  const selectedList = document.getElementById('blenderSelectedList');
  const liquid = document.getElementById('blenderLiquid');

  const selectedFruits = AppState.blenderSelection.map(id => FRUITS_DATABASE.find(f => f.id === id)).filter(Boolean);

  if (selectedList) {
    selectedList.innerHTML = selectedFruits.map(fruit => `
      <span class="inline-flex items-center gap-1.5 bg-white border-2 border-[#191A19] text-[#191A19] px-3 py-1 rounded-full text-xs font-black shadow-sm">
        <span>${fruit.name.split(' ')[0]}</span>
        <button onclick="toggleBlenderIngredient('${fruit.id}')" class="text-slate-400 hover:text-red-500 ml-1">✕</button>
      </span>
    `).join('');
  }

  if (liquid) {
    const heightPercentage = Math.min(AppState.blenderSelection.length * 30, 88);
    liquid.style.height = `${heightPercentage}%`;

    // Solid color fill based on first selected fruit or fresh green
    if (selectedFruits.length > 0) {
      liquid.style.backgroundColor = selectedFruits[0].themeColor || '#2D7D32';
    }
  }

  // Floating bubbles
  const jar = document.querySelector('.flat-blender-jar');
  if (jar) {
    jar.querySelectorAll('.flat-bubble').forEach(b => b.remove());
    for (let i = 0; i < 6; i++) {
      const b = document.createElement('div');
      b.className = 'flat-bubble';
      b.style.left = `${15 + Math.random() * 65}%`;
      const sz = 6 + Math.random() * 8;
      b.style.width = `${sz}px`;
      b.style.height = `${sz}px`;
      b.style.animationDelay = `${Math.random() * 1.5}s`;
      b.style.animationDuration = `${0.8 + Math.random() * 0.7}s`;
      jar.appendChild(b);
    }
  }

  // Responsif: Tampilkan hasil HANYA jika user sudah mengklik tombol racik!
  if (AppState.blenderBlended) {
    evaluateBlenderSynergy(selectedFruits);
  } else {
    renderBlenderReadyState(selectedFruits);
  }
}

function renderBlenderReadyState(selectedFruits) {
  const resultCard = document.getElementById('blenderResultCard');
  if (!resultCard) return;

  const names = selectedFruits.map(f => f.name.split(' ')[0]).join(' + ');

  resultCard.innerHTML = `
    <div class="flat-card p-6 bg-white border-2 border-[#191A19] text-center flex flex-col items-center justify-center min-h-[320px]">
      <div class="w-16 h-16 rounded-2xl bg-[#FAF8F1] border-2 border-[#191A19] flex items-center justify-center text-3xl mb-3">
        🍹
      </div>
      <span class="flat-pill bg-[#2D7D32] text-white text-[10px] mb-2 font-black">
        SIAP DIRACIK
      </span>
      <h3 class="text-xl font-black text-[#191A19] mb-1">
        ${names || 'Pilih Buah Terlebih Dahulu'}
      </h3>
      <p class="text-xs text-slate-600 max-w-xs mb-4 leading-relaxed font-medium">
        Kombinasi ${selectedFruits.length} buah sudah dimasukkan ke tabung blender. Klik tombol <strong>RACIK KOMBINASI SEKARANG</strong> untuk memutar pisau blender dan memproses analisis sinergi fitonutrien.
      </p>
      <button onclick="triggerBlenderProcess()" class="flat-btn flat-btn-green px-5 py-2.5 text-xs uppercase font-black">
        <i data-lucide="sparkles" class="w-4 h-4"></i> Racik Sekarang
      </button>
    </div>
  `;
  initLucideIcons();
}

function triggerBlenderProcess() {
  const jar = document.querySelector('.flat-blender-jar');
  const btn = document.getElementById('blendActionBtn');
  if (!jar || !btn) return;

  btn.disabled = true;
  btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Meracik Sinergi Fitonutrien...';
  initLucideIcons();

  jar.classList.add('blending');
  sound.playBlender(1800);

  setTimeout(() => {
    jar.classList.remove('blending');
    btn.disabled = false;
    btn.innerHTML = '<i data-lucide="sparkles" class="w-4 h-4"></i> RACIK KOMBINASI SEKARANG!';
    initLucideIcons();
    sound.playChime();

    AppState.blenderBlended = true; // Aktifkan penampilan hasil sinergi
    const selectedFruits = AppState.blenderSelection.map(id => FRUITS_DATABASE.find(f => f.id === id)).filter(Boolean);
    evaluateBlenderSynergy(selectedFruits);

    // Solid Confetti Pop
    if (typeof confetti !== 'undefined') {
      confetti({
        particleCount: 50,
        spread: 60,
        colors: ['#2D7D32', '#1E5128', '#FF6B35', '#F7C04A', '#191A19', '#FAF8F1'],
        origin: { y: 0.6 }
      });
    }

    const resultCard = document.getElementById('blenderResultCard');
    if (resultCard) {
      resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, 1800);
}

function evaluateBlenderSynergy(selectedFruits) {
  const resultCard = document.getElementById('blenderResultCard');
  if (!resultCard || selectedFruits.length === 0) return;

  const selectedIds = selectedFruits.map(f => f.id).sort();

  // Match known verified recipes
  const matchedFusion = FRUIT_FUSIONS.find(fusion => {
    const fIds = [...fusion.ingredients].sort();
    return fIds.length === selectedIds.length && fIds.every((id, idx) => id === selectedIds[idx]);
  });

  if (matchedFusion) {
    resultCard.innerHTML = `
      <div class="flat-card p-6 bg-white border-2 border-[#191A19]">
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="flat-pill bg-[#F7C04A] text-[#191A19]">
            KOMBINASI EMAS KLINIS
          </span>
          <span class="text-xs font-black text-[#1E5128] bg-[#FAF8F1] px-3 py-1 rounded-full border border-[#191A19]">
            ${matchedFusion.category}
          </span>
        </div>

        <h3 class="text-2xl font-black text-[#191A19] mb-1">${matchedFusion.name}</h3>
        <p class="text-xs font-bold text-[#FF6B35] mb-4">${matchedFusion.headline}</p>

        <!-- Biochemical Synergy -->
        <div class="bg-[#FAF8F1] p-4 rounded-2xl border-2 border-[#191A19] mb-4">
          <div class="flex items-center gap-2 text-xs font-black text-[#1E5128] uppercase tracking-wider mb-1">
            <i data-lucide="microscope" class="w-4 h-4"></i> Analisis Sinergi Biokimiawi:
          </div>
          <p class="text-xs text-slate-800 leading-relaxed">
            ${matchedFusion.biochemicalSynergy}
          </p>
        </div>

        <!-- 3 Benefits -->
        <div class="mb-4">
          <div class="text-[11px] font-black text-[#191A19] uppercase tracking-wider mb-2">
            Khasiat Kesehatan Terarah:
          </div>
          <div class="space-y-2">
            ${matchedFusion.benefits.map(b => `
              <div class="p-2.5 bg-white border border-[#191A19] rounded-xl text-xs font-bold text-[#1E5128] flex items-center gap-2">
                <i data-lucide="check-circle-2" class="w-4 h-4 shrink-0 text-[#1E5128]"></i>
                <span>${b}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Flavor & Timing -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-3 border-t-2 border-[#191A19]">
          <div class="p-2 bg-[#FAF8F1] rounded-xl border border-[#191A19]">
            <span class="font-black text-[#191A19] block">👅 Profil Rasa:</span>
            <span class="text-slate-700 text-[11px]">${matchedFusion.tasteProfile}</span>
          </div>
          <div class="p-2 bg-[#FAF8F1] rounded-xl border border-[#191A19]">
            <span class="font-black text-[#191A19] block">⏰ Waktu Minum:</span>
            <span class="text-slate-700 text-[11px]">${matchedFusion.bestConsumed}</span>
          </div>
        </div>
      </div>
    `;
  } else {
    // Dynamic Custom Synergy
    const totalVitC = selectedFruits.reduce((sum, f) => sum + (parseFloat(f.nutrition.vitaminC) || 10), 0);
    const avgGI = Math.round(selectedFruits.reduce((sum, f) => sum + f.nutrition.glycemicIndex, 0) / selectedFruits.length);
    const names = selectedFruits.map(f => f.name.split(' ')[0]).join(' + ');

    resultCard.innerHTML = `
      <div class="flat-card p-6 bg-white border-2 border-[#191A19]">
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="flat-pill bg-[#1E5128] text-white">
            RACIKAN KUSTOM DINAMIS
          </span>
          <span class="text-xs font-black text-[#191A19]">${selectedFruits.length} Buah Dipadukan</span>
        </div>

        <h3 class="text-xl font-black text-[#191A19] mb-4">${names}</h3>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          <div class="p-2.5 bg-[#FAF8F1] rounded-xl border border-[#191A19] text-center">
            <div class="text-[9px] uppercase font-bold text-slate-400">Total Vit C</div>
            <div class="text-base font-black text-[#FF6B35]">~${Math.round(totalVitC)} mg</div>
          </div>
          <div class="p-2.5 bg-[#FAF8F1] rounded-xl border border-[#191A19] text-center">
            <div class="text-[9px] uppercase font-bold text-slate-400">Rerata GI</div>
            <div class="text-base font-black text-[#1E5128]">${avgGI}</div>
          </div>
          <div class="p-2.5 bg-[#FAF8F1] rounded-xl border border-[#191A19] text-center">
            <div class="text-[9px] uppercase font-bold text-slate-400">Hidrasi</div>
            <div class="text-base font-black text-[#191A19]">86%</div>
          </div>
          <div class="p-2.5 bg-[#FAF8F1] rounded-xl border border-[#191A19] text-center">
            <div class="text-[9px] uppercase font-bold text-slate-400">Serat</div>
            <div class="text-base font-black text-[#1E5128]">Tinggi</div>
          </div>
        </div>

        <div class="p-3 bg-[#FAF8F1] rounded-xl border border-[#191A19] text-xs text-slate-700 leading-relaxed">
          <strong class="text-[#191A19] block mb-1">💡 Ulasan Nutrisionis:</strong>
          Kombinasi ${names} menyatukan fitonutrien aktif seperti 
          <strong>${selectedFruits.map(f => f.activeCompounds[0].name).join(', ')}</strong>. 
          Disarankan di-blend bersama serat ampasnya tanpa tambahan gula pasir agar kurva glukosa darah tetap stabil.
        </div>
      </div>
    `;
  }

  initLucideIcons();
}

/**
 * REKOMENDASI MEDIS / PENYAKIT
 */
function renderMedicalConditions() {
  const tabList = document.getElementById('diseaseTabs');
  if (!tabList) return;

  tabList.innerHTML = MEDICAL_CONDITIONS.map(cond => {
    const isActive = cond.id === AppState.activeDiseaseId;
    return `
      <button onclick="selectDiseaseCondition('${cond.id}')" 
              class="w-full text-left p-3 rounded-2xl transition-all flex items-center justify-between border-2 border-[#191A19] ${isActive ? 'bg-[#FF6B35] text-white font-black shadow-md' : 'bg-white text-[#191A19] hover:bg-[#FAF8F1] font-bold'}">
        <span class="text-xs md:text-sm truncate">${cond.name.split(' (')[0]}</span>
        <i data-lucide="chevron-right" class="w-4 h-4 shrink-0"></i>
      </button>
    `;
  }).join('');

  renderActiveDiseaseDetail();
  initLucideIcons();
}

function selectDiseaseCondition(condId) {
  AppState.activeDiseaseId = condId;
  renderMedicalConditions();
  sound.playPop();
}

function renderActiveDiseaseDetail() {
  const detailContainer = document.getElementById('diseaseDetailContainer');
  if (!detailContainer) return;

  const cond = MEDICAL_CONDITIONS.find(c => c.id === AppState.activeDiseaseId);
  if (!cond) return;

  detailContainer.innerHTML = `
    <div class="flat-card p-6 md:p-8 bg-white border-2 border-[#191A19]">
      <!-- Header Penyakit -->
      <div class="mb-5 pb-4 border-b-2 border-[#191A19]">
        <span class="flat-pill bg-[#F7C04A] text-[#191A19] mb-2">Panduan Terapi Buah Medis</span>
        <h3 class="text-2xl sm:text-3xl font-black text-[#191A19]">${cond.name}</h3>
        <p class="text-xs text-slate-600 mt-1 leading-relaxed">${cond.summary}</p>
      </div>

      <!-- Target Gizi Kunci -->
      <div class="p-3 bg-[#FAF8F1] rounded-2xl border-2 border-[#191A19] text-xs text-[#191A19] mb-5 flex items-center gap-2">
        <i data-lucide="target" class="w-4 h-4 text-[#FF6B35] shrink-0"></i>
        <span><strong>Fokus Senyawa Gizi:</strong> ${cond.targetNutrition}</span>
      </div>

      <!-- Buah Sangat Dianjurkan -->
      <div class="mb-5">
        <h4 class="text-xs font-black text-[#1E5128] uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <i data-lucide="check-circle" class="w-4 h-4"></i> Buah Sangat Dianjurkan (Gold Standard):
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${cond.recommendedFruits.map(rf => {
            const fData = FRUITS_DATABASE.find(f => f.id === rf.fruitId);
            return `
              <div class="p-3 bg-white border-2 border-[#1E5128] rounded-2xl flex items-start gap-3">
                <div class="w-10 h-10 shrink-0">
                  ${fData ? getFruitSVG(fData.id, 'whole') : ''}
                </div>
                <div>
                  <span class="font-black text-[#191A19] text-xs block">${fData ? fData.name : rf.fruitId}</span>
                  <p class="text-[11px] text-slate-600 leading-tight mt-0.5">${rf.reason}</p>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Cara Konsumsi Terbaik -->
      <div class="mb-5 p-4 bg-[#FAF8F1] border-2 border-[#191A19] rounded-2xl text-xs">
        <div class="font-black text-[#191A19] mb-1 flex items-center gap-1.5">
          <i data-lucide="coffee" class="w-4 h-4 text-[#FF6B35]"></i> Cara Konsumsi Ideal (Utuh vs Jus):
        </div>
        <p class="text-slate-700 leading-relaxed">${cond.consumptionMethod}</p>
      </div>

      <!-- ⚠️ BUAH YANG HARUS DIHINDARI -->
      <div class="mb-4 p-4 bg-[#191A19] text-white rounded-2xl border-2 border-[#191A19]">
        <div class="font-black text-[#FF6B35] mb-2 flex items-center gap-2 uppercase tracking-wider text-xs">
          <i data-lucide="alert-octagon" class="w-4 h-4"></i> Peringatan Medis: Buah yang DILARANG / DIHINDARI
        </div>
        <div class="space-y-2">
          ${cond.avoidFruits.map(av => `
            <div class="p-2.5 bg-white/10 rounded-xl border border-white/20">
              <span class="font-extrabold text-[#F7C04A] text-xs block">${av.name}</span>
              <span class="text-slate-300 text-[11px] leading-tight">${av.reason}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Tips Medis -->
      <div class="text-[11px] text-slate-500 italic flex items-center gap-1.5 pt-2 border-t border-slate-200">
        <i data-lucide="info" class="w-3.5 h-3.5 text-slate-400"></i>
        <span>Tips Dokter: ${cond.clinicalTip}</span>
      </div>
    </div>
  `;

  initLucideIcons();
}

/**
 * REKOMENDASI KEBUGARAN HARIAN (WELLNESS GOALS)
 */
function renderWellnessGoals() {
  const container = document.getElementById('wellnessGrid');
  if (!container) return;

  container.innerHTML = WELLNESS_GOALS.map(goal => `
    <div class="flat-card p-5 flex flex-col justify-between bg-white border-2 border-[#191A19]">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="flat-pill bg-[#F7C04A] text-[#191A19]">
            ${goal.targetTime}
          </span>
          <span class="text-[10px] font-black text-[#1E5128] uppercase">Kebugaran</span>
        </div>

        <h3 class="text-lg font-black text-[#191A19] leading-tight mb-1">
          ${goal.title}
        </h3>
        <p class="text-xs font-bold text-[#FF6B35] mb-3">${goal.subtitle}</p>

        <div class="p-3 bg-[#FAF8F1] rounded-xl border border-[#191A19] mb-3 text-xs">
          <div class="text-[9px] uppercase font-bold text-slate-400 mb-0.5">Formula Rekomendasi:</div>
          <div class="font-black text-[#191A19]">${goal.bestFormula.title}</div>
          <p class="text-[11px] text-slate-600 mt-1 leading-snug">
            ${goal.bestFormula.description}
          </p>
        </div>
      </div>

      <div class="pt-2 border-t border-[#191A19] text-[11px] text-slate-600">
        <strong>Cara Pembuatan:</strong> ${goal.actionGuide}
      </div>
    </div>
  `).join('');

  initLucideIcons();
}

/**
 * KALKULATOR KEBUTUHAN PORSI BUAH HARIAN
 */
function calculateDailyFruitIntake() {
  const { weight, activity } = AppState.calculator;

  let multiplier = 2.5;
  if (activity === 'heavy') multiplier = 3.5;
  if (activity === 'moderate') multiplier = 3.0;

  const targetGrams = Math.round(weight * multiplier);
  const targetServings = Math.max(2, Math.round(targetGrams / 80));

  const resGrams = document.getElementById('resFruitGrams');
  const resServings = document.getElementById('resFruitServings');
  const resHydration = document.getElementById('resFruitHydration');
  const resGuidance = document.getElementById('resFruitGuidance');

  if (resGrams) resGrams.innerText = `${targetGrams} gram`;
  if (resServings) resServings.innerText = `${targetServings} Porsi Buah`;
  if (resHydration) resHydration.innerText = `~${Math.round(targetGrams * 0.85)} ml Air Seluler`;

  if (resGuidance) {
    resGuidance.innerHTML = `
      📋 <strong>Panduan Konsumsi Presisi:</strong> Konsumsi target <strong>${targetGrams} gram</strong> (${targetServings} porsi) ini secara terbagi, misalnya 1 porsi saat sarapan pagi dan sisanya saat jeda siang/sore untuk menjaga kestabilan energi harian dan penyerapan mikronutrien maksimal tanpa memicu lonjakan glukosa darah.
    `;
  }
}
