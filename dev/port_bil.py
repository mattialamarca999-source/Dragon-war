# Bilanciamento per mondo (27 nov 2026): correzioni misurate col backtest (stesso giocatore su tutti i castelli). Si può rilanciare.
def patch(fn, reps):
    s = open(fn).read()
    for a, b, mark in reps:
        if mark in s: continue
        assert s.count(a) == 1, (fn, a[:90], s.count(a))
        s = s.replace(a, b)
    open(fn, 'w').write(s)
TUNE = "{15:{iv:1.3, e:.88}}"   # mondo 16 (Regno delle Nuvole): buoni ogni 30% meno spesso e 12% meno forti
patch('core.js', [
 ("    return (cache[key] = lv);\n  }",
  "    const TU = WTUNE[w];                                                    // correzione del mondo, misurata col backtest\n"
  "    if (TU) { lv.eMul *= TU.e || 1; if (TU.iv) lv.waves = lv.waves.map(x => [x[0], x[1], last || isSemi ? x[2] : x[2] * TU.iv]); }\n"
  "    return (cache[key] = lv);\n  }", 'const TU = WTUNE[w];'),
 ("  const cache = {};\n  function levelOf(w, c) {",
  "  const cache = {};\n  const WTUNE = Object.assign(" + TUNE + ", typeof process !== 'undefined' && process.env && process.env.DW_TUNE ? JSON.parse(process.env.DW_TUNE) : {});   // correzioni per mondo (indice da 0)\n  function levelOf(w, c) {", 'const WTUNE = '),
])
print('ok')
