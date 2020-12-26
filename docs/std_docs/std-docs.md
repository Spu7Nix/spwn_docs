# Documentation for `std` 
_This file was generated using `spwn doc [file name]`_
## Info:

- Uses 0 groups
- Uses 0 colors
- Uses 0 block IDs
- Uses 1 item IDs

- Adds 0 objects
## Exports:
**Type:** `dictionary` 

**Literal:** 

 ```

{
supress_signal: (delay: @number) { /* code omitted */ },
SMALLER_THAN: {
id: 2,
type: @comparison
},
obj_props: {
X_MOD: {
type: @object_key,
pattern: @number,
id: 72
},
HIGH_DETAIL: {
pattern: @bool,
type: @object_key,
id: 103
},
MAIN_ONLY: {
pattern: @bool,
id: 65,
type: @object_key
},
ROTATION_SPEED: {
type: @object_key,
id: 97,
pattern: @number
},
TOGGLE_MODE: {
pattern: @number,
id: 82,
type: @object_key
},
COMPARISON: {
type: @object_key,
id: 88,
pattern: @number
},
INTERVAL: {
pattern: @number,
id: 84,
type: @object_key
},
DUAL_MODE: {
pattern: @bool,
id: 89,
type: @object_key
},
BLOCK_A: {
id: 80,
type: @object_key,
pattern: @block
},
X: {
pattern: @number,
type: @object_key,
id: 2
},
... (83 more)
},
EXPONENTIAL_IN_OUT: {
id: 10,
type: @easing_type
},
call_with_delay: (time: @number | @epsilon = {
type: @epsilon
}, function: @function) { /* code omitted */ },
enable_trail: () { /* code omitted */ },
disable_trail: () { /* code omitted */ },
EQUAL_TO: {
id: 0,
type: @comparison
},
counter: (source: @number | @item | @bool = 0, delay: @bool = true) { /* code omitted */ },
touch_end: (dual_side: @bool = false) { /* code omitted */ },
... (31 more)
}

``` 

<details>
<summary> View members </summary>


## Macros:


**`call_with_delay`**:

>**Type:** `macro` 
>
>**Literal:** 
>
> ```
>
>(time: @number | @epsilon = {
>type: @epsilon
>}, function: @function) { /* code omitted */ }
>
>``` 
>
>## Description: 
> _Call a function after a delay_
>## Arguments:
>> _`time` (optional)_ : _Delay time in seconds (leave empty for minimum delay)_
>>
>>_Default value:_
>>
>>**Type:** `epsilon` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @epsilon
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@epsilon``` 
>>>
>>>
>>>
>>
>>
>>
>
>
>
>
>> **`function`** _(obligatory)_: _Function to call after the delay_
>
>
>
>
>
>

**`collision`**:

>**Type:** `macro` 
>
>**Literal:** ```(a: @block, b: @block) { /* code omitted */ }``` 
>
>## Description: 
> _Implementation of the collision trigger (returns an event)_
>## Arguments:
>> **`a`** _(obligatory)_: _Block A ID_
>
>
>
>
>> **`b`** _(obligatory)_: _Block B ID_
>
>
>
>
>
>

**`collision_exit`**:

>**Type:** `macro` 
>
>**Literal:** ```(a: @block, b: @block) { /* code omitted */ }``` 
>
>## Description: 
> _Returns an event for when a collision exits_
>## Arguments:
>> **`a`** _(obligatory)_: _Block A ID_
>
>
>
>
>> **`b`** _(obligatory)_: _Block B ID_
>
>
>
>
>
>

**`counter`**:

>**Type:** `macro` 
>
>**Literal:** ```(source: @number | @item | @bool = 0, delay: @bool = true) { /* code omitted */ }``` 
>
>## Description: 
> _Creates a new counter_
>## Arguments:
>> _`source` (optional)_ : _Source (can be a number, item ID or boolean)_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```0``` 
>>
>>
>>
>>
>
>
>
>
>> _`delay` (optional)_ : _Adds a delay if a value gets added to the new item (to avoid confusing behavior)_
>>
>>_Default value:_
>>
>>**Type:** `bool` 
>>
>>**Literal:** ```true``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`death`**:

>**Type:** `macro` 
>
>**Literal:** ```() { /* code omitted */ }``` 
>
>## Description: 
> _Returns an event for when the player dies_
>
>

**`disable_trail`**:

>**Type:** `macro` 
>
>**Literal:** ```() { /* code omitted */ }``` 
>
>## Description: 
> _Disables the player's trail_
>
>

**`enable_trail`**:

>**Type:** `macro` 
>
>**Literal:** ```() { /* code omitted */ }``` 
>
>## Description: 
> _Enables the player's trail_
>
>

**`for_loop`**:

>**Type:** `macro` 
>
>**Literal:** 
>
> ```
>
>(range: @range, code: @macro, delay: @number | @epsilon = {
>type: @epsilon
>}, reset: @bool = true, reset_speed: @number = 1) { /* code omitted */ }
>
>``` 
>
>## Description: 
> _Implementation of a spawn loop with a counter_
>## Arguments:
>> **`range`** _(obligatory)_: _Range of values (for example 0..10)_
>
>
>
>
>> **`code`** _(obligatory)_: _Macro of the code that gets looped, should take the iterator (a counter) as the first argument._
>
>
>
>
>> _`delay` (optional)_ : _Delay between loops (less than 0.05 may be unstable)_
>>
>>_Default value:_
>>
>>**Type:** `epsilon` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @epsilon
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@epsilon``` 
>>>
>>>
>>>
>>
>>
>>
>
>
>
>
>> _`reset` (optional)_ : _Weather to reset the iterator after looping (only disable if the loop is only triggered once)_
>>
>>_Default value:_
>>
>>**Type:** `bool` 
>>
>>**Literal:** ```true``` 
>>
>>
>>
>>
>
>
>
>
>> _`reset_speed` (optional)_ : _Operation speed of the reset of the iterator, if enabled_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```1``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`hide_player`**:

>**Type:** `macro` 
>
>**Literal:** ```() { /* code omitted */ }``` 
>
>## Description: 
> _Hides the player_
>
>

**`on`**:

>**Type:** `macro` 
>
>**Literal:** ```(event: @event, function: @function) { /* code omitted */ }``` 
>
>## Description: 
> _Triggers a function every time an event fires_
>## Arguments:
>> **`event`** _(obligatory)_: _Event to trigger on_
>
>
>
>
>> **`function`** _(obligatory)_: _Function to trigger_
>
>
>
>
>
>

**`shake`**:

>**Type:** `macro` 
>
>**Literal:** ```(strength: @number = 1, interval: @number = 0, duration: @number = 0.5) { /* code omitted */ }``` 
>
>## Description: 
> _Implementation of the shake trigger_
>## Arguments:
>> _`strength` (optional)_ : _Strength value_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```1``` 
>>
>>
>>
>>
>
>
>
>
>> _`interval` (optional)_ : _Interval value_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```0``` 
>>
>>
>>
>>
>
>
>
>
>> _`duration` (optional)_ : _Duration of shake_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```0.5``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`show_player`**:

>**Type:** `macro` 
>
>**Literal:** ```() { /* code omitted */ }``` 
>
>## Description: 
> _Shows the player_
>
>

**`supress_signal`**:

>**Type:** `macro` 
>
>**Literal:** ```(delay: @number) { /* code omitted */ }``` 
>
>## Description: 
> _Stops signal from coming past for some time_
>## Arguments:
>> **`delay`** _(obligatory)_: _Time to supress signal_
>
>
>
>
>
>

**`toggle_bg_effect`**:

>**Type:** `macro` 
>
>**Literal:** ```(on: @bool = false) { /* code omitted */ }``` 
>
>## Description: 
> _Implementation of the bg effect on/off triggers_
>## Arguments:
>> _`on` (optional)_ : _Weather to toggle bg effect on or off_
>>
>>_Default value:_
>>
>>**Type:** `bool` 
>>
>>**Literal:** ```false``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`touch`**:

>**Type:** `macro` 
>
>**Literal:** ```(dual_side: @bool = false) { /* code omitted */ }``` 
>
>## Description: 
> _Implementation of the touch trigger (returns an event)_
>## Arguments:
>> _`dual_side` (optional)_ : _Dual mode (only check for touch on the dual side)_
>>
>>_Default value:_
>>
>>**Type:** `bool` 
>>
>>**Literal:** ```false``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`touch_end`**:

>**Type:** `macro` 
>
>**Literal:** ```(dual_side: @bool = false) { /* code omitted */ }``` 
>
>## Description: 
> _Returns an event for when a touch ends_
>## Arguments:
>> _`dual_side` (optional)_ : _Dual mode (only check for touch on the dual side)_
>>
>>_Default value:_
>>
>>**Type:** `bool` 
>>
>>**Literal:** ```false``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`wait`**:

>**Type:** `macro` 
>
>**Literal:** 
>
> ```
>
>(time: @number | @epsilon = {
>type: @epsilon
>}) { /* code omitted */ }
>
>``` 
>
>## Description: 
> _Adds a delay before the next triggers_
>## Arguments:
>> _`time` (optional)_ : _Delay time in seconds (leave empty for minimum delay)_
>>
>>_Default value:_
>>
>>**Type:** `epsilon` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @epsilon
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@epsilon``` 
>>>
>>>
>>>
>>
>>
>>
>
>
>
>
>
>

**`while_loop`**:

>**Type:** `macro` 
>
>**Literal:** 
>
> ```
>
>(expr: @macro, code: @macro, delay: @number | @epsilon = {
>type: @epsilon
>}) { /* code omitted */ }
>
>``` 
>
>## Description: 
> _Implementation of a conditional spawn loop_
>## Arguments:
>> **`expr`** _(obligatory)_: _While loop condition, should return a boolean_
>
>
>
>
>> **`code`** _(obligatory)_: _Macro of the code that gets looped_
>
>
>
>
>> _`delay` (optional)_ : _Delay between loops (less than 0.05 may be unstable)_
>>
>>_Default value:_
>>
>>**Type:** `epsilon` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @epsilon
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@epsilon``` 
>>>
>>>
>>>
>>
>>
>>
>
>
>
>
>
>
## Other values:

<details>
<summary> View </summary>

**`BACK_IN`**:

>**Type:** `easing_type` 
>
>**Literal:** 
>
> ```
>
>{
>id: 17,
>type: @easing_type
>}
>
>``` 
>
><details>
><summary> View members </summary>
>
>**`id`**:
>
>>**Type:** `number` 
>>
>>**Literal:** ```17``` 
>>
>>
>>
>
>**`type`**:
>
>>**Type:** `type_indicator` 
>>
>>**Literal:** ```@easing_type``` 
>>
>>
>>
>
>

**`BACK_IN_OUT`**:

>**Type:** `easing_type` 
>
>**Literal:** 
>
> ```
>
>{
>type: @easing_type,
>id: 16
>}
>
>``` 
>
><details>
><summary> View members </summary>
>
>**`id`**:
>
>>**Type:** `number` 
>>
>>**Literal:** ```16``` 
>>
>>
>>
>
>**`type`**:
>
>>**Type:** `type_indicator` 
>>
>>**Literal:** ```@easing_type``` 
>>
>>
>>
>
>

**`BACK_OUT`**:

>**Type:** `easing_type` 
>
>**Literal:** 
>
> ```
>
>{
>type: @easing_type,
>id: 18
>}
>
>``` 
>
><details>
><summary> View members </summary>
>
>**`id`**:
>
>>**Type:** `number` 
>>
>>**Literal:** ```18``` 
>>
>>
>>
>
>**`type`**:
>
>>**Type:** `type_indicator` 
>>
>>**Literal:** ```@easing_type``` 
>>
>>
>>
>
>

**`BG`**:

>**Type:** `color` 
>
>**Literal:** ```1000c``` 
>
>
>

**`BOUNCE_IN`**:

>**Type:** `easing_type` 
>
>**Literal:** 
>
> ```
>
>{
>type: @easing_type,
>id: 8
>}
>
>``` 
>
><details>
><summary> View members </summary>
>
>**`id`**:
>
>>**Type:** `number` 
>>
>>**Literal:** ```8``` 
>>
>>
>>
>
>**`type`**:
>
>>**Type:** `type_indicator` 
>>
>>**Literal:** ```@easing_type``` 
>>
>>
>>
>
>

**`BOUNCE_IN_OUT`**:

>**Type:** `easing_type` 
>
>**Literal:** 
>
> ```
>
>{
>type: @easing_type,
>id: 7
>}
>
>``` 
>
><details>
><summary> View members </summary>
>
>**`id`**:
>
>>**Type:** `number` 
>>
>>**Literal:** ```7``` 
>>
>>
>>
>
>**`type`**:
>
>>**Type:** `type_indicator` 
>>
>>**Literal:** ```@easing_type``` 
>>
>>
>>
>
>

**`BOUNCE_OUT`**:

>**Type:** `easing_type` 
>
>**Literal:** 
>
> ```
>
>{
>id: 9,
>type: @easing_type
>}
>
>``` 
>
><details>
><summary> View members </summary>
>
>**`id`**:
>
>>**Type:** `number` 
>>
>>**Literal:** ```9``` 
>>
>>
>>
>
>**`type`**:
>
>>**Type:** `type_indicator` 
>>
>>**Literal:** ```@easing_type``` 
>>
>>
>>
>
>

**`EASE_IN`**:

>**Type:** `easing_type` 
>
>**Literal:** 
>
> ```
>
>{
>type: @easing_type,
>id: 2
>}
>
>``` 
>
><details>
><summary> View members </summary>
>
>**`id`**:
>
>>**Type:** `number` 
>>
>>**Literal:** ```2``` 
>>
>>
>>
>
>**`type`**:
>
>>**Type:** `type_indicator` 
>>
>>**Literal:** ```@easing_type``` 
>>
>>
>>
>
>

**`EASE_IN_OUT`**:

>**Type:** `easing_type` 
>
>**Literal:** 
>
> ```
>
>{
>type: @easing_type,
>id: 1
>}
>
>``` 
>
><details>
><summary> View members </summary>
>
>**`id`**:
>
>>**Type:** `number` 
>>
>>**Literal:** ```1``` 
>>
>>
>>
>
>**`type`**:
>
>>**Type:** `type_indicator` 
>>
>>**Literal:** ```@easing_type``` 
>>
>>
>>
>
>

**`EASE_OUT`**:

>**Type:** `easing_type` 
>
>**Literal:** 
>
> ```
>
>{
>type: @easing_type,
>id: 3
>}
>
>``` 
>
><details>
><summary> View members </summary>
>
>**`id`**:
>
>>**Type:** `number` 
>>
>>**Literal:** ```3``` 
>>
>>
>>
>
>**`type`**:
>
>>**Type:** `type_indicator` 
>>
>>**Literal:** ```@easing_type``` 
>>
>>
>>
>
>

**`ELASTIC_IN`**:

>**Type:** `easing_type` 
>
>**Literal:** 
>
> ```
>
>{
>type: @easing_type,
>id: 5
>}
>
>``` 
>
><details>
><summary> View members </summary>
>
>**`id`**:
>
>>**Type:** `number` 
>>
>>**Literal:** ```5``` 
>>
>>
>>
>
>**`type`**:
>
>>**Type:** `type_indicator` 
>>
>>**Literal:** ```@easing_type``` 
>>
>>
>>
>
>

**`ELASTIC_IN_OUT`**:

>**Type:** `easing_type` 
>
>**Literal:** 
>
> ```
>
>{
>id: 4,
>type: @easing_type
>}
>
>``` 
>
><details>
><summary> View members </summary>
>
>**`id`**:
>
>>**Type:** `number` 
>>
>>**Literal:** ```4``` 
>>
>>
>>
>
>**`type`**:
>
>>**Type:** `type_indicator` 
>>
>>**Literal:** ```@easing_type``` 
>>
>>
>>
>
>

**`ELASTIC_OUT`**:

>**Type:** `easing_type` 
>
>**Literal:** 
>
> ```
>
>{
>type: @easing_type,
>id: 6
>}
>
>``` 
>
><details>
><summary> View members </summary>
>
>**`id`**:
>
>>**Type:** `number` 
>>
>>**Literal:** ```6``` 
>>
>>
>>
>
>**`type`**:
>
>>**Type:** `type_indicator` 
>>
>>**Literal:** ```@easing_type``` 
>>
>>
>>
>
>

**`EQUAL_TO`**:

>**Type:** `comparison` 
>
>**Literal:** 
>
> ```
>
>{
>id: 0,
>type: @comparison
>}
>
>``` 
>
><details>
><summary> View members </summary>
>
>**`id`**:
>
>>**Type:** `number` 
>>
>>**Literal:** ```0``` 
>>
>>
>>
>
>**`type`**:
>
>>**Type:** `type_indicator` 
>>
>>**Literal:** ```@comparison``` 
>>
>>
>>
>
>

**`EXPONENTIAL_IN`**:

>**Type:** `easing_type` 
>
>**Literal:** 
>
> ```
>
>{
>id: 11,
>type: @easing_type
>}
>
>``` 
>
><details>
><summary> View members </summary>
>
>**`id`**:
>
>>**Type:** `number` 
>>
>>**Literal:** ```11``` 
>>
>>
>>
>
>**`type`**:
>
>>**Type:** `type_indicator` 
>>
>>**Literal:** ```@easing_type``` 
>>
>>
>>
>
>

**`EXPONENTIAL_IN_OUT`**:

>**Type:** `easing_type` 
>
>**Literal:** 
>
> ```
>
>{
>id: 10,
>type: @easing_type
>}
>
>``` 
>
><details>
><summary> View members </summary>
>
>**`id`**:
>
>>**Type:** `number` 
>>
>>**Literal:** ```10``` 
>>
>>
>>
>
>**`type`**:
>
>>**Type:** `type_indicator` 
>>
>>**Literal:** ```@easing_type``` 
>>
>>
>>
>
>

**`EXPONENTIAL_OUT`**:

>**Type:** `easing_type` 
>
>**Literal:** 
>
> ```
>
>{
>type: @easing_type,
>id: 12
>}
>
>``` 
>
><details>
><summary> View members </summary>
>
>**`id`**:
>
>>**Type:** `number` 
>>
>>**Literal:** ```12``` 
>>
>>
>>
>
>**`type`**:
>
>>**Type:** `type_indicator` 
>>
>>**Literal:** ```@easing_type``` 
>>
>>
>>
>
>

**`LARGER_THAN`**:

>**Type:** `comparison` 
>
>**Literal:** 
>
> ```
>
>{
>type: @comparison,
>id: 1
>}
>
>``` 
>
><details>
><summary> View members </summary>
>
>**`id`**:
>
>>**Type:** `number` 
>>
>>**Literal:** ```1``` 
>>
>>
>>
>
>**`type`**:
>
>>**Type:** `type_indicator` 
>>
>>**Literal:** ```@comparison``` 
>>
>>
>>
>
>

**`NONE`**:

>**Type:** `easing_type` 
>
>**Literal:** 
>
> ```
>
>{
>type: @easing_type,
>id: 0
>}
>
>``` 
>
><details>
><summary> View members </summary>
>
>**`id`**:
>
>>**Type:** `number` 
>>
>>**Literal:** ```0``` 
>>
>>
>>
>
>**`type`**:
>
>>**Type:** `type_indicator` 
>>
>>**Literal:** ```@easing_type``` 
>>
>>
>>
>
>

**`SINE_IN`**:

>**Type:** `easing_type` 
>
>**Literal:** 
>
> ```
>
>{
>type: @easing_type,
>id: 14
>}
>
>``` 
>
><details>
><summary> View members </summary>
>
>**`id`**:
>
>>**Type:** `number` 
>>
>>**Literal:** ```14``` 
>>
>>
>>
>
>**`type`**:
>
>>**Type:** `type_indicator` 
>>
>>**Literal:** ```@easing_type``` 
>>
>>
>>
>
>

**`SINE_IN_OUT`**:

>**Type:** `easing_type` 
>
>**Literal:** 
>
> ```
>
>{
>type: @easing_type,
>id: 13
>}
>
>``` 
>
><details>
><summary> View members </summary>
>
>**`id`**:
>
>>**Type:** `number` 
>>
>>**Literal:** ```13``` 
>>
>>
>>
>
>**`type`**:
>
>>**Type:** `type_indicator` 
>>
>>**Literal:** ```@easing_type``` 
>>
>>
>>
>
>

**`SINE_OUT`**:

>**Type:** `easing_type` 
>
>**Literal:** 
>
> ```
>
>{
>id: 15,
>type: @easing_type
>}
>
>``` 
>
><details>
><summary> View members </summary>
>
>**`id`**:
>
>>**Type:** `number` 
>>
>>**Literal:** ```15``` 
>>
>>
>>
>
>**`type`**:
>
>>**Type:** `type_indicator` 
>>
>>**Literal:** ```@easing_type``` 
>>
>>
>>
>
>

**`SMALLER_THAN`**:

>**Type:** `comparison` 
>
>**Literal:** 
>
> ```
>
>{
>id: 2,
>type: @comparison
>}
>
>``` 
>
><details>
><summary> View members </summary>
>
>**`id`**:
>
>>**Type:** `number` 
>>
>>**Literal:** ```2``` 
>>
>>
>>
>
>**`type`**:
>
>>**Type:** `type_indicator` 
>>
>>**Literal:** ```@comparison``` 
>>
>>
>>
>
>

**`obj_props`**:

>**Type:** `dictionary` 
>
>**Literal:** 
>
> ```
>
>{
>X_MOD: {
>type: @object_key,
>pattern: @number,
>id: 72
>},
>HIGH_DETAIL: {
>pattern: @bool,
>type: @object_key,
>id: 103
>},
>MAIN_ONLY: {
>pattern: @bool,
>id: 65,
>type: @object_key
>},
>ROTATION_SPEED: {
>type: @object_key,
>id: 97,
>pattern: @number
>},
>TOGGLE_MODE: {
>pattern: @number,
>id: 82,
>type: @object_key
>},
>COMPARISON: {
>type: @object_key,
>id: 88,
>pattern: @number
>},
>INTERVAL: {
>pattern: @number,
>id: 84,
>type: @object_key
>},
>DUAL_MODE: {
>pattern: @bool,
>id: 89,
>type: @object_key
>},
>BLOCK_A: {
>id: 80,
>type: @object_key,
>pattern: @block
>},
>X: {
>pattern: @number,
>type: @object_key,
>id: 2
>},
>... (83 more)
>}
>
>``` 
>
><details>
><summary> View members </summary>
>
>**`ACTIVATE_GROUP`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>id: 56,
>>pattern: @bool
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```56``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`ACTIVATE_ON_EXIT`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>id: 93,
>>pattern: @bool
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```93``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`ANIMATION_ID`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>id: 76,
>>pattern: @number
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```76``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`ANIMATION_SPEED`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @number,
>>type: @object_key,
>>id: 107
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```107``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`BLENDING`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>id: 17,
>>type: @object_key,
>>pattern: @bool
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```17``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`BLOCK_A`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>id: 80,
>>type: @object_key,
>>pattern: @block
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```80``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@block``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`BLOCK_B`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @block,
>>id: 95,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```95``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@block``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`CENTER`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>pattern: @group,
>>id: 71
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```71``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@group``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`COLOR`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @color,
>>id: 21,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```21``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@color``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`COLOR_2`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @color,
>>id: 22,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```22``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@color``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`COLOR_2_HVS`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>id: 44,
>>pattern: @string
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```44``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@string``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`COLOR_2_HVS_ENABLED`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>pattern: @bool,
>>id: 42
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```42``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`COMPARISON`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>id: 88,
>>pattern: @number
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```88``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`COPIED_COLOR_HVS`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>pattern: @string,
>>id: 49
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```49``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@string``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`COPIED_COLOR_ID`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>id: 50,
>>pattern: @color
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```50``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@color``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`COPY_OPACTITY`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>pattern: @bool,
>>id: 60
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```60``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`COUNT`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>pattern: @number,
>>id: 77
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```77``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`COUNT_MULTI_ACTIVATE`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @bool,
>>type: @object_key,
>>id: 104
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```104``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`DELAY`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>id: 91,
>>pattern: @number,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```91``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`DETAIL_ONLY`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @bool,
>>id: 66,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```66``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`DISABLE_ROTATION`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @bool,
>>id: 98,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```98``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`DONT_ENTER`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>id: 67,
>>pattern: @bool,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```67``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`DONT_FADE`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @bool,
>>type: @object_key,
>>id: 64
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```64``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`DUAL_MODE`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @bool,
>>id: 89,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```89``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`DURATION`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>pattern: @number,
>>id: 10
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```10``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`DYNAMIC_BLOCK`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>id: 94,
>>pattern: @bool
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```94``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`EASING`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>pattern: @number,
>>id: 30
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```30``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`EASING_RATE`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @number,
>>type: @object_key,
>>id: 85
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```85``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`EDITOR_DISABLE`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>id: 102,
>>pattern: @bool
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```102``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`EDITOR_LAYER_1`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @number,
>>type: @object_key,
>>id: 20
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```20``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`EDITOR_LAYER_2`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @number,
>>type: @object_key,
>>id: 61
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```61``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`EXCLUSIVE`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @bool,
>>type: @object_key,
>>id: 86
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```86``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`FADE_IN`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @number,
>>type: @object_key,
>>id: 45
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```45``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`FADE_OUT`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>id: 47,
>>pattern: @number
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```47``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`FOLLOW`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>id: 71,
>>pattern: @group
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```71``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@group``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`GLOW_DISABLED`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>id: 96,
>>pattern: @bool
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```96``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`GROUPS`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: [@group] | @group,
>>type: @object_key,
>>id: 57
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```57``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `pattern` 
>>>
>>>**Literal:** ```[@group] | @group``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`GROUP_PARENT`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @bool,
>>type: @object_key,
>>id: 34
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```34``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`HIGH_DETAIL`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @bool,
>>type: @object_key,
>>id: 103
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```103``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`HOLD`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @number,
>>id: 46,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```46``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`HOLD_MODE`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>id: 81,
>>pattern: @bool
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```81``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`HORIZONTAL_FLIP`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>id: 4,
>>pattern: @bool
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```4``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`HVS`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>id: 43,
>>pattern: @string
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```43``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@string``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`HVS_ENABLED`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>pattern: @bool,
>>id: 41
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```41``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`INTERVAL`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @number,
>>id: 84,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```84``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`ITEM`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @item,
>>type: @object_key,
>>id: 80
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```80``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@item``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`LINKED_GROUP`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>id: 108,
>>pattern: @number
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```108``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`LOCK_OBJECT_ROTATION`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>id: 70,
>>pattern: @bool,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```70``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`LOCK_TO_PLAYER_X`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @bool,
>>id: 58,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```58``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`LOCK_TO_PLAYER_Y`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>id: 59,
>>type: @object_key,
>>pattern: @bool
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```59``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`MAIN_ONLY`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @bool,
>>id: 65,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```65``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`MAX_SPEED`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>id: 105,
>>pattern: @number
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```105``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`MOVE_X`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>id: 28,
>>pattern: @number
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```28``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`MOVE_Y`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>id: 29,
>>type: @object_key,
>>pattern: @number
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```29``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`MULTI_TRIGGER`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @bool,
>>id: 87,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```87``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`OBJ_ID`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>id: 1,
>>type: @object_key,
>>pattern: @number
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```1``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`OPACITY`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @number,
>>id: 35,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```35``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`PICKUP_MODE`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>id: 79,
>>type: @object_key,
>>pattern: @number
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```79``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`PLAYER_COLOR_1`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @bool,
>>id: 15,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```15``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`PLAYER_COLOR_2`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>id: 16,
>>pattern: @bool
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```16``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`PORTAL_CHECKED`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>id: 13,
>>type: @object_key,
>>pattern: @bool
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```13``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`PULSE_HSV`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>id: 48,
>>pattern: @bool,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```48``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`RANDOMIZE_START`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>id: 106,
>>pattern: @bool
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```106``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`ROTATE_DEGREES`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @number,
>>type: @object_key,
>>id: 68
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```68``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`ROTATION`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @number,
>>id: 6,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```6``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`ROTATION_SPEED`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>id: 97,
>>pattern: @number
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```97``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`SCALING`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>pattern: @number,
>>id: 32
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```32``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`SPAWN_DURATION`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>pattern: @number | @epsilon,
>>id: 63
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```63``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `pattern` 
>>>
>>>**Literal:** ```@number | @epsilon``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`SPAWN_TRIGGERED`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @bool,
>>id: 62,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```62``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`SPEED`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>pattern: @number,
>>id: 90
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```90``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`STRENGTH`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>id: 75,
>>pattern: @number,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```75``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`SUBTRACT_COUNT`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>id: 78,
>>pattern: @number
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```78``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`TARGET`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>id: 51,
>>pattern: @color | @group | @function
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```51``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `pattern` 
>>>
>>>**Literal:** ```@color | @group | @function``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`TARGET_COLOR`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>id: 23,
>>pattern: @color,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```23``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@color``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`TARGET_POS`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @group,
>>id: 71,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```71``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@group``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`TARGET_POS_AXES`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>pattern: @number,
>>id: 101
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```101``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`TARGET_TYPE`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>id: 52,
>>pattern: @number,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```52``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`TEXT`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>id: 31,
>>pattern: @string,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```31``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@string``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`TIMES_360`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @number,
>>type: @object_key,
>>id: 69
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```69``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`TOGGLE_MODE`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @number,
>>id: 82,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```82``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`TOUCH_TRIGGERED`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>id: 11,
>>type: @object_key,
>>pattern: @bool
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```11``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`TRIGGER_BLUE`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @number,
>>id: 9,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```9``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`TRIGGER_GREEN`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @number,
>>type: @object_key,
>>id: 8
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```8``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`TRIGGER_RED`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @number,
>>type: @object_key,
>>id: 7
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```7``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`USE_TARGET`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>pattern: @bool,
>>id: 100
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```100``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`VERTICAL_FLIP`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @bool,
>>id: 5,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```5``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@bool``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`X`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @number,
>>type: @object_key,
>>id: 2
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```2``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`X_MOD`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>pattern: @number,
>>id: 72
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```72``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`Y`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>id: 3,
>>pattern: @number
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```3``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`YELLOW_TELEPORTATION_PORTAL_DISTANCE`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @number,
>>type: @object_key,
>>id: 54
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```54``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`Y_MOD`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>pattern: @number,
>>id: 73
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```73``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`Y_OFFSET`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @object_key,
>>pattern: @number,
>>id: 92
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```92``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`Z_LAYER`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>pattern: @number,
>>id: 24,
>>type: @object_key
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```24``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>**`Z_ORDER`**:
>
>>**Type:** `object_key` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>id: 25,
>>type: @object_key,
>>pattern: @number
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```25``` 
>>>
>>>
>>>
>>
>>**`pattern`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@number``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@object_key``` 
>>>
>>>
>>>
>>
>>
>
>


</details>

</details>


## Type Implementations:
### **@group**: 
 <details>
<summary> View members </summary>

**`alpha`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, opacity: @number = 1, duration: @number = 0) { /* code omitted */ }``` 
>
>## Description: 
> _Implementation of the alpha trigger_
>## Arguments:
>> _`opacity` (optional)_ 
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```1``` 
>>
>>
>>
>>
>
>
>
>
>> _`duration` (optional)_ 
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```0``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`follow`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, other: @group, x_mod: @number = 1, y_mod: @number = 1, duration: @number = 999) { /* code omitted */ }``` 
>
>## Description: 
> _Implementation of the follow trigger_
>## Arguments:
>> **`other`** _(obligatory)_: _Group of object to follow_
>
>
>
>
>> _`x_mod` (optional)_ : _Multiplier for the movement on the X-axis_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```1``` 
>>
>>
>>
>>
>
>
>
>
>> _`y_mod` (optional)_ : _Multiplier for the movement on the Y-axis_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```1``` 
>>
>>
>>
>>
>
>
>
>
>> _`duration` (optional)_ : _Duration of following_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```999``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`follow_player_y`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, speed: @number = 1, delay: @number = 0, offset: @number = 0, max_speed: @number = 0, duration: @number = 999) { /* code omitted */ }``` 
>
>## Description: 
> _Implementation of the follow player Y trigger_
>## Arguments:
>> _`speed` (optional)_ : _Interpolation factor (?)_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```1``` 
>>
>>
>>
>>
>
>
>
>
>> _`delay` (optional)_ : _Delay of movement_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```0``` 
>>
>>
>>
>>
>
>
>
>
>> _`offset` (optional)_ : _Offset on the Y-axis_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```0``` 
>>
>>
>>
>>
>
>
>
>
>> _`max_speed` (optional)_ : _Maximum speed_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```0``` 
>>
>>
>>
>>
>
>
>
>
>> _`duration` (optional)_ : _Duration of following_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```999``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`lock_to_player`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, lock_x: @bool = true, lock_y: @bool = true, duration: @number = 999) { /* code omitted */ }``` 
>
>## Description: 
> _Lock group to player position_
>## Arguments:
>> _`lock_x` (optional)_ : _Lock to player X_
>>
>>_Default value:_
>>
>>**Type:** `bool` 
>>
>>**Literal:** ```true``` 
>>
>>
>>
>>
>
>
>
>
>> _`lock_y` (optional)_ : _Lock to player Y_
>>
>>_Default value:_
>>
>>**Type:** `bool` 
>>
>>**Literal:** ```true``` 
>>
>>
>>
>>
>
>
>
>
>> _`duration` (optional)_ : _Duration of lock_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```999``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`move`**:

>**Type:** `macro` 
>
>**Literal:** 
>
> ```
>
>(self, x: @number, y: @number, duration: @number = 0, easing: @easing_type = {
>id: 0,
>type: @easing_type
>}, easing_rate: @number = 2) { /* code omitted */ }
>
>``` 
>
>## Description: 
> _Implementation of the move trigger_
>## Arguments:
>> **`x`** _(obligatory)_: _Units to move on the X axis_
>
>
>
>
>> **`y`** _(obligatory)_: _Units to move on the Y axis_
>
>
>
>
>> _`duration` (optional)_ : _Duration of movement_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```0``` 
>>
>>
>>
>>
>
>
>
>
>> _`easing` (optional)_ 
>>
>>_Default value:_
>>
>>**Type:** `easing_type` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>id: 0,
>>type: @easing_type
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```0``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@easing_type``` 
>>>
>>>
>>>
>>
>>
>>
>
>
>
>
>> _`easing_rate` (optional)_ 
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```2``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`move_to`**:

>**Type:** `macro` 
>
>**Literal:** 
>
> ```
>
>(self, target: @group, duration: @number = 0, x_only: @bool = false, y_only: @bool = false, easing: @easing_type = {
>id: 0,
>type: @easing_type
>}, easing_rate: @number = 2) { /* code omitted */ }
>
>``` 
>
>## Description: 
> _Implementation of the 'Move target' feature of the move trigger_
>## Arguments:
>> **`target`** _(obligatory)_: _Group of the object to move to_
>
>
>
>
>> _`duration` (optional)_ : _Duration of movement_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```0``` 
>>
>>
>>
>>
>
>
>
>
>> _`x_only` (optional)_ : _Will move to the object only on the X-axis_
>>
>>_Default value:_
>>
>>**Type:** `bool` 
>>
>>**Literal:** ```false``` 
>>
>>
>>
>>
>
>
>
>
>> _`y_only` (optional)_ : _Will move to the object only on the y-axis_
>>
>>_Default value:_
>>
>>**Type:** `bool` 
>>
>>**Literal:** ```false``` 
>>
>>
>>
>>
>
>
>
>
>> _`easing` (optional)_ : _Easing type_
>>
>>_Default value:_
>>
>>**Type:** `easing_type` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>id: 0,
>>type: @easing_type
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```0``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@easing_type``` 
>>>
>>>
>>>
>>
>>
>>
>
>
>
>
>> _`easing_rate` (optional)_ : _Easing rate_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```2``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`pulse`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, r: @number, g: @number, b: @number, fade_in: @number = 0, hold: @number = 0, fade_out: @number = 0, exclusive: @bool = false, hsv: @bool = false) { /* code omitted */ }``` 
>
>## Description: 
> _Implementation of the pulse trigger for groups_
>## Arguments:
>> **`r`** _(obligatory)_: _Red value of pulse color (or hue if HSV is enabled)_
>
>
>
>
>> **`g`** _(obligatory)_: _Green value of pulse color (or saturation if HSV is enabled)_
>
>
>
>
>> **`b`** _(obligatory)_: _Blue value of pulse color (or brightness/value if HSV is enabled)_
>
>
>
>
>> _`fade_in` (optional)_ : _Fade-in duration_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```0``` 
>>
>>
>>
>>
>
>
>
>
>> _`hold` (optional)_ : _Duration to hold the color_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```0``` 
>>
>>
>>
>>
>
>
>
>
>> _`fade_out` (optional)_ : _Fade-out duration_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```0``` 
>>
>>
>>
>>
>
>
>
>
>> _`exclusive` (optional)_ : _Weather to prioritize this pulse over simultaneous pulses_
>>
>>_Default value:_
>>
>>**Type:** `bool` 
>>
>>**Literal:** ```false``` 
>>
>>
>>
>>
>
>
>
>
>> _`hsv` (optional)_ : _Toggle HSV mode_
>>
>>_Default value:_
>>
>>**Type:** `bool` 
>>
>>**Literal:** ```false``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`rotate`**:

>**Type:** `macro` 
>
>**Literal:** 
>
> ```
>
>(self, center: @group, degrees: @number, duration: @number = 0, easing: @easing_type = {
>id: 0,
>type: @easing_type
>}, easing_rate: @number = 2, lock_object_rotation: @bool = false) { /* code omitted */ }
>
>``` 
>
>## Description: 
> _Implementation of the rotate trigger_
>## Arguments:
>> **`center`** _(obligatory)_: _Group of object to rotate around_
>
>
>
>
>> **`degrees`** _(obligatory)_: _Rotation in degrees_
>
>
>
>
>> _`duration` (optional)_ : _Duration of rotation_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```0``` 
>>
>>
>>
>>
>
>
>
>
>> _`easing` (optional)_ : _Easing type_
>>
>>_Default value:_
>>
>>**Type:** `easing_type` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>id: 0,
>>type: @easing_type
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`id`**:
>>
>>>**Type:** `number` 
>>>
>>>**Literal:** ```0``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@easing_type``` 
>>>
>>>
>>>
>>
>>
>>
>
>
>
>
>> _`easing_rate` (optional)_ : _Easing rate_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```2``` 
>>
>>
>>
>>
>
>
>
>
>> _`lock_object_rotation` (optional)_ : _Only rotate positions of the objects, not the textures_
>>
>>_Default value:_
>>
>>**Type:** `bool` 
>>
>>**Literal:** ```false``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`stop`**:

>**Type:** `macro` 
>
>**Literal:** ```(self) { /* code omitted */ }``` 
>
>## Description: 
> _Implementation of the stop trigger_
>
>

**`toggle_off`**:

>**Type:** `macro` 
>
>**Literal:** ```(self) { /* code omitted */ }``` 
>
>## Description: 
> _Toggles the group off_
>
>

**`toggle_on`**:

>**Type:** `macro` 
>
>**Literal:** ```(self) { /* code omitted */ }``` 
>
>## Description: 
> _Toggles the group on_
>
>
</details>

### **@color**: 
 <details>
<summary> View members </summary>

**`pulse`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, r: @number, g: @number, b: @number, fade_in: @number = 0, hold: @number = 0, fade_out: @number = 0, exclusive: @bool = false, hsv: @bool = false) { /* code omitted */ }``` 
>
>## Description: 
> _Implementation of the pulse trigger for colors_
>## Arguments:
>> **`r`** _(obligatory)_: _Red value of pulse color (or hue if HSV is enabled)_
>
>
>
>
>> **`g`** _(obligatory)_: _Green value of pulse color (or saturation if HSV is enabled)_
>
>
>
>
>> **`b`** _(obligatory)_: _Blue value of pulse color (or brightness/value if HSV is enabled)_
>
>
>
>
>> _`fade_in` (optional)_ : _Fade-in duration_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```0``` 
>>
>>
>>
>>
>
>
>
>
>> _`hold` (optional)_ : _Duration to hold the color_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```0``` 
>>
>>
>>
>>
>
>
>
>
>> _`fade_out` (optional)_ : _Fade-out duration_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```0``` 
>>
>>
>>
>>
>
>
>
>
>> _`exclusive` (optional)_ : _Weather to prioritize this pulse over simultaneous pulses_
>>
>>_Default value:_
>>
>>**Type:** `bool` 
>>
>>**Literal:** ```false``` 
>>
>>
>>
>>
>
>
>
>
>> _`hsv` (optional)_ : _Toggle HSV mode_
>>
>>_Default value:_
>>
>>**Type:** `bool` 
>>
>>**Literal:** ```false``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`set`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, r: @number, g: @number, b: @number, duration: @number = 0, opacity: @number = 1, blending: @bool = false) { /* code omitted */ }``` 
>
>## Description: 
> _Implementation of the color trigger_
>## Arguments:
>> **`r`** _(obligatory)_: _Red value of the target color_
>
>
>
>
>> **`g`** _(obligatory)_: _Green value of the target color_
>
>
>
>
>> **`b`** _(obligatory)_: _Blue value of the target color_
>
>
>
>
>> _`duration` (optional)_ : _Duration of color change_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```0``` 
>>
>>
>>
>>
>
>
>
>
>> _`opacity` (optional)_ : _Opacity of target color_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```1``` 
>>
>>
>>
>>
>
>
>
>
>> _`blending` (optional)_ : _Toggle blending on target color_
>>
>>_Default value:_
>>
>>**Type:** `bool` 
>>
>>**Literal:** ```false``` 
>>
>>
>>
>>
>
>
>
>
>
>
</details>

### **@block**: 
 <details>
<summary> View members </summary>

**`create_tracker_item`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, other: @block) { /* code omitted */ }``` 
>
>## Description: 
> _Returns an item ID that is 1 when the blocks are colliding and 0 when they are not_
>## Arguments:
>> **`other`** _(obligatory)_: _Block ID to check against_
>
>
>
>
>
>
</details>

### **@item**: 
 <details>
<summary> View members </summary>

**`add`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, amount: @number) { /* code omitted */ }``` 
>
>## Description: 
> _Implementation of the pickup trigger_
>## Arguments:
>> **`amount`** _(obligatory)_: _Amount to add_
>
>
>
>
>
>

**`count`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, number: @number = 0) { /* code omitted */ }``` 
>
>## Description: 
> _Implementation of the count trigger (returns an event)_
>## Arguments:
>> _`number` (optional)_ : _Number to check against_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```0``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`if_is`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, comparison: @comparison, other: @number, function: @function) { /* code omitted */ }``` 
>
>## Description: 
> _Implementation of the instant count trigger_
>## Arguments:
>> **`comparison`** _(obligatory)_: _Comparison mode_
>
>
>
>
>> **`other`** _(obligatory)_: _Number to compare with_
>
>
>
>
>> **`function`** _(obligatory)_: _Target function if comparison is 'true'_
>
>
>
>
>
>
</details>

### **@array**: 
 <details>
<summary> View members </summary>

**`contains`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, el) { /* code omitted */ }``` 
>
>## Arguments:
>> **`el`** _(obligatory)_
>
>
>
>
>
>

**`max`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, minval = 0) { /* code omitted */ }``` 
>
>## Arguments:
>> _`minval` (optional)_ 
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```0``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`min`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, max_val = 999999999999) { /* code omitted */ }``` 
>
>## Arguments:
>> _`max_val` (optional)_ 
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```999999999999``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`push`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, value) { /* code omitted */ }``` 
>
>## Arguments:
>> **`value`** _(obligatory)_
>
>
>
>
>
>
</details>

### **@event**: 
 <details>
<summary> View members </summary>

**`on`**:

>**Type:** `macro` 
>
>**Literal:** ```(event: @event, function: @function) { /* code omitted */ }``` 
>
>## Description: 
> _Triggers a function every time an event fires_
>## Arguments:
>> **`event`** _(obligatory)_: _Event to trigger on_
>
>
>
>
>> **`function`** _(obligatory)_: _Function to trigger_
>
>
>
>
>
>
</details>

### **@counter**: 
 <details>
<summary> View members </summary>

**`_add_`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, num: @number | @counter) { /* code omitted */ }``` 
>
>## Arguments:
>> **`num`** _(obligatory)_
>
>
>
>
>
>

**`_as_`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, _type: @type_indicator) { /* code omitted */ }``` 
>
>## Arguments:
>> **`_type`** _(obligatory)_
>
>
>
>
>
>

**`_assign_`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, num: @number | @counter) { /* code omitted */ }``` 
>
>## Arguments:
>> **`num`** _(obligatory)_
>
>
>
>
>
>

**`_divide_`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, num: @number | @counter) { /* code omitted */ }``` 
>
>## Arguments:
>> **`num`** _(obligatory)_
>
>
>
>
>
>

**`_divided_by_`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, num: @number | @counter) { /* code omitted */ }``` 
>
>## Arguments:
>> **`num`** _(obligatory)_
>
>
>
>
>
>

**`_equal_`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, other: @number | @counter) { /* code omitted */ }``` 
>
>## Arguments:
>> **`other`** _(obligatory)_
>
>
>
>
>
>

**`_less_or_equal_`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, other: @number | @counter) { /* code omitted */ }``` 
>
>## Arguments:
>> **`other`** _(obligatory)_
>
>
>
>
>
>

**`_less_than_`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, other: @number | @counter) { /* code omitted */ }``` 
>
>## Arguments:
>> **`other`** _(obligatory)_
>
>
>
>
>
>

**`_minus_`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, other: @number | @counter) { /* code omitted */ }``` 
>
>## Arguments:
>> **`other`** _(obligatory)_
>
>
>
>
>
>

**`_more_or_equal_`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, other: @number | @counter) { /* code omitted */ }``` 
>
>## Arguments:
>> **`other`** _(obligatory)_
>
>
>
>
>
>

**`_more_than_`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, other: @number | @counter) { /* code omitted */ }``` 
>
>## Arguments:
>> **`other`** _(obligatory)_
>
>
>
>
>
>

**`_multiply_`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, num: @number | @counter) { /* code omitted */ }``` 
>
>## Arguments:
>> **`num`** _(obligatory)_
>
>
>
>
>
>

**`_not_equal_`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, other: @number | @counter) { /* code omitted */ }``` 
>
>## Arguments:
>> **`other`** _(obligatory)_
>
>
>
>
>
>

**`_plus_`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, other: @number | @counter) { /* code omitted */ }``` 
>
>## Arguments:
>> **`other`** _(obligatory)_
>
>
>
>
>
>

**`_subtract_`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, num: @number | @counter) { /* code omitted */ }``` 
>
>## Arguments:
>> **`num`** _(obligatory)_
>
>
>
>
>
>

**`_times_`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, num: @number | @counter) { /* code omitted */ }``` 
>
>## Arguments:
>> **`num`** _(obligatory)_
>
>
>
>
>
>

**`add`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, num: @number) { /* code omitted */ }``` 
>
>## Description: 
> _Implementation of the pickup trigger_
>## Arguments:
>> **`num`** _(obligatory)_: _Amount to add_
>
>
>
>
>
>

**`add_to`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, items: @array, speed: @number = 3, factor: @number = 1) { /* code omitted */ }``` 
>
>## Description: 
> _Adds the counter's value to all item IDs in a list, and resets the counter to 0 in the process_
>## Arguments:
>> **`items`** _(obligatory)_: _Item IDs to add to_
>
>
>
>
>> _`speed` (optional)_ : _Speed of operation (higher number increases group usage)_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```3``` 
>>
>>
>>
>>
>
>
>
>
>> _`factor` (optional)_ : _Multiplyer for the value added_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```1``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`clone`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, speed: @number = 3) { /* code omitted */ }``` 
>
>## Description: 
> _Copies the counter and returns the copy_
>## Arguments:
>> _`speed` (optional)_ : _Speed of operation (higher number increases group usage)_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```3``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`compare`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, other: @counter, speed: @number = 3) { /* code omitted */ }``` 
>
>## Arguments:
>> **`other`** _(obligatory)_
>
>
>
>
>> _`speed` (optional)_ 
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```3``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`copy_to`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, items: [@item | @counter], speed: @number = 3, factor: @number = 1) { /* code omitted */ }``` 
>
>## Description: 
> _Copies the value of the counter to another item ID, without consuming the original_
>## Arguments:
>> **`items`** _(obligatory)_: _Items to copy to_
>
>
>
>
>> _`speed` (optional)_ : _Speed of operation (higher number increases group usage)_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```3``` 
>>
>>
>>
>>
>
>
>
>
>> _`factor` (optional)_ : _Factor of to multiply the copy by_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```1``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`divide`**:

>**Type:** `macro` 
>
>**Literal:** 
>
> ```
>
>(self, divisor: @counter | @number, remainder: @counter | @item = {
>type: @counter,
>item: ?i
>}, speed: @number = 3) { /* code omitted */ }
>
>``` 
>
>## Description: 
> _Devides the value of the counter by some divisor_
>## Arguments:
>> **`divisor`** _(obligatory)_: _Divisor to divide by, either another counter (very expensive) or a normal number_
>
>
>
>
>> _`remainder` (optional)_ : _Counter or item to set to the remainder value_
>>
>>_Default value:_
>>
>>**Type:** `counter` 
>>
>>**Literal:** 
>>
>> ```
>>
>>{
>>type: @counter,
>>item: ?i
>>}
>>
>>``` 
>>
>><details>
>><summary> View members </summary>
>>
>>**`item`**:
>>
>>>**Type:** `item` 
>>>
>>>**Literal:** ```?i``` 
>>>
>>>
>>>
>>
>>**`type`**:
>>
>>>**Type:** `type_indicator` 
>>>
>>>**Literal:** ```@counter``` 
>>>
>>>
>>>
>>
>>
>>
>
>
>
>
>> _`speed` (optional)_ : _Speed of operation (higher number increases group usage)_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```3``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`multiply`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, factor: @counter | @number, speed: @number = 3) { /* code omitted */ }``` 
>
>## Description: 
> _Multiplies the value of the counter by some factor (does not consume the factor)_
>## Arguments:
>> **`factor`** _(obligatory)_: _Factor to multiply by, either another counter (very expensive) or a normal number_
>
>
>
>
>> _`speed` (optional)_ : _Speed of operation (higher number increases group usage)_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```3``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`new`**:

>**Type:** `macro` 
>
>**Literal:** ```(source: @number | @item | @bool = 0, delay: @bool = true) { /* code omitted */ }``` 
>
>## Description: 
> _Creates a new counter_
>## Arguments:
>> _`source` (optional)_ : _Source (can be a number, item ID or boolean)_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```0``` 
>>
>>
>>
>>
>
>
>
>
>> _`delay` (optional)_ : _Adds a delay if a value gets added to the new item (to avoid confusing behavior)_
>>
>>_Default value:_
>>
>>**Type:** `bool` 
>>
>>**Literal:** ```true``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`reset`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, speed: @number = 3) { /* code omitted */ }``` 
>
>## Description: 
> _Resets counter to 0_
>## Arguments:
>> _`speed` (optional)_ : _Speed of operation (higher number increases group usage)_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```3``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`subtract_from`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, items: @array, speed: @number = 3, factor: @number = 1) { /* code omitted */ }``` 
>
>## Description: 
> _Subtracts the counter's value from all item IDs in a list, and resets the counter to 0 in the process_
>## Arguments:
>> **`items`** _(obligatory)_: _Item IDs to add to_
>
>
>
>
>> _`speed` (optional)_ : _Speed of operation (higher number increases group usage)_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```3``` 
>>
>>
>>
>>
>
>
>
>
>> _`factor` (optional)_ : _Multiplyer for the value subtracted_
>>
>>_Default value:_
>>
>>**Type:** `number` 
>>
>>**Literal:** ```1``` 
>>
>>
>>
>>
>
>
>
>
>
>

**`to_const`**:

>**Type:** `macro` 
>
>**Literal:** ```(self, range: [@number] | @range) { /* code omitted */ }``` 
>
>## Description: 
> _Converts the counter into a normal number (very context-splitting, be careful)_
>## Arguments:
>> **`range`** _(obligatory)_: _Array or range of possible output values_
>
>
>
>
>
>
</details>

