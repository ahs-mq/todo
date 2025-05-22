import { isPast, parseISO } from "date-fns";

export class AppendTask {
    checkDate(taskElement){
        let current = document.querySelector('.currenttask');
        let overdue = document.querySelector('.overdue');

        // Get the task date element from the task
        let dateElement = taskElement.querySelector('.taskdate'); 

        // Extract date value from the element
        let dateString = dateElement.textContent.trim();

        // Convert string to a date object
        let date = parseISO(dateString);
        console.log("Parsed Date:", date);

        // Check if date is in the past
        if (isPast(date)) {
            taskElement.classList.add('overduetodo')
            overdue.appendChild(taskElement);
        } else {
            taskElement.classList.add('currenttodo')
            current.appendChild(taskElement);
        }
    }
}
