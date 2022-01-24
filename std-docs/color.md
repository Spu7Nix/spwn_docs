# **@color**
?> Colors are references to color channels in a Geometry Dash level.

## Macros

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
>_Implementation of the pulse trigger for colors_
>
>**Example:**
>
>```spwn
>BG.pulse(rgb8(255, 0, 0), fade_out = 0.5) // pulses the background red
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
>_Implementation of the pulse trigger for colors with hsv_
>
>**Example:**
>
>```spwn
>BG.pulse_hsv(180, 1, 1, fade_out = 0.5) // pulses the background with the complementary color
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

### set

>**Printed**
>
>```spwn
>(self, c: @chroma, duration: @number = 0, blending: @bool = false) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the color trigger_
>
>**Example:**
>
>```spwn
>BG.set(rgb(0, 0, 0), 0.5) // turns the background color black
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `c` | [`@chroma`](std-docs/chroma) | |Target chroma |
>| 2 | `duration` | [`@number`](std-docs/number) | `0` |Duration of color change |
>| 3 | `blending` | `@bool` | `false` |Toggle blending on target color |
>

## Operator Implementations

### \_range\_

>**Printed**
>
>```spwn
>(self, other: @color) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the range operator (`..`) for colors_
>
>**Example:**
>
>```spwn
>for color in 1c..10c {
>    -> color.set(rgb(0,0,0), 0.5)
>}
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `other` | [`@color`](std-docs/color) | | |
>
