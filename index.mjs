import express from 'express';
import fetch from 'node-fetch';

const planets = (await import('npm-solarsystem')).default;
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

//root route
app.get('/', async(req, res) => {
    //hit the limit had to create an app and get the key
    let apiKey = "kS0Bxix9jy_K4_WSu7fWSSgsMHGwvDv7yAvNMCn8mxM";
    let url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&featured=true&query=solar-system`;

    let response = await fetch(url);
    let data = await response.json();
    let randomImage = data.urls.full;
    //could also write the below line as res.render("index",{randomImage})
    res.render("index",{"image":randomImage})
});

//REALLY overcomplicated date, just needed to remove it from URL
app.get('/nasa', async (req, res) => {
    let apiKey = "9mUzIkhlZCZaOoMfspg7jMmwZCZ4LiRHtkgkambD";

    let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    let response = await fetch(url);
    let data = await response.json();

    res.render("nasa", { apod: data });
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
 planetMars.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png/960px-Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png";
 console.log(planetMars);
 res.render('mars', {planetMars});
});

app.get('/jupiter', (req, res) => {
 let planetJupiter = planets.getJupiter();
 planetJupiter.image = "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter_OPAL_2024.png";
 console.log(planetJupiter);
 res.render('jupiter', {planetJupiter});
});

app.get('/saturn', (req, res) => {
 let planetSaturn = planets.getSaturn();
 console.log(planetSaturn);
 res.render('saturn', {planetSaturn});
});

app.get('/uranus', (req, res) => {
 let planetUranus = planets.getUranus();
 console.log(planetUranus);
 res.render('uranus', {planetUranus});
});

app.get('/neptune', (req, res) => {
 let planetNeptune = planets.getNeptune();
 console.log(planetNeptune);
 res.render('neptune', {planetNeptune});
});

app.get('/pluto', (req, res) => {
 let planetPluto = planets.getPluto();
 planetPluto.image = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Pluto_in_True_Color_-_High-Res.jpg";
 console.log(planetPluto);
 res.render('pluto', {planetPluto});
});



app.listen(3000, () => {
   console.log('server started');
});
