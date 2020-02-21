let submit = document.getElementById("submit");

submit.addEventListener("click", e => {
    e.preventDefault();
    let input = document.getElementById("city").value;
    let api = "http://api.openweathermap.org/data/2.5/weather?q=";
    let city = input;
    let units = "&units=metric";
    let apiKey = "&APPID=32f471b8025d6dc209fb6111e484b23a";
    let url = api + city + apiKey + units;
    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(myJson => {
            console.log(myJson.main.temp);
        });
});