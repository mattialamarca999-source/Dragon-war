/* ===== Dragon War – motore della battaglia (logica pura, senza disegno) ===== */
const DW = (() => {
  // side 0 = noi (I Senza Lieto Fine, marciano verso destra) · side 1 = il castello (i buoni, verso sinistra)
  const U = {
    goblin:     {side:0, cost:50,  cd:2,  hp:65,  dmg:12, rate:.8,  range:20,  spd:55},
    topi:       {side:0, cost:80,  cd:6,  group:{k:'topo', n:5}},
    topo:       {side:0, sub:1, small:1, hp:11, dmg:3, rate:.6, range:14, spd:80},
    lupo:       {side:0, cost:80,  cd:3,  hp:70,  dmg:13, rate:.7,  range:20,  spd:95, beast:1},
    fionda:     {side:0, cost:90,  cd:4,  hp:40,  dmg:9,  rate:1.1, range:140, spd:45, ranged:1},
    gattovolpe: {side:0, cost:60, cd:5,  hp:81, dmg:8, rate:.9,  range:20,  spd:70, steal:3, beast:1},
    gnomo:      {side:0, cost:120, cd:6,  hp:60,  dmg:22, rate:2,   range:110, spd:55, ranged:1, splash:50},
    spaventapasseri:{side:0, cost:80, cd:7, hp:141, dmg:9, rate:1.4, range:22, spd:35, onDeath:{k:'corvo', n:3}},
    corvo:      {side:0, sub:1, small:1, hp:15, dmg:6, rate:.8, range:18, spd:90},
    strega:     {side:0, cost:140, cd:6,  hp:70,  dmg:14, rate:1.6, range:150, spd:40, ranged:1, splash:40},
    fantasma:   {side:0, cost:80,  cd:8,  hp:66,  dmg:22, rate:1.4, range:24,  spd:45, ghost:1},
    coccodrillo:{side:0, cost:160, cd:7,  hp:220, dmg:30, rate:1.3, range:24,  spd:45, beast:1},
    orco:       {side:0, cost:180, cd:8,  hp:320, dmg:18, rate:1.4, range:24,  spd:30},
    barbablu:   {side:0, cost:140, cd:9,  hp:251, dmg:18, rate:1.5, range:26,  spd:38, fear:{every:7, r:130, t:1}},
    uncino:     {side:0, cost:150, cd:10, hp:215, dmg:20, rate:1.1, range:26,  spd:55, hook:{every:5, r:150}},
    mangiafuoco:{side:0, cost:260, cd:12, hp:280, dmg:20, rate:1.8, range:26,  spd:28, summon:{k:'burattino', every:5, max:3}},
    burattino:  {side:0, sub:1, small:1, hp:40, dmg:8, rate:1, range:18, spd:50},
    tremotino:  {side:0, cost:150, cd:8,  hp:133, dmg:12, rate:1,   range:22,  spd:50, steal:3, kidnap:{every:18, r:140, maxHp:170}},
    // ---- i nuovi, più rari ----
    matrigna:   {side:0, cost:80,  cd:6, group:{ks:['matrigna_m', 'sorella', 'sorella']}},
    matrigna_m: {side:0, sub:1, hp:109, dmg:11, rate:1,   range:22, spd:45, slowHit:{t:1.8}},
    sorella:    {side:0, sub:1, hp:69,  dmg:7, rate:.9,  range:20, spd:50, slowHit:{t:1.8}},
    retopi:     {side:0, cost:170, cd:8, hp:280, dmg:16, rate:1,   range:22,  spd:45, summon:{k:'topo', every:5, max:6}, ratAura:{r:160, m:1.8}},
    omino:      {side:0, cost:150, cd:9, hp:210, dmg:13, rate:1.2, range:24,  spd:40, donkey:{every:12, r:140, maxHp:160}},
    babajaga:   {side:0, cost:300, cd:12, hp:1050, dmg:30, rate:1.6, range:30, spd:26, splash:55, siege:1.5},
    stregamare: {side:0, cost:150, cd:9, hp:116, dmg:13, rate:1.5, range:140, spd:40, ranged:1, mute:{every:10, r:170, t:5}},
    reginacattiva:{side:0, cost:320, cd:12, hp:420, dmg:26, rate:1.3, range:130, spd:38, ranged:1, splash:30, mirror:{every:11, r:220}},
    reginanevi: {side:0, cost:340, cd:12, hp:340, dmg:22, rate:1.5, range:140, spd:38, ranged:1, splash:50, freeze:{every:13, t:2.5}},
    // ---- leggende, Grimm, Esopo ----
    morgana:    {side:0, cost:270, cd:12, hp:240, dmg:20, rate:1.4, range:140, spd:38, ranged:1, splash:35, mirage:{every:10, n:2, ttl:8}},
    miraggio:   {side:0, sub:1, hp:90, dmg:0, rate:99, range:20, spd:42},
    basilisco:  {side:0, cost:340, cd:12, hp:600, dmg:30, rate:1.3, range:120, spd:30, beast:1, ranged:1, splash:35, petrify:{every:8, n:3, r:260, t:4}},
    grifone:    {side:0, cost:150, cd:12, hp:283, dmg:22, rate:1.1, range:24, spd:70, fly:1, beast:1, splash:25, dive:{every:9}},
    cavaliereverde:{side:0, cost:350, cd:12, hp:850, dmg:40, rate:1.5, range:32, spd:32, splash:45, revive:.8},
    spirito:    {side:0, cost:240, cd:10, hp:300, dmg:20, rate:1.2, range:26, spd:40, grow:{every:12, t:4}},
    bestia:     {side:0, cost:140, cd:9,  hp:245, dmg:15, rate:.8, range:22, spd:90, beast:1, fear:{every:9, r:120, t:1.2}},
    pandizenzero:{side:0, cost:30, cd:5, hp:50,  dmg:7, rate:.7, range:18, spd:120, dodge:.3},
    ciclope:    {side:0, cost:280, cd:11, hp:500, dmg:30, rate:2.2, range:150, spd:26, ranged:1, splash:55},
    senzatesta: {side:0, cost:150, cd:10, hp:171, dmg:10, rate:1.6, range:110, spd:60, ranged:1, splash:20, fear:{every:12, r:110, t:1}},
    dracula:    {side:0, cost:300, cd:10, hp:420, dmg:28, rate:1, range:24, spd:46, drain:.7, splash:30, summon:{k:'pipistrello', every:6, max:5}},   // il secondo segreto: fortissimo
    pipistrello:{side:0, sub:1, small:1, hp:25, dmg:6, rate:.7, range:16, spd:95, fly:1},
    reginacuori:{side:0, cost:140, cd:7, group:{ks:['reginacuori_q', 'carta', 'carta']}},
    reginacuori_q:{side:0, sub:1, hp:150, dmg:12, rate:1.2, range:22, spd:40, behead:{every:9, r:150, maxHp:120}},
    carta:      {side:0, sub:1, hp:70,  dmg:9,  rate:.9, range:20, spd:48},
    stregone:   {side:0, cost:130, cd:6, hp:80,  dmg:11, rate:1.6, range:140, spd:40, ranged:1, splash:20, genie:{every:12, r:60, dmg:24}},
    pescecane:  {side:0, cost:240, cd:10, hp:620, dmg:22, rate:1.6, range:30, spd:22, beast:1, swallow:{every:12, r:60, maxHp:220}},
    diavolo:    {side:0, cost:340, cd:12, hp:580, dmg:30, rate:1.3, range:28, spd:36, splash:35, burn:{t:3, k:.45}, revive:.5},
    mummia:     {side:0, cost:80, cd:8, hp:144, dmg:9, rate:1.1, range:22, spd:34, curse:{t:3, m:.7}, revive:.35},
    medusa:     {side:0, cost:280, cd:11, hp:340, dmg:20, rate:1.3, range:110, spd:34, ranged:1, splash:25, gaze:{every:12, r:200, t:2.5}},
    // ---- mostri delle leggende: 4 mitici, 4 epici, 2 comuni ----
    krampus:    {side:0, cost:200, cd:10, hp:380, dmg:24, rate:1.3, range:26, spd:40, chain:{every:7, r:150, d:110, t:1.6}},
    jabberwocky:{side:0, cost:240, cd:11, hp:320, dmg:16, rate:1.5, range:100, spd:50, fly:1, beast:1, ranged:1, splash:30, burn:{t:3, k:.35}},
    kraken:     {side:0, cost:260, cd:11, hp:520, dmg:16, rate:1.5, range:60, spd:26, beast:1, tentacle:{every:9, r:130, n:3, dmg:14, t:1.5}},
    idra:       {side:0, cost:280, cd:12, hp:600, dmg:18, rate:1.3, range:30, spd:30, beast:1, splash:30, heads:{m:1.5}},
    mordred:    {side:0, cost:220, cd:10, hp:280, dmg:20, rate:1.3, range:26, spd:40, betray:{every:16, r:140, maxHp:150}},
    lupomannaro:{side:0, cost:180, cd:9,  hp:280, dmg:20, rate:.9, range:22, spd:60, beast:1, moon:{dmg:.8, spd:.6}},
    frankenstein:{side:0, cost:200, cd:10, hp:420, dmg:22, rate:1.6, range:26, spd:28, revive:.7},
    hyde:       {side:0, cost:160, cd:9,  hp:260, dmg:16, rate:1.1, range:22, spd:45, hyde:{t:5, m:2, spd:1.3}},
    trollponte: {side:0, cost:120, cd:7,  hp:290, dmg:10, rate:1.5, range:24, spd:28},
    scheletri:  {side:0, cost:90,  cd:6,  group:{k:'scheletro', n:3}},
    scheletro:  {side:0, sub:1, hp:32, dmg:7, rate:.8, range:18, spd:55},
    // ---- un cattivo per ogni mondo dal 6 al 15: si sblocca battendo il boss del suo mondo ----
    pupazzo:    {side:0, cost:70,  cd:4,  hp:70,  dmg:10, rate:.9, range:20, spd:60, spring:{every:8, r:80, t:1.2}},
    zucca:      {side:0, cost:260, cd:11, hp:620, dmg:20, rate:1.5, range:28, spd:32, roll:{every:9, d:130, dmg:36, kb:50}},
    gothel:     {side:0, cost:140, cd:7,  hp:150, dmg:15, rate:1.2, range:50, spd:42, hook:{every:7, r:180}},
    marzapane:  {side:0, cost:210, cd:9,  hp:220, dmg:12, rate:1.4, range:130, spd:38, ranged:1, splash:20, cookie:{every:12, r:190, t:3.5, m:3}},
    alberich:   {side:0, cost:110, cd:6,  hp:170, dmg:13, rate:.9, range:20, spd:50, steal:9},
    sirena:     {side:0, cost:160, cd:8,  hp:120, dmg:11, rate:1.3, range:130, spd:38, ranged:1, song:{every:12, r:150, t:1.8}},
    bandersnatch:{side:0, cost:180, cd:8, hp:230, dmg:18, rate:.8, range:22, spd:100, beast:1, dash:{every:3.5, r:170, m:1.6}},
    ladroni:    {side:0, cost:100, cd:6,  group:{ks:['capoladroni', 'ladrone', 'ladrone', 'ladrone']}},
    capoladroni:{side:0, sub:1, hp:110, dmg:11, rate:.9, range:22, spd:55, steal:3},
    ladrone:    {side:0, sub:1, hp:38,  dmg:6,  rate:.8, range:18, spd:70, steal:1},
    gigantegh:  {side:0, cost:320, cd:13, hp:860, dmg:31, rate:2.1, range:32, spd:20, splash:45, stomp:{every:9, r:120, t:2.2}},
    trollspecchio:{side:0, cost:230, cd:9, hp:200, dmg:16, rate:1.3, range:140, spd:42, ranged:1, fly:1, bounce:{n:2, k:.6, r:110}},
    dragonero:  {side:0, cost:340, cd:12, hp:460, dmg:24, rate:1.4, range:120, spd:42, fly:1, beast:1, ranged:1, splash:40, burn:{t:3, k:.4}},   // il Drago Nero: solo dal Pass del Drago
    gigante:    {side:0, cost:350, cd:14, hp:700, dmg:30, rate:2.4, range:30,  spd:22, siege:3},
    // ---- nuovi comuni e rari (8 nov 2026) ----
    sciame:     {side:0, cost:60,  cd:5,  group:{k:'pipsciame', n:5}},
    pipsciame:  {side:0, sub:1, small:1, hp:16, dmg:4, rate:.7, range:16, spd:100, fly:1},
    ragno:      {side:0, cost:70,  cd:4,  hp:110, dmg:9,  rate:1,   range:22, spd:55, beast:1, slowHit:{t:2}},
    zombie:     {side:0, cost:80,  cd:6,  hp:150, dmg:11, rate:1.3, range:20, spd:26, revive:.5},
    lupetti:    {side:0, cost:90,  cd:5,  group:{k:'lupetto', n:3}},
    lupetto:    {side:0, sub:1, small:1, hp:32, dmg:7, rate:.7, range:18, spd:100, beast:1},
    scimmie:    {side:0, cost:100, cd:6,  group:{k:'scimmia', n:3}},
    scimmia:    {side:0, sub:1, hp:40, dmg:8, rate:.9, range:18, spd:70, fly:1},
    gargoyle:   {side:0, cost:150, cd:8,  hp:380, dmg:13, rate:1.5, range:24, spd:24, armorRanged:.5},
    stregatto:  {side:0, cost:110, cd:6,  hp:120, dmg:14, rate:.9,  range:20, spd:65, beast:1, vanish:{every:9, t:2.5}, disguise:2},
    stregaovest:{side:0, cost:170, cd:8,  hp:110, dmg:13, rate:1.5, range:140, spd:40, ranged:1, splash:25, summon:{k:'scimmia', every:9, max:2}},
    sherekhan:  {side:0, cost:160, cd:8,  hp:230, dmg:20, rate:1,   range:22, spd:70, beast:1, dive:{every:8}},
    fuocofatuo: {side:0, cost:40,  cd:4,  hp:45,  dmg:6,  rate:.8,  range:18, spd:115, burn:{t:3, k:.6}},                 // comune: velocissimo, brucia chi tocca
    diavoletto: {side:0, cost:50,  cd:5,  hp:75,  dmg:6,  rate:1,   range:22, spd:70, double:1},                          // comune: due colpi di forcone di fila
    rospo:      {side:0, cost:60,  cd:5,  hp:85,  dmg:8,  rate:1.4, range:100, spd:40, beast:1, ranged:1, burn:{t:4, k:.5}},   // comune: sputa veleno
    cornacchia: {side:0, cost:70,  cd:6,  hp:75,  dmg:10, rate:.9,  range:20, spd:80, fly:1, beast:1, loot:15},           // comune: ogni buono che abbatte dà +15 Cattiveria
    lumacone:   {side:0, cost:50,  cd:6,  hp:240, dmg:6,  rate:1.5, range:22, spd:18, beast:1, slime:{r:70}},             // raro: la bava rallenta i buoni vicini
    ecate:      {side:0, cost:300, cd:12, hp:380, dmg:0,  rate:1.1, range:120, spd:34, heal:34, inspire:{every:8, r:140, t:4}},   // leggendaria: cura e rende più forti
    circe:      {side:0, cost:260, cd:11, hp:300, dmg:0,  rate:1.3, range:110, spd:34, heal:26, pig:{every:12, r:200, t:4}},     // mitica: cura e trasforma un buono in maiale
    minotauro:  {side:0, cost:320, cd:12, hp:660, dmg:32, rate:1.5, range:28, spd:40, beast:1, splash:30, roll:{every:8, d:120, dmg:40, kb:70}},   // segreto: 30 giorni di fila · carica e sfonda la prima fila
    fenice:     {side:0, cost:300, cd:11, hp:300, dmg:22, rate:1.2, range:110, spd:55, fly:1, beast:1, ranged:1, splash:25, burn:{t:3, k:.4}, revive:1, rebirth:{dmg:60, r:90}},   // segreto: 20 castelli in meno di 2 minuti · esplode e rinasce
    // i buoni
    soldatino:  {side:1, hp:70,  dmg:9,  rate:.9,  range:20,  spd:42, bounty:20},
    arciere:    {side:1, hp:45,  dmg:10, rate:1.3, range:150, spd:38, bounty:30, ranged:1},
    principe:   {side:1, hp:380, dmg:26, rate:1.5, range:26,  spd:30, bounty:90},
    cacciatore: {side:1, hp:160, dmg:16, rate:1.2, range:22,  spd:40, bounty:45, vsBeast:3},
    spiritista: {side:1, hp:110, dmg:10, rate:1.1, range:60,  spd:50, bounty:35, vsGhost:2},   // il cacciatore di spiriti: lanterna e sale contro i fantasmi
    porcellino: {side:1, hp:330, dmg:8,  rate:1.4, range:20,  spd:26, bounty:60, armorRanged:.5},
    fata:       {side:1, hp:80,  dmg:0,  rate:2.5, range:120, spd:40, bounty:50, heal:28},
    re:         {side:1, hp:1300, dmg:32, rate:2.2, range:34, spd:18, bounty:300, splash:50, boss:1},
    hanselgretel:{side:1, hp:70, dmg:9,  rate:1.2, range:130, spd:45, bounty:30, ranged:1},
    nani:       {side:1, group:{k:'nano', n:7}},
    nano:       {side:1, sub:1, hp:22, dmg:5, rate:.8, range:16, spd:45, bounty:6},
    raperonzolo:{side:1, hp:110, dmg:14, rate:1.4, range:70,  spd:40, bounty:40},
    pifferaio:  {side:1, hp:90,  dmg:6,  rate:1.5, range:150, spd:35, bounty:50, ranged:1, charm:{every:6, r:170, t:3}},
    musicanti:  {side:1, hp:300, dmg:6,  rate:2,   range:60,  spd:30, bounty:70, stunAura:{every:5, r:80, t:1}},
    carrozza:   {side:1, hp:260, dmg:12, rate:1.5, range:26,  spd:90, bounty:60, charge:{dmg:40, r:50, kb:70}},
    ranocchio:  {side:1, hp:100, dmg:14, rate:1.2, range:20,  spd:60, bounty:35, leap:{every:6, d:80}},
    peterpan:   {side:1, hp:65, dmg:9, rate:1, range:22, spd:65, bounty:40, fly:1},
    cappuccetto:{side:1, hp:80,  dmg:11, rate:.9,  range:20,  spd:70, bounty:30},
    robinhood:  {side:1, hp:70,  dmg:12, rate:1.3, range:160, spd:40, bounty:45, ranged:1, manaSteal:2},
    gattostivali:{side:1, hp:140, dmg:17, rate:1,  range:24,  spd:60, bounty:45, dodge:.3},
    biancaneve: {side:1, hp:110, dmg:8,  rate:1.4, range:110, spd:38, bounty:50, ranged:1, healAura:{every:5, r:100, n:18}},
    pinocchio:  {side:1, hp:110, dmg:11, rate:1.2, range:45,  spd:45, bounty:40},
    merlino:    {side:1, hp:95,  dmg:14, rate:1.9, range:110, spd:34, bounty:60, ranged:1, splash:30},   // gittata 110 (era 150): i cattivi riescono ad arrivargli addosso
    alice:      {side:1, hp:120, dmg:13, rate:1.1, range:22,  spd:50, bounty:45, grow:{every:12, t:4}},
    bimbi:      {side:1, group:{k:'bimbo', n:4}},
    bimbo:      {side:1, sub:1, hp:32, dmg:6, rate:.8, range:18, spd:62, bounty:8, small:1},
    wendy:      {side:1, hp:90,  dmg:6,  rate:1.3, range:100, spd:40, bounty:50, ranged:1, inspire:{every:6, r:130, t:4}},
    giglio:     {side:1, hp:75,  dmg:11, rate:1.1, range:150, spd:70, bounty:40, ranged:1},
    cappellaio: {side:1, hp:110, dmg:12, rate:1.4, range:120, spd:38, bounty:45, ranged:1, splash:15},
    brucaliffo: {side:1, hp:150, dmg:8,  rate:1.3, range:90,  spd:30, bounty:50, ranged:1, smoke:{every:8, r:110, t:2}},
    lepre:      {side:1, hp:80,  dmg:8,  rate:.8,  range:20,  spd:110, bounty:35, leap:{every:5, d:70}},
    alibaba:    {side:1, hp:100, dmg:12, rate:1.2, range:22,  spd:55, bounty:45, manaSteal:3},
    sinbad:     {side:1, hp:260, dmg:20, rate:1.3, range:26,  spd:40, bounty:60},
    guardie:    {side:1, group:{k:'guardia', n:3}},
    guardia:    {side:1, sub:1, hp:110, dmg:12, rate:1.2, range:24, spd:42, bounty:15},
    renna:      {side:1, hp:200, dmg:16, rate:1.2, range:24,  spd:90, bounty:55, beast:1, charge:{dmg:35, r:50, kb:60}},
    fiammiferaia:{side:1, hp:70, dmg:0,  rate:2.4, range:110, spd:40, bounty:50, heal:30},
    soldatineve:{side:1, group:{k:'pupazzoneve', n:3}},
    pupazzoneve:{side:1, sub:1, hp:90, dmg:9, rate:1, range:20, spd:32, bounty:12, armorRanged:.7},
    cavcristallo:{side:1, hp:320, dmg:18, rate:1.4, range:26, spd:34, bounty:70, armorRanged:.4},
    gemelli:    {side:1, group:{k:'gemello', n:2}},
    gemello:    {side:1, sub:1, hp:120, dmg:12, rate:1.1, range:22, spd:50, bounty:20, split:.6},
    pisello:    {side:1, hp:50,  dmg:0,  rate:2,   range:110, spd:38, bounty:55, heal:42},
    tappeto:    {side:1, hp:200, dmg:14, rate:1.1, range:24,  spd:80, bounty:60, fly:1},
    aladino:    {side:1, hp:160, dmg:16, rate:1,   range:24,  spd:60, bounty:60, dodge:.25},
    kai:        {side:1, hp:150, dmg:15, rate:1.1, range:24,  spd:50, bounty:55},
    gerda:      {side:1, hp:120, dmg:6,  rate:2,   range:110, spd:45, bounty:55, heal:35},
    pollicino:  {side:1, hp:60,  dmg:8,  rate:1,   range:120, spd:110, bounty:25, ranged:1}
  };
  const ABIL = ['hook', 'fear', 'summon', 'charm', 'stunAura', 'leap', 'kidnap', 'donkey', 'mute', 'mirror', 'freeze', 'mirage', 'petrify', 'dive', 'grow', 'gaze', 'behead', 'genie', 'swallow', 'healAura', 'midas', 'inspire', 'smoke', 'chain', 'tentacle', 'betray', 'spring', 'roll', 'cookie', 'song', 'dash', 'stomp', 'vanish', 'pig'];
  const PARENT = {topo:'topi', corvo:'spaventapasseri', burattino:'mangiafuoco', matrigna_m:'matrigna', sorella:'matrigna', miraggio:'morgana', pipistrello:'dracula', reginacuori_q:'reginacuori', carta:'reginacuori', scheletro:'scheletri', capoladroni:'ladroni', ladrone:'ladroni', pipsciame:'sciame', lupetto:'lupetti', scimmia:'scimmie'};
  const LEG = new Set(['dracula', 'gigante', 'tremotino', 'reginacattiva', 'reginanevi', 'basilisco', 'cavaliereverde', 'diavolo', 'dragonero', 'minotauro', 'fenice', 'ecate']);   // i leggendari: +25% e entrata in scena
  const LEG_MUL = 1.25;   // i piccoli prendono il livello di chi li porta
  const ROSTER = Object.keys(U).filter(k => U[k].side === 0 && !U[k].sub).sort((a, b) => U[a].cost - U[b].cost);
  const START = ['goblin', 'topi', 'fionda', 'orco'];
  const LEVELS = [
    {name:'Castello del Soldatino', hp:1300, gold:150, shard:'goblin', gift:'lupo',
     waves:[['soldatino', 6, 8], ['arciere', 26, 15], ['principe', 75, 45]],
     rush:['soldatino', 'soldatino', 'soldatino', 'arciere', 'arciere', 'principe']},
    {name:'Casa del Cacciatore', hp:1250, gold:200, shard:'topi', gift:'strega',
     waves:[['soldatino', 6, 9], ['hanselgretel', 20, 22], ['cacciatore', 34, 26], ['principe', 80, 50]],
     rush:['cacciatore', 'cacciatore', 'soldatino', 'hanselgretel', 'hanselgretel']},
    {name:'Casetta dei Tre Porcellini', hp:1450, gold:250, shard:'fionda',
     waves:[['soldatino', 6, 9], ['porcellino', 20, 28], ['arciere', 28, 17], ['nani', 50, 40], ['principe', 90, 55]],
     rush:['porcellino', 'porcellino', 'porcellino', 'arciere', 'arciere']},
    {name:'Torre della Fata Turchina', hp:1650, gold:300, shard:'orco',
     waves:[['soldatino', 6, 8], ['raperonzolo', 18, 20], ['arciere', 24, 17], ['fata', 34, 30], ['principe', 75, 50]],
     rush:['fata', 'raperonzolo', 'arciere', 'soldatino']},
    {name:'Palazzo del Re', hp:1900, gold:500, shard:'gnomo', boss:'re', bossAt:60,
     waves:[['soldatino', 6, 8], ['arciere', 20, 16], ['cacciatore', 35, 26], ['fata', 50, 36], ['principe', 75, 50]],
     rush:['principe', 'fata', 'soldatino', 'arciere', 'arciere']}
  ];
  // ---- semiboss e boss: versioni giganti dei buoni ----
  const ELITE = {                                               // vita e danno sono valori fissi (poi crescono con la forza della mappa)
    musicanti_re:     {base:'musicanti',    name:'Musicanti Capobanda',      boss:1, hp:1300, dmg:10, scale:1.5, tint:'#ffd35a'},
    generale:         {base:'soldatino',    name:'Generale di stagno',       semi:1, hp:700,  dmg:22, scale:1.6, tint:'#e8ecf6'},
    fata_ghiaccio:    {base:'fata',         name:'Fata dei ghiacci',         boss:1, hp:1000, heal:45, scale:1.6, tint:'#bfe8ff'},
    capo_nani:        {base:'nano',         name:'Capo dei Nani',            semi:1, hp:650,  dmg:18, scale:2.4, tint:'#f2b33d'},
    principe_supremo: {base:'principe',     name:'Principe Supremo',         boss:1, hp:1400, dmg:30, scale:1.5, tint:'#ffe9a0'},
    ranocchio_re:     {base:'ranocchio',    name:'Re Ranocchio',             semi:1, hp:750,  dmg:22, scale:1.8, tint:'#7aff9a'},
    re_mare:          {base:'re',           name:'Re del Mare',              boss:1, hp:1500, dmg:32, scale:1.1, tint:'#4ad8c8'},
    pifferaio_re:     {base:'pifferaio',    name:'Pifferaio Supremo',        boss:1, hp:1100, dmg:14, scale:1.6, tint:'#ffd35a'},
    carrozza_oro:     {base:'carrozza',     name:'Carrozza d’oro',           semi:1, hp:800,  dmg:18, scale:1.3, tint:'#ffd35a'},
    fata_madrina:     {base:'fata',         name:'Fata Madrina',             boss:1, hp:1100, heal:50, scale:1.7, tint:'#e0c4ff'},
    raperonzolo_oro:  {base:'raperonzolo',  name:'Raperonzolo d’oro',        boss:1, hp:1300, dmg:26, scale:1.6, tint:'#ffd35a'},
    mamma_porcellina: {base:'porcellino',   name:'Mamma Porcellina',         semi:1, hp:900,  dmg:16, scale:1.5, tint:'#ffb0c8'},
    hansel_giganti:   {base:'hanselgretel', name:'Hansel e Gretel giganti',  boss:1, hp:1300, dmg:18, scale:1.9, tint:'#ffd35a'},
    principe_azzurro: {base:'principe',     name:'Principe Azzurro Supremo', semi:1, hp:900,  dmg:26, scale:1.5, tint:'#9ad0ff'},
    re_oro:           {base:'re',           name:'Re Mida',                  boss:1, hp:1800, dmg:36, scale:1.2, tint:'#ffd35a'},
    capo_bimbi:       {base:'bimbo',        name:'Capo dei Bimbi Sperduti',  semi:1, hp:850,  dmg:20, scale:2.4, tint:'#9aff9a'},
    trilli:           {base:'fata',         name:'Trilli',                   semi:1, hp:900,  heal:40, scale:1.3, tint:'#fff07a'},
    peterpan_oro:     {base:'peterpan',     name:'Peter Pan d’oro',          boss:1, hp:1900, dmg:34, scale:1.7, tint:'#ffd35a'},
    bianconiglio:     {base:'lepre',        name:'Bianconiglio',             semi:1, hp:950,  dmg:24, scale:1.8, tint:'#ffffff'},
    alice_gigante:    {base:'alice',        name:'Alice gigante',            boss:1, hp:2000, dmg:36, scale:2.1, tint:'#9ad0ff'},
    tappeto_volante:  {base:'tappeto',      name:'Tappeto Volante',          semi:1, hp:950,  dmg:24, scale:1.6, tint:'#ff9ad8'},
    capo_guardie:     {base:'guardia',      name:'Capo delle Guardie',       semi:1, hp:1000, dmg:26, scale:1.8, tint:'#ffd35a'},
    sinbad_gigante:   {base:'sinbad',       name:'Sinbad gigante',           semi:1, hp:1050, dmg:28, scale:1.6, tint:'#7ad8ff'},
    alibaba_gigante:  {base:'alibaba',      name:'Alì Babà dei quaranta',    semi:1, hp:1000, dmg:26, scale:1.7, tint:'#ffb85a'},
    aladino_re:       {base:'aladino',      name:'Aladino',                  boss:1, hp:2100, dmg:38, scale:1.8, tint:'#ffd35a'},
    kai_ghiaccio:     {base:'kai',          name:'Kai',                      semi:1, hp:1100, dmg:28, scale:1.8, tint:'#bfe8ff'},
    gerda_regina:     {base:'gerda',        name:'Gerda',                    boss:1, hp:2200, heal:60, scale:2, tint:'#ffe0f0'},
    riflesso:         {base:'principe',     name:'Riflesso del Principe',    semi:1, hp:1150, dmg:30, scale:1.6, tint:'#d8e8ff'},
    re_specchi:       {base:'re',           name:'Re degli Specchi',         boss:1, hp:2400, dmg:40, scale:1.3, tint:'#cfe8ff'}
  };
  ELITE.dracula_boss = {base:'dracula', name:'Conte Dracula', boss:1, hp:1500, dmg:30, scale:1.4, tint:'#ff4a6a', side:1};   // il boss segreto del Trono del Drago
  const BOSS_DMG = .5, BOSS_HEAL = .4;                       // regolazione generale di semiboss e boss
  for (const [k, e] of Object.entries(ELITE)) {
    const b = U[e.base];
    U[k] = Object.assign({}, b, {hp:e.hp, dmg:(e.dmg ?? b.dmg) * BOSS_DMG, heal:e.heal ? e.heal * BOSS_HEAL : undefined, bounty:Math.round((b.bounty || 20) * (e.boss ? 6 : 3)),
      splash:Math.max(b.splash || 0, 45), boss:1, elite:e, sub:0, side:e.side ?? b.side, spd:Math.max(18, b.spd * .7)});
  }
  U.dracula_boss.summon = {k:'pipistrello', every:10, max:3}; U.dracula_boss.drain = .5;   // il boss resta quello provato
  U.re_oro.midas = {every:9, r:140, t:2};                                  // Re Mida: chi tocca diventa oro per qualche secondo
  U.re.elite = {base:'re', name:'Re in armatura', boss:1, scale:1, tint:null};

  // ---- le 10 mappe ----
  const WORLDS = [
    {name:'Bosco incantato', theme:'bosco', n:5},
    {name:'Campagna di Brema', theme:'brema', n:6, pool:['soldatino', 'musicanti', 'arciere', 'ranocchio', 'cacciatore', 'principe'], boss:'musicanti_re', unlockBoss:'uncino',
     names:['Mulino a vento', 'Fattoria del Gallo', 'Stalla dell’Asino', 'Ponte dei Ladri', 'Porte di Brema', 'Piazza del Concerto']},
    {name:'Monti di ghiaccio', theme:'ghiaccio', n:8, pool:['soldatino', 'arciere', 'pollicino', 'porcellino', 'fata', 'principe'], semi:'generale', boss:'fata_ghiaccio',
     names:['Valico gelato', 'Rifugio del Taglialegna', 'Lago ghiacciato', 'Caserma di stagno', 'Grotta dei cristalli', 'Ponte di neve', 'Torre della bufera', 'Palazzo di ghiaccio']},
    {name:'Miniera dei Nani', theme:'miniera', n:8, pool:['nani', 'soldatino', 'cacciatore', 'arciere', 'porcellino', 'principe'], semi:'capo_nani', unlockSemi:'mangiafuoco', boss:'principe_supremo',
     names:['Ingresso della miniera', 'Binari dei carrelli', 'Galleria delle lanterne', 'Sala del Capo', 'Fiume sotterraneo', 'Vena di diamanti', 'Pozzo profondo', 'Trono di pietra']},
    {name:'Regno sotto il mare', theme:'mare', n:10, pool:['ranocchio', 'soldatino', 'pollicino', 'raperonzolo', 'pinocchio', 'fata', 'musicanti', 'principe'], semi:'ranocchio_re', boss:'re_mare', unlockBoss:'gigante',
     names:['Spiaggia delle conchiglie', 'Scoglio della sirena', 'Foresta di alghe', 'Relitto del galeone', 'Laguna del Re Ranocchio', 'Grotta delle perle', 'Giardino di corallo', 'Abisso blu', 'Cancello delle maree', 'Trono del Re del Mare']},
    {name:'Paese dei Balocchi', theme:'balocchi', n:7, pool:['hanselgretel', 'pifferaio', 'soldatino', 'pinocchio', 'carrozza', 'alice', 'arciere', 'principe'], boss:'pifferaio_re',
     names:['Cancello dei giocattoli', 'Giostra dei cavalli', 'Teatrino dei burattini', 'Viale dei lecca-lecca', 'Montagne russe', 'Fabbrica dei balocchi', 'Tendone del Pifferaio']},
    {name:'Ballo di Cenerentola', theme:'ballo', n:10, pool:['carrozza', 'soldatino', 'fata', 'arciere', 'gattostivali', 'raperonzolo', 'pollicino', 'principe'], semi:'carrozza_oro', boss:'fata_madrina',
     names:['Cucina della cenere', 'Orto delle zucche', 'Viale delle carrozze', 'Scalinata di marmo', 'Rimessa d’oro', 'Salone degli specchi', 'Giardino a mezzanotte', 'Torre dell’orologio', 'Sala del ballo', 'Trono della Fata Madrina']},
    {name:'Torre delle Trecce Maledette', theme:'torre', n:6, pool:['raperonzolo', 'arciere', 'peterpan', 'fata', 'merlino', 'cacciatore', 'principe'], boss:'raperonzolo_oro',
     names:['Bosco di rovi', 'Orto della strega', 'Piede della torre', 'Scala senza fine', 'Finestra alta', 'Cima della torre']},
    {name:'Il Forno della Strega', theme:'marzapane', n:10, pool:['hanselgretel', 'cappuccetto', 'porcellino', 'peterpan', 'nani', 'biancaneve', 'pifferaio', 'fata', 'cacciatore', 'principe'], semi:'mamma_porcellina', boss:'hansel_giganti',
     names:['Sentiero di briciole', 'Ponte di biscotto', 'Steccato di cannella', 'Giardino di zucchero', 'Porcile di cioccolato', 'Fontana di caramello', 'Muro di torrone', 'Tetto di glassa', 'Forno spento', 'Casetta di marzapane']},
    {name:'Castello di Re Mida', theme:'lietofine', n:10, pool:['soldatino', 'arciere', 'cacciatore', 'peterpan', 'robinhood', 'porcellino', 'fata', 'merlino', 'raperonzolo', 'carrozza', 'gattostivali', 'musicanti', 'pifferaio', 'principe'], semi:'principe_azzurro', boss:'re_oro',
     names:['Ponte levatoio', 'Cortile dei cavalieri', 'Scuderie reali', 'Sala delle armature', 'Galleria dei ritratti', 'Biblioteca dei finali', 'Giardino delle rose', 'Torre del narratore', 'Sala del trono', 'Tesoro di Re Mida']},
    {name:'Isola che non c’è', theme:'isola', n:8, pool:['bimbi', 'arciere', 'peterpan', 'giglio', 'wendy', 'fata', 'cacciatore', 'principe'], semis:{2:'capo_bimbi', 5:'trilli'}, boss:'peterpan_oro',
     names:['Spiaggia delle sirene', 'Laguna', 'Rifugio sotterraneo', 'Accampamento indiano', 'Roccia del Teschio', 'Albero delle fate', 'Nave pirata', 'Covo di Peter Pan']},
    {name:'Paese delle Meraviglie', theme:'meraviglie', n:8, pool:['lepre', 'alice', 'cappellaio', 'soldatino', 'brucaliffo', 'fata', 'pifferaio', 'principe'], semi:'bianconiglio', boss:'alice_gigante',
     names:['La tana del coniglio', 'Corridoio delle porte', 'Mare di lacrime', 'Fungo del Brucaliffo', 'Tè del Cappellaio', 'Giardino delle rose', 'Campo da croquet', 'Il Tribunale']},
    {name:'Deserto di Aladino', theme:'deserto', n:8, pool:['guardie', 'alibaba', 'arciere', 'sinbad', 'carrozza', 'fata', 'musicanti', 'principe'], semiAll:['tappeto_volante', 'capo_guardie', 'sinbad_gigante', 'alibaba_gigante'], boss:'aladino_re',
     names:['Oasi', 'Mercato di Agrabah', 'Dune che cantano', 'Grotta dei quaranta ladroni', 'Porto di Sinbad', 'Torre del Visir', 'Giardini pensili', 'Palazzo del Sultano']},
    {name:'Palazzo di Ghiaccio Eterno', theme:'ghiaccioeterno', n:8, pool:['soldatineve', 'renna', 'fiammiferaia', 'arciere', 'cavcristallo', 'fata', 'porcellino', 'principe'], semi:'kai_ghiaccio', boss:'gerda_regina',
     names:['Lago gelato', 'Bosco di brina', 'Slitta abbandonata', 'Ponte di stalattiti', 'Sala delle bufere', 'Labirinto di cristallo', 'Trono di neve', 'Il cuore del ghiaccio']},
    {name:'Regno degli Specchi', theme:'specchi', n:10, pool:['gemelli', 'cavcristallo', 'pisello', 'soldatino', 'arciere', 'merlino', 'principe', 'raperonzolo', 'fata', 'carrozza'], semi:'riflesso', boss:'re_specchi',
     names:['Galleria riflessa', 'Stanza dei doppi', 'Lago d’argento', 'Scala che non finisce', 'Sala dei ritratti', 'Labirinto di vetro', 'Specchio parlante', 'Corte capovolta', 'Torre del riflesso', 'Il Trono del Drago']}
  ];
  // il sole cala: dal tramonto alla notte i buoni arrivano più spesso e più robusti
  const NIGHT = Object.assign({pace:.12, hp:.06, w3:0, from:2}, typeof process !== 'undefined' && process.env && process.env.DW_NIGHT ? JSON.parse(process.env.DW_NIGHT) : {});
  const nightP = t => t < 25 ? 0 : t < 55 ? (t - 25) / 30 * .5 : Math.min(1, .5 + (t - 55) / 25 * .5);   // 0 giorno · 0,5 tramonto · 1 notte
  const wmulB = w => w <= 4 ? 1.1 + .05 * (w - 1) : 1.25 + .02 * (w - 4);   // mondi 2-5: +10/15/20/25%, poi +2% a mondo (mondo 10: +35%)
  const wmul = w => (w <= 9 ? wmulB(w) : wmulB(9) + .015 * (w - 9)) * (w >= 2 ? 1 + NIGHT.w3 : 1);               // dal mondo 3 un filo in più (w3)
  const WMOD = Object.fromEntries(Array.from({length:14}, (_, i) => [i + 1, {hp:wmul(i + 1), qty:wmul(i + 1)}]));
  // dal mondo 6 la storia è più gentile: i buoni crescono meno e all'inizio arrivano un tipo alla volta (l'Eroica resta com'era)
  const EASE = Object.assign({from:5, s:.10, q:.45, gap:16}, typeof process !== 'undefined' && process.env && process.env.DW_EASE ? JSON.parse(process.env.DW_EASE) : {});
  const COMP_EXTRA = +((typeof process !== 'undefined' && process.env && process.env.COMP) || 1.05);
  const SHARD_ORDER = ['goblin', 'strega', 'topi', 'lupo', 'fionda', 'gattovolpe', 'orco', 'gnomo', 'spaventapasseri', 'fantasma', 'coccodrillo', 'barbablu'];
  const LATE = ['uncino', 'mangiafuoco', 'gigante'];
  const firstIdx = w => WORLDS.slice(0, w).reduce((a, x) => a + x.n, 0);
  const TOTAL = WORLDS.reduce((a, x) => a + x.n, 0);
  const pace = k => { const d = U[k]; return d.group ? 30 : Math.max(8, 4 + (d.bounty || 20) * .35); };   // ogni quanto il castello manda quel buono
  const EK = {a:.018, b:.00007};                               // quanto crescono i buoni di castello in castello
  const cache = {};
  function levelOf(w, c) {
    if (w === 0) return Object.assign(LEVELS[c], {world:0, castle:c, g:c, eMul:1, semi:null, shardN:LEVELS[c].boss ? 6 : 4});
    const key = w + ':' + c; if (cache[key]) return cache[key];
    const w0 = w, W = WORLDS[w], n = W.n, g = firstIdx(w) + c, last = c === n - 1, semiAt = W.semi ? Math.floor(n / 2) - 1 : -1, semiK = !last && (W.semiAll ? W.semiAll[c % W.semiAll.length] : W.semis ? W.semis[c] : c === semiAt ? W.semi : null), isSemi = !!semiK;
    const ge = g <= 79 ? g : 79 + (g - 79) * .3;                                // dopo il mondo 10 il giocatore è al massimo: i buoni crescono piano
    const cnt = Math.min(W.pool.length, 2 + Math.floor((c + 1) * (W.pool.length - 1) / n));
    const pool = W.pool.slice(0, cnt), quick = Math.max(.75, 1 - .02 * w);
    const active = [...new Set([pool[0], ...pool.slice(Math.max(1, cnt - 2), cnt)])];   // al massimo 3 tipi di buoni per castello
    const waves = active.map((k, i) => [k, 6 + i * 10, pace(k) * quick]);
    const shards = g >= 40 ? SHARD_ORDER.concat(LATE) : SHARD_ORDER;
    // compensazione: mazzo da 6 e potenziamenti gratis fino al 5 rendono i giocatori più forti di prima → i buoni crescono della stessa misura
    const Lold = Math.max(1, Math.min(10, 1 + Math.floor((g - 2) / 7))), Lnew = g < 16 ? Math.min(5, 1 + Math.floor(g / 4)) : Math.min(10, 5 + Math.floor((g - 16) / 12));
    const comp = (1 + .08 * (Lnew - 1)) / (1 + .08 * (Lold - 1)) * (g < 40 ? COMP_EXTRA : 1);
    const lv = {world:w, castle:c, g, name:W.names[c], hp:Math.round(1300 + 42 * g),
      gold:Math.round((150 + 22 * g) * (last ? 1.8 : isSemi ? 1.3 : 1)),
      eMul:(1 + EK.a * (ge - 4) + EK.b * (ge - 4) * (ge - 4)) * comp * (last ? .9 : isSemi ? .94 : 1),   // col boss in campo, il resto del castello è un po' più leggero
      waves:waves.map(w => [w[0], w[1], w[2] / (last || isSemi ? 1 : (WMOD[w0] || {}).qty || 1)]), hpMul:last || isSemi ? 1 : (WMOD[w0] || {}).hp || 1, rush:active.slice(-3).concat(active.slice(0, 2)),
      shard:shards[g % shards.length], shardN:last || isSemi ? 6 : 4,
      boss:last ? W.boss : isSemi ? semiK : null, bossAt:last ? 70 : 55, semi:isSemi};
    if (w >= EASE.from) {                                                   // mondo 6: un terzo dello sconto, mondo 7: due terzi, dal mondo 8: tutto
      const r = Math.min(1, (w - EASE.from + 1) / 3), q = (WMOD[w0] || {}).qty || 1, qe = 1 + (q - 1) * (1 - EASE.q * r);
      lv.orig = {eMul:lv.eMul, waves:lv.waves, hpMul:lv.hpMul};
      lv.eMul *= 1 - EASE.s * r;
      lv.waves = lv.waves.map((x, i) => [x[0], x[1] + 4 * r + i * (EASE.gap - 10) * r, last || isSemi ? x[2] : x[2] * q / qe]);
    }
    return (cache[key] = lv);
  }

  const WALLET_COST = [0, 60, 120, 200, 300, 420, 560, 720];   // prezzo per salire dal livello i al livello i+1
  const WALLET_MAX_LV = 8;
  const walletMax  = lv => 200 + 100 * (lv - 1);
  const walletRate = lv => 10 + 4 * (lv - 1);                  // Cattiveria al secondo
  const FIRE = {charge:25, dmg:49, kb:60, wall:.035, wallUp:.007};   // wall: la fiammata toglie il 3,5% della vita al castello nemico (+0,7% per livello di «Fiato sulle mura») · era 5% e +1%                       // fiammata: 30% di danno in meno (era 70)
  const L = {base:70, castle:930};

  function create(o = {}) {
    let lv = o.inf ? infLevel() : o.coop != null ? coopLevel(o.coop) : levelOf(o.world || 0, o.level || 0); const squad = (o.squad || START).slice(0, DECK);
    if (o.hard && lv.orig) lv = Object.assign({}, lv, lv.orig);            // in Eroica i buoni restano forti come prima
    const up = o.up || {}, ut = up.tana || {}, ud = up.drago || {};       // potenziamenti della Fucina del Drago
    const baseHp = Math.round(1200 * (1 + .1 * (ut.hp || 0)));
    const s = {
      t:0, over:0, id:0, beta:!!o.beta, level:o.level || 0, lv, squad,
      base:{x:L.base, hp:baseHp, max:baseHp},
      castle:{x:L.castle, hp:lv.hp, max:lv.hp, shootT:1, rushed:false, bossDone:false},
      wallet:{lv:o.walletLv || 1, cur:o.startCat ?? 100 + 20 * (ut.cat || 0)},
      fire:{v:o.beta ? 1 : 0, charge:o.beta ? 2 : FIRE.charge * (1 - .06 * (ud.charge || 0))},
      rateMul:1 + .05 * (ut.rate || 0), fireMul:1 + .08 * (ud.dmg || 0), fireWall:FIRE.wall + FIRE.wallUp * (ud.wall || 0), uLv:up.units || {},
      cds:{}, timers:lv.waves.map(w => w[1]), eMul:(lv.eMul || 1) * (o.hard === true ? HARD : o.hard || 1), hard:!!o.hard,
      rule:o.rule || {}, boss:(o.rule && o.rule.boss) || lv.boss, bossAt:(o.rule && o.rule.bossAt) || lv.bossAt, extra:((o.rule && o.rule.extra) || []).map(e => e.slice()),
      units:[], shots:[], ev:[], inf:o.inf ? {wave:0, next:2, q:[], qt:0, w:0, B:{dmg:1, hp:1, spd:1, low:1, leg:1, cost:1, loot:1}, picks:[], hold:false, done5:0, special:null, lastSp:0, gold:0, chests:[]} : null, rar:o.rar || {},
      stats:{kills:0, lost:0, spent:0, stolen:0, spawns:0, fires:0, kidnaps:0, beaten:{}}
    };
    for (const k of squad) s.cds[k] = 0;
    s.hand = squad.slice(0, HAND); s.queue = squad.slice(HAND);              // mazzo: 3 carte in mano, le altre aspettano il turno
    s.side = 0;
    if (o.mp) {                                                              // partita a due: duel (cattivi contro cattivi), alt (cattivi contro buoni), coop (insieme)
      const m = o.mp, u2 = m.up || {}, t2 = u2.tana || {}, d2 = u2.drago || {}, sq2 = (m.squad || START).slice(0, DECK);
      s.mp = m.mode; s.eMul = m.mode === 'alt' ? ALT_BMUL : s.eMul;
      s.p2 = {side:m.mode === 'coop' ? 0 : 1, squad:sq2, hand:sq2.slice(0, HAND), queue:sq2.slice(HAND), uLv:u2.units || {},
        wallet:{lv:1, cur:100 + 20 * (t2.cat || 0)}, fire:{v:0, charge:m.mode === 'alt' ? Infinity : FIRE.charge * (1 - .06 * (d2.charge || 0))},
        rateMul:1 + .05 * (t2.rate || 0), fireMul:1 + .08 * (d2.dmg || 0), fireWall:FIRE.wall + FIRE.wallUp * (d2.wall || 0), stats:{spawns:0, fires:0}};
      if (m.mode !== 'coop') {                                               // niente ondate automatiche: l'altro lato lo gioca una persona
        s.lv = Object.assign({}, lv, {waves:[], rush:[], boss:null}); s.timers = []; s.boss = null; s.extra = [];
        const hp2 = m.mode === 'duel' ? Math.round(1200 * (1 + .1 * (t2.hp || 0))) : ALT_CASTLE;
        s.castle.hp = s.castle.max = hp2; s.castle.noBolt = m.mode === 'duel';
      }
    }
    const r = s.rule;
    if (r.noFire) { s.fire.v = 0; s.fire.charge = Infinity; }             // Drago in sciopero
    if (r.catMul) s.rateMul *= r.catMul;
    if (r.baseMul) { s.base.max = Math.round(s.base.max * r.baseMul); s.base.hp = s.base.max; }
    if (r.castleMul) { s.castle.max = Math.round(s.castle.max * r.castleMul); s.castle.hp = s.castle.max; }
    return s;
  }

  const UP_K = .056;                                            // ogni livello della Fucina: +5,6% di vita e danno (era +8%)
  function addUnit(s, k, x, y, opt) {
    const d = U[k], side = opt && opt.side != null ? opt.side : d.side, lvMap = (opt && opt.uLv) || s.uLv;
    const ab = ABIL.find(a => d[a]);
    const m = (d.side === 0 ? 1 + UP_K * ((lvMap[PARENT[k] || k] || 1) - 1) : s.eMul) * (d.side === 0 && LEG.has(k) ? LEG_MUL : 1);   // +5,6% per livello ai cattivi; i buoni crescono coi castelli
    const u = {id:++s.id, k, side, x:x ?? (side ? s.castle.x - 30 : s.base.x + 30), y:y ?? Math.random(), dm:m,
      hp:Math.round(d.hp * m * (side === 1 && d.side === 1 ? (s.lv.hpMul || 1) * (s.mp || (s.lv.world || 0) < NIGHT.from ? 1 : 1 + NIGHT.hp * nightP(s.t)) : 1)), max:Math.round(d.hp * m * (side === 1 && d.side === 1 ? (s.lv.hpMul || 1) * (s.mp || (s.lv.world || 0) < NIGHT.from ? 1 : 1 + NIGHT.hp * nightP(s.t)) : 1)), disg:d.disguise ? 1 : 0, atkT:.2, kb:0, st:'walk', swing:0, born:s.t, abT:ab ? d[ab].every * .5 : 0, fear:0, stun:0, spdMul:1, charged:false};
    if (s.inf && side === 0 && d.side === 0) {                        // Infinita: i poteri scelti valgono per tutti i cattivi della partita
      const B = s.inf.B, r = s.rar[PARENT[k] || k] || 0, dm = B.dmg * (r <= 1 ? B.low : 1) * (r >= 3 ? B.leg : 1);
      u.dm *= dm; u.hp = Math.round(u.hp * B.hp); u.max = Math.round(u.max * B.hp); u.spdMul *= B.spd;
    }
    s.units.push(u);
    return u;
  }
  function addGroup(s, k, x, opt) {                              // i gruppi (topi, nani) entrano come tanti piccoli
    const d = U[k], side = opt && opt.side != null ? opt.side : d.side;
    if (!d.group) return [addUnit(s, k, x, undefined, opt)];
    const out = [], x0 = x ?? (side ? s.castle.x - 30 : s.base.x + 30), dir = side ? -1 : 1;
    const ks = d.group.ks || Array(d.group.n).fill(d.group.k);
    ks.forEach((k2, i) => out.push(addUnit(s, k2, x0 - dir * i * 9, (i * .37) % 1, opt)));
    return out;
  }

  const plr = (s, pi) => pi ? s.p2 : s;                          // giocatore 0 (chi ospita) o 1 (l'amico)
  const costOf = k => U[k].cost ?? BCOST[k] ?? 100;
  const costIn = (s, k, pi = 0) => !pi && s && s.inf ? Math.round(costOf(k) * s.inf.B.cost) : costOf(k);   // nell'Infinita c'è lo «Sconto del drago»
  const walletCap = (s, pi = 0) => { const pl = plr(s, pi); return walletMax(pl.wallet.lv) + (!pi && s.inf ? s.inf.wPlus || 0 : 0); };
  function canSpawn(s, k, pi = 0) {
    const pl = plr(s, pi);
    return !s.over && !!pl && pl.hand.includes(k) && pl.wallet.cur >= costIn(s, k, pi);
  }
  function spawn(s, k, pi = 0) {
    if (!canSpawn(s, k, pi)) return false;
    const pl = plr(s, pi), c = costIn(s, k, pi), side = pi ? s.p2.side : 0;
    pl.wallet.cur -= c; pl.stats.spawns++; if (!pi) s.stats.spent += c;
    if (pl.queue.length) { const i = pl.hand.indexOf(k); pl.queue.push(k); pl.hand[i] = pl.queue.shift(); }   // la carta giocata va in fondo, entra la prossima
    const got = addGroup(s, k, undefined, {side, uLv:pl.uLv}); s.ev.push({type:'spawn', k, pi});
    if (LEG.has(k)) {                                              // entrata in scena dei leggendari: onda d'oro
      const x0 = got[0].x;
      for (const e of s.units) if (!e.dead && e.side !== side && Math.abs(e.x - x0) <= 260) { hurt(s, e, 25, k, k); e.kb = Math.max(e.kb, U[e.k].boss ? 15 : 70); }
      s.ev.push({type:'legend', k, x:x0});
    }
    return true;
  }
  const walletCost = (s, pi = 0) => { const w = plr(s, pi).wallet; return w.lv >= WALLET_MAX_LV ? Infinity : WALLET_COST[w.lv]; };
  function upgradeWallet(s, pi = 0) {
    const c = walletCost(s, pi), w = plr(s, pi).wallet;
    if (s.over || w.cur < c) return false;
    w.cur -= c; w.lv++; s.ev.push({type:'wallet', lv:w.lv, pi});
    return true;
  }
  function fire(s, pi = 0) {
    const pl = plr(s, pi), side = pi ? s.p2.side : 0;
    if (s.over || pl.fire.v < 1) return false;
    pl.fire.v = 0; pl.stats.fires++;
    for (const u of s.units) if (u.side !== side && !u.dead) { hurt(s, u, FIRE.dmg * pl.fireMul, 'fire'); u.kb = U[u.k].boss ? 15 : FIRE.kb; }
    s.ev.push({type:'fire', pi, side});
    const bs = side ? 0 : 1;                                       // il fuoco arriva anche sulle mura nemiche (non nella Modalità Infinita)
    if (!(s.inf && bs === 1)) {
      const b = bs ? s.castle : s.base, dmg = Math.round(b.max * (pl.fireWall || FIRE.wall));
      b.hp = Math.max(0, b.hp - dmg); s.ev.push({type:'bhit', side:bs, dmg, src:'fire'});
      if (b.hp <= 0 && !s.over) { s.over = bs ? 1 : -1; s.ev.push({type:'end', win:s.over > 0}); }
    }
    return true;
  }
  const gain = (s, n, pi = 0) => { const w = plr(s, pi).wallet; w.cur = Math.min(walletMax(w.lv), w.cur + n); };

  function hurt(s, u, dmg, src, from) {
    if (u.dead) return;
    const d = U[u.k], a = from && U[from];
    if (d.dodge && src !== 'fire' && Math.random() < d.dodge) { s.ev.push({type:'dodge', x:u.x, y:u.y}); return; }   // l'Omino di Pan di Zenzero schiva
    if (u.big > 0) dmg *= .5;                                       // lo Spirito gigante incassa la metà
    if (u.stone > 0) dmg *= 1.5;                                    // le statue si crepano
    if (u.smokeT > 0) dmg *= .7;                                    // nel fumo del Brucaliffo
    if (u.cookie > 0 && src !== 'bounce') dmg *= 3;
    if (u.pig > 0) dmg *= 2;                                         // il buono diventato maiale è molto più fragile                // il buono diventato biscotto si sbriciola
    if (a && a.vsBeast && d.beast) dmg *= a.vsBeast;               // il cacciatore è forte contro gli animali
    if (a && a.vsGhost && d.ghost) dmg *= a.vsGhost;               // il cacciatore di spiriti è forte contro i fantasmi
    if (a && a.ranged && d.armorRanged) dmg *= d.armorRanged;      // il muro del porcellino ferma frecce e sassi
    dmg = Math.round(dmg);
    u.hp -= dmg; u.flash = 1;
    s.ev.push({type:'hit', x:u.x, y:u.y, dmg, side:u.side, src});
    if (u.hp <= 0 && d.revive && !u.revived) { u.revived = 1; u.hp = Math.round(u.max * d.revive); u.stun = .7; s.ev.push({type:'revive', x:u.x, y:u.y, k:u.k});
      if (d.rebirth) { s.ev.push({type:'rebirth', x:u.x, y:u.y}); for (const e of s.units) if (!e.dead && e.side !== u.side && Math.abs(e.x - u.x) <= d.rebirth.r) { hurt(s, e, d.rebirth.dmg * (u.dm || 1), u.k, u.k); if (!U[e.k].boss) e.kb = Math.max(e.kb, 60); } }   // la Fenice esplode in fiamme e rinasce
      return; }   // il Cavaliere Verde si rialza
    if (u.hp <= 0) {
      u.dead = true;
      s.ev.push({type:'die', k:u.k, x:u.x, y:u.y, side:u.side});
      if (a && a.loot && u.side === 1 && !s.mp) { s.wallet.cur = Math.min(walletCap(s), s.wallet.cur + a.loot); s.ev.push({type:'loot', x:u.x, y:u.y, n:a.loot}); }   // la Cornacchia ruba Cattiveria
      if (s.inf && s.inf.special === 'gold' && u.side === 1) { const g = Math.round(6 * (d.boss ? 5 : 1) * s.inf.B.loot); s.inf.gold += g; s.ev.push({type:'coin', x:u.x, y:u.y, n:g}); }   // ondata d'oro: ogni buono lascia monete
      if (s.mp) { const r = d.bounty || Math.round((d.cost || 20) * .3); if (s.mp === 'coop') { if (u.side === 1) { gain(s, r * .6); gain(s, r * .6, 1); } } else gain(s, r, u.side === 1 ? 0 : 1); }   // in due: chi abbatte guadagna
      if (d.split && !u.splitDone) { const c = addUnit(s, u.k, u.x + 6, (u.y + .4) % 1); c.side = u.side; c.splitDone = 1; c.hp = c.max = Math.round(u.max * d.split); s.ev.push({type:'mirror', x:c.x, y:c.y}); }   // i Gemelli dello Specchio
      if (u.side === 1) { s.stats.kills++; if (!s.mp) gain(s, d.bounty || 0); const bk = d.sub ? 'nani' : u.k; s.stats.beaten[bk] = (s.stats.beaten[bk] || 0) + 1; }
      else {
        s.stats.lost++;
        if (d.onDeath) { for (let i = 0; i < d.onDeath.n; i++) addUnit(s, d.onDeath.k, u.x + (i - 1.5) * 10, (u.y + i * .3) % 1); s.ev.push({type:'release', x:u.x, y:u.y}); }
      }
    }
  }
  function strike(s, ak, side, tgt, dmg) {                         // un colpo che arriva: area, furto, effetti
    const a = U[ak];
    if (a && a.splash) {
      for (const e of s.units) if (!e.dead && e.side !== side && Math.abs(e.x - tgt.x) <= a.splash) {
        hurt(s, e, e === tgt ? dmg : dmg * .7, ak, ak);
        if (a.boss) e.kb = Math.max(e.kb, 40);
      }
      s.ev.push({type:'boom', x:tgt.x, y:tgt.y, k:ak});
    } else {
      if (ak === 'topo' && side === 0 && s.units.some(r => r.k === 'retopi' && !r.dead && r.side === 0 && Math.abs(r.x - tgt.x) <= U.retopi.ratAura.r)) dmg *= U.retopi.ratAura.m;   // il Re dei Topi carica i suoi
      hurt(s, tgt, dmg, ak, ak);
    }
    if (a && a.slowHit && !tgt.dead) tgt.slowT = a.slowHit.t;               // le sorellastre: chi viene colpito rallenta
    if (a && a.manaSteal && tgt.side === 0) { const w = s.wallet; const n = Math.min(w.cur, a.manaSteal); w.cur -= n; if (n > 0) s.ev.push({type:'robbed', x:tgt.x, y:tgt.y, n:Math.round(n)}); }   // Robin Hood ruba la Cattiveria
    if (a && a.bounce) { const more = s.units.filter(e => !e.dead && e !== tgt && e.side !== side && Math.abs(e.x - tgt.x) <= a.bounce.r).sort((p, q) => Math.abs(p.x - tgt.x) - Math.abs(q.x - tgt.x)).slice(0, a.bounce.n); if (more.length) { for (const e of more) hurt(s, e, dmg * a.bounce.k, 'bounce', ak); s.ev.push({type:'bounce', x:tgt.x, y:tgt.y, xs:more.map(e => e.x)}); } }   // le schegge dello specchio rimbalzano
    if (a && a.burn && !tgt.dead) { tgt.burnT = a.burn.t; tgt.burnD = Math.max(tgt.burnD || 0, dmg * a.burn.k); tgt.psn = a.poison ? 1 : 0; }   // il Rospo avvelena invece di bruciare   // il fuoco del Diavolo continua a bruciare
    if (a && a.steal) { gain(s, a.steal); s.stats.stolen++; s.ev.push({type:'steal', x:tgt.x, y:tgt.y, n:a.steal}); }
  }
  function hurtBuilding(s, side, dmg, ak) {                        // side = chi viene colpito
    if (s.inf && side === 1) return;                               // nella Modalità Infinita il castello non si conquista: si resiste
    const b = side ? s.castle : s.base;
    if (side) dmg = Math.round(dmg * 1.6 * ((U[ak] && U[ak].siege) || 1));   // le truppe d'assedio picchiano forte sulle mura
    if (s.overtime) dmg = Math.round(dmg * (side ? 1 : 1.6) * 3);                // assedio finale nei duelli
    b.hp = Math.max(0, b.hp - dmg);
    s.ev.push({type:'bhit', side, dmg});
    if (b.hp <= 0 && !s.over) { s.over = side ? 1 : -1; s.ev.push({type:'end', win:s.over > 0}); }
  }

  // ---- Modalità Infinita: ondate numerate senza fine ogni 20 secondi, un boss ogni 3 ondate ----
  const INF_POOL = [[1, ['soldatino', 'arciere', 'cacciatore', 'nani', 'porcellino']], [5, ['ranocchio', 'raperonzolo', 'fata', 'pollicino', 'hanselgretel', 'principe']],
    [10, ['carrozza', 'musicanti', 'pifferaio', 'merlino', 'peterpan', 'gattostivali', 'robinhood', 'cappuccetto', 'spiritista']], [15, ['biancaneve', 'alice', 'wendy', 'cappellaio', 'sinbad', 'renna', 'cavcristallo', 'gemelli']]];
  const INF_WAVE = 20;
  const infBosses = () => Object.keys(ELITE).filter(k => U[k] && !/dracula/.test(k)).sort((a, b) => ELITE[a].hp - ELITE[b].hp);
  const infLevel = () => ({world:5, castle:0, g:40, name:'Modalità Infinita', hp:1e9, gold:0, eMul:1, waves:[], rush:[], shard:null, shardN:0, boss:null, bossAt:1e9, semi:false, inf:true});
  const infMul = n => 1.15 * (.85 + .07 * (n - 1) + .0025 * (n - 1) * (n - 1));
  // Infinita: ogni 5 ondate si sceglie un potere, il campo si svuota e si passa al mondo dopo; ondate speciali; forzieri ogni 10
  const INF_POWERS = {
    artigli:{f:B => { B.dmg *= 1.15; }}, pelle:{f:B => { B.hp *= 1.15; }}, passo:{f:B => { B.spd *= 1.2; }},
    rapida:{f:(B, s) => { s.rateMul *= 1.2; }}, borsa:{f:(B, s) => { s.inf.wPlus = (s.inf.wPlus || 0) + 100; }}, sconto:{f:B => { B.cost *= .9; }},
    rovente:{f:(B, s) => { s.fireMul *= 1.3; }}, fiato:{f:(B, s) => { s.fire.charge *= .75; }},
    tana:{f:(B, s) => { const m = Math.round(s.base.max * 1.25); s.base.hp = Math.min(m, s.base.hp + Math.round(m / 3) + (m - s.base.max)); s.base.max = m; }},
    piccoli:{f:B => { B.low *= 1.25; }}, leggende:{f:B => { B.leg *= 1.2; }}, bottino:{f:B => { B.loot *= 1.5; }}
  };
  const INF_SPECIAL = ['boss2', 'gold', 'flash', 'night'];
  const infWorld = n => Math.floor((n - 1) / 5) % WORLDS.length;
  function infPool(w) { return w === 0 || !WORLDS[w].pool ? INF_POOL[0][1] : WORLDS[w].pool; }
  function infChoose(s, id) {                                    // il giocatore ha scelto: potere, campo pulito, mondo nuovo
    const I = s.inf; if (!I || !I.hold) return false;
    if (INF_POWERS[id]) { INF_POWERS[id].f(I.B, s); I.picks.push(id); }
    for (const u of s.units) u.dead = true; s.units = []; s.shots = [];      // il drago richiama tutti: campo vuoto
    s.wallet.cur = walletCap(s);                                           // e la Cattiveria torna piena
    I.hold = false; I.next = 3; I.w = infWorld(I.wave + 1);
    s.ev.push({type:'infReset', w:I.w});
    return true;
  }
  function infAI(s, dt) {
    const I = s.inf; if (I.hold) return;
    if ((I.next -= dt) <= 0) {
      if (I.wave > 0 && I.wave % 5 === 0 && I.done5 < I.wave) {          // fine di 5 ondate: pausa per scegliere il potere (e il forziere ogni 10)
        I.done5 = I.wave; I.hold = true;
        const ids = Object.keys(INF_POWERS), opts = []; while (opts.length < 3) { const k = ids[Math.floor(Math.random() * ids.length)]; if (!opts.includes(k)) opts.push(k); }
        if (I.wave % 10 === 0) { I.chests.push(I.wave); s.ev.push({type:'infChest', n:I.wave}); }
        s.ev.push({type:'infPick', opts, n:I.wave}); return;
      }
      const n = ++I.wave; I.next = INF_WAVE; I.qt = 0; s.eMul = infMul(n);
      I.special = null;
      if (n >= 4 && n % 3 !== 0 && n % 5 !== 1 && n - I.lastSp >= 3 && Math.random() < .3) { I.special = INF_SPECIAL[Math.floor(Math.random() * INF_SPECIAL.length)]; I.lastSp = n; }
      const pool = infPool(I.w), cnt = Math.min(14, 3 + Math.floor(n * 1.1));
      if (I.special === 'flash') for (let i = 0; i < Math.round(cnt * 1.6); i++) I.q.push([i * 10 / cnt, 'soldatino', 'flash']);
      else for (let i = 0; i < cnt; i++) I.q.push([i * 16 / cnt, pool[Math.floor(Math.random() * pool.length)], I.special === 'night' ? 'night' : '']);
      s.ev.push({type:'wave', n, special:I.special, w:I.w});
      const B = infBosses(), bi = Math.floor(n / 3) - 1;
      if (n % 3 === 0) { const b = B[bi % B.length]; addUnit(s, b); s.ev.push({type:'boss', k:b}); }
      if (I.special === 'boss2') for (const b of [B[Math.max(0, bi) % B.length], B[(Math.max(0, bi) + 1) % B.length]]) { addUnit(s, b); s.ev.push({type:'boss', k:b}); }
    }
    I.qt += dt;
    while (I.q.length && I.q[0][0] <= I.qt && s.units.filter(u => u.side === 1 && !u.dead).length < 18) {   // al massimo 18 buoni in campo: si capisce cosa succede
      const [, k, fl] = I.q.shift(), got = addGroup(s, k);
      for (const u of got) { if (fl === 'flash') { u.spdMul *= 1.7; u.hp = u.max = Math.round(u.max * .6); } if (fl === 'night') { u.hp = u.max = Math.round(u.max * 1.2); } }
    }
  }
  function castleAI(s, dt) {
    if (s.inf) infAI(s, dt);
    const lv = s.lv, ramp = (1 + Math.max(0, s.t - 30) / 170) * (s.mp || (s.lv.world || 0) < NIGHT.from ? 1 : 1 + NIGHT.pace * nightP(s.t));
    const enemies = s.units.filter(u => u.side === 1 && !u.dead).length;
    if (enemies < 16) lv.waves.forEach((w, i) => { if ((s.timers[i] -= dt) <= 0) { addGroup(s, w[0]); s.timers[i] = w[2] / ramp; } });
    if (s.boss && !s.castle.bossDone && s.t >= s.bossAt) { s.castle.bossDone = true; addUnit(s, s.boss); s.ev.push({type:'boss', k:s.boss}); }
    for (const e of s.extra) if (!e.done && s.t >= e[1]) { e.done = 1; addUnit(s, e[0]); s.ev.push({type:'boss', k:e[0]}); }
    if (!s.rule.noRush && !s.castle.rushed && s.castle.hp < s.castle.max / 2) {     // rinforzi quando il castello è a metà
      s.castle.rushed = true;
      lv.rush.forEach((k, i) => addGroup(s, k, s.castle.x - 30 + i * 14));
      s.ev.push({type:'rush'});
    }
    if (!s.mp && (lv.world || 0) >= 2 && s.units.some(u => u.side === 0 && !u.dead && U[u.k].ghost)) {   // dal mondo 3: se arrivano fantasmi, il castello manda il cacciatore di spiriti
      if ((s.castle.spT = (s.castle.spT ?? 3) - dt) <= 0) { s.castle.spT = 12; if (s.units.filter(u => u.k === 'spiritista' && !u.dead).length < 2) addUnit(s, 'spiritista'); }
    }
    const near = s.units.filter(u => u.side === 0 && !u.dead && !u.disg && u.x > s.castle.x - 200).sort((a, b) => b.x - a.x)[0];
    if (near && !s.castle.noBolt && (s.castle.shootT -= dt) <= 0) {                   // la balestra del castello
      s.castle.shootT = 1.8;
      s.shots.push({from:s.castle.x - 20, x:s.castle.x - 20, tid:near.id, toB:-1, dmg:8, side:1, t:0, dur:.45, kind:'bolt'});
    }
  }

  function abilities(s, u, d, dir, alive) {
    if (u.mute > 0) return;                                        // senza voce: niente poteri
    if (u.abT > 0) { u.abT -= 1 / 60 * s._dtk; return; }
    const foes = alive.filter(e => e.side !== u.side && !e.dead && !e.disg);
    const within = r => foes.filter(e => Math.abs(e.x - u.x) <= r);
    if (d.hook) {                                                  // Uncino: col gancio tira a sé un nemico
      const e = foes.filter(e => !U[e.k].boss && !U[e.k].ghost).map(e => [e, (e.x - u.x) * dir]).filter(([, dd]) => dd > d.range + 10 && dd <= d.hook.r).sort((a, b) => a[1] - b[1])[0];
      if (e) { const ox = e[0].x; e[0].x = u.x + dir * 26; e[0].stun = .6; s.ev.push({type:'hook', k:u.k, from:u.id, x1:u.x, x2:ox, y:e[0].y}); u.abT = d.hook.every; }
    } else if (d.fear) {                                           // Barbablù: i buoni vicini scappano
      const es = within(d.fear.r).filter(e => !U[e.k].boss);
      if (es.length) { for (const e of es) e.fear = d.fear.t; s.ev.push({type:'fear', x:u.x, y:u.y}); u.abT = d.fear.every; }
    } else if (d.summon) {                                         // Mangiafuoco: evoca burattini
      const mine = alive.filter(m => m.owner === u.id).length;
      if (mine < d.summon.max) { const m = addUnit(s, d.summon.k, u.x - dir * 14, (u.y + .5) % 1); m.owner = u.id; m.side = u.side; s.ev.push({type:'summon', x:m.x, y:m.y}); }
      u.abT = d.summon.every;
    } else if (d.charm) {                                          // Pifferaio: i piccoli lo seguono e se ne vanno
      const es = within(d.charm.r).filter(e => U[e.k].small);
      if (es.length) { for (const e of es) e.fear = d.charm.t; s.ev.push({type:'charm', x:u.x, y:u.y}); }
      u.abT = d.charm.every;
    } else if (d.stunAura) {                                       // Musicanti: il concerto stordisce
      const es = within(d.stunAura.r);
      if (es.length) { for (const e of es) e.stun = Math.max(e.stun, d.stunAura.t); s.ev.push({type:'stun', x:u.x, y:u.y}); u.abT = d.stunAura.every; }
    } else if (d.kidnap) {                                         // Tremotino: si porta via un buono, che da ora combatte per noi
      const e = within(d.kidnap.r).filter(e => !U[e.k].boss && !U[e.k].sub && U[e.k].hp <= d.kidnap.maxHp).sort((a, b) => Math.abs(a.x - u.x) - Math.abs(b.x - u.x))[0];
      if (e) { e.side = u.side; e.kid = 1; e.fear = 0; e.stun = .5; e.hp = e.max; e.st = 'walk'; s.stats.kidnaps++; s.ev.push({type:'kidnap', x:e.x, y:e.y}); u.abT = d.kidnap.every; }
    } else if (d.donkey) {                                         // Omino di Burro: un buono piccolo diventa ciuchino e se ne va
      const e = within(d.donkey.r).filter(e => !U[e.k].boss && U[e.k].hp <= d.donkey.maxHp).sort((a, b) => Math.abs(a.x - u.x) - Math.abs(b.x - u.x))[0];
      if (e) { s.ev.push({type:'donkey', x:e.x, y:e.y}); hurt(s, e, e.hp + 1, u.k, u.k); u.abT = d.donkey.every; } else u.abT = 1;
    } else if (d.mute) {                                           // Strega del Mare: ruba la voce a chi cura, suona o carica
      const es = within(d.mute.r).filter(e => { const x = U[e.k]; return x.heal || x.healAura || x.stunAura || x.charm || x.charge || x.leap; });
      if (es.length) { for (const e of es) e.mute = d.mute.t; s.ev.push({type:'mute', x:u.x, y:u.y}); u.abT = d.mute.every; } else u.abT = 1;
    } else if (d.mirror) {                                         // Regina Cattiva: lo specchio copia un buono, la copia sta con noi
      const e = within(d.mirror.r).filter(e => !U[e.k].boss && !U[e.k].elite).sort((a, b) => Math.abs(a.x - u.x) - Math.abs(b.x - u.x))[0];
      if (e) { const c = addUnit(s, e.k, u.x + dir * 18, (u.y + .3) % 1); c.side = u.side; c.mirror = 1; s.ev.push({type:'mirror', x:c.x, y:c.y}); u.abT = d.mirror.every; } else u.abT = 1;
    } else if (d.freeze) {                                         // Regina delle Nevi: gela tutti i buoni in campo
      if (foes.length) { for (const e of foes) e.stun = Math.max(e.stun, U[e.k].boss ? d.freeze.t / 2 : d.freeze.t); s.ev.push({type:'freeze'}); u.abT = d.freeze.every; } else u.abT = 1;
    } else if (d.mirage) {                                         // Fata Morgana: miraggi che attirano i colpi
      for (let i = 0; i < d.mirage.n; i++) { const c = addUnit(s, 'miraggio', u.x - dir * (12 + i * 16), (u.y + .33 * (i + 1)) % 1); c.ttl = d.mirage.ttl; }
      s.ev.push({type:'mirage', x:u.x, y:u.y}); u.abT = d.mirage.every;
    } else if (d.petrify) {                                        // Basilisco: pietrifica i buoni più forti
      const es = within(d.petrify.r).sort((a, b) => b.hp - a.hp).slice(0, d.petrify.n);
      if (es.length) { for (const e of es) { const t = U[e.k].boss ? d.petrify.t / 2 : d.petrify.t; e.stun = Math.max(e.stun, t); e.stone = t; s.ev.push({type:'stone', x:e.x, y:e.y}); } u.abT = d.petrify.every; } else u.abT = 1;
    } else if (d.vanish) {                                         // Gatto del Cheshire: sparisce, resta il sorriso; i buoni non lo vedono e lui passa oltre
      if (!u.disg) { u.disg = 1; u.vanT = d.vanish.t; s.ev.push({type:'vanish', x:u.x, y:u.y}); }
      u.abT = d.vanish.every;
    } else if (d.dive) {                                           // Grifone: picchiata sul buono più indietro
      const e = foes.filter(e => (e.x - u.x) * dir > 70).sort((a, b) => (b.x - a.x) * dir)[0];
      if (e) { const ox = u.x; u.x = e.x - dir * 22; strike(s, u.k, u.side, e, d.dmg * u.dm * 2); s.ev.push({type:'dive', x1:ox, x2:u.x, y:u.y}); u.abT = d.dive.every; } else u.abT = 1;
    } else if (d.gaze) {                                           // Medusa: chi la guarda diventa pietra
      const es = within(d.gaze.r).filter(e => (e.x - u.x) * dir > -10);
      if (es.length) { for (const e of es) { const t = U[e.k].boss ? d.gaze.t / 2 : d.gaze.t; e.stun = Math.max(e.stun, t); e.stone = Math.max(e.stone || 0, t); s.ev.push({type:'stone', x:e.x, y:e.y}); } s.ev.push({type:'gaze', x:u.x, y:u.y}); u.abT = d.gaze.every; } else u.abT = 1;
    } else if (d.grow) {                                           // Spirito nella Bottiglia: diventa enorme
      if (foes.some(e => Math.abs(e.x - u.x) <= 120)) { u.big = d.grow.t; s.ev.push({type:'grow', x:u.x, y:u.y}); u.abT = d.grow.every; } else u.abT = 1;
    } else if (d.behead) {                                         // Regina di Cuori: "Tagliategli la testa!"
      const e = within(d.behead.r).filter(e => !U[e.k].boss && !U[e.k].elite && e.hp <= d.behead.maxHp * u.dm).sort((a, b) => a.hp - b.hp)[0];
      if (e) { s.ev.push({type:'behead', x:e.x, y:e.y}); hurt(s, e, e.hp + 1, u.k, u.k); u.abT = d.behead.every; } else u.abT = 1;
    } else if (d.swallow) {                                        // Pescecane: inghiotte un buono intero
      const e = within(d.swallow.r).filter(e => (e.x - u.x) * dir > -10 && !U[e.k].boss && !U[e.k].elite && U[e.k].hp <= d.swallow.maxHp).sort((a, b) => Math.abs(a.x - u.x) - Math.abs(b.x - u.x))[0];
      if (e) { s.ev.push({type:'swallow', x:e.x, y:e.y}); u.hp = Math.min(u.max, u.hp + e.max * .3); hurt(s, e, e.hp + 1, u.k, u.k); u.swing = 1; u.abT = d.swallow.every; } else u.abT = 1;
    } else if (d.genie) {                                          // Stregone di Aladino: il Genio colpisce dove ci sono più buoni
      const cand = within(d.range + 80); let best = null, bn = 0;
      for (const e of cand) { const n = cand.filter(f => Math.abs(f.x - e.x) <= d.genie.r).length; if (n > bn) { bn = n; best = e; } }
      if (best) { s.ev.push({type:'genie', x:best.x, y:best.y}); for (const e of cand) if (Math.abs(e.x - best.x) <= d.genie.r) hurt(s, e, d.genie.dmg * u.dm * (U[e.k].boss ? .5 : 1), u.k, u.k); u.abT = d.genie.every; } else u.abT = 1;
    } else if (d.healAura) {                                       // Biancaneve: cura i buoni vicini
      const fr = alive.filter(a => a.side === u.side && !a.dead && Math.abs(a.x - u.x) <= d.healAura.r && a.hp < a.max);
      if (fr.length) { for (const a of fr) { const n = Math.min(d.healAura.n * u.dm, a.max - a.hp); a.hp += n; s.ev.push({type:'heal', x:a.x, y:a.y, n:Math.round(n)}); } u.abT = d.healAura.every; } else u.abT = 1;
    } else if (d.midas) {                                          // Re Mida: tocca i cattivi vicini e li fa diventare oro
      const es = within(d.midas.r);
      if (es.length) { for (const e of es) { const t = U[e.k].boss ? d.midas.t / 2 : d.midas.t; e.stun = Math.max(e.stun, t); e.goldT = t; } s.ev.push({type:'midas', x:u.x, y:u.y}); u.abT = d.midas.every; } else u.abT = 1;
    } else if (d.inspire) {                                        // Wendy: racconta una storia e i buoni vicini picchiano più forte
      const fr = alive.filter(a => a.side === u.side && !a.dead && a !== u && Math.abs(a.x - u.x) <= d.inspire.r);
      if (fr.length) { for (const a of fr) a.buffT = d.inspire.t; s.ev.push({type:'inspire', x:u.x, y:u.y}); u.abT = d.inspire.every; } else u.abT = 1;
    } else if (d.smoke) {                                          // Brucaliffo: nuvola di fumo, i colpi sui buoni vicini fanno meno male
      const fr = alive.filter(a => a.side === u.side && !a.dead && Math.abs(a.x - u.x) <= d.smoke.r);
      if (foes.some(e => Math.abs(e.x - u.x) <= 160)) { for (const a of fr) a.smokeT = d.smoke.t; s.ev.push({type:'smoke', x:u.x, y:u.y}); u.abT = d.smoke.every; } else u.abT = 1;
    } else if (d.spring) {                                         // Pupazzo a Molla: salta fuori sopra i buoni e li spaventa
      const e = foes.filter(e => (e.x - u.x) * dir > d.range + 12 && (e.x - u.x) * dir <= 150).sort((a, b) => (a.x - b.x) * dir)[0];
      if (e) { const ox = u.x; u.x = e.x - dir * (d.range + 2); for (const f of foes) if (!U[f.k].boss && Math.abs(f.x - u.x) <= d.spring.r) f.fear = Math.max(f.fear || 0, d.spring.t); s.ev.push({type:'spring', x:u.x, x1:ox, x2:u.x, y:u.y}); u.abT = d.spring.every; } else u.abT = 1;
    } else if (d.roll) {                                           // Zucca Stregata: rotola e travolge chi trova davanti
      const ahead = foes.filter(e => (e.x - u.x) * dir > -10 && (e.x - u.x) * dir <= d.roll.d);
      if (ahead.length) { const ox = u.x; u.x = Math.max(s.base.x + 10, Math.min(s.castle.x - 60, u.x + dir * d.roll.d)); for (const e of ahead) { hurt(s, e, d.roll.dmg * u.dm * (U[e.k].boss ? .5 : 1), u.k, u.k); if (!U[e.k].boss) e.kb = Math.max(e.kb, d.roll.kb); } s.ev.push({type:'roll', x:u.x, x1:ox, x2:u.x, y:u.y, k:u.k}); u.abT = d.roll.every; } else u.abT = 1;
    } else if (d.pig) {                                            // Circe: un buono diventa maiale per qualche secondo
      const e = within(d.pig.r).filter(e => !U[e.k].boss && !U[e.k].elite && !(e.pig > 0) && !(e.cookie > 0)).sort((a, b) => b.hp - a.hp)[0];
      if (e) { e.stun = Math.max(e.stun, d.pig.t); e.pig = d.pig.t; s.ev.push({type:'pig', x:e.x, y:e.y}); u.abT = d.pig.every; } else u.abT = 1;
    } else if (d.cookie) {                                         // Strega del Marzapane: un buono diventa biscotto
      const e = within(d.cookie.r).filter(e => !U[e.k].boss && !U[e.k].elite && !(e.cookie > 0)).sort((a, b) => b.hp - a.hp)[0];
      if (e) { e.stun = Math.max(e.stun, d.cookie.t); e.cookie = d.cookie.t; s.ev.push({type:'cookie', x:e.x, y:e.y}); u.abT = d.cookie.every; } else u.abT = 1;
    } else if (d.song) {                                           // Sirena: canta, e i buoni vicini restano incantati
      const es = within(d.song.r);
      if (es.length) { for (const e of es) e.stun = Math.max(e.stun, U[e.k].boss ? d.song.t / 2 : d.song.t); s.ev.push({type:'song', x:u.x, y:u.y}); u.abT = d.song.every; } else u.abT = 1;
    } else if (d.dash) {                                           // Bandersnatch: morde e scatta sul buono successivo
      const e = foes.filter(e => (e.x - u.x) * dir > d.range + 15 && (e.x - u.x) * dir <= d.dash.r).sort((a, b) => (a.x - b.x) * dir)[0];
      if (e && foes.some(f => Math.abs(f.x - u.x) <= d.range + 6)) { const ox = u.x; u.x = e.x - dir * (d.range + 2); strike(s, u.k, u.side, e, d.dmg * u.dm * d.dash.m); s.ev.push({type:'dash', x:u.x, x1:ox, x2:u.x, y:u.y}); u.abT = d.dash.every; } else u.abT = .5;
    } else if (d.stomp) {                                          // Gigante di Ghiaccio: pesta il suolo e congela chi ha intorno
      const es = within(d.stomp.r);
      if (es.length) { for (const e of es) { const b = U[e.k].boss; e.stun = Math.max(e.stun, b ? d.stomp.t / 2 : d.stomp.t); hurt(s, e, d.dmg * u.dm * .5, u.k, u.k); } s.ev.push({type:'stomp', x:u.x, y:u.y}); u.abT = d.stomp.every; } else u.abT = 1;
    } else if (d.chain) {                                          // Krampus: le catene trascinano lontano un buono e lo stordiscono
      const e = within(d.chain.r).filter(e => !U[e.k].boss && !U[e.k].elite && (e.x - u.x) * dir > -10).sort((a, b) => Math.abs(a.x - u.x) - Math.abs(b.x - u.x))[0];
      if (e) { const ox = e.x; e.x = Math.max(s.base.x + 10, Math.min(s.castle.x - 10, e.x + dir * d.chain.d)); e.stun = Math.max(e.stun, d.chain.t); s.ev.push({type:'chain', x1:u.x, x2:ox, x3:e.x, y:e.y}); u.abT = d.chain.every; } else u.abT = 1;
    } else if (d.tentacle) {                                       // Kraken: i tentacoli colpiscono 3 buoni insieme e li bloccano
      const es = within(d.tentacle.r).sort((a, b) => Math.abs(a.x - u.x) - Math.abs(b.x - u.x)).slice(0, d.tentacle.n);
      if (es.length) { for (const e of es) { const b = U[e.k].boss; e.stun = Math.max(e.stun, b ? d.tentacle.t / 2 : d.tentacle.t); hurt(s, e, d.tentacle.dmg * u.dm * (b ? .5 : 1), u.k, u.k); } s.ev.push({type:'tentacle', x:u.x, y:u.y, xs:es.map(e => e.x)}); u.abT = d.tentacle.every; } else u.abT = 1;
    } else if (d.betray) {                                         // Mordred: un buono tradisce e da ora combatte per noi
      const e = within(d.betray.r).filter(e => !U[e.k].boss && !U[e.k].elite && !U[e.k].sub && U[e.k].hp <= d.betray.maxHp).sort((a, b) => Math.abs(a.x - u.x) - Math.abs(b.x - u.x))[0];
      if (e) { e.side = u.side; e.kid = 1; e.fear = 0; e.stun = .5; e.st = 'walk'; s.ev.push({type:'betray', x:e.x, y:e.y}); u.abT = d.betray.every; } else u.abT = 1;
    } else if (d.leap && d.elite) {                                // Re Ranocchio: salta corto, atterra davanti al nemico e combatte
      const e = foes.filter(e => (e.x - u.x) * dir > d.range + 20 && (e.x - u.x) * dir <= 140).sort((a, b) => (a.x - b.x) * dir)[0];
      if (e) { const ox = u.x; u.x = e.x - dir * (d.range + 4); s.ev.push({type:'leap', x1:ox, x2:u.x, y:u.y}); u.abT = 15; } else u.abT = 1;
    } else if (d.leap) {                                           // Ranocchio: salta oltre il primo nemico
      const e = foes.find(e => (e.x - u.x) * dir > 0 && (e.x - u.x) * dir <= d.range + 6);
      if (e) { const ox = u.x; u.x += dir * d.leap.d; s.ev.push({type:'leap', x1:ox, x2:u.x, y:u.y}); u.abT = d.leap.every; }
    }
  }

  function step(s, dt) {
    if (s.over) return;
    s.t += dt; s._dtk = dt * 60;
    s.night = s.mp || (s.lv.world || 0) < NIGHT.from ? .25 : Math.max(.25, nightP(s.t));   // quanto è buio: il Lupo Mannaro ci vede bene
    const w = s.wallet;
    w.cur = Math.min(walletCap(s), w.cur + walletRate(w.lv) * s.rateMul * (s.beta ? 6 : 1) * dt);
    s.fire.v = Math.min(1, s.fire.v + dt / s.fire.charge);
    if (s.p2) { const p = s.p2, w2 = p.wallet; w2.cur = Math.min(walletMax(w2.lv), w2.cur + walletRate(w2.lv) * p.rateMul * dt); p.fire.v = Math.min(1, p.fire.v + dt / p.fire.charge); }
    for (const k in s.cds) s.cds[k] = Math.max(0, s.cds[k] - dt);
    if (s.mp && s.mp !== 'coop') {
      if (!s.overtime && s.t >= OVERTIME) { s.overtime = true; s.ev.push({type:'overtime'}); }
      if (s.t >= DUEL_MAX) { s.over = s.base.hp / s.base.max >= s.castle.hp / s.castle.max ? 1 : -1; s.ev.push({type:'end', win:s.over > 0}); return; }
    }
    if (s.rule.timeLimit && s.t >= s.rule.timeLimit) { s.over = -1; s.ev.push({type:'end', win:false, timeout:true}); return; }
    castleAI(s, dt);

    const alive = s.units.filter(u => !u.dead);
    const crocOnField = alive.some(u => u.k === 'coccodrillo' && u.side === 0);
    for (const u of alive) {
      if (u.dead) continue;
      const d = U[u.k], dir = u.side ? -1 : 1;
      u.swing = Math.max(0, u.swing - dt * 4);
      if (u.ttl != null && (u.ttl -= dt) <= 0) { u.dead = true; s.ev.push({type:'vanish', x:u.x, y:u.y}); continue; }   // i miraggi svaniscono
      if (u.big > 0) u.big -= dt;
      if (u.goldT > 0) u.goldT -= dt; if (u.cookie > 0) u.cookie -= dt; if (u.pig > 0) u.pig -= dt; if (u.buffT > 0) u.buffT -= dt; if (u.smokeT > 0) u.smokeT -= dt;
      if (u.burnT > 0) { u.burnT -= dt; u.burnA = (u.burnA || 0) + u.burnD * dt; if (u.burnA >= 4) { const n = Math.floor(u.burnA); u.burnA -= n; hurt(s, u, n, 'burn', 'diavolo'); if (u.dead) continue; } if (u.burnT <= 0) u.burnD = 0; }
      if (u.weakT > 0) u.weakT -= dt;
      if (d.slime) for (const e of alive) if (!e.dead && e.side !== u.side && Math.abs(e.x - u.x) <= d.slime.r) e.slowT = Math.max(e.slowT || 0, .25);   // la bava del Lumacone
      if (d.hyde && !u.hyde && (u.hydeT = (u.hydeT || 0) + dt) >= d.hyde.t) { u.hyde = 1; u.spdMul *= d.hyde.spd; s.ev.push({type:'hyde', x:u.x, y:u.y}); }   // Jekyll diventa Hyde
      if (u.stone > 0) u.stone -= dt;
      if (u.mute > 0) u.mute -= dt;
      const slow = u.slowT > 0 ? (u.slowT -= dt, .5) : 1;
      if (u.kb > 0) { const m = Math.min(u.kb, 240 * dt); u.x -= dir * m; u.kb -= m; continue; }
      if (u.stun > 0) { u.stun -= dt; continue; }
      if (u.fear > 0) {                                            // scappa all'indietro
        u.fear -= dt; u.st = 'walk';
        u.x = Math.max(s.base.x + 10, Math.min(s.castle.x - 10, u.x - dir * d.spd * .8 * dt));
        continue;
      }
      abilities(s, u, d, dir, alive);
      if (u.vanT > 0) u.vanT -= dt;
      let tgt = null, best = Infinity;
      if (!d.ghost && !(u.vanT > 0)) for (const e of alive) {                       // il fantasma ignora i buoni e punta al castello
        if (e.side === u.side || e.dead) continue;
        if (e.disg) continue;                                      // il lupo travestito da pecora passa inosservato
        if ((U[e.k].ghost || U[e.k].fly) && !d.ranged && !d.heal && !(d.vsGhost && U[e.k].ghost)) continue;   // chi combatte corpo a corpo non tocca fantasmi e grifoni
        const dist = (e.x - u.x) * dir - (d.vsGhost && U[e.k].ghost ? 80 : 0);   // il cacciatore di spiriti punta prima i fantasmi
        if (dist > -6 && dist < best) { best = dist; tgt = e; }
      }
      const range = d.range;
      const bDist = u.side ? u.x - s.base.x - 34 : s.castle.x - u.x - 34;
      const hitB = bDist <= range && bDist <= best;
      if (d.charge && d.charge.every && u.charged && (u.chT = (u.chT || 0) + dt) > d.charge.every) { u.charged = false; u.spdMul = 1; u.chT = 0; }   // il Minotauro torna a caricare
      if (d.charge && !u.charged && !(u.mute > 0) && tgt && best <= d.range + 4) {  // la carrozza travolge chi trova davanti
        u.charged = true; u.spdMul = .35;
        for (const e of alive) if (e.side !== u.side && !e.dead && Math.abs(e.x - tgt.x) <= d.charge.r) { hurt(s, e, d.charge.dmg * u.dm, u.k, u.k); e.kb = d.charge.kb; }
        s.ev.push({type:'boom', x:tgt.x, y:tgt.y, k:u.k});
      }
      if (d.heal && !(u.mute > 0)) {                                // la fata si ferma a distanza e cura il più ferito (se non è muta)
        if ((tgt && best <= range) || hitB) {
          u.st = 'atk';
          if ((u.atkT -= dt) <= 0) {
            u.atkT = d.rate;
            let wnd = null, wr = 1; const healN = d.heal * u.dm;
            for (const a of alive) if (a.side === u.side && !a.dead && Math.abs(a.x - u.x) <= d.range && a.hp / a.max < wr) { wr = a.hp / a.max; wnd = a; }
            if (wnd) { const n = Math.min(healN, wnd.max - wnd.hp); wnd.hp += n; u.swing = 1; s.ev.push({type:'heal', x:wnd.x, y:wnd.y, n:Math.round(n)}); }
          }
        } else { u.st = 'walk'; u.x += dir * d.spd * dt; }
        continue;
      }
      if ((tgt && best <= range) || hitB) {
        u.st = 'atk';
        if ((u.atkT -= dt * slow) <= 0) {
          u.atkT = d.rate; u.swing = 1;
          let mul = (u.big > 0 ? 2 : 1) * (u.weakT > 0 ? .6 : 1) * (u.buffT > 0 ? 1.3 : 1) * (u.hyde ? d.hyde.m : 1) * (d.heads ? 1 + d.heads.m * (1 - u.hp / u.max) : 1) * (d.moon ? 1 + d.moon.dmg * s.night : 1);
          if (u.disg) { mul *= d.disguise; u.disg = 0; s.ev.push({type:'unmask', x:u.x, y:u.y}); }   // giù la maschera: primo morso triplo
          if (d.ranged) s.shots.push({from:u.x, x:u.x, y:u.y, tid:hitB ? 0 : tgt.id, toB:hitB ? 1 - u.side : -1,
            dmg:d.dmg * u.dm * mul, side:u.side, aid:u.id, t:0, dur:.35 + (hitB ? bDist : best) / 600, kind:d.elite ? d.elite.base : u.k});
          else if (hitB) hurtBuilding(s, 1 - u.side, d.dmg * u.dm * mul, u.k);
          else { strike(s, u.k, u.side, tgt, d.dmg * u.dm * mul); if (d.double && !tgt.dead) strike(s, u.k, u.side, tgt, d.dmg * u.dm * mul); if (U[tgt.k].curse) { u.weakT = U[tgt.k].curse.t; s.ev.push({type:'curse', x:u.x, y:u.y}); } if (d.drain) u.hp = Math.min(u.max, u.hp + d.dmg * u.dm * mul * d.drain); }   // Dracula si cura mordendo
        }
      } else {
        u.st = 'walk';
        const boost = u.k === 'uncino' && crocOnField ? 1.35 : 1;  // Uncino scappa dal coccodrillo
        u.x += dir * d.spd * u.spdMul * boost * slow * (d.moon ? 1 + d.moon.spd * s.night : 1) * dt; u.atkT = Math.min(u.atkT, d.rate * .35);
      }
    }
    for (const p of s.shots) {
      p.t += dt;
      if (p.t >= p.dur && !p.done) {
        p.done = true;
        if (p.toB >= 0) hurtBuilding(s, p.toB, p.dmg, p.kind);
        else { const t = s.units.find(u => u.id === p.tid); if (t && !t.dead) { strike(s, p.kind, p.side, t, p.dmg); if (U[t.k].curse) { const a = s.units.find(u => u.id === p.aid); if (a && !a.dead) { a.weakT = U[t.k].curse.t; s.ev.push({type:'curse', x:a.x, y:a.y}); } } } }
      }
    }
    s.shots = s.shots.filter(p => !p.done || p.t < p.dur + .05);
    for (const u of s.units) if (u.dead && u.deadAt == null) u.deadAt = s.t;
    s.units = s.units.filter(u => !u.dead || s.t - u.deadAt < 1.2);
  }

  function stars(s) {
    if (s.over <= 0) return 0;
    const f = s.base.hp / s.base.max;
    return f >= .9 ? 3 : f >= .5 ? 2 : 1;
  }
  const reward = s => s.inf ? 0 : Math.round(.5 * (s.hard ? 2 : 1) * (s.over > 0 ? s.lv.gold + 50 * stars(s) + s.stats.stolen * 2 : 20 + Math.round((30 + 3 * (s.lv.g || 0)) * (1 - s.castle.hp / s.castle.max))));

  // I Capricci del Drago: battaglie con una regola storta. Se ne apre uno per ogni mappa completata
  const BCOST = {soldatino:40, arciere:60, pollicino:55, hanselgretel:60, ranocchio:70, raperonzolo:80, peterpan:80, cacciatore:90, fata:100, pifferaio:100, nani:110, porcellino:120, carrozza:130, musicanti:140, principe:180, bimbi:70, wendy:90, giglio:70, cappellaio:100, brucaliffo:100, lepre:70, alibaba:90, sinbad:150, guardie:120, renna:130, fiammiferaia:100, soldatineve:110, cavcristallo:170, gemelli:120, pisello:120, cappuccetto:55, pinocchio:70, robinhood:90, gattostivali:90, alice:90, biancaneve:100, merlino:120};   // i buoni costano Bontà
  const ALT_BMUL = 1.7, ALT_CASTLE = 1600, OVERTIME = 150, DUEL_MAX = 300;                       // duello alternativo: buoni un po' più forti, castello dei buoni
  const CK = [1.42, 1.5, .97, 1, 1.14];                           // ritocchi provati con le simulazioni a due
  const COOP = [                                                   // i castelli speciali per giocare in due
    {name:'Il Castello che Raddoppia', w:2, c:5, hp:2.0, e:1.25 * CK[0]},
    {name:'La Fortezza delle Due Fate', w:4, c:6, hp:2.1, e:1.3 * CK[1]},
    {name:'Il Palazzo del Doppio Re', w:6, c:6, hp:2.2, e:1.35 * CK[2]},
    {name:'La Torre Gemella', w:8, c:6, hp:2.3, e:1.4 * CK[3]},
    {name:'Il Trono del Doppio Lieto Fine', w:9, c:9, hp:2.4, e:1.45 * CK[4]}
  ];
  function coopLevel(i) {
    const C = COOP[i], b = levelOf(C.w, C.c);
    return Object.assign({}, b, {name:C.name, hp:Math.round(b.hp * C.hp), eMul:b.eMul * C.e, coop:i, gold:b.gold * 2,
      waves:b.waves.map(w => [w[0], w[1], w[2] * .8]), boss:b.boss || DW_COOP_BOSS[i], bossAt:60, semi:false});
  }
  const DW_COOP_BOSS = ['generale', 'fata_ghiaccio', 'pifferaio_re', 'raperonzolo_oro', 're_oro'];
  const HARD = 1.2, DECK = 6, HAND = 3;                          // modalità eroica · mazzo da 6, 3 carte in mano                                               // modalità eroica: buoni più forti
  const CAPRICCI = [
    {name:'Solo topi',             txt:'Oggi lavorano solo i topi. Gli altri sono in ferie.',     w:0, c:0, rule:{cdMul:.3, noRush:1}, squad:['topi'], prize:'gnomo'},
    {name:'Drago in sciopero',     txt:'Il drago ha il mal di gola. Niente fiammata.',             w:1, c:3, rule:{noFire:1}, prize:'strega'},
    {name:'Mezza Cattiveria',      txt:'Giornata storta: la Cattiveria arriva a metà.',            w:2, c:3, rule:{catMul:.6}, prize:'fantasma'},
    {name:'Tana di cartone',       txt:'La tana è in ristrutturazione. Metà vita.',                 w:3, c:4, rule:{baseMul:.5}, prize:'lupo'},
    {name:'Boss a colazione',      txt:'Il Re del Mare si è svegliato presto.',                     w:4, c:2, rule:{boss:'re_mare', bossAt:12}, prize:'coccodrillo'},
    {name:'Squadra a sorpresa',    txt:'La squadra la sceglie il drago, a occhi chiusi.',           w:5, c:0, rule:{}, random:6, prize:'gattovolpe'},
    {name:'Uno contro tutti',      txt:'Un cattivo solo. Ma scelto bene.',                          w:6, c:0, rule:{castleMul:.7, cdMul:.4}, pick:1, prize:'barbablu'},
    {name:'Corsa contro il tempo', txt:'Tre minuti, poi il drago si stufa.',                        w:7, c:0, rule:{timeLimit:180}, prize:'spaventapasseri'},
    {name:'Banchetto del drago',   txt:'Cattiveria doppia, castello doppio. Si mangia tanto.',      w:8, c:4, rule:{catMul:2, castleMul:2}, prize:'uncino'},
    {name:'Parata dei boss',       txt:'Tre semiboss in fila. Nessuno li ha invitati.',             w:9, c:0, rule:{extra:[['generale', 30], ['capo_nani', 80], ['carrozza_oro', 130]]}, prize:'gigante'}
  ];
  CAPRICCI.forEach((c, i) => { c.fr = 10; c.gold = 300 + 100 * i; });
  return {INF_WAVE, INF_POWERS, infChoose, costIn, walletCap, nightP, BCOST, COOP, coopLevel, costOf, LEG, DECK, HAND, HARD, CAPRICCI, EK, U, ELITE, ROSTER, START, LEVELS, WORLDS, TOTAL, levelOf, firstIdx, FIRE, WALLET_MAX_LV, walletMax, walletRate, walletCost, create, spawn, canSpawn, upgradeWallet, fire, step, stars, reward};
})();
if (typeof module !== 'undefined') module.exports = DW;
