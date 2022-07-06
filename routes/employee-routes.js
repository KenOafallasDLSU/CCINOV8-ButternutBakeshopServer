// import express
import express from "express";

// import function from controller
import { showEmployees, showEmployeeById, createEmployee, updateEmployee, deleteEmployee } from "../controllers/employee-controller.js";

// init express router
const router = express.Router();

// Get All Employee
router.get('/employees', showEmployees);

// Get Single Employee
router.get('/employees/:id', showEmployeeById);

// Create New Employee
router.post('/employees', createEmployee);

// Update Employee
router.put('/employees/:id', updateEmployee);

// Delete Employee
router.delete('/employees/:id', deleteEmployee);

// export default router
export default router;
