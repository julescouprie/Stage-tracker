// =========================================================
//  StageTrack Pro — Tracker Logic (Light Rebuild)
// =========================================================

class ApplicationTracker {
  constructor() {
    this.storageKey = 'stage_track_apps_v2';
    this.applications = this.load();
  }

  load() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) return JSON.parse(saved);
    } catch (e) { console.error(e); }
    this.save(INITIAL_APPLICATIONS);
    return [...INITIAL_APPLICATIONS];
  }

  save(data) {
    if (data) this.applications = data;
    localStorage.setItem(this.storageKey, JSON.stringify(this.applications));
  }

  saveAndRender() {
    this.save();
    this.render();
  }

  getFiltered() {
    const search = (document.getElementById('search-input')?.value || '').toLowerCase().trim();
    const status = document.getElementById('filter-status')?.value || 'all';
    const domain = document.getElementById('filter-domain')?.value || 'all';
    return this.applications.filter(app => {
      const matchSearch = !search ||
        (app.company || '').toLowerCase().includes(search) ||
        (app.position || '').toLowerCase().includes(search) ||
        (app.location || '').toLowerCase().includes(search) ||
        (app.notes || '').toLowerCase().includes(search);
      const matchStatus = status === 'all' || app.status === status;
      const matchDomain = domain === 'all' || app.domain === domain;
      return matchSearch && matchStatus && matchDomain;
    });
  }

  add(data) {
    this.applications.unshift({ id: 'app-' + Date.now(), ...data });
    this.saveAndRender();
    showToast('Candidature ajoutée !', 'success');
  }

  update(id, data) {
    const i = this.applications.findIndex(a => a.id === id);
    if (i !== -1) {
      this.applications[i] = { ...this.applications[i], ...data };
      this.saveAndRender();
      showToast('Candidature mise à jour !', 'success');
    }
  }

  remove(id) {
    if (!confirm('Supprimer cette candidature ?')) return;
    this.applications = this.applications.filter(a => a.id !== id);
    this.saveAndRender();
    showToast('Candidature supprimée.', 'info');
  }

  setStatus(id, newStatus) {
    const app = this.applications.find(a => a.id === id);
    if (app) {
      app.status = newStatus;
      this.saveAndRender();
    }
  }

  // --- KPIs ---
  updateKPIs() {
    const apps = this.applications;
    const total    = apps.length;
    const pending  = apps.filter(a => a.status === 'En attente').length;
    const interview= apps.filter(a => a.status === 'Entretien').length;
    const accepted = apps.filter(a => a.status === 'Accepté').length;
    const rejected = apps.filter(a => a.status === 'Refusé').length;
    const responded = interview + accepted + rejected;
    const rate = total > 0 ? Math.round((responded / total) * 100) : 0;

    setText('kpi-total',    total);
    setText('kpi-pending',  pending);
    setText('kpi-interview',interview);
    setText('kpi-accepted', accepted);
    setText('kpi-rate',     rate + '%');
  }

  // --- Table ---
  renderTable() {
    const tbody = document.getElementById('apps-tbody');
    if (!tbody) return;
    const filtered = this.getFiltered();
    tbody.innerHTML = '';

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="8">
            <div class="empty-state">
              <i class="fa-regular fa-folder-open"></i>
              <p>Aucune candidature trouvée.</p>
            </div>
          </td>
        </tr>`;
      return;
    }

    filtered.forEach(app => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div class="company-name">${html(app.company)}</div>
          <div style="display:flex;gap:.25rem;flex-wrap:wrap;margin-top:3px;">
            ${app.abroad === 'Oui' ? '<span class="badge badge-abroad"><i class="fa-solid fa-globe" style="font-size:.6rem;"></i> Étranger</span>' : ''}
            ${app.cesure ? '<span class="badge badge-cesure" title="Césure 6 mois possible"><i class="fa-solid fa-graduation-cap"></i> Césure</span>' : ''}
          </div>
        </td>
        <td><span style="font-size:.84rem;">${html(app.position)}</span></td>
        <td>${domainBadge(app.domain)}</td>
        <td style="color:var(--text-secondary);font-size:.83rem;">${html(app.location || '—')}</td>
        <td style="font-family:var(--font-mono);font-size:.82rem;color:var(--text-secondary);">${app.duration || (app.cesure ? 6 : 4)} mois</td>
        <td>
          <select class="status-select-inline" onchange="tracker.setStatus('${app.id}', this.value)">
            <option value="En attente" ${app.status === 'En attente' ? 'selected' : ''}>⏳ En attente</option>
            <option value="Entretien"  ${app.status === 'Entretien'  ? 'selected' : ''}>💬 Entretien</option>
            <option value="À relancer" ${app.status === 'À relancer' ? 'selected' : ''}>🔁 À relancer</option>
            <option value="Accepté"    ${app.status === 'Accepté'    ? 'selected' : ''}>✅ Accepté</option>
            <option value="Refusé"     ${app.status === 'Refusé'     ? 'selected' : ''}>❌ Refusé</option>
          </select>
        </td>
        <td class="note-cell" title="${html(app.notes || '')}">${app.notes ? html(app.notes) : '<span style="color:var(--text-muted)">—</span>'}</td>
        <td>
          <div class="actions-cell">
            <button class="btn-icon" title="Éditer" onclick="openEditModal('${app.id}')">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            ${app.email ? `<a href="mailto:${html(app.email)}" class="btn-icon" title="Envoyer un email"><i class="fa-solid fa-envelope"></i></a>` : ''}
            <button class="btn-icon danger" title="Supprimer" onclick="tracker.remove('${app.id}')">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  // --- Charts ---
  renderCharts() {
    renderStatusChart(this.applications);
    renderDomainChart(this.applications);
  }

  render() {
    this.updateKPIs();
    this.renderTable();
    this.renderCharts();
  }
}

// =========================================================
//  Charts
// =========================================================
let statusChart = null;
let domainChart = null;

function renderStatusChart(apps) {
  const ctx = document.getElementById('chart-status')?.getContext('2d');
  if (!ctx) return;
  const counts = { 'En attente': 0, 'Entretien': 0, 'À relancer': 0, 'Accepté': 0, 'Refusé': 0 };
  apps.forEach(a => { if (counts[a.status] !== undefined) counts[a.status]++; });

  if (statusChart) statusChart.destroy();
  statusChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(counts),
      datasets: [{
        data: Object.values(counts),
        backgroundColor: ['#fde68a', '#bfdbfe', '#e9d5ff', '#bbf7d0', '#fecaca'],
        borderColor:     ['#f59e0b', '#3b82f6', '#8b5cf6', '#22c55e', '#ef4444'],
        borderWidth: 1.5,
        borderRadius: 5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { family: 'Inter', size: 11 }, color: '#9a9690' }
        },
        y: {
          grid: { color: '#f0eeeb' },
          ticks: { stepSize: 1, font: { family: 'Inter', size: 11 }, color: '#9a9690' },
          beginAtZero: true
        }
      }
    }
  });
}

function renderDomainChart(apps) {
  const ctx = document.getElementById('chart-domain')?.getContext('2d');
  if (!ctx) return;
  const counts = {};
  apps.forEach(a => { const d = a.domain || 'Autre'; counts[d] = (counts[d] || 0) + 1; });

  const palette = ['#f0abfc','#93c5fd','#fed7aa','#bbf7d0','#fecaca'];
  const borders = ['#d946ef','#3b82f6','#f97316','#22c55e','#ef4444'];

  if (domainChart) domainChart.destroy();
  domainChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(counts),
      datasets: [{
        data: Object.values(counts),
        backgroundColor: palette,
        borderColor: borders,
        borderWidth: 1.5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: { font: { family: 'Inter', size: 11 }, color: '#5a5a5a', boxWidth: 12, padding: 12 }
        }
      }
    }
  });
}

// =========================================================
//  Helpers
// =========================================================
function html(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function truncate(str, n) {
  if (!str) return '';
  return str.length > n ? str.slice(0, n) + '…' : str;
}

function domainBadge(domain) {
  if (!domain) return '<span class="badge badge-other">Autre</span>';
  if (domain === 'Sport Auto') return `<span class="badge badge-sport">${domain}</span>`;
  if (domain === 'Aéronautique') return `<span class="badge badge-aero">${domain}</span>`;
  if (domain === 'Automobile') return `<span class="badge badge-auto">${domain}</span>`;
  return `<span class="badge badge-other">${html(domain)}</span>`;
}

function showToast(msg, type = 'info') {
  const c = document.getElementById('toast-container');
  if (!c) return;
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-info';
  t.innerHTML = `<i class="fa-solid ${icon} toast-icon"></i><span>${html(msg)}</span>`;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}
