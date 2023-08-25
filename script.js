const form = document.getElementById("myForm");

// calling the event handler
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // accessing the contents of a text input form element
    const firstname = form.elements["first name"].value;
    const lastname = form.elements["last name"].value;
    const email = form.elements["email"].value;
    const mobile = form.elements["mobile"].value;
    const gender = form.elements["gender"].value;
    const date = form.elements["date"].value;
    const country = form.elements["country"].value;
    const qualification = form.elements["qualification"].value;

    //  The expression used inside ${} is executed and its output is passed as a string
    const data = `First Name : ${firstname}\nLast Name : ${lastname}\nEmail : ${email}\nMobile : ${mobile}\nGender : ${gender}\nDate : ${date}\nCountry : ${country}\nQualification : ${qualification}`;

    // this localStorage object allows you to save key/value pairs in the browser
    localStorage.setItem("formData", data);

    window.location.href = "DataDisplay.html";
});

const storedData = localStorage.getItem("formData");

if (storedData) {
    document.getElementById("data").textContent
}
