import glob
fix = {}
for f in sorted(glob.glob('rev/*.tsv')):
    for l in open(f, encoding='utf-8'):
        l = l.rstrip('\n')
        if not l.strip(): continue
        p = l.split('\t'); assert len(p) == 3, l
        fix[p[0]] = p[1:]
used = set()
for f in sorted(glob.glob('t*.tsv')):
    out = []
    for l in open(f, encoding='utf-8'):
        p = l.rstrip('\n').split('\t')
        if len(p) == 3 and p[0] in fix:
            e, s = fix[p[0]]
            if e: p[1] = e
            if s: p[2] = s
            used.add(p[0])
        out.append('\t'.join(p))
    open(f, 'w', encoding='utf-8').write('\n'.join(out).rstrip('\n') + '\n')
print('applicate', len(used), 'di', len(fix)); print('non trovate:', [k for k in fix if k not in used])
