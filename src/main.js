<<<<<<< Updated upstream
const storesData = window.STORES.stores;
let result = storesData;
function showData(){  
    
for (let i=0; i<storesData.length; i++){
       //console.log(storesData[i].name);
document.getElementById('area').innerHTML += ` 
<div class="col-md-4">
<div class="card" style="width: 18rem;">
  <img src="${storesData[i].img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${storesData[i].name}</h5>
    <p class="card-text">${storesData[i].description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
</div>`
}
};


window.onload=showData();
=======

let firstScreen = '\
    <div class="differences">\
    <h3>Rompe los roles, destuye los estereotipos, estimula su creatividad y que tus niñ@s crezcan sin limites</h3>\
    <div id=playing> <img src="../img/img2.jpg"></div>\
    </div>\
    </div>';


    window.onload = document.getElementById('textarea').innerHTML = firstScreen;   
    const storesData = window.STORES.stores;

    //console.log(storesData[0].id);
    
    let searchli = document.getElementById('search');
    let logoInit = document.getElementById('logoindex');

    logoInit.addEventListener('click', () => {
    document.getElementById('textarea').innerHTML = '';
    document.getElementById('textarea').innerHTML = firstScreen;
  });

    searchli.addEventListener('click')
>>>>>>> Stashed changes
