  function switchPanel() {
    // get the clock
    var skills = document.getElementById('skills');
    var summary = document.getElementById('summary');

    // get the current value of the clock's display property
    var skillsDisplaySetting = skills.style.display;
    var summaryDisplaySetting = summary.style.display;

    // also get the clock button, so we can change what it says
    var aboutButton = document.getElementById('aboutButton');

    // now toggle the clock and the button text, depending on current state
    if (summaryDisplaySetting == 'block') {
        summary.style.display = 'none'
        skills.style.display = 'block';
        aboutButton.innerHTML = 'Want to know me more?';
    }
    else {
      skills.style.display = 'none';
      summary.style.display = 'block';
      aboutButton.innerHTML = 'Want to see what I can?';
    }
  }