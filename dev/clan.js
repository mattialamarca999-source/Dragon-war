/* ================= Clan: gruppi di giocatori con chat, frammenti, baule della settimana e classifica ================= */
const CLAN_XP = [0, 100, 300, 600, 1000, 1500, 2100, 2800, 3600, 4500];       // esperienza per i livelli 1-10
const clanLv = xp => { let l = 1; for (let i = 1; i < CLAN_XP.length; i++) if ((xp || 0) >= CLAN_XP[i]) l = i + 1; return l; };
const clanCap = lv => Math.min(50, 20 + 5 * (lv - 1));                         // 20 posti, +5 a livello, fino a 50
const clanAskMax = (lv, rar) => (rar >= 2 ? 4 : 8) + Math.floor((lv - 1) / 2);      // frammenti chiedibili: +1 ogni 2 livelli
const CLAN_DESC = ['Cattivi si nasce, non si diventa', 'Qui si gioca per vincere', 'Si gioca quando si può, senza stress', 'Ci aiutiamo coi frammenti', 'Solo i più cattivi', 'Le fiabe tremano quando arriviamo', 'Nuovi giocatori benvenuti!', 'Si gioca tutti i giorni', 'Amici prima di tutto', 'Il drago comanda'];
const CLAN_TYPE = ['Aperto', 'Su richiesta', 'Solo invito'];
const CLAN_ROLE = ['', 'vice', 'capo'];
const CLAN_TIERS = [50, 150, 300, 600];
const CLAN_PRIZE = [{gold:150}, {gold:300}, {ru:5}, {egg:'big'}];
const clanTiers = n => CLAN_TIERS.map(t => Math.max(1, Math.ceil(t * Math.max(1, n || 1) / 10)));   // con 10 membri come sopra, con 5 la metà
const CLAN_REQ_CD = 8 * 3600e3, CLAN_IDLE = 14 * 86400e3, CLAN_COST = 1000, CLAN_MUTE = 24 * 3600e3;
const CL = {cid:null, info:null, mem:{}, chat:[], reqs:{}, tab:'chat', on:[], pend:null, banned:false, list:null, q:'', board:null, lastSend:0, ed:null, fresh:true, pruned:0};
save.clan = Object.assign({wk:'', got:0, seen:0, recv:{}, pend:null, ok:0}, save.clan || {});
save.blocked = save.blocked || [];
const clanOpen = () => BETA || worldOpen(1);                                   // si apre dopo il boss del mondo 1

/* ---------- filtro: parolacce, numeri di telefono, email e link diventano *** ---------- */
const CLAN_BAD_IN = ['cazz', 'minchi', 'stronz', 'merd', 'puttan', 'coglion', 'troia', 'zoccol', 'vaffan', 'fanculo', 'porcodio', 'diocane', 'porcamadonna', 'ricchion', 'culatton', 'bocchin', 'pompin', 'leccacul', 'fuck', 'shit', 'cunt', 'nigg', 'bitch', 'asshole', 'motherf', 'whore', 'mierda', 'joder', 'coño', 'cabron', 'cabrón', 'gilipoll', 'pendej', 'chinga', 'culero', 'maricon', 'maricón', 'hijoputa', 'hijodeputa'];   // parolacce anche dentro altre parole
const CLAN_BAD_START = ['figa', 'fica', 'fottut', 'bastard', 'froci', 'negro', 'negri', 'mongoloid', 'ritardat', 'handicappat', 'suca', 'succhia', 'sega', 'cornut', 'dick', 'puss', 'fag', 'slut', 'wank', 'retard', 'porn', 'sex', 'nazi', 'hitler', 'kys', 'ammazzati', 'suicid', 'puta', 'puto', 'hostia', 'verga', 'follar', 'polla', 'capullo', 'zorra', 'mamon', 'mamón', 'subnormal', 'matate', 'mátate'];   // solo a inizio parola
const CLAN_OK = ['pollai', 'pollam', 'pollast', 'segal', 'segat', 'segar', 'segn', 'fagiol', 'fagott', 'faggi', 'fagian', 'figat', 'negroni', 'ficat', 'sextant', 'dickens', 'fottutament', 'puss in'];
const CLAN_BAD_PHRASE = ['porco dio', 'dio cane', 'porca madonna', 'testa di cazzo', 'pezzo di merda', 'kill yourself', 'figlio di puttana', 'hijo de puta', 'me cago en'];
const clanNorm = t => t.toLowerCase().replace(/[0@]/g, 'o').replace(/[1!|]/g, 'i').replace(/3/g, 'e').replace(/4/g, 'a').replace(/[5$]/g, 's').replace(/7/g, 't').replace(/[^a-zàèéìòù ]/g, '');
const clanBadWord = w => { const n = clanNorm(w); if (!n || CLAN_OK.some(o => n.startsWith(o))) return false; return CLAN_BAD_IN.some(b => n.includes(b)) || CLAN_BAD_START.some(b => n.startsWith(b)); };
function clanClean(t) {
  t = t.replace(/\s+/g, ' ').trim().slice(0, 200);
  t = t.replace(/(https?:\/\/\S+|www\.\S+|\b\S+\.(com|it|net|org|io|gg|me|ly|tv|app)\b\S*)/gi, '***');      // niente link
  t = t.replace(/\S+@\S+\.\S+/g, '***');                                                                   // niente email
  t = t.replace(/(\+?\d[\d .-]{6,}\d)/g, '***');                                                          // niente numeri di telefono
  t = t.split(/(\s+)/).map(w => clanBadWord(w) ? '*'.repeat(Math.max(3, w.length)) : w).join('');
  return t.replace(new RegExp(CLAN_BAD_PHRASE.join('|'), 'gi'), m => '*'.repeat(m.length));
}
const clanBadName = n => n.split(/\s+/).some(clanBadWord) || CLAN_BAD_IN.some(b => clanNorm(n).replace(/ /g, '').includes(b)) || CLAN_BAD_PHRASE.some(b => clanNorm(n).includes(b));

/* ---------- collegamento ai dati online ---------- */
const clP = p => 'clan' + p;                                                    // percorsi: clans, clanMembers, clanChat...
function clanOff() { for (const [ref, ev, h] of CL.on) ref.off(ev, h); CL.on = []; CL.info = null; CL.mem = {}; CL.chat = []; CL.reqs = {}; }
function clanOnRef(ref, cb) { const h = ref.on('value', cb); CL.on.push([ref, 'value', h]); }
function clanSync() {                                                           // chiamata quando cambia il mio profilo online
  if (!FBX.on || FBX.deleting) return;
  const cid = (FBX.me && FBX.me.clan) || null;
  if (cid === CL.cid && (cid || !save.clan.pend || CL.pend === save.clan.pend)) return;
  clanOff(); CL.cid = cid; CL.fresh = true;
  if (cid) {
    if (save.clan.pend) { save.clan.pend = null; persist(); }
    fbRef('bans/' + FBX.uid).once('value').then(s => { CL.banned = s.exists(); }).catch(() => {});
    clanOnRef(fbRef('clans/' + cid), snap => {
      CL.info = snap.val();
      if (!CL.info) { fbRef('users/' + FBX.uid + '/clan').remove().catch(() => {}); toast('Il tuo clan non esiste più'); return; }
      clanFixCnt(); clanPaint();
    });
    clanOnRef(fbRef('clanMembers/' + cid), snap => {
      CL.mem = snap.val() || {};
      if (!CL.mem[FBX.uid]) {                                                   // non ci sono più: cacciato (ricontrollo per sicurezza)
        fbRef('clanMembers/' + cid + '/' + FBX.uid).once('value').then(s => { if (!s.exists() && CL.cid === cid) { fbRef('users/' + FBX.uid + '/clan').remove().catch(() => {}); toast('Non fai più parte del clan'); } }).catch(() => {});
        return;
      }
      if (CL.fresh) { CL.fresh = false; fbRef('clanMembers/' + cid + '/' + FBX.uid).update({s:fbNow(), n:(FBX.me && FBX.me.name) || CL.mem[FBX.uid].n}).catch(() => {}); }
      clanLeader(); clanFixCnt(); clanPaint();
    });
    clanOnRef(fbRef('clanChat/' + cid).orderByChild('t').limitToLast(60), snap => {
      const out = []; snap.forEach(c => { out.push(Object.assign({id:c.key}, c.val())); }); out.sort((a, b) => (a.t || 0) - (b.t || 0));
      CL.chat = out; clanReceive(); clanPaint(true);
    });
    clanOnRef(fbRef('clanReq/' + cid), snap => { CL.reqs = snap.val() || {}; clanPaint(); });
  } else if (save.clan.pend) {                                                  // ho chiesto di entrare: aspetto che il capo accetti
    const pend = CL.pend = save.clan.pend;
    clanOnRef(fbRef('clanMembers/' + pend + '/' + FBX.uid), snap => {
      if (snap.exists()) { fbRef('users/' + FBX.uid + '/clan').set(pend).then(() => { fbRef('clanReq/' + pend + '/' + FBX.uid).remove().catch(() => {}); toast('Sei entrato nel clan!'); UIS.win && UIS.win(); }).catch(() => {}); }
    });
    clanOnRef(fbRef('clanReq/' + pend + '/' + FBX.uid), snap => {
      if (!snap.exists() && save.clan.pend === pend) setTimeout(async () => {
        const m = await fbRef('clanMembers/' + pend + '/' + FBX.uid).once('value').catch(() => null);
        if (m && !m.exists() && save.clan.pend === pend && !CL.cid) { save.clan.pend = null; persist(); CL.pend = null; clanOff(); toast('La richiesta per il clan non è stata accettata'); clanPaint(); }
      }, 1500);
    });
  }
  clanPaint();
}
function clanLeader() {                                                        // il capo non gioca da 14 giorni: tocca al vice (o al membro) più vecchio
  if (!CL.info) return;
  const me = CL.mem[FBX.uid], own = CL.info.own, o = CL.mem[own];
  if (me && me.r === 2 && own !== FBX.uid) { fbRef('clanMembers/' + CL.cid + '/' + FBX.uid).update({r:1}).catch(() => {}); return; }
  if (own === FBX.uid || (o && Date.now() - (o.s || 0) < CLAN_IDLE)) return;
  const others = Object.entries(CL.mem).filter(([u]) => u !== own).sort((a, b) => (b[1].r || 0) - (a[1].r || 0) || (a[1].j || 0) - (b[1].j || 0));
  if (others.length && others[0][0] === FBX.uid) fbRef('clans/' + CL.cid + '/own').set(FBX.uid).then(() => fbRef('clanMembers/' + CL.cid + '/' + FBX.uid + '/r').set(2))
    .then(() => clanSys('{nome} è il nuovo capo del clan', {nome:clanMe().n})).catch(() => {});
}
const clanMe = () => CL.mem[FBX.uid] || {};
const clanN = () => Math.max(1, Object.keys(CL.mem).length);
function clanFixCnt() {                                                         // il capo tiene giusto il numero dei membri (se un telefono si è spento a metà)
  if (!CL.info || CL.info.own !== FBX.uid || CL.fixing || !CL.mem[FBX.uid]) return;
  const n = Object.keys(CL.mem).length; if ((CL.info.cnt || 0) === n) return;
  CL.fixing = true; clanCnt(CL.cid, n > (CL.info.cnt || 0) ? 1 : -1).catch(() => {}).then(() => { CL.fixing = false; });
}
const clanRole = () => CL.info && CL.info.own === FBX.uid ? 2 : Math.min(1, clanMe().r || 0);
const clanLvNow = () => clanLv(CL.info ? CL.info.xp : 0);
const clanFill = (it, p) => it.replace(/\{(\w+)\}/g, (x, k) => p && p[k] != null ? p[k] : x);
function clanSys(it, p) { if (CL.cid) fbRef('clanChat/' + CL.cid).push({u:FBX.uid, n:clanMe().n || (FBX.me && FBX.me.name) || '?', k:'s', x:clanFill(it, p), sk:it, sp:p || null, t:fbNow()}).catch(() => {}); }   // salvo la frase in italiano e i nomi: ognuno la legge nella sua lingua
function clanXp(n) { if (CL.cid) fbRef('clans/' + CL.cid + '/xp').transaction(x => (x || 0) + n).catch(() => {}); }
function clanCnt(cid, d) { return fbRef('clans/' + cid + '/cnt').transaction(c => Math.max(0, (c || 0) + d)); }
function clanWin() {                                                           // ogni vittoria: un punto per il baule e per l'esperienza del clan
  if (!CL.cid || !FBX.on) return;
  const wk = weekKey(), me = clanMe();
  fbRef('clans/' + CL.cid + '/wk').transaction(c => (!c || c.k !== wk) ? {k:wk, p:1} : {k:wk, p:(c.p || 0) + 1}).catch(() => {});
  clanXp(1);
  fbRef('clanMembers/' + CL.cid + '/' + FBX.uid).update({w:me.wk === wk ? (me.w || 0) + 1 : 1, wk, wt:(me.wt || 0) + 1, s:fbNow()}).catch(() => {});
}
function clanReceive() {                                                       // i frammenti che gli altri mi hanno regalato
  let got = 0, last = null;
  for (const m of CL.chat) if (m.k === 'q' && m.u === FBX.uid && m.q) {
    const had = save.clan.recv[m.id] || 0, n = (m.q.got || 0) - had;
    if (n > 0) { save.shards[m.q.k] = (save.shards[m.q.k] || 0) + n; save.clan.recv[m.id] = m.q.got; got += n; last = m.q.k; }
  }
  if (got) {
    const ids = new Set(CL.chat.map(m => m.id)); for (const id of Object.keys(save.clan.recv)) if (!ids.has(id) && Object.keys(save.clan.recv).length > 30) delete save.clan.recv[id];
    const fresh = checkUnlocks(); persist();
    toast(`+${got} frammenti di ${SHORT[last]} dal clan!`); if (fresh.length) setTimeout(() => toast(`${SHORT[fresh[0]]} sbloccato!`), 2300);
  }
}
const clanUnread = () => CL.chat.filter(m => m.u !== FBX.uid && (m.t || 0) > (save.clan.seen || 0) && !save.blocked.includes(m.u)).length;
function clanChestState() {
  const wk = weekKey(), info = CL.info || {}, p = info.wk && info.wk.k === wk ? info.wk.p || 0 : 0, tiers = clanTiers(clanN());
  const me = clanMe(), mine = me.wk === wk ? me.w || 0 : 0, got = save.clan.wk === wk ? save.clan.got : 0;
  const reached = tiers.filter(t => p >= t).length;
  return {wk, p, tiers, mine, got, reached, ready:mine > 0 ? Math.max(0, reached - got) : 0};
}
function clanDot() {                                                           // il puntino sul tasto Clan del menu
  const d = $('menuClan') && $('menuClan').querySelector('.dot'); if (!d) return;
  const n = CL.cid ? clanUnread() + clanChestState().ready + (clanRole() >= 1 ? Object.keys(CL.reqs).length : 0) : 0;
  d.hidden = !n; d.textContent = n > 9 ? '9+' : n || '';
}

/* ---------- azioni ---------- */
const clanErr = (e, step) => (/permission/i.test((e && (e.code || e.message)) || '') ? 'Il server non lo permette: controlla che su Firebase ci siano le regole nuove (Passo 1 della guida).' : 'Controlla la connessione e riprova.') + (step ? ` [codice C${step}]` : '');
async function clanCreate(d) {
  const n = (d.n || '').replace(/\s+/g, ' ').trim();
  if (!/^[A-Za-z0-9À-ÿ' ]{3,20}$/.test(n)) return 'Il nome: da 3 a 20 lettere o numeri.';
  if (clanBadName(n)) return 'Questo nome non si può usare.';
  if (save.gold < CLAN_COST) return `Servono ${CLAN_COST} oro per creare un clan.`;
  const nl = n.toLowerCase();
  try { if ((await fbRef('clanNames/' + nl).once('value')).exists()) return 'C’è già un clan con questo nome.'; } catch (e) {}
  const cid = fbRef('clans').push().key, wk = weekKey(), me = (FBX.me && FBX.me.name) || 'Capo';
  // un pezzo alla volta: ogni passo il server lo controlla da solo (se uno fallisce, tolgo quelli già fatti)
  const steps = [
    () => fbRef('clans/' + cid).set({n, nl, e:{f:d.f, c:d.c, s:d.s}, d:d.d, t:d.t, xp:0, cnt:1, own:FBX.uid, ct:fbNow(), wk:{k:wk, p:0}}),
    () => fbRef('clanMembers/' + cid + '/' + FBX.uid).set({n:me, r:2, j:fbNow(), s:fbNow(), w:0, wk, wt:0, dn:0}),
    () => fbRef('clanNames/' + nl).set(cid),
    () => fbRef('users/' + FBX.uid + '/clan').set(cid)];
  for (let i = 0; i < steps.length; i++) {
    try { await steps[i](); }
    catch (e) {
      if (i >= 2) await fbRef('clanNames/' + nl).remove().catch(() => {});
      if (i >= 1) await fbRef('clanMembers/' + cid + '/' + FBX.uid).remove().catch(() => {});
      if (i >= 1) await fbRef('clans/' + cid).remove().catch(() => {});
      return i === 2 ? 'C’è già un clan con questo nome.' : clanErr(e, i + 1);
    }
  }
  save.gold -= CLAN_COST; persist(); UIS.up(); CL.list = null;
  setTimeout(() => clanSys('{nome} ha fondato il clan «{clan}»', {nome:me, clan:n}), 400);
  return null;
}
async function clanJoin(cid, inv) {
  if (!FBX.on) return toast('Online non raggiungibile');
  if (!(FBX.me && FBX.me.name)) return fbAskName(true);
  if (CL.cid) return toast('Esci prima dal tuo clan');
  let c = null; try { c = (await fbRef('clans/' + cid).once('value')).val(); } catch (e) {}
  if (!c) return toast('Questo clan non esiste più');
  if ((c.cnt || 0) >= clanCap(clanLv(c.xp))) return toast('Il clan è pieno');
  let ok = c.t === 0 || inv; if (!ok && c.t === 2) { try { ok = (await fbRef('clanInv/' + cid + '/' + FBX.uid).once('value')).exists(); } catch (e) {} }
  if (c.t === 1 && !ok) {                                                       // su richiesta: il capo o il vice decidono
    try { await fbRef('clanReq/' + cid + '/' + FBX.uid).set({n:FBX.me.name, t:fbNow()}); } catch (e) { return toast(clanErr(e)); }
    save.clan.pend = cid; persist(); clanSync(); toast('Richiesta mandata: aspetta che il capo accetti'); return clanPaint();
  }
  if (!ok) return toast('In questo clan si entra solo su invito');
  const wk = weekKey();
  try {
    await fbRef('clanMembers/' + cid + '/' + FBX.uid).set({n:FBX.me.name, r:0, j:fbNow(), s:fbNow(), w:0, wk, wt:0, dn:0});
    await clanCnt(cid, 1); await fbRef('users/' + FBX.uid + '/clan').set(cid);
    fbRef('clanInv/' + cid + '/' + FBX.uid).remove().catch(() => {});
  } catch (e) { return toast(clanErr(e)); }
  UIS.up(); CL.tab = 'chat';
  setTimeout(() => clanSys('{nome} è entrato nel clan 👋', {nome:FBX.me.name}), 400);
  return true;
}
async function clanLeave(silent) {                                            // esco; se ero il capo passo il clan al vice/membro più vecchio
  const cid = CL.cid; if (!cid) return;
  const mem = Object.assign({}, CL.mem), info = CL.info || {}, me = clanMe(), others = Object.entries(mem).filter(([u]) => u !== FBX.uid);
  try {
    if (!others.length) {                                                       // ero l'ultimo: il clan sparisce
      for (const p of ['clanChat', 'clanReq', 'clanInv']) await fbRef(p + '/' + cid).remove().catch(() => {});
      await fbRef('clans/' + cid).remove(); if (info.nl) await fbRef('clanNames/' + info.nl).remove().catch(() => {});
      await fbRef('clanMembers/' + cid + '/' + FBX.uid).remove();
    } else {
      if (info.own === FBX.uid) {
        const nx = others.sort((a, b) => (b[1].r || 0) - (a[1].r || 0) || (a[1].j || 0) - (b[1].j || 0))[0];
        await fbRef('clanMembers/' + cid + '/' + nx[0] + '/r').set(2); await fbRef('clans/' + cid + '/own').set(nx[0]);
        if (!silent) clanSys('{nome} è il nuovo capo del clan', {nome:nx[1].n});
      }
      if (!silent) await fbRef('clanChat/' + cid).push({u:FBX.uid, n:me.n || '?', k:'s', x:`${me.n || 'Qualcuno'} è uscito dal clan`, sk:'{nome} è uscito dal clan', sp:{nome:me.n || '?'}, t:fbNow()}).catch(() => {});
      await fbRef('clanMembers/' + cid + '/' + FBX.uid).remove(); await clanCnt(cid, -1).catch(() => {});
    }
    await fbRef('users/' + FBX.uid + '/clan').remove();
  } catch (e) { if (!silent) toast(clanErr(e)); return false; }
  CL.list = null; return true;
}
async function clanKick(u) {
  const m = CL.mem[u]; if (!m || clanRole() <= (m.r || 0)) return;
  try { await fbRef('clanMembers/' + CL.cid + '/' + u).remove(); await clanCnt(CL.cid, -1); clanSys('{nome} è stato cacciato dal clan', {nome:m.n}); } catch (e) { toast(clanErr(e)); }
}
async function clanAccept(u, yes) {
  const r = CL.reqs[u]; if (!r) return;
  try {
    if (yes) {
      const lv = clanLvNow(); if (clanN() >= clanCap(lv)) return toast('Il clan è pieno');
      await fbRef('clanMembers/' + CL.cid + '/' + u).set({n:r.n, r:0, j:fbNow(), s:fbNow(), w:0, wk:weekKey(), wt:0, dn:0});
      await clanCnt(CL.cid, 1); clanSys('{nome} è entrato nel clan 👋', {nome:r.n});
    }
    await fbRef('clanReq/' + CL.cid + '/' + u).remove();
  } catch (e) { toast(clanErr(e)); }
}
async function clanSend(txt) {
  if (!CL.cid) return;
  if (!save.clan.ok) return clanRules(() => clanSend(txt));
  if (CL.banned) return toast('Non puoi più scrivere nella chat: hai violato le regole');
  const me = clanMe(); if ((me.mu || 0) > Date.now()) return toast(`Sei silenziato fino a ${new Date(me.mu).toDateString() === new Date().toDateString() ? 'oggi' : 'domani'} alle ${new Date(me.mu).toLocaleTimeString(LOC(), {hour:'2-digit', minute:'2-digit'})}`);
  const x = clanClean(txt || ''); if (!x.replace(/\*/g, '').trim()) return;
  if (Date.now() - CL.lastSend < 1500) return toast('Piano! Un messaggio alla volta');
  CL.lastSend = Date.now();
  try { await fbRef('clanChat/' + CL.cid).push({u:FBX.uid, n:me.n || FBX.me.name, r:clanRole(), k:'m', x, t:fbNow()}); } catch (e) { toast(clanErr(e)); }
}
function clanCanAsk() { const me = clanMe(); return Date.now() - (me.rq || 0) >= CLAN_REQ_CD; }
async function clanAsk(k) {
  const me = clanMe(), rar = RAR[k] || 0, need = clanAskMax(clanLvNow(), rar);
  if (!clanCanAsk()) return toast('Puoi chiedere frammenti ogni 8 ore');
  try {
    await fbRef('clanMembers/' + CL.cid + '/' + FBX.uid).update({rq:fbNow()});
    await fbRef('clanChat/' + CL.cid).push({u:FBX.uid, n:me.n || FBX.me.name, r:clanRole(), k:'q', q:{k, need, got:0, rar}, t:fbNow()});
    UIS.card(); toast('Richiesta mandata al clan');
  } catch (e) { toast(clanErr(e)); }
}
async function clanDonate(m) {
  const k = m.q.k; if ((save.shards[k] || 0) < 1) return toast(`Non hai frammenti di ${SHORT[k]} da regalare`);
  let ok = false;
  try {
    const r = await fbRef('clanChat/' + CL.cid + '/' + m.id + '/q').transaction(q => { if (!q || (q.got || 0) >= q.need) return; const by = Object.assign({}, q.by || {}); by[FBX.uid] = (by[FBX.uid] || 0) + 1; return Object.assign({}, q, {got:(q.got || 0) + 1, by}); });
    ok = r.committed;
  } catch (e) { return toast(clanErr(e)); }
  if (!ok) return toast('Questa richiesta è già completa');
  const g = (m.q.rar || 0) >= 2 ? 20 : 5;
  save.shards[k] = Math.max(0, (save.shards[k] || 0) - 1); save.gold += g; persist(); UIS.coin(); vibrate(15);
  clanXp(1); fbRef('clanMembers/' + CL.cid + '/' + FBX.uid).update({dn:(clanMe().dn || 0) + 1}).catch(() => {});
  toast(`Grazie! +${g} oro`);
}
async function clanReport(m) {
  try {
    await fbRef(`clanChat/${CL.cid}/${m.id}/rp/${FBX.uid}`).set(true);
    await fbRef('reports').push({cid:CL.cid, cn:(CL.info && CL.info.n) || '', mid:m.id, a:m.u, an:m.n || '', x:m.x || '', by:FBX.uid, t:fbNow()});
    toast('Segnalato. Grazie: lo controlliamo.');
  } catch (e) { toast(clanErr(e)); }
}
function clanBlock(u, n) {
  const i = save.blocked.indexOf(u);
  if (i >= 0) { save.blocked.splice(i, 1); toast(Lf('{nome} sbloccato', {nome:n})); } else { save.blocked.push(u); toast(Lf('{nome} bloccato: non vedrai più i suoi messaggi', {nome:n})); }
  persist(); clanPaint(true);
}
async function clanMute(u) { const m = CL.mem[u]; if (!m) return; try { await fbRef('clanMembers/' + CL.cid + '/' + u).update({mu:Date.now() + CLAN_MUTE}); clanSys('{nome} è stato silenziato per 24 ore', {nome:m.n}); } catch (e) { toast(clanErr(e)); } }
async function clanUnmute(u) { try { await fbRef('clanMembers/' + CL.cid + '/' + u).update({mu:0}); } catch (e) { toast(clanErr(e)); } }
async function clanSetRole(u, r) {
  const m = CL.mem[u]; if (!m || clanRole() < 2) return;
  try {
    if (r === 2) { await fbRef('clanMembers/' + CL.cid + '/' + u + '/r').set(2); await fbRef('clans/' + CL.cid + '/own').set(u); await fbRef('clanMembers/' + CL.cid + '/' + FBX.uid).update({r:1}); clanSys('{nome} è il nuovo capo del clan', {nome:m.n}); }
    else { await fbRef('clanMembers/' + CL.cid + '/' + u).update({r}); clanSys(r ? '{nome} ora è vice' : '{nome} non è più vice', {nome:m.n}); }
  } catch (e) { toast(clanErr(e)); }
}
function clanInvite() {
  const fl = Object.keys(FBX.friends || {}).filter(f => !CL.mem[f]);
  if (!fl.length) return toast('Nessun amico da invitare: aggiungili in Amici');
  fbPick('Invita un amico nel clan', fl.map(f => [f, (FBX.fdata[f] || {}).name || 'Amico']), async f => {
    try { await fbRef('clanInv/' + CL.cid + '/' + f).set(true); await fbSend(f, {type:'clan', cid:CL.cid, cn:CL.info.n}); toast('Invito mandato!'); } catch (e) { toast(clanErr(e)); }
  });
}
function clanClaim(i) {
  const st = clanChestState(); if (i !== st.got || i >= st.reached || !st.mine) return;
  const pr = CLAN_PRIZE[i];
  save.clan.wk = st.wk; save.clan.got = i + 1;
  showGift('Baule del clan', pr.gold || 0, [], pr.egg ? {eggs:{[pr.egg]:1}} : pr.ru ? {ru:pr.ru} : {});   // showGift aggiunge oro, rubini e uova e salva
  clanPaint();
}
async function clanPrune() {                                                    // il capo, una volta al giorno, toglie i messaggi più vecchi di 14 giorni
  if (clanRole() < 2 || Date.now() - CL.pruned < 864e5) return; CL.pruned = Date.now();
  try { const s = await fbRef('clanChat/' + CL.cid).orderByChild('t').endAt(Date.now() - 14 * 864e5).limitToFirst(100).once('value'); const ops = []; s.forEach(c => { ops.push(c.ref ? c.ref.remove() : fbRef('clanChat/' + CL.cid + '/' + c.key).remove()); }); await Promise.allSettled(ops); } catch (e) {}
}

/* ---------- schermata ---------- */
const clanAgo = t => { if (!t) return 'mai'; const d = Date.now() - t; return d < 5 * 60e3 ? 'adesso' : d < 3600e3 ? Math.floor(d / 60e3) + ' min fa' : d < 864e5 ? Math.floor(d / 3600e3) + ' ore fa' : d < 2 * 864e5 ? 'ieri' : Math.floor(d / 864e5) + ' giorni fa'; };
const clanEsc = t => String(t == null ? '' : t).replace(/[&<>"]/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;'}[c]));
function showClan() {
  if (!clanOpen()) { UIS.err && UIS.err(); return toast('Il Clan si apre dopo il boss del mondo 1'); }
  toScene(); $('clan').hidden = false; $('cnGold').textContent = save.gold.toLocaleString(LOC());
  if (!window.DW_FB) { $('cnBody').innerHTML = `<p class="note cnNote">Il Clan funziona nella versione online del gioco.</p>`; return; }
  if (FBX.on && FBX.me && !FBX.me.name) fbAskName(true);
  clanSync(); clanPaint(); if (CL.cid) clanPrune();
}
let clanPaintT = 0;
function clanPaint(chat) {
  clanDot();
  if ($('clan').hidden) return;
  clearTimeout(clanPaintT); clanPaintT = setTimeout(() => clanRender(chat), 40);
}
function clanRender(chatOnly) {
  const box = $('cnBody'); $('cnGold').textContent = save.gold.toLocaleString(LOC());
  if (!FBX.on) { box.innerHTML = `<p class="note cnNote">${FBX.err || 'Mi collego…'}</p>`; return; }
  if (!CL.cid) return clanRenderFind(box);
  if (!CL.info || !CL.mem[FBX.uid]) { box.innerHTML = `<p class="note cnNote">Apro il clan…</p>`; return; }
  if (chatOnly && CL.tab === 'chat' && box.querySelector('.cnChat')) { clanRenderChat(box.querySelector('.cnChat')); clanTabsBadge(); return; }
  const keep = $('cnTxt') && CL.tab === 'chat' ? {v:$('cnTxt').value, f:document.activeElement === $('cnTxt'), sc:box.querySelector('.cnChat') && box.querySelector('.cnChat').scrollTop} : null;   // non perdere quello che stai scrivendo
  const info = CL.info, lv = clanLvNow(), cap = clanCap(lv), x0 = CLAN_XP[lv - 1], x1 = CLAN_XP[lv] || CLAN_XP[lv - 1], pct = lv >= 10 ? 100 : Math.round(((info.xp || 0) - x0) / (x1 - x0) * 100);
  box.innerHTML = `<button class="cnHead" id="cnHead">${clanEmblem(info.e || {f:0, c:0, s:0}, lv, 62)}<span class="tx"><b data-noi18n></b><small>«${clanEsc(CLAN_DESC[info.d || 0])}» · ${clanN()}/${cap} membri · ${CLAN_TYPE[info.t || 0]}</small><span class="cnLvRow"><span class="cnLv">Liv ${lv}</span><span class="cnBar"><i style="width:${pct}%"></i></span></span></span>${clanRole() >= 2 ? '<em class="cnEdit">✏️</em>' : ''}</button>
    <div class="cnTabs" role="tablist">${[['chat', 'Chat'], ['membri', 'Membri'], ['baule', 'Baule'], ['classifica', 'Classifica']].map(([k, t]) => `<button role="tab" data-t="${k}" aria-selected="${CL.tab === k}">${t}<em hidden></em></button>`).join('')}</div>
    <div class="cnPane" id="cnPane"></div>`;
  box.querySelector('#cnHead b').textContent = info.n;
  $('cnHead').onclick = () => { if (clanRole() >= 2) clanEditor(true); };
  box.querySelectorAll('.cnTabs button').forEach(b => b.onclick = () => { CL.tab = b.dataset.t; UIS.tab(); clanRender(); });
  const pane = $('cnPane');
  if (CL.tab === 'chat') { pane.innerHTML = `<div class="cnChat"></div><div class="cnIn"><button class="upBtn alt" id="cnAsk" aria-label="Chiedi frammenti">🧩</button><input id="cnTxt" maxlength="200" placeholder="${CL.banned ? 'Chat bloccata' : 'Scrivi al clan…'}" autocomplete="off"><button class="upBtn" id="cnSend">Invia</button></div>`;
    clanRenderChat(pane.querySelector('.cnChat'));
    const send = () => { const v = $('cnTxt').value; if (!v.trim()) return; clanSend(v); $('cnTxt').value = ''; };
    $('cnSend').onclick = send; $('cnTxt').onkeydown = e => { if (e.key === 'Enter') send(); };
    $('cnTxt').onfocus = () => { if (!save.clan.ok) { $('cnTxt').blur(); clanRules(); } };
    $('cnAsk').onclick = clanAskPick;
    if (keep) { $('cnTxt').value = keep.v; if (keep.f) $('cnTxt').focus(); }
  }
  else if (CL.tab === 'membri') clanRenderMembers(pane);
  else if (CL.tab === 'baule') clanRenderChest(pane);
  else clanRenderBoard(pane);
  clanTabsBadge();
}
function clanTabsBadge() {
  const b = document.querySelector('#cnBody .cnTabs');
  if (!b) return;
  const set = (t, n) => { const e = b.querySelector(`[data-t="${t}"] em`); if (e) { e.hidden = !n; e.textContent = n > 9 ? '9+' : n; } };
  if (CL.tab === 'chat' && CL.chat.length) { const last = CL.chat[CL.chat.length - 1].t || 0; if (last > (save.clan.seen || 0)) { save.clan.seen = last; persist(); } }
  set('chat', CL.tab === 'chat' ? 0 : clanUnread()); set('baule', clanChestState().ready); set('membri', clanRole() >= 1 ? Object.keys(CL.reqs).length : 0);
  clanDot();
}
function clanRenderChat(el) {
  const atEnd = el.scrollHeight - el.scrollTop - el.clientHeight < 60;
  el.innerHTML = '';
  if (!CL.chat.length) el.innerHTML = `<p class="note cnNote">Ancora nessun messaggio. Saluta il clan!</p>`;
  for (const m of CL.chat) {
    if (save.blocked.includes(m.u) && m.u !== FBX.uid) continue;
    const mine = m.u === FBX.uid, t = m.t ? new Date(m.t).toLocaleTimeString(LOC(), {hour:'2-digit', minute:'2-digit'}) : '', role = CL.info && m.u === CL.info.own ? 2 : (CL.mem[m.u] ? Math.min(1, CL.mem[m.u].r || 0) : 0);
    const who = `<span class="who"><span class="nm" data-noi18n></span>${role ? `<span class="cnRole r${role}">${CLAN_ROLE[role]}</span>` : ''}</span>`;
    const d = document.createElement('div');
    if (m.k === 's') { d.className = 'cnSys'; d.dataset.noi18n = ''; d.textContent = m.sk ? Lf(m.sk, m.sp) : tr(m.x); el.appendChild(d); continue; }
    const hid = m.h || Object.keys(m.rp || {}).length >= 3;
    if (m.k === 'q' && m.q && !hid) {
      const q = m.q, done = (q.got || 0) >= q.need, rn = ['Comune', 'Raro', 'Epico'][q.rar || 0];
      d.className = 'cnMsg cnReq' + (mine ? ' me' : '');
      d.innerHTML = `${mine ? '' : '<span class="frAva">🐉</span>'}<div class="cnBub"><canvas width="112" height="104"></canvas><div class="tx">${mine ? '<span class="who">Hai chiesto</span>' : who}<b class="kn"></b> <span class="cnRar r${q.rar || 0}">${rn}</span><span class="cnPbar"><i style="width:${Math.round((q.got || 0) / q.need * 100)}%"></i></span><small>${q.got || 0}/${q.need} frammenti${!mine && !done ? ` · ne regali 1, prendi ${(q.rar || 0) >= 2 ? 20 : 5} oro` : done ? ' · completata ✓' : ''}</small></div>${!mine && !done ? `<button class="upBtn" ${(save.shards[q.k] || 0) < 1 ? 'disabled' : ''}>Dona${(save.shards[q.k] || 0) ? '' : ' (0)'}</button>` : ''}</div>`;
      if (!mine) d.querySelector('.who .nm').textContent = m.n || '?';
      d.querySelector('.kn').textContent = SHORT[q.k] || q.k; drawIcon(d.querySelector('canvas'), q.k);
      const b = d.querySelector('.upBtn'); if (b) b.onclick = e => { e.stopPropagation(); clanDonate(m); };
    } else {
      d.className = 'cnMsg' + (mine ? ' me' : '') + (hid ? ' hid' : '');
      d.innerHTML = `${mine ? '' : '<span class="frAva">🐉</span>'}<div class="cnBub">${mine ? '' : who}<span class="x" data-noi18n></span><time>${t}</time></div>`;
      if (!mine) d.querySelector('.who .nm').textContent = m.n || '?';
      d.querySelector('.x').textContent = hid ? tr(m.h ? 'Messaggio rimosso dai moderatori' : 'Messaggio nascosto: segnalato da 3 giocatori') : m.x;
    }
    if (!mine) d.querySelector('.cnBub').onclick = ev => clanMenu(m, ev);
    el.appendChild(d);
  }
  if (atEnd || !el.dataset.done) { el.scrollTop = el.scrollHeight; el.dataset.done = 1; }
}
function clanMenu(m, ev) {                                                     // tocco su un messaggio: segnala, blocca, silenzia, caccia
  const pop = $('cnPop'), dim = $('cnDim'), my = clanRole(), tg = CL.mem[m.u], tr = CL.info && m.u === CL.info.own ? 2 : tg ? Math.min(1, tg.r || 0) : 0, bl = save.blocked.includes(m.u);
  const it = [];
  if (m.k === 'm') it.push(['🚩 Segnala messaggio', () => clanReport(m)]);
  it.push([clanEsc(Lf(bl ? '🙂 Sblocca {nome}' : '🙈 Blocca {nome}', {nome:m.n})), () => clanBlock(m.u, m.n)]);
  if (tg && my > tr) {
    it.push((tg.mu || 0) > Date.now() ? ['🔊 Togli il silenzio', () => clanUnmute(m.u)] : ['🔇 Silenzia 24 ore', () => clanMute(m.u)]);
    it.push(['🚪 Caccia dal clan', () => clanConfirm(Lf('Cacciare {nome}?', {nome:m.n}), 'Caccia', () => clanKick(m.u)), 'red']);
  }
  pop.innerHTML = `<small data-noi18n>${clanEsc(Lf('Messaggio di {nome}', {nome:m.n}))}</small>` + it.map((x, i) => `<button data-i="${i}" class="${x[2] || ''}">${x[0]}</button>`).join('');
  pop.querySelectorAll('button').forEach(b => b.onclick = () => { clanPopClose(); it[+b.dataset.i][1](); });
  pop.hidden = dim.hidden = false;
  const r = ev.currentTarget.getBoundingClientRect(), app = $('app').getBoundingClientRect();
  pop.style.left = Math.max(12, Math.min(app.width - pop.offsetWidth - 12, r.left - app.left)) + 'px';
  pop.style.top = Math.max(12, Math.min(app.height - pop.offsetHeight - 12, r.bottom - app.top + 6)) + 'px';
  dim.onclick = clanPopClose;
}
function clanPopClose() { $('cnPop').hidden = $('cnDim').hidden = true; }
function clanConfirm(title, yes, fn) { clAsk(title, '<p class="note">Sei sicuro?</p>', yes, 'Annulla', fn); }
function clanRules(after) {
  $('ovClanRules').hidden = false;
  $('cnRulesOk').onclick = () => { save.clan.ok = Date.now(); persist(); fbRef('users/' + FBX.uid + '/rules').set(fbNow()).catch(() => {}); $('ovClanRules').hidden = true; if (after) after(); else setTimeout(() => $('cnTxt') && $('cnTxt').focus(), 50); };
  $('cnRulesNo').onclick = () => { $('ovClanRules').hidden = true; };
}
function clanAskPick() {
  if (!clanCanAsk()) { const left = CLAN_REQ_CD - (Date.now() - (clanMe().rq || 0)); return toast(`Puoi chiedere di nuovo tra ${Math.floor(left / 3600e3)} ore e ${Math.ceil(left % 3600e3 / 60e3)} minuti`); }
  const lv = clanLvNow(), ks = DW.ROSTER.filter(k => (RAR[k] || 0) <= 2 && !(UNLOCK[k] && (UNLOCK[k].noEgg || UNLOCK[k].pass || UNLOCK[k].secret || UNLOCK[k].cr)));
  const box = $('cnPickBox');
  box.innerHTML = `<h2>Chiedi frammenti</h2><p class="note">Comuni e rari: fino a ${clanAskMax(lv, 0)} · Epici: fino a ${clanAskMax(lv, 2)}. Una richiesta ogni 8 ore.</p><div class="fgGrid cnPickGrid"></div><button class="big alt" id="cnPickNo">Annulla</button>`;
  const g = box.querySelector('.cnPickGrid');
  for (const k of ks) { const c = document.createElement('button'); c.className = 'card2' + (isUnlocked(k) ? '' : ' lock'); c.dataset.r = RAR[k] || 0; c.innerHTML = `<canvas width="112" height="104"></canvas><span class="nm">${SHORT[k]}</span><span class="lv">${(save.shards[k] || 0)} fr · max ${clanAskMax(lv, RAR[k] || 0)}</span>`; drawCard(c.querySelector('canvas'), k); c.onclick = () => { $('ovClanPick').hidden = true; clanAsk(k); }; g.appendChild(c); }
  $('cnPickNo').onclick = () => { $('ovClanPick').hidden = true; };
  $('ovClanPick').hidden = false;
}
function clanRenderMembers(pane) {
  const my = clanRole(), own = CL.info.own, list = Object.entries(CL.mem).sort((a, b) => ((b[0] === own) - (a[0] === own)) || (Math.min(1, b[1].r || 0) - Math.min(1, a[1].r || 0)) || ((b[1].wk === weekKey() ? b[1].w : 0) - (a[1].wk === weekKey() ? a[1].w : 0)) || (b[1].wt || 0) - (a[1].wt || 0));
  pane.innerHTML = `<div class="cnList"></div>`; const L = pane.firstChild;
  const reqs = Object.entries(CL.reqs);
  if (my >= 1 && reqs.length) {
    const h = document.createElement('div'); h.className = 'cnSec'; h.textContent = 'Richieste per entrare'; L.appendChild(h);
    for (const [u, r] of reqs) { const row = document.createElement('div'); row.className = 'cnRow'; row.innerHTML = `<span class="frAva">🐉</span><div class="tx"><b data-noi18n></b><small>vuole entrare · ${clanAgo(r.t)}</small></div><button class="upBtn alt">No</button><button class="upBtn">Accetta</button>`; row.querySelector('b').textContent = r.n; const [no, yes] = row.querySelectorAll('.upBtn'); no.onclick = () => clanAccept(u, false); yes.onclick = () => clanAccept(u, true); L.appendChild(row); }
    const h2 = document.createElement('div'); h2.className = 'cnSec'; h2.textContent = 'Membri'; L.appendChild(h2);
  }
  const wk = weekKey();
  for (const [u, m] of list) {
    const r = u === own ? 2 : Math.min(1, m.r || 0), me = u === FBX.uid, mu = (m.mu || 0) > Date.now();
    const row = document.createElement('div'); row.className = 'cnRow' + (me ? ' me' : '');
    row.innerHTML = `<span class="frAva">🐉<i class="frDot${Date.now() - (m.s || 0) < 10 * 60e3 ? ' on' : ''}"></i></span><div class="tx"><b><span class="nm" data-noi18n></span>${r ? ` <span class="cnRole r${r}">${CLAN_ROLE[r]}</span>` : ''}${mu ? ' 🔇' : ''}${save.blocked.includes(u) ? ' 🙈' : ''}</b><small>${me ? 'tu' : clanAgo(m.s)} · ${m.wk === wk ? m.w || 0 : 0} vittorie questa settimana · ${m.dn || 0} frammenti donati</small></div>${!me && (my > r || r < 2) ? '<button class="upBtn alt cnMore">⋯</button>' : ''}`;
    row.querySelector('.nm').textContent = me ? (m.n || 'Tu') : m.n;
    const more = row.querySelector('.cnMore');
    if (more) more.onclick = ev => {
      const it = [];
      if (my >= 2 && r === 0) it.push(['⭐ Nomina vice', () => clanSetRole(u, 1)]);
      if (my >= 2 && r === 1) it.push(['↩️ Togli da vice', () => clanSetRole(u, 0)]);
      if (my >= 2) it.push(['👑 Rendi capo', () => clanConfirm(Lf('Dare il clan a {nome}?', {nome:m.n}), 'Rendi capo', () => clanSetRole(u, 2))]);
      if (my > r) it.push(mu ? ['🔊 Togli il silenzio', () => clanUnmute(u)] : ['🔇 Silenzia 24 ore', () => clanMute(u)]);
      if (my > r) it.push(['🚪 Caccia dal clan', () => clanConfirm(Lf('Cacciare {nome}?', {nome:m.n}), 'Caccia', () => clanKick(u)), 'red']);
      it.push([clanEsc(Lf(save.blocked.includes(u) ? '🙂 Sblocca {nome}' : '🙈 Blocca {nome}', {nome:m.n})), () => clanBlock(u, m.n)]);
      const pop = $('cnPop'), dim = $('cnDim');
      pop.innerHTML = `<small data-noi18n>${clanEsc(m.n)}</small>` + it.map((x, i) => `<button data-i="${i}" class="${x[2] || ''}">${x[0]}</button>`).join('');
      pop.querySelectorAll('button').forEach(b => b.onclick = () => { clanPopClose(); it[+b.dataset.i][1](); });
      pop.hidden = dim.hidden = false; dim.onclick = clanPopClose;
      const rr = ev.currentTarget.getBoundingClientRect(), app = $('app').getBoundingClientRect();
      pop.style.left = Math.max(12, rr.right - app.left - pop.offsetWidth) + 'px'; pop.style.top = Math.max(12, Math.min(app.height - pop.offsetHeight - 12, rr.bottom - app.top + 6)) + 'px';
    };
    L.appendChild(row);
  }
  const act = document.createElement('div'); act.className = 'cnActs';
  act.innerHTML = `${my >= 1 ? '<button class="big alt" id="cnInv">Invita amici</button>' : ''}<button class="big alt cnLeave" id="cnLeave">Esci dal clan</button>`;
  L.appendChild(act);
  if ($('cnInv')) $('cnInv').onclick = clanInvite;
  $('cnLeave').onclick = () => clanConfirm(Object.keys(CL.mem).length <= 1 ? 'Sei l’ultimo: il clan verrà chiuso. Uscire?' : my >= 2 ? 'Uscire? Il clan passa al vice più vecchio.' : 'Uscire dal clan?', 'Esci', async () => { if (await clanLeave()) { toast('Sei uscito dal clan'); } });
}
function clanRenderChest(pane) {
  const st = clanChestState(), info = CL.info, POS = [16, 40, 64, 90];          // tappe a distanza fissa, la barra si riempie a tratti
  const fill = (() => { let prev = 0, x0 = 0; for (let i = 0; i < 4; i++) { const t = st.tiers[i]; if (st.p < t) return x0 + (POS[i] - x0) * (st.p - prev) / (t - prev); prev = t; x0 = POS[i]; } return 100; })();
  const ico = i => CLAN_PRIZE[i].egg ? eggSvg('big', 26) : CLAN_PRIZE[i].ru ? '<span class="ruby" style="width:22px;height:22px"></span>' : '<span class="coin" style="width:22px;height:22px"></span>';
  const lbl = i => CLAN_PRIZE[i].egg ? 'Uovo<br>Grande' : CLAN_PRIZE[i].ru ? CLAN_PRIZE[i].ru + '<br>rubini' : CLAN_PRIZE[i].gold + '<br>oro';
  const days = 7 - ((new Date().getDay() + 6) % 7);
  pane.innerHTML = `<div class="cnList"><div class="cnChest"><h3>Baule della settimana</h3><p class="note">Ogni vittoria di un membro vale 1 punto · si azzera lunedì</p>
    <div class="cnChestImg">${clanChestSvg(info)}</div>
    <div class="cnTrack"><i style="width:${fill}%"></i>${st.tiers.map((t, i) => `<div class="cnMs${st.p >= t ? ' done' : ''}" style="left:${POS[i]}%"><span class="lb">${t}</span><span class="pin">${i < st.got ? '✓' : st.p >= t ? '!' : ''}</span><span class="rw">${ico(i)}${lbl(i)}</span></div>`).join('')}</div>
    <div class="cnMine"><div><b>${st.p}</b>vittorie del clan</div><div><b>${st.mine}</b>vittorie tue</div><div><b>${days}</b>${days === 1 ? 'giorno alla fine' : 'giorni alla fine'}</div></div>
    ${st.ready ? `<button class="big" id="cnClaim">Riscuoti: ${lbl(st.got).replace('<br>', ' ')}</button>` : ''}
    <p class="note">${st.mine ? '' : '<b>Vinci almeno 1 battaglia questa settimana per prendere i premi.</b> '}Le tappe si adattano al clan: con ${clanN()} ${clanN() === 1 ? 'membro' : 'membri'} servono ${st.tiers.join(' · ')} vittorie.</p></div></div>`;
  if ($('cnClaim')) $('cnClaim').onclick = () => clanClaim(st.got);
}
const clanChestSvg = info => `<svg viewBox="0 0 120 92" width="140" height="107"><defs><linearGradient id="cnCh" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a8612c"/><stop offset="1" stop-color="#6a3612"/></linearGradient></defs><ellipse cx="60" cy="86" rx="50" ry="6" fill="rgba(0,0,0,.25)"/><path d="M14 42 H106 V80 C106 84 104 86 100 86 H20 C16 86 14 84 14 80 Z" fill="url(#cnCh)" stroke="#1c1a24" stroke-width="4"/><path d="M14 42 C14 18 30 8 60 8 C90 8 106 18 106 42 Z" fill="#b8702e" stroke="#1c1a24" stroke-width="4"/><path d="M30 12 V86 M90 12 V86" stroke="#ffd35a" stroke-width="7"/><path d="M30 12 V86 M90 12 V86" stroke="#1c1a24" stroke-width="2" opacity=".5"/><g transform="translate(38 26) scale(.44)">${clanEmblem((info && info.e) || {f:0, c:0, s:0}, clanLv(info && info.xp), 100).replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '')}</g></svg>`;
async function clanRenderBoard(pane) {
  pane.innerHTML = `<div class="cnList"><p class="note cnNote">Carico la classifica…</p></div>`;
  if (!CL.board || Date.now() - CL.board.t > 60e3) {
    try { const s = await fbRef('clans').orderByChild('xp').limitToLast(100).once('value'); const a = []; s.forEach(c => { a.push(Object.assign({id:c.key}, c.val())); }); CL.board = {t:Date.now(), a:a.sort((x, y) => (y.xp || 0) - (x.xp || 0))}; } catch (e) { CL.board = null; }
  }
  if (CL.tab !== 'classifica' || !pane.isConnected) return;
  const L = pane.firstChild; L.innerHTML = '';
  if (!CL.board) { L.innerHTML = `<p class="note cnNote">Non riesco a caricare la classifica.</p>`; return; }
  CL.board.a.forEach((c, i) => { const lv = clanLv(c.xp), row = document.createElement('div'); row.className = 'cnRow' + (c.id === CL.cid ? ' me' : ''); row.innerHTML = `<span class="cnRank${i < 3 ? ' g' + (i + 1) : ''}">${i + 1}</span>${clanEmblem(c.e || {f:0, c:0, s:0}, lv, 44)}<div class="tx"><b data-noi18n></b><small>${c.cnt || 0}/${clanCap(lv)} membri · ${c.xp || 0} esperienza</small></div><span class="cnLv">Liv ${lv}</span>`; row.querySelector('b').textContent = c.n; L.appendChild(row); });
}
async function clanRenderFind(box) {
  const pend = save.clan.pend;
  box.innerHTML = `<div class="cnList">
    <div class="cnRow cnIntro"><div class="tx"><b>Unisciti a un clan!</b><small>Chiedi frammenti agli altri, riempite insieme il baule della settimana e scalate la classifica dei clan.</small></div></div>
    ${pend ? '<p class="note cnNote" id="cnPend">Hai chiesto di entrare in un clan: aspetta che il capo accetti. <button class="upBtn alt" id="cnPendNo">Annulla</button></p>' : ''}
    <div class="onJoin frSearch"><input id="cnQ" maxlength="20" placeholder="Cerca un clan per nome" autocomplete="off"><button class="big alt" id="cnGo">Cerca</button></div>
    <button class="big cnNew" id="cnNew">Crea il tuo clan · <span class="coin"></span> ${CLAN_COST}</button>
    <div class="cnSec">${CL.q ? 'Risultati' : 'Clan consigliati'}</div><div id="cnRes"><p class="note cnNote">Carico…</p></div></div>`;
  $('cnQ').value = CL.q;
  $('cnGo').onclick = () => { CL.q = $('cnQ').value.trim().toLowerCase(); CL.list = null; clanRender(); };
  $('cnQ').onkeydown = e => { if (e.key === 'Enter') $('cnGo').click(); };
  $('cnNew').onclick = () => { if (!(FBX.me && FBX.me.name)) return fbAskName(true); clanEditor(false); };
  if ($('cnPendNo')) $('cnPendNo').onclick = async () => { await fbRef('clanReq/' + pend + '/' + FBX.uid).remove().catch(() => {}); save.clan.pend = null; persist(); CL.pend = null; clanOff(); clanRender(); };
  if (!CL.list || CL.list.q !== CL.q || Date.now() - CL.list.t > 60e3) {
    try {
      const q = CL.q ? fbRef('clans').orderByChild('nl').startAt(CL.q).endAt(CL.q + '').limitToFirst(25) : fbRef('clans').orderByChild('xp').limitToLast(60);
      const s = await q.once('value'), a = []; s.forEach(c => { a.push(Object.assign({id:c.key}, c.val())); });
      CL.list = {q:CL.q, t:Date.now(), a:CL.q ? a : a.filter(c => c.t !== 2 && (c.cnt || 0) < clanCap(clanLv(c.xp))).sort((x, y) => (y.xp || 0) - (x.xp || 0)).slice(0, 20)};
    } catch (e) { CL.list = {q:CL.q, t:Date.now(), a:[], err:/permission/i.test((e && (e.code || e.message)) || '') ? 2 : 1}; }
  }
  const res = $('cnRes'); if (!res) return; res.innerHTML = '';
  if (!CL.list.a.length) { res.innerHTML = `<p class="note cnNote">${CL.list.err === 2 ? 'Il Clan non è ancora attivo sul server: vanno pubblicate su Firebase le regole nuove (Passo 1 della guida).' : CL.list.err ? 'Non riesco a caricare i clan.' : CL.q ? 'Nessun clan con questo nome.' : 'Ancora nessun clan: crea il primo!'}</p>`; return; }
  for (const c of CL.list.a) {
    const lv = clanLv(c.xp), full = (c.cnt || 0) >= clanCap(lv), row = document.createElement('div'); row.className = 'cnRow';
    row.innerHTML = `${clanEmblem(c.e || {f:0, c:0, s:0}, lv, 50)}<div class="tx"><b data-noi18n></b><small>Liv ${lv} · ${c.cnt || 0}/${clanCap(lv)} membri · <span class="cnTipo t${c.t || 0}">${CLAN_TYPE[c.t || 0]}</span></small><small class="ds">«${clanEsc(CLAN_DESC[c.d || 0])}»</small></div>${full ? '<small>Pieno</small>' : c.t === 2 ? '<small>Su invito</small>' : `<button class="upBtn" ${pend ? 'disabled' : ''}>${c.t === 1 ? 'Chiedi' : 'Entra'}</button>`}`;
    row.querySelector('b').textContent = c.n;
    const b = row.querySelector('.upBtn'); if (b) b.onclick = async () => { b.disabled = true; await clanJoin(c.id); b.disabled = false; };
    res.appendChild(row);
  }
}
function clanEditor(edit) {                                                    // crea il clan, o il capo cambia stemma, descrizione e chi può entrare
  const info = edit ? CL.info : null, d = CL.ed = edit ? {n:info.n, f:info.e.f, c:info.e.c, s:info.e.s, t:info.t || 0, d:info.d || 0} : (CL.ed && !CL.ed.edit ? CL.ed : {n:'', f:0, c:0, s:0, t:0, d:0});
  d.edit = !!edit;
  const box = $('cnEdBox'), lv = edit ? clanLvNow() : 1;
  const draw = () => {
    box.innerHTML = `<h2>${edit ? 'Il tuo clan' : 'Crea il clan'}</h2><div class="cnEmbBig">${clanEmblem(d, lv, 96)}</div>
      ${edit ? `<div class="nameIn cnNameRo" data-noi18n></div>` : `<input class="nameIn" id="cnName" maxlength="20" placeholder="Nome del clan" autocomplete="off">`}
      <div class="cnOpt"><span>Forma</span><div class="cnPick">${EMB_FORM.map((f, i) => `<button data-k="f" data-v="${i}" class="${d.f === i ? 'on' : ''}" aria-label="${f}">${clanEmblem({f:i, c:7, s:0}, 1, 34).replace('scale(.78)', 'scale(0)')}</button>`).join('')}</div></div>
      <div class="cnOpt"><span>Colore</span><div class="cnPick">${EMB_COL.map((c, i) => `<button data-k="c" data-v="${i}" class="${d.c === i ? 'on' : ''}"><i class="sw" style="background:linear-gradient(${c[1]},${c[0]})"></i></button>`).join('')}</div></div>
      <div class="cnOpt"><span>Simbolo</span><div class="cnPick">${EMB_SYM.map((s, i) => `<button data-k="s" data-v="${i}" class="${d.s === i ? 'on' : ''}" aria-label="${s}">${clanEmblem({f:1, c:d.c, s:i}, 1, 34)}</button>`).join('')}</div></div>
      <div class="cnOpt"><span>Chi può entrare</span><div class="cnSeg">${CLAN_TYPE.map((t, i) => `<button data-k="t" data-v="${i}" class="${d.t === i ? 'on' : ''}">${t}</button>`).join('')}</div></div>
      <div class="cnOpt"><span>Descrizione</span><select class="cnSel" id="cnDesc">${CLAN_DESC.map((t, i) => `<option value="${i}" ${d.d === i ? 'selected' : ''}>«${t}»</option>`).join('')}</select></div>
      <p class="note" id="cnEdErr"></p>
      <button class="big" id="cnEdOk">${edit ? 'Salva' : `Crea · <span class="coin"></span> ${CLAN_COST}`}</button><button class="big alt" id="cnEdNo">Annulla</button>`;
    if (edit) box.querySelector('.cnNameRo').textContent = d.n; else { $('cnName').value = d.n; $('cnName').oninput = e => { d.n = e.target.value; }; }
    box.querySelectorAll('[data-k]').forEach(b => b.onclick = () => { d[b.dataset.k] = +b.dataset.v; UIS.tab(); const y = box.scrollTop; draw(); box.scrollTop = y; });
    $('cnDesc').onchange = e => { d.d = +e.target.value; };
    $('cnEdNo').onclick = () => { $('ovClanEd').hidden = true; };
    $('cnEdOk').onclick = async () => {
      $('cnEdOk').disabled = true;
      let err = null;
      if (edit) { try { await fbRef('clans/' + CL.cid).update({e:{f:d.f, c:d.c, s:d.s}, t:d.t, d:d.d}); } catch (e) { err = clanErr(e); } }
      else err = await clanCreate(d);
      $('cnEdOk').disabled = false;
      if (err) { $('cnEdErr').textContent = err; UIS.err && UIS.err(); return; }
      $('ovClanEd').hidden = true; if (!edit) { CL.ed = null; toast('Clan creato!'); CL.tab = 'chat'; } else toast('Clan aggiornato');
    };
  };
  draw(); $('ovClanEd').hidden = false;
}
