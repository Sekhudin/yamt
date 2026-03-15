import { expectType } from "tsd";
import type { Exact } from "../../src/object/exact";

type User = {
  id: string;
  name: string;
};

expectType<User>({} as Exact<Pick<User, "id" | "name">, User>);

expectType<never>({} as Exact<Pick<User, "id">, User>);

expectType<never>({} as Exact<Pick<User, "name">, User>);

expectType<never>({} as Exact<User & { age: number }, User>);

expectType<User>({} as Exact<User | (User & { age: number }), User>);
