// Import function from Role Model
import { getRoles, getRoleById, insertRole, updateRoleById, deleteRoleById } from "../models/role-model.js";

// Get All Roles
export const showRoles = (req, res) => {
    getRoles((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single Role
export const showRoleById = (req, res) => {
    getRoleById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Create New Role
export const createRole = (req, res) => {
    const data = req.body;
    insertRole(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Role
export const updateRole = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateRoleById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Role
export const deleteRole = (req, res) => {
    const id = req.params.id;
    deleteRoleById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
