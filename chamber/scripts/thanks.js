import { footerData } from "./footer.mjs";
import { menuToggle } from "./navigation.mjs";

menuToggle();
footerData();

const getString = window.location.search;
console.log(getString);

const userInfo = new URLSearchParams(window.location.search)

document.querySelector("#results").innerHTML = `
<h3><strong>Your registration details:</strong></h3>
<p><strong>${userInfo.get('businessName')}</strong> was registered by <strong>${userInfo.get('fname')} ${userInfo.get('lname')}</strong> on <strong>${userInfo.get('timestamp')}</strong></p>
<p><strong>Phone number:</strong> ${userInfo.get('tel')}</p>
<p><strong>Email:</strong> ${userInfo.get('useremail')}</p>
<p><strong>Membership Level:</strong> ${userInfo.get('level')}</p>
<p>A copy of this information has been sent to your email.</p>
`

// let countdown = 5;

// function updateTimer() {
//     document.getElementById('timer').innerHTML = countdown + " seconds.";
//     if (countdown === 0) {
        
//         window.location.href = "index.html";
//     } else {
//         countdown--;
//     }
// }

// setInterval(updateTimer, 1000);