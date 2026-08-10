// =========================================================
//  StageTrack Pro — Configuration & Données initiales
//  Jules COUPRIE — ESTACA Aérodynamique & CFD
//
//  CONVENTIONS CRM :
//    type: "person"  → Contact individuel nommé (ingénieur, alumni, RH nommé)
//    type: "org"     → Service RH / Point de contact entreprise (email générique)
//    linkedin: null  → Aucun lien vérifié — ne pas afficher
//    linkedin: "https://..." → Lien vérifié par recherche web
// =========================================================

const INITIAL_APPLICATIONS = [
  {
    id: "app-1",
    company: "Alpine F1 Team",
    position: "Stagiaire Ingénieur CFD",
    abroad: "Oui",
    domain: "Sport Auto",
    duration: 4,
    location: "Enstone, Royaume-Uni",
    email: "recruitment@alpinef1.com",
    phone: "+44 1608 678000",
    sent: "Oui",
    date: "2026-02-01",
    status: "En attente",
    notes: "Relancer mi-mars si pas de réponse. Contact LinkedIn : Yannick Ducret (Head of Aero)."
  },
  {
    id: "app-2",
    company: "Peugeot Sport",
    position: "Stagiaire Aérodynamique Hypercar WEC",
    abroad: "Non",
    domain: "Sport Auto",
    duration: 4,
    location: "Satory (Versailles), France",
    email: "rh-peugeot-sport@stellantis.com",
    phone: "+33 1 30 70 20 00",
    sent: "Oui",
    date: "2026-02-05",
    status: "Entretien",
    notes: "Entretien technique le 18 février avec le Responsable CFD. Réviser modèles RANS k-omega SST."
  },
  {
    id: "app-3",
    company: "Sauber Motorsport / Audi F1",
    position: "Junior CFD Aerodynamicist Intern",
    abroad: "Oui",
    domain: "Sport Auto",
    duration: 6,
    location: "Hinwil, Suisse",
    email: "careers@sauber-group.com",
    phone: "+41 44 937 9000",
    sent: "Oui",
    date: "2026-02-08",
    status: "En attente",
    notes: "Postulé sur le portail Audi Motorsport. Stage de 6 mois compatible avec césure."
  },
  {
    id: "app-4",
    company: "Airbus Commercial Aircraft",
    position: "Stagiaire CFD & Modélisation de la Turbulence",
    abroad: "Non",
    domain: "Aéronautique",
    duration: 4,
    location: "Toulouse, France",
    email: "recrutement@airbus.com",
    phone: "",
    sent: "Non",
    date: "",
    status: "À relancer",
    notes: "Contacter Thomas Leroy (Alumni ESTACA) en priorité via LinkedIn."
  },
  {
    id: "app-5",
    company: "Dallara Automobili",
    position: "Aerodynamics & CFD Engineering Intern",
    abroad: "Oui",
    domain: "Sport Auto",
    duration: 4,
    location: "Varano de' Melegari, Italie",
    email: "hr@dallara.it",
    phone: "+39 0525 550711",
    sent: "Oui",
    date: "2026-01-20",
    status: "Refusé",
    notes: "Postes déjà pourvus pour le S1. Relancer pour S2 ou PFE."
  }
];

// =========================================================
//  CRM — Annuaire des contacts
//
//  Champs clés :
//    type      : "person" | "org"
//    linkedin  : URL vérifiée par recherche web, ou null
//    source    : "LinkedIn" | "Direct" | "Alumni ESTACA" | "Recommandation"
// =========================================================
const TARGET_COMPANIES = [

  // ────────────────────────────────────────────────────────
  //  CONTACTS INDIVIDUELS — Personnes identifiées (LinkedIn)
  //  (Source : screenshot LinkedIn fourni par l'utilisateur)
  // ────────────────────────────────────────────────────────

  {
    id: "crm-li-1",
    type: "person",
    name: "Chris Bull",
    company: "Motorsport / F1 (consultant)",
    sector: "Sport Auto (Formule 1)",
    location: "Southam, Angleterre, Royaume-Uni",
    contactName: "Chris Bull",
    role: "Chief Aerodynamicist",
    email: null,
    phone: null,
    // Profil identifié comme réel (ex-Alpine/Renault, Brawn GP, Mercedes)
    // Aucune URL /in/ publiquement vérifiable sans compte LinkedIn connecté
    linkedin: null,
    source: "LinkedIn",
    status: "À contacter",
    notes: "Aérodynamicien senior F1 (ex-Alpine, Brawn GP, Mercedes). 6k abonnés LinkedIn. Visible dans le réseau de Jules. Relations communes : Diego Tondi, Damien FAVRE.",
    favorite: false,
    initials: "CB"
  },
  {
    id: "crm-li-2",
    type: "person",
    name: "Damien FAVRE",
    company: "Great Wall Motor / Porsche Motorsport (ex)",
    sector: "Automobile",
    location: "France",
    contactName: "Damien FAVRE",
    role: "Director of Aerodynamics & Lead Aero Development",
    email: null,
    phone: null,
    // Présent dans le réseau LinkedIn de Jules. Ex-Porsche Motorsport
    // (Aerodynamics Performance Manager). URL /in/ non publiée publiquement.
    linkedin: null,
    source: "LinkedIn",
    status: "À contacter",
    notes: "Ex-Porsche Motorsport (Aerodynamics Performance Manager). Actuellement chez Great Wall Motor. Réseau F1/Motorsport très dense. Relation 1er degré.",
    favorite: false,
    initials: "DF"
  },
  {
    id: "crm-li-3",
    type: "person",
    name: "James Holland",
    company: "Formule 1 — Équipe non précisée",
    sector: "Sport Auto (Formule 1)",
    location: "Northampton, Angleterre, Royaume-Uni",
    contactName: "James Holland",
    role: "Formula One Aerodynamicist",
    email: null,
    phone: null,
    // Profil vu dans réseau de Jules. URL /in/ non vérifiable publiquement.
    linkedin: null,
    source: "LinkedIn",
    status: "À contacter",
    notes: "Aérodynamicien F1 basé à Northampton (Motorsport Valley UK). Relation 1er degré. Contacter via messagerie LinkedIn directe.",
    favorite: false,
    initials: "JH"
  },
  {
    id: "crm-li-4",
    type: "person",
    name: "Yannick Ducret",
    company: "Alpine F1 Team",
    sector: "Sport Auto (Formule 1)",
    location: "Oxford, Royaume-Uni",
    contactName: "Yannick Ducret",
    role: "Head of Aero — Performance & Science",
    email: null,
    phone: null,
    // Confirmé : ex-Williams Head of Aero Performance → rejoint Alpine F1 fin 2023
    // (sources : Williams Racing, F1Technical, Wikipedia). URL /in/ non publiée.
    linkedin: null,
    source: "LinkedIn",
    status: "En discussion",
    notes: "Confirmé Head of Aero chez Alpine F1 (ex-Williams). Contact CLEF pour stage CFD. Relation 1er degré dans réseau de Jules. Écrire via LinkedIn message.",
    favorite: true,
    initials: "YD"
  },
  {
    id: "crm-li-5",
    type: "person",
    name: "Maxime Duquenne",
    company: "ESTACA / Projet CMIX",
    sector: "Sport Auto (Formula Student)",
    location: "France",
    contactName: "Maxime Duquenne",
    role: "Étudiant Ingénieur ESTACA — Projet CMIX",
    email: null,
    phone: null,
    linkedin: null,
    source: "LinkedIn",
    status: "Alumni / Réseau ESTACA",
    notes: "Étudiant ESTACA. Relation directe projet CMIX. 100+ relations en commun. Excellent relai réseau Motorsport & industrie.",
    favorite: false,
    initials: "MD"
  },
  {
    id: "crm-li-6",
    type: "person",
    name: "Richard Cree CEng",
    company: "Motorsport / Aéronautique UK",
    sector: "Sport Auto (Formule 1)",
    location: "Frimley, Surrey, Royaume-Uni",
    contactName: "Richard Cree CEng",
    role: "Aerodynamics Design Project Leader",
    email: null,
    phone: null,
    // Profil visible dans réseau de Jules. URL /in/ non vérifiable publiquement.
    linkedin: null,
    source: "LinkedIn",
    status: "À contacter",
    notes: "Ingénieur qualifié CEng. Aerodynamics Design Project Leader. Relations communes : Chris Bull, Mark Lane. Contacter via LinkedIn message.",
    favorite: false,
    initials: "RC"
  },
  {
    id: "crm-li-7",
    type: "person",
    name: "Michael Georgallis",
    company: "CAD Tech / R&D Motorsport UK",
    sector: "Sport Auto (Formule 1)",
    location: "Maidenhead, Berkshire, Royaume-Uni",
    contactName: "Michael Georgallis",
    role: "Senior Manager — Aerodynamics Design Leader (CAD Tech & R&D)",
    email: null,
    phone: null,
    // Profil visible dans réseau de Jules. URL /in/ non vérifiable publiquement.
    linkedin: null,
    source: "LinkedIn",
    status: "À contacter",
    notes: "Senior Manager Aero Design dans tissu R&D F1 UK. Profil CAD Tech & R&D. Relations communes : Chris Bull, Mark Lane. Contacter via LinkedIn.",
    favorite: false,
    initials: "MG"
  },
  {
    id: "crm-li-8",
    type: "person",
    name: "Marcello Gentile",
    company: "Scuderia Ferrari",
    sector: "Sport Auto (Formule 1)",
    location: "Modène et périphérie, Italie",
    contactName: "Marcello Gentile",
    role: "Aerodynamicist — Département Aérodynamique",
    email: null,
    phone: null,
    // Confirmé dans l'organigramme Ferrari (theorg.com).
    // 13k abonnés LinkedIn. URL /in/ non publiée publiquement.
    linkedin: null,
    source: "LinkedIn",
    status: "À contacter",
    notes: "Confirmé dans le département Aérodynamique de Scuderia Ferrari (Maranello). 13k abonnés. Relations communes : Chris Bull, Diego Tondi. Contact via LinkedIn.",
    favorite: true,
    initials: "MG"
  },

  // ────────────────────────────────────────────────────────
  //  SERVICES RH / POINTS DE CONTACT ENTREPRISES — F1
  //  (Liens LinkedIn des pages entreprises vérifiés)
  // ────────────────────────────────────────────────────────

  {
    id: "crm-f1-1",
    type: "org",
    name: "Alpine F1 Team",
    company: "Alpine F1 Team",
    sector: "Sport Auto (Formule 1)",
    location: "Enstone, Oxfordshire, Royaume-Uni",
    contactName: "Service Recrutement Technique",
    role: "Talent Acquisition — Aerodynamics / CFD Intern",
    email: "recruitment@alpinef1.com",
    phone: "+44 1608 678000",
    // Vérifié : linkedin.com/company/alpine-formula-one-team
    linkedin: "https://www.linkedin.com/company/alpine-formula-one-team",
    source: "Direct",
    status: "En discussion",
    notes: "Page carrières active sur LinkedIn. Contacter aussi Yannick Ducret (Head of Aero, dans réseau). Mentionner Star-CCM+ et OpenFOAM.",
    favorite: true,
    initials: "AF"
  },
  {
    id: "crm-f1-2",
    type: "org",
    name: "Red Bull Racing",
    company: "Red Bull Racing",
    sector: "Sport Auto (Formule 1)",
    location: "Milton Keynes, Royaume-Uni",
    contactName: "Graduate Recruitment",
    role: "Aerodynamics Graduate / Intern",
    email: "graduates@redbullracing.com",
    phone: "+44 1908 279700",
    // Vérifié : linkedin.com/company/red-bull-racing
    linkedin: "https://www.linkedin.com/company/red-bull-racing",
    source: "Direct",
    status: "À contacter",
    notes: "Portail carrières actif. Stage CFD très compétitif. Dossier : CV + portfolio + lettre en anglais centrée sur expériences numériques.",
    favorite: false,
    initials: "RB"
  },
  {
    id: "crm-f1-3",
    type: "org",
    name: "Mercedes-AMG Petronas F1",
    company: "Mercedes-AMG Petronas F1",
    sector: "Sport Auto (Formule 1)",
    location: "Brackley, Northamptonshire, Royaume-Uni",
    contactName: "Early Careers Team",
    role: "CFD Placement Student / Intern",
    email: "careers@mercedes-amgf1.com",
    phone: "+44 1280 844000",
    // Vérifié : linkedin.com/company/mercedes-amg-petronas-f1-team
    linkedin: "https://www.linkedin.com/company/mercedes-amg-petronas-f1-team",
    source: "Direct",
    status: "À contacter",
    notes: "Programme de stages CFD bien structuré. Candidater via le portail officiel. Délais courts — candidater dès que possible.",
    favorite: false,
    initials: "MW"
  },
  {
    id: "crm-f1-4",
    type: "org",
    name: "Aston Martin Aramco F1",
    company: "Aston Martin Aramco F1",
    sector: "Sport Auto (Formule 1)",
    location: "Silverstone, Northamptonshire, Royaume-Uni",
    contactName: "HR Engineering",
    role: "Aerodynamics Intern",
    email: "careers@astonmartinf1.com",
    phone: null,
    linkedin: "https://www.linkedin.com/company/aston-martin-formula-one-team",
    source: "Direct",
    status: "À contacter",
    notes: "Nouvelle usine ultramoderne en construction. Équipe en forte expansion. Opportunités croissantes.",
    favorite: false,
    initials: "AM"
  },
  {
    id: "crm-f1-5",
    type: "org",
    name: "Scuderia Ferrari — RH",
    company: "Scuderia Ferrari",
    sector: "Sport Auto (Formule 1)",
    location: "Maranello, Italie",
    contactName: "Ufficio Risorse Umane",
    role: "Stage Ingénieur Aérodynamique",
    email: "careers@ferrari.com",
    phone: "+39 0536 949111",
    // Vérifié : linkedin.com/company/scuderia-ferrari
    linkedin: "https://www.linkedin.com/company/scuderia-ferrari",
    source: "Direct",
    status: "À contacter",
    notes: "Contact individuel Marcello Gentile (Aerodynamicist, dans réseau LinkedIn). Candidature en anglais ou en italien.",
    favorite: false,
    initials: "SF"
  },
  {
    id: "crm-f1-6",
    type: "org",
    name: "Sauber Motorsport / Audi F1 — RH",
    company: "Sauber Motorsport",
    sector: "Sport Auto (Formule 1)",
    location: "Hinwil, Suisse",
    contactName: "HR Motorsport",
    role: "Junior CFD Aerodynamicist Intern",
    email: "careers@sauber-group.com",
    phone: "+41 44 937 9000",
    linkedin: "https://www.linkedin.com/company/sauber-motorsport",
    source: "Direct",
    status: "En discussion",
    notes: "Stage de 6 mois possible (compatible césure). Lettre en anglais axée Star-CCM+. Transition vers marque Audi en cours.",
    favorite: false,
    initials: "SA"
  },
  {
    id: "crm-f1-7",
    type: "org",
    name: "Williams Racing — RH",
    company: "Williams Racing",
    sector: "Sport Auto (Formule 1)",
    location: "Grove, Oxfordshire, Royaume-Uni",
    contactName: "Technical Placements",
    role: "CFD / Aerodynamics Placement",
    email: "engineering.placements@williamsf1.com",
    phone: "+44 1235 777700",
    // Vérifié : linkedin.com/company/williams-racing
    linkedin: "https://www.linkedin.com/company/williams-racing",
    source: "Direct",
    status: "À contacter",
    notes: "Programme placements ingénierie solide. Axer sur compétences Python et post-traitement CFD.",
    favorite: false,
    initials: "WR"
  },
  {
    id: "crm-f1-8",
    type: "org",
    name: "Haas F1 Team — RH",
    company: "Haas F1 Team",
    sector: "Sport Auto (Formule 1)",
    location: "Banbury, Oxfordshire, Royaume-Uni",
    contactName: "Technical Recruitment",
    role: "Aerodynamics Intern",
    email: "hr@haasf1team.com",
    phone: null,
    // Vérifié : linkedin.com/company/haas-f1-team
    linkedin: "https://www.linkedin.com/company/haas-f1-team",
    source: "Direct",
    status: "À contacter",
    notes: "Petite structure, stagiaires ont plus de responsabilités. Bon point d'entrée dans le milieu F1.",
    favorite: false,
    initials: "HF"
  },

  // ────────────────────────────────────────────────────────
  //  SERVICES RH — WEC / ENDURANCE
  // ────────────────────────────────────────────────────────

  {
    id: "crm-wec-1",
    type: "org",
    name: "Peugeot Sport — RH",
    company: "Peugeot Sport (Stellantis)",
    sector: "Sport Auto (WEC / Hypercar)",
    location: "Satory (Versailles), France",
    contactName: "Service RH Peugeot Sport",
    role: "Stagiaire Ingénieur Aérodynamique",
    email: "rh-peugeot-sport@stellantis.com",
    phone: "+33 1 30 70 20 00",
    // Vérifié : linkedin.com/company/peugeot-sport
    linkedin: "https://www.linkedin.com/company/peugeot-sport",
    source: "Direct",
    status: "Entretien prévu",
    notes: "Entretien calé. Réviser les modèles turb. pour géométries complexes Hypercar. Réseau actif.",
    favorite: true,
    initials: "PS"
  },
  {
    id: "crm-wec-2",
    type: "org",
    name: "Oreca Motorsport — RH",
    company: "Oreca",
    sector: "Sport Auto (WEC / LMP2)",
    location: "Signes (Circuit Paul Ricard), France",
    contactName: "Service Recrutement R&D",
    role: "Stagiaire CFD / Aérodynamique",
    email: "contact@oreca.fr",
    phone: "+33 4 94 88 57 57",
    linkedin: "https://www.linkedin.com/company/oreca-motorsport",
    source: "Direct",
    status: "À contacter",
    notes: "Leader en LMP2 et LMDh. Département CFD actif. Excellent ratio stage/responsabilités.",
    favorite: false,
    initials: "OR"
  },
  {
    id: "crm-wec-3",
    type: "org",
    name: "Toyota Gazoo Racing Europe — RH",
    company: "Toyota Gazoo Racing",
    sector: "Sport Auto (WEC / Hypercar)",
    location: "Cologne, Allemagne",
    contactName: "TGRE HR Department",
    role: "Aerodynamics / CFD Intern",
    email: "tgre.hr@toyota-europe.com",
    phone: "+49 221 35700",
    linkedin: "https://www.linkedin.com/company/toyota-gazoo-racing",
    source: "Direct",
    status: "À contacter",
    notes: "Championnes WEC en titre. Programme aéro avancé sur GR010 Hypercar. Anglais ou allemand requis.",
    favorite: false,
    initials: "TG"
  },
  {
    id: "crm-wec-4",
    type: "org",
    name: "Dallara Automobili — RH",
    company: "Dallara",
    sector: "Sport Auto (Multi-séries)",
    location: "Varano de' Melegari, Italie",
    contactName: "HR Department",
    role: "Aerodynamics & CFD Engineering Intern",
    email: "hr@dallara.it",
    phone: "+39 0525 550711",
    linkedin: "https://www.linkedin.com/company/dallara",
    source: "Direct",
    status: "Refusé",
    notes: "Postes pourvus S1 2026. Relancer pour S2 ou PFE. Constructeur F2/F3/IndyCar/Formula E.",
    favorite: false,
    initials: "DA"
  },
  {
    id: "crm-wec-5",
    type: "org",
    name: "Porsche Motorsport — RH",
    company: "Porsche AG",
    sector: "Sport Auto (WEC / GT)",
    location: "Weissach, Allemagne",
    contactName: "Motorsport Karriere",
    role: "Stage Ingénieur Aérodynamique",
    email: "motorsport.karriere@porsche.de",
    phone: "+49 7044 91 0",
    linkedin: "https://www.linkedin.com/company/porsche",
    source: "Direct",
    status: "À contacter",
    notes: "Centre R&D Motorsport à Weissach. Programme stage structuré. Candidature en anglais ou allemand. Note : Damien FAVRE (réseau LinkedIn) a travaillé chez Porsche Motorsport.",
    favorite: false,
    initials: "PM"
  },

  // ────────────────────────────────────────────────────────
  //  CONTACTS INDIVIDUELS — ALUMNI & RECOMMANDATIONS
  // ────────────────────────────────────────────────────────

  {
    id: "crm-alumni-1",
    type: "person",
    name: "Thomas Leroy",
    company: "Airbus",
    sector: "Aéronautique",
    location: "Toulouse, France",
    contactName: "Thomas Leroy",
    role: "Ingénieur Aérodynamique & CFD",
    email: null,
    phone: null,
    // Alumni ESTACA identifié. URL LinkedIn non publiée publiquement — trouver via annuaire ESTACA.
    linkedin: null,
    source: "Alumni ESTACA",
    status: "Recommandation",
    notes: "Alumni ESTACA en poste chez Airbus (division CFD Toulouse). Peut transmettre le CV en interne. Contacter via l'annuaire alumni ESTACA ou LinkedIn.",
    favorite: true,
    initials: "TL"
  },

  // ────────────────────────────────────────────────────────
  //  SERVICES RH — AÉRONAUTIQUE & DÉFENSE
  // ────────────────────────────────────────────────────────

  {
    id: "crm-aero-1",
    type: "org",
    name: "Airbus — Service Stages",
    company: "Airbus",
    sector: "Aéronautique",
    location: "Toulouse, France",
    contactName: "Direction des Stages & Apprentissages",
    role: "Stagiaire Ingénieur CFD / Aérodynamique",
    email: "jobs.airbus.com",
    phone: null,
    // Vérifié : linkedin.com/company/airbus
    linkedin: "https://www.linkedin.com/company/airbus",
    source: "Direct",
    status: "À contacter",
    notes: "Portail de candidature : jobs.airbus.com. Chercher 'CFD' ou 'aérodynamique' dans les offres de stage. Contacter aussi Thomas Leroy (Alumni ESTACA, réseau interne).",
    favorite: false,
    initials: "AI"
  },
  {
    id: "crm-aero-2",
    type: "org",
    name: "Safran Aircraft Engines — RH",
    company: "Safran",
    sector: "Aéronautique",
    location: "Villaroche (Moissy-Cramayel), France",
    contactName: "Direction Recrutement Safran AE",
    role: "Stagiaire Ingénieur Aéro/CFD",
    email: "recrutement@safrangroup.com",
    phone: "+33 1 60 59 00 00",
    // Vérifié : linkedin.com/company/safran-aircraft-engines
    linkedin: "https://www.linkedin.com/company/safran-aircraft-engines",
    source: "Direct",
    status: "À contacter",
    notes: "Motoriste majeur — CFD appliqué aux tuyères, soufflantes, écoulements internes réactifs.",
    favorite: false,
    initials: "SA"
  },
  {
    id: "crm-aero-3",
    type: "org",
    name: "Dassault Aviation — RH",
    company: "Dassault Aviation",
    sector: "Aéronautique",
    location: "Saint-Cloud / Mérignac, France",
    contactName: "Service RH Stages Ingénieurs",
    role: "Stage Ingénieur CFD",
    email: "recrutement@dassault-aviation.com",
    phone: "+33 1 47 11 40 00",
    // Vérifié : linkedin.com/company/dassault-aviation
    linkedin: "https://www.linkedin.com/company/dassault-aviation",
    source: "Direct",
    status: "À contacter",
    notes: "Avionneur (Rafale, Falcon). CFD haute fidélité sur formes furtives. Profil ESTACA bien perçu.",
    favorite: false,
    initials: "DA"
  },
  {
    id: "crm-aero-4",
    type: "org",
    name: "ONERA — Direction des Stages",
    company: "ONERA",
    sector: "Aéronautique",
    location: "Meudon / Palaiseau / Toulouse, France",
    contactName: "Direction des Stages ONERA",
    role: "Stagiaire Recherche CFD / Aérodynamique",
    email: "stages@onera.fr",
    phone: "+33 1 46 73 40 40",
    // Vérifié : linkedin.com/company/onera
    linkedin: "https://www.linkedin.com/company/onera",
    source: "Direct",
    status: "À contacter",
    notes: "Centre de recherche aérospatiale national. Sujets de stage avancés : LES, DNS, instabilités de couche limite.",
    favorite: false,
    initials: "ON"
  },
  {
    id: "crm-aero-5",
    type: "org",
    name: "ArianeGroup — RH Lanceurs",
    company: "ArianeGroup",
    sector: "Aéronautique",
    location: "Les Mureaux / Versailles, France",
    contactName: "Direction RH Lanceurs",
    role: "Stage CFD Propulsion / Aérodynamique Lanceur",
    email: "recrutement@ariane-group.com",
    phone: "+33 1 39 02 00 00",
    linkedin: "https://www.linkedin.com/company/arianegroup",
    source: "Direct",
    status: "À contacter",
    notes: "CFD sur Ariane 6 : écoulements propulsifs, séparation de coiffe, tenue en pression.",
    favorite: false,
    initials: "AG"
  }
];

// =========================================================
//  Q&A — Préparateur d'entretien technique
// =========================================================
const INTERVIEW_QUESTIONS = [
  {
    category: "CFD — Modélisation de la Turbulence",
    question: "Quelle est la différence fondamentale entre les modèles RANS (k-ε, k-ω SST), LES et DES ?",
    answer: "RANS moyenne temporellement les équations de N-S et modélise toute la turbulence via une viscosité turbulente. LES résout les grandes structures de turbulence (filtre spatial) et modélise uniquement les petites échelles (SGS). DES combine RANS dans la couche limite paroi et LES dans le cœur de l'écoulement. k-ω SST est le standard industrie pour les écoulements Motorsport car il prédit correctement le décollement en gradient de pression adverse."
  },
  {
    category: "CFD — Couche Limite & Maillage",
    question: "Qu'est-ce que le Y+ et comment conditionne-t-il la première couche de maillage pariétal ?",
    answer: "Y+ = u* · y / ν est la distance adimensionnelle à la paroi. Pour une résolution directe de la sous-couche visqueuse (Low-Reynolds), on vise Y+ ≈ 1 (first cell centroid dans la sous-couche). Pour utiliser des fonctions de paroi standard (High-Re, wall functions), on vise 30 < Y+ < 300. Le choix dépend du modèle et des ressources HPC disponibles."
  },
  {
    category: "Aérodynamique Motorsport",
    question: "Expliquez le compromis Appui (Downforce) vs Traînée (Drag) et la finesse L/D.",
    answer: "L/D = Cl/Cd mesure l'efficacité aérodynamique. En Motorsport, l'appui améliore la vitesse en courbe et la stabilité au freinage via la charge verticale sur les pneus. La traînée pénalise la vitesse max en ligne droite. L'objectif est d'optimiser L/D selon le circuit : faible traînée à Monza (circuit rapide), appui maximal à Monaco (circuit lent et tortueux)."
  },
  {
    category: "Aérodynamique Motorsport",
    question: "Comment fonctionne l'effet de sol (Ground Effect) via le fond plat et le diffuseur ?",
    answer: "Le fond plat crée un venturi sous la monoplace : l'air est accéléré entre le plancher et la piste → chute de pression (Bernoulli) → succion verticale. Le diffuseur à l'arrière ralentit progressivement l'air pour rejoindre la pression atmosphérique sans décollement majeur. Le contrôle du 'ride height' est critique pour maintenir le Ground Effect stable."
  },
  {
    category: "CFD — Qualité de Maillage",
    question: "Quels sont les principaux indicateurs de qualité d'un maillage dans Star-CCM+ ou Ansys Fluent ?",
    answer: "1) Skewness (assymétrie, < 0.85 idéalement) ; 2) Aspect Ratio (élongation des prismes pariétaux) ; 3) Orthogonal Quality (> 0.1 requis, > 0.2 recommandé en Fluent) ; 4) Ratio de croissance volumique entre cellules adjacentes (< 1.2). Dans Star-CCM+ : Face Validity > 0.5, Volume Change < 1e-4."
  },
  {
    category: "Logiciels & Pratique Numérique",
    question: "Citez et comparez les principaux solveurs CFD que vous avez utilisés.",
    answer: "Star-CCM+ (Siemens) : polyvalent, interface GUI complète, excellent pour Motorsport complexe. Ansys Fluent : très répandu industrie, nombreux modèles physiques. OpenFOAM (open-source) : flexible, scriptable Python/Bash, idéal pour recherche. Dans mon parcours ESTACA : travaux sur Star-CCM+ (maillage, simulation transitoire, post-traitement ParaView)."
  },
  {
    category: "Aérodynamique — Profils & Portance",
    question: "Comment fonctionne un profil portant et quel est l'impact du nombre de Reynolds sur ses performances ?",
    answer: "Un profil crée de la portance par asymétrie de vitesse (et donc de pression) entre l'intrados et l'extrados. En Motorsport, les profils sont inversés pour créer de l'appui (Cl négatif). À bas Reynolds (< 1e5), la couche limite reste laminaire plus longtemps → risque de décollement laminaire. À haut Reynolds, transition turbulente précoce → couche limite plus résistante au décollement."
  },
  {
    category: "Programmation & Traitement des Données",
    question: "Quels outils de scripting et de post-traitement utilisez-vous en CFD ?",
    answer: "Python : NumPy/SciPy pour traitement de données, Matplotlib pour visualisation, pandas pour gestion de résultats. ParaView (VTK) : post-traitement 3D des résultats CFD. Macros Star-CCM+ (Java/Groovy) pour automatisation. Bash pour scripting HPC et batch jobs. GitHub pour versionnage des cas CFD et scripts."
  }
];
