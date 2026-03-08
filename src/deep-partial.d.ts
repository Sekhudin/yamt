import type { Builtin } from "./builtin";

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends readonly [...infer R]
    ? { [K in keyof R]?: DeepPartial<R[K]> }
    : T extends ReadonlyArray<infer U>
      ? ReadonlyArray<DeepPartial<U>>
      : T extends Array<infer U>
        ? DeepPartial<U>[]
        : T extends object
          ? { [K in keyof T]?: DeepPartial<T[K]> }
          : T;

export {};
