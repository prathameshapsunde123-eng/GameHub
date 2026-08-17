const form = document.getElementById("grapeForm");

const quantityInput = document.getElementById("quantity");
const rateInput = document.getElementById("rate");
const totalInput = document.getElementById("total");

const recordsTable = document.getElementById("recordsTable");

const searchInput = document.getElementById("search");

let records =
    JSON.parse(localStorage.getItem("grapeRecords")) || [];

function calculateTotal() {
    const quantity = Number(quantityInput.value) || 0;
    const rate = Number(rateInput.value) || 0;
    const total = quantity * rate;

    totalInput.value =
        "₹" + total.toLocaleString("en-IN");
}

quantityInput.addEventListener(
    "input",
    calculateTotal
);

rateInput.addEventListener(
    "input",
    calculateTotal
);

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const quantity = Number(quantityInput.value);
    const rate = Number(rateInput.value);
    const total = quantity * rate;

    const record = {
        id: Date.now(),

        farmer:
            document.getElementById("farmer").value,

        grapeType:
            document.getElementById("grapeType").value,

        quantity:
            quantity,

        rate:
            rate,

        crates:
            Number(
                document.getElementById("crates").value
            ),

        quality:
            document.getElementById("quality").value,

        date:
            document.getElementById("harvestDate").value,

        location:
            document.getElementById("location").value,

        buyer:
            document.getElementById("buyer").value,

        total:
            total,

        notes:
            document.getElementById("notes").value
    };

    records.push(record);

    saveRecords();

    displayRecords();

    form.reset();

    totalInput.value = "";

    alert("Grape harvest record added successfully! 🍇");
});

function saveRecords() {
    localStorage.setItem(
        "grapeRecords",
        JSON.stringify(records)
    );
}

function displayRecords(data = records) {
    recordsTable.innerHTML = "";

    if (data.length === 0) {
        recordsTable.innerHTML = `
            <tr>
                <td colspan="9" style="text-align:center;padding:40px;">
                    No grape records found 🍇
                </td>
            </tr>
        `;

        updateDashboard([]);

        return;
    }

    data.forEach(function(record) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>
                <strong>${record.farmer}</strong>
            </td>

            <td>
                ${record.grapeType}
            </td>

            <td>
                ${record.quantity.toLocaleString("en-IN")} kg
            </td>

            <td>
                ${record.crates}
            </td>

            <td>
                ₹${record.rate}
            </td>

            <td>
                <span class="quality">
                    ${record.quality}
                </span>
            </td>

            <td class="total-cell">
                ₹${record.total.toLocaleString("en-IN")}
            </td>

            <td>
                ${formatDate(record.date)}
            </td>

            <td>
                <button
                    class="delete-btn"
                    onclick="deleteRecord(${record.id})"
                >
                    Delete
                </button>
            </td>
        `;

        recordsTable.appendChild(row);
    });

    updateDashboard(data);
}

function deleteRecord(id) {
    const confirmDelete =
        confirm(
            "Are you sure you want to delete this record?"
        );

    if (!confirmDelete) {
        return;
    }

    records =
        records.filter(
            record => record.id !== id
        );

    saveRecords();

    displayRecords();
}

searchInput.addEventListener(
    "input",
    function() {
        const search =
            searchInput.value
                .toLowerCase()
                .trim();

        const filteredRecords =
            records.filter(function(record) {
                return (
                    record.farmer
                        .toLowerCase()
                        .includes(search) ||

                    record.grapeType
                        .toLowerCase()
                        .includes(search) ||

                    record.buyer
                        .toLowerCase()
                        .includes(search) ||

                    record.location
                        .toLowerCase()
                        .includes(search) ||

                    record.quality
                        .toLowerCase()
                        .includes(search)
                );
            });

        displayRecords(filteredRecords);
    }
);

function updateDashboard(data) {
    let totalQuantity = 0;
    let totalCrates = 0;
    let totalRevenue = 0;

    data.forEach(function(record) {
        totalQuantity += Number(record.quantity);
        totalCrates += Number(record.crates);
        totalRevenue += Number(record.total);
    });

    document.getElementById(
        "totalQuantity"
    ).textContent =
        totalQuantity.toLocaleString("en-IN") + " kg";

    document.getElementById(
        "totalCrates"
    ).textContent =
        totalCrates.toLocaleString("en-IN");

    document.getElementById(
        "totalRevenue"
    ).textContent =
        "₹" + totalRevenue.toLocaleString("en-IN");

    document.getElementById(
        "totalRecords"
    ).textContent =
        data.length;
}

function formatDate(date) {
    if (!date) {
        return "-";
    }

    const d = new Date(date);

    return d.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );
}

displayRecords();

document.getElementById(
    "harvestDate"
).valueAsDate = new Date();