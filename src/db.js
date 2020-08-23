import Dexie from "dexie";

const db = new Dexie("LocationsAppDB");
db.version(1).stores({
  locations:
    "++id, phoneNumber, locationName, address_1, suiteNo, address_2, city, state, zipCode, timeZone, facilityTimes, appointmentPool",
});

db.open().catch((err) => {
    console.log(err.stack || err)
})

export default db;
