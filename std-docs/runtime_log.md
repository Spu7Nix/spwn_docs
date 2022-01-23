# **@runtime_log**

## Macros

### flash

>**Printed**
>
>```spwn
>(color: @chroma = rgb(1, 1, 1, 1), fade_in: @number = 0, hold: @number = 0, fade_out: @number = 0.5) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Flashes the background_
>
>**Example:**
>
>```spwn
>while_loop(() => true, (){
>    5g!
>    @log::runtime::flash()
>}, delay = 1)
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `color` | [`@chroma`](std-docs/chroma) | `rgb(1, 1, 1, 1)` | |
>| 2 | `fade_in` | [`@number`](std-docs/number) | `0` | |
>| 3 | `hold` | [`@number`](std-docs/number) | `0` | |
>| 4 | `fade_out` | [`@number`](std-docs/number) | `0.5` | |
>
