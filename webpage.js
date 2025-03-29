document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");
    const homeLink = document.getElementById("homeLink");
    const taskManagerLink = document.getElementById("taskManagerLink");
    const counterLink = document.getElementById("counterLink");

    // Function to load Home content
    function loadHome() {
        content.innerHTML = `
            <h1>Welcome to My Javascript Web App Projects</h1>
            <p class="fw-bold text-primary" >Take a Look at My Resume to know About Me.</p>
            <iframe src="SakilAhmedResume 2025.pdf" width="100%" height="400"></iframe>
        `;
    }

    // Function to load Task Manager content
    function loadTaskManager() {
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

    // Function to load Counter Page
    function loadCounter() {
        content.innerHTML = `
            <h1>Counter</h1>
            <div class="counter-container">
                <h2 id="counterValue">0</h2>
                <button class="btn btn-primary" id="increment">Increment</button>
                <button class="btn btn-warning" id="decrement">Decrement</button>
                <button class="btn btn-danger" id="reset">Reset</button>
            </div>
        `;

        setupCounter();
        localStorage.setItem("activePage","Counter");
    }

    function setupCounter() {
        let count = localStorage.getItem("countValue") 
        ? parseInt(localStorage.getItem("countValue"))  
        : (localStorage.setItem("countValue", 0), 0);

        const counterValue = document.getElementById("counterValue");
        counterValue.textContent = count;

        document.getElementById("increment").addEventListener("click", function () {
            count++;
            counterValue.textContent = count;
            localStorage.setItem("countValue",count);
        });

        document.getElementById("decrement").addEventListener("click", function () {
            count--;
            counterValue.textContent = count;
            localStorage.setItem("countValue",count);
        });
        document.getElementById("reset").addEventListener("click",function(){
            count = 0; 
            counterValue.textContent = count;
            localStorage.removeItem("countValue",count);
        });

    }

    // Function to Show the Modal
    function showModal(title, message) {
         document.getElementById("modalTitle").textContent = title;
         document.getElementById("modalMessage").textContent = message;    
        // Show the Bootstrap modal
        let modal = new bootstrap.Modal(document.getElementById("customModal"));
         // Change the title background color
        document.getElementById("modalTitle").style.backgroundColor = "yellow";
        modal.show();
    }

   
    // Event listeners for navbar links
    homeLink.addEventListener("click", loadHome);
    taskManagerLink.addEventListener("click", loadTaskManager);
    counterLink.addEventListener("click", loadCounter);

    
    let activeTab = localStorage.getItem("activePage");
    if(activeTab === "TaskManager"){
        loadTaskManager();
    }else if(activeTab === "Counter"){
        loadCounter();
    }else{
        // Load Home page by default
        loadHome();
        localStorage.setItem("activePage","Home");

    }
    
});
