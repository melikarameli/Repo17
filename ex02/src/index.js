// Only change code below this line
const workDays = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
function myWeek(days) {
    var week = [...workDays, 'SAT', 'SUN'];
    return week;
}
console.log(myWeek(workDays));
// Only change code above this line
module.exports = myWeek;