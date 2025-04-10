import loadTaskManager from './taskManagerModule.js';
import loadradomQuoteGenerator from './queryGeneratorModule.js';

document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");
    const homeLink = document.getElementById("homeLink");
    const taskManagerLink = document.getElementById("taskManagerLink");
    const counterLink = document.getElementById("counterLink");
    const randomGenLink = document.getElementById("randomgenLink");

    // Function to load Home content
    function loadHome() {
        content.innerHTML = `
            <h1>Welcome to My Javascript Web App Projects</h1>
            <p class="fw-bold text-primary" >Take a Look at My Resume to know About Me.</p>
            <div style="grid-template-columns: 1fr 1fr;" class="d-grid gap-0 column-gap-3">
            <a href="https://www.linkedin.com/in/sakil-ahmed-190362163/?utm_source=share&utm_campaign=share_via&utm_content=profile" target="_blank" id="linkedIn" class="badge link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-6" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>LinkedIn</a> 
            <span><a href="https://github.com/sakil2000?tab=repositories" class="badge link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-6" target="_blank" id="gitHub"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>GitHub </a></span>
            </div>
            <iframe src="/SakilAhmed_Resume_2025.pdf" width="100%" height="400"></iframe>
        `;
        localStorage.setItem("activePage","Home");
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
   
    // Event listeners for navbar links
    homeLink.addEventListener("click", loadHome);
    taskManagerLink.addEventListener("click", loadTaskManager);
    counterLink.addEventListener("click", loadCounter);
    randomGenLink.addEventListener("click",loadradomQuoteGenerator);

    
    let activeTab = localStorage.getItem("activePage");
    if(activeTab === "TaskManager"){
        loadTaskManager();
    }else if(activeTab === "Counter"){
        loadCounter();
    }else if(activeTab === "radomQuoteGenerator"){
        loadradomQuoteGenerator();
    }
    else{
        // Load Home page by default
        loadHome();
        localStorage.setItem("activePage","Home");

    }
    
});

export // Function to Show the Modal
     function showModal(title, message) {
         document.getElementById("modalTitle").textContent = title;
         document.getElementById("modalMessage").textContent = message;    
        // Show the Bootstrap modal
        let modal = new bootstrap.Modal(document.getElementById("customModal"));
         // Change the title background color
        modal.show();
    }
