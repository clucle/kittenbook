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