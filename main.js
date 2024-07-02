async function printdata(){
    const response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    const ruslt = await response.json();
    const data = ruslt.recipes;
    const newprintdata = data.map(function(ele){
        return `
        <div class="category">
        <h2>${ele.title}</h2>
        <img src="${ele.image_url}">
        </div>
        `;


    }).join('');


    document.querySelector('.categorys').innerHTML +=newprintdata;
}
printdata();