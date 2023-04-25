const express = require("express");

const port = Number(process.env.PORT) || 4000;
const { userRouter } = require("./src/route/user.router");

const app = express();

app.use(express.json());

app.use("/api/v1", userRouter);

app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    message: err.message,
    status: "failed to get dad joke",
  });
});

app.listen(port, () => console.log(`server listening on port: ${port}`));
