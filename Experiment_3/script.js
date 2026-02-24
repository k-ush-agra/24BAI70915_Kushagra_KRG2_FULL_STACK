document.getElementById("jobForm").addEventListener("submit", function(e) {

    e.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const jobRole = document.getElementById("jobRole").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;
    const location = document.getElementById("location").value;

    const profileCard = document.getElementById("profileCard");

    profileCard.innerHTML = `
        <div class="profile-item"><span>Name:</span> ${name}</div>
        <div class="profile-item"><span>Email:</span> ${email}</div>
        <div class="profile-item"><span>Phone:</span> ${phone}</div>
        <div class="profile-item"><span>Job Role:</span> ${jobRole}</div>
        <div class="profile-item"><span>Experience:</span> ${experience}</div>
        <div class="profile-item"><span>Skills:</span> ${skills}</div>
        <div class="profile-item"><span>Preferred Location:</span> ${location}</div>
    `;
    
    document.getElementById("jobForm").reset();
});