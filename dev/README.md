# Dragon War: file di lavoro

Questa cartella serve per lavorare sul gioco (anche alle sessioni automatiche di Claude). Il gioco pubblicato è `index.html` nella cartella principale.

## Come si mette in piedi

```sh
mkdir -p /home/claude/dragon-war && cp -r dev/. /home/claude/dragon-war/   # i file di lavoro
# il repository va clonato in /home/claude/dw-repo (deploy.py scrive lì)
cd /home/claude/dragon-war && ./port_all.sh                               # ricostruisce game.html e dragon-war.html
```

Gli script usano percorsi fissi (`/home/claude/dragon-war`, `/home/claude/dw-repo`) e Playwright con Chrome in `/usr/bin/google-chrome`: se cambiano, vanno aggiornati.

## Come è fatto

- `port_base/game.html`: il gioco di partenza (grafica vecchia). Non si tocca a mano.
- `proto/dragon-war-grafica.html`: il **prototipo della grafica**. Tutti i disegni nuovi (personaggi, skin, mondi, ostacoli, drago) nascono qui. I file `proto/*.js` sono i pezzi già inseriti dentro il prototipo (servono da riferimento).
- `port_all.sh` rifà il gioco da capo, in quest'ordine:
  - `port_chars.py`: personaggi nuovi + `nw_core.js` (mondi), `nw_dragon.js` (drago), `nw_sprites.js` (immagini pronte, per la fluidità);
  - `port_worlds.py`: sfondi, tana e castello in battaglia, nel menu e nella storia;
  - `port_skins.py`: le skin;
  - `port_w16.py`: il Mondo 16;
  - `port_w18.py`: il Mondo 18 (Isola degli Oni). Novità riusabili: `mods` nel mondo (meccaniche per castello: `tide` marea, `pearls` Perle di Ryūjin), `fury` (più è ferito più è forte), `call` (il boss chiama aiuto a metà vita), `air` (vola sopra l'acqua ma si può colpire). In `game.html` la lista `COMING` dice quali mondi mostrare come «Coming soon»;
  - `port_w17.py`: il Mondo 17 (Giungla di Mowgli). Ha due cose nuove che si possono usare nei mondi futuri: più miniboss nello stesso mondo (`semis:{3:'...', 7:'...'}`, il numero è il castello contato da 0) e castelli che si giocano solo di notte (`nights:[2, 6, 10]`, sulla mappa hanno la luna);
  - `port_pass.py`: il Pass a stagioni mensili;
  - per bilanciare un cattivo nuovo: `tools/simoni.js` (battaglie simulate, confronto coi cattivi forti);
  - `port_play.py`: preparazione al Play Store: invito «Diventa tester» nel menu (acceso con `TESTER_ON`, solo telefoni Android nel browser) e pulsanti del menu che stanno sempre nello schermo. La pagina dei tester è in `dev/play/tester.html` (i link vanno in `LINKS`, poi si copia nella radice del sito);
  - `build.py`: costruisce `dragon-war.html`.
- `port_all.sh` riparte ogni volta da `port_base/core-before-w16.js` (regole pulite) e gli script dei mondi le rifanno: così non si sporcano col tempo.
- `core.js` (regole e dati di gioco) e `i18n/*.json` (inglese e spagnolo) vengono modificati direttamente dagli script, che controllano se una modifica c'è già.

## Regole del progetto (di Mattia)

- Si parla e si scrive sempre in **italiano**. Le domande con opzioni vanno fatte a **risposta multipla da cliccare**.
- Passo a passo: **mostrare prima i disegni** (fogli con le pose, foto delle battaglie) e aspettare l'OK. Cambiare solo quello che viene chiesto.
- **I progressi dei giocatori vanno sempre salvati**: prima di ogni pubblicazione si esegue `tools/savetest.js` (deve dire "nessun errore").
- Niente versione Beta pubblicata: solo il gioco completo.
- Ogni pubblicazione:
  - si pubblica sia l'artifact su Claude (Dragon War, https://claude.ai/artifact/BbxAGSTFHf9StzQtPEb7mN) sia GitHub;
  - nella domanda di conferma ci deve essere l'opzione «Sì, pubblica (anche GitHub)»;
  - su GitHub: `python3 deploy.py`, alzare `CACHE` in `sw.js`, copiare `game.html` e `core.js` in `src/` (e i file aggiornati in `dev/`), poi commit e push.
- Ogni consegna finisce con «Da studiare» (cosa studiare legato al lavoro fatto) e «Prompt utile».
- **Un cattivo nuovo per ogni stagione del Pass e uno per ogni mondo nuovo.** Prima di proporre un cattivo controllare l'elenco di quelli che ci sono già (`DW.ROSTER` in `core.js`): niente doppioni. I nomi vengono da fiabe e leggende vere, senza personaggi protetti da diritti d'autore.

## Pass del mese (attività automatica)

Le stagioni sono:
- la Stagione 1, fino al 7 dicembre 2026;
- la Stagione 2, dal 7 al 31 dicembre 2026;
- da gennaio 2027, una stagione per ogni mese.

I premi speciali del Pass d'oro stanno in `PASS_SEASONS` (dentro `port_pass.py`, nella stringa `SEASONS`):
- `char`: il cattivo esclusivo, al livello 30;
- `l15` e `l25`: le skin dei livelli 15 e 25.

Una stagione senza voce dà uova e rubini.

Per preparare la stagione nuova:
1. **Proposta** (una domanda a risposta multipla):
   - tema del mese;
   - 3-4 idee di cattivo nuovo (non già presenti), da cui Mattia ne sceglie 1;
   - 3-4 idee di skin, da cui ne sceglie 2.
2. **Disegni nel prototipo**:
   - il cattivo come `function xxxD(o)` più `DEF`, foglio con `proto/sheet.js`;
   - le skin in `SKINS`, foglio con `proto/skinsheet.js`.

   Si mostrano i fogli e si aspetta l'OK.
3. **Nel gioco**:
   - aggiungere la stagione a `PASS_SEASONS`;
   - aggiungere il cattivo (`core.js`: `U`; `game.html`: `UNLOCK` con `pass:1`, nomi, frasi, disegno) e le skin (`LOOKS` con `from:'pass'`);
   - aggiungere le traduzioni.
4. **Prove**:
   - `tools/passtest.js` (date delle stagioni);
   - una battaglia con il cattivo nuovo;
   - `tools/savetest.js`.

   Poi foto a Mattia e domanda di conferma con «Sì, pubblica (anche GitHub)».
