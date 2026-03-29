---
sidebar_position: 0
---

# CUnit State

Runtime order flow, flags, timers, and general-purpose state stored directly on CUnit.

- Source rows: 39
- CSV tag: `CUnit`, `State`
- Base address: `0x0059CCA8` -> `0x000`

## Included Offsets

| Offset | Name | Size | Length | SCR |
| --- | --- | ---: | ---: | --- |
| 0x04D | CUnit - Main Order ID | 1 | 1 | Supported |
| 0x04E | CUnit - Main Order State | 1 | 1 | Supported |
| 0x04F | CUnit - Order Signal | 1 | 1 | Supported |
| 0x050 | CUnit - Order Unit Type | 2 | 1 | Supported |
| 0x051 | CUnit - Idle Order Timer | 4 | 1 |  |
| 0x054 | CUnit - Main Order Timer | 1 | 1 | Supported |
| 0x074 | CUnit - Order Queue Head | 4 | 1 |  |
| 0x078 | CUnit - Order Queue Tail | 4 | 1 |  |
| 0x084 | CUnit - Order Queue Count | 1 | 1 | Supported |
| 0x085 | CUnit - Order Queue Timer | 1 | 1 | Supported |
| 0x088 | CUnit - Previous Unit Type | 2 | 1 |  |
| 0x08A | CUnit - Last Event Timer | 1 | 1 |  |
| 0x08B | CUnit - Last Event Color | 1 | 1 |  |
| 0x091 | CUnit - Secondary Order Timer | 1 | 1 | Supported |
| 0x092 | CUnit - AI Action Flag | 1 | 1 | Supported |
| 0x093 | CUnit - User Action Flags | 1 | 1 | Supported |
| 0x094 | CUnit - Button Set | 2 | 1 | Supported |
| 0x096 | CUnit - Is Cloaked | 1 | 1 | Supported |
| 0x098 | CUnit - Build Queue | 2 | 5 | Supported |
| 0x0A2 | CUnit - Energy | 2 | 1 | Supported |
| 0x0A4 | CUnit - Build Queue Slot | 1 | 1 | Supported |
| 0x0A5 | CUnit - Uniqueness Identifier | 1 | 1 | Supported |
| 0x0A6 | CUnit - Secondary Order ID | 1 | 1 | Supported |
| 0x0A7 | CUnit - Building Overlay State | 1 | 1 | Supported |
| 0x0A8 | CUnit - HP Gain | 2 | 1 | Supported |
| 0x0AA | Cunit - Shield Gain | 2 | 1 | Supported |
| 0x0AC | CUnit - Remaining Build Time | 2 | 1 | Supported |
| 0x0AE | CUnit - Previous HP | 2 | 1 | Supported |
| 0x0DC | CUnit - Status Flags | 4 | 1 | Supported |
| 0x0E1 | CUnit - Wireframe Randomizer | 1 | 1 |  |
| 0x0E2 | CUnit - Secondary Order State | 1 | 1 |  |
| 0x0E3 | CUnit - Recent Order Time | 1 | 1 |  |
| 0x0E4 | CUnit - Visiblity Status | 4 | 1 |  |
| 0x0EC | CUnit - Unit beingBuilt | 4 | 1 | Unsupported |
| 0x0F0 | CUnit - Previous Burrowed Unit | 4 | 1 |  |
| 0x0F4 | CUnit - Next Burrowed Unit | 4 | 1 |  |
| 0x110 | CUnit - Remove Timer | 2 | 1 | Supported |
| 0x122 | CUnit - Cycle Counter | 1 | 1 | Supported |
| 0x134 | CUnit - AI Data | 4 | 1 |  |
