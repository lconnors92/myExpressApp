import express from 'express';
import fetch from 'node-fetch';

const planets = (await import('npm-solarsystem')).default;
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

//root route
app.get('/', async(req, res) => {
     let apiKey = "7756a1e81f817c186cf57294e1c19b37b49c54b8f34e7c499ee0ce5cd86cd16e";
	let url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&featured=true&query=solar-system`;
    let response = await fetch(url);
    let data = await response.json();
    let randomImage = data.urls.full;
    //could also write the below line as res.render("index",{randomImage})
    res.render("index",{"image":randomImage})
});


// app.get('/earth', (req, res) => {
//  res.render('earth')
// });
app.get('/mercury', (req, res) => {
 let planetMercury = planets.getMercury();
 console.log(planetMercury);
 res.render('mercury', {planetMercury});
});

app.get('/venus', (req, res) => {
 let planetVenus = planets.getVenus();
 console.log(planetVenus);
 res.render('venus', {planetVenus});
});

app.get('/earth', (req, res) => {
 let planetEarth = planets.getEarth();
 console.log(planetEarth);
 res.render('earth', {planetEarth});
});

app.get('/mars', (req, res) => {
 let planetMars = planets.getMars();
 planetMars.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png/960px-Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png"
 console.log(planetMars);
 res.render('mars', {planetMars});
});

app.get('/jupiter', (req, res) => {
 let planetJupiter = planets.getJupiter();
 console.log(planetJupiter);
 res.render('jupiter', {planetJupiter});
});

app.get('/saturn', (req, res) => {
 let planetSaturn = planets.getSaturn();
 console.log(planetEarth);
 res.render('saturn', {planetSaturn});
});

app.get('/uranus', (req, res) => {
 let planetUranus = planets.getUranus();
 console.log(planetUranus);
 res.render('saturn', {planetUranus});
});

app.get('/neptune', (req, res) => {
 let planetNeptune = planets.getNeptune();
 console.log(planetNeptune);
 res.render('neptune', {planetNeptune});
});

app.get('/pluto', (req, res) => {
 let planetPluto = planets.getPluto();
 console.log(planetPluto);
 res.render('pluto', {planetPluto});
});



app.listen(3000, () => {
   console.log('server started');
});
