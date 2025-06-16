import { footerData } from "../../chamber/scripts/footer.mjs";
import { menuToggle } from "../../chamber/scripts/navigation.mjs";

menuToggle();
footerData();

const userInfo = new URLSearchParams(window.location.search);
const connectionType = userInfo.get('connection');

if (connectionType === 'newsletter') {
    document.querySelector('#results').innerHTML = `
    <p><strong>${userInfo.get('fname')} ${userInfo.get('lname')}</strong>, you have signed up for the DPS Podcast newsletter. 
    Check your ${userInfo.get('email')} inbox for your confirmation email. We're so excited 
    to have you as part of our community!</p>
    `
} else if (connectionType === 'sponsorship') {
    document.querySelector('#results').innerHTML = `
    <p>Thank you for wanting to partner with us! 
    We have received your email.
    Once we review your proposal, we will contact you as soon as possible!</p>
    <h3>Your information</h3>
    <p><strong>Contact:</strong> ${userInfo.get('fname')} ${userInfo.get('lname')} - ${userInfo.get('jobTitle')}</p>
    <p><strong>Company:</strong> ${userInfo.get('company')}</p>
    <p><strong>Sponsorship Type:</strong> ${userInfo.get('sponsorshipType')}</p>
    `
} else {
    document.querySelector('#results').innerHTML = `
    <p>Thank you, <strong>${userInfo.get('fname')} ${userInfo.get('lname')}</strong>, for reaching out to us. We are happy to hear from our community, 
    whether it be to ask us questions or provide us feedback. Due to the number of emails 
    we receive it may take us a few days to respond. We appreciate your patience and look forward to engaging with you!</p>
    `
}