---
sidebar_position: 0
---

# CUnit

Structured classification of CUnit-related rows from `EUDDB.csv`.

- Total classified rows: 170
- CSV columns used: `Category=CUnit`, `Docs=Core|State|Move|Combat|Interaction|Union`
- Relative offset base: `0x0059CCA8` -> `0x000`

## Categories

| Category | Rows | Focus |
| --- | ---: | --- |
| [Core](/CUnit/Core) | 11 | Fundamental fields that identify a unit and expose its base ownership or primary values. |
| [State](/CUnit/State) | 39 | Runtime order flow, flags, timers, and general-purpose state stored directly on CUnit. |
| [Move](/CUnit/Move) | 33 | Movement, facing, waypoint, pathing, and spatial helper fields excluding union-backed aliases. |
| [Combat](/CUnit/Combat) | 35 | Combat target, cooldown, weapon-effect, and buff or debuff related fields. |
| [Interaction](/CUnit/Interaction) | 14 | Pointers and non-union helper fields used when CUnit interacts with sprites, workers, buildings, cargo, and special objects. |
| [Union](/CUnit/Union) | 38 | Overlaid fields whose meaning changes by unit type or runtime context. |
