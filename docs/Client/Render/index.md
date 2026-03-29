---
sidebar_position: 0
---

# Client Render

Rendering-related data including images, sprites, and flingy-linked visuals.

- Source rows: 64

## Included Offsets

| Address | Name | Size | Length | SCR |
| --- | --- | ---: | ---: | --- |
| 00512510 | Image Update Functions | 8 | 18 |  |
| 005125A0 | Image Drawing Functions | 12 | 18 |  |
| 005127DC | Tileset Color Cycle Pointers | 4 | 9 |  |
| 0051CED0 | GRP Array | 4 | 999 | Read Only |
| 0051F2A8 | Images Attack Overlay Array | 4 | 999 | Read Only |
| 00520244 | Images Damage Overlay Array | 4 | 999 | Read Only |
| 005211E0 | Images Special Overlay Array | 4 | 999 | Read Only |
| 0052217C | Images Landing Dust Overlay Array | 4 | 999 | Read Only |
| 00523118 | Images Liftoff Dust Overlay Array | 4 | 999 | Read Only |
| 005240D0 | Images Damage Overlay Frame | 1 | 999 | Simple Data |
| 0052E5C8 | Images Shield Overlay Array | 4 | 999 |  |
| 0052F568 | Images Array | 64 | 5000 | Read Only |
| 0057EB68 | First Image Pointer | 4 | 1 | Read Only |
| 0057EB70 | Last Image Pointer | 4 | 1 | Read Only |
| 00581D76 | Unit Color Table | 8 | 12 | Simple Data |
| 00581DD6 | Minimap Color Table | 1 | 12 | Simple Data |
| 00629D98 | Sprite Table | 36 | 2500 | Read Only |
| 00629D98 | CSprite - Previous Entry | 4 | 1 | Supported |
| 00629D9C | CSprite - Next Entry | 4 | 1 | Supported |
| 00629DA0 | CSprite - Sprite ID | 2 | 1 | Supported |
| 00629DA2 | CSprite - Player ID | 1 | 1 | Supported |
| 00629DA3 | CSprite - Selection Index | 1 | 1 | Supported |
| 00629DA4 | CSprite - Visibility Flags | 1 | 1 | Supported |
| 00629DA5 | CSprite - Elevation Level | 1 | 1 | Unsupported |
| 00629DA6 | CSprite - Draw Flags | 1 | 1 | Unsupported |
| 00629DA7 | CSprite - Selection Timer | 1 | 1 | Unsupported |
| 00629DA8 | CSprite - Index | 2 | 1 | Unsupported |
| 00629DAA | CSprite - Unknown Flags 12 | 1 | 1 | Unsupported |
| 00629DAB | CSprite - Unknown flags 13 | 1 | 1 | Unsupported |
| 00629DAC | CSprite - Position | 2 | 2 | Unsupported |
| 00629DB0 | CSprite - Primary Image | 4 | 1 | Unsupported |
| 00629DB4 | CSprite - Image Head | 4 | 1 | Unsupported |
| 00629DB8 | CSprite - Image Tail | 4 | 1 | Unsupported |
| 00665AC0 | Sprites.dat - Selection Circle | 1 | 387 | Read Only |
| 00665C48 | Sprites.dat - Visible | 1 | 517 | Simple Data |
| 00665E50 | Sprites.dat - HP Bar Length | 1 | 387 | Read Only |
| 00665FD8 | Sprites.dat - Selection Vertical Offset | 1 | 387 | Read Only |
| 00666160 | Sprites.dat - Image Index | 2 | 517 | Backed By Code |
| 00666570 | Sprites.dat - Unknown | 1 | 517 | Simple Data |
| 00666778 | Images.dat - Landing Dust Overlay | 4 | 999 | Read Only |
| 00667718 | Images.dat - Draw If Cloaked | 1 | 999 | Simple Data |
| 00667B00 | Images.dat - Special Overlay | 4 | 999 | Read Only |
| 00668AA0 | Images.dat - GRP File | 4 | 999 | Read Only |
| 00669A40 | Images.dat - Drawing Function | 1 | 999 | Simple Data |
| 00669E28 | Images.dat - Remapping Table | 1 | 999 | Backed By Code |
| 0066A210 | Images.dat - Damage Overlay | 4 | 999 | Read Only |
| 0066B1B0 | Images.dat - Attack Overlay | 4 | 999 | Read Only |
| 0066C150 | Images.dat - Clickable | 1 | 999 | Simple Data |
| 0066C538 | Images.dat - Sheilds Overlay | 4 | 999 | Read Only |
| 0066D4D8 | Images.dat - Use Full Iscript | 1 | 999 | Simple Data |
| 0066D8C0 | Images.dat - Lift-off Dust Overlay | 4 | 999 | Read Only |
| 0066E860 | Images.dat - Graphics Turns | 1 | 999 | Simple Data |
| 0066EC48 | Images.dat - Iscript ID | 4 | 999 | Backed By Code |
| 0068C1F4 | TranWire.grp pointer | 4 | 1 | Backed By Code |
| 0068C1FC | GrpWire.grp Pointer | 4 | 1 | Backed By Code |
| 0068C204 | Wirefram.grp Pointer | 4 | 1 | Backed By Code |
| 006C9858 | Flingy.dat - Movement Control | 1 | 209 | Simple Data |
| 006C9930 | Flingy.dat - Halt Distance | 4 | 209 | Simple Data |
| 006C9C78 | Flingy.dat - Acceleration | 2 | 209 | Simple Data |
| 006C9E20 | Flingy.dat - Turn Radius | 1 | 209 | Simple Data |
| 006C9EF8 | Flingy.dat - Top Speed | 4 | 209 | Simple Data |
| 006CA240 | Flingy.dat - Unused | 1 | 209 | Simple Data |
| 006CA318 | Flingy.dat - Sprite Index | 2 | 209 | Simple Data |
| 1505E670 | Storm Graphics Palette | 4 | 256 | Read Only |
