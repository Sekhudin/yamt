/**
 * Represents all primitive types in JavaScript.
 *
 * Use-cases:
 * - To restrict a generic type to primitive values.
 * - As terminal values in deep utility types to prevent recursion.
 *
 * @example
 * ```ts
 * type A = Primitive; // string | number | boolean | bigint | symbol | null | undefined
 * ```
 */
export type Primitive =
  | string
  | number
  | boolean
  | bigint
  | symbol
  | null
  | undefined;
