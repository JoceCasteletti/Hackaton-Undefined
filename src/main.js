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