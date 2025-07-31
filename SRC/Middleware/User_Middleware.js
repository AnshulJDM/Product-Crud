const userMid1 = (req, res, next) => {
  console.log("User Middleware 1");
  next();
};

const userMid2 = (req, res, next) => {
  console.log("User Middleware 2");
  next();
};

const userMid3 = (req, res, next) => {
  console.log("User Middleware 3");
  next();
};

const userErr = (err, req, res, next) => {
  console.log("User Error Handler Middleware");
  res.status(500).json({ error: err.message || "Something went wrong with user" });
};

const userMidExtra = (req, res, next) => {
  console.log("User Middleware Extra");
  next();
};

module.exports = { userMid1, userMid2, userMid3, userMidExtra, userErr };

