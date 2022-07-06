// import connection
import db from "../config/database.js";

// Get All Employees
export const getEmployees = (result) => {
    db.query("SELECT * FROM Employee", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Employee by ID
export const getEmployeeById = (id, result) => {
    db.query("SELECT * FROM Employee WHERE employeeID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Insert Employee to Database
export const insertEmployee = (data, result) => {
    db.query("INSERT INTO Employee SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Update Employee to Database
export const updateEmployeeById = (data, id, result) => {
    db.query("UPDATE Employee SET firstName = ?, lastName = ?, contact = ? WHERE employeeID = ?", [data.employee_firstname, data.employee_surname, employee_contact, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Delete Employee to Database
export const deleteEmployeeById = (id, result) => {
    db.query("DELETE FROM Employee WHERE employeeID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}