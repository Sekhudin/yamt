import type { HasExtraKeys } from "./internal";

/**
 * Ensures that `T` exactly matches the shape of `Shape`.
 * - `T` must be assignable to `Shape`
 * - `T` must not contain additional properties
 *
 * If extra keys are present, the type resolves to `never`.
 *
 * @typeParam T - The object type to validate.
 * @typeParam Shape - The reference object shape.
 *
 * @example
 * ```ts
 * type User = { id: string };
 *
 * type A = Exact<{ id: string }, User>;
 * // { id: string }
 *
 * type B = Exact<{ id: string; name: string }, User>;
 * // never
 * ```
 *
 * @category Object
 */
export type Exact<T extends object, Shape extends object> = T extends Shape
  ? HasExtraKeys<T, Shape> extends true
    ? never
    : T
  : never;
