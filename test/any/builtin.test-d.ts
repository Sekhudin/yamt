import { expectAssignable, expectNotAssignable } from "tsd";
import type { Builtin } from "../../src/any/builtin";

// primitives
expectAssignable<Builtin>("foo");
expectAssignable<Builtin>(123);
expectAssignable<Builtin>(true);
expectAssignable<Builtin>(null);
expectAssignable<Builtin>(undefined);
expectAssignable<Builtin>(Symbol());
expectAssignable<Builtin>(1n);

// functions
expectAssignable<Builtin>(() => {});
expectAssignable<Builtin>((a: string) => a);

// built-in objects
expectAssignable<Builtin>(new Date());
expectAssignable<Builtin>(/foo/);

// built-in collections
expectAssignable<Builtin>(Promise.resolve(1));
expectAssignable<Builtin>(new Map());
expectAssignable<Builtin>(new Set());
expectAssignable<Builtin>(new WeakMap());
expectAssignable<Builtin>(new WeakSet());

// non-builtin objects
expectNotAssignable<Builtin>({});
expectNotAssignable<Builtin>({ foo: "bar" });
expectNotAssignable<Builtin>([]);
expectNotAssignable<Builtin>([{ foo: 1 }]);
