"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printId(id) {
    console.log(`ID: ${id}`);
}
console.log("Union in types:-");
printId(101);
printId("aakashmane");
function printLead(teamLead) {
    console.log(`Name: ${teamLead.name}\nStart Date: ${teamLead.startDate}\nDepartment: ${teamLead.department}`);
}
const teamLead = {
    name: "Aakash",
    startDate: new Date(),
    department: "Backend Development",
};
console.log("Intersection in types:-");
printLead(teamLead);
//# sourceMappingURL=types.js.map