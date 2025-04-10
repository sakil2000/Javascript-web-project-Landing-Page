 // Function to load Task Manager content
export default function loadTaskManager() {
    content.innerHTML = `
        <h1>Task Manager</h1>
        <div>
            <label for="title">Title:</label>
            <input type="text" id="title" class="form-control">
            <label for="description">Description:</label>
            <textarea id="description" class="form-control"></textarea>
            <button class="btn btn-success mt-2" id="addTask">Add Task</button>
        </div>
        <div class="task-container d-flex mt-3 p-2" id="taskContainer"></div>
    `;

    setupTaskManager();
    localStorage.setItem("activePage","TaskManager");
}


// Function to set up Task Manager functionality
    function setupTaskManager() {
        const addTaskBtn = document.getElementById("addTask");
        // const taskContainer = document.getElementById("taskContainer");
        
        // Load tasks from localStorage when Task Manager opens
        loadTasksFromStorage();
         
        
        addTaskBtn.addEventListener("click", function () {
            const title = document.getElementById("title").value.trim();
            const description = document.getElementById("description").value.trim();

            if (!title && !description) {
                showModal("Warning", "Oops! Please enter a title or description to create a note.");
                document.getElementById("modalTitle").style.backgroundColor = "yellow";
                return;
            }

            let task = {title,description};
            addTaskToUI(task);
            saveTaskToStorage(task);               

            // Clear input fields
            document.getElementById("title").value = "";
            document.getElementById("description").value = "";
        });
    }

            // Function to add a task to the UI
        function addTaskToUI(task) {
            const taskContainer = document.getElementById("taskContainer");

            // Create task card
            const taskCard = document.createElement("div");
            taskCard.classList.add("task-card", "p-3", "m-2", "border", "rounded");
            taskCard.style.minWidth = "200px";
            taskCard.innerHTML = `
                <h5>${task.title}</h5>
                <p>${task.description}</p>
                <button class="btn btn-danger delete-btn">Delete</button>
            `;

            taskContainer.appendChild(taskCard);

            // Delete task functionality
            taskCard.querySelector(".delete-btn").addEventListener("click", function () {
                taskCard.remove();
                deleteTaskFromStorage(task);
            });
        }

        // Function to save a task to localStorage
        function saveTaskToStorage(task) {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

        // Function to load tasks from localStorage
        function loadTasksFromStorage() {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.forEach(addTaskToUI);
        }

        // Function to delete a task from localStorage
        function deleteTaskFromStorage(taskToDelete) {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks = tasks.filter(task => task.title !== taskToDelete.title || task.description !== taskToDelete.description);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
