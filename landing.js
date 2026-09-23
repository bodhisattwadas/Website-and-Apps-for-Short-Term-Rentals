/**
 * StayOps Landing Page - Interactive Engine
 * Handles interactive product tour, ROI calculator, and FAQ accordions.
 */

document.addEventListener('DOMContentLoaded', () => {
  setupThemeToggle();
  setupFeatureTabs();
  setupRoiCalculator();
  setupFaqAccordion();
});

/* ==========================================================================
   THEME SWITCHER (LIGHT / DARK)
   ========================================================================== */
function setupThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const themeLabel = document.getElementById('themeLabel');

  const savedTheme = localStorage.getItem('stayops-theme') || 'light';
  applyTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeIcon) themeIcon.textContent = '☀️';
      if (themeLabel) themeLabel.textContent = 'Light';
      localStorage.setItem('stayops-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeIcon) themeIcon.textContent = '🌙';
      if (themeLabel) themeLabel.textContent = 'Dark';
      localStorage.setItem('stayops-theme', 'light');
    }
  }
}

/* ==========================================================================
   FEATURE DEEP-DIVE TABS
   ========================================================================== */
const featureData = {
  calendar: {
    tag: "CENTRALIZED PMS ENGINE",
    title: "Zero-Latency 2-Way Multi-Calendar",
    desc: "Say goodbye to iCal delays and embarrassing double-bookings. StayOps connects directly via direct partner APIs to Airbnb, VRBO, and Booking.com, synchronizing availability and dynamic pricing in under 400 milliseconds.",
    bullets: [
      { title: "Direct API Instant Sync", text: "Instant reservation blocks across all channels with zero manual calendar updates." },
      { title: "Gantt Timeline Interface", text: "Drag-free visual overview of all 14 upcoming days across your entire property fleet." },
      { title: "Direct Booking Engine", text: "Accept commission-free credit card bookings directly on your custom domain via Stripe." }
    ],
    mockHtml: `
      <div style="font-family: monospace; font-size: 11px; color: var(--emerald); margin-bottom: 8px;">● 2-WAY API SYNC ACTIVE (AIRBNB • VRBO • DIRECT)</div>
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 12px; margin-bottom: 10px;">
        <div style="display:flex; justify-content:space-between; font-weight:600; font-size:12px; color:#fff; margin-bottom:4px;">
          <span>The Glasshouse Villa (Aspen)</span>
          <span style="color:#10B981;">$940/nt</span>
        </div>
        <div style="height: 24px; background: rgba(255, 56, 92, 0.2); border: 1px solid #FF385C; border-radius: 6px; display:flex; align-items:center; padding: 0 8px; font-size:11px; color:#FF859B;">
          Sep 24 - 28 • Elena Rostova (Airbnb Instant Book)
        </div>
      </div>
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 12px;">
        <div style="display:flex; justify-content:space-between; font-weight:600; font-size:12px; color:#fff; margin-bottom:4px;">
          <span>Azure Oceanfront Penthouse</span>
          <span style="color:#10B981;">$780/nt</span>
        </div>
        <div style="height: 24px; background: rgba(44, 100, 181, 0.25); border: 1px solid #3B82F6; border-radius: 6px; display:flex; align-items:center; padding: 0 8px; font-size:11px; color:#93C5FD;">
          Sep 24 - 29 • Marcus Vance (VRBO Elite Book)
        </div>
      </div>
    `
  },
  messaging: {
    tag: "UNIFIED GUEST COMMUNICATIONS",
    title: "Omnichannel Inbox with Contextual AI",
    desc: "Bring Airbnb messages, VRBO guest chats, WhatsApp inquiries, and Direct SMS into one unified thread. Our AI assistant analyzes guest reservation data to draft perfect answers in 1 click.",
    bullets: [
      { title: "One Unified Inbox", text: "No more switching between 4 apps to answer 'Where is the Wi-Fi password?'" },
      { title: "Reservation-Aware AI Drafts", text: "Auto-populates guest names, door codes, and check-out times into suggestions." },
      { title: "Automated Triggers", text: "Dispatch check-in guides 24h prior, parking maps, and review requests post-departure." }
    ],
    mockHtml: `
      <div style="display:flex; gap:8px; margin-bottom:12px; align-items:center;">
        <span style="background:rgba(255,56,92,0.15); color:#FF385C; font-size:10px; font-weight:700; padding:2px 8px; border-radius:999px;">AIRBNB VIP</span>
        <span style="font-size:12px; color:#fff; font-weight:600;">Sophie Laurent</span>
      </div>
      <div style="background:rgba(255,255,255,0.03); border-radius:8px; padding:10px 12px; font-size:12px; margin-bottom:8px; color:#E2E8F0;">
        "Hi! Could we request a late checkout on the 30th around 1:00 PM?"
      </div>
      <div style="background:rgba(16,185,129,0.1); border:1px dashed #10B981; border-radius:8px; padding:10px 12px; font-size:11px; color:#34D399;">
        ⚡ AI Suggested Reply: "Hi Sophie! Yes, we've extended your smart lock code #2087 until 1:00 PM on the 30th free of charge!"
      </div>
    `
  },
  housekeeping: {
    tag: "FIELD OPERATIONS & TURNOVER QUALITY",
    title: "Automated Turnovers with Photo Verification",
    desc: "Never fear an 11:00 AM checkout again. Turnover tasks are auto-generated when bookings are created and dispatched to your local cleaners with mandatory photo checkpoints.",
    bullets: [
      { title: "Live Kanban Board", text: "Track cleanings in real-time across Pending, In Progress, and Inspected." },
      { title: "Mobile Cleaner App", text: "Cleaners work from an easy mobile checklist without needing a paid login." },
      { title: "Quality Photo Inspections", text: "Cleaners must snap photos of bed linen, stove, and bathrooms before unit unlocks for guest." }
    ],
    mockHtml: `
      <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:11px; color:#94A3B8;">
        <span>TURNOVER IN PROGRESS (65%)</span>
        <span style="color:#F59E0B; font-weight:600;">Due 2:30 PM Today</span>
      </div>
      <div style="height:6px; background:rgba(255,255,255,0.1); border-radius:999px; overflow:hidden; margin-bottom:12px;">
        <div style="height:100%; width:65%; background:#F59E0B;"></div>
      </div>
      <div style="font-size:12px; color:#CBD5E1; display:flex; flex-direction:column; gap:6px;">
        <div>✓ Fresh 600TC Egyptian cotton linens fitted</div>
        <div>✓ Master bathroom sanitized & restocked</div>
        <div>✓ 4x AA batteries replaced in front door lock</div>
        <div style="color:#64748B;">○ Balcony glass cleaning & photo upload</div>
      </div>
    `
  },
  iot: {
    tag: "KEYLESS AUTOMATION & SENSORS",
    title: "Smart Locks & Decibel Party Prevention",
    desc: "Seamless keyless entry with zero manual programming. Codes are auto-created using the guest's phone number and strictly expire at checkout. Integrated Minut noise sensors stop parties before neighbors call.",
    bullets: [
      { title: "Automatic PIN Generation", text: "Codes match the last 4 digits of guest's phone and activate precisely at check-in." },
      { title: "Quiet-Hours Decibel Guard", text: "Friendly automated SMS warnings if decibel levels exceed 65 dB after 10:00 PM." },
      { title: "Energy Eco Mode", text: "Thermostats auto-adjust to save 22% on utility bills between turnover windows." }
    ],
    mockHtml: `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <span style="font-size:12px; color:#fff; font-weight:600;">Schlage Encode Plus • Azure Penthouse</span>
        <span style="background:rgba(16,185,129,0.15); color:#10B981; font-size:10px; font-weight:700; padding:2px 8px; border-radius:999px;">PIN #3104 ACTIVE</span>
      </div>
      <div style="background:rgba(244,63,94,0.08); border:1px solid rgba(244,63,94,0.25); border-radius:8px; padding:10px 12px; font-size:12px;">
        <div style="display:flex; justify-content:space-between; color:#FB7185; font-weight:600; font-size:11px;">
          <span>NOISE MONITOR (MINUT)</span>
          <span>42 dB (Normal)</span>
        </div>
        <div style="height:4px; background:rgba(255,255,255,0.1); border-radius:999px; overflow:hidden; margin-top:6px;">
          <div style="height:100%; width:40%; background:#10B981;"></div>
        </div>
      </div>
    `
  },
  financials: {
    tag: "ACCOUNTING & OWNER STATEMENTS",
    title: "Automated Owner Payouts & Dynamic Pricing",
    desc: "Eliminate end-of-month accounting spreadsheets. Generate transparent owner statements with channel commission deductions, cleaning fee reimbursements, and local occupancy taxes broken down.",
    bullets: [
      { title: "1-Click PDF Statements", text: "Download branded owner payout statements with full transparency." },
      { title: "Automated Split Payouts", text: "Route management commissions to your bank and owner net payouts via Stripe." },
      { title: "Dynamic Revenue Optimization", text: "Track portfolio ADR, RevPAR, and market pace in real time." }
    ],
    mockHtml: `
      <div style="font-size:11px; color:#94A3B8; margin-bottom:6px;">SEPTEMBER 2026 OWNER STATEMENT SUMMARY</div>
      <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:6px; font-size:12px;">
        <span style="color:#94A3B8;">Gross Revenue (5 Bookings)</span>
        <strong style="color:#fff;">$23,840.00</strong>
      </div>
      <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.08); padding:6px 0; font-size:12px;">
        <span style="color:#94A3B8;">OTA Fees (Airbnb / VRBO)</span>
        <span style="color:#F43F5E;">-$715.20</span>
      </div>
      <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.08); padding:6px 0; font-size:12px;">
        <span style="color:#94A3B8;">Management Commission (20%)</span>
        <span style="color:#F59E0B;">-$4,624.96</span>
      </div>
      <div style="display:flex; justify-content:space-between; padding-top:6px; font-size:13px; font-weight:700;">
        <span style="color:#fff;">Net Owner Payout</span>
        <span style="color:#10B981;">$18,499.84</span>
      </div>
    `
  }
};

function setupFeatureTabs() {
  const buttons = document.querySelectorAll('.feat-tab-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const key = btn.getAttribute('data-tab');
      const data = featureData[key];
      if (!data) return;

      const tagEl = document.getElementById('featTag');
      const titleEl = document.getElementById('featTitle');
      const descEl = document.getElementById('featDesc');
      const bulletsEl = document.getElementById('featBullets');
      const mockEl = document.getElementById('featMockDisplay');

      if (tagEl) tagEl.textContent = data.tag;
      if (titleEl) titleEl.textContent = data.title;
      if (descEl) descEl.textContent = data.desc;
      if (mockEl) mockEl.innerHTML = data.mockHtml;

      if (bulletsEl) {
        bulletsEl.innerHTML = data.bullets.map(b => `
          <div class="feature-bullet">
            <div class="feat-bullet-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div>
              <strong style="color: #fff; font-size: 14px;">${b.title}</strong>
              <p style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">${b.text}</p>
            </div>
          </div>
        `).join('');
      }
    });
  });
}

/* ==========================================================================
   INTERACTIVE HOST ROI CALCULATOR
   ========================================================================== */
function setupRoiCalculator() {
  const doorsSlider = document.getElementById('sliderDoors');
  const rateSlider = document.getElementById('sliderRate');

  const doorsDisplay = document.getElementById('valDoors');
  const rateDisplay = document.getElementById('valRate');

  const hoursSavedEl = document.getElementById('metricHours');
  const directRevenueEl = document.getElementById('metricDirect');
  const roiMultiplierEl = document.getElementById('metricRoi');

  function recalculate() {
    if (!doorsSlider || !rateSlider) return;

    const doors = parseInt(doorsSlider.value);
    const rate = parseInt(rateSlider.value);

    if (doorsDisplay) doorsDisplay.textContent = `${doors} Doors`;
    if (rateDisplay) rateDisplay.textContent = `$${rate}/night`;

    // Calculations based on industry benchmarks:
    // Avg 3.2 turnovers / month / door = 2.5 hrs saved per turnover
    const hoursSaved = Math.round(doors * 7.5);
    // Direct booking lift: 18% of bookings switched from OTA to direct = 15% OTA commission saved
    const monthlyGross = doors * 20 * rate; // 20 occupied nights
    const otaFeeSaved = Math.round(monthlyGross * 0.18 * 0.15);
    // StayOps cost @ $14/door
    const stayopsCost = doors * 14;
    const roi = (otaFeeSaved / stayopsCost).toFixed(1);

    if (hoursSavedEl) hoursSavedEl.textContent = `${hoursSaved} hrs/mo`;
    if (directRevenueEl) directRevenueEl.textContent = `+$${otaFeeSaved.toLocaleString()}/mo`;
    if (roiMultiplierEl) roiMultiplierEl.textContent = `${roi}x Return`;
  }

  if (doorsSlider && rateSlider) {
    doorsSlider.addEventListener('input', recalculate);
    rateSlider.addEventListener('input', recalculate);
    recalculate();
  }
}

/* ==========================================================================
   FAQ ACCORDION
   ========================================================================== */
function setupFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const q = item.querySelector('.faq-question');
    if (q) {
      q.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        items.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });
}
