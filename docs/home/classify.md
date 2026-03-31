# 분류 기준
## 3단계 분류
* 각 오프셋은 대분류, 중분류, 소분류로 분류됩니다.
* 대분류는 Top navigation에 해당합니다.
* 중분류는 Nested top navigation에 해당합니다.
* 소분류는 Side navigation에 해당합니다.

## 대분류
대분류는 오프셋을 의미론적으로 분류할 수 있어야 합니다.
* `CUnit`은 CUnit 구조체 자체를 설명하는 항목을 묶습니다.
* `Player`는 플레이어별 상태, 자원, 시야, 메타데이터를 묶습니다.
* `Client`는 렌더링, 입력, UI, 선택, 카메라처럼 클라이언트 측 동작을 묶습니다.
* `Data`는 `Orders.dat`, `Upgrades.dat`, `Tech.dat`, `Weapons.dat`, `Units.dat`처럼 정적 데이터 테이블을 묶습니다.
* `Game`은 세션 상태, 엔진 전역 상태, 리플레이 헤더처럼 게임 진행 전반의 런타임 데이터를 묶습니다.
