module.exports = {
  apps : [
    {
      name   : "llscw",
      script : "start.js",
      exec_mode: "cluster",
      watch: ["./src"],
      watch_delay: 1000,
      ignore_watch : ["*/**/*.d.ts"],
    },
    {
      name   : "llscw_view",
      script : "start-view.js",
      exec_mode: "cluster",
      watch: ["./electron_view_ts/src"],
      watch_delay: 1000,
      ignore_watch : ["*/**/*.d.ts"],
    },
    {
      name   : "llscw_assets",
      script : "start-assets.js",
      exec_mode: "cluster",
      watch: ["./electron_assets"],
      watch_delay: 1000,
      ignore_watch : ["*/**/*.js","*/**/*.json"],
    },
  ]
}
