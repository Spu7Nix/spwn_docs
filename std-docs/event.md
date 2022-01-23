# **@event**
?> An api for runtime events, like player input, collisions, etc.

## Constructors

### new

>**Printed**
>
>```spwn
>(group: (@group | @NULL) = null) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Creates a new event_
>
>**Example:**
>
>```spwn
>my_event = @event::new()
>
>my_event.on(!{
>    @log::runtime::flash()
>})
>
>wait(5)
>my_event.emit()
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `group` | [`@group`](std-docs/group) or `@NULL` | `null` |Group used for emitting and listening to the event |
>

## Macros

### emit

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
>_Triggers all listeners of this event_
>
>**Example:**
>
>```spwn
>wait(5)
>event.emit()
>```
>
>

### on

>**Printed**
>
>```spwn
>(self, function: (@trigger_function | @group), suppress: @bool = true) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Triggers a function every time an event fires_
>
>**Example:**
>
>```spwn
>on(touch(), !{
>    10g.move(10, 0)
>})
>
>// you can also use it as a decorator
>[[ on(touch()) ]] !{
>    10g.move(10, 0)
>}
>
>// 'on' will suppress signals if the context in which it is defined never got triggered
>on(touch(), !{
>    on(death(), !{
>        10g.move(10, 0) // dying won't do anything if you didn't touch up to that point
>    })
>})
>// you can negate this effect by doing `on(event, !{}, suppress = false)`
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `function` | `@trigger\_function` or [`@group`](std-docs/group) | |Function to trigger |
>| 2 | `suppress` | `@bool` | `true` |Force suppression in current context |
>
