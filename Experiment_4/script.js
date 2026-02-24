document.getElementById("jobForm").addEventListener("submit", function(e) {

    e.preventDefault(); // Prevent page reload

    // Get form values
    const title = document.getElementById("jobTitle").value;
    const company = document.getElementById("companyName").value;
    const location = document.getElementById("location").value;
    const type = document.getElementById("jobType").value;
    const salary = document.getElementById("salary").value;
    const description = document.getElementById("description").value;

    const container = document.getElementById("jobCardsContainer");

    // Remove empty message if exists
    const emptyMsg = document.querySelector(".empty-message");
    if (emptyMsg) {
        emptyMsg.remove();
    }

    // Create Job Card
    const card = document.createElement("div");
    card.classList.add("job-card");

    card.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Location:</strong> ${location}</p>
        ${salary ? `<p><strong>Salary:</strong> ${salary}</p>` : ""}
        <span class="job-type">${type}</span>
        <p>${description}</p>
    `;

    container.appendChild(card);

    // Reset form
    document.getElementById("jobForm").reset();
});