import { expectAssignable, expectNotAssignable, expectType } from "tsd";
import type { Record } from "../../src/object/record";

/* ------------------------------------------------ */
/* default mode (W - writable) */
/* ------------------------------------------------ */

type A = Record<"id" | "name", string>;

expectAssignable<A>({ id: "1", name: "foo" });

expectNotAssignable<A>({ id: "1" });
expectNotAssignable<A>({ id: "1", name: 123 });

const a: A = { id: "1", name: "foo" };

a.id = "2";
a.name = "bar";

expectType<string>(a.id);

/* ------------------------------------------------ */
/* readonly mode */
/* ------------------------------------------------ */

type B = Record<"id" | "name", string, "R">;

const b: B = { id: "1", name: "foo" };

expectAssignable<B>(b);
expectNotAssignable<B>({ id: 1, name: 2 });

expectType<string>(b.id);

/* ------------------------------------------------ */
/* union keys */
/* ------------------------------------------------ */

type C = Record<"a" | "b" | "c", number>;

expectAssignable<C>({ a: 1, b: 2, c: 3 });

expectNotAssignable<C>({ a: 1, b: 2 });
expectNotAssignable<C>({ a: 1, b: 2, c: "3" });

/* ------------------------------------------------ */
/* single key */
/* ------------------------------------------------ */

type D = Record<"id", number>;

expectAssignable<D>({ id: 1 });
expectNotAssignable<D>({});
expectNotAssignable<D>({ id: "1" });

/* ------------------------------------------------ */
/* numeric keys */
/* ------------------------------------------------ */

type E = Record<1 | 2, string>;

expectAssignable<E>({ 1: "a", 2: "b" });
expectNotAssignable<E>({ 1: "a" });

/* ------------------------------------------------ */
/* symbol keys */
/* ------------------------------------------------ */

declare const S1: unique symbol;
declare const S2: unique symbol;

type F = Record<typeof S1 | typeof S2, number>;

expectAssignable<F>({
  [S1]: 1,
  [S2]: 2,
});

/* ------------------------------------------------ */
/* readonly variance */
/* ------------------------------------------------ */

type Writable = Record<"x", number>;
type ReadonlyRec = Record<"x", number, "R">;

declare const writable: Writable;

expectAssignable<ReadonlyRec>(writable);

/* ------------------------------------------------ */
/* invalid values */
/* ------------------------------------------------ */

type G = Record<"a" | "b", boolean>;

expectNotAssignable<G>({ a: true });
expectNotAssignable<G>({ a: true, b: 1 });

/* ------------------------------------------------ */
/* structural compatibility */
/* ------------------------------------------------ */

type H = Record<"foo" | "bar", string>;

const obj = {
  foo: "a",
  bar: "b",
};

expectAssignable<H>(obj);
