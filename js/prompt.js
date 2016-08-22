function getUserName() {
    var userName = prompt('Hello, what\'s your name?');
    if (!userName) {
        userName = prompt('Requestion, what\'s yoaur name?');
    }

}
/**
    * Check the validity of a phone number
    * @method
    * @param {string} phoneNumber The phone number to be validated
    * @return {boolean}
*/
function validatePhoneNumber(phoneNumber) {
    return (/(?:1-)?\(?(\d{3})(?:-|\) ?)\d{3}-\d{4}/).test(phoneNumber);
}

function getPhoneNumber(userName){
    var phoneNumber = prompt('Hello ' + userName + ', what\'s your phone number?');
    if (!validatePhoneNumber(phoneNumber)) {
        phoneNumber = prompt('I want valid phone number');
    }
}



function getLocation(phoneNumber) {
    var phoneNumberPattern = /(?:1-)?\(?(\d{3})[\-\)]\d{3}-d{4}/;
    var phoneMatches = phoneNumberPattern.exec(phoneNumber);
    var areaCode, areaCodes, locationName;
    if (phoneMatches) {
        areaCode = phoneMatches[1];
        areaCodes = getAreaCodes();
        locationName = areaCodes[areaCode];
    }
    return locationName ? locationName : 'somewhere';
}


//document.body.innerHTML = output;