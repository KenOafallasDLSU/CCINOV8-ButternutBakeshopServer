// import connection
import db from "../config/database.js";

// Get All Roles
export const getRoles = (result) => {
    db.query("SELECT * FROM Role", (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Get Single Role
export const getRoleById = (id, result) => {
    db.query("SELECT * FROM Role WHERE roleID = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

// Insert Role to Database
export const insertRole = (data, result) => {
    db.query("INSERT INTO Role SET ?", [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Update Role to Database
export const updateRoleById = (data, id, result) => {
    db.query("UPDATE Role SET roleName = ?, rate = ? WHERE roleID = ?", [data.role_name, data.role_rate, id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Delete Role to Database
export const deleteRoleById = (id, result) => {
    db.query("DELETE FROM Role WHERE roleID = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
