const port = 5050;
const app = require("./server");

app.listen(port, () => {
  console.log(`Now listenig on port ${port}`);
});
