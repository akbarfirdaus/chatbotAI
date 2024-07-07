document.addEventListener("DOMContentLoaded", () => {
    const gejalaTableBody = document.querySelector("#reportTable tbody");
    const totalGejalaElement = document.getElementById("totalGejala");
    const printButton = document.getElementById("printReport");

    // Data gejala bisa diambil dari sumber lain, misalnya dari localStorage atau API
    // Untuk contoh ini, kita akan menggunakan data statis
    const gejalaList = JSON.parse(localStorage.getItem("gejalaList")) || [];

    function updateTable() {
        gejalaTableBody.innerHTML = "";
        gejalaList.forEach((gejala, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${gejala.nama}</td>
            `;
            gejalaTableBody.appendChild(row);
        });
        totalGejalaElement.textContent = gejalaList.length;
    }

    printButton.addEventListener("click", () => {
        window.print();
    });

    updateTable();
});

document
    .getElementById("filter-year")
    .addEventListener("change", filterPatients);
document
    .getElementById("filter-month")
    .addEventListener("change", filterPatients);

function filterPatients() {
    const monthFilter = document.getElementById("filter-month").value;
    const yearFilter = document.getElementById("filter-year").value;
    const rows = document.querySelectorAll("#patient-data tr");

    rows.forEach((row) => {
        const rowMonth = row.getAttribute("data-month");
        const rowYear = row.getAttribute("data-year");

        const matchesMonth = monthFilter === "all" || rowMonth === monthFilter;
        const matchesYear = yearFilter === "all" || rowYear === yearFilter;

        if (matchesMonth && matchesYear) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}
