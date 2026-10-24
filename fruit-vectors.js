/**
 * FRUIT VECTORS - FLAT GRAPHIC DESIGN
 * Palet warna solid: #1E5128 (Forest Green), #FF6B35 (Tangerine Orange), #F7C04A (Sun Yellow), #FAF8F1 (Vanilla Cream), #191A19 (Deep Charcoal)
 * Desain 100% Flat Vector, Tanpa Gradasi, Batas Tegas & Kontras Tinggi.
 */

const FRUIT_VECTORS = {
  apel: {
    whole: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Stem & Leaf -->
        <path d="M100 52 C98 30 115 15 125 10 C123 18 114 34 104 52 Z" fill="#4A2E18"/>
        <path d="M102 38 C120 25 145 28 152 40 C140 52 118 50 102 38 Z" fill="#1E5128"/>
        <!-- Apple Body -->
        <path d="M100 56 C75 35 30 45 25 85 C20 125 45 180 85 188 C95 190 100 182 105 182 C110 182 115 190 125 188 C165 180 190 125 185 85 C180 45 135 35 110 56 C105 60 102 60 100 56 Z" fill="#E63946"/>
        <!-- Flat Shadow Block -->
        <path d="M105 182 C110 182 115 190 125 188 C165 180 190 125 185 85 C182 60 160 45 135 48 C145 75 140 145 105 182 Z" fill="#9B2226"/>
        <!-- Clean Highlight Shape -->
        <path d="M48 72 C40 85 40 115 48 130 C45 115 45 85 52 70 C54 66 50 69 48 72 Z" fill="#FAF8F1"/>
      </svg>
    `,
    sliced: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Stem -->
        <path d="M100 50 C98 32 110 20 118 14 C116 22 108 36 102 50 Z" fill="#4A2E18"/>
        <!-- Outer Red Peel -->
        <path d="M100 52 C75 35 30 45 25 85 C20 125 45 180 85 188 C95 190 100 182 105 182 C110 182 115 190 125 188 C165 180 190 125 185 85 C180 45 135 35 110 52 C105 56 102 56 100 52 Z" fill="#E63946"/>
        <!-- Inner Flesh -->
        <path d="M100 60 C78 45 40 54 36 88 C32 122 54 170 88 178 C96 180 100 174 105 174 C110 174 114 180 122 178 C156 170 178 122 174 88 C170 54 132 45 110 60 C106 63 103 63 100 60 Z" fill="#FAF8F1"/>
        <!-- Core Structure -->
        <path d="M100 90 C92 100 92 130 100 142 C108 130 108 100 100 90 Z" fill="#F7C04A"/>
        <!-- Seeds -->
        <path d="M96 112 C96 107 90 104 88 108 C86 113 90 118 95 116 Z" fill="#191A19"/>
        <path d="M112 114 C112 109 118 106 120 110 C122 115 118 120 113 118 Z" fill="#191A19"/>
      </svg>
    `
  },
  jeruk: {
    whole: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Stem & Leaf -->
        <path d="M100 36 L100 22 C100 22 103 18 107 20 C106 25 104 31 102 36 Z" fill="#4A2E18"/>
        <path d="M102 26 C124 16 142 22 146 32 C134 42 114 38 102 26 Z" fill="#1E5128"/>
        <!-- Orange Circle -->
        <circle cx="100" cy="110" r="75" fill="#FF6B35"/>
        <!-- Shadow Crescent -->
        <path d="M100 35 C141.4 35 175 68.6 175 110 C175 151.4 141.4 185 100 185 C125 165 140 135 140 110 C140 85 125 55 100 35 Z" fill="#D84A1B"/>
        <!-- Stylized Dimple Dots -->
        <circle cx="70" cy="85" r="3" fill="#D84A1B"/>
        <circle cx="65" cy="115" r="3" fill="#D84A1B"/>
        <circle cx="85" cy="145" r="3" fill="#D84A1B"/>
        <!-- Highlight -->
        <path d="M60 70 C52 82 52 105 60 115 C56 102 56 82 64 68 Z" fill="#FAF8F1"/>
      </svg>
    `,
    sliced: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Outer Peel -->
        <circle cx="100" cy="100" r="80" fill="#FF6B35"/>
        <!-- White Albedo Layer -->
        <circle cx="100" cy="100" r="72" fill="#FAF8F1"/>
        <!-- 8 Slices Segments -->
        <g fill="#FF8C42">
          <!-- Top -->
          <path d="M96 88 L96 36 C98 36 102 36 104 36 L104 88 C102 87 98 87 96 88 Z" fill="#FAF8F1"/>
          <!-- Segments -->
          <path d="M100 92 L100 40 A56 56 0 0 1 139 56 L106 94 Z" fill="#FF6B35"/>
          <path d="M108 96 L143 61 A56 56 0 0 1 156 100 L110 100 Z" fill="#FF8C42"/>
          <path d="M108 104 L156 104 A56 56 0 0 1 139 144 L106 106 Z" fill="#FF6B35"/>
          <path d="M104 108 L136 147 A56 56 0 0 1 96 156 L96 110 Z" fill="#FF8C42"/>
          <path d="M92 108 L92 156 A56 56 0 0 1 56 139 L92 106 Z" fill="#FF6B35"/>
          <path d="M88 104 L52 135 A56 56 0 0 1 44 96 L88 96 Z" fill="#FF8C42"/>
          <path d="M88 94 L44 92 A56 56 0 0 1 61 57 L92 92 Z" fill="#FF6B35"/>
          <path d="M94 90 L65 53 A56 56 0 0 1 100 44 L96 90 Z" fill="#FF8C42"/>
        </g>
        <!-- Center Pith Star -->
        <circle cx="100" cy="100" r="14" fill="#FAF8F1"/>
        <circle cx="100" cy="100" r="7" fill="#F7C04A"/>
      </svg>
    `
  },
  pisang: {
    whole: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Main Yellow Curve -->
        <path d="M30 145 C50 175 110 178 150 135 C175 108 185 65 180 35 C176 34 168 36 165 42 C168 70 156 105 135 125 C105 155 58 152 40 132 L30 145 Z" fill="#F7C04A"/>
        <!-- Inner Ridge (Shadow) -->
        <path d="M40 132 C58 152 105 155 135 125 C156 105 168 70 165 42 C160 48 150 56 142 66 C124 90 100 118 65 126 L40 132 Z" fill="#DDA116"/>
        <!-- Stem & Tip -->
        <path d="M180 35 L190 25 C186 20 180 20 174 24 L165 42 Z" fill="#1E5128"/>
        <path d="M30 145 L22 152 C20 155 22 160 26 158 L40 132 Z" fill="#4A2E18"/>
        <!-- Banana Highlight line -->
        <path d="M60 148 C95 156 128 138 148 116" stroke="#FAF8F1" stroke-width="4" stroke-linecap="round"/>
      </svg>
    `,
    sliced: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Coin Slice 1 -->
        <g transform="translate(40, 30)">
          <ellipse cx="40" cy="40" rx="34" ry="24" fill="#F7C04A"/>
          <ellipse cx="40" cy="40" rx="28" ry="19" fill="#FAF8F1"/>
          <circle cx="38" cy="39" r="2.5" fill="#191A19"/>
          <circle cx="43" cy="38" r="2.5" fill="#191A19"/>
          <circle cx="40" cy="43" r="2.5" fill="#191A19"/>
        </g>
        <!-- Coin Slice 2 -->
        <g transform="translate(85, 75)">
          <ellipse cx="40" cy="40" rx="38" ry="26" fill="#F7C04A"/>
          <ellipse cx="40" cy="40" rx="32" ry="21" fill="#FAF8F1"/>
          <circle cx="37" cy="38" r="3" fill="#191A19"/>
          <circle cx="43" cy="37" r="3" fill="#191A19"/>
          <circle cx="40" cy="43" r="3" fill="#191A19"/>
        </g>
        <!-- Coin Slice 3 -->
        <g transform="translate(25, 110)">
          <ellipse cx="40" cy="40" rx="36" ry="25" fill="#DDA116"/>
          <ellipse cx="40" cy="40" rx="30" ry="20" fill="#FAF8F1"/>
          <circle cx="38" cy="39" r="2.5" fill="#191A19"/>
          <circle cx="43" cy="38" r="2.5" fill="#191A19"/>
          <circle cx="40" cy="43" r="2.5" fill="#191A19"/>
        </g>
      </svg>
    `
  },
  alpukat: {
    whole: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Stem -->
        <circle cx="100" cy="32" r="6" fill="#4A2E18"/>
        <!-- Avocado Pear Body -->
        <path d="M100 32 C82 32 68 56 64 80 C56 112 48 145 70 170 C85 186 115 186 130 170 C152 145 144 112 136 80 C132 56 118 32 100 32 Z" fill="#1E5128"/>
        <!-- Texture & Shadow Block -->
        <path d="M100 32 C118 32 132 56 136 80 C144 112 152 145 130 170 C115 186 95 186 85 182 C110 165 125 125 120 80 C115 55 108 40 100 32 Z" fill="#113618"/>
        <!-- Clean Highlight Dot -->
        <ellipse cx="80" cy="90" rx="8" ry="16" transform="rotate(-15 80 90)" fill="#2D6A4F"/>
      </svg>
    `,
    sliced: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Outer Dark Skin -->
        <path d="M100 28 C82 28 68 52 64 76 C56 108 48 142 70 168 C85 186 115 186 130 168 C152 142 144 108 136 76 C132 52 118 28 100 28 Z" fill="#1E5128"/>
        <!-- Flesh (Lime to Yellowish) -->
        <path d="M100 36 C86 36 74 58 72 78 C65 106 58 136 76 158 C88 174 112 174 124 158 C142 136 135 106 128 78 C126 58 114 36 100 36 Z" fill="#C7D862"/>
        <!-- Inner Light Halo -->
        <circle cx="100" cy="120" r="42" fill="#E8ED98"/>
        <!-- Giant Pit Seed -->
        <circle cx="100" cy="120" r="28" fill="#582F0E"/>
        <path d="M100 92 A28 28 0 0 1 128 120 A28 28 0 0 1 100 148 C115 135 115 105 100 92 Z" fill="#3D1E08"/>
        <circle cx="88" cy="110" r="4" fill="#FAF8F1"/>
      </svg>
    `
  },
  semangka: {
    whole: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Main Sphere -->
        <circle cx="100" cy="100" r="75" fill="#1E5128"/>
        <!-- Wavy Striping (Light Green Solid) -->
        <path d="M100 25 C92 50 85 80 88 100 C92 125 80 155 100 175 C85 155 70 120 74 100 C78 75 70 45 100 25 Z" fill="#52B788"/>
        <path d="M130 35 C124 60 118 85 120 105 C122 130 112 155 130 170 C114 150 102 125 105 105 C108 80 104 55 130 35 Z" fill="#52B788"/>
        <path d="M68 38 C62 60 55 85 58 108 C62 130 52 155 68 168 C52 150 40 125 44 105 C48 80 44 55 68 38 Z" fill="#52B788"/>
        <path d="M155 58 C150 80 148 100 150 120 C152 138 146 150 158 156 C144 142 136 122 138 102 C140 82 136 68 155 58 Z" fill="#52B788"/>
      </svg>
    `,
    sliced: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Wedge Outer Green Rind -->
        <path d="M25 60 C50 155 150 155 175 60 L100 150 Z" fill="#1E5128"/>
        <path d="M25 60 C50 155 150 155 175 60 L165 65 C142 145 58 145 35 65 Z" fill="#1E5128"/>
        <!-- White Rind Band -->
        <path d="M35 65 C58 145 142 145 165 65 L158 70 C138 138 62 138 42 70 Z" fill="#FAF8F1"/>
        <!-- Crimson Flesh -->
        <path d="M42 70 C62 138 138 138 158 70 L100 140 Z" fill="#E63946"/>
        <!-- Classic Black Seeds -->
        <ellipse cx="75" cy="90" rx="3.5" ry="6" transform="rotate(-20 75 90)" fill="#191A19"/>
        <ellipse cx="125" cy="90" rx="3.5" ry="6" transform="rotate(20 125 90)" fill="#191A19"/>
        <ellipse cx="100" cy="105" rx="3.5" ry="6" fill="#191A19"/>
        <ellipse cx="85" cy="118" rx="3" ry="5.5" transform="rotate(-15 85 118)" fill="#191A19"/>
        <ellipse cx="115" cy="118" rx="3" ry="5.5" transform="rotate(15 115 118)" fill="#191A19"/>
      </svg>
    `
  },
  pepaya: {
    whole: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 25 L100 15 L106 15 L104 25 Z" fill="#1E5128"/>
        <!-- Papaya Pear Silhouette -->
        <path d="M100 25 C84 25 72 48 70 75 C64 105 52 140 70 172 C85 190 115 190 130 172 C148 140 136 105 130 75 C128 48 116 25 100 25 Z" fill="#FF6B35"/>
        <path d="M100 25 C116 25 128 48 130 75 C136 105 148 140 130 172 C115 190 98 190 85 184 C110 165 122 130 115 85 C110 58 106 38 100 25 Z" fill="#D84A1B"/>
        <!-- Greenish Blossom Base -->
        <circle cx="100" cy="184" r="5" fill="#1E5128"/>
      </svg>
    `,
    sliced: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Skin Edge -->
        <path d="M100 25 C84 25 72 48 70 75 C64 105 52 140 70 172 C85 190 115 190 130 172 C148 140 136 105 130 75 C128 48 116 25 100 25 Z" fill="#1E5128"/>
        <!-- Orange Papaya Flesh -->
        <path d="M100 32 C88 32 78 52 76 76 C70 102 60 135 76 164 C88 180 112 180 124 164 C140 135 130 102 124 76 C122 52 112 32 100 32 Z" fill="#FF6B35"/>
        <!-- Cavity -->
        <path d="M100 65 C88 65 82 85 82 110 C82 135 88 152 100 152 C112 152 118 135 118 110 C118 85 112 65 100 65 Z" fill="#D84A1B"/>
        <!-- Caviar-like Seeds Array -->
        <g fill="#191A19">
          <circle cx="95" cy="80" r="3.5"/><circle cx="105" cy="80" r="3.5"/><circle cx="100" cy="86" r="3.5"/>
          <circle cx="93" cy="94" r="3.5"/><circle cx="107" cy="94" r="3.5"/><circle cx="100" cy="100" r="3.5"/>
          <circle cx="94" cy="108" r="3.5"/><circle cx="106" cy="108" r="3.5"/><circle cx="100" cy="115" r="3.5"/>
          <circle cx="95" cy="122" r="3.5"/><circle cx="105" cy="122" r="3.5"/><circle cx="100" cy="129" r="3.5"/>
          <circle cx="96" cy="136" r="3.5"/><circle cx="104" cy="136" r="3.5"/><circle cx="100" cy="143" r="3.5"/>
        </g>
      </svg>
    `
  },
  naga: {
    whole: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Magenta Oval Body -->
        <ellipse cx="100" cy="110" rx="65" ry="75" fill="#D81159"/>
        <!-- Leafy Green Scales Overlay -->
        <path d="M100 35 C95 48 90 60 100 68 C110 60 105 48 100 35 Z" fill="#52B788"/>
        <path d="M60 65 C55 80 58 92 70 94 C74 84 72 72 60 65 Z" fill="#52B788"/>
        <path d="M140 65 C145 80 142 92 130 94 C126 84 128 72 140 65 Z" fill="#52B788"/>
        <path d="M42 105 C40 120 46 132 58 132 C60 120 56 110 42 105 Z" fill="#52B788"/>
        <path d="M158 105 C160 120 154 132 142 132 C140 120 144 110 158 105 Z" fill="#52B788"/>
        <path d="M65 150 C70 162 80 170 92 165 C88 155 80 148 65 150 Z" fill="#52B788"/>
        <path d="M135 150 C130 162 120 170 108 165 C112 155 120 148 135 150 Z" fill="#52B788"/>
      </svg>
    `,
    sliced: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Outer Magenta Skin with Scale Tips -->
        <circle cx="100" cy="100" r="78" fill="#D81159"/>
        <path d="M100 22 L106 12 L94 12 Z" fill="#52B788"/>
        <path d="M178 100 L188 106 L188 94 Z" fill="#52B788"/>
        <path d="M22 100 L12 94 L12 106 Z" fill="#52B788"/>
        <!-- Inner Pulp (White or Deep Magenta, here High Contrast White with Black Seeds) -->
        <circle cx="100" cy="100" r="66" fill="#FAF8F1"/>
        <!-- Tiny Black Seeds Scattered -->
        <g fill="#191A19">
          <circle cx="85" cy="65" r="2.5"/><circle cx="112" cy="62" r="2.5"/><circle cx="100" cy="74" r="2.5"/>
          <circle cx="70" cy="85" r="2.5"/><circle cx="92" cy="90" r="2.5"/><circle cx="120" cy="82" r="2.5"/>
          <circle cx="132" cy="102" r="2.5"/><circle cx="104" cy="106" r="2.5"/><circle cx="76" cy="110" r="2.5"/>
          <circle cx="62" cy="120" r="2.5"/><circle cx="90" cy="128" r="2.5"/><circle cx="118" cy="124" r="2.5"/>
          <circle cx="138" cy="128" r="2.5"/><circle cx="105" cy="142" r="2.5"/><circle cx="82" cy="145" r="2.5"/>
        </g>
      </svg>
    `
  },
  nanas: {
    whole: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Spiky Crown Leaves -->
        <path d="M100 20 L108 55 L92 55 Z" fill="#1E5128"/>
        <path d="M85 24 L100 60 L80 52 Z" fill="#2D6A4F"/>
        <path d="M115 24 L120 52 L100 60 Z" fill="#2D6A4F"/>
        <path d="M72 35 L95 65 L70 58 Z" fill="#1E5128"/>
        <path d="M128 35 L130 58 L105 65 Z" fill="#1E5128"/>
        <!-- Pineapple Barrel Body -->
        <rect x="55" y="65" width="90" height="115" rx="42" fill="#F7C04A"/>
        <!-- Diamond Cross-Hatch Lines -->
        <path d="M65 90 L135 155 M60 120 L120 175 M80 72 L145 130" stroke="#DDA116" stroke-width="4" stroke-linecap="round"/>
        <path d="M135 90 L65 155 M140 120 L80 175 M120 72 L55 130" stroke="#DDA116" stroke-width="4" stroke-linecap="round"/>
      </svg>
    `,
    sliced: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Pineapple Ring Slice -->
        <circle cx="100" cy="100" r="76" fill="#F7C04A"/>
        <!-- Serrated Edge Details -->
        <g stroke="#DDA116" stroke-width="3">
          <circle cx="100" cy="100" r="68" fill="#F7C04A"/>
          <line x1="100" y1="24" x2="100" y2="36"/>
          <line x1="100" y1="164" x2="100" y2="176"/>
          <line x1="24" y1="100" x2="36" y2="100"/>
          <line x1="164" y1="100" x2="176" y2="100"/>
          <line x1="46" y1="46" x2="55" y2="55"/>
          <line x1="145" y1="145" x2="154" y2="154"/>
          <line x1="154" y1="46" x2="145" y2="55"/>
          <line x1="55" y1="145" x2="46" y2="154"/>
        </g>
        <!-- Center Core Cutout -->
        <circle cx="100" cy="100" r="26" fill="#FAF8F1"/>
      </svg>
    `
  },
  kiwi: {
    whole: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Fuzzy Brown Body -->
        <ellipse cx="100" cy="105" rx="60" ry="75" fill="#7F4F24"/>
        <!-- Shadow Arc -->
        <path d="M100 30 C133 30 160 63 160 105 C160 146 133 180 100 180 C120 160 135 135 135 105 C135 75 120 50 100 30 Z" fill="#582F0E"/>
        <!-- Texture Specks -->
        <g fill="#582F0E">
          <circle cx="80" cy="65" r="2"/><circle cx="95" cy="80" r="2"/><circle cx="70" cy="115" r="2"/>
          <circle cx="85" cy="140" r="2"/><circle cx="110" cy="155" r="2"/>
        </g>
      </svg>
    `,
    sliced: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Brown Skin -->
        <circle cx="100" cy="100" r="76" fill="#7F4F24"/>
        <!-- Solid Emerald-Lime Flesh -->
        <circle cx="100" cy="100" r="70" fill="#52B788"/>
        <!-- Creamy White Core -->
        <ellipse cx="100" cy="100" rx="22" ry="16" fill="#FAF8F1"/>
        <!-- Radiating Rays -->
        <g stroke="#FAF8F1" stroke-width="2">
          <line x1="100" y1="80" x2="100" y2="60"/>
          <line x1="100" y1="120" x2="100" y2="140"/>
          <line x1="75" y1="100" x2="55" y2="100"/>
          <line x1="125" y1="100" x2="145" y2="100"/>
          <line x1="82" y1="84" x2="68" y2="70"/>
          <line x1="118" y1="116" x2="132" y2="130"/>
          <line x1="118" y1="84" x2="132" y2="70"/>
          <line x1="82" y1="116" x2="68" y2="130"/>
        </g>
        <!-- Black Seed Ring -->
        <g fill="#191A19">
          <circle cx="100" cy="72" r="3"/><circle cx="100" cy="128" r="3"/>
          <circle cx="72" cy="100" r="3"/><circle cx="128" cy="100" r="3"/>
          <circle cx="80" cy="78" r="3"/><circle cx="120" cy="122" r="3"/>
          <circle cx="120" cy="78" r="3"/><circle cx="80" cy="122" r="3"/>
          <circle cx="90" cy="74" r="2.5"/><circle cx="110" cy="74" r="2.5"/>
          <circle cx="90" cy="126" r="2.5"/><circle cx="110" cy="126" r="2.5"/>
        </g>
      </svg>
    `
  },
  delima: {
    whole: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Crown Calyx -->
        <path d="M100 20 L108 38 L92 38 Z" fill="#9B2226"/>
        <path d="M92 24 L100 42 L84 38 Z" fill="#660708"/>
        <path d="M108 24 L116 38 L100 42 Z" fill="#660708"/>
        <!-- Ruby Sphere -->
        <circle cx="100" cy="112" r="72" fill="#E63946"/>
        <path d="M100 40 C139 40 172 72 172 112 C172 152 139 184 100 184 C120 164 136 138 136 112 C136 86 120 60 100 40 Z" fill="#9B2226"/>
      </svg>
    `,
    sliced: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="76" fill="#9B2226"/>
        <circle cx="100" cy="100" r="70" fill="#FAF8F1"/>
        <!-- Aril Clusters -->
        <g fill="#E63946">
          <circle cx="80" cy="75" r="9"/><circle cx="98" cy="70" r="9"/><circle cx="88" cy="88" r="9"/>
          <circle cx="120" cy="78" r="9"/><circle cx="135" cy="92" r="9"/><circle cx="118" cy="96" r="9"/>
          <circle cx="75" cy="115" r="9"/><circle cx="88" cy="130" r="9"/><circle cx="72" cy="132" r="9"/>
          <circle cx="125" cy="120" r="9"/><circle cx="115" cy="135" r="9"/><circle cx="132" cy="135" r="9"/>
        </g>
        <g fill="#FAF8F1">
          <circle cx="78" cy="73" r="2.5"/><circle cx="96" cy="68" r="2.5"/><circle cx="118" cy="76" r="2.5"/>
          <circle cx="73" cy="113" r="2.5"/><circle cx="123" cy="118" r="2.5"/>
        </g>
      </svg>
    `
  },
  blueberry: {
    whole: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Back Berry -->
        <circle cx="135" cy="90" r="42" fill="#1D3557"/>
        <!-- Front Berry -->
        <circle cx="85" cy="120" r="54" fill="#2A6F97"/>
        <path d="M85 66 C114 66 139 90 139 120 C139 150 114 174 85 174 C100 158 112 140 112 120 C112 100 100 82 85 66 Z" fill="#1D3557"/>
        <!-- 5-Point Star Calyx -->
        <g transform="translate(85, 120)" fill="#011627">
          <circle cx="0" cy="0" r="10"/>
          <polygon points="0,-16 5,-6 15,-5 7,3 9,14 0,8 -9,14 -7,3 -15,-5 -5,-6"/>
        </g>
      </svg>
    `,
    sliced: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Indigo Skin -->
        <circle cx="100" cy="100" r="75" fill="#1D3557"/>
        <!-- Translucent Violet-Cream Flesh -->
        <circle cx="100" cy="100" r="68" fill="#C5D3E8"/>
        <!-- Central Cavity Pattern -->
        <g fill="#2A6F97">
          <circle cx="100" cy="85" r="7"/>
          <circle cx="100" cy="115" r="7"/>
          <circle cx="85" cy="100" r="7"/>
          <circle cx="115" cy="100" r="7"/>
          <circle cx="100" cy="100" r="5" fill="#FAF8F1"/>
        </g>
      </svg>
    `
  },
  jambu: {
    whole: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Stem & Calyx -->
        <circle cx="100" cy="30" r="6" fill="#1E5128"/>
        <!-- Lime-Green Body -->
        <ellipse cx="100" cy="112" rx="66" ry="76" fill="#52B788"/>
        <!-- Shadow Half -->
        <path d="M100 36 C136 36 166 70 166 112 C166 154 136 188 100 188 C120 168 135 142 135 112 C135 82 120 56 100 36 Z" fill="#1E5128"/>
        <!-- Bottom Blossom Scar -->
        <ellipse cx="100" cy="186" rx="10" ry="4" fill="#4A2E18"/>
      </svg>
    `,
    sliced: `
      <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Green Skin -->
        <circle cx="100" cy="100" r="76" fill="#1E5128"/>
        <circle cx="100" cy="100" r="70" fill="#52B788"/>
        <!-- Pink Guava Flesh -->
        <circle cx="100" cy="100" r="62" fill="#E63946"/>
        <!-- Core with Specks of Seeds -->
        <circle cx="100" cy="100" r="38" fill="#FF758F"/>
        <g fill="#FAF8F1">
          <circle cx="90" cy="85" r="3"/><circle cx="110" cy="85" r="3"/>
          <circle cx="85" cy="102" r="3"/><circle cx="115" cy="102" r="3"/>
          <circle cx="92" cy="118" r="3"/><circle cx="108" cy="118" r="3"/>
          <circle cx="100" cy="94" r="2.5"/><circle cx="100" cy="110" r="2.5"/>
        </g>
      </svg>
    `
  }
};

/**
 * Helper untuk mengambil markup SVG buah
 * @param {string} fruitId - id buah (apel, jeruk, dll.)
 * @param {string} mode - 'whole' atau 'sliced'
 * @returns {string} SVG markup string
 */
function getFruitSVG(fruitId, mode = 'whole') {
  if (FRUIT_VECTORS[fruitId] && FRUIT_VECTORS[fruitId][mode]) {
    return FRUIT_VECTORS[fruitId][mode];
  }
  // Default fallback if unknown
  return FRUIT_VECTORS.apel.whole;
}

