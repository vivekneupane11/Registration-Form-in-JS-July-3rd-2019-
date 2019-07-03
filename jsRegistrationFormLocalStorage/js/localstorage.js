let DOMSTRING = (function() {
    let username = document.getElementById('username-input');
    let email = document.getElementById('email-input');
    let password = document.getElementById('password-input');
    let cpassword = document.getElementById('cpassword-input');
    let contact = document.getElementById('contact-input');
    let job = document.getElementById('job-input');
    let gender = document.getElementById('gender-input');
    let signupbutton = document.getElementById('signup-button');


    return {
        domusername: username,
        domemail: email,
        dompassword: password,
        domcpassword: cpassword,
        domcontact: contact,
        domjob: job,
        domgender: gender,
        domsignupbutton: signupbutton,
    }
})();

DOMSTRING.domsignupbutton.addEventListener('click', function() {
    let username = DOMSTRING.domusername.value;
    let email = DOMSTRING.domemail.value;
    let password = DOMSTRING.dompassword.value;
    let contact = DOMSTRING.domcontact.value;
    let job = DOMSTRING.domjob.value;
    let gender = DOMSTRING.domgender.value;
    let hashpassword = md5(password);
    let students = {

        name: username,
        email: email,
        password: hashpassword,
        contact: contact,
        job: job,
        gender: gender
    }
    let id = localStorage.length;
    console.log(id);
    localStorage.setItem('student' + id, JSON.stringify(students));
    getStudents(localStorage.length - 1);




});

function getStudents(id) {
    let alllist = localStorage.getItem('student' + id);
    let studentlist = JSON.parse(alllist);
    document.getElementById('alllist').innerHTML += studentlist.name;

}
let finalid = localStorage.length - 1;
let currentUser = localStorage.getItem('student' + finalid);
let onlineUser = JSON.parse(currentUser);
document.getElementById('alllist').innerHTML = onlineUser.name;
document.getElementById('welcome').innerHTML = onlineUser.email + "(**WELCOME**)";