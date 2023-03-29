"use strict";
// let cl = console.log;
// // static >> a member those are only availble on classname 
// // getters and setters
// // 
// class Department {
//       empArray : string[] = [];
//       static piscalYear : string = "2022-23 Q4"
//       constructor(public dname:string, private readonly did:string){
//       }
//       describe(){
//         cl(`this is Department ${this.dname}, with id ${this.did}`)
//       }
//       appEmpl(emp :string){
//         this.empArray.push(emp)
//       }
//      static  createEmp(emp: string){
//          cl({
//             empname :emp
//          })
//       }
// }
// class Accounting extends Department{
//     private lastreport : string;
//     constructor(id:string, private admin: string[]){
//         super("accounitng", id)
//         this.lastreport = admin[admin.length - 1]
//     }
//     addreport(admin:string){
//         this.admin.push(admin)
//     }
//     get acceslastreport(){
//         return this.lastreport
//     }
//     set acceslastreport(val :string){
//           this.lastreport = val;
//           this.admin[this.admin.length - 1] = val;
//     }
// };
// let accounting = new Accounting("D-123", ["Salray slip", "form-16"])
// cl(accounting);
// cl(accounting.acceslastreport)
// accounting.acceslastreport =  "TDS"
// Department.createEmp("james")
// cl(Department.piscalYear)
