const carddata = [
    {
        companyName: 'infosys',
        imagesrc: 'https://static.vecteezy.com/system/resources/previews/020/336/451/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg',
        posted: '2 days ago',
        jobTitle: 'Senior web developer',
        location: 'Mumbai, India',
        salary: '3,00,000 - 5,00,000',
        jobType: 'full-time',
        shift: 'Day Shift'
    },
    {
        companyName: 'Accenture',
        imagesrc: 'https://logos-world.net/wp-content/uploads/2020/06/Accenture-Emblem.png',
        posted: '2 days ago',
        jobTitle: 'Qualified developer',
        location: 'Mumbai, India',
        salary: '5,00,000 - 7,00,000',
        jobType: 'Full-time',
        shift: 'Flexible Shifts'
    },
    {
        companyName: 'IESoft Technologies Private Limited',
        imagesrc: 'https://s3.ap-south-1.amazonaws.com/triedgenew/assets/uploads/position/1662467636_WhatsApp%20Image%202022-09-01%20at%2017.30.56.jpeg',
        posted: 'posted today',
        jobTitle: 'Software developer',
        location: 'Work from home',
        salary: '4,00,000 - 6,00,000',
        jobType: 'full-time',
        shift: 'Day Shift'
    },
    {
        companyName: 'Genex Edge Solutions',
        imagesrc: 'https://yt3.googleusercontent.com/LHZ-CpnI3ukDeDZWkdV3yIwPwr7cs3JwRFyvxevFVDDHtHmtQjTiOOjMS1voepznxtCp3R1Q=s900-c-k-c0x00ffffff-no-rj',
        posted: '2 days ago',
        jobTitle: 'Shopify developer',
        location: 'Delhi, India',
        salary: '2,00,000',
        jobType: 'part-time',
        shift: 'Fixed Shift'
    },
    {
        companyName: 'KLJ Resources Limited',
        imagesrc: 'https://media.licdn.com/dms/image/v2/D4D0BAQF27lrBtcuH8Q/company-logo_200_200/company-logo_200_200/0/1680669395027/klj_resources_ltd_logo?e=2147483647&v=beta&t=M2HkEofZPWknuW-Kzm6hrtLFqQVM9M1FIDtlAWALxdY',
        posted: 'posted just now',
        jobTitle: 'Front End Developer',
        location: 'Delhi, India',
        salary: '4,00,000 - 6,00,000',
        jobType: 'full-time',
        shift: 'Day Shift'
    },
    {
        companyName: 'Techmindscape Private Limited',
        imagesrc: 'https://media.licdn.com/dms/image/v2/D560BAQEJx06BWnMRfA/company-logo_200_200/company-logo_200_200/0/1719255827948?e=2147483647&v=beta&t=_IzB3aSvS-QTa3l1YUPPWAAgE22Ghuiupt9EL499sFA',
        posted: '2 days ago',
        jobTitle: 'Reactjs developer',
        location: 'Karnataka',
        salary: '2,40,000 - 3,00,000',
        jobType: 'full-time',
        shift: 'Day Shifts'
    }
];


function createJobCards(dataArray) {
    const container = document.getElementById('box-container');
    
    
    dataArray.forEach(data => {
        const cardHTML = `
            <div class="box">
                <div class="company">
                    <img src="${data.imagesrc}" alt="${data.companyName}">
                    <div>
                        <h3>${data.companyName}</h3>
                        <p>${data.posted}</p>
                    </div>
                </div>
                <h3 class="job-title">${data.jobTitle}</h3>
                <p class="location"><i class="fas fa-map-marker-alt"></i> <span>${data.location}</span></p>
                <div class="tags">
                    <p><i class="fas fa-indian-rupee-sign"></i> <span>${data.salary}</span></p>
                    <p><i class="fas fa-briefcase"></i> <span>${data.jobType}</span></p>
                    <p><i class="fas fa-clock"></i> <span>${data.shift}</span></p>
                </div>
                <div class="flex-btn">
                    <a href="view_job.html" class="btn">view details</a>
                    <button type="submit" class="far fa-heart" name="save"></button>
                </div>
            </div>
        `;
      
        container.innerHTML += cardHTML;
    });
}


createJobCards(carddata);

// Search and Filter Functionality

// Filter jobs based on user input
function filterJobs(dataArray, title, location) {
    return dataArray.filter(job => {
        const matchesTitle = title === '' || 
            job.jobTitle.toLowerCase().includes(title.toLowerCase()) || 
            job.companyName.toLowerCase().includes(title.toLowerCase());
        const matchesLocation = location === '' || 
            job.location.toLowerCase().includes(location.toLowerCase());
        return matchesTitle && matchesLocation;
    });
}

// Render filtered job cards
function renderFilteredJobs() {
    const titleInput = document.querySelector('input[name="title"]').value;
    const locationInput = document.querySelector('input[name="location"]').value;
    const filteredJobs = filterJobs(carddata, titleInput, locationInput);
    const container = document.getElementById('box-container');
    container.innerHTML = ''; // Clear previous results
    createJobCards(filteredJobs); // Render filtered results
}

// Attach event listener to the search button
document.querySelector('input[name="searh"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    renderFilteredJobs();
});
