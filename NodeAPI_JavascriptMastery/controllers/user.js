import { v4 as uuidv4 } from 'uuid';

var users = [
    {
        id: uuidv4(),
        firstName: "Cristobal",
        lastName: "Olvera",
        age: 23
    },
    {
        id: uuidv4(),
        firstName: "Cristobal",
        lastName: "Olvera",
        age: 23
    }
]

const getUsers = (req, res) => {
    res.send(users)
}

const getUser = (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id == id)
    res.send(user);
}

const saveUser = (req, res) => {
    const userWithId = {id: uuidv4() , ...req.body} // Creando new Obj con el ID.
    users.push(userWithId)
    res.send('Data Posted!! :)')
}

const deleteUser = (req, res) => {
    const { id }  = req.params
    users = users.filter(user => user.id !== id);
    res.send('Usuario Eliminado...')
}

const updateUser = (req, res) => {
    const { id } = req.params
    const { firstName, lastName, age } = req.body;
    const user = users.find(user => user.id = id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send('Usuario updated!! :)')

}



export { getUsers, getUser, saveUser, deleteUser, updateUser}
