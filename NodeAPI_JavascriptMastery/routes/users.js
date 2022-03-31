import express from 'express';
import { getUsers, getUser, saveUser, deleteUser, updateUser } from '../controllers/user.js'

const router = express.Router();

// All routes here are gonna start with /users
router.get('/', getUsers);

// : Significa que va a aceptar cualquier paramentro
router.get('/:id', getUser);

router.post('/', saveUser);

router.delete('/:id', deleteUser);

// Put: sobrescribe un nuevo objeto nuevo en todas las propiedades.
// Path: Sobreescribe alguna propiedad del objeto.
router.patch('/:id', updateUser)


export default router;