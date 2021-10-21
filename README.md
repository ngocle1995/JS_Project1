# Project1
A JavaScript project
Student name: Ngoc Le
Student id: 2005636
Link to GitHub: https://github.com/ngocle1995/JS_Project1.git

App description:
The app is a simple and the most basic todo list app which has the functions:
-add task
-mark completed task
-delete task
-show current date
-Error indicators when input length is less than 2 letters.
-local Storage: save and clear.
The layout present a mobile-device layout.

My own evaluation: 3
Reason: I managed to include all the basic functions and variables and understand the DOM scripting and forms.
I was also planning to add a filter, however, it did not work and it took me 4-5 days in vain trying to fix it. I copied the function here so if it is possible to fix it, I would very appreciate.

function filterTask(e) {
    const task = list.childNodes;
    task.forEach(function (todo) {
            switch (e.target.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "pending":
                    if (!todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
            }
        });
    
}

Overall, I do believe that I would be able to add more functions and tailor my todo List more. But unfortunately, i underestimate the work load of 5 other courses I am taking at the same time.
Therefore, I only have one week to work on this project and i was disappointed at how it turned out in the end.