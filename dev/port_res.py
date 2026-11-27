# Risoluzione automatica (27 nov 2026): se i fotogrammi rallentano, il gioco disegna con meno pixel (sfondi e personaggi restano nitidi, già pronti); se torna fluido, risale. Si può rilanciare.
def patch(fn, reps):
    s = open(fn).read()
    for a, b, mark in reps:
        if mark in s: continue
        assert s.count(a) == 1, (fn, a[:90], s.count(a))
        s = s.replace(a, b)
    open(fn, 'w').write(s)
patch('game.html', [
 ("let W = 0, H = 0, k = .6, dpr = 1, groundY = 0, CS = 1;",
  "let W = 0, H = 0, k = .6, dpr = 1, groundY = 0, CS = 1;\n"
  "let DPR0 = 1, RES = (() => { try { const v = +localStorage.getItem('dw_res'); return v >= .6 && v <= 1 ? v : 1; } catch (e) { return 1; } })(), RES_GOOD = 0;   // risoluzione: il telefono se la ricorda\n"
  "const RES_FT = [];\n"
  "function resTick(rdt) {                                                    // fotogrammi lenti → meno pixel; di nuovo fluido per un po' → più pixel\n"
  "  if (document.hidden || paused || GALLERY) { RES_FT.length = 0; return; }\n"
  "  RES_FT.push(rdt); if (RES_FT.length < 40) return;\n"
  "  const a = RES_FT.sort((x, y) => x - y), med = a[20], p80 = a[32]; RES_FT.length = 0;\n"
  "  if (p80 > 1 / 45 && RES > .6) { RES = Math.round((RES - .1) * 10) / 10; RES_GOOD = 0; resApply(); }\n"
  "  else if (med < 1 / 57 && p80 < 1 / 50 && RES < 1) { if (++RES_GOOD >= 4) { RES = Math.round((RES + .1) * 10) / 10; RES_GOOD = 0; resApply(); } }\n"
  "  else RES_GOOD = 0;\n"
  "}\n"
  "function resApply() { try { localStorage.setItem('dw_res', String(RES)); } catch (e) {} if (NG.setRes) NG.setRes(RES); resize(); }", 'function resTick(rdt)'),
 ("  dpr = Math.min(2, window.devicePixelRatio || 1);", "  DPR0 = Math.min(2, window.devicePixelRatio || 1); dpr = Math.max(.75, DPR0 * RES); if (NG.setRes) NG.setRes(dpr / DPR0);", 'dpr = Math.max(.75, DPR0 * RES)'),
 ("b:(H - groundY) / k + 2, dy:DY, px:k * dpr,", "b:(H - groundY) / k + 2, dy:DY, px:k * DPR0,", 'dy:DY, px:k * DPR0,'),
 ("dy:dpx / k2, px:k2 * dpr,", "dy:dpx / k2, px:k2 * DPR0,", 'px:k2 * DPR0,'),
 ("time += rdt; lqTick(rdt);", "time += rdt; lqTick(rdt); resTick(rdt);", 'resTick(rdt);'),
])
print('ok')
