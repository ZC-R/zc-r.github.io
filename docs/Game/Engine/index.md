---
sidebar_position: 0
---

# Game Engine

Engine-scoped rows from `EUDDB.csv` outside replay-header internals.

- Source rows: 25
- CSV tag: `Game`, `Engine`

## Included Offsets

| Address | Name | Size | Length | SCR |
| --- | --- | ---: | ---: | --- |
| 0050C000 | cInit Constructor Function Table | 4 | 310 |  |
| 005193A0 | Unit Infomation | 12 | 228 | See Description |
| 0059CCA8 | Unitnode Table | 336 | 1700 | Backed By Code |
| 0059CDE0 | Emp Shockwave Missiles (???) | 4 | 1 |  |
| 006283F0 | usedUnitCount | 4 | 1 | Read Only |
| 006283F8 | Last Unit Pointer | 4 | 1 |  |
| 006283F8 | Player Last Unit Pointers | 4 | 12 | Backed By Code |
| 00628428 | LastHiddenUnitPointer | 4 | 1 | Backed By Code |
| 0062842C | unknownPointer? | 4 | 1 | Backed By Code |
| 00628430 | First Unit Pointer | 4 | 1 | Backed By Code |
| 00628434 | LastScannerSweepPointer | 4 | 1 | Backed By Code |
| 00628438 | First Empty Unit | 4 | 1 | Backed By Code |
| 0062843C | LastEmptyUnit | 4 | 1 | Backed By Code |
| 0064DEBC | bulletCount | 4 | 1 | Read Only |
| 0068C104 | AIScript pointer | 4 | 1 | Backed By Code |
| 0068C108 | BWScript pointer | 4 | 1 | Backed By Code |
| 0068C448 | Sfxdata.dat - minVolume | 1 | 1144 |  |
| 0068C8C0 | Sfxdata.dat - Flags | 1 | 1144 |  |
| 0068CD38 | Sfxdata.dat - lengthAdjust | 2 | 1144 |  |
| 0068D628 | Sfxdata.dat - Priority | 1 | 1144 |  |
| 0068DAA0 | Sfxdata.dat - Sound file | 4 | 1144 |  |
| 006D0C70 | Tile Function Pointers | 4 | 4 | Unsupported |
| 006D0F48 | ?占쏀뿕 | 25 | 1 | Read Only |
| 006D1200 | iscript.bin pointer | 4 | 1 | Backed By Code |
| 006D1238 | stat_txt.tbl pointer | 4 | 1 | Backed By Code |
