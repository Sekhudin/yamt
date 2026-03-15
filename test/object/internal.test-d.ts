import { expectAssignable, expectNotAssignable } from "tsd";
import type { ModifierMode, PermissionMode } from "../../src/object/internal";

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
