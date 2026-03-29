---
sidebar_position: 0
---

# CUnit Move

Movement, facing, waypoint, rally, pathing, and spatial helper fields.

- Source rows: 33
- CSV tag: `CUnit`, `Move`
- Base address: `0x0059CCA8` -> `0x000`

## Included Offsets

| Offset | Name | Size | Length | SCR |
| --- | --- | ---: | ---: | --- |
| 0x010 | CUnit - Target Pos | 2 | 2 | Supported |
| 0x018 | CUnit - Next Movement Waypoint | 2 | 2 | Supported |
| 0x01C | CUnit - Next Target Waypoint | 4 | 1 | Unsupported |
| 0x020 | CUnit - Movement Flags | 1 | 1 | Supported |
| 0x021 | CUnit - Current Direction 1 | 1 | 1 | Supported |
| 0x022 | CUnit - Flingy Turn Radius | 1 | 1 | Supported |
| 0x023 | CUnit - Velocity Direction 1 | 1 | 1 | Supported |
| 0x024 | CUnit - Flingy ID | 2 | 1 | Supported |
| 0x027 | CUnit - Flingy Movement Type | 1 | 1 | Supported |
| 0x028 | CUnit - Position Coordinates | 2 | 2 | Supported |
| 0x02C | CUnit - Halt X Coordinate | 4 | 1 | Supported |
| 0x030 | CUnit - Halt Y Coordinate | 4 | 1 | Supported |
| 0x034 | CUnit - Flingy Top Speed | 4 | 1 | Supported |
| 0x038 | CUnit - Move Acceleration | 4 | 1 | Supported |
| 0x03C | CUnit - Move Speed | 4 | 1 | Supported |
| 0x040 | CUnit - Move Speed On X-Axis | 4 | 1 | Supported |
| 0x044 | CUnit - Move Speed On Y-Axis | 4 | 1 | Supported |
| 0x048 | CUnit - Flingy Acceleration | 2 | 1 | Supported |
| 0x04A | CUnit - Current Direction 2 | 1 | 1 | Supported |
| 0x04B | CUnit - Velocity Direction 2 | 1 | 1 | Supported |
| 0x058 | CUnit - Order Coordinates | 2 | 2 | Supported |
| 0x086 | CUnit - Unknown 0x086 | 1 | 1 | Supported |
| 0x097 | CUnit - Movement State | 1 | 1 | Supported |
| 0x0E8 | CUnit - Secondary Order Position | 2 | 2 |  |
| 0x100 | CUnit - Pathing Pointer | 4 | 1 |  |
| 0x104 | CUnit - Pathing Collision Interval | 1 | 1 | Supported |
| 0x105 | CUnit - Pathing Flags | 1 | 1 | Supported |
| 0x108 | CUnit - Contour Bounds | 2 | 4 | Unsupported |
| 0x13C | CUnit - Unit Finder | 4 | 4 |  |
| 0x14C | CUnit - Repulse Unknown | 1 | 1 | Supported |
| 0x14D | CUnit - Repulse Angle | 1 | 1 | Supported |
| 0x14E | CUnit - Drift X | 1 | 1 | Supported |
| 0x14F | CUnit - Drift Y | 1 | 1 | Supported |
