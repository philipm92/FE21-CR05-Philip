//@ts-check


// Create Interface for all classes
/* Note to self: Do Interface for base to avoid multiple entries when pushing constructor to array */
interface PlaceInterface {
  name: string;
  address: string;
  city: string;
  zip_code: number;
  image: string;
  date: Date;
  _placeorder_: number;
  _cardorder_: number;
  GetPosition: Function;
  GetBlogDate: Function;
  PrintHeader: Function;
  Display: Function; // old PrintCard
  CloseCBody: Function;
  PrintFooter: Function;
  CloseDivs: Function;
  _gettimestring_: Function;
  _addleadingzero_: Function;
}

var PLACE_ARRAY: Array<PlaceInterface> = new Array(); // global array to add in all classes/blogs/places

// Create Super/Parent Class for all other classes that implements "Places" for less code
class Place implements PlaceInterface {
  constructor(public name: string, public address: string, public city: string, public zip_code: number, public image: string, public date: Date, public _placeorder_: number, public _cardorder_: number) {}
  
  GetPosition(): string {
    return `${this.address},<br /> ${this.zip_code} ${this.city}`;
  }

  _addleadingzero_(str: string): string {
    return (str.length == 1) ? ('0'+str) : str;
  }
  _gettimestring_ (date: Date): string {
    let h: string = this._addleadingzero_(date.getHours().toString());
    let m: string = this._addleadingzero_(date.getMinutes().toString());
    let time: string = `${h}:${m}`;
    return time;
  }

  _createdatestring_(date: Date): string {
    let day: string = this._addleadingzero_(date.getDate().toString()); //why the F. is this for the days of the months and not getDay or getWeekDay?
    let month: string = this._addleadingzero_((date.getMonth() + 1).toString()); // add one because getMonth starts with 0 as the first month
    let year: string = date.getFullYear().toString();
    return `${day}.${month}.${year}`;    
  }

  GetBlogDate(): string {
    // it looks like replaceAll isn't recognized in TS sometimes, that's why I make another version down below
    // return `${_getweekday_()}., ${this.date.toLocaleDateString().replaceAll('/', '.')} - ${_gettimestring_()}`;
    let date_string = this._createdatestring_(this.date);
    return `${date_string} - ${this._gettimestring_(this.date)}`;
  }

  PrintHeader(): string {
    return `
        <div class="col col-md-6 col-lg-3">
          <div class="card h-100">
            <div class="card-header h5 text-center">${this.name}</div>   
    `;
  }

  Display(): string {
    return ` 
            <img src="${this.image}" class="img-fluid d-none d-md-inline" alt="${this.name}">
            <div class="card-body">
                <p class="card-text text-center">${this.GetPosition()}</p>
                 
      `;
  }

  CloseCBody(): string {
    return `
            </div>
    `;
  }

  PrintFooter(): string {
    return `
          <div class="card-footer h6 text-center text-muted">
            <em><small>Created: ${this.GetBlogDate()}</small></em>
          </div>
    `;
  }

  CloseDivs(): string {
    return `
          </div>
        </div>    
    `;
  }
}

///////////// Define Classes //////////////////////////////////////
//*********** CREATE CLASS "LOCATIONS" WITH FUNCTIONS ***********/
class Locations extends Place  {
  constructor(name: string, address: string, city: string, zip_code: number, image: string, date: Date, _placeorder_: number, _cardorder_: number) {
    super(name, address, city, zip_code, image, date, _placeorder_, _cardorder_);
    PLACE_ARRAY.push(this);
  }
}


//*********** CREATE CLASS "RESTAURANTS" WITH FUNCTIONS ***********/
// cuisine (“Chinese”, “Indian”, “Viennese”, …) 
class Restaurants extends Place  {
  constructor(name: string, address: string, city: string, zip_code: number, image: string, date: Date, public cuisine: string, public phone: string, public website: string, _placeorder_: number, _cardorder_: number) {
    super(name, address, city, zip_code, image, date, _placeorder_, _cardorder_);
    PLACE_ARRAY.push(this);
  }

  Display(): string {
    // replaceAll might not work everywhere, at least some TS error gets raised, though could be fixed w/ "ESNext.String" inside config
    // let a_phone = this.phone.replaceAll(' ','').replaceAll('-','').replaceAll('(', '').replace(')', '');
    let a_phone = this.phone.split(' ').join('').split('-').join('').split('(').join('').split(')').join(''); // would be less code with regexp
    return `${super.Display()}
    <p class="card-text text-center">${this.cuisine} restaurant</p>
    <p class="card-text text-center"><a href="${this.website}" target="_blank">${this.website}</a></p>
    <p class="card-text text-center"><strong>Contact us:</strong><br /><a href="tel:${a_phone}">${this.phone}</a></p>
    `;
  }
}


//*********** CREATE CLASS "EVENTS" WITH FUNCTIONS ***********/
class Events extends Place  { // apparently the class Event exists within TS, therefore I renamed it
  constructor(name: string, address: string, city: string, zip_code: number, image: string, date: Date, public price: number, public event_date: Date, _placeorder_: number, _cardorder_: number) {
    super(name, address, city, zip_code, image, date, _placeorder_, _cardorder_);
    PLACE_ARRAY.push(this);
  }

  private _getweekday_(day: number): string {
    let weekdays_array: Array<string> = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekdays_array[day];
  }

  Display(): string {
    return `${super.Display()} 
    <p class="card-text text-center">${this.GetEventDate()}</p>
    <p class="card-text text-center"><strong>Price: </strong>${this.price}&euro;</p>`;
  }

  GetEventDate(): string {
    // return `${this._getweekday_(this.event_date.getDay())}., ${this.event_date.toLocaleDateString().replaceAll('/', '.')} - ${super._gettimestring_(this.event_date)}`;
    let date_string: string = super._createdatestring_(this.event_date);
    let day: number = this.event_date.getDay();
    return `${this._getweekday_(day)}., ${date_string} - ${super._gettimestring_(this.event_date)}`;
  }

}



// Generate random integer between lo..hi
function RandomInt(lo: number, hi: number): number {
  // return Math.round(lo + Math.random() * (hi - lo)); // no real int in JS, except parseInt for strings
  return parseInt((lo + Math.random() * (hi - lo)).toFixed());
}
// console.log(RandomInt(0, 6), typeof (RandomInt(0,6)));

// Generate random Date
// new Date(year, month, day, hours, minutes, seconds)
function RandomDate(): Date {
  let year = RandomInt(2019, 2021);
  let month = RandomInt(0, 11);
  let day = (month == 1) ? RandomInt(1,28) : RandomInt(1, 31); // check for Feb.
  let hours = RandomInt(0, 23);
  let minutes = RandomInt(0, 59);
  return new Date(year, month, day, hours, minutes);
}

// Fill Places, Restaurants and Events Classes with data and add it to the global array
new Locations("St. Charles Church", "Karlsplatz 1", "Vienna", 1010, "img/St Charles Church_new.jpg", RandomDate(), 0, 0);
new Locations("Zoo Vienna", "Maxingstraße 13b", "Vienna", 1130, "img/Zoo Vienna_new.jpg", RandomDate(), 0, 1);
new Locations("Spielraum", "Otto-Bauer-Gasse 17", "Vienna", 1060, "img/Spielraum_new.jpg", RandomDate(), 0, 2);
new Locations("Area52", "Franklinstrasse 20/9/R1", "Vienna", 1210, "img/Area52_new.jpg", RandomDate(), 0, 3);


new Restaurants("Lemon Leaf", "Kettenbrückengasse 19", "Vienna", 1050, "img/Lemon Leaf Thai Restaurant_new.png", RandomDate(), "Thai", "+43(1)5812308", "www.lemonleaf.at", 1, 0);
new Restaurants("SIXTA", "Schönbrunner Straße 21", "Vienna", 1050, "img/SIXTA Restaurant_new.png", RandomDate(), "All Cuisines", "+43 1 58 528 56", "www.sixta-restaurant.at", 1, 1);
new Restaurants("Chinese Restaurant", "Erzherzog-Karl-Straße 169", "Vienna", 1220, "img/Wokhouse_new.jpg", RandomDate(), "Chinese", "+43 1 285 73 11", "www.wokhouse.at", 1, 2);
new Restaurants("Kyoto Running Sushi", "SCS-Straße B4", "Vösendorf", 2334, "img/Kyoto_Sushi_new.png", RandomDate(), "Japanese", "+43 2236 614 13", "www.scs.at/restaurant/kyoto-running-sushi", 1, 3);


new Events("Kris Kristofferson", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "Vienna", 1150, "img/Kris Kristofferson_new.jpg", new Date(), 58.5, new Date(2021, 10, 15, 20, 0), 2, 0);
new Events("Lenny Kravitz", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "Vienna", 1150, "img/Lenny Kravitz_new.jpg", RandomDate(), 47.80, new Date(2029, 11, 9, 19, 30), 2, 1);
new Events("AniNite 2021", "Parkallee 2", "Vösendorf", 2334, "img/ANiNite21_new.jpg", RandomDate(), 20, new Date(2021, 7, 27, 10, 0), 2, 2);
new Events("Game City 2022", "Rathausplatz 1", "Vienna", 1010, "img/GameCity22_new.jpg", RandomDate(), 0, new Date(2022, 9, 14, 9, 0), 2, 3);


/* get section element to put blog into, HTMLCollection won't work,
that's why it's any type. Update: HTMLElement seems to work */
var blog_section_element: HTMLElement = document.getElementById("blog-overview");

const CreateBlogSection = (): void => {
  var blog_string: string = '';
  blog_section_element.innerHTML = ''; // reset section just in case!
  var first: boolean = true; // make so to always start blog grid on the first card
  var last: boolean = false; // make so to always close blog grid on the last card
  var animation_delay: number = 3; // animation delay in seconds
  for (let i: number = 0; i < PLACE_ARRAY.length; i++) {
    let place: PlaceInterface = PLACE_ARRAY[i]; // current place
    let place_pre: PlaceInterface = PLACE_ARRAY[Math.max(0, i-1)]; // previews place
    let place_pos: PlaceInterface = PLACE_ARRAY[Math.min(i+1, PLACE_ARRAY.length-1)]; // posterior place
  
    // make sure to only create the place headline + blog grid once per type of place
    if (place_pre.constructor.name != place.constructor.name || first) {
      blog_string += `<h2 class="text-center mt-3 mt-md-4 mb-2 mb-mb-3 animate__animated animate__jackInTheBox animate__delay-${animation_delay}s">${place.constructor.name}</h2>`; // Create sub-headline
      blog_string += "<div class=\"row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mx-1 mx-lg-4 mb-4\">"; // START BLOG GRID
      animation_delay++;
      if (animation_delay > 5) animation_delay = 5; // clamp since there is no class above 5s for the delay
      first = false;
    }
    
    // Build cards
    blog_string += place.PrintHeader() + place.Display() + place.CloseCBody() + place.PrintFooter() + place.CloseDivs();
  
    // make sure to close the blog grid
    if (i == (PLACE_ARRAY.length - 1)) last = true;
    if (place_pos.constructor.name != place.constructor.name || last) blog_string += "</div>"; // END BLOG GRID
  }
  blog_section_element.innerHTML = blog_string;

}






// DO SORTING STUFF, WILL ONLY BE RELEVANT FOR "index-asc-desc.htm" THOUGH!

// console.table(PLACE_ARRAY);
if (blog_section_element.innerHTML.length == 0) CreateBlogSection()

// Create Sorting section
document.getElementById("sortarea").innerHTML = `
  <div class="btn d-flex flex-row" id="ownSorting">
    <div id="SortingIcon">
      <svg class="own-svg-size" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
        <path d="m0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"/>
      </svg>
    </div>
    <h3>Sorting</h3> 
  </div>
`;


// Sorting function recycled & modified!!!
var ICLICK: number = 0;
function SortBlog(): void {
  let icon_id_element: HTMLElement = document.getElementById("SortingIcon");
  console.log(ICLICK, ICLICK % 3);
  switch (ICLICK % 3) {

    case 0: // high to low
      PLACE_ARRAY.sort((a: PlaceInterface, b: PlaceInterface): number => {
          // add .valueOf() just in case to avoid "righ-/left-hand side of an..."-error thrown by TS, but works anyways. Same with replaceAll
          return a._placeorder_ - b._placeorder_ || b.date.valueOf() - a.date.valueOf();
          // return b.constructor.name.localeCompare(a.constructor.name) || a.date.valueOf() - b.date.valueOf();
      });
      // set up-arrow icon
      icon_id_element.innerHTML = `<svg class="own-svg-size" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
      <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
      </svg>`;
      ICLICK++;
      break;
    
    case 1: // low to high
      PLACE_ARRAY.sort((a: PlaceInterface, b: PlaceInterface): number => {
        // add .valueOf() just in case to avoid "righ-/left-hand side of an..."-error thrown by TS, but works anyways. Same with replaceAll
        return a._placeorder_ - b._placeorder_ || a.date.valueOf() - b.date.valueOf();
        // return b.constructor.name.localeCompare(a.constructor.name) || a.date.valueOf() - b.date.valueOf();
      });
      // set down-arrow icon
      icon_id_element.innerHTML = `<svg class="own-svg-size" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
      </svg>`;
      ICLICK++;
      break;
    
    case 2: // neutral order
      PLACE_ARRAY.sort((a: PlaceInterface, b: PlaceInterface): number => {
        return a._placeorder_ - b._placeorder_ || a._cardorder_ - b._cardorder_;
      });
      // set neutral icon
      icon_id_element.innerHTML = `<svg class="own-svg-size" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
      <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"/>
      </svg>`;
      ICLICK++;
      break;
    
    default: //error handling reset everything, pretty much same as case 3/neutral
      PLACE_ARRAY.sort((a: PlaceInterface, b: PlaceInterface): number => {
        return a._placeorder_ - b._placeorder_ || a._cardorder_ - b._cardorder_;
      });
      // set neutral icon
      icon_id_element.innerHTML = `<svg class="own-svg-size" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
      <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"/>
      </svg>`;
      console.log("Something is wrong here. Hit default!");
      ICLICK = 0;
  }

  
  // build blog element again
  CreateBlogSection();
}

document.getElementById("sortarea").addEventListener("click", function () {
  SortBlog();
});
// var price_buttons: HTMLCollection = document.getElementsByClassName("own-get-price");
// for (let i = 0; i < price_buttons.length; i++) {
  
//   price_buttons[i].addEventListener("click", function () {
//     document.getElementsByClassName("own-show-price")[i].innerHTML = vehicle_array[i].PrintPrice();
//   })
// }

// results_div.innerHTML += "</div>"; // END GRID