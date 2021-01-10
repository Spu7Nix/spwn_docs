# Object Keys

| Key name                               | ID  | Value type                                    | Description                                                                              |
| -------------------------------------- | --- | --------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `OBJ_ID `                              | 1   | `@number `                                    | The ID that decides what kind of object this is. Each object type in gd has a unique ID. |
| `X `                                   | 2   | `@number `                                    | The X position of an object in units (one grid square = 30 units, +x is to the right)    |
| `Y `                                   | 3   | `@number `                                    | The Y position of an object in units (one grid square = 30 units, +y is to the up)       |
| `HORIZONTAL_FLIP `                     | 4   | `@bool `                                      | Wether the object is horizontally flipped                                                |
| `VERTICAL_FLIP `                       | 5   | `@bool `                                      | Wether the object is vertically flipped                                                  |
| `ROTATION `                            | 6   | `@number `                                    | Rotation of the object in degrees                                                        |
| `TRIGGER_RED `                         | 7   | `@number `                                    | Red value of the color in a color trigger                                                |
| `TRIGGER_GREEN `                       | 8   | `@number `                                    | Green value of the color in a color trigger                                              |
| `TRIGGER_BLUE `                        | 9   | `@number `                                    | Blue value of the color in a color trigger                                               |
| `DURATION `                            | 10  | `@number `                                    | Duration of a trigger                                                                    |
| `TOUCH_TRIGGERED `                     | 11  | `@bool `                                      | Wether a trigger is touch triggered                                                      |
| `PORTAL_CHECKED `                      | 13  | `@bool `                                      | ...                                                                                      |
| `PLAYER_COLOR_1 `                      | 15  | `@bool `                                      |
| `PLAYER_COLOR_2 `                      | 16  | `@bool `                                      |
| `BLENDING `                            | 17  | `@bool `                                      |
| `EDITOR_LAYER_1 `                      | 20  | `@number `                                    |
| `COLOR `                               | 21  | `@color `                                     |
| `COLOR_2 `                             | 22  | `@color `                                     |
| `TARGET_COLOR `                        | 23  | `@color `                                     |
| `Z_LAYER `                             | 24  | `@number `                                    |
| `Z_ORDER `                             | 25  | `@number `                                    |
| `MOVE_X `                              | 28  | `@number `                                    |
| `MOVE_Y `                              | 29  | `@number `                                    |
| `EASING `                              | 30  | `@number `                                    |
| `TEXT `                                | 31  | `@string `                                    |
| `SCALING `                             | 32  | `@number `                                    |
| `GROUP_PARENT `                        | 34  | `@bool `                                      |
| `OPACITY `                             | 35  | `@number `                                    |
| `HVS_ENABLED `                         | 41  | `@bool `                                      |
| `COLOR_2_HVS_ENABLED `                 | 42  | `@bool `                                      |
| `HVS `                                 | 43  | `@string `                                    |
| `COLOR_2_HVS `                         | 44  | `@string `                                    |
| `FADE_IN `                             | 45  | `@number `                                    |
| `HOLD `                                | 46  | `@number `                                    |
| `FADE_OUT `                            | 47  | `@number `                                    |
| `PULSE_HSV `                           | 48  | `@bool `                                      |
| `COPIED_COLOR_HVS `                    | 49  | `@string `                                    |
| `COPIED_COLOR_ID `                     | 50  | `@color `                                     |
| `TARGET `                              | 51  | `@color ` or `@group` or ` @trigger_function` |
| `TARGET_TYPE `                         | 52  | `@number `                                    |
| `YELLOW_TELEPORTATION_PORTAL_DISTANCE` | 54  | `@number `                                    |
| `ACTIVATE_GROUP `                      | 56  | `@bool `                                      |
| `GROUPS `                              | 57  | `[@group] ` or `@group`                       |
| `LOCK_TO_PLAYER_X `                    | 58  | `@bool `                                      |
| `LOCK_TO_PLAYER_Y `                    | 59  | `@bool `                                      |
| `COPY_OPACTITY `                       | 60  | `@bool `                                      |
| `EDITOR_LAYER_2 `                      | 61  | `@number `                                    |
| `SPAWN_TRIGGERED `                     | 62  | `@bool `                                      |
| `SPAWN_DURATION `                      | 63  | `@number ` or `@epsilon`                      |
| `DONT_FADE `                           | 64  | `@bool `                                      |
| `MAIN_ONLY `                           | 65  | `@bool `                                      |
| `DETAIL_ONLY `                         | 66  | `@bool `                                      |
| `DONT_ENTER `                          | 67  | `@bool `                                      |
| `ROTATE_DEGREES `                      | 68  | `@number `                                    |
| `TIMES_360 `                           | 69  | `@number `                                    |
| `LOCK_OBJECT_ROTATION `                | 70  | `@bool `                                      |
| `FOLLOW `                              | 71  | `@group `                                     |
| `CENTER `                              | 71  | `@group `                                     |
| `TARGET_POS `                          | 71  | `@group `                                     |
| `X_MOD `                               | 72  | `@number `                                    |
| `Y_MOD `                               | 73  | `@number `                                    |
| `STRENGTH `                            | 75  | `@number `                                    |
| `ANIMATION_ID `                        | 76  | `@number `                                    |
| `COUNT `                               | 77  | `@number `                                    |
| `SUBTRACT_COUNT `                      | 78  | `@number `                                    |
| `PICKUP_MODE `                         | 79  | `@number `                                    |
| `ITEM `                                | 80  | `@item `                                      |
| `BLOCK_A `                             | 80  | `@block `                                     |
| `HOLD_MODE `                           | 81  | `@bool `                                      |
| `TOGGLE_MODE `                         | 82  | `@number `                                    |
| `INTERVAL `                            | 84  | `@number `                                    |
| `EASING_RATE `                         | 85  | `@number `                                    |
| `EXCLUSIVE `                           | 86  | `@bool `                                      |
| `MULTI_TRIGGER `                       | 87  | `@bool `                                      |
| `COMPARISON `                          | 88  | `@number `                                    |
| `DUAL_MODE `                           | 89  | `@bool `                                      |
| `SPEED `                               | 90  | `@number `                                    |
| `DELAY `                               | 91  | `@number `                                    |
| `Y_OFFSET `                            | 92  | `@number `                                    |
| `ACTIVATE_ON_EXIT `                    | 93  | `@bool `                                      |
| `DYNAMIC_BLOCK `                       | 94  | `@bool `                                      |
| `BLOCK_B `                             | 95  | `@block `                                     |
| `GLOW_DISABLED `                       | 96  | `@bool `                                      |
| `ROTATION_SPEED `                      | 97  | `@number `                                    |
| `DISABLE_ROTATION `                    | 98  | `@bool `                                      |
| `COUNT_MULTI_ACTIVATE `                | 104 | `@bool `                                      |
| `USE_TARGET `                          | 100 | `@bool `                                      |
| `TARGET_POS_AXES `                     | 101 | `@number `                                    |
| `EDITOR_DISABLE `                      | 102 | `@bool `                                      |
| `HIGH_DETAIL `                         | 103 | `@bool `                                      |
| `MAX_SPEED `                           | 105 | `@number `                                    |
| `RANDOMIZE_START `                     | 106 | `@bool `                                      |
| `ANIMATION_SPEED `                     | 107 | `@number `                                    |
| `LINKED_GROUP `                        | 108 | `@number `                                    |
| `ACTIVE_TRIGGER `                      | 36, | `@bool `                                      |
