const uuid = require('uuid')

const todoDB = [
    {
    "id": '7a520288-a14e-4a7d-a391-2f300d4c3711',
    "title": "Primer elemento",
    "is_completed": false
}, 
{
    "id": '65fb2990-3e71-4b1c-810d-267d3a53d54b',
    "title": "Segundo elemento",
    "is_completed": false
}
];

const getAllTodos = () => {
    return todoDB
}

const getTodoById = (id) => {
    const data = todoDB.find(task => task.id === id)
    return data
}

const createTodo = (title) => {
    const newTodo = {
        id: uuid.v4(),
        title,
        is_completed: false
    }
    todoDB.push(newTodo)
    return newTodo
}

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo
}