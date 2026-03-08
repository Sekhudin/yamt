import type { Primitive } from "./primitive";

type Any = any;
type AnyFn = (...args: readonly Any[]) => Any;

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

export {};
