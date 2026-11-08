# Copia privacy ed elimina-account nel repository GitHub, con Firebase e l'email di contatto.
import re, sys
EMAIL = sys.argv[1] if len(sys.argv) > 1 else ''
FBV = '10.12.2'
FB = ''.join(f'<script src="https://www.gstatic.com/firebasejs/{FBV}/firebase-{m}-compat.js"></script>\n' for m in ['app', 'auth', 'database']) + \
     '<script>window.DW_FB = {apiKey:"AIzaSyCHD7lbnLNOva0G70F5smdcV8h11kQY-PI", authDomain:"dragon-war-ff637.firebaseapp.com", databaseURL:"https://dragon-war-ff637-default-rtdb.europe-west1.firebasedatabase.app", projectId:"dragon-war-ff637", storageBucket:"dragon-war-ff637.firebasestorage.app", messagingSenderId:"90677831602", appId:"1:90677831602:web:1ecca1bd183989a063e6ab"};</script>'
for name in ['privacy.html', 'elimina-account.html', 'moderazione.html']:
    s = open('/home/claude/dragon-war/site/' + name, encoding='utf-8').read().replace('<!--FIREBASE-->', FB)
    if EMAIL: s = s.replace('{{EMAIL}}', EMAIL)
    else: s = re.sub(r'<a href="mailto:\{\{EMAIL\}\}[^"]*">\{\{EMAIL\}\}</a>', '<b>[email in arrivo · coming soon]</b>', s)
    assert '{{EMAIL}}' not in s
    open('/home/claude/dw-repo/' + name, 'w', encoding='utf-8').write(s)
print('ok', EMAIL or '(email non ancora inserita)')
