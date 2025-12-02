document.getElementById("uploadForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const fileInput = document.getElementById("resume");
    const formData = new FormData();
    formData.append("resume", fileInput.files[0]);

    const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData
    });

    const data = await response.json();
    document.getElementById("result").textContent = JSON.stringify(data, null, 2);
});
