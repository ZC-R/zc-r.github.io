---
sidebar_position: 0
---

# Game Event

Event, trigger, replay, and other flow-oriented game data.

- Source rows: 74

## Included Offsets

| Address | Name | Size | Length | SCR |
| --- | --- | ---: | ---: | --- |
| 004FF900 | Filename for Lastreplay | 12 | 1 |  |
| 004FF928 | Replay Command Table | 16 | 2 |  |
| 004FF948 | Replay show command modifiers | 32 | 12 |  |
| 006D0F30 | Replay Header | 633 | 1 | Read Only |
| 006D0F77 | Replay Header- Computer Player Count | 1 | 1 | Read Only |
| 00512800 | Trigger Action Function Array | 4 | 60 |  |
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
| 0051CE84 | Network Mode Delay | 4 | 1 | Read Only |
| 0051CE88 | Network Mode Delay 2 | 4 | 1 |  |
| 0057F090 | Network Provider Latency Calls | 4 | 1 |  |
| 0057F0B8 | Network Player Status Array | 4 | 8 | Unsupported |
| 0057F0D8 | Network Maximum Buffer Size | 4 | 1 |  |
| 0058D6FC | SC Switch Table (Unused?) | 4 | 1 | Simple Data |
| 00650980 | Trigger Wait Timers | 4 | 8 |  |
| 006509A0 | Trigger Execution Timer (Hyper triggers) | 4 | 1 | Simple Data |
| 006509B0 | Trigger Current Player aka CP Trick | 4 | 1 | Simple Data |
| 00654880 | Network Buffer | 496 | 1 | Backed By Code |
| 00654AA0 | Network Buffer Used | 4 | 1 | Supported |
| 006556E4 | Network Latency Option | 4 | 1 |  |
| 006D0F30 | Replay Header - Is Broodwar | 1 | 1 | Read Only |
| 006D0F31 | Replay Header - Frame Count | 4 | 1 | Read Only |
| 006D0F35 | Replay Header - Campaign ID | 2 | 1 | Read Only |
| 006D0F37 | Replay Header - Command ID | 1 | 1 | Read Only |
| 006D0F38 | Replay Header - Rand Seed | 4 | 1 | Read Only |
| 006D0F3C | Replay Header - Player Bytes | 1 | 8 | Read Only |
| 006D0F44 | Replay Header - Unknown_0 | 4 | 1 | Read Only |
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
| 19046138 | Battle.snp Join Channel | 4 | 1 | Simple Data |
| 1904613C | Battle.snp Join Channel | 4 | 1 | Simple Data |
