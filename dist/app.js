"use strict";
let cl = console.log;
// singletone | private constructor 
// A class which can create only one instance/ object
class Department {
    constructor(dname, did) {
        this.dname = dname;
        this.did = did;
        this.empArray = [];
    }
    appEmpl(emp) {
        this.empArray.push(emp);
    }
    static createEmp(emp) {
        cl({
            empname: emp
        });
    }
}
Department.piscalYear = "2022-23 Q4";
class Accounting extends Department {
    describe() {
        cl(`this is  accounting`);
    }
    constructor(dname, id, admin) {
        super(dname, id);
        this.admin = admin;
    }
    static getInstance(dname) {
        if (Accounting.instance) {
            return this.instance;
        }
        else {
            this.instance = new Accounting("acconting1", "D-123", ["Salray slip", "form-16"]);
            return this.instance;
        }
    }
    addreport(admin) {
        this.admin.push(admin);
    }
}
;
// let accounting1 = new Accounting("acconting1","D-123", ["Salray slip", "form-16"]);
// let accounting2 = new Accounting("acconting2","D-123", ["Salray slip", "form-16"]);
cl(Accounting.instance);
let acc1 = Accounting.getInstance("accounting1");
cl(Accounting.instance);
let acc2 = Accounting.getInstance("accounting2");
cl(acc2);
