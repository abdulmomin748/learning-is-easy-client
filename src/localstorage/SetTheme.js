// // On page load or when changing themes, best to add inline in `head` to avoid FOUC
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark')
//   } else {
//     document.documentElement.classList.remove('dark')
//   }
  
//   // Whenever the user explicitly chooses light mode
//   localStorage.theme = 'light'
  
//   // Whenever the user explicitly chooses dark mode
//   localStorage.theme = 'dark'
  
//   // Whenever the user explicitly chooses to respect the OS preference
//   localStorage.removeItem('theme')

const check = document.getElementById('check')
if(localStorage.getItem('darkMode') === null){
    localStorage.setItem('darkMode', false)
}

checkStatus();
function checkStatus() {
    if(localStorage.getItem('darkMode') === "true"){
        check.checked = true;
    }else{
        check.checked = false;
    }
}


function changeStatus () {
    if(localStorage.getItem('darkMode') === "true"){
        localStorage.setItem('darkMode', false);
    }else{
        localStorage.setItem('darkMode', "true");

    }
}