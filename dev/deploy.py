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
import sys
open(sys.argv[1] if len(sys.argv) > 1 else '/home/claude/dw-repo/index.html', 'w', encoding='utf-8').write(top + src.replace('<title>Dragon War</title>', '<title>Dragon War</title>\n' + head))
print('ok')
