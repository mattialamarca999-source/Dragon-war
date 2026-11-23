# copia di prova del gioco con i cronometri: tempo di render, personaggi, sfondo
import sys
src, out = sys.argv[1], sys.argv[2]
h = open(src).read()
for name in ['render', 'drawUnits', 'drawWorldBack']:
    a = f'function {name}(dt) {{' if name != 'drawWorldBack' else 'function drawWorldBack() {'
    assert h.count(a) == 1, name
    h = h.replace(a, a.replace(name, name + '0'))
add = '''
window.__T = {r:0, u:0, b:0, n:0};
function render(dt) { window.__S = s; window.__DW = DW; const t0 = performance.now(); render0(dt); __T.r += performance.now() - t0; __T.n++; }
function drawUnits(dt) { const t0 = performance.now(); drawUnits0(dt); __T.u += performance.now() - t0; }
function drawWorldBack() { const t0 = performance.now(); drawWorldBack0(); __T.b += performance.now() - t0; }
'''
i = h.index('function render0(dt) {')
h = h[:i] + add + h[i:]
open(out, 'w').write(h)
print('ok')
