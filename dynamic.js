
// Get today's date
const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const dd = String(today.getDate()).padStart(2, '0');

// Format the date as YYYY-MM-DD
const formattedDate = `${yyyy}-${mm}-${dd}`;

// Set the input's value to today's date
document.getElementById('dateInput').value = formattedDate;
// Set the minimum date to today
document.getElementById('dateInput').min = formattedDate;

let findStayNavItemEl = document.getElementById("findStay");
let findStaySectionEl = document.getElementById("findStaySection");
let homePageEl = document.getElementById("homePage");


let homeSectionOneEl = document.getElementById("homeSectionOne");
let homeSectionTwoEl = document.getElementById("homeSectionTwo");
let homeSectionThreeEl = document.getElementById("homeSectionThree");

let kondapurItemEl = document.getElementById("kondapurItem");
let kondapurSectionTwoEl = document.getElementById("kondapurSectionTwo");

let homeIconEl = document.getElementById("homeIcon");

let jubileeHillsItemEl = document.getElementById("jubileeHillsItem");
let jubileeHillsSectionTwoEl = document.getElementById("jubileeHillsSectionTwo");

let hitechCityItemEl = document.getElementById("hitechCityItem");
let hitechCitySectionTwoEl = document.getElementById("hitechCitySectionTwo");

let banjaraHillsItemEl = document.getElementById("banjaraHillsItem");
let banjaraHillsSectionTwoEl = document.getElementById("banjaraHillsSectionTwo");

let gachibowliItemEl = document.getElementById("gachibowliItem");
let gachibowliSectionTwoEl = document.getElementById("gachibowliSectionTwo");

let aboutSkylaItemEl = document.getElementById("aboutSkylaItem");
let aboutSkylaSectionEl = document.getElementById("aboutSkylaSection");

let serachResults = document.getElementById("serachResults");
let priceDetailsPage = document.getElementById("priceDetailsPage");

let enquiryPage = document.getElementById("enquiryPage");

//LOCATIONS SECTION START

findStayNavItemEl.onclick = function(){
    kondapurSectionTwoEl.classList.add("d-none");
    jubileeHillsSectionTwoEl.classList.add("d-none");
    hitechCitySectionTwoEl.classList.add("d-none");
    banjaraHillsSectionTwoEl.classList.add("d-none");
    gachibowliSectionTwoEl.classList.add("d-none");
    aboutSkylaSectionEl.classList.add("d-none");
    serachResults.classList.add("d-none");
    priceDetailsPage.classList.add("d-none");
    enquiryPage.classList.add("d-none");

    homeSectionTwoEl.classList.remove("d-none");
}


homeIconEl.onclick = function(){
    kondapurSectionTwoEl.classList.add("d-none");
    jubileeHillsSectionTwoEl.classList.add("d-none");
    hitechCitySectionTwoEl.classList.add("d-none");
    banjaraHillsSectionTwoEl.classList.add("d-none");
    gachibowliSectionTwoEl.classList.add("d-none");
    aboutSkylaSectionEl.classList.add("d-none");
    serachResults.classList.add("d-none");
    priceDetailsPage.classList.add("d-none");
    enquiryPage.classList.add("d-none");

    homeSectionTwoEl.classList.remove("d-none");
}
    
kondapurItemEl.onclick =  function() {
    homeSectionTwoEl.classList.add("d-none");
    jubileeHillsSectionTwoEl.classList.add("d-none");
    hitechCitySectionTwoEl.classList.add("d-none");
    banjaraHillsSectionTwoEl.classList.add("d-none");
    gachibowliSectionTwoEl.classList.add("d-none");
    aboutSkylaSectionEl.classList.add("d-none");
    serachResults.classList.add("d-none");
    serachResults.classList.add("d-none");
    priceDetailsPage.classList.add("d-none");
    enquiryPage.classList.add("d-none");

    kondapurSectionTwoEl.classList.remove("d-none");
}

jubileeHillsItemEl.onclick = function(){
    homeSectionTwoEl.classList.add("d-none");
    kondapurSectionTwoEl.classList.add("d-none");
    hitechCitySectionTwoEl.classList.add("d-none");
    banjaraHillsSectionTwoEl.classList.add("d-none");
    gachibowliSectionTwoEl.classList.add("d-none");
    aboutSkylaSectionEl.classList.add("d-none");
    serachResults.classList.add("d-none");
    priceDetailsPage.classList.add("d-none");
    enquiryPage.classList.add("d-none");

    jubileeHillsSectionTwoEl.classList.remove("d-none");
}

hitechCityItemEl.onclick = function(){
    homeSectionTwoEl.classList.add("d-none");
    kondapurSectionTwoEl.classList.add("d-none");
    jubileeHillsSectionTwoEl.classList.add("d-none");
    banjaraHillsSectionTwoEl.classList.add("d-none");
    gachibowliSectionTwoEl.classList.add("d-none");
    aboutSkylaSectionEl.classList.add("d-none");
    serachResults.classList.add("d-none");
    priceDetailsPage.classList.add("d-none");
    enquiryPage.classList.add("d-none");

    hitechCitySectionTwoEl.classList.remove("d-none");
}

banjaraHillsItemEl.onclick = function(){
    homeSectionTwoEl.classList.add("d-none");
    kondapurSectionTwoEl.classList.add("d-none");
    jubileeHillsSectionTwoEl.classList.add("d-none");
    hitechCitySectionTwoEl.classList.add("d-none");
    gachibowliSectionTwoEl.classList.add("d-none");
    aboutSkylaSectionEl.classList.add("d-none");
    serachResults.classList.add("d-none");
    priceDetailsPage.classList.add("d-none");
    enquiryPage.classList.add("d-none");

    banjaraHillsSectionTwoEl.classList.remove("d-none");
}

gachibowliItemEl.onclick = function(){
    homeSectionTwoEl.classList.add("d-none");
    kondapurSectionTwoEl.classList.add("d-none");
    jubileeHillsSectionTwoEl.classList.add("d-none");
    hitechCitySectionTwoEl.classList.add("d-none");
    banjaraHillsSectionTwoEl.classList.add("d-none");
    aboutSkylaSectionEl.classList.add("d-none");
    serachResults.classList.add("d-none");
    priceDetailsPage.classList.add("d-none");
    enquiryPage.classList.add("d-none");

    gachibowliSectionTwoEl.classList.remove("d-none");
}
//LOCACATIONS SECTION END

//ABOUT SKYLA SECTION START
aboutSkylaItemEl.onclick = function(){
    homeSectionTwoEl.classList.add("d-none");
    kondapurSectionTwoEl.classList.add("d-none");
    jubileeHillsSectionTwoEl.classList.add("d-none");
    hitechCitySectionTwoEl.classList.add("d-none");
    banjaraHillsSectionTwoEl.classList.add("d-none");
    gachibowliSectionTwoEl.classList.add("d-none");
    serachResults.classList.add("d-none");
    priceDetailsPage.classList.add("d-none");
    enquiryPage.classList.add("d-none");

    aboutSkylaSectionEl.classList.remove("d-none");
}
//HOME ICON ACTION
let homeIconInAboutSkylaEl = document.getElementById("homeIconInAboutSkyla");

homeIconInAboutSkylaEl.onclick = function(){
    kondapurSectionTwoEl.classList.add("d-none");
    jubileeHillsSectionTwoEl.classList.add("d-none");
    hitechCitySectionTwoEl.classList.add("d-none");
    banjaraHillsSectionTwoEl.classList.add("d-none");
    gachibowliSectionTwoEl.classList.add("d-none");
    aboutSkylaSectionEl.classList.add("d-none");
    serachResults.classList.add("d-none");
    priceDetailsPage.classList.add("d-none");
    enquiryPage.classList.add("d-none");

    homeSectionTwoEl.classList.remove("d-none");
}
// Select all elements with the class 'box'
const boxes = document.querySelectorAll('.box');

// Function to handle click event
function handleClick(event) {
    // Remove 'active' class from all boxes
    boxes.forEach(box => box.classList.remove('active'));
    
    // Add 'active' class to the clicked box
    event.currentTarget.classList.add('active');
}

// Add click event listener to each box
boxes.forEach(box => {
    box.addEventListener('click', handleClick);
});

//ABOUT SKYLA LOCATIONS TEXT LINK
let gachibowliLocationLinkEl = document.getElementById("gachibowliLocationLink");
let banjaraHillsLocationLinkEl = document.getElementById("banjaraHillsLocationLink");
let hitechCityLocationLinkEl = document.getElementById("hitechCityLocationLink");
let jubileeHillsLocationLinkEl = document.getElementById("jubileeHillsLocationLink");
let kondapurLocationLinkEl = document.getElementById("kondapurLocationLink");


function locationGachibowliFunction(){
    banjaraHillsLocationLinkEl.classList.add("d-none");
    hitechCityLocationLinkEl.classList.add("d-none");
    jubileeHillsLocationLinkEl.classList.add("d-none");
    kondapurLocationLinkEl.classList.add("d-none");
    serachResults.classList.add("d-none");
    priceDetailsPage.classList.add("d-none");
    enquiryPage.classList.add("d-none");

    gachibowliLocationLinkEl.classList.remove("d-none");
};

function locationBanjaraHillsFunction(){
    hitechCityLocationLinkEl.classList.add("d-none");
    jubileeHillsLocationLinkEl.classList.add("d-none");
    kondapurLocationLinkEl.classList.add("d-none");
    gachibowliLocationLinkEl.classList.add("d-none");
    serachResults.classList.add("d-none");
    priceDetailsPage.classList.add("d-none");
    enquiryPage.classList.add("d-none");

    banjaraHillsLocationLinkEl.classList.remove("d-none");
};

function locationHitechCityFunction(){
    jubileeHillsLocationLinkEl.classList.add("d-none");
    kondapurLocationLinkEl.classList.add("d-none");
    gachibowliLocationLinkEl.classList.add("d-none");
    banjaraHillsLocationLinkEl.classList.add("d-none");
    serachResults.classList.add("d-none");
    priceDetailsPage.classList.add("d-none");
    enquiryPage.classList.add("d-none");

    hitechCityLocationLinkEl.classList.remove("d-none");
};

function locationJubileeHillsFunction(){
    hitechCityLocationLinkEl.classList.add("d-none");
    kondapurLocationLinkEl.classList.add("d-none");
    gachibowliLocationLinkEl.classList.add("d-none");
    banjaraHillsLocationLinkEl.classList.add("d-none");
    serachResults.classList.add("d-none");
    priceDetailsPage.classList.add("d-none");
    enquiryPage.classList.add("d-none");

    jubileeHillsLocationLinkEl.classList.remove("d-none");
};

function locationKondapurFunction(){
    hitechCityLocationLinkEl.classList.add("d-none");
    jubileeHillsLocationLinkEl.classList.add("d-none");
    gachibowliLocationLinkEl.classList.add("d-none");
    banjaraHillsLocationLinkEl.classList.add("d-none");
    serachResults.classList.add("d-none");
    priceDetailsPage.classList.add("d-none");
    enquiryPage.classList.add("d-none");

    kondapurLocationLinkEl.classList.remove("d-none");
};
//ABOUT SKYLA LOCATIONS TEXT LINK END



let kondapurEl = document.getElementById("kondapur");
let jubileeHillsEl = document.getElementById("jubileeHills");
let hitechCityEl = document.getElementById("hitechCity");
let banjaraHillsEl = document.getElementById("banjaraHills");
let gachibowliEl = document.getElementById("gachibowli");

let homePageKondapurRoomsEl = document.getElementById("homePageKondapurRooms");
let homePageJubileeHillsRoomsEl = document.getElementById("homePageJubileeHillsRooms");
let homePageHitechCityRoomsEl = document.getElementById("homePageHitechCityRooms");
let homePageBanjaraHillsRoomsEl = document.getElementById("homePageBanjaraHillsRooms");
let homePageGachibowliRoomsEl = document.getElementById("homePageGachibowliRooms");

kondapurEl.onclick = function(){
    homePageJubileeHillsRoomsEl.classList.add("d-none");
    homePageHitechCityRoomsEl.classList.add("d-none");
    homePageBanjaraHillsRoomsEl.classList.add("d-none");
    homePageGachibowliRoomsEl.classList.add("d-none");
    homePageKondapurRoomsEl.classList.remove("d-none");
    serachResults.classList.add("d-none");
    priceDetailsPage.classList.add("d-none");
    enquiryPage.classList.add("d-none");

    gachibowliEl.classList.remove("color");
    banjaraHillsEl.classList.remove("color");
    hitechCityEl.classList.remove("color");
    jubileeHillsEl.classList.remove("color");
    kondapurEl.classList.add("color");
}
jubileeHillsEl.onclick = function(){
    homePageHitechCityRoomsEl.classList.add("d-none");
    homePageBanjaraHillsRoomsEl.classList.add("d-none");
    homePageGachibowliRoomsEl.classList.add("d-none");
    homePageKondapurRoomsEl.classList.add("d-none");
    homePageJubileeHillsRoomsEl.classList.remove("d-none");
    serachResults.classList.add("d-none");
    priceDetailsPage.classList.add("d-none");
    enquiryPage.classList.add("d-none");

    gachibowliEl.classList.remove("color");
    banjaraHillsEl.classList.remove("color");
    hitechCityEl.classList.remove("color");
    jubileeHillsEl.classList.add("color");
    kondapurEl.classList.remove("color");
}
hitechCityEl.onclick = function(){
    homePageBanjaraHillsRoomsEl.classList.add("d-none");
    homePageGachibowliRoomsEl.classList.add("d-none");
    homePageKondapurRoomsEl.classList.add("d-none");
    homePageJubileeHillsRoomsEl.classList.add("d-none");
    homePageHitechCityRoomsEl.classList.remove("d-none");
    serachResults.classList.add("d-none");
    priceDetailsPage.classList.add("d-none");
    enquiryPage.classList.add("d-none");

    gachibowliEl.classList.remove("color");
    banjaraHillsEl.classList.remove("color");
    hitechCityEl.classList.add("color");
    jubileeHillsEl.classList.remove("color");
    kondapurEl.classList.remove("color");
}
banjaraHillsEl.onclick = function(){
    homePageGachibowliRoomsEl.classList.add("d-none");
    homePageKondapurRoomsEl.classList.add("d-none");
    homePageJubileeHillsRoomsEl.classList.add("d-none");
    homePageHitechCityRoomsEl.classList.add("d-none");
    homePageBanjaraHillsRoomsEl.classList.remove("d-none");
    serachResults.classList.add("d-none");
    priceDetailsPage.classList.add("d-none");
    enquiryPage.classList.add("d-none");

    gachibowliEl.classList.remove("color");
    banjaraHillsEl.classList.add("color");
    hitechCityEl.classList.remove("color");
    jubileeHillsEl.classList.remove("color");
    kondapurEl.classList.remove("color");
}
gachibowliEl.onclick = function(){
    homePageKondapurRoomsEl.classList.add("d-none");
    homePageJubileeHillsRoomsEl.classList.add("d-none");
    homePageHitechCityRoomsEl.classList.add("d-none");
    homePageBanjaraHillsRoomsEl.classList.add("d-none");
    homePageGachibowliRoomsEl.classList.remove("d-none");
    serachResults.classList.add("d-none");
    priceDetailsPage.classList.add("d-none");
    enquiryPage.classList.add("d-none");

    gachibowliEl.classList.add("color");
    banjaraHillsEl.classList.remove("color");
    hitechCityEl.classList.remove("color");
    jubileeHillsEl.classList.remove("color");
    kondapurEl.classList.remove("color");

}

//Finding rooms 
let setLocationEl = document.getElementById("setLocation");
let statusEl = document.getElementById("status");
let locationWarningTextEl = document.getElementById("locationWarningText");
let stayTypeWarningTextEl = document.getElementById("stayTypeWarningText");

function findFunction(){
    priceDetailsPage.classList.add("d-none");
    function warning(event){
        if (event.value !== "Select Location"){
            locationWarningTextEl.classList.add("d-none");
        }
    };
    setLocationEl.addEventListener("click",warning);

    function warningTwo(event){
        if (event.value !=="Select Stay Type"){
            stayTypeWarningTextEl.classList.add("d-none");
        }
    }
    statusEl.addEventListener("click",warningTwo);
    let locationNameEl = setLocationEl.value;
    if (setLocationEl.value==="Select Location"){
        stayTypeWarningTextEl.classList.add("d-none");
        locationWarningTextEl.classList.remove("d-none");
    }
    else{
        locationWarningTextEl.classList.add("d-none");
        if (statusEl.value==="Select Stay Type"){
            stayTypeWarningTextEl.classList.remove("d-none");
        }
        else{
            stayTypeWarningTextEl.classList.add("d-none");
            homeSectionTwoEl.classList.add("d-none");
            const spinner = document.getElementById("spinner");
            const spinnerContainer = document.getElementById("spinnerContainer");
            spinnerContainer.style.display = "block";
            if (spinner.style.display === "none" || spinner.style.display === "") {
                spinner.style.display = "block"; // Show spinner
            } else {
                spinner.style.display = "none"; // Hide spinner
            }
            setTimeout(function(){
                spinnerContainer.style.display = "none";
                enquiryPage.classList.add("d-none");
                
                serachResults.classList.remove("d-none")
            },1000);
            let serachResultsLocationNameEl = document.getElementById("serachResultsLocationName");
            serachResultsLocationNameEl.textContent = "1 Proerties in "+locationNameEl;
            
        }
    }
}
function goToHomePage(){
    homeSectionTwoEl.classList.remove("d-none");
    priceDetailsPage.classList.add("d-none");
    serachResults.classList.add("d-none");
}


function priceDetailsFunction(){
    serachResults.classList.add("d-none");   
    enquiryPage.classList.add("d-none");

    priceDetailsPage.classList.remove("d-none");
}


let requestName = document.getElementById("requestName");
let requestEmail = document.getElementById("requestEmail");
let requestNumber = document.getElementById("requestNumber");

let warning1 = document.getElementById("warning1");
let warning2 = document.getElementById("warning2");
let warning3 = document.getElementById("warning3");

function nameFunction(event){
    if (requestName.value===""){
        warning1.classList.remove("d-none");
    }else{
        warning1.classList.add("d-none");
    }
}
requestName.addEventListener("blur",nameFunction)

function emailFunction(){
    if (requestEmail.value ===""){
        warning2.classList.remove("d-none")
    }else{
        warning2.classList.add("d-none");
    }
}
requestEmail.addEventListener("blur",emailFunction)

function numberFunction(){
    if (requestNumber.value===""){
        warning3.classList.remove("d-none");
    }else{
        warning3.classList.add("d-none");
    }
}
requestNumber.addEventListener("blur",numberFunction)

function requestForm(){ 
    const input = requestNumber.value; 
    const isNumber = /^\d+(\.\d+)?$/.test(input);
    if (!isNumber) {
       warning3.classList.remove("d-none");
    } else {
        warning3.classList.add("d-none");
        priceDetailsPage.classList.add("d-none");

        enquiryPage.classList.remove("d-none");
    }
}


