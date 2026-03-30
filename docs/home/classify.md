# 분류 기준
## 3단계 분류
* 각 오프셋은 대분류, 중분류, 소분류로 분류됩니다.
* 대분류는 Top navigation에 해당합니다.
* 중분류는 Nested top navigation에 해당합니다.
* 소분류는 Side navigation에 해당합니다.

### 대분류
대분류는 오프셋을 의미론적으로 분류할 수 있어야 합니다.

다음은 대분류의 예시입니다.
* CUnit은 가장 자주 사용되는 오프셋이며, 170여개의 오프셋이 해당되므로 하나의 대분류를 갖습니다.
* Player data는 개수는 적으나 의미론적으로 명확한 범주이므로 하나의 대분류를 갖습니다.
* Graphic/Rendering은 시각적 요소로서 명확한 범주이며, 다양한 활용이 가능하므로 하나의 대분류를 갖습니다.
* Game state는 게임의 상태를 나타내는 오프셋으로서 하나의 대분류를 갖습니다. 의미론적으로 명확하지 않아 다양한 오프셋이 포함되어 있습니다.

다음은 대분류로 분류되지 않는 예시입니다.
* Input, UI는 Client data로서 명확한 범주이나, 활용도가 낮고 개수가 적으므로 대분류로 분류되지 않습니다. 현재 Graphic/Rendering과 묶어 Client로 분류되어 있습니다.
* Orders.dat, Upgrades.dat, Tech.dat, Weapons.dat, Units.dat은 개수가 적으므로 의미론적 유사성이 있는 Game state의 하위 범주로 분류되어 있습니다.
