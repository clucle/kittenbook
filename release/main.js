var kbValues = {
    projectName: 'kittenbook',
    versionNumber: '0.0.1',

    areaCodes: {
        '408': 'Slicon Valley',
        '702': 'LasVegas',
        '801': 'Utah',
        '765': 'West Lafayette',
        '901': 'Memphis'
    },



};

function getAreaCodes() {
    return kbValues.areaCodes;
}

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
function getImages() {
    return document.querySelectorAll('div.userContentWrapper img');
}

function getImageHeight(image) {
    return image.height;
}
function getImageWidth(image){
    return image.width;
}

function replaceImages(images, location) {
    var baseImageUrl, height, width, image;
    switch (location) {
    case 'Memphis':
        baseImageUrl = 'http://placepuppy.it/';
        break;
    default:
        baseImageUrl = 'http://placekitten.com/g/';
        break;
    }
    for(var i=0, len=images.length; i<len; i++){
        image = images[i];
        height = getImageHeight(image);
        width = getImageWidth(image);
        image.src = baseImageUrl + width + '/' + height;
    }
}
function main() {
    //var userName = getUserName();
    //var phoneNumber = getPhoneNumber(userName);
    //var location = getLocation(phoneNumber);
    var images = getImages();

    setInterval(function () {
        images = getImages();
        replaceImages(images, location);


    }, 3000);
}

main();