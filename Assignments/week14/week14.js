let companyInfo = {
  "companyName": "Tech Stars",
  "website": "www.techstars.site",
  "employees": [
    {
      "name": "Sam",
      "department": "Tech",
      "designation": "Manager",
      "salary": 40000,
      "raise_eligible": true
    },
    {
      "name": "Mary",
      "department": "Finance",
      "designation": "Trainee",
      "salary": 18500,
      "raise_eligible": true
    },
    {
      "name": "Bill",
      "department": "HR",
      "designation": "Executive",
      "salary": 21200,
      "raise_eligible": false
    }
  ]
}

function addEmployee(obj, employeeName, employeeDepartment, employeeDesignation, employeeSalary, employeeRaise) {
  let employee = {
    "name": employeeName,
    "department": employeeDepartment,
    "designation": employeeDesignation,
    "salary": employeeSalary,
    "raise_eligible": employeeRaise
  };

  obj['employees'].push(employee); // the push() method adds a value to an object/array.

}
addEmployee(companyInfo, "Anne", "Tech", "Executive", 25600, false);

console.log(companyInfo.employees)

let total = 0;
companyInfo.employees.forEach(item => {
  total = total + item.salary;
})

console.log("Total: ",total)

for (var i = 0; i < companyInfo.employees.length; i++) {
  if (companyInfo.employees[i].raise_elegible == true) {
    let currSalary = companyInfo.employees[i].salary;
    let newSalary = (currSalary * 0.10)+currSalary;
    companyInfo.employees[i].salary = newSalary;
    companyInfo.employees[i].raise_elegible = false;
    console.log(companyInfo.employees[i].salary)
  }
}
