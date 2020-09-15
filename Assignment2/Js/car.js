function ClickCarName(a, carname) {

    var Car = document.getElementById("Car");
    var cars = document.getElementById("cars");
    var getclickcount = document.getElementById(carname);
    var countr = document.getElementById("counter");
    var num = parseInt(getclickcount.value);
    if (!cars.innerHTML.includes(carname)) {
        Car.innerText = carname;
        cars.innerHTML = '<img src="Image/' + carname + '.PNG" onclick="IncrementCount(\'' + carname + '\')" >';
        countr.innerText = num;
        ResetList();
        a.setAttribute("class", "active");
    }


}

function IncrementCount(counterhiddenfield) {
    debugger
    var count = document.getElementById("counter");
    var chidden = document.getElementById(counterhiddenfield);
    var number = parseInt(chidden.value);
    chidden.value = number + 1;
    count.innerText = number + 1;

}
function ResetList() {

    for (var i = 0; i < document.getElementsByTagName("a").length; i++) {
        document.getElementsByTagName("a")[i].setAttribute("class", "")
    }
}
