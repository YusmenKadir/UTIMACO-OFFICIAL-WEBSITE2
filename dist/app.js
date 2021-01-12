const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const expandBtn = document.querySelectorAll(".expand-btn");

// humburger toggle
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
  // console.log("clicked");
});

// mobile menu expand
expandBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    console.log("clicked");
  });
});

// //COOKIES 
// const cookieStorage = {
//   getItem: (item) => {
//       const cookies = document.cookie
//           .split(';')
//           .map(cookie => cookie.split('='))
//           .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
//       return cookies[item];
//   },
//   setItem: (item, value) => {
//       document.cookie = `${item}=${value};`
//   }
// }

// const storageType = cookieStorage;
// const consentPropertyName = '_ga';
// const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
// const saveToStorage = () => storageType.setItem(consentPropertyName, true);

// window.onload = () => {

//   const acceptFn = event => {
//       saveToStorage(storageType);
//       consentPopup.classList.add('hidden');
//       // console.log('clicked')
//   }
//   const consentPopup = document.getElementById('consent-popup');
//   const acceptBtn = document.getElementById('accept');
//   acceptBtn.addEventListener('click', acceptFn);

//   if (shouldShowPopup(storageType)) {
//       setTimeout(() => {
//           consentPopup.classList.remove('hidden');
//       }, 2000);
//   }

// };




