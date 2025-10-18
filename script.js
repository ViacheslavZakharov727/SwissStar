
// i18n dictionaries with rich DE/FR/IT — full rebuild to ensure parity
const strings = {
  de: {
    nav:{home:"Home", about:"Über uns", network:"Netz", buy:"Nummer kaufen", careers:"Karriere", contact:"Kontakt", login:"Login"},
    home:{ hero:"SwissStar baut das Next‑Gen‑Netz der Schweiz: schnell, zuverlässig und fair. 8K‑Calls, nahtlose Cloud und Gaming ohne Lag werden Alltag.",
      block1:{title:"#1 Internet", lead:"Unser 6G‑Kern verändert die Spielregeln.", text:"Glasfaser‑Backbone und verteilte Access‑Knoten sorgen für extrem geringe Latenzen, hohe Durchsätze und Stabilität – selbst zu Spitzenzeiten. Für Zuhause und Unternehmen ermöglichen wir 8K‑Streaming und KI‑Workloads."},
      block2:{title:"Support 24/7", lead:"Echte Menschen, keine Bots und keine Warteschleifen.", text:"Wir sprechen DE/FR/IT und helfen bei Modems, WLAN‑Optimierung, Mesh‑Planung und Tarifwahl – wann es Ihnen passt. Antworten in Minuten, Lösungen die bleiben."},
      block3:{title:"Beste Preise", lead:"Transparente Konditionen, kein Kleingedrucktes.", text:"Wir optimieren das Netz und automatisieren Prozesse, damit Premium‑Qualität fair bleibt. Sie zahlen für Geschwindigkeit und Stabilität – nicht für Marketing."}
    },
    about:{
      title:"Über uns", lead:"Unsere Idee: Internet in der Schweiz schneller, zuverlässiger und zugänglicher machen.",
      text1:"Im Laufe der Jahre haben wir ein Netz aufgebaut, dem Tausende vertrauen. Unternehmen vertrauen uns – wie Swisscom und Sunrise – weil Qualität und Service zuerst kommen. Unsere Kultur vereint Technik‑Exzellenz mit Kundenfokus.",
      text1b:"Vom Backbone‑Design bis zum letzten Meter messen und tunen wir unermüdlich, damit Latenz niedrig und Stabilität hoch bleibt – nicht nur im Labor, sondern dort wo Sie leben und arbeiten.",
      text2:"CEO: Viacheslav Zakharov. Hauptsitz: Uster. Von hier betreiben wir Infrastruktur und Support in allen Kantonen.",
      values:"Unsere Werte",
      valuesText1:"Innovation – wöchentliche Verbesserungen: smarteres Routing, bessere Last‑Mile‑Optimierung, automatisches Failover und proaktives Monitoring. Wir übernehmen Technologien, wenn sie Zuverlässigkeit und Freude erhöhen – nicht nur, weil sie im Trend liegen.",
      valuesText2:"Verantwortung – transparente Tarife und klare Sprache. Datenschutz und Sicherheit sind Standard. Regelmäßige Audits, Ursachenanalyse statt Symptombekämpfung.",
      valuesText3:"Team – Menschen bauen Netze. Mentoring, Dokumentation, blameless Post‑Mortems und Lernen stehen im Fokus. Wir investieren in Lehrstellen und Weiterbildung in allen Sprachregionen.",
      valuesText4:"Nachhaltigkeit – weniger Außeneinsätze, effizientere Edge‑Energie, Wiederverwendung von Hardware. Wir messen Energie pro Gigabit und optimieren für Effizienz im Alltag.",
      valuesText5:"Kundenfokus – wir messen Time‑to‑Solution, nicht Time‑to‑Close. Jedes Ticket verbessert Doku und Tools, damit die nächste Antwort schneller kommt.",
      valuesText6:"Handwerk – saubere Architektur, reproduzierbare Deployments und lebende Playbooks. Qualität ist im Uptime sichtbar, nicht nur in Werbeversprechen."
    },
    network:{
      title:"Über 6G", lead:"6G ist das schnellste Internet aller Zeiten und das Fundament der digitalen Zukunft.",
      text1:"Wir kombinieren Glasfaser und Funk, um geringe Latenzen und hohe Geschwindigkeiten in Städten wie in den Alpen zu liefern. Edge‑Knoten und Multipath‑Routing halten Anwendungen reaktionsschnell und robust.",
      text2:"Unser Netz ist das zuverlässigstes in der ganzen Schweiz: Smart Routing, Redundanz und aktives 24/7‑Monitoring. Wir testen auf Gipfeln und in Kellern, damit Anrufe und Downloads einfach funktionieren.",
      coverage:"Abdeckung", coverageText1:"Von Genf bis St. Gallen, von Lugano bis Basel – SwissStar hält Sie verbunden, wo es zählt.", coverageText2:"Wir fügen kontinuierlich Kapazität hinzu und optimieren Spektrum – auch für Festival‑Spitzen."
    },
    buy:{ title:"SwissStar‑Nummer kaufen", lead:"Wählen Sie eine schöne +41‑Nummer – generieren und kaufen (Demo).", generate:"+41‑Nummer generieren", buy:"Nummer kaufen", unavailable:"Leider ist diese Nummer nicht verfügbar."},
    casino:{ title:"Versuche dein Glück", desc:"JACKPOT (0,04 %). Nach 150 Drehungen ohne Jackpot beträgt die Chance 25 %. Jackpot gibt 25 % Rabatt.", play:"Jetzt drehen", result_normal:"Kein Gewinn. Noch einmal!", result_jackpot:"🎉 JACKPOT! 25 % Rabatt auf jede Nummer."},
    careers:{ title:"Karriere bei SwissStar", lead:"Wir bauen das Netz von morgen und suchen Menschen, die mit uns wachsen.", role:"Rolle", dept:"Abteilung", type:"Typ", admin:"Administration", apprenticeship:"Lehrstelle", mediamatiker:"Mediamatiker/in EFZ — derzeit voll"},
    contact:{ title:"Kontakt", lead:"Sagen Sie uns, warum Sie uns kontaktieren und wie wir helfen können.", reasonLabel:"Grund", descLabel:"Beschreiben Sie Ihr Anliegen", send:"Nachricht senden", reasons:{blocked:"Meine Nummer wurde gesperrt", network:"Netzwerkfehler", stolen:"Meine Nummer wurde gestohlen", other:"Anderes Problem"}},
    login:{title:"Login", lead:"Ihr Bereich zur Tarifübersicht und Leistungsverwaltung. (Demo)", signin:"Anmelden", disclaimer:"Nur Demo – keine echte Anmeldung."}
  },
  fr: {
    nav:{home:"Accueil", about:"À propos", network:"Réseau", buy:"Acheter un numéro", careers:"Carrières", contact:"Contact", login:"Connexion"},
    home:{
      hero:"SwissStar construit le réseau nouvelle génération de la Suisse : rapide, fiable et équitable. Appels 8K, cloud fluide et gaming sans latence deviennent la norme.",
      block1:{title:"#1 Internet", lead:"Notre cœur 6G change la donne.", text:"Un backbone en fibre et des nœuds d’accès distribués offrent une latence ultra‑faible, un débit élevé et une stabilité constante — même aux heures de pointe. Pour les foyers et les entreprises, SwissStar rend possibles le streaming 8K et les charges IA."},
      block2:{title:"Support 24/7", lead:"De vraies personnes, pas de bots ni d’attente.", text:"Nous parlons DE/FR/IT et aidons pour les modems, l’optimisation Wi‑Fi, le maillage et le choix des offres — au moment qui vous convient. Des réponses en minutes et des solutions qui durent."},
      block3:{title:"Meilleurs prix", lead:"Conditions transparentes, sans petits caractères.", text:"Nous optimisons le réseau et automatisons les opérations pour maintenir une qualité premium à un prix équitable. Vous payez pour la vitesse et la stabilité — pas pour le marketing. Passez chez nous sans frais cachés."}
    },
    about:{
      title:"À propos", lead:"Nous sommes partis d’une idée simple : rendre l’Internet en Suisse plus rapide, plus fiable et plus accessible — pour les particuliers comme pour les entreprises.",
      text1:"Au fil des années, nous avons construit un réseau auquel font confiance des milliers de clientes et clients dans tout le pays. Des entreprises nous choisissent — à l’image de Swisscom et Sunrise — parce que la qualité et le service passent avant tout. Notre culture marie excellence d’ingénierie, sens du détail et empathie pour l’utilisateur.",
      text1b:"Du design du backbone jusqu’au dernier mètre, nous mesurons, testons et améliorons sans relâche : latence réduite, stabilité élevée, sécurité intégrée. Nous validons nos solutions sur le terrain — dans les centres‑villes, en montagne et dans les caves — pour que vos appels et vos téléchargements fonctionnent simplement.",
      text2:"CEO : Viacheslav Zakharov. Siège : Uster. Depuis Uster, nous opérons notre infrastructure et notre support dans tous les cantons, avec des équipes DE/FR/IT disponibles 24/7.",
      values:"Nos valeurs",
      valuesText1:"Innovation — améliorations hebdomadaires : routage plus intelligent, optimisation du dernier kilomètre, bascule automatique, monitoring proactif. Nous adoptons la technologie lorsqu’elle renforce fiabilité et satisfaction, pas parce qu’elle est à la mode.",
      valuesText2:"Responsabilité — conditions claires, tarifs équitables et langage simple. Confidentialité et sécurité by‑default ; audits réguliers ; résolution des causes racines plutôt que des symptômes.",
      valuesText3:"Équipe — des personnes construisent les réseaux. Mentorat, documentation utile, post‑mortems sans blâme et apprentissage continu. Nous investissons dans les apprentissages EFZ et la progression professionnelle dans toutes les régions linguistiques.",
      valuesText4:"Durabilité — moins d’interventions inutiles, consommation énergétique optimisée à l’edge, programmes de réemploi matériel. Nous suivons l’énergie par gigabit et optimisons pour l’efficacité réelle.",
      valuesText5:"Obsession du client — nous suivons le temps jusqu’à la solution, pas la fermeture du ticket. Chaque demande améliore nos outils et notre base de connaissances pour accélérer l’aide suivante.",
      valuesText6:"Exigence du métier — architecture propre, déploiements reproductibles, playbooks vivants. La qualité se mesure à l’uptime et à la sérénité d’usage, pas seulement dans les campagnes marketing."
    },
    network:{
      title:"À propos de la 6G",
      lead:"La 6G constitue l’internet le plus rapide jamais conçu et le socle de la prochaine décennie numérique.",
      text1:"Nous combinons un backbone en fibre optique et des liaisons sans‑fil de nouvelle génération pour offrir une latence ultra‑faible et des débits élevés — des centres‑villes denses aux vallées alpines. Notre architecture distribuée s’appuie sur des nœuds edge proches des utilisateurs, un routage multipath et une gestion intelligente de la congestion afin de préserver réactivité et fluidité, y compris aux heures de pointe.",
      text2:"La fiabilité est au cœur de notre approche : redondance de bout en bout, bascules automatiques, supervision active 24/7 et tests terrain en altitude comme en sous‑sol. Qu’il s’agisse d’appels, de visioconférences, de jeux en ligne ou de téléchargements volumineux, le réseau SwissStar vise une expérience stable et prévisible — sans surprises.",
      coverage:"Couverture",
      coverageText1:"De Genève à Saint‑Gall, de Lugano à Bâle — nous vous connectons là où cela compte. Nous étendons la couverture dans les régions rurales, tout en densifiant les zones métropolitaines pour absorber durablement la croissance.",
      coverageText2:"Nous ajoutons en continu de la capacité et optimisons l’usage du spectre afin que vous restiez en ligne à la maison, au bureau et en déplacement — même lors des festivals, salons et pics de voyages. Notre objectif : des performances mesurables, pas seulement des promesses."
    },
    buy:{ title:"Acheter un numéro SwissStar", lead:"Choisissez un beau numéro en +41 — idéal pour l’entreprise et le privé. Générez et achetez (démo).", generate:"Générer un numéro +41", buy:"Acheter le numéro", unavailable:"Hélas, ce numéro n’est pas disponible."},
    casino:{ title:"Tentez votre chance", desc:"JACKPOT (0,04 %). Après 150 tours sans jackpot, la chance atteint 25 %. Le jackpot offre 25 % de remise sur n’importe quel numéro.", play:"Lancer", result_normal:"Pas de gain. Réessayez !", result_jackpot:"🎉 JACKPOT ! Remise 25 %."},
    careers:{ title:"Carrières chez SwissStar", lead:"Nous construisons le réseau de demain et cherchons des personnes prêtes à grandir avec nous.", role:"Poste", dept:"Département", type:"Type", admin:"Administration", apprenticeship:"Apprentissage", mediamatiker:"Mediamaticien/ne EFZ — complet"},
    contact:{ title:"Contact", lead:"Dites‑nous pourquoi vous nous contactez et comment nous pouvons aider.", reasonLabel:"Motif", descLabel:"Décrivez votre problème", send:"Envoyer le message", reasons:{blocked:"Mon numéro a été bloqué", network:"Erreur réseau", stolen:"Mon numéro a été volé", other:"Autre problème"}},
    login:{title:"Connexion", lead:"Espace client (Démo)", signin:"Se connecter", disclaimer:"Déмо uniquement — pas d’authentification réelle."}
  },
  it: {
    nav:{home:"Home", about:"Chi siamo", network:"Rete", buy:"Compra un numero", careers:"Carriere", contact:"Contatti", login:"Accedi"},
    home:{
      hero:"SwissStar sta costruendo la rete di nuova generazione della Svizzera: veloce, affidabile ed equa. Chiamate 8K, cloud fluido e gaming senza lag diventano la normalità.",
      block1:{title:"#1 Internet", lead:"Il nostro core 6G cambia le regole.", text:"Un backbone in fibra e nodi di accesso distribuiti garantiscono latenza ultra‑bassa, throughput elevato e stabilità costante — anche nelle ore di punta. Per case e imprese abilitiamo streaming 8K e carichi IA."},
      block2:{title:"Supporto 24/7", lead:"Persone reali, niente bot né attese.", text:"Parliamo DE/FR/IT e aiutiamo con modem, ottimizzazione Wi‑Fi, mesh e scelta del piano — quando conviene a te. Risposte in pochi minuti e soluzioni durature."},
      block3:{title:"Migliori prezzi", lead:"Condizioni trasparenti, senza asterischi.", text:"Ottimizziamo la rete e automatizziamo le operazioni per mantenere qualità premium a prezzo equo. Paghi per velocità e stabilità — non per il marketing. Passa a noi senza costi nascosti."}
    },
    about:{
      title:"Chi siamo", lead:"Siamo partiti da un’idea semplice: rendere Internet in Svizzera più veloce, affidabile e accessibile — per privati e aziende.",
      text1:"Nel corso degli anni abbiamo costruito una rete di cui si fidano migliaia di clienti in tutto il Paese. Le imprese ci scelgono — come fanno Swisscom e Sunrise — perché qualità e servizio vengono prima. La nostra cultura unisce eccellenza ingegneristica, cura del dettaglio ed empatia per l’utente.",
      text1b:"Dal design del backbone all’ultimo metro misuriamo, testiamo e ottimizziamo senza sosta: latenza bassa, stabilità alta, sicurezza integrata. Verifichiamo le soluzioni sul campo — nei centri urbani, in montagna e nei seminterrati — perché chiamate e download funzionino sempre.",
      text2:"CEO: Viacheslav Zakharov. Sede centrale: Uster. Da Uster operiamo infrastruttura e supporto in tutti i cantoni, con team DE/FR/IT disponibili 24/7.",
      values:"I nostri valori",
      valuesText1:"Innovazione — miglioramenti settimanali: instradamento più intelligente, tuning dell’ultimo miglio, failover automatico, monitoraggio proattivo. Adottiamo tecnologia quando aumenta affidabilità e soddisfazione, non per moda.",
      valuesText2:"Responsabilità — condizioni chiare, tariffe eque e linguaggio semplice. Privacy e sicurezza by‑default; audit regolari; risoluzione delle cause radice anziché dei sintomi.",
      valuesText3:"Team — le reti le costruiscono le persone. Mentoring, documentazione utile, post‑mortem senza colpe e apprendimento continuo. Investiamo negli apprendistati EFZ e nella crescita professionale in tutte le regioni linguistiche.",
      valuesText4:"Sostenibilità — meno interventi superflui, consumo energetico ottimizzato all’edge, programmi di riuso dell’hardware. Misuriamo l’energia per gigabit e ottimizziamo per l’efficienza reale.",
      valuesText5:"Centralità del cliente — misuriamo il tempo alla soluzione, non la chiusura del ticket. Ogni richiesta migliora strumenti e knowledge base per aiutare più velocemente chi viene dopo.",
      valuesText6:"Cura del mestiere — architettura pulita, deploy riproducibili, playbook vivi. La qualità si vede nell’uptime e nella semplicità d’uso, non solo nelle campagne di marketing."
    },
    network:{
      title:"Informazioni su 6G",
      lead:"La 6G è l’internet più veloce mai esistito ed è il fondamento della prossima era digitale.",
      text1:"Combiniamo un backbone in fibra e collegamenti wireless di nuova generazione per offrire latenza ultra‑bassa e velocità elevate — dai centri urbani densi alle valli alpine. L’architettura distribuita utilizza nodi edge vicini agli utenti, routing multipath e gestione intelligente della congestione per mantenere reattività e fluidità, anche nelle ore di punta.",
      text2:"L’affidabilità è centrale: ridondanza end‑to‑end, failover automatico, monitoraggio attivo 24/7 e test sul campo sia in quota sia nei seminterrati. Chiamate, videoconferenze, gaming online e download pesanti devono risultare stabili e prevedibili — senza sorprese.",
      coverage:"Copertura",
      coverageText1:"Da Ginevra a San Gallo, da Lugano a Basilea — ti connettiamo dove conta. Estendiamo la copertura nelle aree rurali e densifichiamo le zone metropolitane per assorbire in modo sostenibile la crescita.",
      coverageText2:"Aggiungiamo capacità in modo continuo e ottimizziamo lo spettro affinché tu rimanga online a casa, in ufficio e in movimento — anche durante festival, fiere e periodi di punta. Il nostro obiettivo: prestazioni misurabili, non solo promesse."
    },
    buy:{ title:"Compra un numero SwissStar", lead:"Scegli un bel numero con prefisso +41 — genera e acquista (demo).", generate:"Genera numero +41", buy:"Compra numero", unavailable:"Sfortunatamente questo numero non è disponibile."},
    casino:{ title:"Metti alla prova la fortuna", desc:"JACKPOT (0,04%). Dopo 150 giri senza jackpot, la probabilità è 25%. Il jackpot offre il 25% di sconto su qualsiasi numero.", play:"Gira ora", result_normal:"Nessuna vincita. Riprova!", result_jackpot:"🎉 JACKPOT! Sconto 25%."},
    careers:{ title:"Carriere in SwissStar", lead:"Costruiamo la rete di domani e cerchiamo persone pronte a crescere con noi.", role:"Ruolo", dept:"Reparto", type:"Tipo", admin:"Amministrazione", apprenticeship:"Tirocinio", mediamatiker:"Mediamatico/a EFZ — al completo"},
    contact:{ title:"Contattaci", lead:"Dicci perché ci contatti e come possiamo aiutarti.", reasonLabel:"Motivo", descLabel:"Descrivi il tuo problema", send:"Invia messaggio", reasons:{blocked:"Il mio numero è stato bloccato", network:"Errore di rete", stolen:"Il mio numero è stato rubato", other:"Altro problema"}},
    login:{title:"Accedi", lead:"Area clienti per piani e servizi. (Demo)", signin:"Accedi", disclaimer:"Solo demo — nessuna autenticazione reale."}
  }
};

function applyI18n(lang){
  const dict = strings[lang] || strings.de;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n.split('.').reduce((o,k)=> (o||{})[k], dict);
    if(typeof key === 'string'){ el.textContent = key; }
  });
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
}
function initLang(){
  const sel = document.getElementById("lang");
  const stored = localStorage.getItem("lang") || "de";
  if(sel){ sel.value = stored; sel.addEventListener("change", e=> applyI18n(e.target.value)); }
  applyI18n(stored);
}

// Smooth page transitions
function initPageTransitions(){
  const enter = ()=>{
    document.body.classList.add('page-enter');
    requestAnimationFrame(()=>{ document.body.classList.add('page-ready'); });
  };
  enter();
  document.querySelectorAll('a[href$=".html"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(!href) return;
      if(e.metaKey || e.ctrlKey) return; // new tab
      e.preventDefault();
      document.body.classList.add('page-exit');
      requestAnimationFrame(()=>{
        document.body.classList.add('page-leave');
        setTimeout(()=>{ window.location.href = href; }, 650);
      });
    });
  });
}

// Pricing 20/40/150 — readonly field, generation only
function priceForDigits(d){
  if(/^([0-9])\1{8}$/.test(d)) return 150; // all same
  if(/(\d)\1\1/.test(d)) return 40;       // any triple run
  return 20;
}
function updatePriceUI(numberStr){
  const el = document.getElementById("priceLine");
  if(!el) return;
  const digits = numberStr.replace(/[^0-9]/g,"");
  const price = priceForDigits(digits);
  el.textContent = "Price: " + price + " CHF";
  el.style.opacity = 0;
  setTimeout(()=>{el.style.transition="opacity .8s"; el.style.opacity=1;},40);
}
function initBuy(){
  if(document.body.id !== "page-buy") return;
  const field = document.getElementById("numberField");
  const gen = document.getElementById("genBtn");
  const buy = document.getElementById("buyBtn");
  const msg = document.getElementById("buyMsg");
  const genAndPrice = ()=>{
    const nine = Math.floor(100000000 + Math.random()*900000000).toString();
    field.value = nine;
    updatePriceUI(nine);
    msg.style.display="none";
  };
  gen?.addEventListener("click", genAndPrice);
  buy?.addEventListener("click", ()=>{ msg.style.display="block"; });
}

// Casino — jackpot only, pity 150 -> 25%, discount applied
function initCasino(){
  if(document.body.id !== "page-buy") return;
  const playBtn = document.getElementById("playBtn");
  const d1 = document.getElementById("d1"), d2 = document.getElementById("d2"), d3 = document.getElementById("d3");
  const res = document.getElementById("casinoResult"), card = document.getElementById("casino");
  let spinsWithoutJackpot = 0;
  let spinning = false;

  function setSpinning(state){
    spinning = state;
    playBtn.disabled = state;
    playBtn.style.opacity = state ? 0.7 : 1;
    playBtn.style.pointerEvents = state ? "none" : "auto";
  }
  function rollDigit(el, final, delay){
    let t=0, dur=1200+delay, step=50;
    const timer=setInterval(()=>{ el.textContent=Math.floor(Math.random()*10); t+=step; if(t>=dur){ clearInterval(timer); el.textContent=final; }}, step);
  }
  function drawOutcome(){
    let jackpotChance = 0.04; // base 0.04%
    if(spinsWithoutJackpot >= 150){ jackpotChance = 25; } // pity after 150 no-jackpot spins
    const r = Math.random()*100;
    if(r <= jackpotChance) return "jackpot";
    return "none";
  }

  playBtn?.addEventListener("click", ()=>{
    if(spinning) return;
    setSpinning(true);
    res.textContent = "";
    card.classList.remove("win");
    const outcome = drawOutcome();
    let finals=[Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10)];
    if(outcome==="jackpot"){
      const d=Math.floor(Math.random()*10); finals=[d,d,d];
    }
    rollDigit(d1, finals[0], 0); rollDigit(d2, finals[1], 150); rollDigit(d3, finals[2], 300);
    setTimeout(()=>{
      const lang = localStorage.getItem("lang") || "de";
      const isJackpot = (finals[0]===finals[1] && finals[1]===finals[2]);
      if(isJackpot){
        res.textContent = strings[lang].casino.result_jackpot;
        card.classList.add("win");
        const priceEl = document.getElementById("priceLine");
        if(priceEl && priceEl.textContent){
          const m = priceEl.textContent.match(/(\d+)/);
          if(m){ const p = Math.round(parseInt(m[1],10)*0.75); priceEl.textContent = "Price: " + p + " CHF"; }
        }
        spinsWithoutJackpot = 0;
      } else {
        res.textContent = strings[lang].casino.result_normal;
        spinsWithoutJackpot += 1;
      }
      setSpinning(false);
    }, 1700);
  });
}

// Fade-in on scroll for cards
function initFadeIn(){
  const els = document.querySelectorAll(".card");
  const onScroll = () => {
    const vh = window.innerHeight;
    els.forEach(el=>{ const r = el.getBoundingClientRect(); if(r.top < vh - 80) el.classList.add("show"); });
  };
  document.addEventListener("scroll", onScroll, {passive:true});
  onScroll();
}

document.addEventListener("DOMContentLoaded", ()=>{
  initPageTransitions();
  initLang();
  initBuy();
  initCasino();
  initFadeIn();
  initMobileHeaderMerge();
  
  /* initMobileHome disabled on mobile by v9.10 */
});


function initMobileHome(){
  const mql = window.matchMedia("(max-width: 720px)");
  if(!mql.matches) return;
  const arrow = document.getElementById("mobileArrow");
  const sheet = document.getElementById("homeCards");
  if(!arrow || !sheet) return;
  // Ensure sheet starts collapsed on mobile
  sheet.classList.remove("open");
  arrow.addEventListener("click", ()=>{
    sheet.classList.add("open");
    arrow.style.display = "none";
  });
}


function initLangFab(){
  const mql = window.matchMedia("(max-width: 720px)");
  if(!mql.matches) return;
  if(document.getElementById("langFab")) return;
  const fab = document.createElement("div");
  fab.id = "langFab";
  fab.innerHTML = `
    <button id="langFabBtn" aria-haspopup="true" aria-expanded="false">🌐 <span id="langFabLabel"></span></button>
    <div id="langFabMenu" role="menu">
      <button data-lang="de" role="menuitem">DE — Deutsch</button>
      <button data-lang="fr" role="menuitem">FR — Français</button>
      <button data-lang="it" role="menuitem">IT — Italiano</button>
    </div>
  `;
  document.body.appendChild(fab);
  const btn = document.getElementById("langFabBtn");
  const label = document.getElementById("langFabLabel");
  const menu = document.getElementById("langFabMenu");
  const setLabel = ()=>{ const L = (localStorage.getItem("lang")||"de").toUpperCase(); label.textContent = L; };
  setLabel();
  btn.addEventListener("click", ()=>{
    const open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  menu.querySelectorAll("button").forEach(b=>{
    b.addEventListener("click", ()=>{
      const lang = b.getAttribute("data-lang");
      applyI18n(lang);
      setLabel();
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
  document.addEventListener("click", (e)=>{
    if(!fab.contains(e.target)){ menu.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
  }, {capture:true});
}


function initLoginFab(){
  const mql = window.matchMedia("(max-width: 720px)");
  if(!mql.matches) return;
  if(document.getElementById("loginFab")) return;
  const fab = document.createElement("div");
  fab.id = "loginFab";
  fab.innerHTML = `<a href="login.html" aria-label="Login">Login</a>`;
  document.body.appendChild(fab);
}



function initMobileHome(){
  const mql = window.matchMedia("(max-width: 720px)");
  const arrow = document.getElementById("mobileArrow");
  const sheet = document.getElementById("homeCards");
  if(!mql.matches || !arrow || !sheet) return;
  // Force closed on load
  sheet.classList.remove("open");
  sheet.style.display = "none";
  arrow.style.display = "block";
  arrow.addEventListener("click", ()=>{
    sheet.style.display = "block";
    requestAnimationFrame(()=> sheet.classList.add("open"));
    arrow.style.display = "none";
  }, {once:false});
}



function initMobileHeaderMerge(){
  const mql = window.matchMedia("(max-width: 720px)");
  if(!mql.matches) return;
  const navLeft = document.querySelector(".nav-left");
  const navRight = document.querySelector(".nav-right");
  const lang = document.getElementById("lang");
  const login = document.querySelector(".nav-right .login-btn");
  if(navLeft && lang && login){
    // Move elements to the end of the scrollable nav-left
    navLeft.appendChild(lang);
    navLeft.appendChild(login);
  }
}

