//  object literal for creating object
 
//  let car={
//      name:'Baleno',
//      topSpeed:220,
//      run: function () {
//          console.log('car is running');
         
         
//      }
//     //  console.log('car')
     
//  }

//  creating a constructer for car

function generalCar( givenName,givenTopspeed) {
    this.name=givenName;
    this.topSpeed=givenTopspeed;
    this.run= function() {
        console.log(`${this.name} is running`);
    }
    this.analyze=function () {
        console.log(`this car is  slower by${200-this.topSpeed} km/h of merecdes`);
    }
        
        
}
car1= new generalCar('Nissan',180);
car2= new generalCar('bucati',550);

    


