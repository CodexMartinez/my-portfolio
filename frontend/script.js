const API_BASE = "https://martin-portfolio-api.onrender.com";

// ============================================================
// LOAD PROFILE
// ============================================================
async function loadProfile() {
  try {
    const res = await fetch(`${API_BASE}/api/profile`);
    const data = await res.json();

    // About table
    document.querySelector("#about-tbody").innerHTML = `
      <tr>
        <td>Full Name</td>
        <td style="color:#e8eaf0">${data.name}</td>
      </tr>
      <tr>
        <td>Title</td>
        <td style="color:#d4af6a">${data.title}</td>
      </tr>
      <tr>
        <td>University</td>
        <td style="color:#e8eaf0">${data.education.university}</td>
      </tr>
      <tr>
        <td>Degree</td>
        <td style="color:#e8eaf0">${data.education.degree}</td>
      </tr>
      <tr>
        <td>Year</td>
        <td style="color:#e8eaf0">${data.education.year}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>
          <a href="mailto:${data.email}">${data.email}</a>
        </td>
      </tr>
      <tr>
        <td>Phone</td>
        <td>
          <a href="tel:${data.phone}">${data.phone}</a>
        </td>
      </tr>
      <tr>
        <td>Location</td>
        <td style="color:#e8eaf0">${data.location}</td>
      </tr>
      <tr>
        <td>About</td>
        <td style="color:#8892a4;line-height:1.8">${data.about}</td>
      </tr>
    `;

    // Contact table
    document.querySelector("#contact-tbody").innerHTML = `
      <tr>
        <td>Email</td>
        <td>
          <a href="mailto:${data.email}">${data.email}</a>
        </td>
      </tr>
      <tr>
        <td>Phone</td>
        <td>
          <a href="tel:${data.phone}">${data.phone}</a>
        </td>
      </tr>
      <tr>
        <td>Location</td>
        <td style="color:#e8eaf0">${data.location}</td>
      </tr>
      <tr>
        <td>GitHub</td>
        <td>
          <a href="${data.socialLinks.github}" target="_blank">
            ↗ ${data.socialLinks.github}
          </a>
        </td>
      </tr>
      <tr>
        <td>LinkedIn</td>
        <td>
          <a href="${data.socialLinks.linkedin}" target="_blank">
            ↗ ${data.socialLinks.linkedin}
          </a>
        </td>
      </tr>
    `;

  } catch (err) {
    console.error("Error loading profile:", err);
    document.querySelector("#about-tbody").innerHTML = `
      <tr>
        <td colspan="2" class="loading" style="color:#f87171">
          ⚠ Could not load profile. Make sure backend is running.
        </td>
      </tr>
    `;
  }
}

// ============================================================
// LOAD PROJECTS
// ============================================================
async function loadProjects() {
  try {
    const res = await fetch(`${API_BASE}/api/projects`);
    const projects = await res.json();

    document.getElementById("projects-tbody").innerHTML = projects
      .map((p, i) => `
        <tr>
          <td style="color:#d4af6a;font-weight:700;">
            0${i + 1}
          </td>
          <td style="color:#fff;font-weight:600;">
            ${p.title}
          </td>
          <td>
            <div class="proj-tags">
              ${p.tags.map(t => `<span>${t}</span>`).join("")}
            </div>
          </td>
          <td>
            ${p.github
              ? `<a class="proj-link" href="${p.github}" target="_blank">↗ GitHub</a>`
              : ""}
            ${p.live
              ? `<a class="proj-link" href="${p.live}" target="_blank">↗ Live</a>`
              : ""}
          </td>
        </tr>
      `).join("");

  } catch (err) {
    console.error("Error loading projects:", err);
    document.getElementById("projects-tbody").innerHTML = `
      <tr>
        <td colspan="4" class="loading" style="color:#f87171">
          ⚠ Could not load projects. Make sure backend is running on port 5000.
        </td>
      </tr>
    `;
  }
}

// ============================================================
// RUN EVERYTHING
// ============================================================
loadProfile();
loadProjects();
