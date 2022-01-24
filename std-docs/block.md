# **@block**
?> Collision Block IDs are references to one or more collision blocks, and are useful for tracking collisions between these.

## Macros

### create\_tracker\_item

>**Printed**
>
>```spwn
>(self, other: @block) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns an item ID that is 1 when the blocks are colliding and 0 when they are not_
>
>**Example:**
>
>```spwn
>// in some minigame
>type @player
>player = @player::{ block: 1b, group: 1g, jump: () {}}
>ground = 2b
>on_ground = counter(player.block.create_tracker_item(ground))
>on(touch(), !{
>    //jump
>    if on_ground == 1 { // player can only jump while touching the ground
>        player.jump()
>    }
>})
>```
>
>
>**Returns:** 
>[`@item`](std-docs/item)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `other` | [`@block`](std-docs/block) | |Block ID to check against |
>

## Operator Implementations

### \_range\_

>**Printed**
>
>```spwn
>(self, other: @block) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `other` | [`@block`](std-docs/block) | | |
>
