var weather_form = document.querySelector(".weather_form")
var city_name = document.getElementById("city_name")
var card = document.getElementById("card")
const api_key = '5b5768a378679d13bab0cec725dcedd6'
const get_weather = document.getElementById("get_weather")
const bg_video = document.querySelector("#bg_video")
const source = bg_video.querySelector("source")

weather_form.addEventListener("submit", async (e)=>{
    e.preventDefault()
    const input = city_name.value
    if (input) {
        try {
            const weather = await get_weather_data(input)
            display_weather(weather)
            
        } catch (error) {
            console.log(error)
            display_error("city does not exist")
        }
        
    } else {
        display_error("please enter city name")
    }
})
async function get_weather_data(city) {
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const weather_data = await fetch(api_url)
    console.log(weather_data)
    if (!weather_data.ok) {
        throw new Error("Could not fetch data");
    } 
    return await weather_data.json()
}
function display_weather(data) {
    const  {name : city , main: {temp,humidity}, weather : [{description , id}]} = data
    card.textContent = ""
    card.style.display = "flex"

    const city_display = document.createElement("h3")
    const temprature_display = document.createElement("h4")
    const humidity_display = document.createElement("h4")
    const description_display = document.createElement("h4")

    city_display.textContent = city
    temprature_display.textContent = `Temprature: ${(temp -273.15).toFixed(2)}°C`
    humidity_display.textContent = `humidity: ${humidity}%`
    description_display.textContent = description

    card.appendChild(city_display)
    card.appendChild(temprature_display)
    card.appendChild(humidity_display)
    card.appendChild(description_display)
   
    weather_back(id)

}
function weather_back(weatherid) {
    let src = ""
    switch (true) {
        case (weatherid>= 200 && weatherid <300):
            console.log("Thunderstrom")
            src = "thunderstrom.mp4"
            source.setAttribute("src", src)
            break;

        case (weatherid>= 300 && weatherid <400):
            console.log("Drizzle")
            src = "drizzle.mp4"
            source.setAttribute("src", src)
            break;
        case (weatherid>= 500 && weatherid <600):
            console.log("heavy rain")
            src = "heavyrain.mp4"
            source.setAttribute("src", src)
            break;
        case (weatherid>= 600 && weatherid <700):
            console.log("snow")
            src = "snow.mp4"
            source.setAttribute("src", src)
            break;
        case (weatherid>= 700 && weatherid <800):
            console.log("fog")
            src = "fog.mp4"
            source.setAttribute("src", src)
            break;
        case (weatherid == 800):
            console.log("clear sky")
            src = "clearsky.mp4"
            source.setAttribute("src", src)
            break;
        case (weatherid > 800):
            console.log("clouds")
            src = "clouds.mp4"
            source.setAttribute("src", src)
            break;
    
        default:
            break;
    }

    bg_video.load()

    bg_video.addEventListener("canplay",()=>{
        bg_video.play()
    })
    
    
    
}
function display_error(msg) {
    const errormsg = document.createElement("p")
    card.textContent = ""
    errormsg.textContent = msg
    card.appendChild(errormsg);
    

    
}
