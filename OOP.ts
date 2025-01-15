// Programming -> 1. Procedural Programming 2. OOP

//Procedural Programming
function fullName(firstName:any, lastName:any) {
    return `${firstName} ${lastName}`
}

//Object Oriented Programming

//blueprint of creating object
class house {
    private id:number = 0;
    public name:string;

    constructor(name:string){
        this.name = name;
        this.id  += 1;
    }

    printId = () => {
        console.log(this.id);
    }
}

const house1 = new house("Shashi")
house1.printId()
const house2 = new house("Ravi")
house2.printId()