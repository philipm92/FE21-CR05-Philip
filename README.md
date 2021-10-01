# FE21-CR05-Philip
Requirements:
You enjoy travelling to different places, visiting events and eating good food in restaurants. You want to create a TypeScript-based system that presents all of your experiences in a web-page.

What is common to a place, event and restaurant is a location. Since you know about classes, you decided that your base class named Locations should hold information about city, ZIP-code, address (a single line like “Kettenbrueckengasse 23” would be enough), and a teaser image. That base class has the method display() which displays the object’s properties on the screen as HTML.


A restaurant must also display the telephone number, type of cuisine (“Chinese”, “Indian”, “Viennese”, …)  and a web address. Restaurant objects inherit the basic properties (like ZIP-code) from the Location class. The display function must, of course, be updated.


Same goes for Events - they have their additional properties like EventDate (“12.10.2021”) and EventTime (“17:00”) and ticket price (in EUR) that also need to be displayed in addition to the base class Locations properties.   


For the regular points of this CodeReview, you need to create a structure of TypeScript/JavaScript classes, their respective constructors and their display() function that will display the relevant data of places, events and restaurants that you have visited.

- Create the class Locations based on the specifications above.
- Create at least 2 Locations objects by invoking a constructor call and save them in an array (class constructors usage is mandatory, do NOT use JSON and parsing).
- Add a display() function to the Locations class that can display the Locations’ object as an HTML string. Use Bootstrap to solve design and responsiveness issues in an easy manner.
- Use looping functionality to display the object saved in the array on the screen.
- Create the classes Restaurant and Event with their respective properties. Invoke constructors, and save the resulting objects in an array(either in a general array containing all objects or in separate arrays containing specific class objects). Make sure that ALL info is displayed considering they are objects with different properties. 
- Create a display() function for the classes Restaurant and Event respectively. display() is capable of displaying relevant information of its class as HTML. Again, use Bootstrap or CSS to solve design and responsiveness.
- Assure that the responsiveness of the page is as follows: for small screens, you see the teaser of one object (without the image) in a row. On medium screens, you see two teasers in a row (with image). On large screens, you see four objects in a row (with image).


Bonus Points:
- You have decided to add an additional date/time for every location that you visited. You add that information “Created: 24.03.2021 12:45” to respective teaser displays.
- You want to use the newly added entry to add two additional pages to your system index-asc.html  and index-desc.html  Those pages are sorting the array of locations (places, events, restaurant) ascending/descending based on the “Created” date/time property. (If you feel capable of rendering the ascending and descending in one HTML page instead of creating extra index-asc.html/index-desc.html pages, then you are welcome to keep it on one page.)
