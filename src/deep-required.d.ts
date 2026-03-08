import type { Builtin } from "./builtin";

export type DeepRequired<T> = T extends Builtin
  ? T
  : T extends readonly [...infer R]
    ? { [K in keyof R]-?: DeepRequired<R[K]> }
    : T extends ReadonlyArray<infer U>
      ? ReadonlyArray<DeepRequired<U>>
      : T extends Array<infer U>
        ? DeepRequired<U>[]
        : T extends object
          ? { [K in keyof T]-?: DeepRequired<T[K]> }
          : T;

export {};
