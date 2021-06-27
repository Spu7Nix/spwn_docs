# Object/Trigger Values

To place an object programmaticly, it's practical to have some datatype to represent the object itself. In SPWN, there are 2 datatypes that represent Geometry Dash objects: *object*s and *trigger*s. Both look pretty similar: either of the keywords `obj` and `trigger`, followed by a structure that looks pretty similar to the _dictionary_ type you might already know. Let's take a look at a typical _object_ value:

```spwn
obj {
    OBJ_ID: 54,
    X: 300,
    Y: 90,
    SCALING: 1.5,
    ROTATION: 45,
}
```

The data inside the `{}` curly braces represents properties of the object. Each property has the syntax `key: value,`, where `key` is an **object_key** value, and the value can be a value of a specific datatype decided by the key. These object_keys come from the standard library, inside the `obj_props` dictionary.

Most of these are pretty easy to understand. `X` and `Y` are the position, `ROTATION` is the angle of the object in degrees, et cetera. One that might confuse though, is `OBJ_ID`. This actually decides what kind of object it is. To find out what `OBJ_ID` a specific object has, you can use this level by [Colon](https://www.youtube.com/c/GDColon): 58079690.

> **Note:** To avoid typing `obj_props.` all the time, you will usually start your file with `extract obj_props` when you will be working with objects and triggers.

> **Note:** To find out what a specific key from `obj_props` does, you can use [this lookup table](../object_keys.md)

A `trigger` are very similar to an `obj`, but it has a slightly different usecase. You will learn more about this in a later chapter.

# Changing Object Properties

If you ever need to change an object's properties after creating it, you can do so by calling the `set` method:

```spwn
let my_object = obj {
    OBJ_ID: 54,
    X: 300,
    Y: 90,
    SCALING: 1.5,
}
my_object.set(SCALING, 2)
```
