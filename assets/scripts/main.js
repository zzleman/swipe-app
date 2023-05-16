let tabs = document.querySelectorAll(".tabs div");
let males = document.querySelectorAll(".male");
let females = document.querySelectorAll(".female");
let all = document.querySelectorAll(".wrap");

tabs.forEach((tab)=>{
	tab.addEventListener("click", ()=>{
		localStorage.setItem('selectedTab', tab.getAttribute("data-tab"));
		tabs.forEach((tab)=>{
			tab.classList.remove("active");
		})

		tab.classList.add("active");
		let tabName = tab.getAttribute("data-tab");
		all.forEach((item)=>{
			item.style.display = "none";
		})
		if(tabName == "male"){
			males.forEach((male)=>{
				male.style.display = "block";
			})
		}
		else if(tabName == "female"){
			females.forEach((female)=>{
				female.style.display = "block";
			})
		}
		else{
			all.forEach((item)=>{
				item.style.display = "block";
			})
		}
		document.getElementById(this.getAttribute("data-tartabget")).style.display = 'block';
  });
  

});
const storedTab = localStorage.getItem('selectedTab');
if (storedTab) {
  const selectedTab = document.querySelector(`[data-tab="${storedTab}"]`);
  if (selectedTab) {
    selectedTab.classList.add('active');
    all.forEach((item) => {
      item.style.display = "none";
    });
    if (storedTab == "male") {
      males.forEach((male) => {
        male.style.display = "block";
      });
    } else if (storedTab == "female") {
      females.forEach((female) => {
        female.style.display = "block";
      });
    } else {
      all.forEach((item) => {
        item.style.display = "block";
      });
    }
  }
} else {
  tabs[0].classList.add('active');
  all.forEach((item) => {
    item.style.display = "block";
  });
}
