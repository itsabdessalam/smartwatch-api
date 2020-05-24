const User = require('../models/User');

const userExists = async fields => {
  const user = await User.findOne({
    $or: [{ name: fields.name }, { email: fields.email }],
  });

  if (user) {
    return true;
  }

  return false;
};

module.exports = userExists;
