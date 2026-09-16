(function(){

  var FISH_ART = {
    hecht: '<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg">'+
      '<ellipse cx="145" cy="82" rx="88" ry="30" fill="#5f7a52"/>'+
      '<ellipse cx="150" cy="98" rx="70" ry="14" fill="#dfe3c9" opacity=".55"/>'+
      '<ellipse cx="100" cy="70" rx="6" ry="3" fill="#c9d6a8" opacity=".6"/>'+
      '<ellipse cx="130" cy="62" rx="5" ry="3" fill="#c9d6a8" opacity=".6"/>'+
      '<ellipse cx="165" cy="68" rx="6" ry="3" fill="#c9d6a8" opacity=".6"/>'+
      '<ellipse cx="120" cy="95" rx="5" ry="3" fill="#c9d6a8" opacity=".5"/>'+
      '<path d="M60,82 L18,50 L18,114 Z" fill="#5f7a52"/>'+
      '<path d="M95,50 L118,20 L138,52 Z" fill="#4a6142"/>'+
      '<path d="M150,102 L172,128 L140,116 Z" fill="#4a6142"/>'+
      '<path d="M228,78 L278,72 L272,86 L228,92 Z" fill="#5f7a52"/>'+
      '<circle cx="220" cy="72" r="6" fill="#1a2a20"/>'+
      '<circle cx="222" cy="70" r="2" fill="#eef3f0"/>'+
      '</svg>',
    egli: '<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg">'+
      '<ellipse cx="150" cy="82" rx="88" ry="31" fill="#8a9a4a"/>'+
      '<ellipse cx="150" cy="99" rx="68" ry="13" fill="#e3e6bd" opacity=".5"/>'+
      '<path d="M95,52 L100,112" stroke="#31401f" stroke-width="9"/>'+
      '<path d="M120,50 L125,114" stroke="#31401f" stroke-width="9"/>'+
      '<path d="M145,50 L150,114" stroke="#31401f" stroke-width="9"/>'+
      '<path d="M170,52 L175,112" stroke="#31401f" stroke-width="9"/>'+
      '<path d="M60,82 L20,54 L20,110 Z" fill="#8a9a4a"/>'+
      '<path d="M100,52 L110,18 L122,24 L132,16 L138,52 Z" fill="#425a20"/>'+
      '<path d="M150,104 L172,126 L142,114 Z" fill="#c1483b"/>'+
      '<path d="M60,90 L40,102 L60,100 Z" fill="#c1483b"/>'+
      '<circle cx="222" cy="72" r="6" fill="#1a2a20"/>'+
      '<circle cx="224" cy="70" r="2" fill="#eef3f0"/>'+
      '</svg>',
    forelle: '<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg">'+
      '<ellipse cx="150" cy="82" rx="88" ry="31" fill="#7a5a3a"/>'+
      '<ellipse cx="152" cy="99" rx="68" ry="14" fill="#e9dcc0" opacity=".55"/>'+
      '<circle cx="105" cy="70" r="3" fill="#2c1f12"/><circle cx="120" cy="62" r="2.6" fill="#2c1f12"/>'+
      '<circle cx="140" cy="72" r="2.4" fill="#2c1f12"/><circle cx="160" cy="64" r="2.8" fill="#2c1f12"/>'+
      '<circle cx="115" cy="90" r="2.8" fill="#b5433b"/><circle cx="145" cy="94" r="2.6" fill="#b5433b"/>'+
      '<circle cx="175" cy="86" r="2.8" fill="#b5433b"/><circle cx="185" cy="66" r="2.4" fill="#2c1f12"/>'+
      '<path d="M60,82 L20,54 L20,110 Z" fill="#7a5a3a"/>'+
      '<path d="M120,52 L138,26 L152,54 Z" fill="#654a2f"/>'+
      '<path d="M155,104 L176,124 L146,114 Z" fill="#c1483b"/>'+
      '<circle cx="222" cy="72" r="6" fill="#1a2a20"/>'+
      '<circle cx="224" cy="70" r="2" fill="#eef3f0"/>'+
      '</svg>',
    rotauge: '<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg">'+
      '<path d="M58,82 L18,52 L18,112 Z" fill="#c1483b"/>'+
      '<ellipse cx="150" cy="82" rx="88" ry="32" fill="#a68a3c"/>'+
      '<ellipse cx="150" cy="99" rx="68" ry="13" fill="#eadfae" opacity=".55"/>'+
      '<path d="M112,52 L128,24 L144,54 Z" fill="#7d6a2e"/>'+
      '<path d="M150,104 L172,128 L142,116 Z" fill="#c1483b"/>'+
      '<path d="M62,90 L44,101 L62,99 Z" fill="#c1483b"/>'+
      '<circle cx="222" cy="72" r="6" fill="#1a2a20"/>'+
      '<circle cx="222" cy="72" r="8" fill="none" stroke="#c1483b" stroke-width="1.6"/>'+
      '<circle cx="224" cy="70" r="2" fill="#eef3f0"/>'+
      '</svg>'
  };

  var QUESTION_BANK = {
    leicht: [
      {q:'Aus welchen grundlegenden Teilen besteht eine Angel normalerweise?',
       options:['Nur Rute und Schnur','Rolle, Kescher und Köder','Rute, Rolle, Schnur und Haken','Rute, Netz und Gewicht'], correct:2,
       explain:'Eine klassische Angelausrüstung besteht mindestens aus Rute, Rolle, Schnur und Haken, oft ergänzt durch Köder oder Vorfach.'},
      {q:'Was ist ein Spinner beim Angeln?',
       options:['Ein spezielles Vorfach aus Stahl','Ein Kunstköder mit rotierendem Blatt, das Blinken und Vibration erzeugt','Ein Gerät zum Aufspulen der Schnur','Ein Netz zum Fangen von Ködersfischen'], correct:1,
       explain:'Ein Spinner ist ein Kunstköder mit einem sich drehenden Metallblatt, das durch Blinken und Vibration Raubfische anlockt.'},
      {q:'Warum ist die Tragkraft einer Angelrute wichtig?',
       options:['Sie zeigt nur die Farbe der Rute','Sie hat nur Einfluss auf den Preis','Sie zeigt, wie lang die Rute ist','Sie zeigt, welches Köder- und Fischgewicht die Rute sicher bewältigen kann'], correct:3,
       explain:'Die Tragkraft gibt an, für welchen Bereich an Wurfgewicht und Fischgrösse die Rute ausgelegt ist, eine falsche Wahl kann sie überlasten oder ungenau werden lassen.'},
      {q:'Wofür wird ein Kescher verwendet?',
       options:['Um einen gedrillten Fisch sicher aus dem Wasser zu heben','Um den Köder zu werfen','Um die Schnur aufzuspulen','Um den Haken zu schärfen'], correct:0,
       explain:'Der Kescher dient dazu, den Fisch am Ende des Drills schonend zu landen, ohne ihn von der Schnur reissen zu lassen.'},
      {q:'Was ist die Aufgabe eines Angelhakens?',
       options:['Die Schnur zu beschweren','Den Köder zu halten und den Fisch beim Biss zu fassen','Die Rute zu verlängern','Die Rolle zu bremsen'], correct:1,
       explain:'Der Haken hält den Köder und sorgt dafür, dass sich der Fisch beim Anbiss im Maul verhakt.'},
      {q:'Welche Fischart ist ein typischer Raubfisch?',
       options:['Karpfen','Brachse','Hecht','Rotauge'], correct:2,
       explain:'Der Hecht ernährt sich vor allem von anderen Fischen und zählt damit zu den klassischen Raubfischen.'},
      {q:'Welcher Fisch ist auf dem Bild zu sehen?', fish:'hecht',
       options:['Zander','Karpfen','Wels','Hecht'], correct:3,
       explain:'Der lange, flache Kopf und die Fleckenzeichnung sind typisch für den Hecht.'},
      {q:'Warum verwendet man beim Angeln verschiedene Schnurstärken?',
       options:['Weil dickere Schnur immer besser ist','Weil unterschiedliche Zielfische und Köder unterschiedliche Tragkraft und Durchmesser erfordern','Weil dünnere Schnur nie reisst','Weil die Schnurstärke nur die Farbe beeinflusst'], correct:1,
       explain:'Je nach Zielfisch, Köder und Umgebung braucht es eine passende Balance aus Tragkraft, Durchmesser und Unauffälligkeit der Schnur.'},
      {q:'Was ist ein Kunstköder?',
       options:['Ein lebender Wurm im Köderdöschen','Ein Naturköder aus Teig','Ein künstlich hergestellter Köder, der einen echten Beutefisch oder ein Beutetier imitiert','Ein spezielles Vorfach'], correct:2,
       explain:'Kunstköder wie Wobbler, Spinner oder Gummifische imitieren mit Form, Farbe und Bewegung ein natürliches Beutetier.'},
      {q:'Welcher Fisch ist auf dem Bild zu sehen?', fish:'egli',
       options:['Flussbarsch','Hecht','Bachforelle','Rotauge'], correct:0,
       explain:'Die dunklen Querstreifen und die rötlichen Flossen sind typisch für den Flussbarsch.'}
    ],
    mittel: [
      {q:'Warum ist eine gut eingestellte Bremse der Angelrolle wichtig?',
       options:['Sie macht die Rolle leichter','Sie verändert die Farbe der Schnur','Sie ist nur bei kleinen Fischen wichtig','Sie lässt bei starkem Zug kontrolliert Schnur nach und verhindert einen Schnurriss'], correct:3,
       explain:'Eine richtig eingestellte Bremse gibt bei plötzlichem Zug nach, bevor die Schnur reisst, und ermüdet den Fisch kontrolliert.'},
      {q:'Welche Angelmethode wird häufig mit Spinnern und Wobblern verwendet?',
       options:['Spinnfischen','Grundangeln mit Naturköder','Fliegenfischen','Posenfischen auf Weissfisch'], correct:0,
       explain:'Spinner und Wobbler sind klassische Kunstköder für das aktive Spinnfischen auf Raubfisch.'},
      {q:'Warum kann die Wassertemperatur das Verhalten von Fischen beeinflussen?',
       options:['Sie hat keinen Einfluss auf Fische','Sie wirkt sich auf Stoffwechsel, Aktivität und Standort der Fische aus','Sie verändert nur die Wasserfarbe','Sie beeinflusst nur Wasserpflanzen'], correct:1,
       explain:'Fische sind wechselwarm, Wassertemperatur beeinflusst direkt ihren Stoffwechsel, ihre Aktivität und wo sie sich aufhalten.'},
      {q:'Was ist beim Drill eines grossen Fisches besonders wichtig?',
       options:['Die Schnur sofort straff durchzuziehen','Die Rute loszulassen','Gleichmässiger Druck über Rute und Bremse, ohne die Schnur zu überlasten','Den Fisch möglichst schnell mit blossen Händen zu greifen'], correct:2,
       explain:'Kontrollierter, gleichmässiger Druck über die gebogene Rute und die Bremse ermüdet den Fisch, ohne dass Schnur oder Haken überlastet werden.'},
      {q:'Welcher Fisch ist auf dem Bild zu sehen?', fish:'forelle',
       options:['Zander','Bachforelle','Flussbarsch','Karpfen'], correct:1,
       explain:'Die rötlichen und dunklen Tupfen auf olivbraunem Grund sind das typische Merkmal der Bachforelle.'},
      {q:'Warum kann ein Vorfach beim Raubfischangeln wichtig sein?',
       options:['Es macht den Köder schwerer','Es färbt die Hauptschnur','Es ersetzt die Rolle','Es schützt vor scharfen Zähnen oder Kanten und macht die Verbindung zum Köder unauffälliger'], correct:3,
       explain:'Ein Vorfach aus Stahl oder speziellem Material schützt vor scharfen Zähnen mancher Raubfische und kann die Verbindung zum Köder unauffälliger gestalten.'},
      {q:'Was passiert normalerweise, wenn man einen schweren Köder mit einer dafür ungeeigneten leichten Rute wirft?',
       options:['Der Wurf wird ungenau und die Rute kann überlastet werden','Der Köder fliegt automatisch weiter','Die Schnur wird automatisch dicker','Nichts, das Wurfgewicht spielt keine Rolle'], correct:0,
       explain:'Passt das Ködergewicht nicht zum Wurfgewicht der Rute, wird der Wurf ungenau und die Rute kann überlastet oder beschädigt werden.'},
      {q:'Welche Eigenschaft eines Kunstköders beeinflusst häufig seine Aktion im Wasser?',
       options:['Nur die Verpackung','Der Name des Herstellers','Form und Tauchschaufel des Köders','Nur die Hakenfarbe'], correct:2,
       explain:'Form, Gewichtsverteilung und Tauchschaufel bestimmen, wie ein Kunstköder im Wasser läuft, taumelt oder vibriert.'},
      {q:'Warum können Fische an unterschiedlichen Stellen eines Sees stehen?',
       options:['Weil sie zufällig schwimmen und keinen Grund haben','Wegen Faktoren wie Temperatur, Sauerstoff, Nahrungsangebot und Deckung','Weil alle Fische immer an derselben Stelle stehen','Weil es an jeder Stelle im See gleich ist'], correct:1,
       explain:'Temperaturschichten, Sauerstoffgehalt, Nahrungsangebot und Deckung durch Strukturen bestimmen, wo sich Fische bevorzugt aufhalten.'},
      {q:'Was sollte man vor dem Angeln an einem unbekannten Gewässer zuerst überprüfen?',
       options:['Nur die Wettervorhersage','Nur die Ködermarke','Gar nichts, man kann einfach loslegen','Die geltenden Vorschriften, Patentpflicht und erlaubten Angelstellen'], correct:3,
       explain:'Vor dem Angeln an einem neuen Gewässer sollte man sich über geltende Vorschriften, Patentpflicht und erlaubte Stellen informieren.'}
    ],
    schwer: [
      {q:'Warum kann ein zu stark eingestellter Rollenwiderstand beim Drill problematisch sein?',
       options:['Er macht den Fisch schneller müde ohne jedes Risiko','Er kann bei einem plötzlichen Zug zu einem Schnurriss oder Ausreissen des Hakens führen','Er hat überhaupt keinen Effekt','Er verlängert automatisch die Schnur'], correct:1,
       explain:'Ist die Bremse zu hart eingestellt, kann ein plötzlicher, kräftiger Zug des Fisches die Schnur reissen lassen oder den Haken ausreissen.'},
      {q:'Warum kann eine geflochtene Schnur beim Spinnfischen Vorteile haben?',
       options:['Sie hat kaum Dehnung und überträgt Bisse sowie Köderaktion sehr direkt','Sie ist immer unsichtbarer als monofile Schnur','Sie schwimmt automatisch immer obenauf','Sie ist grundsätzlich billiger als jede andere Schnur'], correct:0,
       explain:'Geflochtene Schnur dehnt sich kaum, dadurch spürt man Bisse und die Köderaktion sehr direkt und der Anhieb kommt ohne Verzögerung an.'},
      {q:'Was bedeutet „Wurfgewicht" bei einer Angelrute?',
       options:['Das Eigengewicht der Rute in Gramm','Das Gewicht der Rolle','Den Gewichtsbereich an Ködern oder Montagen, den die Rute sicher werfen kann','Das maximale Gewicht des Fisches, den man fangen darf'], correct:2,
       explain:'Das Wurfgewicht gibt den Bereich an Köder- oder Montagegewicht an, für den die Rute konstruiert ist und den sie sicher werfen kann.'},
      {q:'Warum kann eine Angelschnur mit geringer Dehnung beim Spinnfischen hilfreich sein?',
       options:['Weil sie sich nie verheddern kann','Weil sie Bisse direkter überträgt und einen schnelleren, direkteren Anhieb ermöglicht','Weil sie automatisch unsichtbar wird','Weil sie nie reisst, egal wie stark der Zug ist'], correct:1,
       explain:'Wenig Dehnung sorgt für direkte Bissübertragung und einen schnelleren, präziseren Anhieb, allerdings verzeiht sie Fehler beim Drill weniger.'},
      {q:'Welche Situation kann für Raubfische besonders interessant sein?',
       options:['Eine komplett strukturlose, offene Wasserfläche ohne jede Besonderheit','Nur die Mitte eines Sees in grosser Tiefe','Ausschliesslich sehr flache, warme Buchten im Hochsommer','Übergänge wie Kanten, Krautfelder oder Strukturen, an denen sich Beutefische aufhalten'], correct:3,
       explain:'Kanten, Krautfelder, Totholz oder andere Strukturen bieten Deckung und locken Beutefische an, was sie auch für Raubfische attraktiv macht.'},
      {q:'Welcher Fisch ist auf dem Bild zu sehen?', fish:'rotauge',
       options:['Rotauge','Bachforelle','Zander','Hecht'], correct:0,
       explain:'Die goldbraunen Schuppen und die kräftig roten Flossen und Augen sind typisch für das Rotauge.'},
      {q:'Warum kann die Wahl der Hakengrösse wichtig sein?',
       options:['Grössere Haken fangen immer automatisch mehr Fische','Die Hakengrösse hat keinen Einfluss auf den Fang','Sie muss zu Ködergrösse und Zielfisch passen, damit der Anhieb sicher greift','Kleinere Haken sind grundsätzlich immer stabiler'], correct:2,
       explain:'Ein zur Ködergrösse und zum Zielfisch passender Haken erhöht die Chance, dass der Anhieb sicher greift, ohne den Köder unnatürlich wirken zu lassen.'},
      {q:'Was kann passieren, wenn ein Fisch während des Drills plötzlich in ein Hindernis schwimmt?',
       options:['Die Schnur kann sich verfangen oder durchscheuern und reissen','Der Fisch verliert automatisch seine Kraft','Die Rute wird automatisch stärker','Es hat keinerlei Auswirkung auf den Drill'], correct:0,
       explain:'Flüchtet ein Fisch in Totholz, Kraut oder Steine, kann sich die Schnur verfangen oder an Kanten durchscheuern und reissen.'},
      {q:'Warum kann die Präsentation eines Köders wichtiger sein als seine Farbe?',
       options:['Weil Fische farbenblind sind und Farbe nie eine Rolle spielt','Weil eine natürliche Bewegung und Führung oft entscheidender ist als die Optik allein','Weil Farbe immer wichtiger ist als jede Köderführung','Weil Präsentation und Köderführung beim Angeln keine Rolle spielen'], correct:1,
       explain:'Eine natürlich wirkende Führung überzeugt einen Fisch oft mehr als die reine Köderfarbe, auch ein perfekt gefärbter Köder fängt bei unnatürlicher Führung schlechter.'},
      {q:'Welche Kombination ist beim gezielten Angeln auf einen bestimmten Fisch am sinnvollsten?',
       options:['Irgendeine beliebige Kombination, das Ergebnis ist immer gleich','Immer die schwerste verfügbare Rute und dickste Schnur','Ausschliesslich der teuerste Köder im Geschäft','Rute, Schnur, Köder und Technik, die auf die Zielfischart abgestimmt sind'], correct:3,
       explain:'Wer gezielt auf eine Fischart angelt, stimmt Rute, Schnur, Köder und Technik am besten auf deren Verhalten und Lebensraum ab.'}
    ]
  };

  var DIFFICULTY_META = {
    leicht: {label:'Leicht', seconds:30},
    mittel: {label:'Mittel', seconds:25},
    schwer: {label:'Schwer', seconds:20}
  };

  var TIERS = [
    {max:2,  icon:'🪱', title:'Frisch aus der Wurmkiste', msg:'Der Haken bleibt heute meist leer. Ein paar Runden Übung, und der erste richtige Fang ist nicht mehr weit. 😅'},
    {max:4,  icon:'🎣', title:'Anfänger am Ufer', msg:'Die Grundlagen sitzen noch nicht ganz, aber du findest langsam deinen Platz am Wasser.'},
    {max:6,  icon:'🐟', title:'Hobby-Angler', msg:'Solide Kenntnisse. Ein paar Lücken bleiben offen, aber du weisst, wovon du redest.'},
    {max:8,  icon:'🎯', title:'Erfahrener Petrijünger', msg:'Fast nichts entgeht dir am Wasser, nur die letzten Details fehlen zur Perfektion.'},
    {max:10, icon:'🏆', title:'Profi-Angler', msg:'Absolute Bestmarke! Am Wasser entgeht dir wirklich nichts. 🎉'}
  ];

  var els = {
    topbar: document.getElementById('topbar'),
    railFish: document.getElementById('railFish'),
    ringFg: document.getElementById('ringFg'),
    timerNum: document.getElementById('timerNum'),
    screenStart: document.getElementById('screen-start'),
    screenQuiz: document.getElementById('screen-quiz'),
    screenResult: document.getElementById('screen-result'),
    diffGrid: document.getElementById('diffGrid'),
    nameInput: document.getElementById('nameInput'),
    startBtn: document.getElementById('startBtn'),
    qBadge: document.getElementById('qBadge'),
    qCount: document.getElementById('qCount'),
    photoTag: document.getElementById('photoTag'),
    qText: document.getElementById('qText'),
    qImage: document.getElementById('qImage'),
    qOptions: document.getElementById('qOptions'),
    qExplain: document.getElementById('qExplain'),
    tierIcon: document.getElementById('tierIcon'),
    tierTitle: document.getElementById('tierTitle'),
    tierMsg: document.getElementById('tierMsg'),
    scoreBig: document.getElementById('scoreBig'),
    againBtn: document.getElementById('againBtn'),
    lbTitle: document.getElementById('lbTitle'),
    bestScoreLine: document.getElementById('bestScoreLine'),
    bestNote: document.getElementById('bestNote')
  };

  var RING_CIRC = 2 * Math.PI * 19;
  els.ringFg.style.strokeDasharray = RING_CIRC.toFixed(1);

  var state = { difficulty:'mittel', order:[], idx:0, score:0, name:'', timerId:null, timeLeft:30, timeLimit:25, answered:false };

  function shuffled(arr){
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--){
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function showScreen(name){
    els.screenStart.hidden = name !== 'start';
    els.screenQuiz.hidden = name !== 'quiz';
    els.screenResult.hidden = name !== 'result';
    els.topbar.hidden = name !== 'quiz';
  }

  function setRailProgress(fraction){
    var pct = Math.max(0, Math.min(1, fraction)) * 100;
    document.querySelector('.rail-track').style.setProperty('--fill', pct + '%');
    els.railFish.style.left = 'calc(14px + ' + pct + '% * 0.85)';
  }

  Array.prototype.slice.call(els.diffGrid.querySelectorAll('.diff-card')).forEach(function(card){
    card.addEventListener('click', function(){
      Array.prototype.slice.call(els.diffGrid.querySelectorAll('.diff-card')).forEach(function(c){ c.classList.remove('selected'); });
      card.classList.add('selected');
      state.difficulty = card.getAttribute('data-diff');
    });
  });

  function startQuiz(){
    state.name = (els.nameInput.value || '').trim() || 'Anonymer Angler';
    var meta = DIFFICULTY_META[state.difficulty];
    state.timeLimit = meta.seconds;
    state.order = shuffled(QUESTION_BANK[state.difficulty]);
    state.idx = 0;
    state.score = 0;
    showScreen('quiz');
    setRailProgress(0);
    renderQuestion();
  }

  function renderQuestion(){
    var q = state.order[state.idx];
    var meta = DIFFICULTY_META[state.difficulty];
    state.answered = false;
    els.qBadge.textContent = meta.label;
    els.qBadge.className = 'badge badge-' + state.difficulty;
    els.qCount.textContent = 'Frage ' + (state.idx + 1) + ' / ' + state.order.length;
    els.qText.textContent = q.q;
    els.photoTag.hidden = !q.fish;

    if (q.fish && FISH_ART[q.fish]){
      els.qImage.innerHTML = FISH_ART[q.fish];
      els.qImage.hidden = false;
    } else {
      els.qImage.hidden = true;
      els.qImage.innerHTML = '';
    }

    els.qOptions.innerHTML = '';
    q.options.forEach(function(opt, i){
      var btn = document.createElement('button');
      btn.className = 'option';
      btn.type = 'button';
      btn.innerHTML = '<span class="idx">' + String.fromCharCode(65 + i) + '</span><span>' + opt + '</span>';
      btn.addEventListener('click', function(){ handleAnswer(i); });
      els.qOptions.appendChild(btn);
    });

    els.qExplain.hidden = true;
    els.qExplain.textContent = '';

    startTimer();
  }

  function startTimer(){
    clearInterval(state.timerId);
    state.timeLeft = state.timeLimit;
    updateRing();
    state.timerId = setInterval(function(){
      state.timeLeft--;
      updateRing();
      if (state.timeLeft <= 0){
        clearInterval(state.timerId);
        handleAnswer(-1);
      }
    }, 1000);
  }

  function updateRing(){
    els.timerNum.textContent = Math.max(0, state.timeLeft);
    var frac = Math.max(0, state.timeLeft) / state.timeLimit;
    els.ringFg.style.strokeDashoffset = (RING_CIRC * (1 - frac)).toFixed(1);
    els.ringFg.style.stroke = state.timeLeft <= Math.ceil(state.timeLimit * 0.25) ? 'var(--danger)' : 'var(--accent)';
  }

  function handleAnswer(selectedIdx){
    if (state.answered) return;
    state.answered = true;
    clearInterval(state.timerId);

    var q = state.order[state.idx];
    var buttons = els.qOptions.querySelectorAll('.option');
    buttons.forEach(function(btn, i){
      btn.disabled = true;
      if (i === q.correct) btn.classList.add('correct');
      else if (i === selectedIdx) btn.classList.add('wrong');
    });

    if (selectedIdx === q.correct) state.score++;

    els.qExplain.hidden = false;
    els.qExplain.innerHTML = '<strong>' + (selectedIdx === q.correct ? 'Richtig. ' : 'Leider falsch. ') + '</strong>' + q.explain;

    setRailProgress((state.idx + 1) / state.order.length);

    setTimeout(function(){
      state.idx++;
      if (state.idx >= state.order.length) finishQuiz();
      else renderQuestion();
    }, 2600);
  }

  function finishQuiz(){
    showScreen('result');
    renderResult();
  }

  function bestKey(difficulty){
    return 'anglerquiz_best_' + difficulty;
  }

  function getBest(difficulty){
    try {
      var raw = localStorage.getItem(bestKey(difficulty));
      return raw ? JSON.parse(raw) : null;
    } catch (e){
      return null;
    }
  }

  function saveBest(difficulty, score, total){
    try {
      localStorage.setItem(bestKey(difficulty), JSON.stringify({ score: score, total: total }));
    } catch (e){}
  }

  function renderResult(){
    var tier = TIERS.find(function(t){ return state.score <= t.max; }) || TIERS[TIERS.length - 1];
    var meta = DIFFICULTY_META[state.difficulty];
    els.tierIcon.textContent = tier.icon;
    els.tierTitle.textContent = tier.title;
    els.tierMsg.textContent = tier.msg;
    els.scoreBig.textContent = state.score + ' / ' + state.order.length + ' richtig · ' + meta.label + ' · ' + state.name;
    els.lbTitle.textContent = 'Deine Bestleistung · ' + meta.label;

    var prevBest = getBest(state.difficulty);
    var isNewRecord = !prevBest || state.score > prevBest.score;
    if (isNewRecord) saveBest(state.difficulty, state.score, state.order.length);
    var bestScore = isNewRecord ? state.score : prevBest.score;

    els.bestScoreLine.textContent = bestScore + ' / ' + state.order.length;
    els.bestNote.textContent = isNewRecord
      ? 'Neue persönliche Bestleistung auf diesem Gerät! 🎉'
      : 'Aktueller Versuch: ' + state.score + ' / ' + state.order.length + '.';
  }

  els.startBtn.addEventListener('click', startQuiz);
  els.nameInput.addEventListener('keydown', function(e){ if (e.key === 'Enter') startQuiz(); });
  els.againBtn.addEventListener('click', function(){ showScreen('start'); });

})();
