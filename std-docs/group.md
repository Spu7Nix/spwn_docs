# **@group**
?> Groups are references to one or more Geometry Dash objects, and are used to make these objects do things like moving, rotating and pulsing.
They can also be used to mark a specific object, as for example a rotation center or a target position to move to.
Groups are also used to send signals between **triggers**, and are therefore quite closely related to trigger functions.

## Macros

### alpha

>**Printed**
>
>```spwn
>(self, opacity: @number = 1, duration: @number = 0) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the alpha trigger_
>
>**Example:**
>
>```spwn
>1g.alpha(0)
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `opacity` | [`@number`](std-docs/number) | `1` | |
>| 2 | `duration` | [`@number`](std-docs/number) | `0` | |
>

### follow

>**Printed**
>
>```spwn
>(self, other: @group, x_mod: @number = 1, y_mod: @number = 1, duration: @number = 999) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the follow trigger_
>
>**Example:**
>
>```spwn
>10g.follow(11g)
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `other` | [`@group`](std-docs/group) | |Group of object to follow |
>| 2 | `x_mod` | [`@number`](std-docs/number) | `1` |Multiplier for the movement on the X-axis |
>| 3 | `y_mod` | [`@number`](std-docs/number) | `1` |Multiplier for the movement on the Y-axis |
>| 4 | `duration` | [`@number`](std-docs/number) | `999` |Duration of following |
>

### follow\_lerp

>**Printed**
>
>```spwn
>(self, groupA: @group, groupB: @group, weight: @number = 0.5, duration: @number = 999) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Keeps an object's position proportionally between 2 others_
>
>**Example:**
>
>```spwn
>// Since this function works using follow triggers, objects need to already be in the proper position,
>// otherwise they'll be offset.
>1g.follow_lerp(2g,3g,0.5) // Keeps group 1 in the middle of groups 2 and 3
>1g.follow_lerp(2g,3g,0.25) // Keeps group 1 25% of the way between groups 2 and 3
>1g.follow_lerp(2g,3g,-1) // Keeps group 1 as a reflection of group 3 by group 2
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `groupA` | [`@group`](std-docs/group) | |Group of object A to follow |
>| 2 | `groupB` | [`@group`](std-docs/group) | |Group of object B to follow |
>| 3 | `weight` | [`@number`](std-docs/number) | `0.5` |Group of object B to follow |
>| 4 | `duration` | [`@number`](std-docs/number) | `999` |Duration of following |
>

### follow\_player\_y

>**Printed**
>
>```spwn
>(self, speed: @number = 1, delay: @number = 0, offset: @number = 0, max_speed: @number = 0, duration: @number = 999) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the follow player Y trigger_
>
>**Example:**
>
>```spwn
>10g.follow_player_y(delay = 0.5)
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `speed` | [`@number`](std-docs/number) | `1` |Interpolation factor (?) |
>| 2 | `delay` | [`@number`](std-docs/number) | `0` |Delay of movement |
>| 3 | `offset` | [`@number`](std-docs/number) | `0` |Offset on the Y-axis |
>| 4 | `max_speed` | [`@number`](std-docs/number) | `0` |Maximum speed |
>| 5 | `duration` | [`@number`](std-docs/number) | `999` |Duration of following |
>

### lock\_to\_player

>**Printed**
>
>```spwn
>(self, lock_x: @bool = true, lock_y: @bool = true, duration: @number = 999) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Lock group to player position_
>
>**Example:**
>
>```spwn
>10g.lock_to_player(lock_x = true, duration = 20)
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `lock_x` | `@bool` | `true` |Lock to player X |
>| 2 | `lock_y` | `@bool` | `true` |Lock to player Y |
>| 3 | `duration` | [`@number`](std-docs/number) | `999` |Duration of lock |
>

### move

>**Printed**
>
>```spwn
>(self, x: (@number | @counter), y: (@number | @counter), duration: @number = 0, easing: @easing_type = NONE, easing_rate: @number = 2, x_multiplier: @number = 1, y_multiplier: @number = 1) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the move trigger_
>
>**Example:**
>
>```spwn
>10g.move(100, 0, 0.5, easing = EASE_IN_OUT)
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `x` | [`@number`](std-docs/number) or [`@counter`](std-docs/counter) | |Units to move on the X axis (10 units per grid square) |
>| 2 | `y` | [`@number`](std-docs/number) or [`@counter`](std-docs/counter) | |Units to move on the Y axis (10 units per grid square) |
>| 3 | `duration` | [`@number`](std-docs/number) | `0` |Duration of movement |
>| 4 | `easing` | [`@easing_type`](std-docs/easing_type) | `NONE` | |
>| 5 | `easing_rate` | [`@number`](std-docs/number) | `2` | |
>| 6 | `x_multiplier` | [`@number`](std-docs/number) | `1` |X movement multiplier (so you dont have to dynamically multiply counters) |
>| 7 | `y_multiplier` | [`@number`](std-docs/number) | `1` |Y movement multiplier (so you dont have to dynamically multiply counters) |
>

### move\_to

>**Printed**
>
>```spwn
>(self, target: @group, duration: @number = 0, x_only: @bool = false, y_only: @bool = false, easing: @easing_type = NONE, easing_rate: @number = 2) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the 'Move target' feature of the move trigger. Remember that both groups can only contain one object._
>
>**Example:**
>
>```spwn
>10g.move_to(20g)
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `target` | [`@group`](std-docs/group) | |Group of the object to move to |
>| 2 | `duration` | [`@number`](std-docs/number) | `0` |Duration of movement |
>| 3 | `x_only` | `@bool` | `false` |Will move to the object only on the X-axis |
>| 4 | `y_only` | `@bool` | `false` |Will move to the object only on the y-axis |
>| 5 | `easing` | [`@easing_type`](std-docs/easing_type) | `NONE` |Easing type |
>| 6 | `easing_rate` | [`@number`](std-docs/number) | `2` |Easing rate |
>

### move\_to\_xy

>**Printed**
>
>```spwn
>(self, x: (@number | @NULL) = null, y: (@number | @NULL) = null, duration: @number = 0, easing: @easing_type = NONE, easing_rate: @number = 2) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Moves group to a specific coordinate_
>
>**Example:**
>
>```spwn
>10g.move_to_xy(300, 300)
>10g.move_to_xy(x = 300) // does not move on the y axis
>10g.move_to_xy(y = 300) // does not move on the x axis
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `x` | [`@number`](std-docs/number) or `@NULL` | `null` |X position to move to in units (1 grid square is 30 units) |
>| 2 | `y` | [`@number`](std-docs/number) or `@NULL` | `null` |Y position to move to in units (1 grid square is 30 units) |
>| 3 | `duration` | [`@number`](std-docs/number) | `0` |Duration of movement |
>| 4 | `easing` | [`@easing_type`](std-docs/easing_type) | `NONE` |Easing type |
>| 5 | `easing_rate` | [`@number`](std-docs/number) | `2` |Easing rate |
>

### precise\_move

>**Printed**
>
>```spwn
>(self, x: @number, y: @number, duration: @number = 0, easing: @easing_type = NONE, easing_rate: @number = 2, single: @bool = false) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Combines a move trigger with a follow trigger to allow for more precise decimal movement (up to 2 decimal places)_
>
>**Example:**
>
>```spwn
>10g.precise_move(50.45,-15.23,0.5, easing = EASE_IN_OUT)
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `x` | [`@number`](std-docs/number) | |Units to move on the X axis (10 units per grid square) |
>| 2 | `y` | [`@number`](std-docs/number) | |Units to move on the Y axis (10 units per grid square) |
>| 3 | `duration` | [`@number`](std-docs/number) | `0` |Duration of movement |
>| 4 | `easing` | [`@easing_type`](std-docs/easing_type) | `NONE` | |
>| 5 | `easing_rate` | [`@number`](std-docs/number) | `2` | |
>| 6 | `single` | `@bool` | `false` |Saves groups and objects if the group only contains one object |
>

### pulse

>**Printed**
>
>```spwn
>(self, c: @chroma, fade_in: @number = 0, hold: @number = 0, fade_out: @number = 0, exclusive: @bool = false) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the pulse trigger for groups_
>
>**Example:**
>
>```spwn
>10g.pulse(rgb8(255, 0, 0), fade_out = 0.5)
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `c` | [`@chroma`](std-docs/chroma) | |Chroma for pulse color |
>| 2 | `fade_in` | [`@number`](std-docs/number) | `0` |Fade-in duration |
>| 3 | `hold` | [`@number`](std-docs/number) | `0` |Duration to hold the color |
>| 4 | `fade_out` | [`@number`](std-docs/number) | `0` |Fade-out duration |
>| 5 | `exclusive` | `@bool` | `false` |Whether to prioritize this pulse over simultaneous pulses |
>

### pulse\_hsv

>**Printed**
>
>```spwn
>(self, h: @number, s: @number, b: @number, s_checked: @bool = false, b_checked: @bool = false, fade_in: @number = 0, hold: @number = 0, fade_out: @number = 0, exclusive: @bool = false) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the pulse trigger for groups with hsv_
>
>**Example:**
>
>```spwn
>10g.pulse_hsv(180, 1, 1, fade_out = 0.5)
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `h` | [`@number`](std-docs/number) | |Hue |
>| 2 | `s` | [`@number`](std-docs/number) | |Saturation |
>| 3 | `b` | [`@number`](std-docs/number) | |Brightness |
>| 4 | `s_checked` | `@bool` | `false` |Saturation checked |
>| 5 | `b_checked` | `@bool` | `false` |Brightness checked |
>| 6 | `fade_in` | [`@number`](std-docs/number) | `0` |Fade-in duration |
>| 7 | `hold` | [`@number`](std-docs/number) | `0` |Duration to hold the color |
>| 8 | `fade_out` | [`@number`](std-docs/number) | `0` |Fade-out duration |
>| 9 | `exclusive` | `@bool` | `false` |Whether to prioritize this pulse over simultaneous pulses |
>

### rotate

>**Printed**
>
>```spwn
>(self, center: @group, degrees: @number, duration: @number = 0, easing: @easing_type = NONE, easing_rate: @number = 2, lock_object_rotation: @bool = false) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the rotate trigger_
>
>**Example:**
>
>```spwn
>center = 3g
>10g.rotate(center, 360, 2, easing = EASE_IN_OUT)
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `center` | [`@group`](std-docs/group) | |Group of object to rotate around |
>| 2 | `degrees` | [`@number`](std-docs/number) | |Rotation in degrees |
>| 3 | `duration` | [`@number`](std-docs/number) | `0` |Duration of rotation |
>| 4 | `easing` | [`@easing_type`](std-docs/easing_type) | `NONE` |Easing type |
>| 5 | `easing_rate` | [`@number`](std-docs/number) | `2` |Easing rate |
>| 6 | `lock_object_rotation` | `@bool` | `false` |Only rotate positions of the objects, not the textures |
>

### stop

>**Printed**
>
>```spwn
>(self) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the stop trigger_
>
>**Example:**
>
>```spwn
>move = !{
>    10g.move(1000, 0, 10)
>}
>move!
>wait(2)
>move.start_group.stop()
>```
>
>

### toggle\_off

>**Printed**
>
>```spwn
>(self) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Toggles the group off_
>
>**Example:**
>
>```spwn
>10g.toggle_off()
>```
>
>

### toggle\_on

>**Printed**
>
>```spwn
>(self) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Toggles the group on_
>
>**Example:**
>
>```spwn
>10g.toggle_on()
>```
>
>

## Operator Implementations

### \_range\_

>**Printed**
>
>```spwn
>(self, other: @group) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the range operator (`..`) for groups_
>
>**Example:**
>
>```spwn
>for group in 1g..10g {
>    -> group.move(10, 0, 0.5)
>}
>
>// you can also use counters
>c = counter(10)
>for group in 1g..10g {
>    group.move(c, 0, 0.5)
>    c += 5
>}
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `other` | [`@group`](std-docs/group) | | |
>
