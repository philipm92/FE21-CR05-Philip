//@ts-check
var PLACE_ARRAY = new Array();
// TODO??? Create Super/Parent Class for all other classes that implements "Places" for less code
// class Parent implements PlaceInterface {
//   constructor(public name: string, public address: string, public city: string, public zip_code: number, public image: string, public date: Date) {}
//   GetPosition(): string {
//     return `${this.address}, ${this.zip_code} ${this.city}`;
//   }
//   GetDate(): string {
//     const _getweekday_ = (): string => {
//       let weekday: Array<string> = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sa"];
//       return weekday[this.date.getDay()]
//     }
//     const _gettime_ = (): string => {
//       let h = this.date.getHours().toString();
//       let m = this.date.getMinutes().toString();
//       if (m.length == 1) m = "0" + m;
//       let time: string = `${h}:${m}`;
//       return time;
//     }
//     return `${_getweekday_()}., ${this.date.toLocaleDateString().replaceAll('/', '.')} - ${_gettime_()}`;
//   }
//   PrintHeader(): string {
//     return `
//         <div class="col col-md-6 col-lg-3">
//           <div class="card h-100">
//             <div class="card-header h5 text-center">${this.name}</div>   
//     `;
//   }
//   Display(): string {
//     return ` 
//             <img src="${this.image}" class="img-fluid rounded-start d-none d-md-inline" alt="${this.name}">
//             <div class="card-body">
//                 <p class="card-text">${this.GetPosition()}</p>
//             </div>      
//       `;
//   }
//   PrintFooter(): string {
//     return `
//           <div class="card-footer h6 text-center">
//             ${this.GetDate()}
//           </div>
//     `;
//   }
//   CloseDivs(): string {
//     return `
//           </div>
//         </div>    
//     `;
//   }
// }
class Locations {
    constructor(name, address, city, zip_code, image, date) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.zip_code = zip_code;
        this.image = image;
        this.date = date;
        PLACE_ARRAY.push(this);
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
        return `${_getweekday_()}., ${this.date.toLocaleDateString().replaceAll('/', '.')} - ${_gettime_()}`;
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
            <img src="${this.image}" class="img-fluid rounded-start d-none d-md-inline" alt="${this.name}">
            <div class="card-body">
                <p class="card-text">${this.GetPosition()}</p>
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
// cuisine (“Chinese”, “Indian”, “Viennese”, …) 
class Restaurants {
    constructor(name, address, city, zip_code, image, date, cuisine, phone, website) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.zip_code = zip_code;
        this.image = image;
        this.date = date;
        this.cuisine = cuisine;
        this.phone = phone;
        this.website = website;
        PLACE_ARRAY.push(this);
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
        return `${_getweekday_()}., ${this.date.toLocaleDateString().replaceAll('/', '.')} - ${_gettime_()}`;
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
            <img src="${this.image}" class="img-fluid rounded-start d-none d-md-inline" alt="${this.name}">
            <div class="card-body">
                <p class="card-text">${this.GetPosition()}</p>
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
class Events {
    constructor(name, address, city, zip_code, image, date, price) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.zip_code = zip_code;
        this.image = image;
        this.date = date;
        this.price = price;
        PLACE_ARRAY.push(this);
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
        return `${_getweekday_()}., ${this.date.toLocaleDateString().replaceAll('/', '.')} - ${_gettime_()}`;
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
            <img src="${this.image}" class="img-fluid h-100 rounded-start" alt="${this.name}">
            <div class="card-body">
                <p class="card-text">${this.GetPosition()}</p>
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
new Locations("St. Charles Church", "Karlsplatz 1", "Vienna", 1010, "img/St Charles Church.jpg", RandomDate());
new Locations("Zoo Vienna", "Maxingstraße 13b", "Vienna", 1130, "img/Zoo Vienna.jpg", RandomDate());
new Locations("St. Charles Church", "Karlsplatz 1", "Vienna", 1010, "img/St Charles Church.jpg", RandomDate());
new Locations("Zoo Vienna", "Maxingstraße 13b", "Vienna", 1130, "img/Zoo Vienna.jpg", RandomDate());
new Restaurants("Lemon Leaf", "Kettenbrückengasse 19", "Vienna", 1050, "img/Lemon Leaf Thai Restaurant.png", RandomDate(), "Thai", "+43(1)5812308", "www.lemonleaf.at");
new Restaurants("SIXTA", "Schönbrunner Straße 21", "Vienna", 1050, "img/SIXTA Restaurant.png", RandomDate(), "All Cuisines", "+43 1 58 528 56", "www.sixta-restaurant.at");
new Restaurants("Lemon Leaf", "Kettenbrückengasse 19", "Vienna", 1050, "img/Lemon Leaf Thai Restaurant.png", RandomDate(), "Thai", "+43(1)5812308", "www.lemonleaf.at");
new Restaurants("SIXTA", "Schönbrunner Straße 21", "Vienna", 1050, "img/SIXTA Restaurant.png", RandomDate(), "All Cuisines", "+43 1 58 528 56", "www.sixta-restaurant.at");
new Events("Kris Kristofferson", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "Vienna", 1150, "img/Kris Kristofferson.jpg", new Date(2021, 10, 15, 20, 0), 58.5);
new Events("Lenny Kravitz", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "Vienna", 1150, "img/Lenny Kravitz.jpg", new Date(2029, 11, 9, 19, 30), 47.80);
new Events("AniNite 2021", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "Vösendorf", 1150, "img/ANiNite21.jpg", new Date(2021, 7, 27, 10, 0), 20);
new Events("Game City 2022", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "Vienna", 1150, "img/GameCity22.jpg", new Date(2022, 9, 14, 10, 0), 0);
// console.table(PLACE_ARRAY[3]);
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
    blog_string += place.PrintHeader() + place.Display() + place.PrintFooter() + place.CloseDivs();
    // make sure to close the blog grid
    if (i == (PLACE_ARRAY.length - 1))
        last = true;
    if (place_pos.constructor.name != place.constructor.name || last)
        blog_string += "</div>"; // END BLOG GRID
}
blog_section_element.innerHTML = blog_string;
// interface Vehicles {
//   name: string;
//   model: string;
//   color: string;
//   fuel: string;
//   weight: number;
//   year: number;
//   kilometer: number;
//   seats: number;
//   image: string;
//   CalculatePrice: Function;
//   ToString: Function;
//   PrintName: Function;
//   Display: Function;
//   PrintPrice: Function;
//   PrintButton: Function;
//   PrintFooter: Function;
//   CloseDivs: Function;
// }
// weight in kg
// class Cars implements Vehicles {
//   public price: number;
//   constructor(public name: string, public model: string, public color: string, public fuel: string, public weight: number, public year: number, public kilometer: number, public seats: number, public image: string) {
//     this.price = this.CalculatePrice();
//   }
//   CalculatePrice(): number {
//     // personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price
//     let fuel_mul: number = (this.fuel == "Diesel") ? (2*Math.random() + 1) : (Math.random() + 1);
//     let model_val: number = this.model.charCodeAt(0);
//     let price = this.kilometer / this.seats * fuel_mul - model_val - this.year
//     return Math.round(price);
//   }
//   ToString(): string {
//     return `This is a ${this.name} ${this.model} with the color ${this.color} and ${this.fuel} as fuel type &amp; ${this.kilometer}km.`;
//   }
//   PrintName(): string {
//     return `<p class="card-text">${this.ToString()}</p>`;
//   }
//   Display(): string {
//     return `
//     <div class="card h-100" style="width: 18rem;">
//       <img src="${this.image}" class="img-fluid rounded" alt="${this.name}">
//       <div class="card-body m-2">
//         <h3 class="card-title">${this.name}</h3>`;
//   }
//   PrintPrice(): string {
//     const price: number = this.price;
//     return `<strong>${price}&euro;</strong>`;
//   }
//   PrintButton(): string {
//     return `
//     <p class="card-text own-show-price"></p>
//     <div class="btn btn-primary p-2 own-get-price m-2">Price</div>
//     `;
//   }
//   PrintFooter(): string {
//     return `
//     <div class="card-footer h6 p-2 d-flex justify-content-between flew-row">
//       <div><b>Year:</b> <i>${this.year}</i></div>
//       <div><b>Weight:</b> <i>${this.weight}kg</i></div>
//     </div>`;
//   }
//   CloseDivs(): string {
//     return `
//       </div>
//     </div>
//     `;
//   }
// }
// class Motorbikes extends Cars {
//   constructor(name: string, model: string, color: string, fuel: string, weight: number, year: number, kilometer: number, seats: number, image: string) {
//     super(name, model, color, fuel, weight, year, kilometer, seats, image);
//   }
// }
// class Trucks extends Cars {
//   constructor(name: string, model: string, color: string, fuel: string, weight: number, year: number, kilometer: number, seats: number, image: string) {
//     super(name, model, color, fuel, weight, year, kilometer, seats, image);
//   }
// }
// let fiat: Cars = new Cars("Fiat", "500", "white", "Diesel", 850, 2000, 10000, 5, "https://www.w3schools.com/js/objectExplained.gif");
// let renault: Cars = new Cars("Renault", "Initiale", "red", "Gasoline", 900, 2004, 20000, 5, "https://blog.auto-selection.com/wp-content/uploads/2013/09/renault-initiale-paris-concept-2013-10987127uemqk.jpg");
// let citroen: Cars = new Cars("Citroen", "III", "green", "Diesel", 1200, 2009, 15000, 5, "https://carwiki.de/wp-content/uploads/2019/11/Citroen-Berlingo-III.jpg");
// let livewire: Motorbikes = new Motorbikes("Harley-Davidson", "LiveWire", "black", "Diesel", 200, 2020, 3000, 2, "https://moto-station.com/wp-content/uploads/2019/01/08/livewire-002-2019-revue.jpg");
// let honda: Motorbikes = new Motorbikes("Honda", "Cbr", "red", "Gasoline", 150, 2017, 8000, 2, "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/CBR1000rrRepsol.jpg/1200px-CBR1000rrRepsol.jpg");
// let yamacha: Motorbikes = new Motorbikes("Yamacha", "R1", "silver", "Diesel", 170, 2010, 18000, 2, "https://www.asphaltandrubber.com/wp-content/uploads/2014/11/2015-yamaha-r1.jpg");
// let ashok: Trucks = new Trucks("Ashok Leyland", "U-Truck", "white", "Diesel", 7000, 2010, 14000, 6, "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Ashok_Leyland_U_truck.jpg/620px-Ashok_Leyland_U_truck.jpg");
// let askam: Trucks = new Trucks("Askam", "AS 950", "white", "Gasoline", 10000, 2000, 21000, 6, "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/De_Soto_AS950_turbo_intercooler.jpg/800px-De_Soto_AS950_turbo_intercooler.jpg");
// let bharat: Trucks = new Trucks("BharatBenz", "914", "red", "Gasoline", 5000, 2004, 17000, 6, "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/De_Soto_AS950_turbo_intercooler.jpg/800px-De_Soto_AS950_turbo_intercooler.jpg");
// let vehicle_array: Array<Vehicles> = [fiat, renault, citroen, livewire, honda, yamacha, ashok, askam, bharat];
// var results_div = document.getElementById("results");
// results_div.innerHTML += "<div class=\"row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 g-xxl-5 px-2 px-md-4 pb-4 mx-auto\">"; // START GRID
// // Build Vehicle Cards
// let previews_type = '';
// for (let vehicle of vehicle_array) {
//   if (previews_type != vehicle.constructor.name) results_div.innerHTML += `<h2 class="m0 p-0 mt-5">${vehicle.constructor.name}</h2>`;
//   previews_type = vehicle.constructor.name;
//   results_div.innerHTML += "<div class=\"col col-md-6 col-lg-3\">";
//   results_div.innerHTML += vehicle.Display() + vehicle.PrintName() + vehicle.PrintButton() + vehicle.PrintFooter() + vehicle.CloseDivs();
//   results_div.innerHTML += "</div>";
// }
// var price_buttons: HTMLCollection = document.getElementsByClassName("own-get-price");
// for (let i = 0; i < price_buttons.length; i++) {
//   price_buttons[i].addEventListener("click", function () {
//     document.getElementsByClassName("own-show-price")[i].innerHTML = vehicle_array[i].PrintPrice();
//   })
// }
// results_div.innerHTML += "</div>"; // END GRID
//# sourceMappingURL=script.js.map