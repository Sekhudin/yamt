<p align="center">
  <strong>y💗mt - You're My Types</strong><br/>
  A collection of reusable utility types for TypeScript.
</p>

# yamt

A small collection of reusable and composable utility types for [TypeScript](https://github.com/microsoft/typescript/).
It provides practical helpers for transforming complex types and improving type safety in everyday TypeScript development.

---

## Available Utility Types

### Any

- [`AnyFn`](./src/any/any-fn.d.ts) - Function type accepting any arguments and returning any value.
- [`Any`](./src/any/any.d.ts) - Simple alias for the `any` type.
- [`Builtin`](./src/any/builtin.d.ts) - Union of built-in JavaScript types used as base cases in deep utilities.
- [`Key`](./src/any/key.d.ts) - Valid object property keys (`string`, `number`, or `symbol`).
- [`Primitive`](./src/any/primitive.d.ts) - All JavaScript primitive value types.

### Object

- [`Exact`](./src/object/exact.d.ts) - Object matching a reference shape exactly.
- [`Record`](./src/object/record.ts) - Object with writable or readonly properties.
