const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
const productsURL = `https://qmsbtkywuyypiccoicuh.supabase.co/rest/v1/vildmadData?category=eq.${category}`;

fetch(productsURL, {
  method: "GET",
headers: {
apikey:
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtc2J0a3l3dXl5cGljY29pY3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MTIwNjIsImV4cCI6MjAyMzM4ODA2Mn0.ruBzrTmBPlUx5T2mRJdyOT7s0dFnzWJ2DGvaUyf8dQg",
},
})
.then((res) => res.json())
.then(showData);

function showData(dataset) {
  // Looper og kalder funktionen showProduct
  dataset.forEach(showProduct);

  // ændre overskrift
  document.querySelector("#category_titel").textContent = category;

}

// tager fat i seasons (tal array) udskrifter den med måned navn og retunere det som text streng med "," imellem
function showSeasons(seasons) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const monthList = seasons.map((monthNumber) => monthNames[monthNumber]);
    return monthList.join(", ");
}

function showProduct(data) {
  console.log(data);
  // Fang element
  dataTemplate = document.querySelector("#categoryTemplate").content;

  // Lav en kopi
  dataClone = dataTemplate.cloneNode(true);

// Data
dataClone.querySelector(".title").textContent = data.title;
dataClone.querySelector(".sankelandskab").textContent = data.sankelandskab_title;
dataClone.querySelector(".seasons").textContent = showSeasons(data.seasons);
dataClone.querySelector(".info").textContent = data.category_info
dataClone.querySelector("img").src = data.img;


// Appende
productList = document.querySelector(".productList");
productList.appendChild(dataClone);
}


/* const urlParams = new URLSearchParams(window.location.search);
const productsURL = "https://qmsbtkywuyypiccoicuh.supabase.co/rest/v1/vildmadData";

   
fetch(productsURL, {
  method: "GET",
headers: {
apikey:
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtc2J0a3l3dXl5cGljY29pY3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MTIwNjIsImV4cCI6MjAyMzM4ODA2Mn0.ruBzrTmBPlUx5T2mRJdyOT7s0dFnzWJ2DGvaUyf8dQg",
},
})
.then((res) => res.json())
.then(showData);
 */
/* function showData(dataset) {
 */  // Looper og kalder funktionen showProduct
/*   dataset.forEach(showProduct);
} */

/* function showProduct(data) {
  console.log(data); */
  // Fang element
/*   dataTemplate = document.querySelector("#categoryTemplate").content;
 */
  // Lav en kopi
/*   dataClone = dataTemplate.cloneNode(true);
 */
// Data
/* dataClone.querySelector(".title").textContent = data.title;
dataClone.querySelector(".sankelandskab").textContent = data.sankelandskab_title;
dataClone.querySelector(".seasons").textContent = data.seasons;
dataClone.querySelector(".info").textContent = data.category_info */
/* dataClone.querySelector("img").src = `https://qmsbtkywuyypiccoicuh.supabase.co/rest/v1/vildmadData?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtc2J0a3l3dXl5cGljY29pY3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MTIwNjIsImV4cCI6MjAyMzM4ODA2Mn0.ruBzrTmBPlUx5T2mRJdyOT7s0dFnzWJ2DGvaUyf8dQg${data.id}`; 
 */
// Appende
/* productList = document.querySelector(".productList");
productList.appendChild(dataClone);
}
 */