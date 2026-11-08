# Ricostruisce dragon-war.html e dragon-war-beta.html da game.html + core.js
s=open('game.html').read()
core=open('core.js').read().replace("if (typeof module !== 'undefined') module.exports = DW;\n","")
full=s.replace('/*CORE*/',core).replace('/*CLAN*/',open('clan_emblem.js').read()+open('clan.js').read()).replace('/*I18N*/',open('i18n.js').read().replace('/*I18N_EN*/{}',open('i18n/en.json').read().strip()).replace('/*I18N_ES*/{}',open('i18n/es.json').read().strip()))
open('dragon-war.html','w').write(full)
open('dragon-war-beta.html','w').write(full.replace('const BETA = false;','const BETA = true;',1).replace('<title>Dragon War</title>','<title>Dragon War Beta</title>',1))
# laboratorio personaggi: stessa base, apre direttamente la galleria
open('dragon-war-personaggi.html','w').write(full.replace('const GALLERY = false;','const GALLERY = true;',1).replace('<title>Dragon War</title>','<title>Dragon War Personaggi</title>',1))
