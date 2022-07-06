// Import function from Employee Model
import { getEmployees, getEmployeeById, insertEmployee, updateEmployeeById, deleteEmployeeById } from "../models/employee-model.js";

// Get All Employees
export const showEmployees = (req, res) => {
    getEmployees((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single Employee 
export const showEmployeeById = (req, res) => {
    getEmployeeById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Create New Employee
export const createEmployee = (req, res) => {
    const data = req.body;
    insertEmployee(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Employee
export const updateEmployee = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateEmployeeById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Employee
export const deleteEmployee = (req, res) => {
    const id = req.params.id;
    deleteEmployeeById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}