//@ts-check
var PLACE_ARRAY = new Array();
// TODO??? Create Super/Parent Class for all other classes that implements "Places" for less code
class Place {
    constructor(name, address, city, zip_code, image, date) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.zip_code = zip_code;
        this.image = image;
        this.date = date;
    }
    GetPosition() {
        return `${this.address}, ${this.zip_code} ${this.city}`;
    }
    GetDate() {
        const _getweekday_ = () => {
            let weekday = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sa"];
            return weekday[this.date.getDay()];
        };
        const _gettime_ = () => {
            let h = this.date.getHours().toString();
            let m = this.date.getMinutes().toString();
            if (m.length == 1)
                m = "0" + m;
            let time = `${h}:${m}`;
            return time;
        };
        // it looks like replaceAll sometimes isn't recognized in TS sometimes, that's why I make another version down below
        // return `${_getweekday_()}., ${this.date.toLocaleDateString().replaceAll('/', '.')} - ${_gettime_()}`;
        let date_string = this.date.toLocaleDateString().split('/').join('.');
        return `${_getweekday_()}., ${date_string} - ${_gettime_()}`;
    }
    PrintHeader() {
        return `
        <div class="col col-md-6 col-lg-3">
          <div class="card h-100">
            <div class="card-header h5 text-center">${this.name}</div>   
    `;
    }
    Display() {
        return ` 
            <img src="${this.image}" class="img-fluid d-none d-md-inline" alt="${this.name}">
            <div class="card-body">
                <p class="card-text">${this.GetPosition()}</p>
                 
      `;
    }
    CloseCBody() {
        return `
            </div>
    `;
    }
    PrintFooter() {
        return `
          <div class="card-footer h6 text-center">
            ${this.GetDate()}
          </div>
    `;
    }
    CloseDivs() {
        return `
          </div>
        </div>    
    `;
    }
}
// Define Classes
class Locations extends Place {
    constructor(name, address, city, zip_code, image, date) {
        super(name, address, city, zip_code, image, date);
        PLACE_ARRAY.push(this);
    }
}
// cuisine (“Chinese”, “Indian”, “Viennese”, …) 
class Restaurants extends Place {
    constructor(name, address, city, zip_code, image, date, cuisine, phone, website) {
        super(name, address, city, zip_code, image, date);
        this.cuisine = cuisine;
        this.phone = phone;
        this.website = website;
        PLACE_ARRAY.push(this);
    }
    Display() {
        // let a_phone = this.phone.replaceAll(' ','').replaceAll('-','').replaceAll('(', '').replace(')', '');
        let a_phone = this.phone.split(' ').join('').split('-').join('').split('(').join('').split(')').join('');
        return `${super.Display()}
    <p class="card-text text-center">${this.cuisine} restaurant</p>
    <p class="card-text text-center"><strong>Contact us:</strong><br /><a href="tel:${a_phone}">${this.phone}</a></p>
    `;
    }
}
class Events extends Place {
    constructor(name, address, city, zip_code, image, date, price) {
        super(name, address, city, zip_code, image, date);
        this.price = price;
        PLACE_ARRAY.push(this);
    }
    Display() {
        return `${super.Display()}
    <p class="card-text text-center"><strong>Price: </strong>${this.price}&euro;</p>`;
    }
}
// Generate random Date
function RandomInt(lo, hi) {
    return Math.round(lo + Math.random() * (hi - lo));
}
// var d = new Date(year, month, day, hours, minutes, seconds)
function RandomDate() {
    let year = RandomInt(2015, 2021);
    let month = RandomInt(0, 11);
    let day = RandomInt(0, 31);
    let hours = RandomInt(0, 23);
    let minutes = RandomInt(0, 59);
    return new Date(year, month, day, hours, minutes);
}
// Fill Places, Restaurants and Events Classes with data and add it to the global array
new Locations("St. Charles Church", "Karlsplatz 1", "Vienna", 1010, "img/St Charles Church_new.jpg", RandomDate());
new Locations("Zoo Vienna", "Maxingstraße 13b", "Vienna", 1130, "img/Zoo Vienna_new.jpg", RandomDate());
new Locations("St. Charles Church", "Karlsplatz 1", "Vienna", 1010, "img/St Charles Church_new.jpg", RandomDate());
new Locations("Zoo Vienna", "Maxingstraße 13b", "Vienna", 1130, "img/Zoo Vienna_new.jpg", RandomDate());
new Restaurants("Lemon Leaf", "Kettenbrückengasse 19", "Vienna", 1050, "img/Lemon Leaf Thai Restaurant_new.png", RandomDate(), "Thai", "+43(1)5812308", "www.lemonleaf.at");
new Restaurants("SIXTA", "Schönbrunner Straße 21", "Vienna", 1050, "img/SIXTA Restaurant_new.png", RandomDate(), "All Cuisines", "+43 1 58 528 56", "www.sixta-restaurant.at");
new Restaurants("Chinese Restaurant", "Kettenbrückengasse 19", "Vienna", 1050, "img/Lemon Leaf Thai Restaurant_new.png", RandomDate(), "Thai", "+43(1)5812308", "www.lemonleaf.at");
new Restaurants("Running Sushi", "Schönbrunner Straße 21", "Vienna", 1050, "img/SIXTA Restaurant_new.png", RandomDate(), "All Cuisines", "+43 1 58 528 56", "www.sixta-restaurant.at");
new Events("Kris Kristofferson", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "Vienna", 1150, "img/Kris Kristofferson_new.jpg", new Date(2021, 10, 15, 20, 0), 58.5);
new Events("Lenny Kravitz", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "Vienna", 1150, "img/Lenny Kravitz_new.jpg", new Date(2029, 11, 9, 19, 30), 47.80);
new Events("AniNite 2021", "Parkallee 2", "Vösendorf", 2334, "img/ANiNite21_new.jpg", new Date(2021, 7, 27, 10, 0), 20);
new Events("Game City 2022", "Rathausplatz 1", "Vienna", 1010, "img/GameCity22_new.jpg", new Date(2022, 9, 14, 10, 0), 0);
console.table(PLACE_ARRAY);
var blog_section_element = document.getElementById("blog-overview"); // get section element to put blog into
var blog_string = '';
var previews_type = '';
var first = true;
var last = false;
for (let i = 0; i < PLACE_ARRAY.length; i++) {
    let place = PLACE_ARRAY[i]; // current place
    let place_pre = PLACE_ARRAY[Math.max(0, i - 1)]; // previews place
    let place_pos = PLACE_ARRAY[Math.min(i + 1, PLACE_ARRAY.length - 1)]; // posterior place
    // make sure to only create the place headline + blog grid once per type of place
    if (place_pre.constructor.name != place.constructor.name || first) {
        blog_string += `<h2 class="text-center mt-3 mt-md-4 mb-2 mb-mb-3">${place.constructor.name}</h2>`; // Create sub-headline
        blog_string += "<div class=\"row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mx-1 mx-lg-4 mb-4\">"; // START BLOG GRID
        first = false;
    }
    // Build cards
    blog_string += place.PrintHeader() + place.Display() + place.CloseCBody() + place.PrintFooter() + place.CloseDivs();
    // make sure to close the blog grid
    if (i == (PLACE_ARRAY.length - 1))
        last = true;
    if (place_pos.constructor.name != place.constructor.name || last)
        blog_string += "</div>"; // END BLOG GRID
}
blog_section_element.innerHTML = blog_string;
// var price_buttons: HTMLCollection = document.getElementsByClassName("own-get-price");
// for (let i = 0; i < price_buttons.length; i++) {
//   price_buttons[i].addEventListener("click", function () {
//     document.getElementsByClassName("own-show-price")[i].innerHTML = vehicle_array[i].PrintPrice();
//   })
// }
// results_div.innerHTML += "</div>"; // END GRID
//# sourceMappingURL=script.js.map