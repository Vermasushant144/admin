function searchJobs() {
    const searchBox = document.getElementById('searchBox');
    const keywordBox = document.getElementById('keywordBox');
    const searchTerm = (searchBox.value || keywordBox.value).toLowerCase();
    const jobCards = document.querySelectorAll('.job-card');
    let jobCount = 0;
  
    jobCards.forEach(card => {
      const keywords = card.getAttribute('data-keywords').toLowerCase();
      if (keywords.includes(searchTerm)) {
        card.style.display = 'block';
        jobCount++;
      } else {
        card.style.display = 'none';
      }
    });
  
    document.getElementById('jobCount').innerText = jobCount > 0 ? `Showing ${jobCount} Jobs` : 'No Jobs Found';
  }
  

  