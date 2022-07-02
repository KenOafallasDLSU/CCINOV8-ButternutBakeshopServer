// import connection
import db from "../config/database.js";
 
// Get All Persons
export const getPersons = (result) => {
    db.query("SELECT * FROM persons", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Person
export const getPersonById = (id, result) => {
    db.query("SELECT * FROM persons WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Person to Database
export const insertPerson = (data, result) => {
    db.query("INSERT INTO persons SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Person to Database
export const updatePersonById = (data, id, result) => {
    db.query("UPDATE persons SET FirstName = ?, Hours = ? WHERE id = ?", [data.person_name, data.person_price, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Person to Database
export const deletePersonById = (id, result) => {
    db.query("DELETE FROM persons WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}