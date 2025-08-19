# union 0xC0
## Vulture
| Offset| size| Name                              |
|-------|-----|-----------------------------------|
| 0xC0  | 1   | vultureSpiderMines                |

## Carrier/Reaver
| Offset| size| Name                              |
|-------|-----|-----------------------------------|
| 0xC0  | 4   | Carrier/Reaver - In Hangar        |
| 0xC4  | 4   | Carrier/Reaver - Out Hanger       |
| 0xC8  | 1   | Carrier/Reaver - In Hangar Count  |
| 0xC9  | 1   | Carrier/Reaver - Out Hangar Count |

## Fighter
* Interceptor/Scarab

| Offset| size| Name                              |
|-------|-----|-----------------------------------|
| 0xC0  | 4   | Scarab/Interceptor - Parent Unit  |
| 0xC4  | 4   | Scarab/Interceptor - Previous     |
| 0xC8  | 4   | Scarab/Interceptor - Next         |
| 0xCC  | 1   | Scarab/Interceptor - In Hanger    |

## Beacon
| Offset| size| Name                              |
|-------|-----|-----------------------------------|
| 0xC0  | 4   | Beacon - Unknown +00              |
| 0xC4  | 4   | Beacon - Unknown +04              |
| 0xC8  | 4   | Beacon - Flag Spawn Frame         |

## Building
| Offset| size| Name                              |
|-------|-----|-----------------------------------|
| 0xC0  | 4   | Building - Addon                  |
| 0xC4  | 2   | Building - Addon Building Type    |
| 0xC6  | 2   | Building - Upgrade/Research Time  |
| 0xC8  | 1   | Building - Tech Type              |
| 0xC9  | 1   | Building - Upgrade Type           |
| 0xCA  | 1   | Building - Larva Spawn Timer      |
| 0xCB  | 1   | Building - Landing Timer          |
| 0xCC  | 1   | Building - Creep Timer            |
| 0xCD  | 1   | Building - Upgrade Level          |

## Worker
| Offset| size| Name                              |
|-------|-----|-----------------------------------|
| 0xC0  | 4   | Worker - Powerup Unit             |
| 0xC4  | 2x2 | Worker - Target Resource Coord    |
| 0xC8  | 4   | Worker - Target Resource Unit     |
| 0xCC  | 2   | Worker - Repair/Resource Timer    |
| 0xCE  | 1   | Worker - Is Carrying Something    |
| 0xCF  | 1   | Worker - Resource Carry Count     |
