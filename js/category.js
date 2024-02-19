// Fetcher dataen fra URL'en
fetch("https://qmsbtkywuyypiccoicuh.supabase.co/rest/v1/vildmadData?category", {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtc2J0a3l3dXl5cGljY29pY3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MTIwNjIsImV4cCI6MjAyMzM4ODA2Mn0.ruBzrTmBPlUx5T2mRJdyOT7s0dFnzWJ2DGvaUyf8dQg",
  },
})
.then((response) => response.json())
.then(showCategories);

function showCategories(categories) {
    console.log("Categories", categories);

    // Looper og kalder funktionen showCategory
    categories.forEach(showCategory);
}