const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateandTimeField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const form =document.querySelector('form');
const imageField = document.querySelector(".resim");
// These variables select the HTML elements that will display weather information.

form.addEventListener('submit' , searchForLocation)
// When the button is clicked, it runs the searchForLocation function.


let target = 'Antalya'


const fetchResults = async (targetLocation) =>{
    let url = `http://api.weatherapi.com/v1/current.json?key=16fbce6dbc894f71a0b162858252802&q=${targetLocation}&aqi=no`
    // This is the URL of the API. API is give us the weather information.

    const res = await fetch(url)

    const data = await res.json()

    console.log(data)


    let temp = data.current.temp_c

    let locationName = data.location.name
    let time = data.location.localtime

    let condition = data.current.condition.text
    let image = data.current.condition.icon 

    updateDetails(temp, locationName, time, condition, image)

    console.log(locationName)
    console.log(time)
    console.log(temp)
    console.log(condition)
    console.log(image)
}
// This function pulls weather data for the given location from the API and prints some data to the console.


function updateDetails(temp , locationName , time , condition , image){
    temperatureField.innerText = temp
    locationField.innerText = locationName
    dateandTimeField.innerText = time
    conditionField.innerText = condition
    imageField.src = image
}
// This function updates the weather info and weather icon.

function searchForLocation(e){
    e.preventDefault()

    target = searchField.value

    fetchResults(target)
}
// This function takes the location entered by the user and requests to fetch weather data.


fetchResults(target)