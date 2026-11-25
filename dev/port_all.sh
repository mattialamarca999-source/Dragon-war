#!/bin/sh
# rifà il gioco da capo: gioco di partenza + personaggi nuovi + mondi nuovi, poi costruisce i file
set -e
cd "$(dirname "$0")"
cp port_base/game.html game.html
python3 port_chars.py
python3 port_worlds.py
python3 port_skins.py
python3 port_w16.py
python3 port_w17.py
python3 port_pass.py
python3 port_play.py
python3 build.py
