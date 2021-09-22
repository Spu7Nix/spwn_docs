# Documentation for `std` 
_Generated using `spwn doc [file name]`_
## Info:

- Uses 1 groups
- Uses 0 colors
- Uses 0 block IDs
- Uses 1 item IDs

- Adds 0 objects
# Type Implementations:
- [**@group**](std-docs/group.md)
- [**@color**](std-docs/color.md)
- [**@block**](std-docs/block.md)
- [**@item**](std-docs/item.md)
- [**@number**](std-docs/number.md)
- [**@dictionary**](std-docs/dictionary.md)
- [**@string**](std-docs/string.md)
- [**@array**](std-docs/array.md)
- [**@object**](std-docs/object.md)
- [**@comparison**](std-docs/comparison.md)
- [**@easing_type**](std-docs/easing_type.md)
- [**@event**](std-docs/event.md)
- [**@obj_set**](std-docs/obj_set.md)
- [**@counter**](std-docs/counter.md)
- [**@file**](std-docs/file.md)
- [**@regex**](std-docs/regex.md)
- [**@heapq**](std-docs/heapq.md)
- [**@complex**](std-docs/complex.md)
- [**@zip**](std-docs/zip.md)
- [**@http**](std-docs/http.md)
# Exports:
 **Type:** `@dictionary` 

## Constructors:

## **complex**:

> **Printed:** 
>```spwn
>(re, im = 0) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`re`** |any | | |
>| 2 | `im` |any | `0` | |
>

## **counter**:

> **Printed:** 
>```spwn
>(source: @number | @item | @bool = 0, bits: @number = 16, reset: @bool = true) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Creates a new counter_
>### Example: 
>```spwn
> @counter::new()     // creates a new counter with a starting value of 0
>@counter::new(10)   // creates a new counter with a starting value of 10
>@counter::new(5i)   // creates a new counter thaat uses item ID 5
>@counter::new(true)   // creates a new counter with a starting value of true (1)
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `source` | @number or @item or @bool | `0` |Source (can be a number, item ID or boolean) |
>| 2 | `bits` | @number | `16` |Defines the maximum stable size of the counter. If the counter goes outside of the range from 0 to 2^size, it's behavior will be undefined. Smaller sizes are more group effective. |
>| 3 | `reset` | @bool | `true` |Resets the counter in case the item has been used before. This only applies if the `source` argument is not an item. |
>

## **obj\_set**:

> **Printed:** 
>```spwn
>(objects: [@object] = [], group: @group = ?g) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Creates a new object set_
>### Example: 
>```spwn
> my_objects = @obj_set::new()
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `objects` | [@object] | `[]` | |
>| 2 | `group` | @group | `?g` |The center group to use for rotation |
>

## **open**:

> **Printed:** 
>```spwn
>(path: @string) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Creates a new file IO object_
>### Example: 
>```spwn
> @file::new('C:/path/to/file.txt')
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`path`** | @string | |Path to file (at the moment this is only stable with absolute paths) |
>

## **regex**:

> **Printed:** 
>```spwn
>(re: @string) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Create a new instance of regex_
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`re`** | @string | |A regex string. Make sure to use two backslashes to escape selectors instead of one or it will error |
>

## **zip**:

> **Printed:** 
>```spwn
>(iter1: @array | @string | @dictionary, iter2: @array | @string | @dictionary) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Returns a zip object_
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`iter1`** | @array or @string or @dictionary | | |
>| 2 | **`iter2`** | @array or @string or @dictionary | | |
>

## Macros:

## **alpha\_trigger**:

> **Printed:** 
>```spwn
>(group: @group, opacity: @number = 1, duration: @number = 0) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Returns an alpha trigger as an object_
>### Example: 
>```spwn
> $.add( alpha_trigger(1g,0.5,duration = 2).with(X,600) ) // Creates an alpha trigger at X 600 that fades group 1 to half opacity over 2 seconds
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`group`** | @group | | |
>| 2 | `opacity` | @number | `1` | |
>| 3 | `duration` | @number | `0` | |
>

## **call\_with\_delay**:

> **Printed:** 
>```spwn
>(time: @number | @epsilon = @epsilon::{}, function: @trigger_function | @group) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Call a function after a delay_
>### Example: 
>```spwn
> BG.set(255, 0, 0) // turn background red
>call_with_delay(2, !{
>	BG.set(0, 255, 0) // turn background green 2 seconds later
>})
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `time` | @number or @epsilon | `@epsilon::{}` |Delay time in seconds (leave empty for minimum delay) |
>| 2 | **`function`** | @trigger_function or @group | |Function to call after the delay |
>

## **collision**:

> **Printed:** 
>```spwn
>(a: @block, b: @block) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Implementation of the collision trigger (returns an event)_
>### Example: 
>```spwn
> [[handle(collision(1b, 2b))]] !{
>    BG.set(0, 0, 0)
>}
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`a`** | @block | |Block A ID |
>| 2 | **`b`** | @block | |Block B ID |
>

## **collision\_exit**:

> **Printed:** 
>```spwn
>(a: @block, b: @block) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Returns an event for when a collision exits_
>### Example: 
>```spwn
> [[handle(collision_exit(1b, 2b))]] !{
>    BG.set(0, 0, 0)
>}
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`a`** | @block | |Block A ID |
>| 2 | **`b`** | @block | |Block B ID |
>

## **color\_trigger**:

> **Printed:** 
>```spwn
>(channel: @color, r: @number, g: @number, b: @number, duration: @number = 0, opacity: @number = 1, blending: @bool = false) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Returns a color trigger as an object_
>### Example: 
>```spwn
> $.add( color_trigger(BG,0,0,0,0.5).with(X,600) )
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`channel`** | @color | |Color channel to change |
>| 2 | **`r`** | @number | |Red value of the target color |
>| 3 | **`g`** | @number | |Green value of the target color |
>| 4 | **`b`** | @number | |Blue value of the target color |
>| 5 | `duration` | @number | `0` |Duration of color change |
>| 6 | `opacity` | @number | `1` |Opacity of target color |
>| 7 | `blending` | @bool | `false` |Toggle blending on target color |
>

## **count**:

> **Printed:** 
>```spwn
>(it: @item, hits: @number, multi: @bool = true) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Implementation of a count trigger (returns an event)_
>### Example: 
>```spwn
> [[handle(count(4i, 3))]] !{
>    BG.set(0, 0, 0)
>}
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`it`** | @item | | |
>| 2 | **`hits`** | @number | | |
>| 3 | `multi` | @bool | `true` | |
>

## **death**:

> **Printed:** 
>```spwn
>() { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Returns an event for when the player dies_
>### Example: 
>```spwn
> [[handle(death())]] !{
>    BG.set(0, 0, 0)
>}
>```
>

## **disable\_trail**:

> **Printed:** 
>```spwn
>() { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Disables the player's trail_
>### Example: 
>```spwn
> disable_trail()
>```
>

## **do\_while\_loop**:

> **Printed:** 
>```spwn
>(expr: @macro, code: @macro, delay: @number | @epsilon = @epsilon::{}) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Implementation of a conditional spawn loop_
>### Example: 
>```spwn
> c = counter(4)
>
>do_while_loop(() => c > 10, () {
>	c -= 2
>})
>
>// c is now 2
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`expr`** | @macro | |While loop condition, should -> return a boolean |
>| 2 | **`code`** | @macro | |Macro of the code that gets looped |
>| 3 | `delay` | @number or @epsilon | `@epsilon::{}` |Delay between loops (less than 0.05 may be unstable) |
>

## **enable\_trail**:

> **Printed:** 
>```spwn
>() { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Enables the player's trail_
>### Example: 
>```spwn
> enable_trail()
>```
>

## **follow\_player\_y\_trigger**:

> **Printed:** 
>```spwn
>(group: @group, speed: @number = 1, delay: @number = 0, offset: @number = 0, max_speed: @number = 0, duration: @number = 999) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Returns a follow player Y trigger as an object_
>### Example: 
>```spwn
> $.add( follow_player_y_trigger(10g,delay = 0.5).with(X,600) )
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`group`** | @group | |Group that will follow |
>| 2 | `speed` | @number | `1` |Interpolation factor (?) |
>| 3 | `delay` | @number | `0` |Delay of movement |
>| 4 | `offset` | @number | `0` |Offset on the Y-axis |
>| 5 | `max_speed` | @number | `0` |Maximum speed |
>| 6 | `duration` | @number | `999` |Duration of following |
>

## **follow\_trigger**:

> **Printed:** 
>```spwn
>(group: @group, other: @group, x_mod: @number = 1, y_mod: @number = 1, duration: @number = 999) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Returns a follow trigger as an object_
>### Example: 
>```spwn
> $.add( follow_trigger(10g,3g).with(X,600) ) // Creates a follow trigger at X 600 that makes group 10 follow group 3
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`group`** | @group | |Group that will follow |
>| 2 | **`other`** | @group | |Group of object to follow |
>| 3 | `x_mod` | @number | `1` |Multiplier for the movement on the X-axis |
>| 4 | `y_mod` | @number | `1` |Multiplier for the movement on the Y-axis |
>| 5 | `duration` | @number | `999` |Duration of following |
>

## **for\_loop**:

> **Printed:** 
>```spwn
>(range: @range, code: @macro, delay: @number | @epsilon = @epsilon::{}, reset: @bool = true) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Implementation of a spawn loop with a counter_
>### Example: 
>```spwn
> for_loop(0..10, (i) {
>	if i < 5 {
>		10g.move(-10, 0)
>	} else {
>		10g.move(10, 0)
>	}
>})
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`range`** | @range | |Range of values (for example 0..10) |
>| 2 | **`code`** | @macro | |Macro of the code that gets looped, should take the iterator (a counter) as the first argument. |
>| 3 | `delay` | @number or @epsilon | `@epsilon::{}` |Delay between loops (less than 0.05 may be unstable) |
>| 4 | `reset` | @bool | `true` |Whether to reset the iterator after looping (only disable if the loop is only triggered once) |
>

## **heapq**:

> **Printed:** 
>```spwn
>(arr: @array = [], comp: @macro = (a, b) { /* code omitted */ }, tiebreak: @macro = (a, b) { /* code omitted */ }) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Creates a new priority queue_
>### Example: 
>```spwn
> let newheap = @heapq::new([5])
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `arr` | @array | `[]` |The vanilla array |
>| 2 | `comp` | @macro | `(a, b) { /* code omitted */ }` |Comparator function (hueristic default to minheap) |
>| 3 | `tiebreak` | @macro | `(a, b) { /* code omitted */ }` |When sifting down, how to determine which node to replace if both are viable |
>

## **hide\_player**:

> **Printed:** 
>```spwn
>() { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Hides the player_
>### Example: 
>```spwn
> hide_player()
>```
>

## **lock\_to\_player\_trigger**:

> **Printed:** 
>```spwn
>(group: @group, lock_x: @bool = true, lock_y: @bool = true, duration: @number = 999) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Returns a move trigger that locks the group's position as an object_
>### Example: 
>```spwn
> $.add( lock_to_player_trigger(1g,lock_x = true,lock_y = false).with(X,600) ) // Creates a move trigger at X 600 that locks group 1 to the player's X
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`group`** | @group | |Group to lock |
>| 2 | `lock_x` | @bool | `true` |Lock to player X |
>| 3 | `lock_y` | @bool | `true` |Lock to player Y |
>| 4 | `duration` | @number | `999` |Duration of lock |
>

## **move\_to\_trigger**:

> **Printed:** 
>```spwn
>(group: @group, target: @group, duration: @number = 0, x_only: @bool = false, y_only: @bool = false, easing: @easing_type = NONE, easing_rate: @number = 2) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Returns a move trigger that uses "move to" as an object_
>### Example: 
>```spwn
> $.add( move_to_trigger(10g,3g).with(X,600) ) // Creates a move trigger at X 600 that moves group 10 to group 3
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`group`** | @group | |Group to move |
>| 2 | **`target`** | @group | |Group of the object to move to |
>| 3 | `duration` | @number | `0` |Duration of movement |
>| 4 | `x_only` | @bool | `false` |Will move to the object only on the X-axis |
>| 5 | `y_only` | @bool | `false` |Will move to the object only on the y-axis |
>| 6 | `easing` | @easing_type | `NONE` |Easing type |
>| 7 | `easing_rate` | @number | `2` |Easing rate |
>

## **move\_trigger**:

> **Printed:** 
>```spwn
>(group: @group, x: @number, y: @number, duration: @number = 0, easing: @easing_type = NONE, easing_rate: @number = 2) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Returns a move trigger as an object_
>### Example: 
>```spwn
> $.add( move_trigger(1g,10,0).with(X,600) ) // Creates a move trigger at X 600 that moves group 1 a block to the right
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`group`** | @group | |Group to move |
>| 2 | **`x`** | @number | |Units to move on the X axis |
>| 3 | **`y`** | @number | |Units to move on the Y axis |
>| 4 | `duration` | @number | `0` |Duration of movement |
>| 5 | `easing` | @easing_type | `NONE` | |
>| 6 | `easing_rate` | @number | `2` | |
>

## **on**:

> **Printed:** 
>```spwn
>(event: @event, function: @trigger_function) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Triggers a function every time an event fires_
>### Example: 
>```spwn
> on(touch(), !{
>    10g.move(10, 0)
>})
>
>// you can also use it as a decorator
>[[ on(touch()) ]] !{
>    10g.move(10, 0)
>}
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`event`** | @event | |Event to trigger on |
>| 2 | **`function`** | @trigger_function | |Function to trigger |
>

## **pickup\_trigger**:

> **Printed:** 
>```spwn
>(item_id: @item, amount: @number) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Returns a pickup trigger as an object_
>### Example: 
>```spwn
> $.add( pickup_trigger(1i,3).with(X,600) )
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`item_id`** | @item | |Item ID to modify |
>| 2 | **`amount`** | @number | |Amount to add |
>

## **pulse\_trigger**:

> **Printed:** 
>```spwn
>(target: @group | @color, r: @number, g: @number, b: @number, fade_in: @number = 0, hold: @number = 0, fade_out: @number = 0, exclusive: @bool = false, hsv: @bool = false, s_checked: @bool = false, b_checked: @bool = false) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Returns a pulse trigger as an object_
>### Example: 
>```spwn
> $.add( pulse_trigger(10g,255,0,0,fade_out = 0.5).with(X,600) )
>    $.add( pulse_trigger(10c,255,0,0,fade_out = 0.5).with(X,600) )
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`target`** | @group or @color | |Target to pulse (group or color) |
>| 2 | **`r`** | @number | |Red value of pulse color (or hue if HSV is enabled) |
>| 3 | **`g`** | @number | |Green value of pulse color (or saturation if HSV is enabled) |
>| 4 | **`b`** | @number | |Blue value of pulse color (or brightness/value if HSV is enabled) |
>| 5 | `fade_in` | @number | `0` |Fade-in duration |
>| 6 | `hold` | @number | `0` |Duration to hold the color |
>| 7 | `fade_out` | @number | `0` |Fade-out duration |
>| 8 | `exclusive` | @bool | `false` |Whether to prioritize this pulse over simultaneous pulses |
>| 9 | `hsv` | @bool | `false` |Toggle HSV mode |
>| 10 | `s_checked` | @bool | `false` |HSV specific: saturation checked |
>| 11 | `b_checked` | @bool | `false` |HSV specific: brightness checked |
>

## **rotate\_trigger**:

> **Printed:** 
>```spwn
>(group: @group, center: @group, degrees: @number, duration: @number = 0, easing: @easing_type = NONE, easing_rate: @number = 2, lock_object_rotation: @bool = false) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Returns a rotate trigger as an object_
>### Example: 
>```spwn
> $.add( rotate_trigger(10g,3g,90,duration = 5).with(X,600) ) // Creates a rotate trigger at X 600 that rotates group 10 90 degrees around group 3 over 5 seconds
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`group`** | @group | |Group to rotate |
>| 2 | **`center`** | @group | |Group of object to rotate around |
>| 3 | **`degrees`** | @number | |Rotation in degrees |
>| 4 | `duration` | @number | `0` |Duration of rotation |
>| 5 | `easing` | @easing_type | `NONE` |Easing type |
>| 6 | `easing_rate` | @number | `2` |Easing rate |
>| 7 | `lock_object_rotation` | @bool | `false` |Only rotate positions of the objects, not the textures |
>

## **shake**:

> **Printed:** 
>```spwn
>(strength: @number = 1, interval: @number = 0, duration: @number = 0.5) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Implementation of the shake trigger_
>### Example: 
>```spwn
> shake()
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `strength` | @number | `1` |Strength value |
>| 2 | `interval` | @number | `0` |Interval value |
>| 3 | `duration` | @number | `0.5` |Duration of shake |
>

## **show\_player**:

> **Printed:** 
>```spwn
>() { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Shows the player_
>### Example: 
>```spwn
> show_player()
>```
>

## **spawn\_trigger**:

> **Printed:** 
>```spwn
>(group: @group, delay: @number) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Returns a spawn trigger as an object_
>### Example: 
>```spwn
> $.add( spawn_trigger(5g,0.5).with(X,600) )
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`group`** | @group | |Group to spawn |
>| 2 | **`delay`** | @number | |Delay |
>

## **stop\_trigger**:

> **Printed:** 
>```spwn
>(group: @group) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Returns a stop trigger as an object_
>### Example: 
>```spwn
> $.add( stop_trigger(10g).with(X,600) ) // Creates a stop trigger at X 600 that stops group 10
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`group`** | @group | |Group to stop |
>

## **supress\_signal**:

> **Printed:** 
>```spwn
>(delay: @number) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Stops signal from coming past for some time_
>### Example: 
>```spwn
> f = !{
>	supress_signal(1)
>	10g.move(10, 0)
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
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`delay`** | @number | |Time to supress signal |
>

## **supress\_signal\_forever**:

> **Printed:** 
>```spwn
>() { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Stops signal from coming past after call_
>### Example: 
>```spwn
> f = !{
>	supress_signal_forever()
>	10g.move(10, 0)
>}
>f! // moves
>wait(0.4)
>f! // does nothing
>wait(1000)
>f! // does nothing
>```
>

## **toggle\_bg\_effect**:

> **Printed:** 
>```spwn
>(on: @bool = false) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Implementation of the bg effect on/off triggers_
>### Example: 
>```spwn
> toggle_bg_effect(false)
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `on` | @bool | `false` |Whether to toggle bg effect on or off |
>

## **toggle\_off\_trigger**:

> **Printed:** 
>```spwn
>(group: @group) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Returns a toggle off trigger as an object_
>### Example: 
>```spwn
> $.add( toggle_off_trigger(5g).with(X,600) ) // Creates a toggle trigger at X 600 that turns off group 5
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`group`** | @group | |Group to toggle |
>

## **toggle\_on\_trigger**:

> **Printed:** 
>```spwn
>(group: @group) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Returns a toggle on trigger as an object_
>### Example: 
>```spwn
> $.add( toggle_on_trigger(5g).with(X,600) ) // Creates a toggle trigger at X 600 that turns on group 5
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`group`** | @group | |Group to toggle |
>

## **touch**:

> **Printed:** 
>```spwn
>(dual_side: @bool = false) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Implementation of the touch trigger (returns an event)_
>### Example: 
>```spwn
> [[handle(touch())]] !{
>    10g.move(10, 0)
>}
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `dual_side` | @bool | `false` |Dual mode (only check for touch on the dual side) |
>

## **touch\_end**:

> **Printed:** 
>```spwn
>(dual_side: @bool = false) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Returns an event for when a touch ends_
>### Example: 
>```spwn
> [[handle(touch_end())]] !{
>    10g.move(10, 0)
>}
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `dual_side` | @bool | `false` |Dual mode (only check for touch on the dual side) |
>

## **wait**:

> **Printed:** 
>```spwn
>(time: @number | @epsilon = @epsilon::{}) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Adds a delay before the next triggers_
>### Example: 
>```spwn
> BG.set(255, 0, 0) // turn background red
>wait(2) // wait 2 seconds
>BG.set(0, 255, 0) // turn background green
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `time` | @number or @epsilon | `@epsilon::{}` |Delay time in seconds (leave empty for minimum delay) |
>

## **while\_loop**:

> **Printed:** 
>```spwn
>(expr: @macro, code: @macro, delay: @number | @epsilon = @epsilon::{}) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Implementation of a conditional spawn loop_
>### Example: 
>```spwn
> c = counter(11)
>
>while_loop(() => c > 4, () {
>	c -= 2
>})
>
>// c is now 3
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`expr`** | @macro | |While loop condition, should -> return a boolean |
>| 2 | **`code`** | @macro | |Macro of the code that gets looped |
>| 3 | `delay` | @number or @epsilon | `@epsilon::{}` |Delay between loops (less than 0.05 may be unstable) |
>

## Values:

## **BACK\_IN**:

> **Printed:** 
>```spwn
>BACK_IN
>``` 
>**Type:** `@easing_type` 
>
>## Values:
>
>## **id**:
>
>> **Printed:** 
>>```spwn
>>17
>>``` 
>>**Type:** `@number` 
>>
>
>## **type**:
>
>> **Printed:** 
>>```spwn
>>@easing_type
>>``` 
>>**Type:** `@type_indicator` 
>>
>

## **BACK\_IN\_OUT**:

> **Printed:** 
>```spwn
>BACK_IN_OUT
>``` 
>**Type:** `@easing_type` 
>
>## Values:
>
>## **id**:
>
>> **Printed:** 
>>```spwn
>>16
>>``` 
>>**Type:** `@number` 
>>
>
>## **type**:
>
>> **Printed:** 
>>```spwn
>>@easing_type
>>``` 
>>**Type:** `@type_indicator` 
>>
>

## **BACK\_OUT**:

> **Printed:** 
>```spwn
>BACK_OUT
>``` 
>**Type:** `@easing_type` 
>
>## Values:
>
>## **id**:
>
>> **Printed:** 
>>```spwn
>>18
>>``` 
>>**Type:** `@number` 
>>
>
>## **type**:
>
>> **Printed:** 
>>```spwn
>>@easing_type
>>``` 
>>**Type:** `@type_indicator` 
>>
>

## **BG**:

> **Printed:** 
>```spwn
>1000c
>``` 
>**Type:** `@color` 
>

## **BOUNCE\_IN**:

> **Printed:** 
>```spwn
>BOUNCE_IN
>``` 
>**Type:** `@easing_type` 
>
>## Values:
>
>## **id**:
>
>> **Printed:** 
>>```spwn
>>8
>>``` 
>>**Type:** `@number` 
>>
>
>## **type**:
>
>> **Printed:** 
>>```spwn
>>@easing_type
>>``` 
>>**Type:** `@type_indicator` 
>>
>

## **BOUNCE\_IN\_OUT**:

> **Printed:** 
>```spwn
>BOUNCE_IN_OUT
>``` 
>**Type:** `@easing_type` 
>
>## Values:
>
>## **id**:
>
>> **Printed:** 
>>```spwn
>>7
>>``` 
>>**Type:** `@number` 
>>
>
>## **type**:
>
>> **Printed:** 
>>```spwn
>>@easing_type
>>``` 
>>**Type:** `@type_indicator` 
>>
>

## **BOUNCE\_OUT**:

> **Printed:** 
>```spwn
>BOUNCE_OUT
>``` 
>**Type:** `@easing_type` 
>
>## Values:
>
>## **id**:
>
>> **Printed:** 
>>```spwn
>>9
>>``` 
>>**Type:** `@number` 
>>
>
>## **type**:
>
>> **Printed:** 
>>```spwn
>>@easing_type
>>``` 
>>**Type:** `@type_indicator` 
>>
>

## **EASE\_IN**:

> **Printed:** 
>```spwn
>EASE_IN
>``` 
>**Type:** `@easing_type` 
>
>## Values:
>
>## **id**:
>
>> **Printed:** 
>>```spwn
>>2
>>``` 
>>**Type:** `@number` 
>>
>
>## **type**:
>
>> **Printed:** 
>>```spwn
>>@easing_type
>>``` 
>>**Type:** `@type_indicator` 
>>
>

## **EASE\_IN\_OUT**:

> **Printed:** 
>```spwn
>EASE_IN_OUT
>``` 
>**Type:** `@easing_type` 
>
>## Values:
>
>## **id**:
>
>> **Printed:** 
>>```spwn
>>1
>>``` 
>>**Type:** `@number` 
>>
>
>## **type**:
>
>> **Printed:** 
>>```spwn
>>@easing_type
>>``` 
>>**Type:** `@type_indicator` 
>>
>

## **EASE\_OUT**:

> **Printed:** 
>```spwn
>EASE_OUT
>``` 
>**Type:** `@easing_type` 
>
>## Values:
>
>## **id**:
>
>> **Printed:** 
>>```spwn
>>3
>>``` 
>>**Type:** `@number` 
>>
>
>## **type**:
>
>> **Printed:** 
>>```spwn
>>@easing_type
>>``` 
>>**Type:** `@type_indicator` 
>>
>

## **ELASTIC\_IN**:

> **Printed:** 
>```spwn
>ELASTIC_IN
>``` 
>**Type:** `@easing_type` 
>
>## Values:
>
>## **id**:
>
>> **Printed:** 
>>```spwn
>>5
>>``` 
>>**Type:** `@number` 
>>
>
>## **type**:
>
>> **Printed:** 
>>```spwn
>>@easing_type
>>``` 
>>**Type:** `@type_indicator` 
>>
>

## **ELASTIC\_IN\_OUT**:

> **Printed:** 
>```spwn
>ELASTIC_IN_OUT
>``` 
>**Type:** `@easing_type` 
>
>## Values:
>
>## **id**:
>
>> **Printed:** 
>>```spwn
>>4
>>``` 
>>**Type:** `@number` 
>>
>
>## **type**:
>
>> **Printed:** 
>>```spwn
>>@easing_type
>>``` 
>>**Type:** `@type_indicator` 
>>
>

## **ELASTIC\_OUT**:

> **Printed:** 
>```spwn
>ELASTIC_OUT
>``` 
>**Type:** `@easing_type` 
>
>## Values:
>
>## **id**:
>
>> **Printed:** 
>>```spwn
>>6
>>``` 
>>**Type:** `@number` 
>>
>
>## **type**:
>
>> **Printed:** 
>>```spwn
>>@easing_type
>>``` 
>>**Type:** `@type_indicator` 
>>
>

## **EQUAL\_TO**:

> **Printed:** 
>```spwn
>EQUAL_TO
>``` 
>**Type:** `@comparison` 
>
>## Values:
>
>## **id**:
>
>> **Printed:** 
>>```spwn
>>0
>>``` 
>>**Type:** `@number` 
>>
>
>## **type**:
>
>> **Printed:** 
>>```spwn
>>@comparison
>>``` 
>>**Type:** `@type_indicator` 
>>
>

## **EXPONENTIAL\_IN**:

> **Printed:** 
>```spwn
>EXPONENTIAL_IN
>``` 
>**Type:** `@easing_type` 
>
>## Values:
>
>## **id**:
>
>> **Printed:** 
>>```spwn
>>11
>>``` 
>>**Type:** `@number` 
>>
>
>## **type**:
>
>> **Printed:** 
>>```spwn
>>@easing_type
>>``` 
>>**Type:** `@type_indicator` 
>>
>

## **EXPONENTIAL\_IN\_OUT**:

> **Printed:** 
>```spwn
>EXPONENTIAL_IN_OUT
>``` 
>**Type:** `@easing_type` 
>
>## Values:
>
>## **id**:
>
>> **Printed:** 
>>```spwn
>>10
>>``` 
>>**Type:** `@number` 
>>
>
>## **type**:
>
>> **Printed:** 
>>```spwn
>>@easing_type
>>``` 
>>**Type:** `@type_indicator` 
>>
>

## **EXPONENTIAL\_OUT**:

> **Printed:** 
>```spwn
>EXPONENTIAL_OUT
>``` 
>**Type:** `@easing_type` 
>
>## Values:
>
>## **id**:
>
>> **Printed:** 
>>```spwn
>>12
>>``` 
>>**Type:** `@number` 
>>
>
>## **type**:
>
>> **Printed:** 
>>```spwn
>>@easing_type
>>``` 
>>**Type:** `@type_indicator` 
>>
>

## **GROUND**:

> **Printed:** 
>```spwn
>1001c
>``` 
>**Type:** `@color` 
>

## **GROUND2**:

> **Printed:** 
>```spwn
>1009c
>``` 
>**Type:** `@color` 
>

## **LARGER\_THAN**:

> **Printed:** 
>```spwn
>LARGER_THAN
>``` 
>**Type:** `@comparison` 
>
>## Values:
>
>## **id**:
>
>> **Printed:** 
>>```spwn
>>1
>>``` 
>>**Type:** `@number` 
>>
>
>## **type**:
>
>> **Printed:** 
>>```spwn
>>@comparison
>>``` 
>>**Type:** `@type_indicator` 
>>
>

## **LINE**:

> **Printed:** 
>```spwn
>1002c
>``` 
>**Type:** `@color` 
>

## **NONE**:

> **Printed:** 
>```spwn
>NONE
>``` 
>**Type:** `@easing_type` 
>
>## Values:
>
>## **id**:
>
>> **Printed:** 
>>```spwn
>>0
>>``` 
>>**Type:** `@number` 
>>
>
>## **type**:
>
>> **Printed:** 
>>```spwn
>>@easing_type
>>``` 
>>**Type:** `@type_indicator` 
>>
>

## **OBJECT**:

> **Printed:** 
>```spwn
>1004c
>``` 
>**Type:** `@color` 
>

## **SINE\_IN**:

> **Printed:** 
>```spwn
>SINE_IN
>``` 
>**Type:** `@easing_type` 
>
>## Values:
>
>## **id**:
>
>> **Printed:** 
>>```spwn
>>14
>>``` 
>>**Type:** `@number` 
>>
>
>## **type**:
>
>> **Printed:** 
>>```spwn
>>@easing_type
>>``` 
>>**Type:** `@type_indicator` 
>>
>

## **SINE\_IN\_OUT**:

> **Printed:** 
>```spwn
>SINE_IN_OUT
>``` 
>**Type:** `@easing_type` 
>
>## Values:
>
>## **id**:
>
>> **Printed:** 
>>```spwn
>>13
>>``` 
>>**Type:** `@number` 
>>
>
>## **type**:
>
>> **Printed:** 
>>```spwn
>>@easing_type
>>``` 
>>**Type:** `@type_indicator` 
>>
>

## **SINE\_OUT**:

> **Printed:** 
>```spwn
>SINE_OUT
>``` 
>**Type:** `@easing_type` 
>
>## Values:
>
>## **id**:
>
>> **Printed:** 
>>```spwn
>>15
>>``` 
>>**Type:** `@number` 
>>
>
>## **type**:
>
>> **Printed:** 
>>```spwn
>>@easing_type
>>``` 
>>**Type:** `@type_indicator` 
>>
>

## **SMALLER\_THAN**:

> **Printed:** 
>```spwn
>SMALLER_THAN
>``` 
>**Type:** `@comparison` 
>
>## Values:
>
>## **id**:
>
>> **Printed:** 
>>```spwn
>>2
>>``` 
>>**Type:** `@number` 
>>
>
>## **type**:
>
>> **Printed:** 
>>```spwn
>>@comparison
>>``` 
>>**Type:** `@type_indicator` 
>>
>

## **\_3DLINE**:

> **Printed:** 
>```spwn
>1003c
>``` 
>**Type:** `@color` 
>

## **obj\_ids**:

> **Type:** `@dictionary` 
>
>## Values:
>
>## **portals**:
>
>> **Printed:** 
>>```spwn
>>{MIRROR_ON: 45,GRAVITY_DOWN: 10,BALL: 47,WAVE: 660,SPIDER: 1331,SIZE_MINI: 101,TELEPORT: 747,SPEED_BLUE: 201,ROBOT: 745,GRAVITY_UP: 11,SHIP: 13,... (9 more) }
>>``` 
>>**Type:** `@dictionary` 
>>
>>## Values:
>>
>>## **BALL**:
>>
>>> **Printed:** 
>>>```spwn
>>>47
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **CUBE**:
>>
>>> **Printed:** 
>>>```spwn
>>>12
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **DUAL\_OFF**:
>>
>>> **Printed:** 
>>>```spwn
>>>287
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **DUAL\_ON**:
>>
>>> **Printed:** 
>>>```spwn
>>>286
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **GRAVITY\_DOWN**:
>>
>>> **Printed:** 
>>>```spwn
>>>10
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **GRAVITY\_UP**:
>>
>>> **Printed:** 
>>>```spwn
>>>11
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **MIRROR\_OFF**:
>>
>>> **Printed:** 
>>>```spwn
>>>46
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **MIRROR\_ON**:
>>
>>> **Printed:** 
>>>```spwn
>>>45
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **ROBOT**:
>>
>>> **Printed:** 
>>>```spwn
>>>745
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **SHIP**:
>>
>>> **Printed:** 
>>>```spwn
>>>13
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **SIZE\_MINI**:
>>
>>> **Printed:** 
>>>```spwn
>>>101
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **SIZE\_NORMAL**:
>>
>>> **Printed:** 
>>>```spwn
>>>99
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **SPEED\_BLUE**:
>>
>>> **Printed:** 
>>>```spwn
>>>201
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **SPEED\_GREEN**:
>>
>>> **Printed:** 
>>>```spwn
>>>202
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **SPEED\_PINK**:
>>
>>> **Printed:** 
>>>```spwn
>>>203
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **SPEED\_RED**:
>>
>>> **Printed:** 
>>>```spwn
>>>1334
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **SPEED\_YELLOW**:
>>
>>> **Printed:** 
>>>```spwn
>>>200
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **SPIDER**:
>>
>>> **Printed:** 
>>>```spwn
>>>1331
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **TELEPORT**:
>>
>>> **Printed:** 
>>>```spwn
>>>747
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **UFO**:
>>
>>> **Printed:** 
>>>```spwn
>>>111
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **WAVE**:
>>
>>> **Printed:** 
>>>```spwn
>>>660
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>
>## **special**:
>
>> **Printed:** 
>>```spwn
>>{H_BLOCK: 1859,USER_COIN: 1329,COLLISION_BLOCK: 1816,S_BLOCK: 1829,TEXT: 914,D_BLOCK: 1755,J_BLOCK: 1813,ITEM_DISPLAY: 1615}
>>``` 
>>**Type:** `@dictionary` 
>>
>>## Values:
>>
>>## **COLLISION\_BLOCK**:
>>
>>> **Printed:** 
>>>```spwn
>>>1816
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **D\_BLOCK**:
>>
>>> **Printed:** 
>>>```spwn
>>>1755
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **H\_BLOCK**:
>>
>>> **Printed:** 
>>>```spwn
>>>1859
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **ITEM\_DISPLAY**:
>>
>>> **Printed:** 
>>>```spwn
>>>1615
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **J\_BLOCK**:
>>
>>> **Printed:** 
>>>```spwn
>>>1813
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **S\_BLOCK**:
>>
>>> **Printed:** 
>>>```spwn
>>>1829
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **TEXT**:
>>
>>> **Printed:** 
>>>```spwn
>>>914
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **USER\_COIN**:
>>
>>> **Printed:** 
>>>```spwn
>>>1329
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>
>## **triggers**:
>
>> **Printed:** 
>>```spwn
>>{COUNT: 1611,BG_EFFECT_OFF: 1819,ROTATE: 1346,FOLLOW_PLAYER_Y: 1814,ANIMATE: 1585,SHAKE: 1520,COLLISION: 1815,SHOW: 1613,ENABLE_TRAIL: 32,HIDE: 1612,SPAWN: 1268,... (12 more) }
>>``` 
>>**Type:** `@dictionary` 
>>
>>## Values:
>>
>>## **ALPHA**:
>>
>>> **Printed:** 
>>>```spwn
>>>1007
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **ANIMATE**:
>>
>>> **Printed:** 
>>>```spwn
>>>1585
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **BG\_EFFECT\_OFF**:
>>
>>> **Printed:** 
>>>```spwn
>>>1819
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **BG\_EFFECT\_ON**:
>>
>>> **Printed:** 
>>>```spwn
>>>1818
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **COLLISION**:
>>
>>> **Printed:** 
>>>```spwn
>>>1815
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **COLOR**:
>>
>>> **Printed:** 
>>>```spwn
>>>899
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **COUNT**:
>>
>>> **Printed:** 
>>>```spwn
>>>1611
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **DISABLE\_TRAIL**:
>>
>>> **Printed:** 
>>>```spwn
>>>33
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **ENABLE\_TRAIL**:
>>
>>> **Printed:** 
>>>```spwn
>>>32
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **FOLLOW**:
>>
>>> **Printed:** 
>>>```spwn
>>>1347
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **FOLLOW\_PLAYER\_Y**:
>>
>>> **Printed:** 
>>>```spwn
>>>1814
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **HIDE**:
>>
>>> **Printed:** 
>>>```spwn
>>>1612
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **INSTANT\_COUNT**:
>>
>>> **Printed:** 
>>>```spwn
>>>1811
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **MOVE**:
>>
>>> **Printed:** 
>>>```spwn
>>>901
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **ON\_DEATH**:
>>
>>> **Printed:** 
>>>```spwn
>>>1812
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **PICKUP**:
>>
>>> **Printed:** 
>>>```spwn
>>>1817
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **PULSE**:
>>
>>> **Printed:** 
>>>```spwn
>>>1006
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **ROTATE**:
>>
>>> **Printed:** 
>>>```spwn
>>>1346
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **SHAKE**:
>>
>>> **Printed:** 
>>>```spwn
>>>1520
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **SHOW**:
>>
>>> **Printed:** 
>>>```spwn
>>>1613
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **SPAWN**:
>>
>>> **Printed:** 
>>>```spwn
>>>1268
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **STOP**:
>>
>>> **Printed:** 
>>>```spwn
>>>1616
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **TOGGLE**:
>>
>>> **Printed:** 
>>>```spwn
>>>1049
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **TOUCH**:
>>
>>> **Printed:** 
>>>```spwn
>>>1595
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>

## **obj\_props**:

> **Type:** `@dictionary` 
>
>## Values:
>
>## **ACTIVATE\_GROUP**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 56,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>56
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **ACTIVATE\_ON\_EXIT**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 93,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>93
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **ACTIVE\_TRIGGER**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 36,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>36
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **ANIMATION\_ID**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 76,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>76
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **ANIMATION\_SPEED**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 107,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>107
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **BLENDING**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 17,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>17
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **BLOCK\_A**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 80,pattern: @block}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>80
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@block
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **BLOCK\_B**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 95,pattern: @block}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>95
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@block
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **CENTER**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 71,pattern: @group}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>71
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@group
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **COLOR**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 21,pattern: @color}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>21
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@color
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **COLOR\_2**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 22,pattern: @color}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>22
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@color
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **COLOR\_2\_HVS**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 44,pattern: @string}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>44
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@string
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **COLOR\_2\_HVS\_ENABLED**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 42,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>42
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **COMPARISON**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 88,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>88
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **COPIED\_COLOR\_HVS**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 49,pattern: @string}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>49
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@string
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **COPIED\_COLOR\_ID**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 50,pattern: @color}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>50
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@color
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **COPY\_OPACITY**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 60,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>60
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **COUNT**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 77,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>77
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **COUNT\_MULTI\_ACTIVATE**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 104,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>104
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **DELAY**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 91,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>91
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **DETAIL\_ONLY**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 66,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>66
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **DISABLE\_ROTATION**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 98,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>98
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **DONT\_ENTER**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 67,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>67
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **DONT\_FADE**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 64,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>64
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **DUAL\_MODE**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 89,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>89
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **DURATION**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 10,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>10
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **DYNAMIC\_BLOCK**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 94,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>94
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **EASING**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 30,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>30
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **EASING\_RATE**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 85,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>85
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **EDITOR\_DISABLE**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 102,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>102
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **EDITOR\_LAYER\_1**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 20,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>20
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **EDITOR\_LAYER\_2**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 61,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>61
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **EXCLUSIVE**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 86,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>86
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **FADE\_IN**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 45,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>45
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **FADE\_OUT**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 47,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>47
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **FOLLOW**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 71,pattern: @group}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>71
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@group
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **GLOW\_DISABLED**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 96,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>96
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **GROUPS**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 57,pattern: [@group] | @group}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>57
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>[@group] | @group
>>>``` 
>>>**Type:** `@pattern` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **GROUP\_PARENT**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 34,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>34
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **HIGH\_DETAIL**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 103,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>103
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **HOLD**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 46,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>46
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **HOLD\_MODE**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 81,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>81
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **HORIZONTAL\_FLIP**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 4,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>4
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **HVS**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 43,pattern: @string}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>43
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@string
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **HVS\_ENABLED**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 41,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>41
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **INTERVAL**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 84,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>84
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **ITEM**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 80,pattern: @item | @block}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>80
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@item | @block
>>>``` 
>>>**Type:** `@pattern` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **LINKED\_GROUP**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 108,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>108
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **LOCK\_OBJECT\_ROTATION**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 70,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>70
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **LOCK\_TO\_PLAYER\_X**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 58,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>58
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **LOCK\_TO\_PLAYER\_Y**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 59,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>59
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **MAIN\_ONLY**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 65,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>65
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **MAX\_SPEED**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 105,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>105
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **MOVE\_X**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 28,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>28
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **MOVE\_Y**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 29,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>29
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **MULTI\_TRIGGER**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 87,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>87
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **OBJ\_ID**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 1,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>1
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **OPACITY**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 35,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>35
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **PICKUP\_MODE**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 79,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>79
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **PLAYER\_COLOR\_1**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 15,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>15
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **PLAYER\_COLOR\_2**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 16,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>16
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **PORTAL\_CHECKED**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 13,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>13
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **PULSE\_HSV**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 48,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>48
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **RANDOMIZE\_START**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 106,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>106
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **ROTATE\_DEGREES**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 68,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>68
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **ROTATION**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 6,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>6
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **ROTATION\_SPEED**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 97,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>97
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **SCALING**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 32,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>32
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **SPAWN\_DURATION**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 63,pattern: @number | @epsilon}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>63
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number | @epsilon
>>>``` 
>>>**Type:** `@pattern` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **SPAWN\_TRIGGERED**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 62,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>62
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **SPEED**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 90,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>90
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **STRENGTH**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 75,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>75
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **SUBTRACT\_COUNT**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 78,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>78
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **TARGET**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 51,pattern: @color | @group | @trigger_function}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>51
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@color | @group | @trigger_function
>>>``` 
>>>**Type:** `@pattern` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **TARGET\_COLOR**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 23,pattern: @color}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>23
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@color
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **TARGET\_POS**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 71,pattern: @group}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>71
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@group
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **TARGET\_POS\_AXES**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 101,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>101
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **TARGET\_TYPE**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 52,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>52
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **TEXT**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 31,pattern: @string}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>31
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@string
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **TIMES\_360**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 69,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>69
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **TOGGLE\_MODE**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 82,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>82
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **TOUCH\_TRIGGERED**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 11,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>11
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **TRIGGER\_BLUE**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 9,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>9
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **TRIGGER\_GREEN**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 8,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>8
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **TRIGGER\_RED**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 7,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>7
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **USE\_TARGET**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 100,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>100
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **VERTICAL\_FLIP**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 5,pattern: @bool}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>5
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@bool
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **X**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 2,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>2
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **X\_MOD**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 72,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>72
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **Y**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 3,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>3
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **YELLOW\_TELEPORTATION\_PORTAL\_DISTANCE**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 54,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>54
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **Y\_MOD**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 73,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>73
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **Y\_OFFSET**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 92,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>92
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **Z\_LAYER**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 24,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>24
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
>## **Z\_ORDER**:
>
>> **Printed:** 
>>```spwn
>>@object_key::{id: 25,pattern: @number}
>>``` 
>>**Type:** `@object_key` 
>>
>>## Values:
>>
>>## **id**:
>>
>>> **Printed:** 
>>>```spwn
>>>25
>>>``` 
>>>**Type:** `@number` 
>>>
>>
>>## **pattern**:
>>
>>> **Printed:** 
>>>```spwn
>>>@number
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>>## **type**:
>>
>>> **Printed:** 
>>>```spwn
>>>@object_key
>>>``` 
>>>**Type:** `@type_indicator` 
>>>
>>
>
