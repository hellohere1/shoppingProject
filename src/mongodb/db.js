const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://batMuffin:aOlYZJG0F36AwVnQ@cluster0.7o3xyzq.mongodb.net/?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  }
);
