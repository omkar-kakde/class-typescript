"use strict";
let cl = console.log;
/// Access modifier >> public, private , static , readonly
class Department {
    constructor(dname, did) {
        this.dname = dname;
        this.did = did;
        this.empArray = [];
    }
    describe() {
        cl(`this is Department ${this.dname}, with id ${this.did}`);
    }
    appEmpl(emp) {
        this.empArray.push(emp);
    }
}
class Accounting extends Department {
    constructor(id, admin) {
        super("accounitng", id);
        this.admin = admin;
    }
    addreport(admin) {
        this.admin.push(admin);
    }
}
let accounting = new Accounting("D-123", ["Salray slip", "form-16"]);
cl(accounting);
accounting.addreport("TDS");
