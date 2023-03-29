// let cl = console.log;
// /// Access modifier >> public, private , static , readonly

// // overriding properties/ method

// class Department {

//       empArray : string[] = [];
//       constructor(public dname:string, private readonly did:string){
       
//       }

//       describe(){
//         cl(`this is Department ${this.dname}, with id ${this.did}`)
//       }

//       appEmpl(emp :string){
       
//         this.empArray.push(emp)
//       }

// }

// class Accounting extends Department{

//     constructor(id:string, private admin: string[]){
//         super("accounitng", id)
//     }

//     addreport(admin:string){
         
//         this.admin.push(admin)
//     }

//     appEmpl(emp: string): void {
//         if(emp === "jhon"){
//           return 
//         }else{
//           this.empArray.push(emp)
//         }
//     }
// }

// let accounting = new Accounting("D-123", ["Salray slip", "form-16"])
// cl(accounting);

// accounting.addreport("TDS")





// class itDepartment extends Department{

// }

// let itdepartment = new itDepartment("IT", "D-423")


// itdepartment.appEmpl("may");
// cl(itdepartment)

// itdepartment.describe();









