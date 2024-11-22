/** 
function holiday(destination, days){
    this.destination = destination
    this.days = days
}

holiday.prototype.info = function() {  // methods
    console.log(this.destination + " | " + this.days + " days")
}

var nepal = new holiday("Nepal", 30)
console.log(nepal.info());
*/

// Super Class
class Holiday {
    constructor(destination, days){
        this.destination = destination;
        this.days = days;
    }

    info(){  // methods
        console.log(`${this.destination} will take ${this.days} days.`)
    }
}
// console.log(Holiday.prototype);
// const trip = new Holiday('Nepal', 4);
// console.log(trip.info());


// Sub Class -- inherritance
class Expedition extends Holiday {
    constructor(destination, days, gear){
        super(destination, days);
        this.gear = gear;
    }

    info() {
        super.info(); 
        // overwrite here 
        console.log(`Bring your ${this.gear.join(" and your")} `);
    }
}
const tripwithgear = new Expedition('Everst', 30, ["sunglasses, flags, camera"]);
tripwithgear.info();