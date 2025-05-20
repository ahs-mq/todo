class CreateTask {
    constructor(title,desc,date,check,notes){
        this.form = title;
        this.desc = desc;
        this.date = date;
        this.check = check;
        this.notes = notes;
    }
    taskDiv(){
        const postedTask = document.createElement('div');
        postedTask.classList.add('postedtask');

        //Create task card

        const taskTitle = document.createElement('h3');
        taskTitle.textContent = this.title;
        taskTitle.classList.add('tasktitle');
        postedTask.appendChild(taskTitle);

        const taskDesc = document.createElement('p');
        taskDesc.textContent = this.desc;
        taskDesc.classList.add('taskdesc');
        postedTask.appendChild(taskDesc)
        

    }
}