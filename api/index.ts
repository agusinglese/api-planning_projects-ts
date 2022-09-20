import server from "./src/app";

server.listen(process.env.PORT || 3001, () =>
  console.log("listen at port 3001")
);
