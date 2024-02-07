// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

let userDB = (database, value, uID) => {
  return new Promise((resolve, reject) => {
    resolve(database[value](uID));
});
}

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
  // Part 1: The Scenario
  try {
    const returnedValue = await central(id);
    userDB(dbs, returnedValue, id);
    let userVault = await vault(id);
    // let promiseExecution = async () => {
    //   let promise = await Promise.all([
    //     firstPromise(),
    //     secondPromise(),
    //   ]);
    //   console.log(promise);
    // };
    console.log(userDB, userVault);
  } catch (error) {
    console.log("User does not exist")
  }
}

// Async function to perform execution of all promise

getUserData(1)
