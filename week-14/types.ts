type StringOrId = string | number;

function printId(id: StringOrId) {
  console.log(`ID: ${id}`);
}

console.log("Union in types:-");
printId(101);
printId("aakashmane");

type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

function printLead(teamLead: TeamLead) {
  console.log(
    `Name: ${teamLead.name}\nStart Date: ${teamLead.startDate}\nDepartment: ${teamLead.department}`,
  );
}

const teamLead: TeamLead = {
  name: "Aakash",
  startDate: new Date(),
  department: "Backend Development",
};

console.log("Intersection in types:-");
printLead(teamLead);
