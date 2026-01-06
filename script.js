        // --- 1. DATA CONFIGURATION (Same as before) ---
        
        const receiptOptions = [
            "Loans ( Liability )", "Azizul Haque Mondal", "Fees from students",
            "Re-Admission Fee", "Admission Fee", "Student Hostel Fee",
            "Fee for late payment", "Other Receipts", "Meal Charges", "zakat / Donation"
        ];

        const paymentOptions = [
            "Loans ( Liability )", "Azizul Haque Mondal", "Sundry Creditors", "Outstanding Liabilities",
            "Rice", "Egg", "Fish", "Meat", "Potato", "Vegetables", "Grocery", 
            "Fuel for Cooking", "Tiffin & Meal", "Water",
            "Postage & Revenue", "Electricity Charges", "Telephone & Internet Charges", 
            "Printing & Stationery", "Travelling & Conveyance", "House rent",
            "Security Agency", "Cartage & Carrying Charges", "Misc. Expenses", "Miscellaneous Expenses",
            "R&M - Aquaguard", "R&M - Water Pump", "R&M - Computer", "R&M - Electrical Equipment", 
            "R&M - Motorcycle", "R&M - Others", "R&M - Fan",
            "Educational Expenses for Students Hostel", "Educational Expenses", 
            "Function Expenses", "Hiring Charges", "Sports Expenses", 
            "Labour Charges", "Stipend Payable", "Medical Expences",
            "Fuel for Motorcycle", "Fuel for Generator",
            "Fixed Assets", "Computer & Programming", "Electrical Equipment", "Fan", 
            "Furniture & Fittings", "Building Renovation", "Sanitation & Plumbing", 
            "Sundry Assets", "Utensil", "Bedding", "Loans & Advances ( Asset )",
            "fees return"
        ];

        const narrationTemplates = {
            "Loans ( Liability )": {
                receipt: "Being loan amount received from [NAME] vide Receipt No. [REF].",
                payment: "Being loan repayment made to [NAME] vide Cheque/Ref No. [REF]."
            },
            "Azizul Haque Mondal": {
                receipt: "Being temporary advance/loan received from Azizul Haque Mondal vide [REF].",
                payment: "Being amount paid to Azizul Haque Mondal towards [NAME] vide [REF]."
            },
            "House rent": { payment: "Being house rent paid to [NAME] for the month of [REF]." },
            "Fees from students": { receipt: "Being monthly tuition fees collected from student [NAME] for [REF]." },
            "Re-Admission Fee": { receipt: "Being re-admission fees received from [NAME] vide Receipt No. [REF]." },
            "Admission Fee": { receipt: "Being admission fees collected from new student [NAME] for session [REF]." },
            "Student Hostel Fee": { receipt: "Being hostel boarding charges received from [NAME] for month of [REF]." },
            "Fee for late payment": { receipt: "Being late fine collected from student [NAME] vide Receipt No. [REF]." },
            "Other Receipts": { receipt: "Being miscellaneous income received from [NAME] vide Receipt No. [REF]." },
            "Meal Charges": { receipt: "Being meal charges collected from [NAME] vide Receipt No. [REF]." },
            "zakat / Donation": { receipt: "Being Zakat/Donation fund received from [NAME] vide Receipt No. [REF]." },
            "Rice": { payment: "Being payment made for purchase of Rice from [NAME] vide Bill No. [REF]." },
            "Egg": { payment: "Being cost of Eggs purchased for hostel mess vide Bill No. [REF]." },
            "Fish": { payment: "Being amount paid for purchase of Fish vide Bill No. [REF]." },
            "Meat": { payment: "Being amount paid for purchase of Meat vide Bill No. [REF]." },
            "Potato": { payment: "Being payment made for purchase of Potatoes vide Bill No. [REF]." },
            "Vegetables": { payment: "Being cost of daily vegetables purchased vide Bill No. [REF]." },
            "Grocery": { payment: "Being payment made for grocery items purchased from [NAME] vide Bill No. [REF]." },
            "Tiffin & Meal": { payment: "Being expenses incurred for Tiffin and Meals for [NAME] vide [REF]." },
            "Water": { payment: "Being payment made for water jar supply/tanker vide Bill No. [REF]." },
            "Fuel for Cooking": { payment: "Being amount paid for cooking fuel/LPG cylinders vide Bill No. [REF]." },
            "Electricity Charges": { payment: "Being electricity bill paid for consumer [NAME] for month of [REF]." },
            "Telephone & Internet Charges": { payment: "Being payment made for Telephone/Internet bill for period [REF]." },
            "Printing & Stationery": { payment: "Being payment made for purchase of office stationery vide [REF]." },
            "Travelling & Conveyance": { payment: "Being conveyance allowance paid to [NAME] for official purpose [REF]." },
            "Postage & Revenue": { payment: "Being postage and courier charges paid to [NAME] vide [REF]." },
            "Security Agency": { payment: "Being payment made to Security Agency for the month of [REF]." },
            "Misc. Expenses": { payment: "Being miscellaneous office expenses incurred vide Bill No. [REF]." },
            "Educational Expenses for Students Hostel": { payment: "Being educational materials purchased for hostel students vide Bill No. [REF]." },
            "Educational Expenses": { payment: "Being general educational expenses incurred vide Bill No. [REF]." },
            "Books & Periodicals": { payment: "Being payment made for purchase of books and periodicals vide Bill No. [REF]." },
            "Function Expenses": { payment: "Being expenses incurred for organizing [NAME] function vide [REF]." },
            "Sports Expenses": { payment: "Being amount paid for purchase of sports equipment vide Bill No. [REF]." },
            "Hiring Charges": { payment: "Being hiring charges paid to [NAME] for [REF]." },
            "Fuel for Motorcycle": { payment: "Being fuel allowance paid for office motorcycle vide Bill No. [REF]." },
            "Fuel for Generator": { payment: "Being diesel/petrol purchased for generator vide Bill No. [REF]." },
            "Fixed Assets": { payment: "Being cost of fixed asset ([NAME]) purchased vide Bill No. [REF]." },
            "Computer & Programming": { payment: "Being payment made for purchase of Computer/Software vide Bill No. [REF]." },
            "Furniture & Fittings": { payment: "Being cost of new furniture purchased from [NAME] vide Bill No. [REF]." },
            "Building Renovation": { payment: "Being expenses incurred for building renovation materials/labor vide [REF]." },
            "Sanitation & Plumbing": { payment: "Being payment made for sanitary and plumbing fittings vide Bill No. [REF]." },
            "Utensil": { payment: "Being payment made for purchase of kitchen utensils vide Bill No. [REF]." },
            "Bedding": { payment: "Being cost of bedding materials purchased for hostel vide Bill No. [REF]." },
            "Sundry Creditors": { payment: "Being part/full payment made to Creditor [NAME] against Bill No. [REF]." },
            "Outstanding Liabilities": { payment: "Being payment made towards clearance of outstanding liability for [NAME]." },
            "Labour Charges": { payment: "Being labour charges paid to [NAME] for [REF]." },
            "Stipend Payable": { payment: "Being stipend paid to [NAME] for the month of [REF]." },
            "Medical Expences": { payment: "Being medical expenses incurred for [NAME] vide Bill No. [REF]." },
            "fees return": { payment: "Being excess fees refunded to student [NAME] vide [REF]." }
        };

        // --- 2. LOGIC ---

        const typeRadios = document.getElementsByName("transType");
        const accountSelect = document.getElementById("account");
        const nameInput = document.getElementById("name");
        const nameLabel = document.getElementById("nameLabel");
        const refInput = document.getElementById("refNo");
        const narrationP = document.getElementById("narration");
        const copyBtn = document.getElementById("copyBtn");

        function updateAccountOptions() {
            const isReceipt = document.getElementById("typeReceipt").checked;
            accountSelect.innerHTML = '<option value="">-- Select --</option>';
            const optionsList = isReceipt ? receiptOptions : paymentOptions;

            optionsList.forEach(opt => {
                const el = document.createElement("option");
                el.value = opt;
                el.textContent = opt;
                accountSelect.appendChild(el);
            });

            if (isReceipt) {
                nameLabel.innerHTML = 'Received From <span class="bengali">(যার থেকে প্রাপ্ত)</span>';
                nameInput.placeholder = "Payer Name";
            } else {
                nameLabel.innerHTML = 'Pay To / Detail <span class="bengali">(প্রাপক / বিবরণ)</span>';
                nameInput.placeholder = "Payee Name";
            }
            generateNarration();
        }

        function generateNarration() {
            const account = accountSelect.value;
            const name = nameInput.value.trim();
            const ref = refInput.value.trim();
            const isReceipt = document.getElementById("typeReceipt").checked;

            if (!account) {
                narrationP.innerText = "Select options above.";
                narrationP.style.color = "#777";
                return;
            }
            narrationP.style.color = "#111";

            let text = "";
            const nameVal = name ? name : "________";
            const refVal = ref ? ref : "________";

            if (narrationTemplates[account]) {
                if (isReceipt && narrationTemplates[account].receipt) {
                    text = narrationTemplates[account].receipt;
                } else if (!isReceipt && narrationTemplates[account].payment) {
                    text = narrationTemplates[account].payment;
                }
            }

            if (text === "") {
                if (isReceipt) {
                    text = `Being ${account} received from ${nameVal} vide Receipt No. ${refVal}.`;
                } else {
                    if (account.startsWith("R&M")) {
                        let item = account.replace("R&M - ", ""); 
                        text = `Being repair charges paid for ${item} vide Bill No. ${refVal}.`;
                    } else if (account.includes("Fuel")) {
                        text = `Being fuel cost paid for ${account} vide Bill No. ${refVal}.`;
                    } else {
                        text = `Being payment towards ${account} to ${nameVal} vide Bill No. ${refVal}.`;
                    }
                }
            }

            text = text.replace("[NAME]", nameVal).replace("[REF]", refVal);
            narrationP.innerText = text;
        }

        typeRadios.forEach(radio => radio.addEventListener("change", updateAccountOptions));
        accountSelect.addEventListener("change", generateNarration);
        nameInput.addEventListener("input", generateNarration);
        refInput.addEventListener("input", generateNarration);

        copyBtn.addEventListener("click", function () {
            const text = narrationP.innerText;
            if (!text || text.includes("Select options")) return;
            navigator.clipboard.writeText(text);
            const originalText = copyBtn.innerText;
            copyBtn.innerText = "Copied ✓";
            copyBtn.style.backgroundColor = "#111111"; 
            copyBtn.style.color = "#9ACA42";
            setTimeout(() => {
                copyBtn.innerText = originalText;
                copyBtn.style.backgroundColor = ""; 
                copyBtn.style.color = ""; 
            }, 1500);
        });

        updateAccountOptions();
    
