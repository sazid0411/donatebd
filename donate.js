const donationBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");

const donation = document.getElementById("donation");
const history = document.getElementById("history");

donationBtn.addEventListener("click", () => {
  donation.classList.remove("hidden");
  history.classList.add("hidden");
});

historyBtn.addEventListener("click", () => {
  donation.classList.add("hidden");
  history.classList.remove("hidden");
});

const modalBtn = document.querySelectorAll(".modalBtn");
const modal = document.getElementById("modal");
const modalColse = document.getElementById("closebtn");

for (const mb of modalBtn) {
  mb.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });
}

modalColse.addEventListener("click", () => {
  modal.classList.add("hidden");
});
