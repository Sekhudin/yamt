import { expectAssignable, expectType } from "tsd";
import type { Any } from "../../src/any";

const value: Any = "foo";
expectType<Any>(value);

expectAssignable<Any>(123);
expectAssignable<Any>("foo");
expectAssignable<Any>(true);
expectAssignable<Any>({});
expectAssignable<Any>([]);
expectAssignable<Any>(() => {});
