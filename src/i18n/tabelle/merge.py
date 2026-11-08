import json, glob, re
en, es = {}, {}
bad = 0
for f in sorted(glob.glob('t*.tsv')):
    for n, line in enumerate(open(f, encoding='utf-8')):
        line = line.rstrip('\n')
        if not line.strip(): continue
        p = line.split('\t')
        if len(p) != 3: print('riga rotta', f, n + 1, p[:1]); bad += 1; continue
        k, e, s = p
        # i segnaposto devono essere gli stessi nelle tre lingue
        tk = sorted(re.findall(r'\{[#nq]\d+\}|\{[a-z]+\}', k)); 
        for lang, v in (('en', e), ('es', s)):
            if sorted(re.findall(r'\{[#nq]\d+\}|\{[a-z]+\}', v)) != tk: print('segnaposto diversi', f, n + 1, lang, k[:50]); bad += 1
        en[k] = e; es[k] = s
json.dump(en, open('/home/claude/dragon-war/i18n/en.json', 'w'), ensure_ascii=False, separators=(',', ':'))
json.dump(es, open('/home/claude/dragon-war/i18n/es.json', 'w'), ensure_ascii=False, separators=(',', ':'))
print('voci', len(en), 'problemi', bad)
