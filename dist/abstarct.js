"use strict";
// let cl = console.log;
// //abstac class
// abstract class Department {
//       empArray : string[] = [];
//       static piscalYear : string = "2022-23 Q4"
//       constructor(public dname:string, private readonly did:string){
//       }
//     //   describe(){
//     //     cl(`this is Department ${this.dname}, with id ${this.did}`)
//     //   }
//      abstract  describe() : void;
//       appEmpl(emp :string){
//         this.empArray.push(emp)
//       }
//        static  createEmp(emp: string){
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
//      describe(): void {
//           cl(`this is department `)
//      }
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
// accounting.describe();
// cl(Department.piscalYear)
// class ITDepartment extends Department {
//     describe(): void {
//     }
// }
