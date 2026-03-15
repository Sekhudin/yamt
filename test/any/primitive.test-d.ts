import { expectAssignable, expectNotAssignable } from "tsd";
import type { Primitive } from "../../src/any/primitive";

// primitives
expectAssignable<Primitive>("foo");
expectAssignable<Primitive>(123);
expectAssignable<Primitive>(true);
expectAssignable<Primitive>(1n);
expectAssignable<Primitive>(Symbol());
expectAssignable<Primitive>(null);
expectAssignable<Primitive>(undefined);

// non-primitives
expectNotAssignable<Primitive>({});
expectNotAssignable<Primitive>([]);
expectNotAssignable<Primitive>(() => {});
expectNotAssignable<Primitive>(new Date());
expectNotAssignable<Primitive>(/foo/);
