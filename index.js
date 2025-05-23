// Write your solution in this file!
const employee = {
    name: 'miriam' ,
    streetAdress: 'fedha 304'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const { [key]: _, ... newEmployee } = employee
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    delete employee[key];
    return employee
}
