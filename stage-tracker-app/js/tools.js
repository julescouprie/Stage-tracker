// =========================================================
//  Outils Stratégiques (StageTrack Pro Light)
// =========================================================

// --- Email Templates (FR & EN) ---
const TEMPLATES = {
  spontaneous: {
    label: "🇫🇷 Candidature Spontanée — Stage CFD / Aérodynamique",
    subject: (c) => `Candidature Stage Ingénieur Aérodynamique & CFD (4 mois) — Jules COUPRIE (ESTACA)`,
    body: (recruiter, company, position) =>
`Bonjour ${recruiter || 'Madame, Monsieur'},

Actuellement élève ingénieur en 4ème année à l'ESTACA, spécialisé en Aérodynamique et CFD, je vous adresse ma candidature spontanée pour un stage de 4 mois à partir de mai 2026 au sein de ${company || '[Entreprise]'}.

Passionné par la simulation numérique, j'ai développé une maîtrise des outils de maillage et de simulation CFD (Star-CCM+, Ansys Fluent, OpenFOAM) ainsi que du traitement de données sous Python.

Rejoindre ${company || 'votre équipe'} représenterait une opportunité exceptionnelle de contribuer à vos projets d'optimisation aérodynamique.

Bien cordialement,
Jules COUPRIE — jules.couprie@estaca.eu`
  },
  relaunch: {
    label: "🇫🇷 Relance (J+10 / J+14)",
    subject: (c) => `Relance — Candidature Stage Ingénieur Aérodynamique — Jules COUPRIE`,
    body: (recruiter, company, position) =>
`Bonjour ${recruiter || 'Madame, Monsieur'},

Je me permets de revenir vers vous concernant ma candidature pour le poste de ${position || 'Stagiaire Ingénieur CFD'} au sein de ${company || 'votre structure'}, transmise il y a une dizaine de jours.

Toujours très motivé, je souhaite réitérer mon vif intérêt pour ce stage.

Bien cordialement,
Jules COUPRIE — jules.couprie@estaca.eu`
  },
  alumni: {
    label: "🇫🇷 Prise de contact Alumni ESTACA",
    subject: (company) => `Prise de contact ESTACA — Échange Ingénierie & CFD — Jules COUPRIE`,
    body: (recruiter, company, position) =>
`Bonjour ${recruiter || 'Cher Alumni'},

Également étudiant à l'ESTACA (4ème année, spécialisation Aérodynamique & CFD), je me permets de vous contacter concernant votre parcours au sein de ${company || 'votre structure'}.

Je suis à la recherche d'un stage de 4 mois à partir de mai 2026 et j'aurais aimé échanger quelques minutes sur les opportunités au sein de ${company || 'votre équipe'}.

Bien cordialement,
Jules COUPRIE — jules.couprie@estaca.eu`
  },
  linkedin: {
    label: "🇫🇷 Note LinkedIn (300 car.)",
    subject: () => `Connexion LinkedIn — Jules COUPRIE`,
    body: (recruiter, company, position) =>
`Bonjour ${recruiter || '[Prénom]'}, élève ingénieur à l'ESTACA spécialisé en CFD & Aérodynamique, je suis très intéressé par le travail de ${company || 'votre équipe'}. À la recherche d'un stage de 4 mois dès mai 2026, serait-il possible d'échanger brièvement ? Cordialement, Jules`
  },
  thanks: {
    label: "🇫🇷 Remerciement Post-Entretien",
    subject: (c) => `Remerciements suite à notre entretien — Jules COUPRIE`,
    body: (recruiter, company, position) =>
`Bonjour ${recruiter || 'Madame, Monsieur'},

Je tenais à vous remercier pour le temps accordé lors de notre entretien pour le poste de ${position || 'Stagiaire Ingénieur Aérodynamique CFD'}.

Nos échanges ont renforcé mon enthousiasme à rejoindre ${company || 'votre équipe'}.

Bien cordialement,
Jules COUPRIE`
  },
  custom: {
    label: "🇫🇷 Personnalisé / Message libre",
    subject: (company) => `Candidature / Suivi — Jules COUPRIE (ESTACA)`,
    body: (recruiter, company, position) =>
`Bonjour ${recruiter || 'Madame, Monsieur'},

[Rédigez votre message personnalisé ici...]

Bien cordialement,
Jules COUPRIE — jules.couprie@estaca.eu`
  },
  spontaneous_en: {
    label: "🇬🇧 Spontaneous Application — Aerodynamics & CFD (EN)",
    subject: (company) => `Application for Aerodynamics & CFD Engineering Internship (4 Months) — Jules COUPRIE`,
    body: (recruiter, company, position) =>
`Dear ${recruiter || 'Hiring Manager'},

I am a 4th-year engineering student at ESTACA (France), specializing in Aerodynamics and Computational Fluid Dynamics. I am writing to express my interest in a 4-month engineering internship at ${company || '[Company]'}, starting May 2026.

I have hands-on expertise in CFD workflows (Star-CCM+, Ansys Fluent, OpenFOAM) and data analysis using Python and ParaView.

Kind regards,
Jules COUPRIE — jules.couprie@estaca.eu`
  },
  relaunch_en: {
    label: "🇬🇧 Follow-up / Application Status (EN)",
    subject: (company) => `Follow-up on Aerodynamics Internship Application — Jules COUPRIE`,
    body: (recruiter, company, position) =>
`Dear ${recruiter || 'Hiring Manager'},

I am following up on my application for the ${position || 'CFD / Aerodynamics Engineering Intern'} position at ${company || 'your team'}.

I remain highly enthusiastic about contributing to your aerodynamic projects.

Best regards,
Jules COUPRIE — jules.couprie@estaca.eu`
  },
  alumni_en: {
    label: "🇬🇧 ESTACA Alumni Outreach (EN)",
    subject: (company) => `ESTACA Alumni Contact — CFD & Aerodynamics Engineering — Jules COUPRIE`,
    body: (recruiter, company, position) =>
`Dear ${recruiter || 'Fellow ESTACA Graduate'},

As a fellow ESTACA engineering student (4th year, Aerodynamics & CFD), I am reaching out after following your career at ${company || '[Company]'}.

I am seeking a 4-month internship in CFD and aerodynamics starting May 2026. I would be grateful for a brief exchange.

Best regards,
Jules COUPRIE — jules.couprie@estaca.eu`
  },
  linkedin_en: {
    label: "🇬🇧 LinkedIn Connection Note (EN - 300 char.)",
    subject: () => `LinkedIn Connection — Jules COUPRIE`,
    body: (recruiter, company, position) =>
`Hi ${recruiter || '[Name]'}, I am a 4th-year Aerodynamics & CFD student at ESTACA passionate about motorsport simulation. I am seeking a 4-month CFD internship starting May 2026. Would love to connect and discuss opportunities at ${company || 'your team'}. Best, Jules`
  },
  thanks_en: {
    label: "🇬🇧 Post-Interview Thank You (EN)",
    subject: (company) => `Thank you for the interview — Jules COUPRIE`,
    body: (recruiter, company, position) =>
`Dear ${recruiter || 'Hiring Team'},

Thank you for taking the time to speak with me regarding the ${position || 'Aerodynamics CFD Intern'} position at ${company || '[Company]'}.

Our conversation confirmed my strong enthusiasm to join ${company || 'your team'}.

Best regards,
Jules COUPRIE — jules.couprie@estaca.eu`
  },
  custom_en: {
    label: "🇬🇧 Custom / Free Message (EN)",
    subject: (company) => `Application / Follow-up — Jules COUPRIE (ESTACA)`,
    body: (recruiter, company, position) =>
`Dear ${recruiter || 'Hiring Manager'},

[Write your customized message here...]

Best regards,
Jules COUPRIE — jules.couprie@estaca.eu`
  }
};

function generateEmail() {
  const key       = document.getElementById('email-tpl')?.value || 'spontaneous';
  const recruiter = document.getElementById('email-recruiter')?.value || '';
  const company   = document.getElementById('email-company')?.value   || '';
  const position  = document.getElementById('email-position')?.value  || '';
  const tpl = TEMPLATES[key];
  if (!tpl) return;
  const subjectEl = document.getElementById('email-subject');
  const bodyEl    = document.getElementById('email-body');
  if (subjectEl) subjectEl.value = tpl.subject(company);
  if (bodyEl)    bodyEl.value    = tpl.body(recruiter, company, position);
}

function copyEmail() {
  const body = document.getElementById('email-body')?.value;
  if (!body) return;
  navigator.clipboard.writeText(body).then(() => showToast('Email copié dans le presse-papier !', 'success'));
}

function openInMailClient() {
  const subject = encodeURIComponent(document.getElementById('email-subject')?.value || '');
  const body    = encodeURIComponent(document.getElementById('email-body')?.value || '');
  window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
}

function prefillEmailTool(company, contactName, email) {
  document.querySelector('.tab-btn[data-tab="tools-tab"]')?.click();
  setTimeout(() => {
    const compEl = document.getElementById('email-company');
    const recEl  = document.getElementById('email-recruiter');
    if (compEl) compEl.value = company;
    if (recEl)  recEl.value  = contactName;
    generateEmail();
    showToast(`Mail pré-rempli pour ${company}`, 'info');
  }, 50);
}

// --- Gratification Calculator ---
const COUNTRIES = {
  FR: { currency: '€',   housing: 480,  food: 280, label: 'France' },
  UK: { currency: '£',   housing: 780,  food: 360, label: 'Royaume-Uni' },
  CH: { currency: 'CHF', housing: 1100, food: 560, label: 'Suisse' },
  DE: { currency: '€',   housing: 620,  food: 350, label: 'Allemagne' },
  IT: { currency: '€',   housing: 460,  food: 280, label: 'Italie' }
};

function calculateGrat() {
  const rateEl   = document.getElementById('calc-rate');
  const hoursEl  = document.getElementById('calc-hours');
  const countryEl= document.getElementById('calc-country');
  if (!rateEl || !hoursEl || !countryEl) return;
  const rate   = parseFloat(rateEl.value)   || 4.35;
  const hours  = parseFloat(hoursEl.value)  || 35;
  const code   = countryEl.value || 'FR';
  const c      = COUNTRIES[code] || COUNTRIES.FR;
  const monthlyHours = (hours * 52) / 12;
  const gross = Math.round(monthlyHours * rate);
  const expenses = c.housing + c.food;
  const net = gross - expenses;
  setText('calc-gross',    `${gross} ${c.currency}`);
  setText('calc-expenses', `${expenses} ${c.currency}`);
  const netEl = document.getElementById('calc-net');
  if (netEl) {
    netEl.textContent = `${net} ${c.currency}`;
    netEl.style.color = net >= 0 ? 'var(--accepted-text)' : 'var(--rejected-text)';
  }
}

// =========================================================
//  CHECKLIST & SUIVI RAPIDE DE NOTIONS
// =========================================================
const DEFAULT_LEARNING_TOPICS = [
  { id:"learn-1", category:"CFD & Turbulence", title:"Modèle RANS k-ω SST & Traitement Paroi", status:"Maîtrisé", notes:"Modèle hybride (k-eps au cœur, k-omega paroi). Standard industrie F1/WEC." },
  { id:"learn-2", category:"CFD & Turbulence", title:"Méthodologie Maillage Pariétal & Y+", status:"Maîtrisé", notes:"Calcul du Y+ = u*y/nu. Y+~1 pour résolution directe sous-couche visqueuse." },
  { id:"learn-3", category:"Aérodynamique Motorsport", title:"Effet de Sol & Diffuseur Arrière", status:"Maîtrisé", notes:"Effet venturi sous plancher (Bernoulli). Sensibilité au Pitch/Heave." },
  { id:"learn-4", category:"Outils Numériques", title:"Star-CCM+ Scripting Java & Python ParaView", status:"En cours", notes:"Automatisations de macros pour maillage, batch runs et calcul du Q-criterion." }
];

class LearningTracker {
  constructor() {
    this.storageKey = 'stage_track_learning_v1';
    this.topics = this.load();
  }
  load() {
    try { const saved = localStorage.getItem(this.storageKey); if (saved) return JSON.parse(saved); } catch (e) { console.error(e); }
    localStorage.setItem(this.storageKey, JSON.stringify(DEFAULT_LEARNING_TOPICS));
    return [...DEFAULT_LEARNING_TOPICS];
  }
  save() { localStorage.setItem(this.storageKey, JSON.stringify(this.topics)); }
  cycleStatus(id) {
    const t = this.topics.find(x => x.id === id); if (!t) return;
    const states = ['À réviser', 'En cours', 'Maîtrisé'];
    t.status = states[(states.indexOf(t.status) + 1) % states.length];
    this.save(); this.render();
  }
  addTopic(title, category, notes) {
    if (!title) return;
    this.topics.push({ id:'learn-'+Date.now(), category:category||'Général', title:title.trim(), status:'À réviser', notes:notes?notes.trim():'' });
    this.save(); this.render(); showToast('Sujet ajouté !', 'success');
  }
  removeTopic(id) {
    if (!confirm('Supprimer ce sujet ?')) return;
    this.topics = this.topics.filter(x => x.id !== id);
    this.save(); this.render(); showToast('Sujet supprimé.', 'info');
  }
  render() {
    const container = document.getElementById('learning-container'); if (!container) return;
    const total = this.topics.length;
    const mastered = this.topics.filter(t => t.status === 'Maîtrisé').length;
    const percent = total > 0 ? Math.round((mastered / total) * 100) : 0;
    setText('learn-progress-text', `${mastered} / ${total} sujets maîtrisés (${percent}%)`);
    const barEl = document.getElementById('learn-progress-bar'); if (barEl) barEl.style.width = `${percent}%`;
    const categories = {};
    this.topics.forEach(t => { if (!categories[t.category]) categories[t.category] = []; categories[t.category].push(t); });
    container.innerHTML = '';
    Object.entries(categories).forEach(([catName, list]) => {
      const group = document.createElement('div'); group.className = 'learning-group';
      let catHtml = `<div class="learning-group-title"><span><i class="fa-solid fa-layer-group" style="color:var(--text-muted);margin-right:.4rem;"></i> ${html(catName)}</span><span style="font-size:.74rem;color:var(--text-muted);font-weight:400;margin-left:auto;">${list.filter(x=>x.status==='Maîtrisé').length}/${list.length} maîtrisés</span></div><div class="learning-grid">`;
      list.forEach(t => {
        const badge = t.status === 'Maîtrisé' ? `<span class="learn-status-pill status-mastered" onclick="learningTracker.cycleStatus('${t.id}')">🟢 Maîtrisé</span>` : t.status === 'En cours' ? `<span class="learn-status-pill status-progress" onclick="learningTracker.cycleStatus('${t.id}')">🟡 En cours</span>` : `<span class="learn-status-pill status-review" onclick="learningTracker.cycleStatus('${t.id}')">🔴 À réviser</span>`;
        catHtml += `<div class="learning-card"><div style="display:flex;align-items:flex-start;justify-content:space-between;gap:.5rem;"><div style="font-weight:700;font-size:.86rem;color:var(--text-primary);">${html(t.title)}</div><button class="btn-icon danger" style="padding:.1rem .25rem;font-size:.72rem;" onclick="learningTracker.removeTopic('${t.id}')" title="Supprimer"><i class="fa-solid fa-xmark"></i></button></div>${t.notes?`<div style="font-size:.76rem;color:var(--text-secondary);margin-top:.35rem;line-height:1.4;">${html(t.notes)}</div>`:''}<div style="margin-top:.6rem;display:flex;align-items:center;justify-content:space-between;padding-top:.4rem;border-top:1px solid var(--border-subtle,#f0f0f0);"><span style="font-size:.68rem;color:var(--text-muted);">Cliquer pour changer :</span>${badge}</div></div>`;
      });
      catHtml += `</div>`; group.innerHTML = catHtml; container.appendChild(group);
    });
  }
}

let learningTracker;

// =========================================================
//  PARCOURS D'AVENTURE — DONNÉES DES LEÇONS (FORMAT PAGE)
// =========================================================

// Chaque leçon a : theory (intro), exercises (liste avec hints+solution), cfd_lab (TP guidé), references
const QUEST_LEVELS = [

  // ─── NIVEAU 1 ────────────────────────────────────────────────────────────
  {
    id: "quest-1", level: 1, badge: "🚀 Niveau 1",
    title: "Profil NACA 0012 2D & Couche Limite Pariétale",
    subtitle: "Équations RANS, calcul de la première couche de maillage y₁, lecture de polaires et simulation 2D sous Ansys/3DX.",
    xp: 300, icon: "fa-solid fa-wind",
    lesson: {
      theory: `
        <p>Les équations de <strong>Navier-Stokes moyennées RANS</strong> décomposent la vitesse instantanée en une composante moyenne et une fluctuation turbulente (<em>u = ū + u'</em>). Cette décomposition introduit le tenseur de Reynolds, qui nécessite un modèle de fermeture.</p>
        <p>Le modèle <strong>k-ω SST (Shear Stress Transport)</strong> de Menter est le standard industriel en aérodynamique externe. Il utilise le modèle k-ω de Wilcox dans la sous-couche visqueuse (précis sur le décollement) et bascule vers le k-ε en champ lointain via une fonction de raccordement F₁.</p>
        <p>Le paramètre <strong>Y⁺</strong> quantifie la distance adimensionnelle de la première maille à la paroi :</p>
        <p style="text-align:center;font-family:monospace;background:#f8fafc;padding:.5rem 1rem;border-radius:4px;border:1px solid #e2e8f0;font-size:.9rem;">Y⁺ = u* · y₁ / ν</p>
        <p>Pour résoudre directement la sous-couche visqueuse sans fonction de paroi empirique, il faut <strong>Y⁺ ≈ 1</strong> avec au moins 15 à 20 couches de prismes (taux de croissance &lt; 1.20).</p>
      `,
      exercises: [
        {
          num: 1,
          title: "Calcul de la hauteur de première maille y₁ pour Y⁺ = 1",
          statement: `
            <p>On souhaite simuler un profil <strong>NACA 0012</strong> avec une corde <em>c = 1.0 m</em> dans un écoulement d'air à <em>U<sub>∞</sub> = 40 m/s</em>.</p>
            <p>Données numériques de l'air à 20°C et pression atmosphérique :</p>
            <ul>
              <li>Masse volumique : ρ = 1.225 kg/m³</li>
              <li>Viscosité dynamique : μ = 1.789 × 10⁻⁵ Pa·s</li>
              <li>Viscosité cinématique : ν = μ/ρ = 1.46 × 10⁻⁵ m²/s</li>
            </ul>
            <p><strong>Questions :</strong></p>
            <ol>
              <li>Calculer le nombre de Reynolds <em>Re</em> basé sur la corde.</li>
              <li>Estimer le coefficient de frottement moyen <em>C<sub>f</sub></em> par la corrélation de Schlichting : <code>Cf = 0.058 × Re⁻⁰·²</code></li>
              <li>En déduire la contrainte de cisaillement pariétale <em>τ<sub>w</sub></em>.</li>
              <li>Calculer la vitesse de frottement <em>u*</em>.</li>
              <li>Déterminer la hauteur de première maille <em>y₁</em> pour obtenir Y⁺ = 1.</li>
            </ol>
          `,
          hints: [
            "Le nombre de Reynolds se calcule avec la formule Re = ρ U c / μ = U c / ν. Pensez à vérifier vos unités (m/s, m, m²/s).",
            "La contrainte pariétale τ_w est reliée au coefficient de frottement par : τ_w = ½ × ρ × U² × C_f. C'est l'analogue de la formule de la pression dynamique.",
            "La vitesse de frottement u* est définie par : u* = √(τ_w / ρ). C'est une vitesse caractéristique de la couche limite pariétale.",
            "Y⁺ = u* × y₁ / ν. Pour Y⁺ = 1, isolez y₁ : y₁ = Y⁺ × ν / u*. Le résultat sera de l'ordre du micromètre !"
          ],
          solution: `
            <p><strong>1. Nombre de Reynolds :</strong></p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">Re = U × c / ν = 40 × 1.0 / (1.46×10⁻⁵) = <strong>2.74 × 10⁶</strong></p>

            <p><strong>2. Coefficient de frottement (Schlichting) :</strong></p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">C_f = 0.058 × (2.74×10⁶)⁻⁰·² = 0.058 × (1/19.2) = <strong>0.00302</strong></p>

            <p><strong>3. Contrainte de cisaillement à la paroi :</strong></p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">τ_w = ½ × 1.225 × 40² × 0.00302 = 0.5 × 1.225 × 1600 × 0.00302 = <strong>2.96 Pa</strong></p>

            <p><strong>4. Vitesse de frottement :</strong></p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">u* = √(τ_w / ρ) = √(2.96 / 1.225) = √(2.416) = <strong>1.554 m/s</strong></p>

            <p><strong>5. Hauteur de première maille pour Y⁺ = 1 :</strong></p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">y₁ = Y⁺ × ν / u* = 1 × (1.46×10⁻⁵) / 1.554 = <strong>9.4 × 10⁻⁶ m ≈ 0.0094 mm</strong></p>

            <p style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:4px;padding:.5rem .8rem;margin-top:.5rem;"><strong>📌 Valeur à configurer dans Ansys/3DX :</strong> Première couche = <strong>0.0094 mm</strong>, 20 prismes, growth rate = 1.15.</p>
          `
        },
        {
          num: 2,
          title: "Lecture et analyse de la polaire C_l(α) d'un profil NACA 0012",
          statement: `
            <p>La polaire du profil NACA 0012 à Re = 3×10⁶ donne les données suivantes (NACA Report 1135, NASA) :</p>
            <table style="width:100%;border-collapse:collapse;font-size:.82rem;margin:.5rem 0;">
              <thead>
                <tr style="background:#f8fafc;"><th style="border:1px solid #e2e8f0;padding:.3rem .6rem;">α (°)</th><th style="border:1px solid #e2e8f0;padding:.3rem .6rem;">C_l</th><th style="border:1px solid #e2e8f0;padding:.3rem .6rem;">C_d</th></tr>
              </thead>
              <tbody>
                <tr><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">0</td><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">0.000</td><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">0.0060</td></tr>
                <tr style="background:#f8fafc;"><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">4</td><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">0.440</td><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">0.0062</td></tr>
                <tr><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">8</td><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">0.880</td><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">0.0084</td></tr>
                <tr style="background:#f8fafc;"><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">12</td><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">1.200</td><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">0.0151</td></tr>
                <tr><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">14</td><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">1.360</td><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">0.0221</td></tr>
                <tr style="background:#fff3cd;"><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">15 (stall)</td><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">1.20 ↓</td><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">0.0500 ↑</td></tr>
              </tbody>
            </table>
            <p><strong>Questions :</strong></p>
            <ol>
              <li>Estimer graphiquement la pente de portance dC_l/dα en zone linéaire (entre 0° et 8°). Comparer à la valeur théorique des profils minces : 2π rad⁻¹.</li>
              <li>Calculer la finesse maximale L/D = C_l/C_d et l'angle d'attaque correspondant.</li>
              <li>À partir des données, identifier l'angle de décrochage α_stall. Que constate-t-on sur C_d ?</li>
            </ol>
          `,
          hints: [
            "Pour estimer la pente entre 0° et 8° : ΔCl / Δα = (C_l@8° - C_l@0°) / (8° - 0°). Convertissez le résultat de deg⁻¹ en rad⁻¹ en multipliant par 180/π.",
            "La finesse aérodynamique est le rapport L/D = C_l / C_d. Calculez-la pour chaque ligne du tableau et trouvez la valeur maximum.",
            "Le décrochage (stall) se reconnaît par la chute brutale de C_l et l'augmentation soudaine de C_d."
          ],
          solution: `
            <p><strong>1. Pente de portance en zone linéaire (0° à 8°) :</strong></p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">dCl/dα = (0.880 - 0.000) / (8 - 0) = 0.110 deg⁻¹</p>
            <p>Conversion en rad⁻¹ : 0.110 × (180/π) = 0.110 × 57.3 = <strong>6.30 rad⁻¹</strong></p>
            <p>Valeur théorique des profils minces : 2π ≈ <strong>6.28 rad⁻¹</strong>. Accord excellent !</p>

            <p><strong>2. Finesse maximale L/D :</strong></p>
            <table style="width:100%;border-collapse:collapse;font-size:.82rem;margin:.3rem 0;">
              <tr style="background:#f8fafc;"><th style="border:1px solid #e2e8f0;padding:.25rem .5rem;">α</th><th style="border:1px solid #e2e8f0;padding:.25rem .5rem;">C_l/C_d</th></tr>
              <tr><td style="border:1px solid #e2e8f0;padding:.25rem .5rem;text-align:center;">4°</td><td style="border:1px solid #e2e8f0;padding:.25rem .5rem;text-align:center;">0.440 / 0.0062 = 71.0</td></tr>
              <tr style="background:#f0fdf4;"><td style="border:1px solid #e2e8f0;padding:.25rem .5rem;text-align:center;font-weight:700;">8°</td><td style="border:1px solid #e2e8f0;padding:.25rem .5rem;text-align:center;font-weight:700;">0.880 / 0.0084 = 104.8 ← MAX</td></tr>
              <tr><td style="border:1px solid #e2e8f0;padding:.25rem .5rem;text-align:center;">12°</td><td style="border:1px solid #e2e8f0;padding:.25rem .5rem;text-align:center;">0.880 / 0.0151 = 79.5</td></tr>
            </table>
            <p>Finesse maximale ≈ <strong>104.8 à α = 8°</strong>.</p>

            <p><strong>3. Angle de décrochage :</strong></p>
            <p>À α = 15°, C_l chute de 1.36 à 1.20 et C_d explose de 0.022 à 0.050 (+127%). <br><strong>α_stall ≈ 14–15°</strong> avec C_l,max ≈ 1.36.</p>
          `
        }
      ],
      cfd_lab: {
        title: "TP CFD Guidé — Simulation 2D NACA 0012 (Ansys Fluent / 3DEXPERIENCE)",
        steps: [
          { label: "Géométrie", text: "Dans Ansys SpaceClaim ou 3DX : importer ou tracer le profil NACA 0012 (corde 1 m, α = 5°). Créer le domaine fluide type C-Grid : 15c en amont du bord d'attaque, 25c en aval du bord de fuite, 20c dans la direction normale." },
          { label: "Maillage pariétal", text: "Inflation sur les surfaces du profil. Première couche = 0.0094 mm (calculée en exercice 1). Nombre de couches = 20. Taux de croissance = 1.15. Vérifier que Orthogonal Quality > 0.15 et Skewness < 0.80." },
          { label: "Configuration solveur", text: "Solver : Pressure-Based, Steady. Modèle de turbulence : k-ω SST. Schéma de convection : Second Order Upwind. Entrée : Velocity Inlet U = 40 m/s, I = 1%. Sortie : Pressure Outlet P = 0 Pa. Paroi du profil : No-slip Wall." },
          { label: "Convergence", text: "Surveiller les résidus (cible < 10⁻⁴) ET les monitors de C_l et C_d. La simulation est convergée quand C_l et C_d sont stables sur 300 itérations (variation < 0.0001)." },
          { label: "Post-traitement & Validation", text: "Extraire le profil de pression C_p(x/c) sur l'intrados et l'extrados. Vérifier que Y⁺ ≤ 1.5 sur tout le profil (Menu : Results > Surface Integrals). Comparer votre C_l CFD avec la valeur polaire expérimentale : à α = 5°, C_l théorique ≈ 0.55." }
        ]
      },
      references: [
        { name: "NASA Glenn — Aerodynamic Basics & Fluid Physics", url: "https://www.grc.nasa.gov/www/k-12/airplane/bep.html" },
        { name: "CFD-Online Wiki — Turbulence Modeling (k-ω SST)", url: "https://www.cfd-online.com/Wiki/Turbulence_modeling" },
        { name: "SimScale — How to Calculate First Cell Height (Y+)", url: "https://www.simscale.com/blog/what-is-y-plus/" },
        { name: "NACA Report 1135 — Equations, Tables & Charts for Compressible Flow", url: "https://ntrs.nasa.gov/citations/19930091059" }
      ]
    },
    quiz: [
      { question: "Pour Re = 2.74×10⁶ sur un profil NACA 0012 à U = 40 m/s, quelle hauteur y₁ permet Y⁺ ≈ 1 ?", options: ["A. y₁ ≈ 1.5 mm", "B. y₁ ≈ 0.094 mm", "C. y₁ ≈ 0.0094 mm", "D. y₁ ≈ 10 nm"], correct: 2, explanation: "Correct ! Le calcul donne u* = 1.55 m/s, puis y₁ = ν/u* = 1.46×10⁻⁵ / 1.55 = 9.4×10⁻⁶ m = 0.0094 mm." },
      { question: "Quelle est la pente théorique de portance dCl/dα en zone linéaire pour un profil mince 2D ?", options: ["A. 1.0 deg⁻¹", "B. 2π rad⁻¹ ≈ 0.11 deg⁻¹", "C. 0.5 rad⁻¹", "D. Elle dépend du modèle de turbulence uniquement."], correct: 1, explanation: "La théorie des profils minces (Kutta-Joukowski) donne dCl/dα = 2π rad⁻¹, soit ≈ 0.11 deg⁻¹." },
      { question: "Pourquoi surveille-t-on les monitors C_l et C_d en plus des résidus pour valider la convergence ?", options: ["A. Les résidus peuvent être bas alors que C_l oscille encore.", "B. Les résidus et les monitors donnent toujours la même information.", "C. C_l et C_d augmentent toujours à la fin.", "D. Seuls les résidus comptent en CFD."], correct: 0, explanation: "La convergence physique exige la stabilisation des intégrales d'effort. Des résidus bas n'impliquent pas forcément un champ de vitesse convergé." }
    ]
  },

  // ─── NIVEAU 2 ────────────────────────────────────────────────────────────
  {
    id: "quest-2", level: 2, badge: "🏎️ Niveau 2",
    title: "Aérodynamique Motorsport — Effet de Sol & Aileron Multi-éléments",
    subtitle: "Physique Venturi du plancher, calculs d'Aero Balance et dépression, TP aileron F1 avec sol roulant sous Ansys/3DX.",
    xp: 400, icon: "fa-solid fa-car-side",
    lesson: {
      theory: `
        <p>Le plancher d'une monoplace F1 agit comme un conduit de Venturi géant entre le dessous du châssis et la piste. D'après le <strong>théorème de Bernoulli</strong> (pour un écoulement incompressible et sans frottement) :</p>
        <p style="text-align:center;font-family:monospace;background:#f8fafc;padding:.5rem 1rem;border-radius:4px;border:1px solid #e2e8f0;">p₁ + ½ ρ V₁² = p₂ + ½ ρ V₂²</p>
        <p>Quand la section se réduit sous le plancher (throat), la vitesse augmente, la pression chute : l'effet de succion colle la voiture au sol.</p>
        <p>Les <strong>ailerons multi-éléments</strong> (Main Plane + Flap) utilisent un <em>Slot Gap</em> (fente entre les profils) pour injecter un flux d'énergie dans la couche limite du flap, retardant son décrochage. Un <em>Gurney Flap</em> (cornière de quelques mm à la fuite) génère deux vortex contrarotatifs qui augmentent significativement C_l.</p>
        <p>L'<strong>Aero Balance</strong> mesure la répartition de l'appui aérodynamique entre essieux. Elle conditionne directement le comportement de la voiture en courbe et au freinage.</p>
      `,
      exercises: [
        {
          num: 1,
          title: "Calcul de l'Aero Balance et analyse dynamique à 250 km/h",
          statement: `
            <p>Une monoplace F1 roule à <em>V = 250 km/h</em>. Les simulations CFD donnent :</p>
            <ul>
              <li>Appui aérodynamique avant (F<sub>z,front</sub>) : <strong>4 200 N</strong></li>
              <li>Appui aérodynamique arrière (F<sub>z,rear</sub>) : <strong>5 800 N</strong></li>
            </ul>
            <p><strong>Questions :</strong></p>
            <ol>
              <li>Calculer l'appui total et exprimer ce résultat en kilogrammes-force équivalents (1 kgf ≈ 9.81 N).</li>
              <li>Calculer l'Aero Balance (%) : pourcentage de l'appui total supporté par l'essieu avant.</li>
              <li>L'ingénieur aéro décide d'augmenter l'angle d'incidence de l'aileron avant pour passer à un Aero Balance de 44%. Quelle est la nouvelle valeur de F<sub>z,front</sub> ? Quelle est la variation de charge sur l'essieu arrière ?</li>
            </ol>
          `,
          hints: [
            "L'appui total est simplement la somme des deux forces d'appui. Pour convertir en kg-force, divisez par 9.81.",
            "Aero Balance % = (F_z,front / F_z,total) × 100. C'est un simple ratio exprimé en pourcentage.",
            "Pour la question 3, si Aero Balance = 44%, alors F_z,front = 44% × F_z,total. Calculez la nouvelle valeur, puis déduisez la variation par rapport à 4200 N. L'appui total reste constant car on ne modifie que la répartition."
          ],
          solution: `
            <p><strong>1. Appui total :</strong></p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">F_z,total = 4200 + 5800 = <strong>10 000 N</strong> = 10 000 / 9.81 ≈ <strong>1019 kgf ≈ 1 tonne d'appui</strong></p>

            <p><strong>2. Aero Balance :</strong></p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">Aero Balance = (4200 / 10000) × 100 = <strong>42.0%</strong></p>
            <p>Interprétation : 42% de l'appui est produit sur l'avant, 58% sur l'arrière. Un équilibre classique en configuration « appui arrière » pour la stabilité en virage rapide.</p>

            <p><strong>3. Passage à 44% Aero Balance :</strong></p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">F_z,front (nouveau) = 44% × 10 000 = <strong>4 400 N</strong></p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">ΔF_z,front = 4400 - 4200 = <strong>+200 N sur l'avant</strong></p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">F_z,rear (nouveau) = 10 000 - 4 400 = <strong>5 600 N</strong> (soit -200 N sur l'arrière)</p>
            <p style="background:#fef9c3;border:1px solid #fde047;border-radius:4px;padding:.5rem .8rem;margin-top:.5rem;">⚠️ Conséquence dynamique : Davantage d'appui sur l'avant améliore l'entrée de virage, mais réduit la stabilité au freinage (risque de sur-virage).</p>
          `
        },
        {
          num: 2,
          title: "Calcul de la dépression générée sous le plancher par effet Venturi",
          statement: `
            <p>En conditions de course à <em>V<sub>∞</sub> = 70 m/s</em> (252 km/h), les mesures de peignes de pression indiquent que l'air accélère à <em>V<sub>floor</sub> = 90 m/s</em> sous le plancher.</p>
            <p>Données : ρ<sub>air</sub> = 1.225 kg/m³ à l'altitude du circuit.</p>
            <p><strong>Questions :</strong></p>
            <ol>
              <li>En appliquant Bernoulli entre l'écoulement amont (p<sub>∞</sub>, V<sub>∞</sub>) et le plancher (p<sub>floor</sub>, V<sub>floor</sub>), calculer la différence de pression ΔP = p<sub>floor</sub> - p<sub>∞</sub> (en Pa et en mbar).</li>
              <li>Sachant que le plancher a une surface effective en dépression de S = 2.5 m², calculer la force d'appui F<sub>z</sub> générée par cet effet de sol.</li>
            </ol>
          `,
          hints: [
            "De Bernoulli : p_∞ + ½ ρ V_∞² = p_floor + ½ ρ V_floor². Réarrangez pour isoler ΔP = p_floor - p_∞. Vous obtiendrez une valeur négative (dépression), c'est normal.",
            "La conversion de Pa en mbar est simple : 1 mbar = 100 Pa. Pour la force d'appui : F = |ΔP| × S (pression × surface)."
          ],
          solution: `
            <p><strong>1. Dépression sous plancher (Bernoulli) :</strong></p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">ΔP = p_floor - p_∞ = ½ ρ (V_∞² - V_floor²)</p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">ΔP = 0.5 × 1.225 × (70² - 90²) = 0.6125 × (4900 - 8100) = 0.6125 × (-3200)</p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;"><strong>ΔP = -1 960 Pa = -19.6 mbar</strong></p>

            <p><strong>2. Force d'appui générée :</strong></p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">F_z = |ΔP| × S = 1960 × 2.5 = <strong>4 900 N ≈ 500 kgf</strong></p>
            <p style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:4px;padding:.5rem .8rem;margin-top:.5rem;">Cela représente environ 500 kg d'appui supplémentaire générés par le seul effet de sol du plancher !</p>
          `
        }
      ],
      cfd_lab: {
        title: "TP CFD Guidé — Aileron Multi-éléments F1 avec Sol Roulant (Ansys Fluent / 3DX)",
        steps: [
          { label: "Géométrie 2D", text: "Créer l'assemblage 2D : profil principal (chord = 350 mm, angle = 12°), flap (chord = 180 mm, angle = 35°) avec un Slot Gap de 25 mm, et Gurney Flap de 5 mm à la fuite. Positionner l'ensemble à 50 mm du sol. Domaine : 8c en amont, 15c en aval, 6c en hauteur." },
          { label: "Maillage & Raffinement", text: "Inflation pariétale sur les deux profils (y₁ calculé via simulé à 69 m/s). Mailler le Slot Gap avec minimum 8 mailles dans sa hauteur (gap = 25 mm → cellules ≈ 3 mm max). Zone de raffinement volumique autour de l'ensemble (taille maille ≈ 5 mm)." },
          { label: "Sol Roulant (Moving Ground)", text: "CRUCIAL : configurer la limite 'sol' en Moving Wall avec V_x = 69.44 m/s dans la direction de l'écoulement. Sans cette condition, une couche limite fictive se développerait sur le sol et fausserait intégralement l'effet de sol." },
          { label: "Lancement et suivi", text: "Modèle k-ω SST, U_inlet = 69.44 m/s. Surveiller les monitors C_l et C_d globaux + monitor C_l séparé pour le Gurney Flap. Comparer le C_l global avec et sans Gurney Flap pour quantifier son apport." },
          { label: "Post-traitement", text: "Extraire les lignes de courant dans le Slot Gap (visualiser le jet d'énergie). Tracer la carte de pression sous le plancher et autour du flap. Calculer l'Aero Balance de l'aileron (répartition avant/arrière pour un véhicule complet)." }
        ]
      },
      references: [
        { name: "Racecar Engineering — F1 Underfloor & Diffuser Aerodynamics", url: "https://www.racecar-engineering.com/" },
        { name: "F1Technical — Ground Effect & Floor Venturi Analysis", url: "https://www.f1technical.net/technology/" },
        { name: "Formula1.com — Technical Regulations 2024", url: "https://www.formula1.com/en/page.rules-and-regulations.html" }
      ]
    },
    quiz: [
      { question: "Pour F_z,front = 4200 N et F_z,rear = 5800 N, quel est l'Aero Balance ?", options: ["A. 50.0%", "B. 42.0%", "C. 58.0%", "D. 35.5%"], correct: 1, explanation: "Aero Balance = (4200 / (4200+5800)) × 100 = 42.0%." },
      { question: "Pour V_∞ = 70 m/s et V_floor = 90 m/s, quelle est la dépression sous plancher ?", options: ["A. -1 960 Pa (-19.6 mbar)", "B. -500 Pa", "C. +1 200 Pa (surpression)", "D. 0 Pa"], correct: 0, explanation: "ΔP = 0.5 × 1.225 × (4900 - 8100) = -1 960 Pa." },
      { question: "Pourquoi configurer le sol en 'Moving Wall' dans une simulation CFD en effet de sol ?", options: ["A. Pour éviter une couche limite fictive sur le sol fixe qui fausserait l'effet de sol.", "B. Pour réduire le temps de calcul.", "C. Pour activer la rotation des roues.", "D. Parce que le logiciel l'impose par défaut."], correct: 0, explanation: "Sans sol roulant, une couche limite parasite épaisse se développerait sur le sol, détruisant entièrement la physique de l'effet Venturi." }
    ]
  },

  // ─── NIVEAU 3 ────────────────────────────────────────────────────────────
  {
    id: "quest-3", level: 3, badge: "💻 Niveau 3",
    title: "Plancher F1/WEC 3D, Diffuseur & Scripting Python/Java",
    subtitle: "Contrôle métrologique du maillage 3D, critère Q, macros d'automatisation Star-CCM+/OpenFOAM et post-traitement Python ParaView.",
    xp: 500, icon: "fa-solid fa-code",
    lesson: {
      theory: `
        <p>La simulation 3D de géométries complexes (plancher, diffuseur, vortex de bord) nécessite un contrôle rigoureux de la qualité du maillage volumique. Les indicateurs clés sont :</p>
        <ul>
          <li><strong>Skewness (Asymétrie)</strong> : mesure l'écart entre une cellule réelle et une cellule idéale. Doit rester &lt; 0.85 (idéalement &lt; 0.60).</li>
          <li><strong>Growth Rate (Taux de croissance)</strong> : ratio de volume entre cellules adjacentes. Ne doit pas dépasser 1.25.</li>
          <li><strong>Face Validity (Star-CCM+)</strong> : &gt; 0.95 pour éviter les faces croisées.</li>
        </ul>
        <p>La convergence est validée par trois critères cumulatifs : chute des résidus de 4 ordres de grandeur, stabilisation de C_l et C_d, et bilan de masse &lt; 0.1%.</p>
        <p>Pour visualiser les vortex en 3D, on utilise le <strong>Critère Q de Hunt</strong> :</p>
        <p style="text-align:center;font-family:monospace;background:#f8fafc;padding:.5rem 1rem;border-radius:4px;border:1px solid #e2e8f0;">Q = ½ (‖Ω‖² - ‖S‖²) &gt; 0</p>
        <p>Une iso-surface Q &gt; 0 délimite les régions où la rotation du fluide domine le cisaillement — ce sont précisément les cœurs de vortex.</p>
      `,
      exercises: [
        {
          num: 1,
          title: "Analyse quantitative du saut volumique (Growth Rate) sur 10 couches",
          statement: `
            <p>Un ingénieur maille la couche limite d'un diffuseur. La première couche prismatique a un volume <em>V₁ = 1.0 × 10⁻⁹ m³</em>.</p>
            <p><strong>Questions :</strong></p>
            <ol>
              <li>Calculer le volume de la 10ème couche (V₁₀) pour un taux de croissance <em>r = 1.20</em> (recommandé).</li>
              <li>Refaire le calcul pour <em>r = 1.50</em> (mauvaise pratique). Comparer les deux résultats.</li>
              <li>Un gradient de pression adverse (Adverse Pressure Gradient) est présent dans le diffuseur. Expliquer qualitativement pourquoi un grand saut volumique est particulièrement dangereux dans ce contexte.</li>
            </ol>
          `,
          hints: [
            "Le volume de la nième couche suit une loi géométrique : V_n = V₁ × r^(n-1). Pour la 10ème couche, n = 10, donc V₁₀ = V₁ × r⁹.",
            "Pour comparer les deux cas, calculez le ratio V₁₀(r=1.50) / V₁₀(r=1.20). Ce ratio vous donnera directement le facteur de différence.",
            "Un gradient de pression adverse signifie que la pression augmente dans le sens de l'écoulement. Les gradients de pression sont précisément interpolés entre les centres de mailles — un saut volumique brutal augmente l'erreur de troncature de cet interpolant."
          ],
          solution: `
            <p><strong>1. Volume de la 10ème couche avec r = 1.20 :</strong></p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">V₁₀ = 1.0×10⁻⁹ × (1.20)⁹ = 1.0×10⁻⁹ × 5.160 = <strong>5.16 × 10⁻⁹ m³</strong></p>

            <p><strong>2. Volume de la 10ème couche avec r = 1.50 :</strong></p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">V₁₀ = 1.0×10⁻⁹ × (1.50)⁹ = 1.0×10⁻⁹ × 38.44 = <strong>38.44 × 10⁻⁹ m³</strong></p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">Ratio : 38.44 / 5.16 = <strong>7.45</strong> → la cellule est 7.5 fois plus grande !</p>

            <p><strong>3. Conséquences sur un gradient de pression adverse :</strong></p>
            <p>Dans un diffuseur, ∂p/∂x &gt; 0 : l'écoulement décélère. Le solveur interpole le gradient de pression en faisant la différence de pression entre centres de mailles voisines, puis divise par la distance. Si ces mailles ont des volumes très différents, les centres ne sont pas équidistants et la distance interpolée est fausse → erreur de troncature d'ordre 1 au lieu d'ordre 2 → les résidus stagnent et le décollement peut être prédit au mauvais endroit.</p>
          `
        },
        {
          num: 2,
          title: "Calcul et validation de l'imbalance de masse d'une simulation 3D",
          statement: `
            <p>Après convergence d'une simulation du plancher F1 3D, le solveur rapporte les bilans de masse suivants sur les frontières du domaine :</p>
            <ul>
              <li>Entrée (Velocity Inlet) : ṁ<sub>in</sub> = +45.20 kg/s</li>
              <li>Sortie (Pressure Outlet) : ṁ<sub>out</sub> = −45.18 kg/s</li>
              <li>Parois (No-slip Wall) : ṁ<sub>wall</sub> = 0 kg/s</li>
            </ul>
            <p><strong>Questions :</strong></p>
            <ol>
              <li>Calculer l'imbalance de masse totale (en kg/s et en %).</li>
              <li>Cette simulation est-elle validée du point de vue de la conservation de la masse ? Justifier.</li>
              <li>Si C_l est stable à 1.23 ± 0.0003 sur 300 itérations, la convergence est-elle suffisante pour un rapport de performance aéro ?</li>
            </ol>
          `,
          hints: [
            "L'imbalance de masse est la somme algébrique de tous les flux : Imbalance = ṁ_in + ṁ_out + ṁ_wall. Attention aux signes (l'entrée est positive, la sortie est négative).",
            "L'imbalance en % se calcule par rapport au flux entrant : Imbalance % = |Imbalance_kg/s| / ṁ_in × 100. Le critère standard est < 0.1%.",
            "Pour la stabilité de C_l : vérifier si la variation relative de C_l (±0.0003 / 1.23) est suffisamment faible pour l'objectif de précision."
          ],
          solution: `
            <p><strong>1. Imbalance de masse :</strong></p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">Imbalance = ṁ_in + ṁ_out = 45.20 + (-45.18) = +0.02 kg/s</p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">Imbalance % = (0.02 / 45.20) × 100 = <strong>0.044%</strong></p>

            <p><strong>2. Validation de la conservation de la masse :</strong></p>
            <p style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:4px;padding:.5rem .8rem;">✅ 0.044% &lt; 0.1% → Conservation de la masse <strong>validée</strong>.</p>

            <p><strong>3. Convergence de C_l :</strong></p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">Variation relative = 0.0003 / 1.23 = 0.024% &lt; 0.1%</p>
            <p style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:4px;padding:.5rem .8rem;">✅ Variation très faible. Résultat suffisamment stable pour un rapport de performance aéro de bureau d'études F1.</p>
          `
        }
      ],
      cfd_lab: {
        title: "TP CFD 3D Guidé — Plancher F1 & Scripting Java/Python (Star-CCM+ / OpenFOAM & ParaView)",
        steps: [
          { label: "Import géométrie 3D (format STEP)", text: "Dans Star-CCM+ ou 3DX : importer le fichier STEP du plancher F1 (bord de fuite du diffuseur, jupes latérales, conduits venturi). Nettoyer les surfaces non-manifold et vérifier l'étanchéité du volume fermé." },
          { label: "Script de maillage Java (Star-CCM+)", text: "Écrire ou exécuter une macro Java automatisant : (1) surface repair, (2) création des surfaces de contrôle (raffinement x8 sur bords de diffuseur), (3) lancement du Polyhedral Mesher + Prism Layer Mesher (y₁ ≈ 0.008 mm pour V = 70 m/s)." },
          { label: "Configuration OpenFOAM (alternative)", text: "Éditer blockMeshDict pour le domaine de calcul, puis snappyHexMeshDict avec 3 niveaux de raffinement : niveau 3 sur le plancher (1.5 mm), niveau 5 sur les bords du diffuseur (0.4 mm), niveau 7 sur les arêtes critiques (0.1 mm)." },
          { label: "Simulation et convergence", text: "Lancer avec k-ω SST, Second Order. Surveiller : (1) résidus continuité < 10⁻⁴, (2) C_l variation < 0.001 sur 200 iter, (3) imbalance masse < 0.1%. Ne pas arrêter avant que les 3 critères soient simultanément remplis." },
          { label: "Post-traitement Python — Critère Q (pvpython)", text: "Exécuter le script Python dans ParaView : Filters > Python Calculator → entrer Q = 0.5*(vorticity_mag**2 - strain_rate_mag**2). Créer une iso-surface Q = 10 000 s⁻². Colorer par la vitesse absolue U. Observer le vortex de bord du plancher (Floor Edge Vortex)." }
        ]
      },
      references: [
        { name: "OpenFOAM Official User Guide & Mesh Quality Rules", url: "https://www.openfoam.com/documentation/user-guide" },
        { name: "ParaView Documentation & Python VTK Scripting Guide", url: "https://www.paraview.org/documentation/" },
        { name: "Siemens Star-CCM+ Simulation Automation Resource", url: "https://plm.sw.siemens.com/" }
      ]
    },
    quiz: [
      { question: "Pour r = 1.50, le volume de la 10ème couche (V₁ = 10⁻⁹ m³) est :", options: ["A. 38.4 × 10⁻⁹ m³ (saut de ×7.5 vs r=1.20)", "B. 5.16 × 10⁻⁹ m³", "C. 1.5 × 10⁻⁹ m³", "D. Identique à r = 1.20"], correct: 0, explanation: "V₁₀ = 10⁻⁹ × (1.5)⁹ = 38.4×10⁻⁹ m³ contre 5.16×10⁻⁹ pour r=1.20, soit un facteur 7.5." },
      { question: "Qu'est-ce que le Critère Q de Hunt permet de visualiser en 3D ?", options: ["A. Les cœurs de structures tourbillonnaires (vortex) où la rotation domine le cisaillement.", "B. La pression statique sur les parois.", "C. La distribution de Y+ sur le maillage.", "D. La viscosité turbulente."], correct: 0, explanation: "Q = ½(‖Ω‖² - ‖S‖²) > 0 délimite exactement les zones dominées par la rotation du fluide (vortex)." },
      { question: "Une imbalance de masse de 0.044% dans une simulation 3D est-elle acceptable ?", options: ["A. Oui, car elle est inférieure au critère de 0.1%.", "B. Non, l'imbalance doit être exactement 0.", "C. Non, le critère est 0.001%.", "D. Cela dépend uniquement du modèle de turbulence."], correct: 0, explanation: "Le critère industriel standard est imbalance < 0.1%. 0.044% satisfait donc largement ce critère." }
    ]
  },

  // ─── NIVEAU 4 ────────────────────────────────────────────────────────────
  {
    id: "quest-4", level: 4, badge: "🏆 Niveau 4",
    title: "Full Vehicle F1/WEC 3D — Soufflerie, PIV & Corrélation Piste",
    subtitle: "Triangle de corrélation aéro, correction de blocage en soufflerie, PIV laser 3D et cartographie de l'Aero Balance vs Pitch/Roll.",
    xp: 600, icon: "fa-solid fa-trophy",
    lesson: {
      theory: `
        <p>Le développement aérodynamique moderne F1/WEC repose sur la corrélation fermée entre trois outils : la <strong>CFD numérique</strong>, les essais en <strong>soufflerie à échelle réduite</strong> (60% pour la F1, limité par la FIA), et les mesures en <strong>piste</strong> (données telétrie, peignes de pression Aero Rakes, peinture Flo-Viz).</p>
        <p>En soufflerie, le confinement de la maquette dans la veine d'essai crée un effet de blocage qui augmente artificiellement la vitesse locale et fausse les mesures. Les <strong>corrections de Maskell</strong> permettent de corriger ces biais.</p>
        <p>La <strong>PIV (Particle Image Velocimetry)</strong> est la technique de mesure de référence pour cartographier un champ de vitesse sans contact physique. Un plan laser pulsé illumine des micro-particules injectées dans l'écoulement, et une caméra rapide calcule leur déplacement entre deux impulsions successives.</p>
      `,
      exercises: [
        {
          num: 1,
          title: "Calcul de la correction de blocage en soufflerie (méthode de Maskell simplifiée)",
          statement: `
            <p>Une maquette à 60% d'une Hypercar WEC est testée en soufflerie. Les paramètres géométriques sont :</p>
            <ul>
              <li>Section frontale de la maquette : A<sub>m</sub> = 0.65 m²</li>
              <li>Section de la veine d'essai : C = 12.0 m²</li>
              <li>Vitesse de consigne mesurée en entrée de veine : U<sub>mesurée</sub> = 50.0 m/s</li>
              <li>Traînée mesurée brute sur la balance : F<sub>D,brut</sub> = 210 N</li>
            </ul>
            <p><strong>Questions :</strong></p>
            <ol>
              <li>Calculer le taux de blocage solide ε<sub>s</sub> = A<sub>m</sub> / C. La soufflerie est-elle dans la plage acceptable (ε<sub>s</sub> &lt; 7.5%) ?</li>
              <li>Calculer la vitesse corrigée du blocage : U<sub>c</sub> = U<sub>mesurée</sub> × (1 + ε<sub>s</sub>).</li>
              <li>La traînée est proportionnelle à V². Calculer la traînée corrigée F<sub>D,corr</sub> = F<sub>D,brut</sub> × (U<sub>mesurée</sub> / U<sub>c</sub>)².</li>
            </ol>
          `,
          hints: [
            "Le taux de blocage est simplement le rapport de la section frontale de la maquette sur la section de la veine. Un taux > 7.5% signifie que la maquette est trop grande pour la veine et les corrections ne sont plus fiables.",
            "La correction de vitesse vient du fait que l'air doit accélérer pour contourner la maquette dans le confinement de la veine. La vitesse locale autour de la maquette est plus élevée qu'en absence de confinement.",
            "La traînée est proportionnelle à V² (F_D = ½ ρ V² C_D S). Si la vitesse réelle est U_c et non U_mesurée, le C_D calculé avec U_mesurée est surestimé. La correction ramène la traînée à sa vraie valeur."
          ],
          solution: `
            <p><strong>1. Taux de blocage solide :</strong></p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">ε_s = A_m / C = 0.65 / 12.0 = <strong>0.0542 = 5.42%</strong></p>
            <p style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:4px;padding:.5rem .8rem;">✅ 5.42% &lt; 7.5% → blocage acceptable. Les corrections sont fiables.</p>

            <p><strong>2. Vitesse corrigée :</strong></p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">U_c = 50.0 × (1 + 0.0542) = 50.0 × 1.0542 = <strong>52.71 m/s</strong></p>

            <p><strong>3. Traînée corrigée :</strong></p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">F_D,corr = 210 × (50.0 / 52.71)² = 210 × (0.9486)² = 210 × 0.8998 = <strong>188.9 N</strong></p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">Réduction de la traînée : (210 - 188.9) / 210 × 100 = <strong>-10.1%</strong></p>
            <p style="background:#fef9c3;border:1px solid #fde047;border-radius:4px;padding:.5rem .8rem;margin-top:.5rem;">⚠️ Sans correction, la traînée serait surestimée de 10% — une erreur significative pour des décisions de développement aéro !</p>
          `
        },
        {
          num: 2,
          title: "Cartographie de l'Aero Balance en fonction du Pitch (assiette longitudinale)",
          statement: `
            <p>Les simulations CFD d'une monoplace F1 à V = 300 km/h donnent les résultats suivants pour différentes assiettes longitudinales :</p>
            <table style="width:100%;border-collapse:collapse;font-size:.82rem;margin:.5rem 0;">
              <thead><tr style="background:#f8fafc;"><th style="border:1px solid #e2e8f0;padding:.3rem .6rem;">Pitch (°)</th><th style="border:1px solid #e2e8f0;padding:.3rem .6rem;">F_z,front (N)</th><th style="border:1px solid #e2e8f0;padding:.3rem .6rem;">F_z,rear (N)</th></tr></thead>
              <tbody>
                <tr><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">0.0°</td><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">5 100</td><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">7 800</td></tr>
                <tr style="background:#f8fafc;"><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">0.5°</td><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">4 900</td><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">8 200</td></tr>
                <tr><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">1.0°</td><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">4 650</td><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">8 500</td></tr>
                <tr style="background:#f8fafc;"><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">1.5°</td><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">4 300</td><td style="border:1px solid #e2e8f0;padding:.3rem .6rem;text-align:center;">8 750</td></tr>
              </tbody>
            </table>
            <p><strong>Questions :</strong></p>
            <ol>
              <li>Calculer l'Aero Balance (%) pour chaque point de Pitch.</li>
              <li>Calculer la sensibilité de l'Aero Balance au Pitch : ΔAero Balance / ΔPitch (en %/°).</li>
              <li>Quelle est la conséquence sur le comportement dynamique si la voiture cabre de 1.5° en freinage fort ?</li>
            </ol>
          `,
          hints: [
            "Calculez l'appui total = front + rear pour chaque ligne, puis Aero Balance % = (front / total) × 100.",
            "La sensibilité est la pente linéaire : (AB_1.5° - AB_0°) / (1.5 - 0). Exprimez-la en %/°.",
            "Plus l'Aero Balance diminue (report vers l'arrière), plus l'avant est sous-chargé. Cela signifie moins de grip en freinage/entrée de virage pour l'essieu avant."
          ],
          solution: `
            <p><strong>1. Tableau de l'Aero Balance :</strong></p>
            <table style="width:100%;border-collapse:collapse;font-size:.82rem;margin:.3rem 0;">
              <thead><tr style="background:#f8fafc;"><th style="border:1px solid #e2e8f0;padding:.25rem .5rem;">Pitch</th><th style="border:1px solid #e2e8f0;padding:.25rem .5rem;">Total (N)</th><th style="border:1px solid #e2e8f0;padding:.25rem .5rem;">AB (%)</th></tr></thead>
              <tbody>
                <tr><td style="border:1px solid #e2e8f0;padding:.25rem .5rem;text-align:center;">0.0°</td><td style="border:1px solid #e2e8f0;padding:.25rem .5rem;text-align:center;">12 900</td><td style="border:1px solid #e2e8f0;padding:.25rem .5rem;text-align:center;font-weight:600;">39.5%</td></tr>
                <tr style="background:#f8fafc;"><td style="border:1px solid #e2e8f0;padding:.25rem .5rem;text-align:center;">0.5°</td><td style="border:1px solid #e2e8f0;padding:.25rem .5rem;text-align:center;">13 100</td><td style="border:1px solid #e2e8f0;padding:.25rem .5rem;text-align:center;font-weight:600;">37.4%</td></tr>
                <tr><td style="border:1px solid #e2e8f0;padding:.25rem .5rem;text-align:center;">1.0°</td><td style="border:1px solid #e2e8f0;padding:.25rem .5rem;text-align:center;">13 150</td><td style="border:1px solid #e2e8f0;padding:.25rem .5rem;text-align:center;font-weight:600;">35.4%</td></tr>
                <tr style="background:#f8fafc;"><td style="border:1px solid #e2e8f0;padding:.25rem .5rem;text-align:center;">1.5°</td><td style="border:1px solid #e2e8f0;padding:.25rem .5rem;text-align:center;">13 050</td><td style="border:1px solid #e2e8f0;padding:.25rem .5rem;text-align:center;font-weight:600;">32.9%</td></tr>
              </tbody>
            </table>

            <p><strong>2. Sensibilité de l'Aero Balance au Pitch :</strong></p>
            <p style="font-family:monospace;background:#f8fafc;padding:.4rem .8rem;border-radius:4px;">Sensibilité = (32.9 - 39.5) / (1.5 - 0) = -6.6 / 1.5 = <strong>-4.4 %/°</strong></p>

            <p><strong>3. Conséquence dynamique en freinage :</strong></p>
            <p>En freinage fort, la voiture cabre (nose-up) d'environ 1.0–1.5°. L'Aero Balance chute de ~6.6% → l'avant perd ~860 N d'appui aérodynamique. La zone de freinage se rétrécit (moins de grip avant), risque de blocage de l'essieu avant avant de rentrer en virage.</p>
          `
        }
      ],
      cfd_lab: {
        title: "TP CFD Guidé — Simulation Full Vehicle 3D (Ansys/3DEXPERIENCE) & Corrélation PIV",
        steps: [
          { label: "Géométrie Full Vehicle", text: "Importer le véhicule 3D complet (Châssis + Ailerons + Plancher + Roues). Configurer les roues en rotation via Moving Reference Frame (MRF) : ω = V/R où R est le rayon de la roue à l'empreinte sol." },
          { label: "Conditions aux limites avancées", text: "Sol : Moving Wall à V_x = 83.33 m/s (300 km/h). Entrée : Velocity Inlet homogène + profil turbulent I = 0.5%, L_t = 0.015 m. Activer la correction de courbure Streamline Curvature du modèle k-ω SST (SST-CC) pour les zones très courbées." },
          { label: "Maillage surfaces complexes", text: "Utiliser la méthode PolyHex-Core dans Ansys Fluent 2024 (ou Polyhedral dans Star-CCM+). Raffinement max sur les bords de fuite d'ailerons (0.3 mm), sur les jantes (1.5 mm) et sur les bords du plancher (0.8 mm)." },
          { label: "Extraction de la matrice Aero Balance", text: "Lancer 4 simulations : Pitch = {0°, 0.5°, 1.0°, 1.5°}. Pour chaque run, extraire F_z,front et F_z,rear par intégration de pression sur les surfaces avant/arrière. Construire la carte Aero Balance = f(Pitch)." },
          { label: "Corrélation PIV / CFD", text: "Superposer le champ de vitesse U_y extrait en CFD dans le plan de la roue avant avec les données PIV de soufflerie (format .csv exporté depuis LaVision DaVis). Calculer l'erreur RMS entre les deux champs : objectif < 5% de U_∞." }
        ]
      },
      references: [
        { name: "SAE International — Motorsport Aerodynamics & Experimental Testing", url: "https://www.sae.org/" },
        { name: "Motorsport Magazine — F1 Technical Analyses & Wind Tunnel Regulations", url: "https://www.motorsportmagazine.com/" }
      ]
    },
    quiz: [
      { question: "Pour A_m = 0.65 m² et C = 12.0 m², quelle est la vitesse corrigée du blocage à partir de U_mesurée = 50 m/s ?", options: ["A. 52.71 m/s", "B. 47.60 m/s", "C. 50.00 m/s", "D. 65.20 m/s"], correct: 0, explanation: "ε_s = 0.65/12.0 = 5.42%. U_c = 50 × (1 + 0.0542) = 52.71 m/s." },
      { question: "Pour Pitch = 1.5° dans le tableau, quelle est l'Aero Balance calculée ?", options: ["A. 32.9%", "B. 39.5%", "C. 45.0%", "D. 58.0%"], correct: 0, explanation: "AB = (4300 / (4300 + 8750)) × 100 = (4300 / 13050) × 100 = 32.9%." },
      { question: "Quelle technique laser cartographie un champ de vitesse sans sonde physique dans l'écoulement ?", options: ["A. PIV (Particle Image Velocimetry)", "B. Pesée sous balance à jauges", "C. Peinture Flo-Viz", "D. Tomographie RX"], correct: 0, explanation: "La PIV suit des micro-particules illuminées par un plan laser pulsé entre deux impulsions pour calculer le champ de déplacement (et donc la vitesse) par corrélation d'images." }
    ]
  }
];

// =========================================================
//  QUEST MANAGER
// =========================================================
class QuestManager {
  constructor() {
    this.storageKey = 'stage_track_quest_v2';
    this.state = this.load();
    this.currentQuest = null;
    this.quizAnswers = {};
  }

  load() {
    try { const s = localStorage.getItem(this.storageKey); if (s) return JSON.parse(s); } catch(e) {}
    return { completedQuests: [], totalXp: 0 };
  }

  save() { localStorage.setItem(this.storageKey, JSON.stringify(this.state)); }

  openQuestModal(questId) {
    const q = QUEST_LEVELS.find(x => x.id === questId);
    if (!q) return;
    this.currentQuest = q;
    this.quizAnswers = {};
    const titleEl = document.getElementById('quest-modal-title');
    if (titleEl) titleEl.innerHTML = `${q.badge} — ${html(q.title)}`;
    this.renderQuestLesson(q);
    this.renderQuestQuiz(q);
    this.switchTab('lesson');
    openModal('modal-learning-lesson');
  }

  renderQuestLesson(q) {
    const container = document.getElementById('quest-tab-lesson');
    if (!container) return;
    const L = q.lesson;

    // --- Theorie intro ---
    let out = `
      <div class="lesson-section-title">
        <span class="lesson-section-num">I</span>
        Rappels Théoriques
      </div>
      <div class="lesson-theory-text">${L.theory}</div>
    `;

    // --- Exercices ---
    out += `<div class="lesson-section-title"><span class="lesson-section-num">II</span>Exercices Détaillés</div>`;

    L.exercises.forEach((ex, ei) => {
      out += `
        <div class="lesson-exercise-block">
          <div class="lesson-exercise-header">
            <span class="lesson-exercise-num">Exercice ${ex.num}</span>
            <span class="lesson-exercise-title">${html(ex.title)}</span>
          </div>
          <div class="lesson-exercise-statement">${ex.statement}</div>

          <!-- Accordion Indices -->
          <div class="lesson-accordion">
            <button class="lesson-accordion-btn" onclick="questManager.toggleAccordion('hints-${q.id}-${ei}')">
              <i class="fa-solid fa-lightbulb"></i> Indices &amp; Tips
              <i class="fa-solid fa-chevron-down lesson-acc-icon" id="icon-hints-${q.id}-${ei}"></i>
            </button>
            <div class="lesson-accordion-body" id="hints-${q.id}-${ei}">
              <ol class="lesson-hint-list">
                ${ex.hints.map(h => `<li>${html(h)}</li>`).join('')}
              </ol>
            </div>
          </div>

          <!-- Accordion Correction -->
          <div class="lesson-accordion">
            <button class="lesson-accordion-btn lesson-accordion-btn--answer" onclick="questManager.toggleAccordion('ans-${q.id}-${ei}')">
              <i class="fa-solid fa-circle-check"></i> Correction détaillée &amp; Application numérique
              <i class="fa-solid fa-chevron-down lesson-acc-icon" id="icon-ans-${q.id}-${ei}"></i>
            </button>
            <div class="lesson-accordion-body" id="ans-${q.id}-${ei}">
              ${ex.solution}
            </div>
          </div>
        </div>
      `;
    });

    // --- TP CFD Lab ---
    out += `
      <div class="lesson-section-title"><span class="lesson-section-num">III</span>${html(L.cfd_lab.title)}</div>
      <div class="lesson-lab-steps">
        ${L.cfd_lab.steps.map((s, si) => `
          <div class="lesson-lab-step">
            <div class="lesson-lab-step-num">${si + 1}</div>
            <div class="lesson-lab-step-body">
              <div class="lesson-lab-step-label">${html(s.label)}</div>
              <div class="lesson-lab-step-text">${html(s.text)}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // --- Références ---
    out += `
      <div class="lesson-refs">
        <div class="lesson-refs-title"><i class="fa-solid fa-link"></i> Sources & Références Fiables</div>
        <ul class="lesson-refs-list">
          ${L.references.map(r => `<li><a href="${html(r.url)}" target="_blank">${html(r.name)} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:.62rem;"></i></a></li>`).join('')}
        </ul>
      </div>
      <div style="display:flex;justify-content:flex-end;margin-top:1.25rem;">
        <button class="btn btn-dark" onclick="questManager.switchTab('quiz')">
          Passer au QCM de Validation <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `;

    container.innerHTML = out;
  }

  toggleAccordion(id) {
    const body = document.getElementById(id);
    const iconId = 'icon-' + id;
    const icon = document.getElementById(iconId);
    if (!body) return;
    const open = body.classList.toggle('open');
    if (icon) icon.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
  }

  renderQuestQuiz(q) {
    const container = document.getElementById('quest-tab-quiz');
    if (!container) return;
    const isDone = this.state.completedQuests.includes(q.id);

    let out = `
      <div style="margin-bottom:1rem;font-size:.84rem;color:var(--text-secondary);">
        Répondez aux questions pour valider ce module et gagner <strong>+${q.xp} XP</strong>.
      </div>
      <form id="quiz-form-${q.id}" onsubmit="event.preventDefault(); questManager.evaluateQuiz('${q.id}');">
    `;

    q.quiz.forEach((item, qIdx) => {
      out += `
        <div class="quiz-question-box" id="q-box-${qIdx}">
          <div style="font-weight:700;font-size:.86rem;margin-bottom:.58rem;color:var(--text-primary);">
            Question ${qIdx + 1} : ${html(item.question)}
          </div>
          <div style="display:flex;flex-direction:column;gap:.4rem;">
            ${item.options.map((opt, oIdx) => `
              <label class="quiz-option-label" id="q-opt-${qIdx}-${oIdx}">
                <input type="radio" name="q_${qIdx}" value="${oIdx}" onchange="questManager.quizAnswers[${qIdx}]=${oIdx}" required>
                <span>${html(opt)}</span>
              </label>
            `).join('')}
          </div>
          <div class="quiz-explanation" id="q-exp-${qIdx}" style="display:none;"></div>
        </div>
      `;
    });

    out += `
        <div style="margin-top:1.25rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem;">
          ${isDone ? `<span class="badge badge-accepted">✅ Module validé (+${q.xp} XP)</span>` : '<span></span>'}
          <button type="submit" class="btn btn-dark">
            <i class="fa-solid fa-check-double"></i> Valider mes réponses
          </button>
        </div>
      </form>
    `;

    container.innerHTML = out;
  }

  switchTab(tabName) {
    const btnLesson = document.getElementById('btn-tab-lesson');
    const btnQuiz   = document.getElementById('btn-tab-quiz');
    const viewLesson= document.getElementById('quest-tab-lesson');
    const viewQuiz  = document.getElementById('quest-tab-quiz');
    if (tabName === 'quiz') {
      btnLesson?.classList.remove('active');
      btnQuiz?.classList.add('active');
      if (viewLesson) viewLesson.style.display = 'none';
      if (viewQuiz)   viewQuiz.style.display   = 'block';
    } else {
      btnQuiz?.classList.remove('active');
      btnLesson?.classList.add('active');
      if (viewQuiz)   viewQuiz.style.display   = 'none';
      if (viewLesson) viewLesson.style.display = 'block';
    }
  }

  evaluateQuiz(questId) {
    const q = QUEST_LEVELS.find(x => x.id === questId);
    if (!q) return;
    let score = 0;
    q.quiz.forEach((item, qIdx) => {
      const selected = this.quizAnswers[qIdx];
      const expEl = document.getElementById(`q-exp-${qIdx}`);
      if (expEl) { expEl.style.display = 'block'; expEl.innerHTML = html(item.explanation); }
      item.options.forEach((_, oIdx) => {
        const optEl = document.getElementById(`q-opt-${qIdx}-${oIdx}`);
        if (optEl) optEl.className = 'quiz-option-label';
      });
      if (selected === item.correct) {
        score++;
        const optEl = document.getElementById(`q-opt-${qIdx}-${selected}`);
        if (optEl) optEl.classList.add('correct');
        if (expEl) expEl.className = 'quiz-explanation success';
      } else {
        if (selected !== undefined) {
          const optEl = document.getElementById(`q-opt-${qIdx}-${selected}`);
          if (optEl) optEl.classList.add('wrong');
        }
        const rightEl = document.getElementById(`q-opt-${qIdx}-${item.correct}`);
        if (rightEl) rightEl.classList.add('correct');
        if (expEl) expEl.className = 'quiz-explanation danger';
      }
    });
    if (score === q.quiz.length && !this.state.completedQuests.includes(q.id)) {
      this.state.completedQuests.push(q.id);
      this.state.totalXp += q.xp;
      this.save();
    }
    const msg = score === q.quiz.length ? `Félicitations ! ${score}/${q.quiz.length} — +${q.xp} XP !` : `Score : ${score}/${q.quiz.length}. Relisez la leçon et réessayez !`;
    showToast(msg, score === q.quiz.length ? 'success' : 'info');
    this.renderRoadmap();
  }

  renderRoadmap() {
    const container = document.getElementById('quest-roadmap-container');
    if (!container) return;
    const completedCount = this.state.completedQuests.length;
    const totalXp = QUEST_LEVELS.reduce((a, c) => a + c.xp, 0);
    const xpPct = Math.round((this.state.totalXp / totalXp) * 100);
    let rank = "🛡️ Stagiaire CFD";
    if (completedCount >= 4) rank = "🏆 Chief Aerodynamicist";
    else if (completedCount >= 3) rank = "🏎️ Aero Performance Specialist";
    else if (completedCount >= 2) rank = "⚔️ Ingénieur Aéro Junior";
    else if (completedCount >= 1) rank = "🚀 Ingénieur CFD Confirmé";
    setText('quest-rank-title', rank);
    setText('quest-xp-text', `${this.state.totalXp} / ${totalXp} XP (${xpPct}%)`);
    const xpBarEl = document.getElementById('quest-xp-bar');
    if (xpBarEl) xpBarEl.style.width = `${xpPct}%`;
    container.innerHTML = '';
    QUEST_LEVELS.forEach((q, idx) => {
      const isDone = this.state.completedQuests.includes(q.id);
      const isUnlocked = idx === 0 || this.state.completedQuests.includes(QUEST_LEVELS[idx-1].id);
      const card = document.createElement('div');
      card.className = `quest-step-card ${isDone ? 'completed' : isUnlocked ? 'unlocked' : 'locked'}`;
      if (isUnlocked) card.onclick = () => this.openQuestModal(q.id);
      card.innerHTML = `
        <div class="quest-step-header">
          <div class="quest-step-badge">${q.badge}</div>
          <div class="quest-step-xp">+${q.xp} XP</div>
        </div>
        <div class="quest-step-title"><i class="${q.icon}" style="margin-right:.4rem;"></i> ${html(q.title)}</div>
        <div class="quest-step-sub">${html(q.subtitle)}</div>
        <div class="quest-step-footer">
          ${isDone ? '<span class="quest-status-tag status-done"><i class="fa-solid fa-circle-check"></i> Module Validé</span>'
                   : isUnlocked ? '<span class="quest-status-tag status-available"><i class="fa-solid fa-play"></i> Ouvrir la Leçon & QCM</span>'
                   : '<span class="quest-status-tag status-locked"><i class="fa-solid fa-lock"></i> Réussir le niveau précédent</span>'}
        </div>
      `;
      container.appendChild(card);
    });
  }
}

let questManager;

// --- Interview Q&A ---
function renderInterviewQA() {
  const container = document.getElementById('qa-container');
  if (!container) return;
  container.innerHTML = '';
  INTERVIEW_QUESTIONS.forEach((q, idx) => {
    const item = document.createElement('div');
    item.className = 'qa-item';
    item.innerHTML = `
      <div class="qa-trigger" onclick="toggleQA(${idx})">
        <div class="qa-trigger-left">
          <div class="qa-category">${html(q.category)}</div>
          <div class="qa-question">${html(q.question)}</div>
        </div>
        <i class="fa-solid fa-chevron-down qa-chevron" id="qa-icon-${idx}"></i>
      </div>
      <div class="qa-answer" id="qa-ans-${idx}">
        <strong style="color:var(--text-primary);">Réponse :</strong><br>${html(q.answer)}
      </div>
    `;
    container.appendChild(item);
  });
}

function toggleQA(idx) {
  const ans  = document.getElementById(`qa-ans-${idx}`);
  const icon = document.getElementById(`qa-icon-${idx}`);
  if (!ans) return;
  const open = ans.style.display === 'block';
  ans.style.display = open ? 'none' : 'block';
  if (icon) icon.classList.toggle('open', !open);
}
