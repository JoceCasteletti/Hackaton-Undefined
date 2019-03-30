const storesData = window.STORES.stores;
let result = storesData;
function showData(){  
    
for (let i=0; i<storesData.length; i++){
       //console.log(storesData[i].name);
document.getElementById('area').innerHTML += ` 
<div class="col-md-4">
<div class="card" style="width: 18rem; height: 20em">
  <img src="${storesData[i].img}" class="card-img-top" alt="...">
  <div class="card-body">
    <a href="${storesData[i].facebook}"><img id="icon" src="../img/face.png"</img></a>
    <a href="${storesData[i].instagram}"><img id="icon" src="../img/insta.png"</img></a>
    <a href="${storesData[i].maps}"><img id="icon" src="../img/maps.png"</img></a>
    <a href="${storesData[i].web}"><img id="icon" src="../img/www.png"</img></a>
  </div>
</div>
</div>
</div>`
}
};


let firstScreen = '\
    <div class="differences">\
    <h3>Rompe los roles, destuye los estereotipos, estimula su creatividad y que tus niñ@s crezcan sin limites</h3>\
    <div id=playing> <img src="../img/img2.jpg"></div>\
    </div>\
    </div>';


    window.onload = document.getElementById('area').innerHTML = firstScreen;   
    //const storesData = window.STORES.stores;

    //console.log(storesData[0].id);
    
   
    let logoInit = document.getElementById('logoindex');

    logoInit.addEventListener('click', () => {
    document.getElementById('area').innerHTML = '';
    document.getElementById('area').innerHTML = firstScreen;
  });
  let searchStore = document.getElementById('search');
    searchStore.addEventListener('click',() =>{
      document.getElementById('area').innerHTML = '';
    showData();
    });
