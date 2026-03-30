---
sidebar_position: 0
---

# Game Game

Unified game-session rows from `EUDDB.csv`, combining the previous time, rule, state, map, and event buckets except replay-header internals.

- Source rows: 83
- CSV tag: `Game`, `Game`

## Included Offsets

| Address | Name | Size | Length | SCR |
| --- | --- | ---: | ---: | --- |
| 004FF900 | Filename for Lastreplay | 12 | 1 |  |
| 004FF90C | Replay Speed Limiters | 4 | 7 |  |
| 004FF928 | Replay Command Table | 16 | 2 |  |
| 004FF948 | Replay show command modifiers | 32 | 12 |  |
| 004FFC20 | Campaign List Info | 8 | 85 |  |
| 004FFF60 | Establishing shot pointers | 8 | 65 |  |
| 005122A0 | Campaign list pointers | 4 | 6 |  |
| 005122B8 | Current Cinematic ID | 4 | 1 |  |
| 005124D8 | Game Speed Refresh Rate | 4 | 7 | Simple Data |
| 005124F4 | Replay Speed Refresh Rate | 4 | 7 |  |
| 00512690 | Cinematic File Name Array | 4 | 28 |  |
| 00512700 | Race Filename Modifiers | 8 | 1 |  |
| 00512800 | Trigger Action Function Array | 4 | 60 |  |
| 00514178 | Unit Reqs data | 1090 | 1 | Simple Data |
| 00515A98 | Trigger Condition Function Array | 4 | 24 |  |
| 00519E50 | Mission Briefing Action Function Array | 4 | 10 |  |
| 0051A280 | Player 1 Trigger List | 4 | 3 | Backed By Code |
| 0051A28C | Player 2 Trigger List | 4 | 3 | Backed By Code |
| 0051A298 | Player 3 Trigger List | 4 | 3 | Backed By Code |
| 0051A2A4 | Player 4 Trigger List | 4 | 3 | Backed By Code |
| 0051A2B0 | Player 5 Trigger List | 4 | 3 | Backed By Code |
| 0051A2BC | Player 6 Trigger List | 4 | 3 | Backed By Code |
| 0051A2C8 | Player 7 Trigger List | 4 | 3 | Backed By Code |
| 0051A2D4 | Player 8 Trigger List | 4 | 3 | Backed By Code |
| 0051CA14 | Last Random Number | 4 | 1 | Simple Data |
| 0051CE84 | Network Mode Delay | 4 | 1 | Read Only |
| 0051CE88 | Network Mode Delay 2 | 4 | 1 |  |
| 0051CE8C | Inverse System Time | 4 | 1 |  |
| 0057F090 | Network Provider Latency Calls | 4 | 1 |  |
| 0057F0B4 | Multiplayer Mode | 4 | 1 | Read Only |
| 0057F0B8 | Network Player Status Array | 4 | 8 | Unsupported |
| 0057F0D8 | Network Maximum Buffer Size | 4 | 1 |  |
| 0057F1D4 | MapSize | 2 | 2 | Simple Data |
| 0057F1DC | Tileset | 2 | 1 | Simple Data |
| 0057F1DE | Current Music | 2 | 2 | Simple Data |
| 0057F1E0 | BWGame Unk_f0 | 1 | 1 | Simple Data |
| 0057F1E2 | Console Index | 1 | 1 | Simple Data |
| 0057F1E3 | Is Custom Single Player | 1 | 1 | Simple Data |
| 0057F1E4 | BWGame unk_f4 | 4 | 1 | Simple Data |
| 0057F1E8 | BWGame unk_f8 | 4 | 1 | Simple Data |
| 0057F23C | Elapsed Time | 4 | 1 | Simple Data |
| 0057F240 | Saved Elapsed Seconds | 4 | 1 | Simple Data |
| 0057F244 | Campaign Index | 2 | 1 | Simple Data |
| 0057F246 | Next Scenario name | 32 | 1 | Simple Data |
| 0057F26F | BWGame unk_17F | 1 | 1 | Simple Data |
| 0057FD2C | BWGame unk_c3c | 1 | 8 | Simple Data |
| 0057FD3C | Map File Name | 260 | 1 | Simple Data |
| 0057FE40 | Map Title | 32 | 1 | Simple Data |
| 00581960 | BWGame unk_2870 | 1 | 1024 | Simple Data |
| 00581DE2 | BWGame unk_2cf2 | 1 | 2 | Simple Data |
| 0058D6C4 | Mission Objectives Index | 4 | 12 | Simple Data |
| 0058D6F8 | Elapsed Time | 4 | 1 | Simple Data |
| 0058D6FC | SC Switch Table (Unused?) | 4 | 1 | Simple Data |
| 0058D720 | Start Locations | 4 | 8 | Simple Data |
| 0058D740 | Vanilla Location Table | 20 | 64 | Simple Data |
| 0058DC40 | Switch Table | 32 | 1 | Simple Data |
| 0058DC60 | Location Table | 20 | 255 | Simple Data |
| 0058F04C | Time Pause State | 4 | 1 | Simple Data |
| 0058F440 | Is Expansion | 1 | 1 | Simple Data |
| 0058F441 | BWGame unk_10351 | 1 | 1 | Simple Data |
| 0058F44A | BWGame "Literally Unused" | 1 | 29604 | Simple Data |
| 00596904 | Game Mode | 2 | 1 | Unsupported |
| 005993C4 | Pointer to "MTXM" map tile data | 4 | 1 | Backed By Code |
| 005993D4 | Pointer to map "STR " section | 4 | 1 | Backed By Code |
| 0059BA5C | Game Subtype ID | 4 | 1 |  |
| 0059C080 | Mapdata.dat - Mission dir | 4 | 65 |  |
| 00650980 | Trigger Wait Timers | 4 | 8 |  |
| 006509A0 | Trigger Execution Timer (Hyper triggers) | 4 | 1 | Simple Data |
| 006509B0 | Trigger Current Player aka CP Trick | 4 | 1 | Simple Data |
| 00654880 | Network Buffer | 496 | 1 | Backed By Code |
| 00654AA0 | Network Buffer Used | 4 | 1 | Supported |
| 006556E4 | Network Latency Option | 4 | 1 |  |
| 006CDFD4 | Game Speed | 4 | 1 | Backed By Code |
| 006D0C68 | Creep Tile Backup Buffer | 4 | 1 | Unsupported |
| 006D0C6C | Tile Buffer Height | 4 | 1 | Unsupported |
| 006D0E80 | Creep Overlay Buffer | 4 | 1 | Unsupported |
| 006D0E84 | Active Tile Buffer | 4 | 1 | Unsupported |
| 006D0F08 | Tile Buffer Width | 4 | 1 | Unsupported |
| 006D1260 | Tile Flags Pointer | 4 | 1 | Backed By Code |
| 006D5A6C | Cheat Flags | 4 | 1 | Simple Data |
| 006D5EC8 | CV5 Pointer | 4 | 1 | Backed By Code |
| 19046138 | Battle.snp Join Channel | 4 | 1 | Simple Data |
| 1904613C | Battle.snp Join Channel | 4 | 1 | Simple Data |
