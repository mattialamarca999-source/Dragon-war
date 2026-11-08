# Dragon War · codice sorgente

Il gioco pubblicato è `../index.html`, generato da questi file. **Non modificare `index.html` a mano**: si cambiano i file qui e si rigenera.

## Come si lavora (per una chat nuova)
1. Copia questa cartella in `/home/claude/dragon-war/` (gli script usano quel percorso).
2. Modifica `game.html` (schermate, disegni, menu), `core.js` (regole della battaglia, personaggi, mondi, difficoltà), `clan.js`, `i18n.js`.
3. `python3 build.py` → crea `dragon-war.html` (il gioco completo, un file solo).
4. `python3 deploy.py` → scrive `../index.html` con Firebase e l'installazione come app.
5. In `../sw.js` alza il numero di `CACHE` (es. `dragon-war-v19` → `v20`), così i telefoni scaricano la versione nuova.
6. Pubblica anche sull'artifact Claude: https://claude.ai/artifact/BbxAGSTFHf9StzQtPEb7mN (file `dragon-war.html`).

## Regole fisse del progetto
- Italiano; domande a risposta multipla da cliccare; cambiare solo quello che viene chiesto.
- Mostrare anteprime prima di pubblicare e aspettare l'OK.
- Niente versione Beta pubblicata.
- **I progressi dei giocatori vanno sempre salvati**: prima di ogni pubblicazione si lancia `strumenti/savetest.js` (un vecchio salvataggio deve caricarsi intero, uno rovinato si recupera dalla copia `_bak`).
- Ogni consegna finisce con «Da studiare» e «Prompt utile».

## Traduzioni (inglese e spagnolo)
- Le chiavi sono il testo italiano. Le tabelle sono in `i18n/tabelle/t*.tsv` (italiano, inglese, spagnolo separati da TAB). Segnaposto: `{#1}` numeri, `{n1}` nomi, `{q1}` testo tra virgolette.
- Per aggiungere frasi nuove: si aggiunge un file `tNN.tsv` e si lancia `python3 merge.py`, che riscrive `i18n/en.json` e `i18n/es.json`.

## Strumenti
- `strumenti/sim4c.js` e `strumenti/simall.js`: simulano le battaglie della storia per controllare la difficoltà (`node simall.js 7 7 10` = mondo 8, tutti i castelli, 10 partite).
- `strumenti/sim6.js`: simula duello, alternativo e insieme.
- `strumenti/savetest.js`: test dei salvataggi (Playwright).

## Cose ancora da fare
Vedi `TODO-dopo-clan.md`.
