let name = document.getElementById('name');
let url = document.getElementById('url');
let description = document.getElementById('description');

const getNews = async ()=> {
    let data = await fetch("https://newsdata.io/api/1/sources?apikey=pub_485471b2f822f2905ceddb23587c4fc2753d1&country=in");
    let parsedData = await data.json();
    console.log(parsedData.results[1].description);
    name.innerHTML = parsedData.results[1].name;
    url.innerHTML = parsedData.results[1].url;
    description.innerHTML = parsedData.results[1].description;
}

// https://newsdata.io/api/1/sources?apikey=pub_485471b2f822f2905ceddb23587c4fc2753d1&country=in