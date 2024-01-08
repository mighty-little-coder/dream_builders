function getAllCars(make, year, model) {

    var requestURL =`https://www.carqueryapi.com/api/0.3/?cmd=getTrims&keyword=${make}&full_results=0&year=${year}&model=${model}`

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then (function(data) {
        console.log(data);
    })
    // 84040 console.log();
}

function getCar (carId) {
    var requestURL =`https://www.carqueryapi.com/api/0.3/?cmd=getModel&model=${carId}`

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then (function(data) {
        console.log(data);
    })
}
module.exports = {

    getCar,
    getAllCars
}
