import { expectAssignable, expectNotAssignable } from "tsd";
import type { AnyFn } from "../../src/any/any-fn";

// functions should be assignable
expectAssignable<AnyFn>(() => {});
expectAssignable<AnyFn>((_foo: string) => {});
expectAssignable<AnyFn>((foo: string) => foo);
expectAssignable<AnyFn>((foo: string, bar: string) => ({ foo, bar }));

// non-function should not be assignable
expectNotAssignable<AnyFn>({});
expectNotAssignable<AnyFn>(123);
expectNotAssignable<AnyFn>("foo");
