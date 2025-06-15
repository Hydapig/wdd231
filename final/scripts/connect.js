import { footerData } from "../../chamber/scripts/footer.mjs";
import { menuToggle } from "../../chamber/scripts/navigation.mjs";

menuToggle();
footerData();

function toggleFields() {
    const newsletter = document.getElementById("newsletter");
    const showSponsor = document.getElementById("sponsor");
    const sponsorInput = document.getElementById("sponsorshipFields");
    const generalInquery = document.getElementById("queryField");
    const companyField = document.querySelector('input[name="company"]');
    const sponsorType = document.querySelector('input[name="sponsorshipType"]');

    if (newsletter.checked) {
        sponsorInput.style.display = "none";
        generalInquery.style.display = "none";
        companyField.removeAttribute("required");
        sponsorType.removeAttribute("required");
    } else if (showSponsor.checked) {
        sponsorInput.style.display = "block";
        generalInquery.style.display = "none";
        companyField.setAttribute("required", "required");
        sponsorType.setAttribute("required", "required");
    } else {
        sponsorInput.style.display = "none";
        generalInquery.style.display = "block";
        companyField.removeAttribute("required");
        sponsorType.removeAttribute("required");
    }
}

document.querySelectorAll('input[name="connection"]').forEach(radio => {
    radio.addEventListener('change', toggleFields);
});

toggleFields();

const modal = document.getElementById("infoModal");
const modalDescription = document.querySelector("#infoModal p");
const closeModal = document.querySelector("#infoModal button");

const descriptions = {
  newsletter: "Sign up for our newsletter to get the latest episodes and updates.",
  sponsorship: "Become a sponsor and promote your brand through our podcast.",
  query: "Send us any questions or feedback you have!"
};

document.querySelectorAll('.info-btn').forEach(button => {
  button.addEventListener('click', () => {
    const type = button.getAttribute("data-type");
    modalDescription.textContent = descriptions[type];
    modal.showModal();
  });
});

closeModal.addEventListener('click', () => {
  modal.close();
});



