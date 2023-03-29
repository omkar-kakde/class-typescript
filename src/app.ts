
let cl = console.log;

// singletone | private constructor 
// A class which can create only one instance/ object





abstract class Department {

      empArray : string[] = [];
      static piscalYear : string = "2022-23 Q4"
      constructor(public dname:string, private readonly did:string){
       
      }

    //   describe(){
    //     cl(`this is Department ${this.dname}, with id ${this.did}`)
    //   }

     abstract  describe() : void;

      appEmpl(emp :string){
        this.empArray.push(emp)
      }
       static  createEmp(emp: string){
         cl({
            empname :emp
         })
      }
}

class Accounting extends Department{
    static instance :  Accounting;
    describe(): void {
        cl(`this is  accounting`)
    }
    private constructor(dname : string,id:string, private admin: string[]){
        super(dname, id)
    }

    static getInstance(dname: string){
        if(Accounting.instance){
            return this.instance
        } else{
            this.instance = new Accounting("acconting1","D-123", ["Salray slip", "form-16"]);
        return this.instance;
        }
        
    }
    addreport(admin:string){
         
        this.admin.push(admin)
    }
    
};

// let accounting1 = new Accounting("acconting1","D-123", ["Salray slip", "form-16"]);
// let accounting2 = new Accounting("acconting2","D-123", ["Salray slip", "form-16"]);

cl(Accounting.instance);
let acc1 =  Accounting.getInstance("accounting1")
cl(Accounting.instance)

let acc2=  Accounting.getInstance("accounting2")
cl(acc2)




