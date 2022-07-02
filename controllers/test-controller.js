// Import function from Person Model
import { getPersons, getPersonById, insertPerson, updatePersonById, deletePersonById } from "../models/test-model.js";
 
// Get All Persons
export const showPersons = (req, res) => {
    getPersons((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Person 
export const showPersonById = (req, res) => {
    getPersonById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Person
export const createPerson = (req, res) => {
    const data = req.body;
    insertPerson(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Person
export const updatePerson = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updatePersonById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Person
export const deletePerson = (req, res) => {
    const id = req.params.id;
    deletePersonById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}