// import express
import express from "express";
 
// import function from controller
import { showPersons, showPersonById, createPerson, updatePerson, deletePerson } from "../controllers/test-controller.js";
 
// init express router
const router = express.Router();
 
// Get All Person
router.get('/persons', showPersons);
 
// Get Single Person
router.get('/persons/:id', showPersonById);
 
// Create New Person
router.post('/persons', createPerson);
 
// Update Person
router.put('/persons/:id', updatePerson);
 
// Delete Person
router.delete('/persons/:id', deletePerson);
 
// export default router
export default router;