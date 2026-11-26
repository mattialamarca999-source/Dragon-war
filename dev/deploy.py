# Copia il gioco nel repository GitHub aggiungendo quello che serve per installarlo come app.
src = open('/home/claude/dragon-war/dragon-war.html', encoding='utf-8').read()
FBV = '10.12.2'   # Firebase: l'online su GitHub (amici, posta, stanze)
FB = ''.join(f'<script src="https://www.gstatic.com/firebasejs/{FBV}/firebase-{m}-compat.js"></script>\n' for m in ['app', 'auth', 'database']) + \
     '<script>window.DW_FB = {apiKey:"AIzaSyCHD7lbnLNOva0G70F5smdcV8h11kQY-PI", authDomain:"dragon-war-ff637.firebaseapp.com", databaseURL:"https://dragon-war-ff637-default-rtdb.europe-west1.firebasedatabase.app", projectId:"dragon-war-ff637", storageBucket:"dragon-war-ff637.firebasestorage.app", messagingSenderId:"90677831602", appId:"1:90677831602:web:1ecca1bd183989a063e6ab"};</script>\n'
head = ('<link rel="manifest" href="manifest.webmanifest">\n<meta name="theme-color" content="#16121f">\n'
        '<link rel="icon" href="icon-192.png">\n<link rel="apple-touch-icon" href="icon-192.png">\n'
        '<meta name="apple-mobile-web-app-capable" content="yes">\n<meta name="mobile-web-app-capable" content="yes">\n' +
        FB + '<script>if ("serviceWorker" in navigator && location.protocol === "https:") addEventListener("load", () => navigator.serviceWorker.register("sw.js"));</script>\n')
assert src.count('<title>Dragon War</title>') == 1
top = ('<!doctype html>\n<html lang="it">\n<head>\n<meta charset="utf-8">\n'
       '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no">\n')   # su Claude queste righe le aggiunge la piattaforma, qui no
import sys, re, os, hashlib
out = sys.argv[1] if len(sys.argv) > 1 else '/home/claude/dw-repo/index.html'
page = top + src.replace('<title>Dragon War</title>', '<title>Dragon War</title>\n' + head)
# Il codice grande va in un file a parte: così il telefono se lo ricorda già "tradotto" e il gioco si apre molto prima.
d = os.path.dirname(out); os.makedirs(d + '/js', exist_ok=True); js = []
def cut(m):
    attrs, body = m.group(1), m.group(2)
    if 'src=' in attrs or len(body) < 4000: return m.group(0)
    h = hashlib.sha1(body.encode('utf-8')).hexdigest()[:10]; n = len(js) + 1; fn = f'js/g{n}-{h}.js'   # il nome cambia con il contenuto: una pagina vecchia trova sempre il suo codice
    open(d + '/' + fn, 'w', encoding='utf-8').write(body); js.append('./' + fn)
    old = sorted((f for f in os.listdir(d + '/js') if re.fullmatch(rf'g{n}(-[0-9a-f]+)?\.js', f) and f != os.path.basename(fn)), key=lambda f: -os.path.getmtime(d + '/js/' + f))
    for f in old[4:]: os.remove(d + "/js/" + f)                        # si tengono le ultime versioni (per chi ha ancora la pagina vecchia)
    return f'<script{attrs} src="{fn}"></script>'
page = re.sub(r'<script([^>]*)>(.*?)</script>', cut, page, flags=re.S)
open(out, 'w', encoding='utf-8').write(page)
sw = d + '/sw.js'
if os.path.exists(sw):                     # il service worker scarica il codice già all'installazione
    t = open(sw, encoding='utf-8').read()
    t2 = re.sub(r"const JS = \[.*?\];", 'const JS = ' + str(js).replace("'", "'") + ';', t)
    assert t2 != t or 'const JS = ' + str(js) + ';' in t, 'manca const JS in sw.js'
    open(sw, 'w', encoding='utf-8').write(t2)
print('ok · file di codice:', js, '· pagina', len(page), 'caratteri')
