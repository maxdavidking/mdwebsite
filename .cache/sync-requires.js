const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-jsx": hot(preferDefault(require("/Users/maxking/Projects/maxdavidking/src/pages/404.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/maxking/Projects/maxdavidking/src/pages/index.jsx")))
}

