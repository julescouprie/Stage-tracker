// =========================================================
//  App.js — Coordinateur global (StageTrack Pro Light)
// =========================================================

let tracker;
let crm;
let excelSync;

document.addEventListener('DOMContentLoaded', () => {
  // Init modules
  tracker         = new ApplicationTracker();
  crm             = new ContactCRM();
  excelSync       = new ExcelSyncManager(tracker);
  learningTracker = new LearningTracker();
  questManager    = new QuestManager();

  // Initial render
  tracker.render();
  crm.render();
  learningTracker.render();
  questManager.renderRoadmap();
  renderInterviewQA();
  generateEmail();
  calculateGrat();

  // ---------- Tab navigation ----------
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(target)?.classList.add('active');
      if (target === 'tracker-tab') tracker.renderCharts();
    });
  });

  // ---------- Tracker filters ----------
  document.getElementById('search-input')?.addEventListener('input',  () => tracker.renderTable());
  document.getElementById('filter-status')?.addEventListener('change', () => tracker.renderTable());
  document.getElementById('filter-domain')?.addEventListener('change', () => tracker.renderTable());

  // ---------- CRM filters ----------
  document.getElementById('crm-search')?.addEventListener('input',           () => crm.render());
  document.getElementById('crm-sector')?.addEventListener('change',          () => crm.render());
  document.getElementById('crm-source-filter')?.addEventListener('change',   () => crm.render());
  document.getElementById('crm-fav-filter')?.addEventListener('change',      () => crm.render());
  document.getElementById('crm-type-filter')?.addEventListener('change',     () => crm.render());


  // ---------- Excel import ----------
  document.getElementById('excel-import-input')?.addEventListener('change', (e) => {
    if (e.target.files?.[0]) excelSync.importFromFile(e.target.files[0]);
  });

  // ---------- Modals ----------
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeAllModals();
    });
  });
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });
});

// =========================================================
//  Modal Helpers
// =========================================================
function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
}

function openModal(id) {
  document.getElementById(id)?.classList.add('active');
}

// =========================================================
//  Application Modal — Add/Edit
// =========================================================
function openAddModal() {
  // Reset form
  document.getElementById('app-form').reset();
  document.getElementById('app-form-id').value = '';
  document.getElementById('app-cesure').checked = false;
  document.getElementById('modal-app-heading').textContent = 'Nouvelle Candidature';
  // Default date = today
  document.getElementById('app-date').value = new Date().toISOString().split('T')[0];
  openModal('modal-app');
}

function openEditModal(id) {
  const app = tracker.applications.find(a => a.id === id);
  if (!app) return;
  document.getElementById('modal-app-heading').textContent = 'Modifier la Candidature';
  document.getElementById('app-form-id').value  = app.id;
  document.getElementById('app-company').value  = app.company  || '';
  document.getElementById('app-position').value = app.position || '';
  document.getElementById('app-domain').value   = app.domain   || 'Sport Auto';
  document.getElementById('app-abroad').value   = app.abroad   || 'Non';
  document.getElementById('app-duration').value = app.duration || 4;
  document.getElementById('app-location').value = app.location || '';
  document.getElementById('app-email').value    = app.email    || '';
  document.getElementById('app-phone').value    = app.phone    || '';
  document.getElementById('app-sent').value     = app.sent     || 'Oui';
  document.getElementById('app-date').value     = app.date     || '';
  document.getElementById('app-status').value   = app.status   || 'En attente';
  document.getElementById('app-cesure').checked = !!app.cesure;
  document.getElementById('app-notes').value    = app.notes    || '';
  openModal('modal-app');
}

function saveApp(e) {
  e.preventDefault();
  const id = document.getElementById('app-form-id').value;
  const data = {
    company:  document.getElementById('app-company').value.trim(),
    position: document.getElementById('app-position').value.trim(),
    domain:   document.getElementById('app-domain').value,
    abroad:   document.getElementById('app-abroad').value,
    duration: parseInt(document.getElementById('app-duration').value) || 4,
    location: document.getElementById('app-location').value.trim(),
    email:    document.getElementById('app-email').value.trim(),
    phone:    document.getElementById('app-phone').value.trim(),
    sent:     document.getElementById('app-sent').value,
    date:     document.getElementById('app-date').value,
    status:   document.getElementById('app-status').value,
    cesure:   document.getElementById('app-cesure').checked,
    notes:    document.getElementById('app-notes').value.trim()
  };
  if (!data.company) { showToast("Le nom de l'entreprise est requis.", 'info'); return; }
  if (id) tracker.update(id, data);
  else    tracker.add(data);
  closeAllModals();
}

// =========================================================
//  CRM Modal — Add Contact
// =========================================================
function openAddCRMModal() {
  document.getElementById('crm-form').reset();
  openModal('modal-crm');
}

function saveCRM(e) {
  e.preventDefault();
  const data = {
    name:        document.getElementById('crm-name').value.trim(),
    sector:      document.getElementById('crm-sector-form').value,
    location:    document.getElementById('crm-location').value.trim(),
    contactName: document.getElementById('crm-contact').value.trim(),
    role:        document.getElementById('crm-role').value.trim(),
    email:       document.getElementById('crm-email').value.trim(),
    notes:       document.getElementById('crm-notes').value.trim()
  };
  if (!data.name) { showToast("Le nom de l'entreprise est requis.", 'info'); return; }
  crm.add(data);
  closeAllModals();
}

// =========================================================
//  Quick-fill helpers (from CRM → other tabs)
// =========================================================
function prefillNewApp(company, domain, location, email) {
  openAddModal();
  document.getElementById('app-company').value  = company;
  document.getElementById('app-domain').value   = domain;
  document.getElementById('app-location').value = location;
  document.getElementById('app-email').value    = email;
}
