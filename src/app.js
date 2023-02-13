const PORT = process.env.PORT;
const path = require("path")
const logger = require("./lib/log/logger.js");
const accesslogger = require("./lib/log/accesslogger.js");
const applicationLogger = require("./lib/log/applicationlogger.js");
const express = require("express");
const favicon = require("serve-favicon")

// expressを実行し、appに格納
const app = express();

// getでリクエストを受けた際に、どのような処理をするか定義
// app.get("/", (req, res) => {
//   res.header('Content-Type', 'text/plain;charset=utf-8');
//   res.end("Hello World こんにちは");
// })

// expressでejsを使用する際の、決り文句
app.set("view engine", "ejs");
// サーバーサイド情報の隠蔽（デベロッパーツールのNetworkタブから隠す）
app.disable("x-powered-by")

// 静的コンテンツのルーティング
app.use(favicon(path.join(__dirname, "/public/favicon.ico")));
app.use("/public", express.static(path.join(__dirname, "/public")));

// set access log
app.use(accesslogger());

// 動的コンテンツのルーティング
app.use("/", require("./routes/index.js"));

// set application log
app.use(applicationLogger());

// サーバーを起動
app.listen(PORT, () => {
  logger.application.info(`Application listening at ${PORT}`)
});
