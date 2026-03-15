import type { Any } from "../any/any";
import type { Key } from "../any/key";
import type { PermissionMode } from "./internal";

/**
 * Creates an object type with keys `K` and values `T`.
 *
 * The `Mode` parameter controls whether the properties are writable or readonly:
 * - `"W"` (default): properties are writable.
 * - `"R"`: properties are marked as `readonly`.
 *
 * @typeParam K - The set of property keys.
 * @typeParam T - The value type assigned to each key.
 * @typeParam Mode - Permission mode (`"W"` for writable, `"R"` for readonly).
 *
 * @example
 * ```ts
 * type A = Record<"id" | "name", string>;
 * // { id: string; name: string }
 *
 * type B = Record<"id" | "name", string, "R">;
 * // { readonly id: string; readonly name: string }
 * ```
 *
 * @category Object
 */
export type Record<
  K extends Key,
  T extends Any,
  Mode extends PermissionMode = "W",
> = {
  R: { readonly [P in K]: T };
  W: { [P in K]: T };
}[Mode];
