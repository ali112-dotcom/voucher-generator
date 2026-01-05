const accountSelect = document.getElementById("account");
const nameInput = document.getElementById("name");
const narrationP = document.getElementById("narration");

function generateNarration() {
    const account = accountSelect.value;
    const name = nameInput.value.trim();

    if (account === "Donation Received") {
        narrationP.innerText =
            `Donation received from ${name || "________"} towards institutional fund.`;

    } else if (account === "Office Rent") {
        narrationP.innerText =
            `Office rent paid to ${name || "________"} for the current period.`;

    } else if (account === "Utility Bill") {
        narrationP.innerText =
            `Utility bill paid to ${name || "________"} against monthly consumption.`;

    } else if (account === "Staff Salary") {
        narrationP.innerText =
            `Salary paid to ${name || "________"} for the current month.`;

    } else {
        narrationP.innerText = "Please select an account head.";
    }
}

accountSelect.addEventListener("change", generateNarration);
nameInput.addEventListener("input", generateNarration);
const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", function () {
    const text = narrationP.innerText;

    if (!text || text.includes("Please select")) {
        alert("Nothing to copy!");
        return;
    }

    navigator.clipboard.writeText(text);
    copyBtn.innerText = "Copied ✓";

    setTimeout(() => {
        copyBtn.innerText = "Copy Narration";
    }, 1500);
});
// Initial narration generation
