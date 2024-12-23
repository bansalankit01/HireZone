const jobCards = [
    {
      company: "Ninestars Information Technologies",
      logo: "https://images.jdmagicbox.com/v2/comp/bangalore/37/080p5907337/catalogue/ninestar-information-technologies-pvt-ltd-jp-nagar-3rd-phase-bangalore-computer-software-developers-2f58bax.jpg",
      postedAgo: "3 days ago",
      jobTitle: "UI/UX Designers",
      location: "Bengaluru",
      salary: "2,25,000 - 5,00,000",
      jobType: "full-time",
      shift: "Day shift",
      detailsLink: "view_job.html",
    },
    {
      company: "VIATRIS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW9nNJZClQqYkQse-vmz9zP9ELdk-LK3c8Qg&s",
      postedAgo: "4 days ago",
      jobTitle: "Graduate Engineer Trainee",
      location: "Bengaluru",
      salary: "5,00,000",
      jobType: "full-time",
      shift: "Day shift",
      detailsLink: "view_job.html",
    },
    {
      company: "infosys",
      logo: "https://static.vecteezy.com/system/resources/previews/020/336/451/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg",
      postedAgo: "2 days ago",
      jobTitle: "Senior web developer",
      location: "Mumbai, India",
      salary: "3,00,000 - 5,00,000",
      jobType: "full-time",
      shift: "Day shift",
      detailsLink: "view_job.html",
    },
    {
      company: "to the new",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVmcrdWjk0nGrrmQV3Ugtu1D-keYlbShNn8g&s",
      postedAgo: "4 days ago",
      jobTitle: "Software Engineer Trainee",
      location: "noida",
      salary: "Not disclosed",
      jobType: "full-time",
      shift: "Day shift",
      detailsLink: "view_job.html",
    },
    {
      company: "Accenture",
      logo: "https://logos-world.net/wp-content/uploads/2020/06/Accenture-Emblem.png",
      postedAgo: "2 days ago",
      jobTitle: "Qualified developer",
      location: "Mumbai, India",
      salary: "5,00,000 - 7,00,000",
      jobType: "Full-time",
      shift: "Flexible shifts",
      detailsLink: "view_job.html",
    },
    {
      company: "Talent Organizers",
      logo: "https://talentorganizers.in/wp-content/uploads/2022/07/Logo_wo_bg-1.png",
      postedAgo: "5 days ago",
      jobTitle: "British Airways II Fresher's",
      location: "noida, gurugram, delhi NCR",
      salary: "2,00,000 - 7,00,000",
      jobType: "Full-time",
      shift: "day shifts",
      detailsLink: "view_job.html",
    },
    {
      company: "IESoft Technologies Private Limited",
      logo: "https://s3.ap-south-1.amazonaws.com/triedgenew/assets/uploads/position/1662467636_WhatsApp%20Image%202022-09-01%20at%2017.30.56.jpeg",
      postedAgo: "posted today",
      jobTitle: "software developer",
      location: "Work from home",
      salary: "4,00,000 - 6,00,000",
      jobType: "full-time",
      shift: "Day shift",
      detailsLink: "view_job.html",
    },
    {
      company: "VHR Professional Services",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJExlm_KhRHO8TITYOewXOWzAo_y79Hhmvuw&s",
      postedAgo: "4 days ago",
      jobTitle: "Data Entry Executive",
      location: "remote",
      salary: "8,00,000 - 10,00,000",
      jobType: "full-time",
      shift: "Day shift",
      detailsLink: "view_job.html",
    },
    {
      company: "Genex Edge Solutions",
      logo: "https://yt3.googleusercontent.com/LHZ-CpnI3ukDeDZWkdV3yIwPwr7cs3JwRFyvxevFVDDHtHmtQjTiOOjMS1voepznxtCp3R1Q=s900-c-k-c0x00ffffff-no-rj",
      postedAgo: "2 days ago",
      jobTitle: "Shopify developer",
      location: "delhi, India",
      salary: "2,00,000",
      jobType: "part-time",
      shift: "Fixed shift",
      detailsLink: "view_job.html",
    },
    {
      company: "KLJ Resources Limited",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQF27lrBtcuH8Q/company-logo_200_200/company-logo_200_200/0/1680669395027/klj_resources_ltd_logo?e=2147483647&v=beta&t=M2HkEofZPWknuW-Kzm6hrtLFqQVM9M1FIDtlAWALxdY",
      postedAgo: "posted just now",
      jobTitle: "Front End Developer",
      location: "delhi, India",
      salary: "4,00,000 - 6,00,000",
      jobType: "full-time",
      shift: "Day shift",
      detailsLink: "view_job.html",
    },
    {
      company: "Techmindscape Private Limited",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQEJx06BWnMRfA/company-logo_200_200/company-logo_200_200/0/1719255827948?e=2147483647&v=beta&t=_IzB3aSvS-QTa3l1YUPPWAAgE22Ghuiupt9EL499sFA",
      postedAgo: "2 days ago",
      jobTitle: "Reactjs developer",
      location: "Karnataka",
      salary: "2,40,000 - 3,00,000",
      jobType: "full-time",
      shift: "Day shift",
      detailsLink: "view_job.html",
    },
    {
      company: "Nexpro247",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQG6Nzqogn7miQ/company-logo_200_200/company-logo_200_200/0/1693824586826?e=2147483647&v=beta&t=LONSkwpKQpbu99GJvp_NN3QUiMadZo8lrKOP0iDCx6A",
      postedAgo: "4 days ago",
      jobTitle: "Web Developer",
      location: "Ahmedabad, Surat, Vadodara",
      salary: "Not Disclosed",
      jobType: "full-time",
      shift: "flexible shift",
      detailsLink: "view_job.html",
    },
    {
      company: "Evolutionco",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnTPnfJu-djskhwjKCAl8EZsSLBNWpAUcJKw&s",
      postedAgo: "2 days ago",
      jobTitle: "Junior Ux Designer",
      location: "Mumbai (All Areas)",
      salary: "3,00,000 - 6,00,000",
      jobType: "full-time",
      shift: "Day shift",
      detailsLink: "view_job.html",
    },
    {
      company: "Odisha Doot Consultants",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRuDeFwKsZBuq8C00GFXvFZstvsLzmijTQWg&s",
      postedAgo: "2 days ago",
      jobTitle: "Fullstack Developer",
      location: "Bhubaneswar( Saheed Nagar )",
      salary: "not disclosed",
      jobType: "full-time",
      shift: "flexible shift",
      detailsLink: "view_job.html",
    },
    {
      company: "Certbar Security",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHOZsyJDLIXVw/company-logo_200_200/company-logo_200_200/0/1685471408998/certbar_logo?e=2147483647&v=beta&t=i4-h00dcR5_8pqlW6trOnVFfuASPQxOi4SIBdJxS6sM",
      postedAgo: "5 days ago",
      jobTitle: "Jr . Creative Designer",
      location: "surat",
      salary: "not disclosed",
      jobType: "full-time",
      shift: "Day shift",
      detailsLink: "view_job.html",
    },
    
  ];

  // Capture DOM elements
const titleInput = document.querySelector('input[name="title"]');
const locationInput = document.querySelector('input[name="location"]');
const dropdowns = document.querySelectorAll('.dropdown');

// To store selected dropdown values
let selectedFilters = {
    datePosted: "",
    salary: "",
    type: "",
    education: "",
    shift: ""
};

// Add event listeners to inputs
titleInput.addEventListener('input', filterJobs);
locationInput.addEventListener('input', filterJobs);

// Add event listeners to dropdowns
dropdowns.forEach((dropdown, index) => {
    const items = dropdown.querySelectorAll('.items');
    const output = dropdown.querySelector('.output');

    items.forEach(item => {
        item.addEventListener('click', () => {
            output.value = item.textContent; // Set selected value
            selectedFilters[Object.keys(selectedFilters)[index]] = item.textContent;
            filterJobs(); // Filter jobs on selection
        });
    });
});

// Filtering logic
function filterJobs() {
    const title = titleInput.value.toLowerCase();
    const location = locationInput.value.toLowerCase();

    const filteredJobs = jobCards.filter(job => {
        return (
            (title === "" || job.title.toLowerCase().includes(title)) &&
            (location === "" || job.location.toLowerCase().includes(location)) &&
            (selectedFilters.datePosted === "" || job.datePosted === selectedFilters.datePosted) &&
            (selectedFilters.salary === "" || job.salary === selectedFilters.salary) &&
            (selectedFilters.type === "" || job.type === selectedFilters.type) &&
            (selectedFilters.education === "" || job.education === selectedFilters.education) &&
            (selectedFilters.shift === "" || job.shift === selectedFilters.shift)
        );
    });

    displayJobs(filteredJobs);
}

// Display filtered jobs
function displayJobs(filteredJobs) {
    const jobList = document.querySelector('#box-container'); // Assuming a container exists for displaying jobs
    jobList.innerHTML = ""; // Clear previous results

    if (filteredJobs.length === 0) {
        jobList.innerHTML = "<p>No jobs found</p>";
        return;
    }

    filteredJobs.forEach(job => {
        const jobItem = `
           <div class="box">
                <div class="company">
                    <img src="${job.logo}" alt="${job.company}">
                    <div>
                        <h3>${job.company}</h3>
                        <p>${job.postedAgo}</p>
                    </div>
                </div>
                <h3 class="job-title">${job.jobTitle}</h3>
                <p class="location"><i class="fas fa-map-marker-alt"></i> <span>${job.location}</span></p>
                <div class="tags">
                    <p><i class="fas fa-indian-rupee-sign"></i> <span>${job.salary}</span></p>
                    <p><i class="fas fa-briefcase"></i> <span>${job.jobType}</span></p>
                    <p><i class="fas fa-clock"></i> <span>${job.shift}</span></p>
                </div>
                <div class="flex-btn">
                    <a href="view_job.html" class="btn">view details</a>
                    <button type="submit" class="far fa-heart" name="save"></button>
                </div>
            </div>
        `;
        jobList.innerHTML += jobItem;
    });
}

// Initial display of jobs
displayJobs(jobCards);