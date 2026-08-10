// =========================================================
//  CRM — Contacts & Écuries (StageTrack Pro - Design Épuré)
// =========================================================

class ContactCRM {
  constructor() {
    this.storageKey = 'stage_track_crm_v4';
    this.contacts = this.load();
    this.currentDetailId = null;
  }

  load() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) return JSON.parse(saved);
    } catch (e) { console.error(e); }
    const fresh = JSON.parse(JSON.stringify(TARGET_COMPANIES)).map(c => ({
      ...c,
      status: c.status || 'À contacter',
      favorite: c.favorite || false
    }));
    localStorage.setItem(this.storageKey, JSON.stringify(fresh));
    return fresh;
  }

  save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.contacts));
  }

  add(data) {
    this.contacts.unshift({
      id: 'crm-' + Date.now(),
      favorite: false,
      status: 'À contacter',
      type: data.type || 'person',
      ...data
    });
    this.save();
    this.render();
    showToast('Contact ajouté à l\'annuaire !', 'success');
  }

  remove(id, e) {
    if (e) e.stopPropagation();
    if (!confirm('Supprimer ce contact ?')) return;
    this.contacts = this.contacts.filter(c => c.id !== id);
    this.save();
    this.render();
    closeAllModals();
    showToast('Contact supprimé.', 'info');
  }

  toggleFavorite(id, e) {
    if (e) e.stopPropagation();
    const c = this.contacts.find(c => c.id === id);
    if (!c) return;
    c.favorite = !c.favorite;
    this.save();
    this.render();
    showToast(c.favorite ? '⭐ Favori ajouté' : 'Favori retiré', c.favorite ? 'success' : 'info');
  }

  setStatus(id, newStatus, e) {
    if (e) e.stopPropagation();
    const c = this.contacts.find(c => c.id === id);
    if (!c) return;
    c.status = newStatus;
    this.save();
    this.render();
    if (this.currentDetailId === id) this.renderDetailModal(c);
  }

  getFiltered() {
    const search  = (document.getElementById('crm-search')?.value || '').toLowerCase().trim();
    const sector  = document.getElementById('crm-sector')?.value   || 'all';
    const favOnly = document.getElementById('crm-fav-filter')?.checked;
    const source  = document.getElementById('crm-source-filter')?.value || 'all';
    const typeF   = document.getElementById('crm-type-filter')?.value   || 'all';

    return this.contacts.filter(c => {
      const matchSearch = !search ||
        (c.name        || '').toLowerCase().includes(search) ||
        (c.contactName || '').toLowerCase().includes(search) ||
        (c.role        || '').toLowerCase().includes(search) ||
        (c.company     || '').toLowerCase().includes(search) ||
        (c.location    || '').toLowerCase().includes(search);
      const matchSector = sector === 'all' || (c.sector || '').includes(sector);
      const matchFav    = !favOnly || c.favorite;
      const matchSource = source === 'all' || (c.source || '') === source;
      const matchType   = typeF  === 'all' || (c.type   || '') === typeF;
      return matchSearch && matchSector && matchFav && matchSource && matchType;
    });
  }

  render() {
    const grid = document.getElementById('crm-grid');
    if (!grid) return;

    const filtered = this.getFiltered();
    const total    = this.contacts.length;
    const favCount = this.contacts.filter(c => c.favorite).length;

    setText('crm-count',     `${filtered.length} / ${total} contacts`);
    setText('crm-fav-count', `⭐ ${favCount} favori${favCount > 1 ? 's' : ''}`);

    grid.innerHTML = '';

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state" style="grid-column:1/-1;">
          <i class="fa-regular fa-address-book"></i>
          <p>Aucun contact trouvé.</p>
        </div>`;
      return;
    }

    const sorted = [...filtered].sort((a, b) => {
      if (b.favorite !== a.favorite) return (b.favorite ? 1 : 0) - (a.favorite ? 1 : 0);
      return (a.contactName || a.name || '').localeCompare(b.contactName || b.name || '');
    });

    sorted.forEach(c => this.renderCard(c, grid));
  }

  // ── Ultra-Sober Front Card (Clickable to open full detail modal)
  renderCard(c, grid) {
    const isPerson   = c.type === 'person';
    const isSport    = (c.sector || '').includes('Sport Auto');
    const isAero     = (c.sector || '').includes('Aéronautique');
    const isAlumni   = c.source === 'Alumni ESTACA';

    const sectorClass = isSport ? 'badge-sport' : isAero ? 'badge-aero' : 'badge-other';
    const initials    = c.initials || (c.contactName || c.name || '??').slice(0, 2).toUpperCase();
    const avatarBg    = isPerson ? avatarColor(c.name) : '#f1f3f5';
    const statusCfg   = CRM_STATUSES[c.status] || CRM_STATUSES['À contacter'];

    let subtitle = '';
    if (c.role && c.company && c.company !== c.name) {
      subtitle = `${c.role} · ${c.company}`;
    } else if (c.role) {
      subtitle = c.role;
    } else if (c.company && c.company !== c.name) {
      subtitle = c.company;
    }

    const card = document.createElement('div');
    card.className = `contact-card-minimal${c.favorite ? ' is-favorite' : ''}`;
    card.onclick = () => this.openDetailModal(c.id);

    card.innerHTML = `
      <div class="crm-min-header">
        <div class="contact-avatar" style="background:${avatarBg};">
          ${isPerson ? html(initials) : '<i class="fa-solid fa-building" style="font-size:.78rem;color:var(--text-muted);"></i>'}
        </div>
        <div class="crm-min-text">
          <div class="crm-min-name">${html(c.contactName || c.name)}</div>
          ${subtitle ? `<div class="crm-min-sub">${html(subtitle)}</div>` : ''}
        </div>
        <div class="crm-min-actions" onclick="event.stopPropagation()">
          <button class="btn-fav${c.favorite ? ' active' : ''}" onclick="crm.toggleFavorite('${c.id}', event)" title="Favori">
            <i class="fa-${c.favorite ? 'solid' : 'regular'} fa-star"></i>
          </button>
          <button class="btn-icon danger btn-delete-subtle" onclick="crm.remove('${c.id}', event)" title="Supprimer">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>

      <div class="crm-min-meta">
        <span class="crm-status-pill" style="background:${statusCfg.bg};color:${statusCfg.color};border-color:${statusCfg.border};">
          ${statusCfg.icon} ${c.status}
        </span>
        <span class="badge ${sectorClass}">${html(c.sector)}</span>
        ${isAlumni ? '<span class="badge badge-alumni"><i class="fa-solid fa-graduation-cap"></i> ESTACA</span>' : ''}
        ${c.location ? `<span class="crm-min-loc"><i class="fa-solid fa-location-dot"></i> ${html(c.location)}</span>` : ''}
      </div>
    `;

    grid.appendChild(card);
  }

  // ── Open Contact Detail Modal
  openDetailModal(id) {
    const c = this.contacts.find(x => x.id === id);
    if (!c) return;
    this.currentDetailId = id;
    this.renderDetailModal(c);
    openModal('modal-contact-detail');
  }

  renderDetailModal(c, editMode = false) {
    const isPerson  = c.type === 'person';
    const isSport   = (c.sector || '').includes('Sport Auto');
    const isAero    = (c.sector || '').includes('Aéronautique');
    const domainStr = isSport ? 'Sport Auto' : isAero ? 'Aéronautique' : 'Autre';
    const statusCfg = CRM_STATUSES[c.status] || CRM_STATUSES['À contacter'];
    const initials  = c.initials || (c.contactName || c.name || '??').slice(0, 2).toUpperCase();
    const avatarBg  = isPerson ? avatarColor(c.name) : '#f1f3f5';

    const container = document.getElementById('contact-detail-body');
    if (!container) return;

    // ── MODE EDITION ─────────────────────────────────────────
    if (editMode) {
      container.innerHTML = `
        <div class="detail-edit-header">
          <div class="contact-avatar" style="width:42px;height:42px;font-size:.85rem;background:${avatarBg};flex-shrink:0;">
            ${isPerson ? html(initials) : '<i class="fa-solid fa-building" style="font-size:1rem;color:var(--text-muted);"></i>'}
          </div>
          <div style="flex:1;">
            <div style="font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--text-muted);">Mode édition</div>
            <div style="font-size:.88rem;font-weight:700;color:var(--text-primary);">${html(c.contactName || c.name)}</div>
          </div>
          <button class="btn btn-ghost" style="font-size:.78rem;padding:.35rem .7rem;" onclick="crm.renderDetailModal(crm.contacts.find(x=>x.id==='${c.id}'))">
            <i class="fa-solid fa-xmark"></i> Annuler
          </button>
        </div>

        <div class="detail-edit-form">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Nom complet / Contact</label>
              <input id="edit-contactName" class="input" value="${html(c.contactName || c.name || '')}" placeholder="Prénom Nom">
            </div>
            <div class="form-group">
              <label class="form-label">Entreprise</label>
              <input id="edit-company" class="input" value="${html(c.company || '')}" placeholder="ex : Renault Sport">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Poste / Rôle</label>
              <input id="edit-role" class="input" value="${html(c.role || '')}" placeholder="ex : Ingénieur CFD">
            </div>
            <div class="form-group">
              <label class="form-label">Lieu / Ville</label>
              <input id="edit-location" class="input" value="${html(c.location || '')}" placeholder="ex : Paris, France">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Email</label>
              <input id="edit-email" class="input" type="email" value="${html(c.email || '')}" placeholder="prenom.nom@entreprise.com">
            </div>
            <div class="form-group">
              <label class="form-label">Téléphone</label>
              <input id="edit-phone" class="input" value="${html(c.phone || '')}" placeholder="+33 6 00 00 00 00">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">LinkedIn (URL complète)</label>
            <input id="edit-linkedin" class="input" value="${html(c.linkedin || '')}" placeholder="https://www.linkedin.com/in/...">
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Secteur</label>
              <select id="edit-sector" class="input">
                <option value="Sport Auto" ${(c.sector||'').includes('Sport Auto')?'selected':''}>Sport Auto</option>
                <option value="Aéronautique" ${(c.sector||'').includes('Aéronautique')?'selected':''}>Aéronautique</option>
                <option value="Automobile" ${(c.sector||'').includes('Automobile')?'selected':''}>Automobile</option>
                <option value="Spatial" ${(c.sector||'').includes('Spatial')?'selected':''}>Spatial</option>
                <option value="Industrie" ${(c.sector||'').includes('Industrie')?'selected':''}>Industrie</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Source</label>
              <select id="edit-source" class="input">
                <option value="Direct" ${(c.source||'')==='Direct'?'selected':''}>Direct</option>
                <option value="LinkedIn" ${(c.source||'')==='LinkedIn'?'selected':''}>LinkedIn</option>
                <option value="Alumni ESTACA" ${(c.source||'')==='Alumni ESTACA'?'selected':''}>Alumni ESTACA</option>
                <option value="Salon" ${(c.source||'')==='Salon'?'selected':''}>Salon</option>
                <option value="Site carrières" ${(c.source||'')==='Site carrières'?'selected':''}>Site carrières</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Type de contact</label>
            <select id="edit-type" class="input">
              <option value="person" ${c.type==='person'?'selected':''}>👤 Personne (contact individuel)</option>
              <option value="company" ${c.type==='company'?'selected':''}>🏢 Service RH / Entreprise</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Notes & Historique</label>
            <textarea id="edit-notes" class="textarea" rows="3" placeholder="Notes, échanges...">${html(c.notes || '')}</textarea>
          </div>

          <div style="display:flex;gap:.5rem;margin-top:.25rem;">
            <button class="btn btn-dark" style="flex:1;" onclick="crm.update('${c.id}')">
              <i class="fa-solid fa-floppy-disk"></i> Enregistrer
            </button>
            <button class="btn btn-ghost" style="flex:1;" onclick="crm.renderDetailModal(crm.contacts.find(x=>x.id==='${c.id}'))">
              Annuler
            </button>
          </div>
        </div>
      `;
      return;
    }

    // ── MODE LECTURE ─────────────────────────────────────────
    container.innerHTML = `
      <div class="detail-modal-header">
        <div class="contact-avatar" style="width:48px;height:48px;font-size:.95rem;background:${avatarBg};">
          ${isPerson ? html(initials) : '<i class="fa-solid fa-building" style="font-size:1.1rem;color:var(--text-muted);"></i>'}
        </div>
        <div style="flex:1;min-width:0;">
          <h3 style="font-size:1.1rem;font-weight:700;margin:0;">${html(c.contactName || c.name)}</h3>
          ${c.role ? `<div style="font-size:.85rem;color:var(--text-secondary);margin-top:.15rem;">${html(c.role)}</div>` : ''}
          ${c.company && c.company !== c.name ? `<div style="font-size:.8rem;color:var(--text-muted);">${html(c.company)}</div>` : ''}
        </div>
        <button class="btn btn-ghost" style="font-size:.78rem;padding:.35rem .65rem;" onclick="crm.renderDetailModal(crm.contacts.find(x=>x.id==='${c.id}'), true)" title="Modifier">
          <i class="fa-solid fa-pen-to-square"></i> Modifier
        </button>
        <button class="btn-fav${c.favorite ? ' active' : ''}" style="font-size:1.2rem;" onclick="crm.toggleFavorite('${c.id}')">
          <i class="fa-${c.favorite ? 'solid' : 'regular'} fa-star"></i>
        </button>
      </div>

      <div class="divider" style="margin:.85rem 0;"></div>

      <!-- Statut & Méta -->
      <div style="display:flex;flex-direction:column;gap:.75rem;">
        <div style="display:flex;align-items:center;justify-content:space-between;background:var(--bg-subtle);padding:.6rem .85rem;border-radius:6px;">
          <span style="font-size:.82rem;font-weight:600;color:var(--text-secondary);">Statut de suivi :</span>
          <select class="crm-status-select" onchange="crm.setStatus('${c.id}', this.value)"
            style="background:${statusCfg.bg};color:${statusCfg.color};border-color:${statusCfg.border};padding:.3rem .75rem;font-size:.8rem;">
            ${Object.entries(CRM_STATUSES).map(([key, cfg]) =>
              `<option value="${key}" ${c.status === key ? 'selected' : ''}>${cfg.icon} ${key}</option>`
            ).join('')}
          </select>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:.6rem;font-size:.82rem;">
          <div class="contact-info-row">
            <i class="fa-solid fa-tag"></i>
            <span><strong>Secteur :</strong> ${html(c.sector)}</span>
          </div>
          <div class="contact-info-row">
            <i class="fa-solid fa-location-dot"></i>
            <span><strong>Lieu :</strong> ${html(c.location || 'Non précisé')}</span>
          </div>
          <div class="contact-info-row">
            <i class="fa-solid fa-user"></i>
            <span><strong>Type :</strong> ${isPerson ? 'Individuel' : 'Service RH / Entreprise'}</span>
          </div>
          <div class="contact-info-row">
            <i class="fa-solid fa-share-nodes"></i>
            <span><strong>Source :</strong> ${html(c.source || 'Direct')}</span>
          </div>
        </div>

        ${c.email ? `
        <div class="contact-info-row" style="background:#f8fafc;padding:.5rem .75rem;border-radius:6px;border:1px solid #e2e8f0;">
          <i class="fa-solid fa-envelope" style="color:#2563eb;"></i>
          <a href="mailto:${html(c.email)}" style="color:#2563eb;font-weight:500;">${html(c.email)}</a>
        </div>` : ''}

        ${c.linkedin ? `
        <div class="contact-info-row" style="background:#f0f7ff;padding:.5rem .75rem;border-radius:6px;border:1px solid #bfdbfe;">
          <i class="fa-brands fa-linkedin" style="color:#0a66c2;"></i>
          <a href="${html(c.linkedin)}" target="_blank" style="color:#0a66c2;font-weight:500;">Profil LinkedIn</a>
        </div>` : ''}

        ${c.phone ? `
        <div class="contact-info-row">
          <i class="fa-solid fa-phone"></i>
          <span>${html(c.phone)}</span>
        </div>` : ''}

        <!-- Editable Notes -->
        <div style="margin-top:.25rem;">
          <label class="form-label" style="font-size:.78rem;">Notes & Historique des échanges</label>
          <textarea id="detail-notes-${c.id}" class="textarea" rows="3" placeholder="Ajouter une note..."
            onchange="crm.updateNotes('${c.id}', this.value)">${html(c.notes || '')}</textarea>
        </div>
      </div>

      <div class="divider" style="margin:.85rem 0;"></div>

      <!-- Modal Actions -->
      <div style="display:flex;gap:.5rem;flex-wrap:wrap;">
        ${c.email ? `
        <button class="btn btn-ghost" style="flex:1;justify-content:center;" onclick="prefillEmailTool('${escId(c.name)}','${escId(c.contactName||'')}','${escId(c.email)}');closeAllModals();">
          <i class="fa-solid fa-envelope"></i> Écrire Mail
        </button>` : ''}
        ${!isPerson ? `
        <button class="btn btn-dark" style="flex:1;justify-content:center;" onclick="prefillNewApp('${escId(c.name)}','${escId(domainStr)}','${escId(c.location||'')}','${escId(c.email||'')}');closeAllModals();">
          <i class="fa-solid fa-plus"></i> Postuler
        </button>` : ''}
        <button class="btn btn-reminder" style="flex:1;justify-content:center;" onclick="openReminderModal('${c.id}','${escId(c.contactName || c.name)}','${escId(c.company||c.name)}');closeAllModals();">
          <i class="fa-regular fa-calendar-plus"></i> Rappel Outlook
        </button>
      </div>
    `;
  }

  updateNotes(id, text) {
    const c = this.contacts.find(x => x.id === id);
    if (!c) return;
    c.notes = text.trim();
    this.save();
    showToast('Notes enregistrées', 'info');
  }

  update(id) {
    const c = this.contacts.find(x => x.id === id);
    if (!c) return;
    const g = (eid) => document.getElementById(eid)?.value?.trim() || '';
    const newName = g('edit-contactName');
    if (!newName) { showToast('Le nom ne peut pas être vide.', 'info'); return; }
    c.contactName = newName;
    c.name        = newName;
    c.company     = g('edit-company')   || c.company;
    c.role        = g('edit-role');
    c.location    = g('edit-location');
    c.email       = g('edit-email');
    c.phone       = g('edit-phone');
    c.linkedin    = g('edit-linkedin');
    c.sector      = g('edit-sector')    || c.sector;
    c.source      = g('edit-source')    || c.source;
    c.type        = g('edit-type')      || c.type;
    c.notes       = g('edit-notes');
    this.save();
    this.render();
    this.renderDetailModal(c);
    showToast('Contact mis à jour !', 'success');
  }
}

// =========================================================
//  Statuts CRM
// =========================================================
const CRM_STATUSES = {
  'À contacter'    : { icon: '📋', bg: '#f7f7f5', color: '#5a5a5a', border: '#e4e1dc' },
  'Contacté'       : { icon: '📤', bg: '#eff6ff', color: '#1e40af', border: '#bfdbfe' },
  'En discussion'  : { icon: '💬', bg: '#f0fdf4', color: '#166534', border: '#bbf7d0' },
  'Entretien prévu': { icon: '📅', bg: '#fefce8', color: '#854d0e', border: '#fde68a' },
  'Alumni / Réseau': { icon: '🎓', bg: '#faf5ff', color: '#6b21a8', border: '#e9d5ff' },
  'Refusé'         : { icon: '❌', bg: '#fef2f2', color: '#991b1b', border: '#fecaca' },
  'Recommandation' : { icon: '⭐', bg: '#fffdf4', color: '#78350f', border: '#fde68a' }
};

function avatarColor(name) {
  const colors = ['#f1f5f9','#fce7f3','#ede9fe','#d1fae5','#dbeafe','#fee2e2','#fef3c7','#ecfdf5'];
  let h = 0;
  for (let i = 0; i < (name || '').length; i++) h = (h * 31 + (name || '').charCodeAt(i)) % colors.length;
  return colors[Math.abs(h)];
}

function escId(str) {
  return (str || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

// =========================================================
//  Outlook Reminder
// =========================================================
let _reminderContactId = null;

function openReminderModal(contactId, contactName, company) {
  _reminderContactId = contactId;

  const titleEl = document.getElementById('reminder-title');
  const bodyEl  = document.getElementById('reminder-body');
  const dateEl  = document.getElementById('reminder-date');
  const timeEl  = document.getElementById('reminder-time');

  if (titleEl) titleEl.value = `Relance — ${contactName} (${company})`;
  if (bodyEl)  bodyEl.value  = `Contacter ${contactName} (${company}) pour relancer et demander l'avancement de ma candidature de stage Ingénieur Aérodynamique & CFD.`;

  const d = new Date();
  d.setDate(d.getDate() + 7);
  if (dateEl) dateEl.value = d.toISOString().split('T')[0];
  if (timeEl) timeEl.value = '09:00';

  document.getElementById('modal-reminder')?.classList.add('active');
}

function openOutlookWeb() {
  const title = document.getElementById('reminder-title')?.value || 'Rappel contact';
  const body  = document.getElementById('reminder-body')?.value  || '';
  const date  = document.getElementById('reminder-date')?.value  || '';
  const time  = document.getElementById('reminder-time')?.value  || '09:00';

  if (!date) { showToast('Veuillez choisir une date.', 'info'); return; }

  const pad = n => String(n).padStart(2, '0');
  const [y, m, d2] = date.split('-');
  const [hh, mm]   = time.split(':');

  const startdt = `${y}-${m}-${d2}T${hh}:${mm}:00`;
  const endHour = pad((parseInt(hh, 10) + 1) % 24);
  const enddt   = `${y}-${m}-${d2}T${endHour}:${mm}:00`;

  const subjectEnc = encodeURIComponent(title);
  const bodyEnc    = encodeURIComponent(body);
  const startEnc   = encodeURIComponent(startdt);
  const endEnc     = encodeURIComponent(enddt);

  const webUrl = `https://outlook.office.com/calendar/0/deeplink/compose?subject=${subjectEnc}&body=${bodyEnc}&startdt=${startEnc}&enddt=${endEnc}`;

  window.open(webUrl, '_blank');
  showToast('Formulaire de rappel ouvert dans Outlook Web ESTACA !', 'success');
  document.getElementById('modal-reminder')?.classList.remove('active');
}

function downloadICS() {
  const title = document.getElementById('reminder-title')?.value || 'Rappel contact';
  const body  = document.getElementById('reminder-body')?.value  || '';
  const date  = document.getElementById('reminder-date')?.value  || '';
  const time  = document.getElementById('reminder-time')?.value  || '09:00';

  if (!date) { showToast('Veuillez choisir une date.', 'info'); return; }

  const [y, m, d2] = date.split('-');
  const [hh, mm]   = time.split(':');
  const dtStart = `${y}${m}${d2}T${hh}${mm}00`;
  const dtEnd   = `${y}${m}${d2}T${String((parseInt(hh,10)+1)%24).padStart(2,'0')}${mm}00`;
  const now     = new Date().toISOString().replace(/[-:.]/g,'').slice(0,15);

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//StageTrack Pro//Jules COUPRIE//FR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:stagetrack-${now}@julescouprie.estaca`,
    `DTSTAMP:${now}Z`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${title.replace(/[,;]/g,' ')}`,
    `DESCRIPTION:${body.replace(/\n/g,'\\n').replace(/[,;]/g,' ')}`,
    'BEGIN:VALARM',
    'TRIGGER:-PT60M',
    'ACTION:DISPLAY',
    `DESCRIPTION:Rappel : ${title.replace(/[,;]/g,' ')}`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `rappel_${title.slice(0,30).replace(/\s+/g,'_').replace(/[^a-zA-Z0-9_-]/g,'')}.ics`;
  a.click();
  URL.revokeObjectURL(url);

  showToast('Fichier .ics téléchargé !', 'success');
  document.getElementById('modal-reminder')?.classList.remove('active');
}

function openOutlookDirect() {
  openOutlookWeb();
}
