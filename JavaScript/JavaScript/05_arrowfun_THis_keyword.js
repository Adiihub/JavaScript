function sayhi(){
    // this - window object
}

let nepal  = {
    // add property
    mountains : ['Aver est', 'Annapurna', 'Fish tail'],
    // add method
    printwithDash : function(){
        setTimeout(() => console.log(this.mountains.join("-")) ,3000)
    }
}

// alert(nepal.mountains);
nepal.printwithDash();