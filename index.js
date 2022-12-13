// Your code here
function createEmployeeRecord(array){
    let record
    return record = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
 function createEmployeeRecords(arrays){
    return arrays.map(record =>createEmployeeRecord(record))
}
function createTimeInEvent(employeeRecord, date){

    const splter = date.split(' ')

    const newTimeInEvent = {
      type: "TimeIn",
      hour: +splter[1],
      date: splter[0]

    }
    employeeRecord.timeInEvents.push(newTimeInEvent)
    return employeeRecord
}
function createTimeOutEvent(employeeRecord,date){
    const splter = date.split(' ')
    const newTimeOutEvent = {
      type: "TimeOut",
      hour: +splter[1],
      date: splter[0]

    }
    employeeRecord.timeOutEvents.push(newTimeOutEvent)
    return employeeRecord
}
function hoursWorkedOnDate(employeeRecord, date){
    const timeIn = employeeRecord.timeInEvents.find(event => event.date === date)
    const timeOut = employeeRecord.timeOutEvents.find(event => event.date === date)
    return ((timeOut.hour-timeIn.hour)/100);
}
function wagesEarnedOnDate(employeeRecord, date){
    return hoursWorkedOnDate(employeeRecord, date) * employeeRecord.payPerHour
}
function allWagesFor(employeeRecord){
    let wages = 0;
    wages = employeeRecord.timeInEvents.reduce((total,item)=>{
        const theDate = item.date;
        return (total + wagesEarnedOnDate(employeeRecord,theDate));
    },0)
    return wages;
}

function calculatePayroll(employeeRecords){
    const totalPay = employeeRecords.map(record => allWagesFor(record))
    return totalPay.reduce((total, employeeTotal) => total + employeeTotal)
}






