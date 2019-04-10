let isPalindrome=function (stringList) {
    let copyStringList=stringList.replace(/[^\w]/g,'').toLowerCase();
    return copyStringList.split('').reverse().join('')===copyStringList;
}
console.log(isPalindrome( "race a car"));
