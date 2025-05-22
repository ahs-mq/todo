import { parseISO , lightFormat } from "date-fns";
export class CreateTask {
    constructor(title,desc,date,pio,notes){
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.pio = pio;
        this.notes = notes;
    }
    taskDiv(){
        // let taskCounter = 1;
        const postedTask = document.createElement('div');
        // postedTask.classList.add('postedtask');
        // postedTask.setAttribute("id", `task${taskCounter}`);
        // taskCounter++;

        //Create task card

        const taskTitle = document.createElement('h3');
        taskTitle.textContent = this.title;
        taskTitle.classList.add('tasktitle');
        postedTask.appendChild(taskTitle);

        const taskDesc = document.createElement('p');
        taskDesc.textContent = this.desc;
        taskDesc.classList.add('taskdesc');
        postedTask.appendChild(taskDesc);

        const parsedDate = lightFormat(parseISO(this.date),'yyyy-MM-dd');
        const taskDate = document.createElement('p');
        taskDate.textContent = parsedDate;
        taskDate.classList.add('taskdate');
        postedTask.appendChild(taskDate);

        const taskPio = document.createElement('p');
        taskPio.textContent = this.pio;
        taskPio.classList.add('taskPio');
        postedTask.appendChild(taskPio);

        const taskNotes = document.createElement('p');
        taskNotes.textContent = this.notes;
        taskNotes.classList.add('taskNotes');
        postedTask.appendChild(taskNotes);

        const taskDelete = document.createElement('button');
        taskDelete.textContent = "Delete";
        taskDelete.classList.add('taskDelete');
        taskDelete.addEventListener("click", ()=>{
            postedTask.remove();
        });
        postedTask.appendChild(taskDelete);

        return postedTask;
    }
}
    