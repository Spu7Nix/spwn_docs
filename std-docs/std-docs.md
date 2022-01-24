# Documentation for `std`

_Generated using `spwn doc [file name]`_

## Info

- Uses 0 groups
- Uses 0 colors
- Uses 0 block IDs
- Uses 1 item IDs

- Adds 0 objects

## Exports

**Type:** [`@dictionary`](std-docs/dictionary)

## Constructors

### counter

>**Printed**
>
>```spwn
>(source: (((@number | @item) | @counter) | @bool) = 0, bits: @number = 16, reset: @bool = true) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Creates a new counter_
>
>**Example:**
>
>```spwn
>@counter::new()     // creates a new counter with a starting value of 0
>@counter::new(10)   // creates a new counter with a starting value of 10
>@counter::new(5i)   // creates a new counter that uses item ID 5
>@counter::new(true)   // creates a new counter with a starting value of true (1)
>```
>
>
>**Returns:** 
>[`@counter`](std-docs/counter)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `source` | [`@number`](std-docs/number) or [`@item`](std-docs/item) or [`@counter`](std-docs/counter) or `@bool` | `0` |Source (can be a number, item ID or boolean) |
>| 2 | `bits` | [`@number`](std-docs/number) | `16` |Defines the maximum stable size of the counter. If the counter goes outside of the range from 0 to 2^size, it's behavior will be undefined. Smaller sizes are more group effective. |
>| 3 | `reset` | `@bool` | `true` |Resets the counter in case the item has been used before. This only applies if the `source` argument is not an item. |
>

### open

>**Printed**
>
>```spwn
>(path: @string) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Creates a new file IO object_
>
>**Example:**
>
>```spwn
>@file::new('C:/path/to/file.txt')
>```
>
>
>**Returns:** 
>[`@file`](std-docs/file)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `path` | [`@string`](std-docs/string) | |Path to file (at the moment this is only stable with absolute paths) |
>

### regex

>**Printed**
>
>```spwn
>(re: @string) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Create a new instance of regex_
>
>**Returns:** 
>[`@regex`](std-docs/regex)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `re` | [`@string`](std-docs/string) | |A regex string. Make sure to use two backslashes to escape selectors instead of one or it will error |
>

## Macros

### alpha\_trigger

>**Printed**
>
>```spwn
>(group: @group, opacity: @number = 1, duration: @number = 0) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns an alpha trigger as an object_
>
>**Example:**
>
>```spwn
>$.add( alpha_trigger(1g,0.5,duration = 2).with(obj_props.X,600) ) // Creates an alpha trigger at X 600 that fades group 1 to half opacity over 2 seconds
>```
>
>
>**Returns:** 
>[`@object`](std-docs/object)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `group` | [`@group`](std-docs/group) | | |
>| 2 | `opacity` | [`@number`](std-docs/number) | `1` | |
>| 3 | `duration` | [`@number`](std-docs/number) | `0` | |
>

### call\_on\_x\_position

>**Printed**
>
>```spwn
>(position: @number, function: (@trigger_function | @group)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Call a function after an x position_
>
>**Example:**
>
>```spwn
>BG.set(rgb8(255, 0, 0)) // turn background red
>call_on_x_position(300, !{
>	BG.set(rgb8(0, 255, 0)) // turn background green at x position 300
>})
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `position` | [`@number`](std-docs/number) | |X position |
>| 2 | `function` | `@trigger\_function` or [`@group`](std-docs/group) | |Function to call after reaching x position |
>

### call\_with\_delay

>**Printed**
>
>```spwn
>(time: (@number | @epsilon) = @epsilon::{}, function: (@trigger_function | @group)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Call a function after a delay_
>
>**Example:**
>
>```spwn
>BG.set(rgb8(255, 0, 0)) // turn background red
>call_with_delay(2, !{
>    BG.set(rgb8(0, 255, 0)) // turn background green 2 seconds later
>})
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `time` | [`@number`](std-docs/number) or `@epsilon` | `@epsilon::{}` |Delay time in seconds (leave empty for minimum delay) |
>| 2 | `function` | `@trigger\_function` or [`@group`](std-docs/group) | |Function to call after the delay |
>

### collision

>**Printed**
>
>```spwn
>(a: @block, b: @block) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the collision trigger (returns an event)_
>
>**Example:**
>
>```spwn
>on(collision(1b, 2b), !{
>    BG.set(rgb(0, 0, 0))
>})
>```
>
>
>**Returns:** 
>[`@event`](std-docs/event)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `a` | [`@block`](std-docs/block) | |Block A ID |
>| 2 | `b` | [`@block`](std-docs/block) | |Block B ID |
>

### collision\_exit

>**Printed**
>
>```spwn
>(a: @block, b: @block) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns an event for when a collision exits_
>
>**Example:**
>
>```spwn
>on(collision_exit(1b, 2b), !{
>    BG.set(rgb(0, 0, 0))
>})
>```
>
>
>**Returns:** 
>[`@event`](std-docs/event)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `a` | [`@block`](std-docs/block) | |Block A ID |
>| 2 | `b` | [`@block`](std-docs/block) | |Block B ID |
>

### color\_trigger

>**Printed**
>
>```spwn
>(channel: @color, r: @number, g: @number, b: @number, duration: @number = 0, opacity: @number = 1, blending: @bool = false) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns a color trigger as an object_
>
>**Example:**
>
>```spwn
>$.add( color_trigger(BG,0,0,0,0.5).with(obj_props.X,600) )
>```
>
>
>**Returns:** 
>[`@object`](std-docs/object)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `channel` | [`@color`](std-docs/color) | |Color channel to change |
>| 2 | `r` | [`@number`](std-docs/number) | |Red value of the target color |
>| 3 | `g` | [`@number`](std-docs/number) | |Green value of the target color |
>| 4 | `b` | [`@number`](std-docs/number) | |Blue value of the target color |
>| 5 | `duration` | [`@number`](std-docs/number) | `0` |Duration of color change |
>| 6 | `opacity` | [`@number`](std-docs/number) | `1` |Opacity of target color |
>| 7 | `blending` | `@bool` | `false` |Toggle blending on target color |
>

### death

>**Printed**
>
>```spwn
>() { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns an event for when the player dies_
>
>**Example:**
>
>```spwn
>on(death(), !{
>    BG.set(rgb(0, 0, 0))
>})
>```
>
>
>**Returns:** 
>[`@event`](std-docs/event)
>

### disable\_trail

>**Printed**
>
>```spwn
>() { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Disables the player's trail_
>
>**Example:**
>
>```spwn
>disable_trail()
>```
>
>

### do\_while\_loop

>**Printed**
>
>```spwn
>(expr: () -> @bool, code: () -> @NULL, delay: (@number | @epsilon) = @epsilon::{}) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of a conditional spawn loop_
>
>**Example:**
>
>```spwn
>c = counter(4)
>
>do_while_loop(() => c > 10, () {
>    c -= 2
>})
>
>// c is now 2
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `expr` | a `@macro` that returns `@bool` and takes  as arguments | |While loop condition, should -> return a boolean |
>| 2 | `code` | a `@macro` that returns `@NULL` and takes  as arguments | |Macro of the code that gets looped |
>| 3 | `delay` | [`@number`](std-docs/number) or `@epsilon` | `@epsilon::{}` |Delay between loops (less than 0.05 may be unstable) |
>

### enable\_trail

>**Printed**
>
>```spwn
>() { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Enables the player's trail_
>
>**Example:**
>
>```spwn
>enable_trail()
>```
>
>

### follow\_player\_y\_trigger

>**Printed**
>
>```spwn
>(group: @group, speed: @number = 1, delay: @number = 0, offset: @number = 0, max_speed: @number = 0, duration: @number = 999) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns a follow player Y trigger as an object_
>
>**Example:**
>
>```spwn
>$.add( follow_player_y_trigger(10g,delay = 0.5).with(obj_props.X,600) )
>```
>
>
>**Returns:** 
>[`@object`](std-docs/object)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `group` | [`@group`](std-docs/group) | |Group that will follow |
>| 2 | `speed` | [`@number`](std-docs/number) | `1` |Interpolation factor (?) |
>| 3 | `delay` | [`@number`](std-docs/number) | `0` |Delay of movement |
>| 4 | `offset` | [`@number`](std-docs/number) | `0` |Offset on the Y-axis |
>| 5 | `max_speed` | [`@number`](std-docs/number) | `0` |Maximum speed |
>| 6 | `duration` | [`@number`](std-docs/number) | `999` |Duration of following |
>

### follow\_trigger

>**Printed**
>
>```spwn
>(group: @group, other: @group, x_mod: @number = 1, y_mod: @number = 1, duration: @number = 999) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns a follow trigger as an object_
>
>**Example:**
>
>```spwn
>$.add( follow_trigger(10g,3g).with(obj_props.X,600) ) // Creates a follow trigger at X 600 that makes group 10 follow group 3
>```
>
>
>**Returns:** 
>[`@object`](std-docs/object)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `group` | [`@group`](std-docs/group) | |Group that will follow |
>| 2 | `other` | [`@group`](std-docs/group) | |Group of object to follow |
>| 3 | `x_mod` | [`@number`](std-docs/number) | `1` |Multiplier for the movement on the X-axis |
>| 4 | `y_mod` | [`@number`](std-docs/number) | `1` |Multiplier for the movement on the Y-axis |
>| 5 | `duration` | [`@number`](std-docs/number) | `999` |Duration of following |
>

### for\_loop

>**Printed**
>
>```spwn
>(range: @range, code: (_) -> @NULL, delay: (@number | @epsilon) = @epsilon::{}, reset: @bool = true) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of a spawn loop with a counter_
>
>**Example:**
>
>```spwn
>for_loop(0..10, (i) {
>    if i < 5 {
>        10g.move(-10, 0)
>    } else {
>        10g.move(10, 0)
>    }
>})
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `range` | [`@range`](std-docs/range) | |Range of values (for example 0..10) |
>| 2 | `code` | a `@macro` that returns `@NULL` and takes any as an argument | |Macro of the code that gets looped, should take the iterator (a counter) as the first argument. |
>| 3 | `delay` | [`@number`](std-docs/number) or `@epsilon` | `@epsilon::{}` |Delay between loops (less than 0.05 may be unstable) |
>| 4 | `reset` | `@bool` | `true` |Whether to reset the iterator after looping (only disable if the loop is only triggered once) |
>

### hex

>**Printed**
>
>```spwn
>(s: @string) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Creatss a new chroma from a hex string_
>
>**Example:**
>
>```spwn
>white = @chroma::from_hex('ffffff')
>black = @chroma::from_hex('#000000')
>semitransparent_gray = @chroma::from_hex('7f7f7fee')
>```
>
>
>**Returns:** 
>[`@chroma`](std-docs/chroma)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `s` | [`@string`](std-docs/string) | | |
>

### hide\_player

>**Printed**
>
>```spwn
>() { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Hides the player_
>
>**Example:**
>
>```spwn
>hide_player()
>```
>
>

### hsv

>**Printed**
>
>```spwn
>(h: @number, s: @number, v: @number, a: @number = 1) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Creatss a new chroma from hsv values (0-1)_
>
>**Example:**
>
>```spwn
>blue = @chroma::from_hsv(2/3, 1, 1)
>```
>
>
>**Returns:** 
>[`@chroma`](std-docs/chroma)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `h` | [`@number`](std-docs/number) | | |
>| 2 | `s` | [`@number`](std-docs/number) | | |
>| 3 | `v` | [`@number`](std-docs/number) | | |
>| 4 | `a` | [`@number`](std-docs/number) | `1` | |
>

### hsv2

>**Printed**
>
>```spwn
>(h: @number, s: @number, v: @number, a: @number = 100) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Creatss a new chroma from hsv values (0-360, 0-100, 0-100)_
>
>**Example:**
>
>```spwn
>yellow = @chroma::from_hsv2(60, 100, 100)
>```
>
>
>**Returns:** 
>[`@chroma`](std-docs/chroma)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `h` | [`@number`](std-docs/number) | | |
>| 2 | `s` | [`@number`](std-docs/number) | | |
>| 3 | `v` | [`@number`](std-docs/number) | | |
>| 4 | `a` | [`@number`](std-docs/number) | `100` | |
>

### lock\_to\_player\_trigger

>**Printed**
>
>```spwn
>(group: @group, lock_x: @bool = true, lock_y: @bool = true, duration: @number = 999) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns a move trigger that locks the group's position as an object_
>
>**Example:**
>
>```spwn
>$.add( lock_to_player_trigger(1g,lock_x = true,lock_y = false).with(obj_props.X,600) ) // Creates a move trigger at X 600 that locks group 1 to the player's X
>```
>
>
>**Returns:** 
>[`@object`](std-docs/object)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `group` | [`@group`](std-docs/group) | |Group to lock |
>| 2 | `lock_x` | `@bool` | `true` |Lock to player X |
>| 3 | `lock_y` | `@bool` | `true` |Lock to player Y |
>| 4 | `duration` | [`@number`](std-docs/number) | `999` |Duration of lock |
>

### move\_to\_trigger

>**Printed**
>
>```spwn
>(group: @group, target: @group, duration: @number = 0, x_only: @bool = false, y_only: @bool = false, easing: @easing_type = NONE, easing_rate: @number = 2) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns a move trigger that uses "move to" as an object_
>
>**Example:**
>
>```spwn
>$.add( move_to_trigger(10g,3g).with(obj_props.X,600) ) // Creates a move trigger at X 600 that moves group 10 to group 3
>```
>
>
>**Returns:** 
>[`@object`](std-docs/object)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `group` | [`@group`](std-docs/group) | |Group to move |
>| 2 | `target` | [`@group`](std-docs/group) | |Group of the object to move to |
>| 3 | `duration` | [`@number`](std-docs/number) | `0` |Duration of movement |
>| 4 | `x_only` | `@bool` | `false` |Will move to the object only on the X-axis |
>| 5 | `y_only` | `@bool` | `false` |Will move to the object only on the y-axis |
>| 6 | `easing` | [`@easing_type`](std-docs/easing_type) | `NONE` |Easing type |
>| 7 | `easing_rate` | [`@number`](std-docs/number) | `2` |Easing rate |
>

### move\_trigger

>**Printed**
>
>```spwn
>(group: @group, x: @number, y: @number, duration: @number = 0, easing: @easing_type = NONE, easing_rate: @number = 2) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns a move trigger as an object_
>
>**Example:**
>
>```spwn
>$.add( move_trigger(1g,10,0).with(obj_props.X,600) ) // Creates a move trigger at X 600 that moves group 1 a block to the right
>```
>
>
>**Returns:** 
>[`@object`](std-docs/object)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `group` | [`@group`](std-docs/group) | |Group to move |
>| 2 | `x` | [`@number`](std-docs/number) | |Units to move on the X axis |
>| 3 | `y` | [`@number`](std-docs/number) | |Units to move on the Y axis |
>| 4 | `duration` | [`@number`](std-docs/number) | `0` |Duration of movement |
>| 5 | `easing` | [`@easing_type`](std-docs/easing_type) | `NONE` | |
>| 6 | `easing_rate` | [`@number`](std-docs/number) | `2` | |
>

### on

>**Printed**
>
>```spwn
>(event: @event, function, suppress = true) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `event` | [`@event`](std-docs/event) | | |
>| 2 | `function` |any | | |
>| 3 | `suppress` |any | `true` | |
>

### pickup\_trigger

>**Printed**
>
>```spwn
>(item_id: @item, amount: @number) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns a pickup trigger as an object_
>
>**Example:**
>
>```spwn
>$.add( pickup_trigger(1i,3).with(obj_props.X,600) )
>```
>
>
>**Returns:** 
>[`@object`](std-docs/object)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `item_id` | [`@item`](std-docs/item) | |Item ID to modify |
>| 2 | `amount` | [`@number`](std-docs/number) | |Amount to add |
>

### pulse\_trigger

>**Printed**
>
>```spwn
>(target: (@group | @color), r: @number, g: @number, b: @number, fade_in: @number = 0, hold: @number = 0, fade_out: @number = 0, exclusive: @bool = false, hsv: @bool = false, s_checked: @bool = false, b_checked: @bool = false) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns a pulse trigger as an object_
>
>**Example:**
>
>```spwn
>extract obj_props
>$.add( pulse_trigger(10g,255,0,0,fade_out = 0.5).with(X,600) )
>$.add( pulse_trigger(10c,255,0,0,fade_out = 0.5).with(X,600) )
>```
>
>
>**Returns:** 
>[`@object`](std-docs/object)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `target` | [`@group`](std-docs/group) or [`@color`](std-docs/color) | |Target to pulse (group or color) |
>| 2 | `r` | [`@number`](std-docs/number) | |Red value of pulse color (or hue if HSV is enabled) |
>| 3 | `g` | [`@number`](std-docs/number) | |Green value of pulse color (or saturation if HSV is enabled) |
>| 4 | `b` | [`@number`](std-docs/number) | |Blue value of pulse color (or brightness/value if HSV is enabled) |
>| 5 | `fade_in` | [`@number`](std-docs/number) | `0` |Fade-in duration |
>| 6 | `hold` | [`@number`](std-docs/number) | `0` |Duration to hold the color |
>| 7 | `fade_out` | [`@number`](std-docs/number) | `0` |Fade-out duration |
>| 8 | `exclusive` | `@bool` | `false` |Whether to prioritize this pulse over simultaneous pulses |
>| 9 | `hsv` | `@bool` | `false` |Toggle HSV mode |
>| 10 | `s_checked` | `@bool` | `false` |HSV specific: saturation checked |
>| 11 | `b_checked` | `@bool` | `false` |HSV specific: brightness checked |
>

### rgb

>**Printed**
>
>```spwn
>(r: @number, g: @number, b: @number, a: @number = 1) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Creatss a new chroma from rgb values (0-1)_
>
>**Example:**
>
>```spwn
>orange = @chroma::from_rgb(1, 0.5, 0)
>```
>
>
>**Returns:** 
>[`@chroma`](std-docs/chroma)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `r` | [`@number`](std-docs/number) | | |
>| 2 | `g` | [`@number`](std-docs/number) | | |
>| 3 | `b` | [`@number`](std-docs/number) | | |
>| 4 | `a` | [`@number`](std-docs/number) | `1` | |
>

### rgb8

>**Printed**
>
>```spwn
>(r: @number, g: @number, b: @number, a: @number = 255) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Creatss a new chroma from 8-bit rgb values (0-255)_
>
>**Example:**
>
>```spwn
>cyan = @chroma::from_rgb8(0, 255, 255)
>```
>
>
>**Returns:** 
>[`@chroma`](std-docs/chroma)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `r` | [`@number`](std-docs/number) | | |
>| 2 | `g` | [`@number`](std-docs/number) | | |
>| 3 | `b` | [`@number`](std-docs/number) | | |
>| 4 | `a` | [`@number`](std-docs/number) | `255` | |
>

### rotate\_trigger

>**Printed**
>
>```spwn
>(group: @group, center: @group, degrees: @number, duration: @number = 0, easing: @easing_type = NONE, easing_rate: @number = 2, lock_object_rotation: @bool = false) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns a rotate trigger as an object_
>
>**Example:**
>
>```spwn
>$.add( rotate_trigger(10g,3g,90,duration = 5).with(obj_props.X,600) ) // Creates a rotate trigger at X 600 that rotates group 10 90 degrees around group 3 over 5 seconds
>```
>
>
>**Returns:** 
>[`@object`](std-docs/object)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `group` | [`@group`](std-docs/group) | |Group to rotate |
>| 2 | `center` | [`@group`](std-docs/group) | |Group of object to rotate around |
>| 3 | `degrees` | [`@number`](std-docs/number) | |Rotation in degrees |
>| 4 | `duration` | [`@number`](std-docs/number) | `0` |Duration of rotation |
>| 5 | `easing` | [`@easing_type`](std-docs/easing_type) | `NONE` |Easing type |
>| 6 | `easing_rate` | [`@number`](std-docs/number) | `2` |Easing rate |
>| 7 | `lock_object_rotation` | `@bool` | `false` |Only rotate positions of the objects, not the textures |
>

### shake

>**Printed**
>
>```spwn
>(strength: @number = 1, interval: @number = 0, duration: @number = 0.5) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the shake trigger_
>
>**Example:**
>
>```spwn
>shake()
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `strength` | [`@number`](std-docs/number) | `1` |Strength value |
>| 2 | `interval` | [`@number`](std-docs/number) | `0` |Interval value |
>| 3 | `duration` | [`@number`](std-docs/number) | `0.5` |Duration of shake |
>

### show\_player

>**Printed**
>
>```spwn
>() { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Shows the player_
>
>**Example:**
>
>```spwn
>show_player()
>```
>
>

### spawn\_trigger

>**Printed**
>
>```spwn
>(group: (@group | @trigger_function), time: (@number | @epsilon) = @epsilon::{}) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns a spawn trigger as an object_
>
>**Example:**
>
>```spwn
>$.add( spawn_trigger(5g,0.5).with(obj_props.X,600) )
>```
>
>
>**Returns:** 
>[`@object`](std-docs/object)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `group` | [`@group`](std-docs/group) or `@trigger\_function` | |Group to spawn |
>| 2 | `time` | [`@number`](std-docs/number) or `@epsilon` | `@epsilon::{}` |Delay |
>

### stop\_trigger

>**Printed**
>
>```spwn
>(group: @group) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns a stop trigger as an object_
>
>**Example:**
>
>```spwn
>$.add( stop_trigger(10g).with(obj_props.X,600) ) // Creates a stop trigger at X 600 that stops group 10
>```
>
>
>**Returns:** 
>[`@object`](std-docs/object)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `group` | [`@group`](std-docs/group) | |Group to stop |
>

### suppress\_signal

>**Printed**
>
>```spwn
>(delay: @number) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Stops signal from coming past for some time_
>
>**Example:**
>
>```spwn
>f = !{
>    suppress_signal(1)
>    10g.move(10, 0)
>}
>
>f! // moves
>wait(0.4)
>f! // does nothing
>wait(0.4)
>f! // does nothing
>wait(0.4)
>f! // moves
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `delay` | [`@number`](std-docs/number) | |Time to suppress signal |
>

### suppress\_signal\_forever

>**Printed**
>
>```spwn
>() { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Stops signal from coming past after call_
>
>**Example:**
>
>```spwn
>f = !{
>    suppress_signal_forever()
>    10g.move(10, 0)
>}
>f! // moves
>wait(0.4)
>f! // does nothing
>wait(1000)
>f! // does nothing
>```
>
>

### suppress\_signal\_until

>**Printed**
>
>```spwn
>(group: (@group | @trigger_function) = null) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Suppresses the signal until the desired group or trigger function is called_
>
>**Example:**
>
>```spwn
>func = !{
>    suppress_signal_until(5g)
>    @log::runtime::flash()
>}
>
>func! // does nothing
>5g!
>wait(0.4)
>func! // flashes
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `group` | [`@group`](std-docs/group) or `@trigger\_function` | `null` |Group or trigger function to call to stop suppression (default: current context) |
>

### toggle\_bg\_effect

>**Printed**
>
>```spwn
>(on: @bool = false) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the bg effect on/off triggers_
>
>**Example:**
>
>```spwn
>toggle_bg_effect(false)
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `on` | `@bool` | `false` |Whether to toggle bg effect on or off |
>

### toggle\_off\_trigger

>**Printed**
>
>```spwn
>(group: @group) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns a toggle off trigger as an object_
>
>**Example:**
>
>```spwn
>$.add( toggle_off_trigger(5g).with(obj_props.X,600) ) // Creates a toggle trigger at X 600 that turns off group 5
>```
>
>
>**Returns:** 
>[`@object`](std-docs/object)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `group` | [`@group`](std-docs/group) | |Group to toggle |
>

### toggle\_on\_trigger

>**Printed**
>
>```spwn
>(group: @group) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns a toggle on trigger as an object_
>
>**Example:**
>
>```spwn
>$.add( toggle_on_trigger(5g).with(obj_props.X,600) ) // Creates a toggle trigger at X 600 that turns on group 5
>```
>
>
>**Returns:** 
>[`@object`](std-docs/object)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `group` | [`@group`](std-docs/group) | |Group to toggle |
>

### touch

>**Printed**
>
>```spwn
>(dual_side: @bool = false) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the touch trigger (returns an event)_
>
>**Example:**
>
>```spwn
>on(touch(), !{
>    10g.move(10, 0)
>})
>```
>
>
>**Returns:** 
>[`@event`](std-docs/event)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `dual_side` | `@bool` | `false` |Dual mode (only check for touch on the dual side) |
>

### touch\_end

>**Printed**
>
>```spwn
>(dual_side: @bool = false) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns an event for when a touch ends_
>
>**Example:**
>
>```spwn
>on(touch_end(), !{
>    10g.move(10, 0)
>})
>```
>
>
>**Returns:** 
>[`@event`](std-docs/event)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `dual_side` | `@bool` | `false` |Dual mode (only check for touch on the dual side) |
>

### wait

>**Printed**
>
>```spwn
>(time: (@number | @epsilon) = @epsilon::{}) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Adds a delay before the next triggers_
>
>**Example:**
>
>```spwn
>BG.set(rgb8(255, 0, 0)) // turn background red
>wait(2) // wait 2 seconds
>BG.set(rgb8(0, 255, 0)) // turn background green
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `time` | [`@number`](std-docs/number) or `@epsilon` | `@epsilon::{}` |Delay time in seconds (leave empty for minimum delay) |
>

### while\_loop

>**Printed**
>
>```spwn
>(expr: () -> @bool, code: () -> @NULL, delay: (@number | @epsilon) = @epsilon::{}) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of a conditional spawn loop_
>
>**Example:**
>
>```spwn
>c = counter(11)
>
>while_loop(() => c > 4, () {
>    c -= 2
>})
>
>// c is now 3
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `expr` | a `@macro` that returns `@bool` and takes  as arguments | |While loop condition, should return a boolean |
>| 2 | `code` | a `@macro` that returns `@NULL` and takes  as arguments | |Macro of the code that gets looped |
>| 3 | `delay` | [`@number`](std-docs/number) or `@epsilon` | `@epsilon::{}` |Delay between loops (less than 0.05 may be unstable) |
>

## Values

### BACK\_IN

>**Printed**
>
>```spwn
>BACK_IN
>```
>
>**Type:** [`@easing_type`](std-docs/easing_type)
>
>## Values
>
>### id
>
>>**Printed**
>>
>>```spwn
>>17
>>```
>>
>>**Type:** [`@number`](std-docs/number)
>>
>
>### type
>
>>**Printed**
>>
>>```spwn
>>@easing_type
>>```
>>
>>**Type:** `@type_indicator`
>>
>

### BACK\_IN\_OUT

>**Printed**
>
>```spwn
>BACK_IN_OUT
>```
>
>**Type:** [`@easing_type`](std-docs/easing_type)
>
>## Values
>
>### id
>
>>**Printed**
>>
>>```spwn
>>16
>>```
>>
>>**Type:** [`@number`](std-docs/number)
>>
>
>### type
>
>>**Printed**
>>
>>```spwn
>>@easing_type
>>```
>>
>>**Type:** `@type_indicator`
>>
>

### BACK\_OUT

>**Printed**
>
>```spwn
>BACK_OUT
>```
>
>**Type:** [`@easing_type`](std-docs/easing_type)
>
>## Values
>
>### id
>
>>**Printed**
>>
>>```spwn
>>18
>>```
>>
>>**Type:** [`@number`](std-docs/number)
>>
>
>### type
>
>>**Printed**
>>
>>```spwn
>>@easing_type
>>```
>>
>>**Type:** `@type_indicator`
>>
>

### BG

>**Printed**
>
>```spwn
>1000c
>```
>
>**Type:** [`@color`](std-docs/color)
>

### BOUNCE\_IN

>**Printed**
>
>```spwn
>BOUNCE_IN
>```
>
>**Type:** [`@easing_type`](std-docs/easing_type)
>
>## Values
>
>### id
>
>>**Printed**
>>
>>```spwn
>>8
>>```
>>
>>**Type:** [`@number`](std-docs/number)
>>
>
>### type
>
>>**Printed**
>>
>>```spwn
>>@easing_type
>>```
>>
>>**Type:** `@type_indicator`
>>
>

### BOUNCE\_IN\_OUT

>**Printed**
>
>```spwn
>BOUNCE_IN_OUT
>```
>
>**Type:** [`@easing_type`](std-docs/easing_type)
>
>## Values
>
>### id
>
>>**Printed**
>>
>>```spwn
>>7
>>```
>>
>>**Type:** [`@number`](std-docs/number)
>>
>
>### type
>
>>**Printed**
>>
>>```spwn
>>@easing_type
>>```
>>
>>**Type:** `@type_indicator`
>>
>

### BOUNCE\_OUT

>**Printed**
>
>```spwn
>BOUNCE_OUT
>```
>
>**Type:** [`@easing_type`](std-docs/easing_type)
>
>## Values
>
>### id
>
>>**Printed**
>>
>>```spwn
>>9
>>```
>>
>>**Type:** [`@number`](std-docs/number)
>>
>
>### type
>
>>**Printed**
>>
>>```spwn
>>@easing_type
>>```
>>
>>**Type:** `@type_indicator`
>>
>

### EASE\_IN

>**Printed**
>
>```spwn
>EASE_IN
>```
>
>**Type:** [`@easing_type`](std-docs/easing_type)
>
>## Values
>
>### id
>
>>**Printed**
>>
>>```spwn
>>2
>>```
>>
>>**Type:** [`@number`](std-docs/number)
>>
>
>### type
>
>>**Printed**
>>
>>```spwn
>>@easing_type
>>```
>>
>>**Type:** `@type_indicator`
>>
>

### EASE\_IN\_OUT

>**Printed**
>
>```spwn
>EASE_IN_OUT
>```
>
>**Type:** [`@easing_type`](std-docs/easing_type)
>
>## Values
>
>### id
>
>>**Printed**
>>
>>```spwn
>>1
>>```
>>
>>**Type:** [`@number`](std-docs/number)
>>
>
>### type
>
>>**Printed**
>>
>>```spwn
>>@easing_type
>>```
>>
>>**Type:** `@type_indicator`
>>
>

### EASE\_OUT

>**Printed**
>
>```spwn
>EASE_OUT
>```
>
>**Type:** [`@easing_type`](std-docs/easing_type)
>
>## Values
>
>### id
>
>>**Printed**
>>
>>```spwn
>>3
>>```
>>
>>**Type:** [`@number`](std-docs/number)
>>
>
>### type
>
>>**Printed**
>>
>>```spwn
>>@easing_type
>>```
>>
>>**Type:** `@type_indicator`
>>
>

### ELASTIC\_IN

>**Printed**
>
>```spwn
>ELASTIC_IN
>```
>
>**Type:** [`@easing_type`](std-docs/easing_type)
>
>## Values
>
>### id
>
>>**Printed**
>>
>>```spwn
>>5
>>```
>>
>>**Type:** [`@number`](std-docs/number)
>>
>
>### type
>
>>**Printed**
>>
>>```spwn
>>@easing_type
>>```
>>
>>**Type:** `@type_indicator`
>>
>

### ELASTIC\_IN\_OUT

>**Printed**
>
>```spwn
>ELASTIC_IN_OUT
>```
>
>**Type:** [`@easing_type`](std-docs/easing_type)
>
>## Values
>
>### id
>
>>**Printed**
>>
>>```spwn
>>4
>>```
>>
>>**Type:** [`@number`](std-docs/number)
>>
>
>### type
>
>>**Printed**
>>
>>```spwn
>>@easing_type
>>```
>>
>>**Type:** `@type_indicator`
>>
>

### ELASTIC\_OUT

>**Printed**
>
>```spwn
>ELASTIC_OUT
>```
>
>**Type:** [`@easing_type`](std-docs/easing_type)
>
>## Values
>
>### id
>
>>**Printed**
>>
>>```spwn
>>6
>>```
>>
>>**Type:** [`@number`](std-docs/number)
>>
>
>### type
>
>>**Printed**
>>
>>```spwn
>>@easing_type
>>```
>>
>>**Type:** `@type_indicator`
>>
>

### EQUAL\_TO

>**Printed**
>
>```spwn
>EQUAL_TO
>```
>
>**Type:** [`@comparison`](std-docs/comparison)
>
>## Values
>
>### id
>
>>**Printed**
>>
>>```spwn
>>0
>>```
>>
>>**Type:** [`@number`](std-docs/number)
>>
>
>### type
>
>>**Printed**
>>
>>```spwn
>>@comparison
>>```
>>
>>**Type:** `@type_indicator`
>>
>

### EULER

>**Printed**
>
>```spwn
>2.718281828459045
>```
>
>**Type:** [`@number`](std-docs/number)
>

### EXPONENTIAL\_IN

>**Printed**
>
>```spwn
>EXPONENTIAL_IN
>```
>
>**Type:** [`@easing_type`](std-docs/easing_type)
>
>## Values
>
>### id
>
>>**Printed**
>>
>>```spwn
>>11
>>```
>>
>>**Type:** [`@number`](std-docs/number)
>>
>
>### type
>
>>**Printed**
>>
>>```spwn
>>@easing_type
>>```
>>
>>**Type:** `@type_indicator`
>>
>

### EXPONENTIAL\_IN\_OUT

>**Printed**
>
>```spwn
>EXPONENTIAL_IN_OUT
>```
>
>**Type:** [`@easing_type`](std-docs/easing_type)
>
>## Values
>
>### id
>
>>**Printed**
>>
>>```spwn
>>10
>>```
>>
>>**Type:** [`@number`](std-docs/number)
>>
>
>### type
>
>>**Printed**
>>
>>```spwn
>>@easing_type
>>```
>>
>>**Type:** `@type_indicator`
>>
>

### EXPONENTIAL\_OUT

>**Printed**
>
>```spwn
>EXPONENTIAL_OUT
>```
>
>**Type:** [`@easing_type`](std-docs/easing_type)
>
>## Values
>
>### id
>
>>**Printed**
>>
>>```spwn
>>12
>>```
>>
>>**Type:** [`@number`](std-docs/number)
>>
>
>### type
>
>>**Printed**
>>
>>```spwn
>>@easing_type
>>```
>>
>>**Type:** `@type_indicator`
>>
>

### GROUND

>**Printed**
>
>```spwn
>1001c
>```
>
>**Type:** [`@color`](std-docs/color)
>

### GROUND2

>**Printed**
>
>```spwn
>1009c
>```
>
>**Type:** [`@color`](std-docs/color)
>

### LARGER\_THAN

>**Printed**
>
>```spwn
>LARGER_THAN
>```
>
>**Type:** [`@comparison`](std-docs/comparison)
>
>## Values
>
>### id
>
>>**Printed**
>>
>>```spwn
>>1
>>```
>>
>>**Type:** [`@number`](std-docs/number)
>>
>
>### type
>
>>**Printed**
>>
>>```spwn
>>@comparison
>>```
>>
>>**Type:** `@type_indicator`
>>
>

### LINE

>**Printed**
>
>```spwn
>1002c
>```
>
>**Type:** [`@color`](std-docs/color)
>

### NONE

>**Printed**
>
>```spwn
>NONE
>```
>
>**Type:** [`@easing_type`](std-docs/easing_type)
>
>## Values
>
>### id
>
>>**Printed**
>>
>>```spwn
>>0
>>```
>>
>>**Type:** [`@number`](std-docs/number)
>>
>
>### type
>
>>**Printed**
>>
>>```spwn
>>@easing_type
>>```
>>
>>**Type:** `@type_indicator`
>>
>

### OBJECT

>**Printed**
>
>```spwn
>1004c
>```
>
>**Type:** [`@color`](std-docs/color)
>

### PI

>**Printed**
>
>```spwn
>3.141592653589793
>```
>
>**Type:** [`@number`](std-docs/number)
>

### SINE\_IN

>**Printed**
>
>```spwn
>SINE_IN
>```
>
>**Type:** [`@easing_type`](std-docs/easing_type)
>
>## Values
>
>### id
>
>>**Printed**
>>
>>```spwn
>>14
>>```
>>
>>**Type:** [`@number`](std-docs/number)
>>
>
>### type
>
>>**Printed**
>>
>>```spwn
>>@easing_type
>>```
>>
>>**Type:** `@type_indicator`
>>
>

### SINE\_IN\_OUT

>**Printed**
>
>```spwn
>SINE_IN_OUT
>```
>
>**Type:** [`@easing_type`](std-docs/easing_type)
>
>## Values
>
>### id
>
>>**Printed**
>>
>>```spwn
>>13
>>```
>>
>>**Type:** [`@number`](std-docs/number)
>>
>
>### type
>
>>**Printed**
>>
>>```spwn
>>@easing_type
>>```
>>
>>**Type:** `@type_indicator`
>>
>

### SINE\_OUT

>**Printed**
>
>```spwn
>SINE_OUT
>```
>
>**Type:** [`@easing_type`](std-docs/easing_type)
>
>## Values
>
>### id
>
>>**Printed**
>>
>>```spwn
>>15
>>```
>>
>>**Type:** [`@number`](std-docs/number)
>>
>
>### type
>
>>**Printed**
>>
>>```spwn
>>@easing_type
>>```
>>
>>**Type:** `@type_indicator`
>>
>

### SMALLER\_THAN

>**Printed**
>
>```spwn
>SMALLER_THAN
>```
>
>**Type:** [`@comparison`](std-docs/comparison)
>
>## Values
>
>### id
>
>>**Printed**
>>
>>```spwn
>>2
>>```
>>
>>**Type:** [`@number`](std-docs/number)
>>
>
>### type
>
>>**Printed**
>>
>>```spwn
>>@comparison
>>```
>>
>>**Type:** `@type_indicator`
>>
>

### \_3DLINE

>**Printed**
>
>```spwn
>1003c
>```
>
>**Type:** [`@color`](std-docs/color)
>

### blend\_modes

>**Type:** [`@dictionary`](std-docs/dictionary)
>
>## Values
>
>### add
>
>>**Printed**
>>
>>```spwn
>>@blend_mode::{func: (b, o) { /* ... */ }}
>>```
>>
>>**Type:** `@blend_mode`
>>
>>## Macros
>>
>>### func
>>
>>>**Printed**
>>>
>>>```spwn
>>>(b, o) { /* ... */ }
>>>```
>>>
>>>**Type:** `@macro`
>>>
>>>**Arguments:**
>>>
>>>| # | name | type | default value | description |
>>>| - | ---- | ---- | ------------- | ----------- |
>>>| 1 | `b` |any | | |
>>>| 2 | `o` |any | | |
>>>
>>
>>## Values
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@blend_mode
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### color\_burn
>
>>**Printed**
>>
>>```spwn
>>@blend_mode::{func: (b, o) { /* ... */ }}
>>```
>>
>>**Type:** `@blend_mode`
>>
>>## Macros
>>
>>### func
>>
>>>**Printed**
>>>
>>>```spwn
>>>(b, o) { /* ... */ }
>>>```
>>>
>>>**Type:** `@macro`
>>>
>>>**Arguments:**
>>>
>>>| # | name | type | default value | description |
>>>| - | ---- | ---- | ------------- | ----------- |
>>>| 1 | `b` |any | | |
>>>| 2 | `o` |any | | |
>>>
>>
>>## Values
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@blend_mode
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### color\_dodge
>
>>**Printed**
>>
>>```spwn
>>@blend_mode::{func: (b, o) { /* ... */ }}
>>```
>>
>>**Type:** `@blend_mode`
>>
>>## Macros
>>
>>### func
>>
>>>**Printed**
>>>
>>>```spwn
>>>(b, o) { /* ... */ }
>>>```
>>>
>>>**Type:** `@macro`
>>>
>>>**Arguments:**
>>>
>>>| # | name | type | default value | description |
>>>| - | ---- | ---- | ------------- | ----------- |
>>>| 1 | `b` |any | | |
>>>| 2 | `o` |any | | |
>>>
>>
>>## Values
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@blend_mode
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### darken
>
>>**Printed**
>>
>>```spwn
>>@blend_mode::{func: (b, o) { /* ... */ }}
>>```
>>
>>**Type:** `@blend_mode`
>>
>>## Macros
>>
>>### func
>>
>>>**Printed**
>>>
>>>```spwn
>>>(b, o) { /* ... */ }
>>>```
>>>
>>>**Type:** `@macro`
>>>
>>>**Arguments:**
>>>
>>>| # | name | type | default value | description |
>>>| - | ---- | ---- | ------------- | ----------- |
>>>| 1 | `b` |any | | |
>>>| 2 | `o` |any | | |
>>>
>>
>>## Values
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@blend_mode
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### difference
>
>>**Printed**
>>
>>```spwn
>>@blend_mode::{func: (b, o) { /* ... */ }}
>>```
>>
>>**Type:** `@blend_mode`
>>
>>## Macros
>>
>>### func
>>
>>>**Printed**
>>>
>>>```spwn
>>>(b, o) { /* ... */ }
>>>```
>>>
>>>**Type:** `@macro`
>>>
>>>**Arguments:**
>>>
>>>| # | name | type | default value | description |
>>>| - | ---- | ---- | ------------- | ----------- |
>>>| 1 | `b` |any | | |
>>>| 2 | `o` |any | | |
>>>
>>
>>## Values
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@blend_mode
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### lighten
>
>>**Printed**
>>
>>```spwn
>>@blend_mode::{func: (b, o) { /* ... */ }}
>>```
>>
>>**Type:** `@blend_mode`
>>
>>## Macros
>>
>>### func
>>
>>>**Printed**
>>>
>>>```spwn
>>>(b, o) { /* ... */ }
>>>```
>>>
>>>**Type:** `@macro`
>>>
>>>**Arguments:**
>>>
>>>| # | name | type | default value | description |
>>>| - | ---- | ---- | ------------- | ----------- |
>>>| 1 | `b` |any | | |
>>>| 2 | `o` |any | | |
>>>
>>
>>## Values
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@blend_mode
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### linear\_burn
>
>>**Printed**
>>
>>```spwn
>>@blend_mode::{func: (b, o) { /* ... */ }}
>>```
>>
>>**Type:** `@blend_mode`
>>
>>## Macros
>>
>>### func
>>
>>>**Printed**
>>>
>>>```spwn
>>>(b, o) { /* ... */ }
>>>```
>>>
>>>**Type:** `@macro`
>>>
>>>**Arguments:**
>>>
>>>| # | name | type | default value | description |
>>>| - | ---- | ---- | ------------- | ----------- |
>>>| 1 | `b` |any | | |
>>>| 2 | `o` |any | | |
>>>
>>
>>## Values
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@blend_mode
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### multiply
>
>>**Printed**
>>
>>```spwn
>>@blend_mode::{func: (b, o) { /* ... */ }}
>>```
>>
>>**Type:** `@blend_mode`
>>
>>## Macros
>>
>>### func
>>
>>>**Printed**
>>>
>>>```spwn
>>>(b, o) { /* ... */ }
>>>```
>>>
>>>**Type:** `@macro`
>>>
>>>**Arguments:**
>>>
>>>| # | name | type | default value | description |
>>>| - | ---- | ---- | ------------- | ----------- |
>>>| 1 | `b` |any | | |
>>>| 2 | `o` |any | | |
>>>
>>
>>## Values
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@blend_mode
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### normal
>
>>**Printed**
>>
>>```spwn
>>@blend_mode::{func: (b, o) { /* ... */ }}
>>```
>>
>>**Type:** `@blend_mode`
>>
>>## Macros
>>
>>### func
>>
>>>**Printed**
>>>
>>>```spwn
>>>(b, o) { /* ... */ }
>>>```
>>>
>>>**Type:** `@macro`
>>>
>>>**Arguments:**
>>>
>>>| # | name | type | default value | description |
>>>| - | ---- | ---- | ------------- | ----------- |
>>>| 1 | `b` |any | | |
>>>| 2 | `o` |any | | |
>>>
>>
>>## Values
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@blend_mode
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### overlay
>
>>**Printed**
>>
>>```spwn
>>@blend_mode::{func: (b, o) { /* ... */ }}
>>```
>>
>>**Type:** `@blend_mode`
>>
>>## Macros
>>
>>### func
>>
>>>**Printed**
>>>
>>>```spwn
>>>(b, o) { /* ... */ }
>>>```
>>>
>>>**Type:** `@macro`
>>>
>>>**Arguments:**
>>>
>>>| # | name | type | default value | description |
>>>| - | ---- | ---- | ------------- | ----------- |
>>>| 1 | `b` |any | | |
>>>| 2 | `o` |any | | |
>>>
>>
>>## Values
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@blend_mode
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### screen
>
>>**Printed**
>>
>>```spwn
>>@blend_mode::{func: (b, o) { /* ... */ }}
>>```
>>
>>**Type:** `@blend_mode`
>>
>>## Macros
>>
>>### func
>>
>>>**Printed**
>>>
>>>```spwn
>>>(b, o) { /* ... */ }
>>>```
>>>
>>>**Type:** `@macro`
>>>
>>>**Arguments:**
>>>
>>>| # | name | type | default value | description |
>>>| - | ---- | ---- | ------------- | ----------- |
>>>| 1 | `b` |any | | |
>>>| 2 | `o` |any | | |
>>>
>>
>>## Values
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@blend_mode
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### subtract
>
>>**Printed**
>>
>>```spwn
>>@blend_mode::{func: (b, o) { /* ... */ }}
>>```
>>
>>**Type:** `@blend_mode`
>>
>>## Macros
>>
>>### func
>>
>>>**Printed**
>>>
>>>```spwn
>>>(b, o) { /* ... */ }
>>>```
>>>
>>>**Type:** `@macro`
>>>
>>>**Arguments:**
>>>
>>>| # | name | type | default value | description |
>>>| - | ---- | ---- | ------------- | ----------- |
>>>| 1 | `b` |any | | |
>>>| 2 | `o` |any | | |
>>>
>>
>>## Values
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@blend_mode
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>

### level

>**Printed**
>
>```spwn
>{get_objects: (prop: @object_key, pat: (@pattern | (_) -> @bool)) { /* ... */ }, get_marker: (text: @string) { /* ... */ }, objects: []}
>```
>
>**Type:** [`@dictionary`](std-docs/dictionary)
>
>## Macros
>
>### get\_marker
>
>>**Printed**
>>
>>```spwn
>>(text: @string) { /* ... */ }
>>```
>>
>>**Type:** `@macro`
>>
>>**Description:**
>>
>>_Returns the first text object found with the given text, or null if none are found_
>>
>>**Example:**
>>
>>```spwn
>>extract obj_props
>>
>>thing_marker = level.get_marker("thing marker")
>>$.add( move_trigger(1g,10,0).with(X, thing_marker[X] ) )
>>```
>>
>>
>>**Returns:** 
>>[`@object`](std-docs/object) or `@NULL`
>>
>>**Arguments:**
>>
>>| # | name | type | default value | description |
>>| - | ---- | ---- | ------------- | ----------- |
>>| 1 | `text` | [`@string`](std-docs/string) | | |
>>
>
>### get\_objects
>
>>**Printed**
>>
>>```spwn
>>(prop: @object_key, pat: (@pattern | (_) -> @bool)) { /* ... */ }
>>```
>>
>>**Type:** `@macro`
>>
>>**Description:**
>>
>>_Returns an array of all the objects in the level with a property whose value matches the pattern or macro_
>>
>>**Example:**
>>
>>```spwn
>>objects_over_x_50 = level.get_objects(obj_props.X, >50)
>>objects_with_group_2 = level.get_objects(obj_props.GROUPS, g => 2g in g)
>>```
>>
>>
>>**Returns:** 
>>[@object]
>>
>>**Arguments:**
>>
>>| # | name | type | default value | description |
>>| - | ---- | ---- | ------------- | ----------- |
>>| 1 | `prop` | [`@object_key`](std-docs/object_key) | | |
>>| 2 | `pat` | `@pattern` or a `@macro` that returns `@bool` and takes any as an argument | | |
>>
>
>## Values
>
>### objects
>
>>**Printed**
>>
>>```spwn
>>[]
>>```
>>
>>**Type:** [`@array`](std-docs/array)
>>
>

### obj\_ids

>**Type:** [`@dictionary`](std-docs/dictionary)
>
>## Values
>
>### portals
>
>>**Printed**
>>
>>```spwn
>>{TELEPORT: 747, SIZE_NORMAL: 99, DUAL_OFF: 287, MIRROR_OFF: 46, SHIP: 13, GRAVITY_UP: 11, DUAL_ON: 286, BALL: 47, UFO: 111, SPIDER: 1331, GRAVITY_DOWN: 10, ... (9 more)}
>>```
>>
>>**Type:** [`@dictionary`](std-docs/dictionary)
>>
>>## Values
>>
>>### BALL
>>
>>>**Printed**
>>>
>>>```spwn
>>>47
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### CUBE
>>
>>>**Printed**
>>>
>>>```spwn
>>>12
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### DUAL\_OFF
>>
>>>**Printed**
>>>
>>>```spwn
>>>287
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### DUAL\_ON
>>
>>>**Printed**
>>>
>>>```spwn
>>>286
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### GRAVITY\_DOWN
>>
>>>**Printed**
>>>
>>>```spwn
>>>10
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### GRAVITY\_UP
>>
>>>**Printed**
>>>
>>>```spwn
>>>11
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### MIRROR\_OFF
>>
>>>**Printed**
>>>
>>>```spwn
>>>46
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### MIRROR\_ON
>>
>>>**Printed**
>>>
>>>```spwn
>>>45
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### ROBOT
>>
>>>**Printed**
>>>
>>>```spwn
>>>745
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### SHIP
>>
>>>**Printed**
>>>
>>>```spwn
>>>13
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### SIZE\_MINI
>>
>>>**Printed**
>>>
>>>```spwn
>>>101
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### SIZE\_NORMAL
>>
>>>**Printed**
>>>
>>>```spwn
>>>99
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### SPEED\_BLUE
>>
>>>**Printed**
>>>
>>>```spwn
>>>201
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### SPEED\_GREEN
>>
>>>**Printed**
>>>
>>>```spwn
>>>202
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### SPEED\_PINK
>>
>>>**Printed**
>>>
>>>```spwn
>>>203
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### SPEED\_RED
>>
>>>**Printed**
>>>
>>>```spwn
>>>1334
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### SPEED\_YELLOW
>>
>>>**Printed**
>>>
>>>```spwn
>>>200
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### SPIDER
>>
>>>**Printed**
>>>
>>>```spwn
>>>1331
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### TELEPORT
>>
>>>**Printed**
>>>
>>>```spwn
>>>747
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### UFO
>>
>>>**Printed**
>>>
>>>```spwn
>>>111
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### WAVE
>>
>>>**Printed**
>>>
>>>```spwn
>>>660
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>
>### special
>
>>**Printed**
>>
>>```spwn
>>{ITEM_DISPLAY: 1615, D_BLOCK: 1755, S_BLOCK: 1829, USER_COIN: 1329, COLLISION_BLOCK: 1816, TEXT: 914, J_BLOCK: 1813, H_BLOCK: 1859}
>>```
>>
>>**Type:** [`@dictionary`](std-docs/dictionary)
>>
>>## Values
>>
>>### COLLISION\_BLOCK
>>
>>>**Printed**
>>>
>>>```spwn
>>>1816
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### D\_BLOCK
>>
>>>**Printed**
>>>
>>>```spwn
>>>1755
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### H\_BLOCK
>>
>>>**Printed**
>>>
>>>```spwn
>>>1859
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### ITEM\_DISPLAY
>>
>>>**Printed**
>>>
>>>```spwn
>>>1615
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### J\_BLOCK
>>
>>>**Printed**
>>>
>>>```spwn
>>>1813
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### S\_BLOCK
>>
>>>**Printed**
>>>
>>>```spwn
>>>1829
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### TEXT
>>
>>>**Printed**
>>>
>>>```spwn
>>>914
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### USER\_COIN
>>
>>>**Printed**
>>>
>>>```spwn
>>>1329
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>
>### triggers
>
>>**Printed**
>>
>>```spwn
>>{ON_DEATH: 1812, COUNT: 1611, ALPHA: 1007, FOLLOW: 1347, SPAWN: 1268, PULSE: 1006, INSTANT_COUNT: 1811, ENABLE_TRAIL: 32, TOUCH: 1595, BG_EFFECT_OFF: 1819, COLOR: 899, ... (12 more)}
>>```
>>
>>**Type:** [`@dictionary`](std-docs/dictionary)
>>
>>## Values
>>
>>### ALPHA
>>
>>>**Printed**
>>>
>>>```spwn
>>>1007
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### ANIMATE
>>
>>>**Printed**
>>>
>>>```spwn
>>>1585
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### BG\_EFFECT\_OFF
>>
>>>**Printed**
>>>
>>>```spwn
>>>1819
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### BG\_EFFECT\_ON
>>
>>>**Printed**
>>>
>>>```spwn
>>>1818
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### COLLISION
>>
>>>**Printed**
>>>
>>>```spwn
>>>1815
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### COLOR
>>
>>>**Printed**
>>>
>>>```spwn
>>>899
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### COUNT
>>
>>>**Printed**
>>>
>>>```spwn
>>>1611
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### DISABLE\_TRAIL
>>
>>>**Printed**
>>>
>>>```spwn
>>>33
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### ENABLE\_TRAIL
>>
>>>**Printed**
>>>
>>>```spwn
>>>32
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### FOLLOW
>>
>>>**Printed**
>>>
>>>```spwn
>>>1347
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### FOLLOW\_PLAYER\_Y
>>
>>>**Printed**
>>>
>>>```spwn
>>>1814
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### HIDE
>>
>>>**Printed**
>>>
>>>```spwn
>>>1612
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### INSTANT\_COUNT
>>
>>>**Printed**
>>>
>>>```spwn
>>>1811
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### MOVE
>>
>>>**Printed**
>>>
>>>```spwn
>>>901
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### ON\_DEATH
>>
>>>**Printed**
>>>
>>>```spwn
>>>1812
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### PICKUP
>>
>>>**Printed**
>>>
>>>```spwn
>>>1817
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### PULSE
>>
>>>**Printed**
>>>
>>>```spwn
>>>1006
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### ROTATE
>>
>>>**Printed**
>>>
>>>```spwn
>>>1346
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### SHAKE
>>
>>>**Printed**
>>>
>>>```spwn
>>>1520
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### SHOW
>>
>>>**Printed**
>>>
>>>```spwn
>>>1613
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### SPAWN
>>
>>>**Printed**
>>>
>>>```spwn
>>>1268
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### STOP
>>
>>>**Printed**
>>>
>>>```spwn
>>>1616
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### TOGGLE
>>
>>>**Printed**
>>>
>>>```spwn
>>>1049
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### TOUCH
>>
>>>**Printed**
>>>
>>>```spwn
>>>1595
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>

### obj\_props

>**Printed**
>
>```spwn
>{EASING: EASING, TARGET_POS_AXES: TARGET_POS_AXES, SUBTRACT_COUNT: SUBTRACT_COUNT, OPACITY: OPACITY, STRENGTH: STRENGTH, COMPARISON: COMPARISON, FOLLOW: FOLLOW, COUNT: COUNT, Z_ORDER: Z_ORDER, LOCK_TO_PLAYER_X: LOCK_TO_PLAYER_X, TRIGGER_BLUE: TRIGGER_BLUE, ... (83 more)}
>```
>
>**Type:** [`@dictionary`](std-docs/dictionary)
>
>## Values
>
>### ACTIVATE\_GROUP
>
>>**Printed**
>>
>>```spwn
>>ACTIVATE_GROUP
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>56
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'ACTIVATE_GROUP'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### ACTIVATE\_ON\_EXIT
>
>>**Printed**
>>
>>```spwn
>>ACTIVATE_ON_EXIT
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>93
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'ACTIVATE_ON_EXIT'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### ACTIVE\_TRIGGER
>
>>**Printed**
>>
>>```spwn
>>ACTIVE_TRIGGER
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>36
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'ACTIVE_TRIGGER'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### ANIMATION\_ID
>
>>**Printed**
>>
>>```spwn
>>ANIMATION_ID
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>76
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'ANIMATION_ID'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### ANIMATION\_SPEED
>
>>**Printed**
>>
>>```spwn
>>ANIMATION_SPEED
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>107
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'ANIMATION_SPEED'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### BLENDING
>
>>**Printed**
>>
>>```spwn
>>BLENDING
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>17
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'BLENDING'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### BLOCK\_A
>
>>**Printed**
>>
>>```spwn
>>BLOCK_A
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>80
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'BLOCK_A'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@block
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### BLOCK\_B
>
>>**Printed**
>>
>>```spwn
>>BLOCK_B
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>95
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'BLOCK_B'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@block
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### CENTER
>
>>**Printed**
>>
>>```spwn
>>CENTER
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>71
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'CENTER'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@group
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### COLOR
>
>>**Printed**
>>
>>```spwn
>>COLOR
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>21
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'COLOR'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@color
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### COLOR\_2
>
>>**Printed**
>>
>>```spwn
>>COLOR_2
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>22
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'COLOR_2'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@color
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### COLOR\_2\_HVS
>
>>**Printed**
>>
>>```spwn
>>COLOR_2_HVS
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>44
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'COLOR_2_HVS'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@string
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### COLOR\_2\_HVS\_ENABLED
>
>>**Printed**
>>
>>```spwn
>>COLOR_2_HVS_ENABLED
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>42
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'COLOR_2_HVS_ENABLED'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### COMPARISON
>
>>**Printed**
>>
>>```spwn
>>COMPARISON
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>88
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'COMPARISON'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### COPIED\_COLOR\_HVS
>
>>**Printed**
>>
>>```spwn
>>COPIED_COLOR_HVS
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>49
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'COPIED_COLOR_HVS'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@string
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### COPIED\_COLOR\_ID
>
>>**Printed**
>>
>>```spwn
>>COPIED_COLOR_ID
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>50
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'COPIED_COLOR_ID'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@color
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### COPY\_OPACITY
>
>>**Printed**
>>
>>```spwn
>>COPY_OPACITY
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>60
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'COPY_OPACITY'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### COUNT
>
>>**Printed**
>>
>>```spwn
>>COUNT
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>77
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'COUNT'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### COUNT\_MULTI\_ACTIVATE
>
>>**Printed**
>>
>>```spwn
>>COUNT_MULTI_ACTIVATE
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>104
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'COUNT_MULTI_ACTIVATE'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### DELAY
>
>>**Printed**
>>
>>```spwn
>>DELAY
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>91
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'DELAY'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### DETAIL\_ONLY
>
>>**Printed**
>>
>>```spwn
>>DETAIL_ONLY
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>66
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'DETAIL_ONLY'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### DISABLE\_ROTATION
>
>>**Printed**
>>
>>```spwn
>>DISABLE_ROTATION
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>98
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'DISABLE_ROTATION'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### DONT\_ENTER
>
>>**Printed**
>>
>>```spwn
>>DONT_ENTER
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>67
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'DONT_ENTER'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### DONT\_FADE
>
>>**Printed**
>>
>>```spwn
>>DONT_FADE
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>64
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'DONT_FADE'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### DUAL\_MODE
>
>>**Printed**
>>
>>```spwn
>>DUAL_MODE
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>89
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'DUAL_MODE'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### DURATION
>
>>**Printed**
>>
>>```spwn
>>DURATION
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>10
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'DURATION'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### DYNAMIC\_BLOCK
>
>>**Printed**
>>
>>```spwn
>>DYNAMIC_BLOCK
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>94
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'DYNAMIC_BLOCK'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### EASING
>
>>**Printed**
>>
>>```spwn
>>EASING
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>30
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'EASING'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### EASING\_RATE
>
>>**Printed**
>>
>>```spwn
>>EASING_RATE
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>85
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'EASING_RATE'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### EDITOR\_DISABLE
>
>>**Printed**
>>
>>```spwn
>>EDITOR_DISABLE
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>102
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'EDITOR_DISABLE'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### EDITOR\_LAYER\_1
>
>>**Printed**
>>
>>```spwn
>>EDITOR_LAYER_1
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>20
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'EDITOR_LAYER_1'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### EDITOR\_LAYER\_2
>
>>**Printed**
>>
>>```spwn
>>EDITOR_LAYER_2
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>61
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'EDITOR_LAYER_2'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### EXCLUSIVE
>
>>**Printed**
>>
>>```spwn
>>EXCLUSIVE
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>86
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'EXCLUSIVE'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### FADE\_IN
>
>>**Printed**
>>
>>```spwn
>>FADE_IN
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>45
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'FADE_IN'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### FADE\_OUT
>
>>**Printed**
>>
>>```spwn
>>FADE_OUT
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>47
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'FADE_OUT'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### FOLLOW
>
>>**Printed**
>>
>>```spwn
>>FOLLOW
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>71
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'FOLLOW'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@group
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### GLOW\_DISABLED
>
>>**Printed**
>>
>>```spwn
>>GLOW_DISABLED
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>96
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'GLOW_DISABLED'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### GROUPS
>
>>**Printed**
>>
>>```spwn
>>GROUPS
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>57
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'GROUPS'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>([@group] | @group)
>>>```
>>>
>>>**Type:** `@pattern`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### GROUP\_PARENT
>
>>**Printed**
>>
>>```spwn
>>GROUP_PARENT
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>34
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'GROUP_PARENT'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### HIGH\_DETAIL
>
>>**Printed**
>>
>>```spwn
>>HIGH_DETAIL
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>103
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'HIGH_DETAIL'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### HOLD
>
>>**Printed**
>>
>>```spwn
>>HOLD
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>46
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'HOLD'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### HOLD\_MODE
>
>>**Printed**
>>
>>```spwn
>>HOLD_MODE
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>81
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'HOLD_MODE'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### HORIZONTAL\_FLIP
>
>>**Printed**
>>
>>```spwn
>>HORIZONTAL_FLIP
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>4
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'HORIZONTAL_FLIP'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### HVS
>
>>**Printed**
>>
>>```spwn
>>HVS
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>43
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'HVS'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@string
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### HVS\_ENABLED
>
>>**Printed**
>>
>>```spwn
>>HVS_ENABLED
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>41
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'HVS_ENABLED'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### INTERVAL
>
>>**Printed**
>>
>>```spwn
>>INTERVAL
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>84
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'INTERVAL'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### ITEM
>
>>**Printed**
>>
>>```spwn
>>ITEM
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>80
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'ITEM'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>(@item | @block)
>>>```
>>>
>>>**Type:** `@pattern`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### LINKED\_GROUP
>
>>**Printed**
>>
>>```spwn
>>LINKED_GROUP
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>108
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'LINKED_GROUP'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### LOCK\_OBJECT\_ROTATION
>
>>**Printed**
>>
>>```spwn
>>LOCK_OBJECT_ROTATION
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>70
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'LOCK_OBJECT_ROTATION'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### LOCK\_TO\_PLAYER\_X
>
>>**Printed**
>>
>>```spwn
>>LOCK_TO_PLAYER_X
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>58
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'LOCK_TO_PLAYER_X'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### LOCK\_TO\_PLAYER\_Y
>
>>**Printed**
>>
>>```spwn
>>LOCK_TO_PLAYER_Y
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>59
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'LOCK_TO_PLAYER_Y'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### MAIN\_ONLY
>
>>**Printed**
>>
>>```spwn
>>MAIN_ONLY
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>65
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'MAIN_ONLY'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### MAX\_SPEED
>
>>**Printed**
>>
>>```spwn
>>MAX_SPEED
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>105
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'MAX_SPEED'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### MOVE\_X
>
>>**Printed**
>>
>>```spwn
>>MOVE_X
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>28
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'MOVE_X'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### MOVE\_Y
>
>>**Printed**
>>
>>```spwn
>>MOVE_Y
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>29
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'MOVE_Y'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### MULTI\_TRIGGER
>
>>**Printed**
>>
>>```spwn
>>MULTI_TRIGGER
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>87
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'MULTI_TRIGGER'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### OBJ\_ID
>
>>**Printed**
>>
>>```spwn
>>OBJ_ID
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>1
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'OBJ_ID'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### OPACITY
>
>>**Printed**
>>
>>```spwn
>>OPACITY
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>35
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'OPACITY'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### PICKUP\_MODE
>
>>**Printed**
>>
>>```spwn
>>PICKUP_MODE
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>79
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'PICKUP_MODE'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### PLAYER\_COLOR\_1
>
>>**Printed**
>>
>>```spwn
>>PLAYER_COLOR_1
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>15
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'PLAYER_COLOR_1'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### PLAYER\_COLOR\_2
>
>>**Printed**
>>
>>```spwn
>>PLAYER_COLOR_2
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>16
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'PLAYER_COLOR_2'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### PORTAL\_CHECKED
>
>>**Printed**
>>
>>```spwn
>>PORTAL_CHECKED
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>13
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'PORTAL_CHECKED'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### PULSE\_HSV
>
>>**Printed**
>>
>>```spwn
>>PULSE_HSV
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>48
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'PULSE_HSV'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### RANDOMIZE\_START
>
>>**Printed**
>>
>>```spwn
>>RANDOMIZE_START
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>106
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'RANDOMIZE_START'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### ROTATE\_DEGREES
>
>>**Printed**
>>
>>```spwn
>>ROTATE_DEGREES
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>68
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'ROTATE_DEGREES'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### ROTATION
>
>>**Printed**
>>
>>```spwn
>>ROTATION
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>6
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'ROTATION'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### ROTATION\_SPEED
>
>>**Printed**
>>
>>```spwn
>>ROTATION_SPEED
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>97
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'ROTATION_SPEED'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### SCALING
>
>>**Printed**
>>
>>```spwn
>>SCALING
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>32
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'SCALING'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### SPAWN\_DURATION
>
>>**Printed**
>>
>>```spwn
>>SPAWN_DURATION
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>63
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'SPAWN_DURATION'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>(@number | @epsilon)
>>>```
>>>
>>>**Type:** `@pattern`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### SPAWN\_TRIGGERED
>
>>**Printed**
>>
>>```spwn
>>SPAWN_TRIGGERED
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>62
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'SPAWN_TRIGGERED'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### SPEED
>
>>**Printed**
>>
>>```spwn
>>SPEED
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>90
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'SPEED'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### STRENGTH
>
>>**Printed**
>>
>>```spwn
>>STRENGTH
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>75
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'STRENGTH'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### SUBTRACT\_COUNT
>
>>**Printed**
>>
>>```spwn
>>SUBTRACT_COUNT
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>78
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'SUBTRACT_COUNT'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### TARGET
>
>>**Printed**
>>
>>```spwn
>>TARGET
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>51
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'TARGET'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>(((@color | @group) | @trigger_function) | @number)
>>>```
>>>
>>>**Type:** `@pattern`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### TARGET\_COLOR
>
>>**Printed**
>>
>>```spwn
>>TARGET_COLOR
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>23
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'TARGET_COLOR'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@color
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### TARGET\_POS
>
>>**Printed**
>>
>>```spwn
>>TARGET_POS
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>71
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'TARGET_POS'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@group
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### TARGET\_POS\_AXES
>
>>**Printed**
>>
>>```spwn
>>TARGET_POS_AXES
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>101
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'TARGET_POS_AXES'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### TARGET\_TYPE
>
>>**Printed**
>>
>>```spwn
>>TARGET_TYPE
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>52
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'TARGET_TYPE'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### TEXT
>
>>**Printed**
>>
>>```spwn
>>TEXT
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>31
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'TEXT'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@string
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### TIMES\_360
>
>>**Printed**
>>
>>```spwn
>>TIMES_360
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>69
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'TIMES_360'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### TOGGLE\_MODE
>
>>**Printed**
>>
>>```spwn
>>TOGGLE_MODE
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>82
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'TOGGLE_MODE'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### TOUCH\_TRIGGERED
>
>>**Printed**
>>
>>```spwn
>>TOUCH_TRIGGERED
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>11
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'TOUCH_TRIGGERED'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### TRIGGER\_BLUE
>
>>**Printed**
>>
>>```spwn
>>TRIGGER_BLUE
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>9
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'TRIGGER_BLUE'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### TRIGGER\_GREEN
>
>>**Printed**
>>
>>```spwn
>>TRIGGER_GREEN
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>8
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'TRIGGER_GREEN'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### TRIGGER\_RED
>
>>**Printed**
>>
>>```spwn
>>TRIGGER_RED
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>7
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'TRIGGER_RED'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### USE\_TARGET
>
>>**Printed**
>>
>>```spwn
>>USE_TARGET
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>100
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'USE_TARGET'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### VERTICAL\_FLIP
>
>>**Printed**
>>
>>```spwn
>>VERTICAL_FLIP
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>5
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'VERTICAL_FLIP'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@bool
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### X
>
>>**Printed**
>>
>>```spwn
>>X
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>2
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'X'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### X\_MOD
>
>>**Printed**
>>
>>```spwn
>>X_MOD
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>72
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'X_MOD'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### Y
>
>>**Printed**
>>
>>```spwn
>>Y
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>3
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'Y'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### YELLOW\_TELEPORTATION\_PORTAL\_DISTANCE
>
>>**Printed**
>>
>>```spwn
>>YELLOW_TELEPORTATION_PORTAL_DISTANC
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>54
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'YELLOW_TELEPORTATION_PORTAL_DISTANC'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### Y\_MOD
>
>>**Printed**
>>
>>```spwn
>>Y_MOD
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>73
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'Y_MOD'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### Y\_OFFSET
>
>>**Printed**
>>
>>```spwn
>>Y_OFFSET
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>92
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'Y_OFFSET'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### Z\_LAYER
>
>>**Printed**
>>
>>```spwn
>>Z_LAYER
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>24
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'Z_LAYER'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
>### Z\_ORDER
>
>>**Printed**
>>
>>```spwn
>>Z_ORDER
>>```
>>
>>**Type:** [`@object_key`](std-docs/object_key)
>>
>>## Values
>>
>>### id
>>
>>>**Printed**
>>>
>>>```spwn
>>>25
>>>```
>>>
>>>**Type:** [`@number`](std-docs/number)
>>>
>>
>>### name
>>
>>>**Printed**
>>>
>>>```spwn
>>>'Z_ORDER'
>>>```
>>>
>>>**Type:** [`@string`](std-docs/string)
>>>
>>
>>### pattern
>>
>>>**Printed**
>>>
>>>```spwn
>>>@number
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>>### type
>>
>>>**Printed**
>>>
>>>```spwn
>>>@object_key
>>>```
>>>
>>>**Type:** `@type_indicator`
>>>
>>
>
