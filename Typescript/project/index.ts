import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface ToDo{
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}

axios.get(url).then(response => {
    let todo = response.data as ToDo

    //`The ToDo with ID: ${todo.Id}` accesing capital Id will show error by red underline. Following Interface
    printToDo(todo.id, todo.title, todo.completed);
    
})

const printToDo = (id:number, title: string, completed: boolean) => {
    console.log(`
        The ToDo with ID: ${id}
        Title: ${title}
        Is it completed? : ${completed}
    `);
}