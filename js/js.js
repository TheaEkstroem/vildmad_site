//https://qmsbtkywuyypiccoicuh.supabase
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtc2J0a3l3dXl5cGljY29pY3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MTIwNjIsImV4cCI6MjAyMzM4ODA2Mn0.ruBzrTmBPlUx5T2mRJdyOT7s0dFnzWJ2DGvaUyf8dQg

/* fetch("https://qmsbtkywuyypiccoicuh.supabase.co/rest/v1/vildmad", {
    method: "GET",
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtc2J0a3l3dXl5cGljY29pY3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MTIwNjIsImV4cCI6MjAyMzM4ODA2Mn0.ruBzrTmBPlUx5T2mRJdyOT7s0dFnzWJ2DGvaUyf8dQg"
    }
})
 */


const urlParams = new URLSearchParams(window.location.search);
const productsURL = `https://qmsbtkywuyypiccoicuh.supabase.co/rest/v1/vildmad?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtc2J0a3l3dXl5cGljY29pY3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MTIwNjIsImV4cCI6MjAyMzM4ODA2Mn0.ruBzrTmBPlUx5T2mRJdyOT7s0dFnzWJ2DGvaUyf8dQg`;

fetch(productsURL)
.then(res =>res.json())
.then(showData)

function showData(data){
    console.log(data);
    data.forEach(item=>{

        klon.querySelector("h2").textContent = item.title;
    })


}

