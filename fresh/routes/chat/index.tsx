// import { Handlers } from "$fresh/server.ts";

// export const handler: Handlers = {
//   async GET(req, ctx) {
//     return await ctx.render();
//   },
//   async POST(req, ctx) {
//     const form = await req.formData();
//     const email = form.get("email")?.toString();

//     // Add email to list.

//     // Redirect user to thank you page.
//     const headers = new Headers();
//     headers.set("location", "/thanks-for-subscribing");
//     return new Response(null, {
//       status: 303, // See Other
//       headers,
//     });
//   },
// };

import { Server } from "socket.io";

const io = new Server();

// server
io.on("connection", (socket) => {
  console.log(`socket ${socket.id} connected`);

  //   io.emit("hello", "world");
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", (reason) => {
    console.log(`socket ${socket.id} disconnected due to ${reason}`);
  });
});

export default function Chat() {
  return (
    <>
      <form method="post">
        <input type="email" name="email" value="" />
        <button type="submit">Subscribe</button>
      </form>
    </>
  );
}
