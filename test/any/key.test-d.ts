import { expectAssignable, expectNotAssignable } from "tsd";
import type { Key } from "../../src/any/key";

// valid keys
expectAssignable<Key>("foo");
expectAssignable<Key>(123);
expectAssignable<Key>(Symbol());

// invalid keys
expectNotAssignable<Key>({});
expectNotAssignable<Key>([]);
expectNotAssignable<Key>(true);
expectNotAssignable<Key>(null);
expectNotAssignable<Key>(undefined);
expectNotAssignable<Key>(() => {});
