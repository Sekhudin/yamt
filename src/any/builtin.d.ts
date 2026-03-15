import type { Any } from "./any";
import type { AnyFn } from "./any-fn";
import type { Primitive } from "./primitive";

/**
 * Represents built-in JavaScript types.
 *
 * Used as terminal values in deep utility types to avoid recursively
 * transforming built-in objects like Date, Map, Set, or functions.
 *
 * @example
 * ```ts
 * type A = Builtin;
 * type B = DeepPartial<Date>; // Date (not transformed)
 * type C = DeepPartial<Map<string, number>>; // Map<string, number> (not transformed)
 * ```
 */
export type Builtin =
  | Primitive
  | AnyFn
  | Date
  | RegExp
  | Promise<Any>
  | Map<Any, Any>
  | Set<Any>
  | WeakMap<Any, Any>
  | WeakSet<Any>;
