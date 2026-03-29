---
sidebar_position: 0
---

# Engine

Structured classification of engine-owned rows from `EUDDB.csv`.

- Total classified rows: 76

## Categories

| Category | Rows | Focus |
| --- | ---: | --- |
| [Memory](/Engine/Memory) | 10 | Core allocation state, unit lists, and major runtime resource pointers. |
| [Struct](/Engine/Struct) | 61 | Engine-wide data tables such as `Units.dat`, `Sfxdata.dat`, and unitnode storage. |
| [Pointer](/Engine/Pointer) | 4 | Script and engine callback pointers not owned by another feature area. |
| [Unknown](/Engine/Unknown) | 1 | Unclear or still-unverified rows kept separate on purpose. |
| [Debug](/Engine/Debug) | 0 | Reserved bucket for future debug-oriented rows. |
