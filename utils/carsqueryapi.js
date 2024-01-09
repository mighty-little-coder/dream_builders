// document.addEventListener('DOMContentLoaded', function() {
//     getAllMakes();
// });

// function getAllMakes() {
//     // Replace with your API call to get all makes
//     // For demonstration, let's assume it's a GET request to a specific URL
//     fetch('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModel&model=11459')
//         .then(response => response.json())
//         .then(data => populateDropdown('makeSelect', data));
// }

// function populateDropdown(dropdownId, data) {
//     const dropdown = document.getElementById(dropdownId);
//     data.forEach(item => {
//         const option = document.createElement('option');
//         option.value = item.id; // Adjust according to your API response
//         option.textContent = item.name; // Adjust according to your API response
//         dropdown.appendChild(option);
//     });
// }

// function onMakeChange() {
//     const make = document.getElementById('makeSelect').value;
//     if (make) {
//         // Fetch and populate models based on the selected make
//         fetch(`https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModel&model=11459`)
//             .then(response => response.json())
//             .then(data => populateDropdown('modelSelect', data));
//     }
// }

// function onModelChange() {
//     const make = document.getElementById('makeSelect').value;
//     const model = document.getElementById('modelSelect').value;
//     if (make && model) {
//         // Fetch and populate years based on the selected make and model
//         fetch(`https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModel&model=11459`)
//             .then(response => response.json())
//             .then(data => populateDropdown('yearSelect', data));
//     }
// }

// Function to handle the JSONP response for makes
// function handleMakesResponse(response) {
//     const makes = response.Makes;
//     const makeSelect = document.getElementById('make');
//     makes.forEach(make => {
//         const option = document.createElement('option');
//         option.value = make.make_id;
//         option.textContent = make.make_display;
//         makeSelect.appendChild(option);
//     });
// }

// function handleModelsResponse(response) {
//     const models = response.Models;
//     const modelSelect = document.getElementById('model');
//     modelSelect.innerHTML = '<option value="">Select Model</option>';
//     models.forEach(model => {
//         const option = document.createElement('option');
//         option.value = model.model_name;
//         option.textContent = model.model_name; 
//         modelSelect.appendChild(option);
//     });
// }

// function loadJSONP(url, callbackName) {
//     const script = document.createElement('script');
//     script.src = `${url}&callback=${callbackName}`;
//     document.head.appendChild(script);
// }

// function loadMakes() {
//     loadJSONP('https://www.carqueryapi.com/api/0.3/?cmd=getMakes&year=2000&sold_in_us=1', 'handleMakesResponse');
// }

// function updateModels() {
//     const make = document.getElementById('make').value;
//     if (make) {
//         loadJSONP(`https://www.carqueryapi.com/api/0.3/?cmd=getModels&make=${make}`, 'handleModelsResponse');
//     }
// }

// function updateTrimsAndYears() {
// }

// document.addEventListener('DOMContentLoaded', loadMakes);

// function getAllCars(make, year, model) {
//     var requestURL =`https://www.carqueryapi.com/api/0.3/?cmd=getTrims&keyword=${make}&full_results=0&year=${year}&model=${model}`
//     fetch(requestURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then (function(data) {
//         console.log(data);
//     })
//     // 84040 console.log();
// }
// function getCar (carId) {
//     var requestURL =`https://www.carqueryapi.com/api/0.3/?cmd=getModel&model=${carId}`
//     fetch(requestURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then (function(data) {
//         console.log(data);
//     })
// }
// console.log (getAllCars("ford","2010","Focus"))
// module.exports = {
//     getCar,
//     getAllCars
// }
const proxyUrl = '';
const apiUrl = 'https://www.carqueryapi.com/api/0.3/?cmd=getYears';
fetch(proxyUrl + apiUrl)

function loadYears() {
    // fetch('https://www.carqueryapi.com/api/0.3/?cmd=getYears')
        fetch(proxyUrl + apiUrl)
        .then(response => response.json())
        .then(data => {
            const yearSelect = document.getElementById('year');
            yearSelect.innerHTML = '<option value="">Select Year</option>';
            for (let year = data.Years.min_year; year <= data.Years.max_year; year++) {
                const option = document.createElement('option');
                option.value = year;
                option.textContent = year;
                yearSelect.appendChild(option);
            }
        });
}
console.log (loadYears())

function updateMakes() {
    const yearSelect = document.getElementById('year');
    const selectedYear = yearSelect.value;
    fetch(`https://www.carqueryapi.com/api/0.3/?cmd=getMakes&year=${selectedYear}`)
        .then(response => response.json())
        .then(data => {
            const makeSelect = document.getElementById('make');
            makeSelect.innerHTML = '<option value="">Select Make</option>';
            data.Makes.forEach(make => {
                const option = document.createElement('option');
                option.value = make.make_id;
                option.textContent = make.make_display;
                makeSelect.appendChild(option);
            });
        });
}

function updateModels() {
    const makeSelect = document.getElementById('make');
    const yearSelect = document.getElementById('year');
    const selectedMake = makeSelect.value;
    const selectedYear = yearSelect.value;
    fetch(`https://www.carqueryapi.com/api/0.3/?cmd=getModels&make=${selectedMake}&year=${selectedYear}`)
        .then(response => response.json())
        .then(data => {
            const modelSelect = document.getElementById('model');
            modelSelect.innerHTML = '<option value="">Select Model</option>';
            data.Models.forEach(model => {
                const option = document.createElement('option');
                option.value = model.model_name;
                option.textContent = model.model_name;
                modelSelect.appendChild(option);
            });
        });
}

function updateTrims() {
    const makeSelect = document.getElementById('make');
    const modelSelect = document.getElementById('model');
    const yearSelect = document.getElementById('year');
    const selectedMake = makeSelect.value;
    const selectedModel = modelSelect.value;
    const selectedYear = yearSelect.value;
    fetch(`https://www.carqueryapi.com/api/0.3/?cmd=getTrims&make=${selectedMake}&model=${selectedModel}&year=${selectedYear}`)
        .then(response => response.json())
        .then(data => {
            const trimSelect = document.getElementById('trim');
            trimSelect.innerHTML = '<option value="">Select Trim</option>';
            data.Trims.forEach(trim => {
                const option = document.createElement('option');
                option.value = trim.model_trim;
                option.textContent = trim.model_trim || 'Standard';
                trimSelect.appendChild(option);
            });
        });
}

// document.addEventListener('DOMContentLoaded', loadYears);
// document.getElementById('year').addEventListener('change', updateMakes);
// document.getElementById('make').addEventListener('change', updateModels);
// document.getElementById('model').addEventListener('change', updateTrims);


