
// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    },

    set lang(lang) {
        this.language = lang;
      }
  };
  
  // Display data from the object using a getter:
  document.getElementById("demo").innerHTML = person.lang;
  
  // Set an object property using a setter:
  person.lang = "en";
  
  // Display data from the object:
  document.getElementById("demo").innerHTML = person.language;
  


