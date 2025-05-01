import { showModal,getSpinner } from "./homePage.js";
export default function loadCurrencyConverter(){
content.innerHTML = `
        <div  class="container-fluid bg-info-subtle bg-opacity-10 border border-info rounded">
        <!-- header section -->
        <section class="bg-dark text-light p-2 mb-3 mt-3">
            <div class="container-md container-fluid text-center">   
                <header class="fs-1">
                    <h1 class="fw-bold">Currency Converter</h1>                    
                </header>
            </div>
        </section>
        <div class="container">
            <h2 class="fw-semibold d-flex flex-nowrap" >Exchange Rate Today</h2>
        </div>
        <!-- input and dropdown section -->
            <div class="container container-md bg-secondary p-3 rounded-3 mb-3">
                
                <div class="row justify-content-center align-items-center mb-3 text-black">
                    <div class="col-fluid col-md-3">
                        <label for="amount" class="fs-4 fw-semibold">Amount</label>
                        <input type="number" class="form-control" id="amount" placeholder="Enter amount" required > 

                    </div>
                    <div class="col-fluid col-md-3">                        
                            <label for="currency1" class="fs-4 fw-semibold">From</label>
                            <select id="currency1" class="form-select ">
                              <option selected>Select Currency</option>                            
                            </select>
                          
                    </div>
                    <div class="col-fluid col-md-auto">
                        <br><button class="btn btn-sm btn-light p-1 align-self-center rounded-5 " id="swapBtn" type="button">
                            <span class="material-symbols-outlined mt-1 mx-1">
                                currency_exchange
                                </span>
                        </button>                        
                    </div>
                    <div class="col-fluid col-md-3">
                        <label for="currency2" class="fs-4 fw-semibold">To</label>
                            <select id="currency2" class="form-select">
                              <option selected>Select Currency</option>                            
                            </select>
                    </div>

                </div>
                <div class="row justify-content-center align-items-start mb-3 ">
                    <div class="col-fluid mb-3 col-md-3">
                        <div class="input-group">
                            <span class="input-group-text" id="exchangeIcon">                                
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
                                    <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
                                    <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
                                    <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
                                  </svg>
                            </span>                           
                            <input class="form-control form-control-md fw-bold text-dark bg-dark-subtle" aria-describedby="exchangeIcon" type="text"id="result"  title="result" value="0" readonly>                          
                        </div>
                    </div>
                    <div class="col-fluid col-md-3">                        
                        <button class="btn btn-md btn-md btn-dark" id="convertBtn" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-currency-exchange" viewBox="0 0 16 16">
                                <path d="M0 5a5 5 0 0 0 4.027 4.905 6.5 6.5 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05q-.001-.07.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.5 3.5 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98q-.004.07-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5m16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674z"></path>
                              </svg> convert </button>
                    </div>
                </div>
            </div> 
            
        </div>  
        <footer class="text-center">
        <span class="fw-bold">Note:</span>
         <span class="fw-medium">This website utilizes exchange rate data from the Frankfurter API, an open-source currency data API that tracks reference exchange rates published by institutional and non-commercial sources like the European Central Bank.</span>
        </footer>      

`;

setupDropdown();
document.getElementById("convertBtn").addEventListener("click", currencyConversion);
document.getElementById("swapBtn").addEventListener("click", swapValues);

localStorage.setItem("activePage","currencyConverter");
    
};



async function setupDropdown() {
    try {
         
        let currencyList = [];
        let CurrenciesApi = "https://api.frankfurter.dev/v1/currencies";
        let response = await fetch(CurrenciesApi);
        let data = await response.json();
        currencyList = Object.entries(data);
        
        if(!response.ok){
            throw new error("Network response was not ok" + response.statusText);
        }

       for(let i=0;i<=currencyList.length -1; i++){
        let options = `<option value= "${currencyList[i][0]}">${currencyList[i][0]+"-"+currencyList[i][1]}</option>;`;
       document.getElementById("currency1").innerHTML += options;
       document.getElementById("currency2").innerHTML += options;
       }
         document.getElementById("currency1").selectedIndex = 30;
         document.getElementById("currency2").selectedIndex = 15;
        
    } catch (error) {
        console.error("Error fetching data:", error);
        showModal("Error fetching data",`${error.message}`)
        document.getElementById("modalTitle").style.backgroundColor = "red";
        
    }
       
         
} 


async function currencyConversion() {
    let convertBtn = document.getElementById("convertBtn");
    const inputs = document.querySelectorAll("input, select,.btn");
    let originalBtn = convertBtn.innerHTML;

    try{

        convertBtn.innerHTML = getSpinner();
        inputs.forEach(input => input.disabled = true);
        const from = document.getElementById("currency1").value;
        const to = document.getElementById("currency2").value;
        const amountValue = document.getElementById("amount").value;
        let result = document.getElementById("result"); 
        
        if(!navigator.onLine){    
            window.addEventListener("click",showModal ("Warning No Internet Connection","Oops! You are offline. Please check your internet connection and try again later."));  
            document.getElementById("modalTitle").style.backgroundColor = "red";
            console.log("Offline event triggered: You are offline.");	
            return;
        }   
        else if(!amountValue || amountValue <= 0){
            showModal("Warning","Please enter a valid amount to convert.");
            document.getElementById("modalTitle").style.backgroundColor = "red";
            return;
        }else if(from.toLowerCase() == to.toLowerCase()){
            showModal("Warning","Please select different currencies to convert.");
            document.getElementById("modalTitle").style.backgroundColor = "red";
            return;
        }
    
        let response = await fetch(`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`);
        let data = await response.json();
        console.log(data);
        const convertedAmount = (amountValue * data.rates[to]).toFixed(4);
        result.value = `${convertedAmount}`;
        result.style.backgroundColor="pink";

    }catch(error){
        console.error("Error fetching data:", error);
        showModal("Error fetching data",`${error.message}`)
        document.getElementById("modalTitle").style.backgroundColor = "red";
    }
    finally{
        convertBtn.innerHTML=originalBtn;
        inputs.forEach(input => input.disabled = false);
    }
       
}

function swapValues(){
    try{
    let currency1 = document.getElementById("currency1").value;
    let currency2 = document.getElementById("currency2").value;

    document.getElementById("currency1").value = currency2;
    document.getElementById("currency2").value = currency1;

    let result = document.getElementById("result");
    result.value=0;
    result.style.backgroundColor="white"; 
    }catch(error){
        console.error("Error fetching data:", error);
        showModal("Error fetching data",`${error.message}`)
        document.getElementById("modalTitle").style.backgroundColor = "red";
    }
    
}

