import { expectAssignable, expectNotAssignable, expectType } from "tsd";
import type {
  ExtraKeys,
  HasExtraKeys,
  ModifierMode,
  PermissionMode,
} from "../../src/object/internal";

/* PermissionMode */

expectAssignable<PermissionMode>("R");
expectAssignable<PermissionMode>("W");

expectNotAssignable<PermissionMode>("r");
expectNotAssignable<PermissionMode>("w");
expectNotAssignable<PermissionMode>("RW");
expectNotAssignable<PermissionMode>("X");
expectNotAssignable<PermissionMode>(true);

/* ModifierMode */

expectAssignable<ModifierMode>("!");
expectAssignable<ModifierMode>("?");

expectNotAssignable<ModifierMode>("!!");
expectNotAssignable<ModifierMode>("optional");
expectNotAssignable<ModifierMode>("required");
expectNotAssignable<ModifierMode>(false);

/* ExtraKeys & HasExtraKeys */
type Shape = {
  id: string;
};

type WithExtra = {
  id: string;
  name: string;
};

type WithoutExtra = {
  id: string;
};

type MultiExtra = {
  id: string;
  name: string;
  age: number;
};

/* ExtraKeys */
expectType<"name">({} as ExtraKeys<WithExtra, Shape>);
expectType<never>({} as ExtraKeys<WithoutExtra, Shape>);
expectType<"name" | "age">({} as ExtraKeys<MultiExtra, Shape>);

/* HasExtraKeys */
expectType<true>({} as HasExtraKeys<WithExtra, Shape>);
expectType<false>({} as HasExtraKeys<WithoutExtra, Shape>);
expectType<true>({} as HasExtraKeys<MultiExtra, Shape>);
