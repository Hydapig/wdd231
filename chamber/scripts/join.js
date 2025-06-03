import { footerData } from "./footer.mjs";
import { menuToggle } from "./navigation.mjs";
import { getMembershipData } from "./memberships.mjs";

menuToggle();
footerData();

const membershipCards= document.querySelector("#levelCards");
const membershipDialog = document.querySelector("#levelDialog");
const membershipTitle = document.querySelector("#levelDialog h2");
const closeDialog = document.querySelector("#levelDialog button");
const membershipInfo = document.querySelector("#levelDialog p");

closeDialog.addEventListener("click", () => membershipDialog.close());

function displayLevels(data) {
    data.forEach((membership, index) => {
        const level = document.createElement('div');
        level.classList.add("membership-level");
        level.style.animationDelay = `${index * 150}ms`;

        level.innerHTML = `
        <h3>${membership.name} Membership Level</h3>
        <button class="animations">Learn More</button>
        `;
        const button = level.querySelector("button");
        button.addEventListener('click', () => showLevels(membership));
        membershipCards.appendChild(level);
    });
}

function membershipList(data) {
    const list = document.getElementById('level');

    data.forEach(membership => {
        const name = document.createElement('option');
        name.textContent = membership.name;
        name.value = membership.name;

        list.appendChild(name);
    });
}

async function membershipLevels() {
    const data = await getMembershipData();
    displayLevels(data);
    membershipList(data);
}

membershipLevels();

function showLevels(x) {
    console.log("Opening modal for:", x.name);
    membershipTitle.innerHTML = x.name;
    membershipDialog.showModal();

    const benefitsList = x.benefits.map(benefit => `<li>${benefit}</li>`).join("");

    membershipInfo.innerHTML = `
    <p>${x.description}</p>
    <p><strong>Price:</strong> $${x.price}</p>
    <p><strong>Included Benefits:</strong></p>
    <ul>${benefitsList}</ul>
    `;
}

const timestampField = document.getElementById("timestamp");
const now = new Date();
timestampField.value = now.toLocaleString();