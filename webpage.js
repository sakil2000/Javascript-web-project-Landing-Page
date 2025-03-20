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
                <label>Title:</label>
                <input type="text" id="title" class="form-control">
                <label>Description:</label>
                <textarea id="description" class="form-control"></textarea>
                <button class="btn btn-success mt-2" id="addTask">Add Task</button>
            </div>
            <div class="task-container d-flex mt-3 p-2" id="taskContainer"></div>
        `;

        setupTaskManager();
    }

    // Function to set up Task Manager functionality
    function setupTaskManager() {
        const addTaskBtn = document.getElementById("addTask");
        const taskContainer = document.getElementById("taskContainer");

        addTaskBtn.addEventListener("click", function () {
            const title = document.getElementById("title").value.trim();
            const description = document.getElementById("description").value.trim();

            if (!title || !description) {
                alert("Please enter a title and description.");
                return;
            }

            // Create task card
            const taskCard = document.createElement("div");
            taskCard.classList.add("task-card", "p-3", "m-2", "border", "rounded");
            taskCard.style.minWidth = "200px"; // Ensure cards are in a row
            taskCard.innerHTML = `
                <h5>${title}</h5>
                <p>${description}</p>
                <button class="btn btn-danger delete-btn">Delete</button>
            `;

            taskContainer.appendChild(taskCard);

            // Delete task functionality
            taskCard.querySelector(".delete-btn").addEventListener("click", function () {
                taskCard.remove();
            });

            // Clear input fields
            document.getElementById("title").value = "";
            document.getElementById("description").value = "";
        });
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
    }

    function setupCounter() {
        let count = 0;
        const counterValue = document.getElementById("counterValue");

        document.getElementById("increment").addEventListener("click", function () {
            count++;
            counterValue.textContent = count;
        });

        document.getElementById("decrement").addEventListener("click", function () {
            count--;
            counterValue.textContent = count;
        });
        document.getElementById("reset").addEventListener("click",function(){
            count = 0; 
            counterValue.textContent = count;
        });

    }

    // Event listeners for navbar links
    homeLink.addEventListener("click", loadHome);
    taskManagerLink.addEventListener("click", loadTaskManager);
    counterLink.addEventListener("click", loadCounter);

    // Load Home page by default
    loadHome();
});
