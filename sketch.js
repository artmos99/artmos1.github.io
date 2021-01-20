function setup() {
  createCanvas(600, 600); //კვადრატია, სადაც ხდება ყველაფერი
  particle = new particle(100, 100); //თავიდანვე წრეს კოორდინატები
}

function draw() {
  background(200);
  particle.update();
  particle.show();
} //ფუნკციები, რის საშუალებითაც ხატავს

function particle(x, y) {
  this.x = x; 
  this.y = y; //ფუნკცია იღებს თავიდანვე მითითებილი კოორდინატები

  this.history = []; //მასივია, სადაც ინახება დიდი წრის ძველი კოორდინატები.

  this.update = function() {
    this.x += random(-15, 15);
    this.y += random(-15, 15); //ამ ფუნკციის საშუალებით წრე ადგილს იცვლის, კოორდინატებს ირჩევს შემთხვევით, ძველ პოზიციიდან -+15 პიქსელი

    var v = createVector(this.x, this.y);
    this.history.push(v); //შეიქმნას ვექტორი და დაამატოს history მასივში დიდი წრის კოორდინატებით.

    if (this.history.length > 25) {
      this.history.splice(0, 1); //თუ მასივის სიგრძე 25ზე მეტია, წაშალოს ერთი ელემენტი, რომელსაც აქვს 0 ინდექსი
    }
  }

  this.show = function() {
    stroke(0); 
    fill(0, 150);
    ellipse(this.x, this.y, 24, 24); //დიდი წრის პოზიცია და ზომა

    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i]; //მასივიდან იღებს ელემენტებს და ამის შესაბამისად ხატავს პატარა წრეებს, და იმდენად, რამდენატაც არის მასივის სიგრძე. 
      fill(random(255)); //ფერი
      ellipse(pos.x, pos.y, 8, 8) //პატარა წრეების პოზიცია და ზომა
    }
  }
}
