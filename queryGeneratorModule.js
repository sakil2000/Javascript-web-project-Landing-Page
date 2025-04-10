import { showModal } from './homePage.js';

 // Function to load the random quote generator UI
 export default function loadradomQuoteGenerator() {
    content.innerHTML = ` 
        <div class="container text-center" id="quotediv" style="padding:3%;">
            <h1>Random Quote Generator</h1>   
            <div class="container" id="quoteGenerator" >            
                <blockquote class="blockquote  text-black-emphasis">
                    <q id="quote">Do or Die</q>
                    <h6 id="author">Mahatma Gandhi</h6>
                </blockquote>
                <button class="btn text-black mt-2" type="button" id="quoteGeneratorBtn">Generate a New Quote</button>
            </div>     
        </div>   
    `;
    document.getElementById("quote").style.backgroundColor = "lightsalmon";
   
    
    // Attach event listener to the button
    document.getElementById("quoteGeneratorBtn").addEventListener("click", generateQuote);

    // Store the active page in localStorage
    localStorage.setItem("activePage", "radomQuoteGenerator");
}


// Function to fetch and display a new quote
 async function generateQuote() {
    
    try {
        
        if(!navigator.onLine){    
            window.addEventListener("click",showModal ("Warning No Internet Connection","Oops! You are offline. Please check your internet connection and try again later."));  
            document.getElementById("modalTitle").style.backgroundColor = "red";
            console.log("Offline event triggered: You are offline.");	
            return;
        } 
        console.log("start Fetching a new quote...");

        const response = await fetch('https://dummyjson.com/quotes/random');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();        

        // Update the DOM with the new quote and author
        document.getElementById("quote").textContent = data.quote;
        document.getElementById("author").textContent = data.author;
    } catch (error) {
        console.error("Error fetching data:", error);
        showModal("Error fetching data",`${error.message}`)
        document.getElementById("modalTitle").style.backgroundColor = "red";
    }
}

