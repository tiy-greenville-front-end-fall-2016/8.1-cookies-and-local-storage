
/**
 * Cookies
 */

// See all cookies
console.log(document.cookie);

// Set a cookie
document.cookie = "chocolate_chip=yes";

// Read a cookie
console.log(document.cookie);

document.cookie = "oatmeal_raisin=yes";

// Read cookies again
console.log(document.cookie);

var cookies = document.cookie.split(';');

for(var i=0; i<cookies.length; i++){
  console.log(cookies[i].split('=')[0], cookies[i].split('=')[1]);
}

console.log(Cookies.get('oatmeal_raisin'));

/**
 * Local Storage
 */

localStorage.setItem('favorite', 'chocolateChip');

console.log(localStorage.getItem('favorite'));

localStorage.removeItem('favorite');

var car = {
  wheels: 4,
  doors: 2
};

localStorage.setItem('car', JSON.stringify(car));

console.log(localStorage.getItem('car'));

var myCar = JSON.parse(localStorage.getItem('car'));

console.log(myCar);
