// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "10 Broadway"
}

function updateEmployeeWithKeyAndValue(){
    return {...employee,
    [streetAddress]: "11 Broadway"}
    
}
const employee2 = updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway")