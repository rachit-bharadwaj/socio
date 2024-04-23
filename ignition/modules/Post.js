const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("PostModule", (m) => {
  // Deploy the User contract
  const post = m.contract("Post");

  return { post };
});
