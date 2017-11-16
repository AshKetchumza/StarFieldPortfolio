function Tech() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;
    var loadArray = new Array(
        "NodeJS",
        "C#",
        "MongoDB",
        "SQL",
        "Git",
        "JavaScript",
        "PHP",
        ".NET",
        "Laravel",
        "MEAN",
        "Java",
        "Swift",
        "ExpressJS",
        "C++",
        "APIs",
        "AngularJS",
        "GML",
        "XAML",
        "XML",
        "CSS",
        "SCSS",
        "Encryption",
        "JSON",
        "Python",
        "HTML5",
        "JQuery",
        "ASP.NET",
        "Ionic",
        "Cordova",
        "Android",
        "iOS",
        "Xamarin"
    );
                var loadIndex = Math.floor(Math.random() * loadArray.length);
                var loadMessage = loadArray[loadIndex];
                var TextToShow = loadMessage; 

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function() {
    fill(255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 16, 0);
    //ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(255);
    //line(px, py, sx, sy);
    
    text(TextToShow,sx, sy, r, r)

  }
}