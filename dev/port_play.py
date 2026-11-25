# Play Store: invito «Diventa tester» nel menu del gioco web. Si vede solo sui telefoni Android, nel browser (non nell'app), e si chiude con la ×.
# Non tocca il salvataggio: il «non mostrare più» sta in una chiave a parte. Si può rilanciare.
import json
def patch(fn, reps):
    s = open(fn).read()
    for a, b, mark in reps:
        if mark in s: continue
        assert s.count(a) == 1, (fn, a[:90], s.count(a))
        s = s.replace(a, b)
    open(fn, 'w').write(s)

TESTER_ON = 'false'  # 'true' quando ci sono i link dei tester; di nuovo 'false' quando il gioco è uscito sul Play Store

patch('game.html', [
 (".mGrid.n9{grid-template-columns:repeat(3,1fr)}.mGrid.n10{grid-template-columns:repeat(5,1fr)}",           # pulsanti del menu: colonne uguali che non escono dallo schermo, scritte che si adattano ai telefoni piccoli
  ".mGrid.n9{grid-template-columns:repeat(3,minmax(0,1fr))}.mGrid.n10{grid-template-columns:repeat(5,minmax(0,1fr))}.mGrid .mb{min-width:0;font-size:clamp(11px,3.4vw,15px)}", 'repeat(5,minmax(0,1fr))'),
 (".storyBtn{", ".testerBtn{display:flex;align-items:center;gap:8px;margin:8px auto 0;width:max-content;max-width:92%;font-family:var(--body);font-weight:900;font-size:13px;color:#fff;background:linear-gradient(#3ab86a,#1f7a44);border:2px solid #1c1a24;border-radius:999px;padding:5px 6px 5px 12px;box-shadow:0 3px 0 #000;text-decoration:none}\n"
  ".testerBtn i{font-style:normal;display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:rgba(0,0,0,.25)}\n.storyBtn{", '.testerBtn{'),
 ('        <button class="storyBtn" id="storyBtn">Leggi la storia</button>\n',
  '        <button class="storyBtn" id="storyBtn">Leggi la storia</button>\n'
  '        <a class="testerBtn" id="testerBtn" href="tester.html" target="_blank" rel="noopener" hidden><span>📱 Hai Android? Diventa tester</span><i id="testerX" aria-label="Chiudi">×</i></a>\n', 'id="testerBtn"'),
 ("$('storyBtn').onclick = () => startStory();",
  "$('storyBtn').onclick = () => startStory();\n"
  "{ // invito per i tester del Play Store: solo telefoni Android, solo nel browser (nell'app no), finché non lo chiudi\n"
  "  const ls = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };\n"
  "  const app = matchMedia('(display-mode: standalone)').matches || matchMedia('(display-mode: fullscreen)').matches || document.referrer.startsWith('android-app://');\n"
  "  $('testerBtn').hidden = !(" + TESTER_ON + " && /Android/i.test(navigator.userAgent) && !app && !ls('dw_tester_no'));\n"
  "  $('testerX').onclick = e => { e.preventDefault(); e.stopPropagation(); try { localStorage.setItem('dw_tester_no', '1'); } catch (er) {} $('testerBtn').hidden = true; };\n"
  "}", 'dw_tester_no'),
])

TR = {'📱 Hai Android? Diventa tester': ('📱 On Android? Become a tester', '📱 ¿Tienes Android? Hazte tester')}
for i, l in enumerate(['en', 'es']):
    d = json.load(open(f'i18n/{l}.json'))
    for k, v in TR.items(): d[k] = v[i]
    open(f'i18n/{l}.json', 'w').write(json.dumps(d, ensure_ascii=False, separators=(',', ':')))
print('ok')
