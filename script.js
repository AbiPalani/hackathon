function show(){
var pop =setTimeout(() => {
const popup= document.createElement("div");
popup.setAttribute("id","overlay");
popup.setAttribute("class","active");
document.body.append(popup);

const img= document.createElement("div");
img.setAttribute("class","popupmenu");
img.innerHTML=`<img src="https://cataas.com/cat/595f280c557291a9750ebf80">`;
document.body.append(img);},2000);
};

const search = document.createElement("div")
search.setAttribute("class","search")
search.innerHTML=`
<div class="topnav">
    <p> CAT LISTS </P>
    <input type="text" name="searchBar" id="searchBar" placeholder="Search.." >
</div>`;
document.body.append(search);

const searchBar=document.getElementById('searchBar');
let catsinfo=[];
console.log(searchBar);
searchBar.addEventListener('keyup',(e) => {
    const searchCats=e.target.value;
    const filteredCats=catsinfo.filter(inf0=> {
        return info.tags.includes(searchCats);
    });
  catsList(filteredCats);
});


async function getList() {
    try{
    const data = await fetch("https://cataas.com/api/cats");
    let catsinfo = await data.json();
    console.log(catsinfo);
    catsinfo.forEach((catsinfo) => catsList(catsinfo));
    }
    catch(err)
    {
        console.error(err);
    }
}
function catsList({id,created_at,tags}){
    const info = document.createElement("div");
    info.setAttribute("class","catapi")
    info.innerHTML=`
    <div class="container">
    <div class="image-container">
    <img class="image" src="https://cataas.com/cat/${id}" width="75px" height="75px">
    </div>
    <div class="create-date">
    <p>Created at:  ${created_at}</p>
    </div>
    <div class="tags-container">
    <p>Kind:  ${tags}</p>
    </div>    
    </div>`;
    document.body.append(info);
}
getList();



