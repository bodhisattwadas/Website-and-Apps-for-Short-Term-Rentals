/**
 * StayOps - Short-Term Rental Operating System & Mobile App
 * Core Interactive Controller & State Management
 */

// Global State
const state = {
  activeScreen: 'dashboard',
  viewMode: 'desktop', // 'desktop' | 'mobile'
  mobileTab: 'mob-home',
  selectedChannelFilter: 'all',
  activeThreadId: 1,
  
  // Properties Data
  properties: [
    {
      id: 1,
      title: "The Glasshouse Villa",
      location: "Aspen, Colorado",
      type: "Luxury Chalet",
      guests: 8,
      beds: 4,
      baths: 4.5,
      price: 940,
      rating: 4.98,
      reviews: 114,
      status: "occupied", // occupied, cleaning, ready, maintenance
      currentGuest: "Elena Rostova",
      checkOut: "Tomorrow, 11:00 AM",
      lockCode: "8492",
      battery: "92%",
      temp: "71°F",
      noise: 42, // dB
      channels: ["airbnb", "vrbo", "direct"],
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Azure Oceanfront Penthouse",
      location: "Miami Beach, Florida",
      type: "Modern Penthouse",
      guests: 6,
      beds: 3,
      baths: 3,
      price: 780,
      rating: 4.95,
      reviews: 89,
      status: "cleaning",
      currentGuest: "Turnover in progress",
      checkOut: "Today, 10:00 AM",
      nextCheckIn: "Today, 3:00 PM (Marcus Vance)",
      lockCode: "3104",
      battery: "14%", // alert!
      temp: "74°F",
      noise: 38,
      channels: ["airbnb", "booking"],
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Nordic Timber Forest Loft",
      location: "Lake Tahoe, California",
      type: "A-Frame Cabin",
      guests: 4,
      beds: 2,
      baths: 2,
      price: 490,
      rating: 5.0,
      reviews: 67,
      status: "ready",
      currentGuest: "Ready for Guest",
      checkOut: "Vacant",
      nextCheckIn: "Tomorrow, 4:00 PM",
      lockCode: "9914",
      battery: "88%",
      temp: "68°F",
      noise: 28,
      channels: ["airbnb", "vrbo", "direct"],
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "SoHo Industrial Designer Loft",
      location: "New York City, NY",
      type: "Urban Loft",
      guests: 4,
      beds: 2,
      baths: 2,
      price: 620,
      rating: 4.92,
      reviews: 142,
      status: "occupied",
      currentGuest: "Dr. Jonathan Ross",
      checkOut: "Sep 28, 11:00 AM",
      lockCode: "4471",
      battery: "76%",
      temp: "70°F",
      noise: 68, // Alert! Quiet hours warning
      channels: ["airbnb", "direct"],
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Emerald Bay Waterfront Villa",
      location: "Lake Como, Italy",
      type: "Historic Villa",
      guests: 10,
      beds: 5,
      baths: 5,
      price: 1850,
      rating: 4.99,
      reviews: 52,
      status: "occupied",
      currentGuest: "Sophie & Pierre Laurent",
      checkOut: "Sep 30, 10:00 AM",
      lockCode: "2087",
      battery: "95%",
      temp: "72°F",
      noise: 35,
      channels: ["direct", "vrbo"],
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Highland Peak Ski Chalet",
      location: "Whistler, BC, Canada",
      type: "Ski-in / Ski-out",
      guests: 8,
      beds: 4,
      baths: 3.5,
      price: 890,
      rating: 4.88,
      reviews: 73,
      status: "maintenance",
      currentGuest: "HVAC Duct Cleaning",
      checkOut: "Blocked",
      lockCode: "0000",
      battery: "64%",
      temp: "66°F",
      noise: 15,
      channels: ["airbnb"],
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Guest Conversations
  conversations: [
    {
      id: 1,
      guestName: "Sophie Laurent",
      guestAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
      channel: "airbnb",
      property: "Emerald Bay Waterfront Villa",
      dates: "Sep 23 - Sep 30 (7 nights)",
      status: "In-house (VIP)",
      unread: true,
      lastMessageTime: "12m ago",
      snippet: "Hi! Can we request a late checkout on the 30th around 1:00 PM?",
      messages: [
        { sender: "host", time: "Yesterday, 3:00 PM", text: "Welcome to Emerald Bay Villa! Your door code is #2087. Complimentary Chianti wine is in the cooler. Let us know if you need anything!" },
        { sender: "guest", time: "Yesterday, 4:15 PM", text: "Thank you so much! The villa is breathtaking. We love the sunset view." },
        { sender: "guest", time: "12m ago", text: "Hi! Can we request a late checkout on the 30th around 1:00 PM? Our flight is in the late afternoon." }
      ]
    },
    {
      id: 2,
      guestName: "Marcus Vance",
      guestAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
      channel: "vrbo",
      property: "Azure Oceanfront Penthouse",
      dates: "Today - Sep 27 (4 nights)",
      status: "Arriving Today",
      unread: false,
      lastMessageTime: "45m ago",
      snippet: "Landing at Miami International now. Is early baggage drop available?",
      messages: [
        { sender: "guest", time: "45m ago", text: "Landing at Miami International now. Is early baggage drop available while housekeeping finishes?" }
      ]
    },
    {
      id: 3,
      guestName: "Dr. Jonathan Ross",
      guestAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
      channel: "direct",
      property: "SoHo Industrial Designer Loft",
      dates: "Sep 22 - Sep 28 (6 nights)",
      status: "In-house",
      unread: false,
      lastMessageTime: "2h ago",
      snippet: "Sound system works great, thanks for the quick response on the Wi-Fi pass.",
      messages: [
        { sender: "host", time: "2h 30m ago", text: "Hi Jonathan, the high-speed mesh network is 'SoHoLoft_5G' with password 'manhattan2026'." },
        { sender: "guest", time: "2h ago", text: "Sound system works great, thanks for the quick response on the Wi-Fi pass." }
      ]
    },
    {
      id: 4,
      guestName: "Amara Chen",
      guestAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
      channel: "whatsapp",
      property: "Nordic Timber Forest Loft",
      dates: "Tomorrow - Sep 28 (3 nights)",
      status: "Confirmed",
      unread: false,
      lastMessageTime: "Yesterday",
      snippet: "Are snow chains required on the driveway this week?",
      messages: [
        { sender: "guest", time: "Yesterday, 6:10 PM", text: "Hi! We're driving up tomorrow. Are snow chains required on the driveway this week?" },
        { sender: "host", time: "Yesterday, 6:30 PM", text: "Hello Amara! Roads were cleared this morning and the forecast is sunny. Standard AWD is fine, no chains required!" }
      ]
    }
  ],

  // Housekeeping Kanban Tasks
  housekeepingTasks: [
    {
      id: "tk-101",
      property: "Azure Oceanfront Penthouse",
      type: "turnover",
      col: "progress",
      cleaner: "Maria Santos",
      cleanerAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=60&q=80",
      timeDue: "Today, 2:30 PM",
      guestArriving: "Marcus Vance (3:00 PM)",
      progress: 65,
      items: [
        { text: "Strip and replace king linens & towels", done: true },
        { text: "Sanitize oceanview master bathrooms", done: true },
        { text: "Restock luxury bath amenities & coffee pods", done: true },
        { text: "Mop hardwood floors & balcony glass cleaning", done: false },
        { text: "Final inspection photo submission", done: false }
      ]
    },
    {
      id: "tk-102",
      property: "The Glasshouse Villa",
      type: "turnover",
      col: "pending",
      cleaner: "Carlos Rivera",
      cleanerAvatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=60&q=80",
      timeDue: "Tomorrow, 1:00 PM",
      guestArriving: "Check-in at 4:00 PM",
      progress: 0,
      items: [
        { text: "Turnover 4 bedrooms & hot tub chemical check", done: false },
        { text: "Restock firewood & fireplace cleaning", done: false },
        { text: "Inspect smart lock battery replacement", done: false }
      ]
    },
    {
      id: "tk-103",
      property: "Nordic Timber Forest Loft",
      type: "turnover",
      col: "inspection",
      cleaner: "Sarah Jenkins",
      cleanerAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=60&q=80",
      timeDue: "Today, 12:00 PM",
      guestArriving: "Tomorrow 4:00 PM",
      progress: 90,
      items: [
        { text: "Complete linen wash & fold", done: true },
        { text: "Restock welcome snack basket & local cider", done: true },
        { text: "Awaiting supervisor sign-off", done: false }
      ]
    },
    {
      id: "tk-104",
      property: "SoHo Industrial Designer Loft",
      type: "deepclean",
      col: "completed",
      cleaner: "Elite Clean Co.",
      cleanerAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=60&q=80",
      timeDue: "Completed Sep 22",
      guestArriving: "Guest Checked-in",
      progress: 100,
      items: [
        { text: "Exhaust hood degreasing", done: true },
        { text: "Upholstery steam sanitization", done: true },
        { text: "HVAC filter swap", done: true }
      ]
    },
    {
      id: "tk-105",
      property: "Highland Peak Ski Chalet",
      type: "repair",
      col: "progress",
      cleaner: "Alpine HVAC Pros",
      cleanerAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=60&q=80",
      timeDue: "Today, 5:00 PM",
      guestArriving: "Blocked for maintenance",
      progress: 50,
      items: [
        { text: "Replace main thermostat sensor", done: true },
        { text: "Pressure test heating loop", done: false }
      ]
    }
  ]
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  setupThemeToggle();
  setupNavigation();
  setupViewModeSwitcher();
  setupChannelFilters();
  setupInboxInteractions();
  setupSmartLockSimulation();
  setupModalsAndDrawers();
  setupMobileAppInteractions();
  setupKanbanActions();
});

/* ==========================================================================
   THEME TOGGLE SWITCHER (LIGHT / DARK)
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
      showToast(`Switched to ${newTheme.toUpperCase()} theme`);
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
   NAVIGATION & SCREEN SWITCHING
   ========================================================================== */
function setupNavigation() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetScreen = btn.getAttribute('data-screen');
      switchScreen(targetScreen);
    });
  });
}

function switchScreen(screenId) {
  state.activeScreen = screenId;

  // Update tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-screen') === screenId);
  });

  // Update screen visibility
  document.querySelectorAll('.screen-container').forEach(screen => {
    screen.classList.toggle('active', screen.id === `screen-${screenId}`);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==========================================================================
   VIEW MODE SWITCHER (DESKTOP VS MOBILE SIMULATOR)
   ========================================================================== */
function setupViewModeSwitcher() {
  const desktopBtn = document.getElementById('viewDesktopBtn');
  const mobileBtn = document.getElementById('viewMobileBtn');
  const desktopContainer = document.getElementById('desktopWorkspaceContainer');
  const mobileContainer = document.getElementById('mobileSimulatorContainer');

  desktopBtn.addEventListener('click', () => {
    state.viewMode = 'desktop';
    desktopBtn.classList.add('active');
    mobileBtn.classList.remove('active');
    desktopContainer.style.display = 'block';
    mobileContainer.style.display = 'none';
    showToast('Switched to Desktop PMS Workspace');
  });

  mobileBtn.addEventListener('click', () => {
    state.viewMode = 'mobile';
    mobileBtn.classList.add('active');
    desktopBtn.classList.remove('active');
    desktopContainer.style.display = 'none';
    mobileContainer.style.display = 'flex';
    showToast('Switched to On-the-Go Mobile App Simulator');
  });
}

/* ==========================================================================
   UNIFIED INBOX INTERACTIONS
   ========================================================================== */
function setupChannelFilters() {
  const filterChips = document.querySelectorAll('.channel-filter-chips .filter-chip');
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const channel = chip.getAttribute('data-channel');
      filterThreadsByChannel(channel);
    });
  });
}

function filterThreadsByChannel(channel) {
  state.selectedChannelFilter = channel;
  const items = document.querySelectorAll('.thread-item');
  items.forEach(item => {
    const threadChannel = item.getAttribute('data-channel');
    if (channel === 'all' || threadChannel === channel) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function setupInboxInteractions() {
  const threadItems = document.querySelectorAll('.thread-item');
  threadItems.forEach(item => {
    item.addEventListener('click', () => {
      threadItems.forEach(t => t.classList.remove('active'));
      item.classList.add('active');
      item.classList.remove('unread');
      const threadId = parseInt(item.getAttribute('data-thread-id'));
      loadThread(threadId);
    });
  });

  // Message Sender
  const sendBtn = document.getElementById('sendMessageBtn');
  const input = document.getElementById('chatInputBox');

  if (sendBtn && input) {
    const handleSend = () => {
      const text = input.value.trim();
      if (!text) return;

      appendChatMessage('host', 'Just now', text);
      input.value = '';

      showToast('Message sent via Airbnb channel');

      // Simulated auto-reply after 1.5 seconds for realism
      setTimeout(() => {
        appendChatMessage('guest', 'Just now', 'Thank you so much! We really appreciate the fast turnaround.');
      }, 1500);
    };

    sendBtn.addEventListener('click', handleSend);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSend();
    });
  }

  // AI Quick Reply Chips
  const aiChips = document.querySelectorAll('.ai-chip-prompt');
  aiChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const template = chip.getAttribute('data-template');
      const input = document.getElementById('chatInputBox');
      if (input) {
        input.value = template;
        input.focus();
        showToast('AI suggestion applied to composer');
      }
    });
  });
}

function loadThread(threadId) {
  state.activeThreadId = threadId;
  const conv = state.conversations.find(c => c.id === threadId);
  if (!conv) return;

  // Update Chat Header
  const nameEl = document.getElementById('chatGuestName');
  const propEl = document.getElementById('chatGuestProperty');
  const avatarEl = document.getElementById('chatGuestAvatar');
  const channelBadgeEl = document.getElementById('chatChannelBadge');

  if (nameEl) nameEl.textContent = conv.guestName;
  if (propEl) propEl.textContent = conv.property;
  if (avatarEl) avatarEl.src = conv.guestAvatar;
  if (channelBadgeEl) {
    channelBadgeEl.className = `channel-pill channel-${conv.channel}`;
    channelBadgeEl.textContent = conv.channel.toUpperCase();
  }

  // Update Messages Scroll Area
  const messagesScroll = document.getElementById('chatMessagesScroll');
  if (messagesScroll) {
    messagesScroll.innerHTML = '';
    conv.messages.forEach(msg => {
      appendChatMessage(msg.sender, msg.time, msg.text, false);
    });
    messagesScroll.scrollTop = messagesScroll.scrollHeight;
  }

  // Update Stay Sidebar
  const sideName = document.getElementById('sideGuestName');
  const sideAvatar = document.getElementById('sideGuestAvatar');
  const sideDates = document.getElementById('sideStayDates');
  const sideProp = document.getElementById('sideStayProperty');

  if (sideName) sideName.textContent = conv.guestName;
  if (sideAvatar) sideAvatar.src = conv.guestAvatar;
  if (sideDates) sideDates.textContent = conv.dates;
  if (sideProp) sideProp.textContent = conv.property;
}

function appendChatMessage(sender, time, text, scroll = true) {
  const messagesScroll = document.getElementById('chatMessagesScroll');
  if (!messagesScroll) return;

  const bubble = document.createElement('div');
  bubble.className = `message-bubble ${sender === 'host' ? 'msg-outgoing' : 'msg-incoming'}`;
  bubble.innerHTML = `
    <div class="msg-content">${escapeHTML(text)}</div>
    <div class="msg-meta">${time} • ${sender === 'host' ? 'Delivered' : 'Received'}</div>
  `;

  messagesScroll.appendChild(bubble);
  if (scroll) {
    messagesScroll.scrollTo({ top: messagesScroll.scrollHeight, behavior: 'smooth' });
  }
}

/* ==========================================================================
   SMART LOCK & IOT AUTOMATIONS
   ========================================================================== */
function setupSmartLockSimulation() {
  // Lock Toggle buttons
  const lockButtons = document.querySelectorAll('.lock-toggle-btn');
  lockButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const isLocked = btn.classList.contains('locked');
      if (isLocked) {
        btn.classList.remove('locked');
        btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0"></path></svg> Unlocked`;
        showToast('Smart Lock unlocked remotely');
      } else {
        btn.classList.add('locked');
        btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Locked`;
        showToast('Smart Lock securely engaged');
      }
    });
  });

  // Automation Rule Switchers
  const switches = document.querySelectorAll('.rule-toggle-switch');
  switches.forEach(sw => {
    sw.addEventListener('click', () => {
      sw.classList.toggle('active');
      const ruleName = sw.getAttribute('data-rule') || 'Workflow automation';
      const isActive = sw.classList.contains('active');
      showToast(`${ruleName} is now ${isActive ? 'ENABLED' : 'PAUSED'}`);
    });
  });

  // Generate PIN Button
  const genPinBtn = document.getElementById('generatePinBtn');
  if (genPinBtn) {
    genPinBtn.addEventListener('click', () => {
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      const display = document.getElementById('doorPinDisplay');
      if (display) display.textContent = `#${randomCode}`;
      showToast(`New smart lock pass generated: #${randomCode}`);
    });
  }
}

/* ==========================================================================
   KANBAN & HOUSEKEEPING WORKFLOWS
   ========================================================================== */
function setupKanbanActions() {
  const taskCards = document.querySelectorAll('.task-card');
  taskCards.forEach(card => {
    card.addEventListener('click', () => {
      const taskId = card.getAttribute('data-task-id');
      openCleaningModal(taskId);
    });
  });
}

function openCleaningModal(taskId) {
  const task = state.housekeepingTasks.find(t => t.id === taskId) || state.housekeepingTasks[0];
  const modal = document.getElementById('cleaningModal');
  if (!modal) return;

  document.getElementById('cleaningModalPropTitle').textContent = task.property;
  document.getElementById('cleaningModalCleaner').textContent = `${task.cleaner} (${task.timeDue})`;

  const listEl = document.getElementById('cleaningChecklistItems');
  listEl.innerHTML = '';

  task.items.forEach((item, idx) => {
    const row = document.createElement('label');
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '10px';
    row.style.padding = '8px 0';
    row.style.cursor = 'pointer';
    row.innerHTML = `
      <input type="checkbox" ${item.done ? 'checked' : ''} data-idx="${idx}" style="accent-color: var(--primary); transform: scale(1.2);">
      <span style="font-size: 13px; color: ${item.done ? 'var(--text-muted)' : 'var(--text-main)'}; text-decoration: ${item.done ? 'line-through' : 'none'};">
        ${escapeHTML(item.text)}
      </span>
    `;

    const chk = row.querySelector('input');
    chk.addEventListener('change', () => {
      item.done = chk.checked;
      const span = row.querySelector('span');
      span.style.color = chk.checked ? 'var(--text-muted)' : 'var(--text-main)';
      span.style.textDecoration = chk.checked ? 'line-through' : 'none';
      updateCleaningProgress(task);
    });

    listEl.appendChild(row);
  });

  updateCleaningProgress(task);
  modal.classList.add('active');
}

function updateCleaningProgress(task) {
  const total = task.items.length;
  const completed = task.items.filter(i => i.done).length;
  const pct = Math.round((completed / total) * 100);

  const pctLabel = document.getElementById('cleaningProgressLabel');
  const bar = document.getElementById('cleaningProgressBar');

  if (pctLabel) pctLabel.textContent = `${pct}% Complete (${completed}/${total} tasks)`;
  if (bar) bar.style.width = `${pct}%`;
}

/* ==========================================================================
   MODALS & DRAWERS
   ========================================================================== */
function setupModalsAndDrawers() {
  // Booking Drawer triggers
  const resBars = document.querySelectorAll('.res-bar');
  resBars.forEach(bar => {
    bar.addEventListener('click', (e) => {
      e.stopPropagation();
      const guest = bar.getAttribute('data-guest') || 'Sophie Laurent';
      const prop = bar.getAttribute('data-prop') || 'Emerald Bay Waterfront Villa';
      const dates = bar.getAttribute('data-dates') || 'Sep 23 - Sep 30';
      const price = bar.getAttribute('data-price') || '$5,880';
      const channel = bar.getAttribute('data-channel') || 'airbnb';

      openBookingDrawer({ guest, prop, dates, price, channel });
    });
  });

  // Close Drawer
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const bookingDrawer = document.getElementById('bookingDrawer');
  if (closeDrawerBtn && bookingDrawer) {
    closeDrawerBtn.addEventListener('click', () => {
      bookingDrawer.classList.remove('active');
    });

    bookingDrawer.addEventListener('click', (e) => {
      if (e.target === bookingDrawer) {
        bookingDrawer.classList.remove('active');
      }
    });
  }

  // Modals Close handlers
  const closeButtons = document.querySelectorAll('.close-modal-btn');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(m => {
    m.addEventListener('click', (e) => {
      if (e.target === m) m.classList.remove('active');
    });
  });

  // New Booking Button
  const newBookingBtn = document.getElementById('globalNewBookingBtn');
  const newBookingModal = document.getElementById('newBookingModal');
  if (newBookingBtn && newBookingModal) {
    newBookingBtn.addEventListener('click', () => {
      newBookingModal.classList.add('active');
    });
  }

  // Add Property Button
  const addPropBtn = document.getElementById('addPropertyBtn');
  const addPropModal = document.getElementById('addPropertyModal');
  if (addPropBtn && addPropModal) {
    addPropBtn.addEventListener('click', () => {
      addPropModal.classList.add('active');
    });
  }
}

function openBookingDrawer(data) {
  const drawer = document.getElementById('bookingDrawer');
  if (!drawer) return;

  document.getElementById('drawerGuestName').textContent = data.guest;
  document.getElementById('drawerProperty').textContent = data.prop;
  document.getElementById('drawerDates').textContent = data.dates;
  document.getElementById('drawerTotalPayout').textContent = data.price;

  const channelTag = document.getElementById('drawerChannelTag');
  if (channelTag) {
    channelTag.className = `channel-pill channel-${data.channel}`;
    channelTag.textContent = data.channel.toUpperCase();
  }

  drawer.classList.add('active');
}

/* ==========================================================================
   MOBILE APP EMULATOR LOGIC
   ========================================================================== */
function setupMobileAppInteractions() {
  const mobileNavButtons = document.querySelectorAll('.mob-nav-btn');
  mobileNavButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      mobileNavButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetTab = btn.getAttribute('data-mob-tab');
      document.querySelectorAll('.mobile-tab-view').forEach(view => {
        view.classList.toggle('active', view.id === targetTab);
      });
    });
  });

  // Mobile checkmark simulator
  const mobileCheckboxes = document.querySelectorAll('.mob-checklist-item input');
  mobileCheckboxes.forEach(chk => {
    chk.addEventListener('change', () => {
      const label = chk.closest('label');
      if (label) {
        label.style.opacity = chk.checked ? '0.5' : '1';
        label.style.textDecoration = chk.checked ? 'line-through' : 'none';
      }
      showToast('Mobile housekeeping task updated');
    });
  });
}

/* ==========================================================================
   TOAST SYSTEM & HELPERS
   ========================================================================== */
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${escapeHTML(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
