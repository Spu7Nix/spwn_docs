# Conventions

SPWN is a language used by a ton of different people. Therefore we have a few conventions that we use in our code.
Coding conventions are important for the followings:

- to make sure that your code is readable and easier to read
- to make your code more consistent and easy to read
- to facilitate the development in the future

## Variables

Variables follow the `lower_snake_case` convention.

```spwn
let my_variable = "Hello world!"
```

Variables used for constant values follow the `UPPER_SNAKE_CASE` or `lower_snake_case` convention, based on what you feel is more appropriate.

```spwn
SUPPORTED_FILE_TYPES = ["txt","bin","json","toml","yaml"]

twenty_one = 9 + 10 + 0b10
```

## Numbers

Big numbers should use separators (`_`) on the thousands / hundreds intervals (depending on what yo), for better readability.

```spwn
1820 // 👍
7_924_286_022 // 👍
250_42 // this is a good way to write "25042 cents"

420_69_1337 // 👎
```

Binary, octal and hexadecimal numbers should use a separator every 2 / 4 / 8 digits, based on what you think is best.

Hexadecimal number should be written using upper case characters.

```spwn
0b1110_1001 // 👍
0o7425_1246 // 👍
0x1F_A0 // 👍

0b1_0_0_0_1_0_1_1 // 👎
0xfe_ac // 👎
```

## Strings

Strings that include ' or " should be written using the opposite delimiter.

```spwn
'Hello world!' // 👍
"This world's awesome!" // 👍
'My favourite programming language is "spwn"' // 👍👍👍

"And he said \"lok ast thso dude 😂😂😂😂\"" // 👎
'Can\'t touch this!' // 👎
```

## Macros

### Arguments

Macro arguments follow the `lower_snake_case` convention.

### Formatting

One-liner macros should be written as such:

```spwn
my_macro = (first_argument, second_argument) => first_argument + second_argument
```

Other macros should be written like this:

```spwn
my_macro = (a,b,c) {
    d = a % c + b
    return a + d / a
}
// OR
my_macro = (
    a,
    b,
    c,
) {
    d = a % c + b
    return a + d / a
}
```

#### Illegal Macro Formattings

```spwn
my_illegal_macro = (a,b,c)
{
    $.print("🤮")
}

my_illegal_macro_2 = (a,b,c
){
    $.print("🤢")
}
```
