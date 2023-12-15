class Organizer {
	id:number;
  name: string;
  
  constructor(id:number, name:string){
  	this.id = id;
  	this.name = name;
  }
  display(){
   console.log("ORGANIZER: "  +this.id + " " + this.name);
  }
}

class Eventt {
	id: number;
  name: string;
  description: string;
  starttime: string;
  endtime: string;
	
  constructor(id:number, name:string, description:string, starttime:string, endtime:string){
  	this.id = id;
  	this.name = name;
    this.description = description;
    this.starttime = starttime;
    this.endtime = endtime;
  }
  display(){
   console.log("EVENT: "  +this.id + " " + this.name + " " + this.description + " " + this.starttime + " " + this.endtime);
  }
}

class Venue {
	id:number;
  name:string;
  description: string;
  address: string;
  
  constructor(id:number, name:string, description:string,address:string){
  	this.id = id;
  	this.name = name;
    this.description = description;
    this.address = address;
  }
  display(){
   console.log("VENUE: "  +this.id + " " + this.name + " " + this.description + " " + this.address);
  }
}

var organizer:any = new Organizer(100,"Farhan");
organizer.display();

var eventObj:any = new Eventt(2000,"Concert","Music", "10am", "7pm");
eventObj.display();

var venueObj:any = new Venue(1,"CityMall","Shopping","Mumbai");
venueObj.display();