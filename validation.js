function validateForm(e) {
    e.preventDefault();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var mobile = document.getElementById("mobile").value.trim();
    var stationId = document.getElementById("stationId").value.trim();
    var location = document.getElementById("location").value;
    var obsDate = document.getElementById("obsDate").value;
    var temp = document.getElementById("temp").value.trim();
    var humidity = document.getElementById("humidity").value.trim();
    var alertLevel = document.getElementById("alertLevel").value;
    var flag = true;

    // Validate Observer Name
    if (name == "") {
        document.getElementById("nameErr").innerHTML = "Name is required";
        flag = false;
    } else if (name.length < 3) {
        document.getElementById("nameErr").innerHTML = "Name must be at least 3 characters long";
        flag = false;
    } else if (!/^[A-Za-z ]+$/.test(name)) {
        document.getElementById("nameErr").innerHTML = "Only alphabets and spaces allowed";
        flag = false;
    } else {
        document.getElementById("nameErr").innerHTML = "";
    }

    // Validate AWS Station ID
    if (stationId == "") {
        document.getElementById("stationErr").innerHTML = "Station ID is required";
        flag = false;
    } else if (!/^AWS[0-9]{3,}$/i.test(stationId)) {
        document.getElementById("stationErr").innerHTML = "Format must be like AWS001";
        flag = false;
    } else {
        document.getElementById("stationErr").innerHTML = "";
    }

    // Validate Email Address
    if (email == "") {
        document.getElementById("emailErr").innerHTML = "Email is required";
        flag = false;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        document.getElementById("emailErr").innerHTML = "Invalid email format";
        flag = false;
    } else {
        document.getElementById("emailErr").innerHTML = "";
    }

    // Validate Mobile Number
    if (mobile == "") {
        document.getElementById("mobileErr").innerHTML = "Mobile number is required";
        flag = false;
    } else if (!/^[6-9][0-9]{9}$/.test(mobile)) {
        document.getElementById("mobileErr").innerHTML = "Must be a 10 digit Indian number";
        flag = false;
    } else {
        document.getElementById("mobileErr").innerHTML = "";
    }

    // Validate Region / Location
    if (location == "") {
        document.getElementById("locErr").innerHTML = "Please select location";
        flag = false;
    } else {
        document.getElementById("locErr").innerHTML = "";
    }

    // Validate Observation Date
    if (obsDate == "") {
        document.getElementById("dateErr").innerHTML = "Date is required";
        flag = false;
    } else {
        document.getElementById("dateErr").innerHTML = "";
    }

    // Validate Temperature (0 to 60)
    if (temp == "") {
        document.getElementById("tempErr").innerHTML = "Temperature is required";
        flag = false;
    } else if (isNaN(temp) || parseFloat(temp) < 0 || parseFloat(temp) > 60) {
        document.getElementById("tempErr").innerHTML = "Enter temperature between 0 and 60";
        flag = false;
    } else {
        document.getElementById("tempErr").innerHTML = "";
    }

    // Validate Relative Humidity (0 to 100)
    if (humidity == "") {
        document.getElementById("humErr").innerHTML = "Humidity is required";
        flag = false;
    } else if (isNaN(humidity) || parseFloat(humidity) < 0 || parseFloat(humidity) > 100) {
        document.getElementById("humErr").innerHTML = "Enter humidity between 0 and 100";
        flag = false;
    } else {
        document.getElementById("humErr").innerHTML = "";
    }

    // Validate Alert Level
    if (alertLevel == "") {
        document.getElementById("alertErr").innerHTML = "Select alert level";
        flag = false;
    } else {
        document.getElementById("alertErr").innerHTML = "";
    }

    // If all valid, display formatted result card
    if (flag == true) {
        document.getElementById("heatwaveForm").style.display = "none";
        document.getElementById("successMsg").style.display = "block";
        document.getElementById("resultName").innerHTML = name;
        document.getElementById("resultEmail").innerHTML = email;
        document.getElementById("resultMobile").innerHTML = mobile;
        document.getElementById("resultStation").innerHTML = stationId;
        document.getElementById("resultLoc").innerHTML = location;
        document.getElementById("resultDate").innerHTML = obsDate;
        document.getElementById("resultTemp").innerHTML = temp + " °C";
        document.getElementById("resultHum").innerHTML = humidity + " %";
        document.getElementById("resultAlert").innerHTML = alertLevel;
    }
}
