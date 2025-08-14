// ===== validations/validation.js =====
const validate = (username, email, password, msg = {}) => {
  let result = true;
  [result, msg] = validateUsername(username, msg, result);
  [result, msg] = validateEmail(email, msg, result);
  [result, msg] = validatePassword(password, msg, result);
  return [result, msg];
};

const validateUsername = (username, msg = {}, result = true) => {
  msg.username = [];
  if (!username) {
    result = false;
    msg.username.push("Username is required.");
    return [result, msg];
  }

  if (/^\d/.test(username)) {
    result = false;
    msg.username.push("Username cannot start with a digit.");
  }

  if (/\.\./.test(username)) {
    result = false;
    msg.username.push("Username cannot contain consecutive dots.");
  }

  if (!/^[A-Za-z0-9_]{4,20}$/.test(username)) {
    result = false;
    msg.username.push("Username can only contain letters, numbers, and underscores (4–20 chars).");
  }

  return [result, msg];
};

const validateEmail = (email, msg = {}, result = true) => {
  msg.email = [];
  if (!email) {
    result = false;
    msg.email.push("Email is required.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    result = false;
    msg.email.push("Email format is invalid.");
  }
  return [result, msg];
};

const validatePassword = (password, msg = {}, result = true) => {
  msg.password = [];
  if (!password) {
    result = false;
    msg.password.push("Password is required.");
  } else if (password.length < 6) {
    result = false;
    msg.password.push("Password must be at least 6 characters long.");
  }
  return [result, msg];
};

module.exports = { validate };
