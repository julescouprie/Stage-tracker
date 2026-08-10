// =========================================================
//  Excel Import / Export — SheetJS (StageTrack Pro Light)
// =========================================================

class ExcelSyncManager {
  constructor(trackerInstance) {
    this.tracker = trackerInstance;
  }

  exportToExcel() {
    if (typeof XLSX === 'undefined') {
      showToast("SheetJS non disponible.", 'info');
      return;
    }
    const apps = this.tracker.applications;
    const headers = [
      "Entreprise",
      "Poste / Intitulé du stage",
      "À l'étranger",
      "Domaine d'activité",
      "Durée (mois)",
      "Lieu (Ville, Pays)",
      "Contact - Email",
      "Contact - Téléphone",
      "CV/candidature envoyé",
      "Date d'envoi",
      "Statut",
      "Notes"
    ];
    const rows = apps.map(a => [
      a.company   || '',
      a.position  || '',
      a.abroad    || 'Non',
      a.domain    || 'Sport Auto',
      a.duration  || 4,
      a.location  || '',
      a.email     || '',
      a.phone     || '',
      a.sent      || 'Non',
      a.date      || '',
      a.status    || 'En attente',
      a.notes     || ''
    ]);

    const wb  = XLSX.utils.book_new();
    const ws1 = XLSX.utils.aoa_to_sheet([headers, ...rows]);
    ws1['!cols'] = [
      { wch: 25 }, { wch: 35 }, { wch: 12 }, { wch: 18 },
      { wch: 12 }, { wch: 22 }, { wch: 25 }, { wch: 18 },
      { wch: 12 }, { wch: 14 }, { wch: 15 }, { wch: 40 }
    ];
    XLSX.utils.book_append_sheet(wb, ws1, 'Suivi candidatures');

    const legendRows = [
      ['Colonne', 'Explication'],
      ['Entreprise', "Nom de l'entreprise ou de l'écurie contactée."],
      ['Poste / Intitulé du stage', "Titre exact du stage (ex: Stagiaire aérodynamicien CFD)."],
      ['À l\'étranger', 'Oui / Non'],
      ['Domaine d\'activité', 'Sport Auto / Aéronautique / Automobile / Autre'],
      ['Durée (mois)', 'Durée du stage en mois (4 mois obligatoires ESTACA).'],
      ['Lieu (Ville, Pays)', 'Localisation du poste.'],
      ['Contact - Email', 'Adresse mail du recruteur ou du service RH.'],
      ['Contact - Téléphone', 'Numéro de téléphone du contact.'],
      ['CV/candidature envoyé', 'Oui / Non'],
      ['Date d\'envoi', 'Date de candidature (AAAA-MM-JJ).'],
      ['Statut', 'En attente / Entretien / À relancer / Accepté / Refusé.'],
      ['Notes', 'Relances prévues, retour d\'entretien, remarques diverses.']
    ];
    const ws2 = XLSX.utils.aoa_to_sheet(legendRows);
    XLSX.utils.book_append_sheet(wb, ws2, 'Légende');

    XLSX.writeFile(wb, 'suivi_stage_Jules_COUPRIE.xlsx');
    showToast('Fichier suivi_stage_Jules_COUPRIE.xlsx exporté !', 'success');
  }

  importFromFile(file) {
    if (typeof XLSX === 'undefined') {
      showToast("SheetJS non disponible.", 'info');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const wb  = XLSX.read(new Uint8Array(e.target.result), { type: 'array' });
        const ws  = wb.Sheets[wb.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(ws, { header: 1 });

        if (rows.length < 2) {
          showToast("Fichier vide ou format invalide.", 'info');
          return;
        }

        const headers = rows[0].map(h => String(h).trim().toLowerCase());

        const getVal = (row, possibles) => {
          for (const name of possibles) {
            const idx = headers.findIndex(h => h.includes(name));
            if (idx !== -1 && row[idx] !== undefined && row[idx] !== null) {
              return String(row[idx]).trim();
            }
          }
          return '';
        };

        const imported = [];
        for (let i = 1; i < rows.length; i++) {
          const row = rows[i];
          if (!row || !row[0]) continue;
          const company = getVal(row, ['entreprise', 'company', 'écurie']);
          if (!company) continue;
          imported.push({
            id:       'app-imp-' + i + '-' + Date.now(),
            company:  company,
            position: getVal(row, ['poste', 'intitulé', 'titre', 'title'])    || 'Stagiaire Ingénieur',
            abroad:   getVal(row, ['étranger', 'abroad'])                      || 'Non',
            domain:   getVal(row, ['domaine', 'secteur'])                      || 'Sport Auto',
            duration: parseInt(getVal(row, ['durée', 'duration']))             || 4,
            location: getVal(row, ['lieu', 'ville', 'location'])               || '',
            email:    getVal(row, ['email', 'contact - email', 'mail'])        || '',
            phone:    getVal(row, ['téléphone', 'phone', 'tel'])               || '',
            sent:     getVal(row, ['envoyé', 'candidature envoyé', 'sent'])    || 'Oui',
            date:     getVal(row, ['date'])                                    || '',
            status:   getVal(row, ['statut', 'status'])                        || 'En attente',
            notes:    getVal(row, ['notes', 'remarques', 'commentaires'])      || ''
          });
        }

        if (imported.length > 0) {
          this.tracker.applications = imported;
          this.tracker.saveAndRender();
          showToast(`${imported.length} candidatures importées !`, 'success');
        } else {
          showToast("Aucune donnée valide trouvée dans le fichier.", 'info');
        }
      } catch (err) {
        console.error(err);
        showToast("Erreur lors de la lecture du fichier.", 'info');
      }
    };
    reader.readAsArrayBuffer(file);
  }
}
