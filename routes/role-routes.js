// import express
import express from "express";

// import function from controller
import { showRoles, showRoleById, createRole, updateRole, deleteRole } from "../controllers/role-controller.js";

// init express router
const router = express.Router();

// Get All Roles
router.get('/roles', showRoles);

// Get Single Role
router.get('/roles/:id', showRoleById);

// Create New Role
router.post('/roles', createRole);

// Update Role
router.put('/roles/:id', updateRole);

// Delete Role
router.delete('/roles/:id', deleteRole);

// export default router
export default router;
