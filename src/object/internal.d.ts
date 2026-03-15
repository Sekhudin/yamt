/**
 * Permission mode for object fields.
 *
 * - `R` → readonly
 * - `W` → writable
 */
export type PermissionMode = "R" | "W";

/**
 * Modifier mode for object fields.
 *
 * - `!` → required
 * - `?` → optional
 */
export type ModifierMode = "!" | "?";

/**
 * Extracts keys from `T` that are not present in `Shape`.
 *
 * This is typically used internally by object utility types
 * to detect excess properties when validating object shapes.
 *
 * @typeParam T - The source object type.
 * @typeParam Shape - The reference object shape.
 *
 * @example
 * ```ts
 * type A = ExtraKeys<{ id: string; name: string }, { id: string }>;
 * // "name"
 *
 * type B = ExtraKeys<{ id: string }, { id: string }>;
 * // never
 * ```
 *
 * @internal
 */
export type ExtraKeys<T, Shape> = Exclude<keyof T, keyof Shape>;

/**
 * Determines whether `T` contains keys that are not present in `Shape`.
 *
 * Returns `true` if extra keys exist, otherwise `false`.
 * Typically used internally by strict object utility types
 * (e.g. `Exact`, `Strict`) to detect excess properties.
 *
 * @typeParam T - The source object type.
 * @typeParam Shape - The reference object shape.
 *
 * @example
 * ```ts
 * type A = HasExtraKeys<{ id: string; name: string }, { id: string }>;
 * // true
 *
 * type B = HasExtraKeys<{ id: string }, { id: string }>;
 * // false
 * ```
 *
 * @internal
 */
export type HasExtraKeys<T, Shape> =
  ExtraKeys<T, Shape> extends never ? false : true;
