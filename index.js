// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

let userDB = (database, value, uID) => {
  return new Promise((resolve, reject) => {
    resolve(database[value](uID));
    reject("This ID not in this Database.");
});
}

let userVault = (dbVault, uID) => {
  return new Promise((resolve, reject) => {
    resolve(dbVault(uID));
    reject("This ID is not in this Vault.");
});
}

let userDataProcess = (dataDB, vaultDB, ID) => {
  let user = {
    id: ID,
    name: vaultDB.name,
    username: dataDB.username,
    email: vaultDB.email,
    address: vaultDB.address,
    phone: vaultDB.phone,
    website: dataDB.website,
    company: dataDB.company
  }
  return user
}

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
  //Part 1: The Scenario
  // const centralValue = await central(id);
  // const DBValue = await db1(id);
  // const vaultValue = await vault(id);
  // console.log(centralValue, DBValue, vaultValue)

  
  //Part 2: The Implementation
  let checkID = id;
  try {
    const returnedValue = await central(id);
      await Promise.all([
        userDB(dbs, returnedValue, id),
        userVault(vault, id)
      ]).then(([db, vault]) => {
        userDataProcess(db, vault, checkID)
      });
  } catch (error) {
    console.log("User does not exist")
  }
}

// getUserData(11)
// getUserData(1)
getUserData(3)
