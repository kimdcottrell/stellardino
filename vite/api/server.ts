import { assert } from "node:console";

type Foo = {
  state?: string;
};

function bar(foo: Foo): string {
  assert(foo.state === "online", "the state must be online");
  return foo.state;
}

const foo: Foo = { state: "offline" };
bar(foo);

export default {
  async fetch(request) {
      return Response.json({ hello: "world" });
  },
};

  
