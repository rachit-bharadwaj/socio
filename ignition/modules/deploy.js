const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("AllContractsModule", (m) => {
  // Deploy the Post contract
  const post = m.contract("Post");

  // Deploy the User contract (assuming no dependency on Post)
  const user = m.contract("User");

  return { post, user }; // Return both contract instances
});
