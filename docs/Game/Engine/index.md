---
sidebar_position: 0
---

# Game Engine

Engine-scoped rows from `EUDDB.csv`, including replay-header internals previously grouped under game events.

- Source rows: 71
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
| 00628438 | First Empty Unit | 4 | 1 | Backed By Code |
| 0062843C | LastEmptyUnit | 4 | 1 | Backed By Code |
| 00628434 | LastScannerSweepPointer | 4 | 1 | Backed By Code |
| 0064DEBC | bulletCount | 4 | 1 | Read Only |
| 0068C104 | AIScript pointer | 4 | 1 | Backed By Code |
| 0068C108 | BWScript pointer | 4 | 1 | Backed By Code |
| 0068C448 | Sfxdata.dat - minVolume | 1 | 1144 |  |
| 0068C8C0 | Sfxdata.dat - Flags | 1 | 1144 |  |
| 0068CD38 | Sfxdata.dat - lengthAdjust | 2 | 1144 |  |
| 0068D628 | Sfxdata.dat - Priority | 1 | 1144 |  |
| 0068DAA0 | Sfxdata.dat - Sound file | 4 | 1144 |  |
| 006D0C70 | Tile Function Pointers | 4 | 4 | Unsupported |
| 006D0F30 | Replay Header | 633 | 1 | Read Only |
| 006D0F30 | Replay Header - Is Broodwar | 1 | 1 | Read Only |
| 006D0F31 | Replay Header - Frame Count | 4 | 1 | Read Only |
| 006D0F35 | Replay Header - Campaign ID | 2 | 1 | Read Only |
| 006D0F37 | Replay Header - Command ID | 1 | 1 | Read Only |
| 006D0F38 | Replay Header - Rand Seed | 4 | 1 | Read Only |
| 006D0F3C | Replay Header - Player Bytes | 1 | 8 | Read Only |
| 006D0F44 | Replay Header - Unknown_0 | 4 | 1 | Read Only |
| 006D0F48 | ?�험 | 25 | 1 | Read Only |
| 006D0F60 | Replay Header - Game flags | 4 | 1 | Read Only |
| 006D0F64 | Replay Header - MapSize | 2 | 2 | Read Only |
| 006D0F68 | Replay Header - Active Player Count | 1 | 1 | Read Only |
| 006D0F69 | Replay Header - Available Slots | 1 | 1 | Read Only |
| 006D0F6A | Replay Header - Game Speed | 1 | 1 | Read Only |
| 006D0F6B | Replay Header - Game State | 1 | 1 | Read Only |
| 006D0F6C | Replay Header - Game Type | 1 | 1 | Read Only |
| 006D0F6D | Replay Header - Unknown_1 | 1 | 1 | Read Only |
| 006D0F6E | Replay Header - Game Subtype | 2 | 1 | Read Only |
| 006D0F70 | Replay Header - Seed (Unused) | 4 | 1 | Read Only |
| 006D0F74 | Replay Header - Tileset | 2 | 1 | Read Only |
| 006D0F76 | Replay Header - Autosaved | 1 | 1 | Read Only |
| 006D0F77 | Replay Header- Computer Player Count | 1 | 1 | Read Only |
| 006D0F78 | Replay Header - Game Name | 1 | 25 | Read Only |
| 006D0F91 | Replay Header - Map Name | 1 | 24 | Read Only |
| 006D0FB1 | Replay Header - Game Type | 1 | 1 | Read Only |
| 006D0FB2 | Replay Header - Unknown | 1 | 1 | Read Only |
| 006D0FB3 | Replay Header - Subtype | 2 | 1 | Read Only |
| 006D0FB5 | Replay Header - Subtype display | 2 | 1 | Read Only |
| 006D0FB7 | Replay Header - Subtype Label | 2 | 1 | Read Only |
| 006D0FB9 | Replay Header - Victory Condition | 1 | 1 | Read Only |
| 006D0FBA | Replay Header - Resource Type | 1 | 1 | Read Only |
| 006D0FBB | Replay Header - Use Standard Units | 1 | 1 | Read Only |
| 006D0FBC | Replay Header - Fog of War (Unused) | 1 | 1 | Read Only |
| 006D0FBD | Replay Header - Starting Units | 1 | 1 | Read Only |
| 006D0FBE | Replay Header - Use Fixed Positions | 1 | 1 | Read Only |
| 006D0FBF | Replay Header - Usage Restriction Flags | 1 | 1 | Read Only |
| 006D0FC0 | Replay Header - Allies Allowed | 1 | 1 | Read Only |
| 006D0FC1 | Replay Header - Teams | 1 | 1 | Read Only |
| 006D0FC2 | Replay Header - Cheats | 1 | 1 | Read Only |
| 006D0FC3 | Replay Header - Tournament Mode | 1 | 1 | Read Only |
| 006D0FC4 | Replay Header - Victory Condition Value | 4 | 1 | Read Only |
| 006D0FC8 | Replay Header - Resources Value | 4 | 1 | Read Only |
| 006D0FCC | Replay Header - Unused value | 4 | 1 | Read Only |
| 006D0FD0 | Replay Header - Extra | 1 | 1 | Read Only |
| 006D0FD1 | Replay Header - Player Entries | 36 | 12 | Read Only |
| 006D1181 | Replay Header - Player Colors | 4 | 8 | Read Only |
| 006D11A1 | Replay Header - Player Force Data | 1 | 8 | Read Only |
| 006D1200 | iscript.bin pointer | 4 | 1 | Backed By Code |
| 006D1238 | stat_txt.tbl pointer | 4 | 1 | Backed By Code |
