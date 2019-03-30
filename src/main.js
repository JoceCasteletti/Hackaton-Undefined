const storesData = window.STORES.stores;
let result = storesData;
function showData(){  
    
for (let i=0; i<storesData.length; i++){
       //console.log(storesData[i].name);
document.getElementById('area').innerHTML += ` 
<div class="col-md-4">
<div class="card" data-toggle="modal" data-target="#exampleModal_${i}">
  <div class="card-image">
  <img src="${storesData[i].img}" class="card-img-top" alt="...">
  </div>
  <div class="card-body">
    <a href="${storesData[i].facebook}"><img id="icon" src="../img/face.png"</img></a>
    <a href="${storesData[i].instagram}"><img id="icon" src="../img/insta.png"</img></a>
    <a href="${storesData[i].maps}"><img id="icon" src="../img/maps.png"</img></a>
    <a href="${storesData[i].web}"><img id="icon" src="../img/www.png"</img></a>
  </div>
</div>
</div>
</div>
<div class="modal fade" id="exampleModal_${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">${storesData[i].name}</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <p="modal-title" id="exampleModalLabel">${storesData[i].description}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>`
}
};


let firstScreen = '\
    <div class="differences">\
    <h3>Rompe los roles, destruye los estereotipos, estimula su creatividad y que tus niñ@s crezcan sin límites</h3>\
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