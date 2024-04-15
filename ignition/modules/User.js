const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("UserModule", (m) => {

  // Deploy the User contract
  const user = m.contract("User");

  return { user };
});
