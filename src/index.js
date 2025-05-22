import './styles.css';
import {CreateTask} from './create.js';
import { AppendTask } from './append.js';

document.getElementById('task').addEventListener("submit", (event)=>{
    event.preventDefault();

    const title = document.getElementById('title').value;
    const desc = document.getElementById('desc').value;
    const date = document.getElementById('ddate').value;
    const pio = document.querySelector('input[name="priority"]:checked').value;
    const notes = document.getElementById('notes').value;
    let newTask = new CreateTask(title,desc,date,pio,notes);
    const taskElement = newTask.taskDiv();
    const organizeTask = new AppendTask();
    organizeTask.checkDate(taskElement);
});

