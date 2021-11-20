
const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const Todo = await hre.ethers.getContractFactory("Todo");
  const todo = await Todo.deploy();

  await todo.deployed();

 const firstTask = await todo.createTask("complete my todo project", "harsh"); 
  firstTask.wait();


  console.log("Todo deployed to:", todo.address);
  const tasks = await todo.getTasks();

  console.log(tasks);
  const deployer = await todo.callerFunc();
 
  console.log("deployer", deployer);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

 