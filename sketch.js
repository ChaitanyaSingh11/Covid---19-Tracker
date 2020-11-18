function preload() {
  bg = loadImage("covid.jpg"); 
}

function setup() {
  createCanvas(500, 400);
  background(bg);
  Covid_19Tracker();
}

async function Covid_19Tracker() {
  var response = await fetch("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true");
  var responseJSON = await response.json();
  var total = await responseJSON.totalCases;
  var active = await responseJSON.activeCases;
  var deaths = await responseJSON.deaths;
  var recovered = await responseJSON.recovered;
  var datetime = (String)(responseJSON.lastUpdatedAtApify);
  var day = datetime.slice(8, 10);
  var month = datetime.slice(5, 7);
  var year = datetime.slice(0, 4);
  fill(255);
  stroke(0,150)
  strokeWeight(10);
  textSize(32);
  textAlign(LEFT);
  text("Date : " + day + "/" + month + "/" + year, 10, 150);
  push();
  fill(255,0,0);
  stroke(255,255,0,150)
  strokeWeight(5);
  text("Total : " + total, 10, 220);
  pop();
  push();
  fill(0,255,0);
  stroke(0,150)
  strokeWeight(10);
  text("Recovered : " + recovered, 10, 260);
  pop();
  push();
  fill(255,255,0);
  stroke(0,150)
  strokeWeight(10);
  text("Active Cases : " + active, 10, 300);
  pop();
  push();
  fill(255,0,0);
  stroke(0,150)
  strokeWeight(10);
  text("Deaths : " + deaths, 10, 340);
  pop();
  textSize(45);
  textAlign(CENTER);
  text("COVID - 19 Tracker*", width / 2, 50)
  // console.log(responseJSON);
  noStroke();
  textSize(12);
  textAlign(CENTER);
  text("*Country : India",450,390)
}