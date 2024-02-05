// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
  // Part 1: The Scenario
  try {
    const returnedValue = await central(id);
    let userData = await dbs[returnedValue](id);
    let userVault = await vault(id);
    console.log(userData, userVault);
  } catch (error) {
    console.log("User does not exist")
  }
}

getUserData(1)
