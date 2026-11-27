#!/bin/sh
# rifà il gioco da capo: gioco di partenza + personaggi nuovi + mondi nuovi, poi costruisce i file
set -e
cd "$(dirname "$0")"
cp port_base/game.html game.html
cp port_base/core-before-w16.js core.js     # le regole ripartono pulite: gli script dei mondi le rifanno ogni volta
python3 port_chars.py
python3 port_worlds.py
python3 port_skins.py
python3 port_w16.py
python3 port_w17.py
python3 port_w18.py
python3 port_pass.py
python3 port_play.py
python3 port_opt.py
python3 port_luci.py
# python3 port_capr.py   # Capricci 11-18: pronti, si accendono dopo il bilanciamento
python3 port_fucina.py
python3 build.py
