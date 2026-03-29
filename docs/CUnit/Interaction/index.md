---
sidebar_position: 0
---

# CUnit Interaction

Pointers and non-union helper fields used when CUnit interacts with sprites, workers, buildings, cargo, and special objects.

- Source rows: 14
- CSV tag: `CUnit`, `Interaction`
- Base address: `0x0059CCA8` -> `0x000`

## Included Offsets

| Offset | Name | Size | Length | SCR |
| --- | --- | ---: | ---: | --- |
| 0x00C | CUnit - Sprite | 4 | 1 | Supported |
| 0x070 | CUnit - Sub Unit | 4 | 1 | Supported |
| 0x080 | CUnit - Connected Unit | 4 | 1 | Supported |
| 0x0B0 | CUnit - Loaded Unit Index | 2 | 8 | Unsupported |
| 0x0C6 | CUnit - Building - Upgrade/Research Time | 2 | 1 | Supported |
| 0x0CA | CUnit - Building - Larva Spawn Timer | 1 | 1 | Supported |
| 0x0CB | CUnit - Building - Landing Timer | 1 | 1 | Supported |
| 0x0CD | CUnit - Building - Upgrade Level | 1 | 1 | Supported |
| 0x0CE | CUnit - Worker - Is Carring Something | 1 | 1 | Supported |
| 0x0CF | CUnit - Worker - Resource Carry Count | 1 | 1 | Supported |
| 0x0D2 | CUnit - Resource - Resource IScript | 1 | 1 | Supported |
| 0x0D3 | CUnit - Resource - Gatherer Queue Count | 1 | 1 | Supported |
| 0x0D9 | CUnit - Resource - Reource Belongs to AI | 1 | 1 | Supported |
| 0x0E0 | CUnit - Resource Type | 1 | 1 |  |
