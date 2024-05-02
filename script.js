function openTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
      tab.style.display = 'none';
    });
  
    // Show the selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
      selectedTab.style.display = 'block';
    }
  }
  let btn = document.getElementById("btn");
  let btnText = document.getElementById("btnText");
  let btnIcon = document.getElementById("btnIcon");

  btn.onclick = function(){
    document.body.classList.toggle("dark-theme");

    if( document.body.classList.contains("dark-theme")){
      btnIcon.src = "images/sun.png"
      btnText.innerHTML = "Light"
    }else{
      btnIcon.src = "images/moon.png"
      btnText.innerHTML = "Dark"
    }

  }