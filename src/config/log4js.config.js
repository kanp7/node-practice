const path = require("path");
const LOG_ROOT_DIR = process.env.LOG_ROOT_DIR || path.join(__dirname, "../logs");

module.exports = {
  appenders: {
    // ConsoleLogAppenderは任意の名前でOK
    ConsoleLogAppender: {
      type: "console"
    },
    ApplicationLogAppender: {
      type: "dateFile",
      filename: path.join(LOG_ROOT_DIR, "./application.log"),
      pattern: "yyyyMMdd",
      daysToKeep: 7
    },
    AccesssLogAppender: {
      type: "dateFile",
      filename: path.join(LOG_ROOT_DIR, "./access.log"),
      pattern: "yyyyMMdd",
      daysToKeep: 7
    }
  },
  categories: {
    // defaultは必ず設定が必要
    "default": {
      // appenders: {} で作成したものから指定する
      appenders: ["ConsoleLogAppender"],
      level: "ALL"
    },
    "application": {
      appenders: [
        "ApplicationLogAppender",
        "ConsoleLogAppender"
      ],
      level: "INFO"
    },
    "access": {
      appenders: [
        "AccesssLogAppender",
        "ConsoleLogAppender"
      ],
      level: "INFO"
    }
  }
}