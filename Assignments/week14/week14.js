
//Problem two
let companyInfo = {
  "companyName": "Tech Stars",
  "website": "www.techstars.site",
  //Problem One
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
console.log("Problem One: First Employee List ",companyInfo.employees)
console.log("Problem Two: company JSON", companyInfo)
//Problem Three
function addEmployee(obj, employeeName, employeeDepartment, employeeDesignation, employeeSalary, employeeRaise) {
  let employee = {
    "name": employeeName,
    "department": employeeDepartment,
    "designation": employeeDesignation,
    "salary": employeeSalary,
    "raise_eligible": employeeRaise,
  };

  obj['employees'].push(employee); // the push() method adds a value to an object/array.

}
addEmployee(companyInfo, "Anna", "Tech", "Executive", 25600, false);

console.log("Problem Three: New Employee List ",companyInfo.employees)
//Problem Four
let total = 0;
companyInfo.employees.forEach(item => {
  total = total + item.salary;
})

console.log("Problem Four: Total Salaries: ",total)
//Problem Five
for (var i = 0; i < companyInfo.employees.length; i++) {
  if (companyInfo.employees[i].raise_eligible == true) {
    let currSalary = companyInfo.employees[i].salary;
    let newSalary = (currSalary * 0.10)+currSalary;
    companyInfo.employees[i].salary = newSalary;
    companyInfo.employees[i].raise_eligible = false;
    console.log("Problem Five: Salary Update ",companyInfo.employees[i].salary);
  }
}
//Problem Six
for (var i = 0; i < companyInfo.employees.length; i++){
  companyInfo['employees'][i]['wfh'] = false;
  if (companyInfo.employees[i].name == 'Anna' || companyInfo.employees[i].name == 'Sam'){
    companyInfo['employees'][i]['wfh'] = true;
  }
  console.log("Problem Six: ",companyInfo.employees[i].name,companyInfo['employees'][i]['wfh'])
}

//not uploading properly
