import type { Any } from "./any";

/**
 * Represents a function with any arguments and any return type.
 */
export type AnyFn = (...args: readonly Any[]) => Any;
