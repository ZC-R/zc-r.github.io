---
sidebar_position: 0
---

# Client Camera

Screen position, camera movement, and viewport-related data.

- Source rows: 8

## Included Offsets

| Address | Name | Size | Length | SCR |
| --- | --- | ---: | ---: | --- |
| 0057F1D0 | Screen Tile Position | 2 | 2 | Simple Data |
| 0057F270 | Saved Screen Positions | 4 | 3 | Simple Data |
| 0057FD34 | Last Event Position | 4 | 2 | Simple Data |
| 00628448 | Screen Coordinate X | 4 | 1 | Read Only |
| 00628470 | Screen Coordinate Y | 4 | 1 | Read Only |
| 0062848C | glScrollPixelX | 4 | 1 | Read Only |
| 00628494 | gfpCellMap | 4 | 1 | Backed By Code |
| 006284A8 | glScrollPixelY | 4 | 1 | Read Only |
