---
sidebar_position: 0
---

# Engine Memory

Memory-level references and engine data that are easier to explain by memory role.

- Source rows: 10

## Included Offsets

| Address | Name | Size | Length | SCR |
| --- | --- | ---: | ---: | --- |
| 0050C000 | cInit Constructor Function Table | 4 | 310 |  |
| 006283F0 | usedUnitCount | 4 | 1 | Read Only |
| 006283F8 | Last Unit Pointer | 4 | 1 |  |
| 006283F8 | Player Last Unit Pointers | 4 | 12 | Backed By Code |
| 00628428 | LastHiddenUnitPointer | 4 | 1 | Backed By Code |
| 00628430 | First Unit Pointer | 4 | 1 | Backed By Code |
| 00628438 | First Empty Unit | 4 | 1 | Backed By Code |
| 0062843C | LastEmptyUnit | 4 | 1 | Backed By Code |
| 006D1200 | iscript.bin pointer | 4 | 1 | Backed By Code |
| 006D1238 | stat_txt.tbl pointer | 4 | 1 | Backed By Code |
