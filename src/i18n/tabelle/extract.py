# estrae i testi in italiano dal codice: stringhe semplici, modelli con ${...}, testi dell'HTML
import re, json, sys
src = {f: open('/home/claude/dragon-war/' + f).read() for f in ['game.html', 'clan.js', 'core.js']}
code_like = re.compile(r'^(#|\.|[a-z]+[A-Z]\w*$|[\w-]+\.(png|mp3|ogg|svg|js|html|json)|https?:|rgba?\(|[\d\s.,%-]+$|[a-z_]+$|[a-z][\w-]*(\s+[a-z][\w-]*)*$)')
words = re.compile(r"[A-Za-zÀ-ÿ’']{2,}")
def ok(t):
    t = t.strip()
    if len(t) < 2 or not re.search(r'[A-Za-zÀ-ÿ]', t): return False
    if re.search(r'[{};]|=>|\bfunction\b|\bconst\b|\breturn\b|px\b|^\s*<|class=|style=|\$\(|\bvar\(|#[0-9a-fA-F]{3,6}\b', t): return False
    if code_like.match(t) and not re.search(r'[A-ZÀ-Ý]', t[:1]) and ' ' not in t: return False
    if re.fullmatch(r'[a-z0-9_]+', t): return False          # chiavi e id
    if re.fullmatch(r'[a-z]+(\s[a-z]+)+', t) and len(t) < 18 and not re.search(r'[àèéìòù]', t): return 'maybe'
    return True
out = {}
for f, s in src.items():
    script = s
    if f == 'game.html':
        # testi dell'HTML fuori dagli script
        html = re.sub(r'<script>[\s\S]*?</script>', '', s); html = re.sub(r'<style>[\s\S]*?</style>', '', html)
        for m in re.finditer(r'>([^<>]+)<', html):
            t = ' '.join(m.group(1).split())
            if ok(t) is True: out.setdefault(t, f + ':html')
        for m in re.finditer(r'(placeholder|aria-label|title)="([^"]+)"', html):
            if ok(m.group(2)) is True: out.setdefault(m.group(2), f + ':attr')
    for m in re.finditer(r"'((?:[^'\\\n]|\\.)*)'|\"((?:[^\"\\\n]|\\.)*)\"|`((?:[^`\\]|\\.)*)`", script):
        t = m.group(1) or m.group(2) or m.group(3)
        if t is None: continue
        if m.group(3) is not None and '${' in t:
            # modello: tolgo i pezzi di HTML e tengo il testo con i segnaposto
            plain = re.sub(r'<[^>]+>', '\n', t)
            for part in plain.split('\n'):
                p = ' '.join(part.split())
                if ok(re.sub(r'\$\{[^}]*\}', 'X', p)) is True and words.search(re.sub(r'\$\{[^}]*\}', '', p)): out.setdefault(p, f + ':tpl')
            continue
        if '<' in t:
            for part in re.split(r'<[^>]+>', t):
                p = ' '.join(part.split())
                if ok(p) is True: out.setdefault(p, f + ':frag')
            continue
        if ok(t) is True: out.setdefault(t, f + ':str')
json.dump(out, open('static.json', 'w'), ensure_ascii=False, indent=0)
from collections import Counter
print(len(out), Counter(v.split(':')[1] for v in out.values()))
