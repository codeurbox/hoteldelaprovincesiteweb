const forManyCB = document.getElementById("forManyCB");
let roomSelected = '';
window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const room = params.get('room');
    roomSelected = room;
    console.log("Room: ", room)
    if (room && !forManyCB.checked) {
        document.getElementById("roomNumberTitle").textContent = "Chambre Nº " + room;

    }
    if (forManyCB.checked) {
        document.getElementById("roomType_field").style.display = "flex"
        document.getElementById("roomNumber_field").style.display = "none"

        document.getElementById("nAdulte_field").style.display = "flex"

        document.getElementById("nChildren_field").style.display = "flex"
        document.getElementById("roomNumberTitle").textContent = "";
    }
}

forManyCB.addEventListener("change", () => {
    if (forManyCB.checked) {
        document.getElementById("roomType_field").style.display = "flex"
        document.getElementById("roomNumber_field").style.display = "none"

        document.getElementById("nAdulte_field").style.display = "flex"

        document.getElementById("nChildren_field").style.display = "flex"
        document.getElementById("roomNumberTitle").textContent = "";
    } else {
        if (roomSelected) {
            document.getElementById("roomNumber_field").style.display = "none"
        }
        else {
            document.getElementById("roomNumber_field").style.display = "flex"
        }
        document.getElementById("roomType_field").style.display = "none"


        document.getElementById("nAdulte_field").style.display = "none"

        document.getElementById("nChildren_field").style.display = "none"
        document.getElementById("roomNumberTitle").textContent = "Chambre Nº " + roomSelected;
    }
})
let formProgress = document.querySelectorAll(".step-line div");

let currentStep = 1;

const nextBtn = document.querySelector(".submitBtn");
const prevBtn = document.querySelector(".back-button");

nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    nextStep(currentStep);
})

prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    prevStep(currentStep);
})

function nextStep(step) {
    if (step === 1 && validateStep1()) {
        document.querySelector(".clientform").style.display = 'none';
        document.querySelector(".reservationform").style.display = 'flex';
        currentStep = 2;
        document.getElementById("step2").style.backgroundColor = "#000";
        document.getElementById("step2").style.color = "#FFF";
    } else if (step === 2 && validateStep2()) {
        document.querySelector(".reservationform").style.display = 'none';
        document.querySelector(".finalform").style.display = 'flex';
        currentStep = 3;
        document.getElementById("step3").style.backgroundColor = "#000";
        document.getElementById("step3").style.color = "#FFF";
    }
    // else if (step === 3 && validateStep3()) {
    //     document.querySelector(".paymentForm").style.display = 'none';
    //     document.querySelector(".finalform").style.display = 'flex';
    //     currentStep = 4;
    //     document.getElementById("step4").style.backgroundColor = "#000";
    //     document.getElementById("step4").style.color = "#FFF";
    // }
}

function prevStep(step) {
    if (step === 2 && validateStep1()) {
        document.querySelector(".clientform").style.display = 'flex';
        document.querySelector(".reservationform").style.display = 'none';
        currentStep = 1;
        document.getElementById("step2").style.backgroundColor = "#FFF";
        document.getElementById("step2").style.color = "#000";
    } else if (step === 3 && validateStep2()) {
        document.querySelector(".reservationform").style.display = 'flex';
        document.querySelector(".finalform").style.display = 'none';
        currentStep = 2;
        document.getElementById("step3").style.backgroundColor = "#FFF";
        document.getElementById("step3").style.color = "#000";
    }
    // else if (step === 4 && validateStep3()) {
    //     document.querySelector(".paymentForm").style.display = 'flex';
    //     document.querySelector(".finalform").style.display = 'none';
    //     currentStep = 3;
    //     document.getElementById("step4").style.backgroundColor = "#FFF";
    //     document.getElementById("step4").style.color = "#000";
    // }
}

function validateStep1() {
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("tel").value;
    const address = document.getElementById("address").value;
    if (nom.trim() === '' || prenom.trim() === '' || email.trim() === '' || tel.trim() === '' || address.trim() === '') {
        document.querySelectorAll(".error-message")[0].textContent = "Veillez remplir Tous les noms, l'adresse email et résidentielle et le numero de telephone";
        return false;
    }
    console.log("User input: ", email, tel, address)
    // document.getElementById("hidden-email").value = email;
    // document.getElementById("hidden-subject").value = "Confirmation de Réservation - Hôtel de la Province";
    // document.getElementById("name-holder").textContent = nom + " " + postnom + " " + prenom
    return true;
}

function validateStep2() {
    if (forManyCB.checked) {
        const roomType = document.getElementById("roomType").options[document.getElementById("roomType").selectedIndex].text;
        const checkin = document.getElementById("checkin").value;
        const checkout = document.getElementById("checkout").value;
        const nAdulte = document.getElementById("nAdulte").value;
        const nChildren = document.getElementById("nChildren").value;
        const nRoom = document.getElementById("nRoom").value;
        if (roomType.trim() === '' || checkin.trim() === '' || checkout.trim() === '' || nAdulte.trim() === '' || nRoom.trim() === '') {
            document.querySelectorAll(".error-message")[1].textContent = "Veillez selectioner le type de chambre et choisir la date d'arrive, de depart et remplir le nombre d'adulte et le nombre de chambres";
            return false;
        }
    }
    else {
        if (roomSelected) {
            const roomNumberText = document.getElementById("roomNumber").options[document.getElementById("roomType").selectedIndex].text;
            const roomNumber = document.getElementById("roomNumber").value;
            const checkin = document.getElementById("checkin").value;
            const checkout = document.getElementById("checkout").value;
            if (checkin.trim() === '' || checkout.trim() === '') {
                document.querySelectorAll(".error-message")[1].textContent = "Veillez choisir la date d'arrive et de depart";
                return false;
            }

        }
        else {
            const roomNumberText = document.getElementById("roomNumber").options[document.getElementById("roomType").selectedIndex].text;
            const roomNumber = document.getElementById("roomNumber").value;
            const checkin = document.getElementById("checkin").value;
            const checkout = document.getElementById("checkout").value;
            if (roomNumber.trim() === '' || checkin.trim() === '' || checkout.trim() === '') {
                document.querySelectorAll(".error-message")[1].textContent = "Veillez selectioner un numero de chambre, choisir la date d'arrive et de depart";
                return false;
            }
        }
    }

    // const name = document.getElementById("name-holder").textContent
    // document.getElementById("hidden-body").textContent = `Cher(e) ${name},

    // Nous vous remercions d'avoir choisi l'Hôtel de la Province pour votre prochain séjour.\n

    // Nous avons bien reçu votre demande de réservation avec les détails suivants :\n

    //     Date d'arrivée : ${checkin}\n
    //     Date de départ : ${checkout}\n
    //     Nombre de personnes : ${nAdulte} Adultes et ${nChildren}\n enfants
    //     Type de chambre : ${roomType}\n

    // Votre demande est actuellement en attente de confirmation.\n

    // Le montant total à payer pour votre réservation est de : 456 $.\n

    // Pour confirmer votre réservation et procéder au paiement, veuillez cliquer sur le lien suivant : http://127.0.0.1:5501/reservation.html.\n

    // Si vous avez des questions ou besoin d'assistance supplémentaire, n'hésitez pas à nous contacter à l'adresse suivante : hoteldelaprovince@gmail.com ou par téléphone au +243 567 876 4334.\n

    // Nous nous réjouissons de vous accueillir prochainement à l'Hôtel de la Province.\n

    // Cordialement,\n`
    // document.getElementById("hidden-form").submit();
    return true;

}

// function validateStep3() {
//     const paymentMethod = document.getElementById("paymentMethod");
//     if (paymentMethod.value === "VISA" || paymentMethod.value === "MasterCard" || paymentMethod.value === "PayPal") {
//         const cardNumber = document.getElementById("cardNumber").value;
//         const MMYY = document.getElementById("MM/YY").value;
//         const CVC = document.getElementById("CVC").value;
//         const CardName = document.getElementById("CardName").value;
//         if (cardNumber.trim() === '' || MMYY.trim() === '' || CVC.trim() === '' || CardName.trim() === '') {
//             document.querySelectorAll(".error-message")[2].textContent = "Veillez remplir le numero de cart, la date d'expiration, le code de sécurité et nom du propriétaire sur la cart";
//             return false;
//         }
//         return true;
//     }
//     else if (paymentMethod.value === "Airtel" || paymentMethod.value === "Vodacom" || paymentMethod.value === "Orange") {
//         const mobileMoneyNumber = document.getElementById("MobileMoneyNumber").value;
//         if (mobileMoneyNumber.trim() === '') {
//             document.querySelectorAll(".error-message")[2].textContent = "Veillez remplir le numero de telephone";
//             return false;
//         }
//         return true;
//     }
//     else if (paymentMethod.value === "OnArrival") {

//     }
//     else if (paymentMethod.value === "") {

//     }
//     return true;
// }
document.getElementById("tel").addEventListener('keydown', function (event) {
    if (event.key === 'Backspace' || event.key === 'Delete' || event.key.startsWith('Arrow') || event.key === 'Home' || event.key === 'End' || event.key === 'Tab') {
        return; // Allow these keys
    }
    if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
    }
});
document.getElementById("checkin").addEventListener("click", function () {
    this.type = 'date';
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedTomorrow = tomorrow.toISOString().split('T')[0];
    this.setAttribute('min', formattedTomorrow);
    this.addEventListener("change", function () {
        document.getElementById("checkout").disabled = false;
    })
})

document.getElementById("checkout").addEventListener("click", function () {
    if (document.getElementById("checkin").value.trim() !== '') {
        this.type = 'date';
        const checkInDate = new Date(document.getElementById("checkin").value);
        checkInDate.setDate(checkInDate.getDate() + 1);
        const minCheckoutDate = checkInDate.toISOString().split('T')[0];
        this.setAttribute('min', minCheckoutDate);
    }
})
document.getElementById("nAdulte").addEventListener('keydown', function (event) {
    if (event.key === 'Backspace' || event.key === 'Delete' || event.key.startsWith('Arrow') || event.key === 'Home' || event.key === 'End' || event.key === 'Tab') {
        return; // Allow these keys
    }
    if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
    }
});
document.getElementById("nChildren").addEventListener('keydown', function (event) {
    if (event.key === 'Backspace' || event.key === 'Delete' || event.key.startsWith('Arrow') || event.key === 'Home' || event.key === 'End' || event.key === 'Tab') {
        return; // Allow these keys
    }
    if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
    }
});
document.getElementById("nRoom").addEventListener('keydown', function (event) {
    if (event.key === 'Backspace' || event.key === 'Delete' || event.key.startsWith('Arrow') || event.key === 'Home' || event.key === 'End' || event.key === 'Tab') {
        return; // Allow these keys
    }
    if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
    }
});
// document.getElementById("MobileMoneyNumber").addEventListener('keydown', function (event) {
//     if (event.key === 'Backspace' || event.key === 'Delete' || event.key.startsWith('Arrow') || event.key === 'Home' || event.key === 'End' || event.key === 'Tab' || event.key === "space" || event.key === "+") {
//         return; // Allow these keys
//     }
//     if (!/[0-9]/.test(event.key)) {
//         event.preventDefault();
//     }
// });
// document.getElementById("paymentMethod").addEventListener("change", function () {
//     if (this.value === "VISA" || this.value === "MasterCard" || this.value === "PayPal") {
//         document.querySelector(".creditpayment").style.display = "flex";
//         document.querySelector(".mobilemoneypayment").style.display = "none";
//     }
//     else if (this.value === "Airtel" || this.value === "Vodacom" || this.value === "Orange") {
//         document.querySelector(".creditpayment").style.display = "none";
//         document.querySelector(".mobilemoneypayment").style.display = "flex";
//     }
//     else if (this.value === "OnArrival") {
//         document.querySelector(".creditpayment").style.display = "none";
//         document.querySelector(".mobilemoneypayment").style.display = "none"
//     }
//     else if (this.value === "") {
//         document.querySelector(".creditpayment").style.display = "none";
//         document.querySelector(".mobilemoneypayment").style.display = "none"
//     }
// })
