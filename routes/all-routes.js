// import express
import express from "express";

// import function from controller
import { showPersons, showPersonById, createPerson, updatePerson, deletePerson } from "../controllers/test-controller.js";
import { showRoles, showRoleById, createRole, updateRole, deleteRole } from "../controllers/role-controller.js";
import { showEmployees, showEmployeeById, createEmployee, updateEmployee, deleteEmployee } from "../controllers/employee-controller.js";

// init express router
const router = express.Router();

// Test routes
router.get('/persons', showPersons);
router.get('/persons/:id', showPersonById);
router.post('/persons', createPerson);
router.put('/persons/:id', updatePerson);
router.delete('/persons/:id', deletePerson);

// Role routes
router.get('/roles', showRoles);
router.get('/roles/:id', showRoleById);
router.post('/roles', createRole);
router.put('/roles/:id', updateRole);
router.delete('/roles/:id', deleteRole);

// Employee routes
 
// export default router
export default router;
