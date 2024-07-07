document.addEventListener("DOMContentLoaded", () => {
    const tambahGejalaButton = document.getElementById("tambahGejalaButton");
    const gejalaModal = document.getElementById("gejalaModal");
    const closeModalButton = document.querySelector(".close");
    const gejalaForm = document.getElementById("gejalaForm");
    const namaGejalaInput = document.getElementById("namaGejala");
    const gejalaTableBody = document.querySelector("#gejalaTable tbody");

    let gejalaList = [];
    let id = 1;
    let editMode = false;
    let editId = null;

    tambahGejalaButton.addEventListener("click", () => {
        gejalaModal.style.display = "block";
    });

    closeModalButton.addEventListener("click", () => {
        gejalaModal.style.display = "none";
        resetForm();
    });

    window.addEventListener("click", (event) => {
        if (event.target === gejalaModal) {
            gejalaModal.style.display = "none";
            resetForm();
        }
    });

    gejalaForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const namaGejala = namaGejalaInput.value.trim();

        if (namaGejala !== "") {
            if (editMode) {
                gejalaList = gejalaList.map((gejala) =>
                    gejala.id === editId
                        ? { ...gejala, nama: namaGejala }
                        : gejala
                );
            } else {
                const gejala = {
                    id: id++,
                    nama: namaGejala,
                };
                gejalaList.push(gejala);
            }

            updateTable();
            resetForm();
            gejalaModal.style.display = "none";
        }
    });

    function resetForm() {
        namaGejalaInput.value = "";
        editMode = false;
        editId = null;
    }

    function updateTable() {
        gejalaTableBody.innerHTML = "";
        gejalaList.forEach((gejala, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${gejala.nama}</td>
                <td>
                    <button class="edit" data-id="${gejala.id}">Edit</button>
                    <button class="delete" data-id="${gejala.id}">Hapus</button>
                </td>
            `;
            gejalaTableBody.appendChild(row);
        });

        document.querySelectorAll(".delete").forEach((button) => {
            button.addEventListener("click", (event) => {
                const id = parseInt(event.target.getAttribute("data-id"));
                gejalaList = gejalaList.filter((gejala) => gejala.id !== id);
                updateTable();
            });
        });

        document.querySelectorAll(".edit").forEach((button) => {
            button.addEventListener("click", (event) => {
                const id = parseInt(event.target.getAttribute("data-id"));
                const gejala = gejalaList.find((gejala) => gejala.id === id);
                namaGejalaInput.value = gejala.nama;
                editMode = true;
                editId = id;
                gejalaModal.style.display = "block";
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const editButtons = document.querySelectorAll(".edit-btn");
    editButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const id = this.getAttribute("data-id");
            const type = this.getAttribute("data-type");

            let fetchUrl,
                formId,
                modalId,
                kodeFieldId,
                namaFieldId,
                keteranganFieldId;

            if (type === "utama") {
                fetchUrl = `/admin/data_gejala/${id}/edit`;
                formId = "editGejalaUtamaForm";
                modalId = "#editGejalaUtamaModal";
                kodeFieldId = "editKodeGejalaUtama";
                namaFieldId = "editNamaGejalaUtama";
                keteranganFieldId = "editKeteranganGejalaUtama";
            } else if (type === "lainnya") {
                fetchUrl = `/admin/gejala_lainnya/${id}/edit`;
                formId = "editGejalaLainnyaForm";
                modalId = "#editGejalaLainnyaModal";
                kodeFieldId = "editKodeGejalaLainnya";
                namaFieldId = "editNamaGejalaLainnya";
                keteranganFieldId = "editKeteranganGejalaLainnya";
            }

            fetch(fetchUrl)
                .then((response) => response.json())
                .then((data) => {
                    document.getElementById(kodeFieldId).value =
                        data.kode_gejala;
                    document.getElementById(namaFieldId).value =
                        data.nama_gejala;
                    document.getElementById(keteranganFieldId).value =
                        data.keterangan;
                    document
                        .getElementById(formId)
                        .setAttribute(
                            "action",
                            `${fetchUrl.split("/edit")[0]}`
                        );
                    $(modalId).modal("show");
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        });
    });
});
