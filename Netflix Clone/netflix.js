window.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
        document.getElementById("nav-bar").style.backgroundColor = "black";
    }
    else{
        document.getElementById("nav-bar").style.backgroundColor = "";
    }
});

const arr = ['pictures/posters/1899.jfif' , 'pictures/posters/Money Heist.jfif' , 'pictures/posters/sabrina.jfif' , 'pictures/posters/sandman.jfif' , 'pictures/posters/wednesday.jfif' , 'pictures/posters/witcher.jfif' , 'pictures/posters/you.jfif'];

const card = document.getElementsByClassName('poster')
Array.from(card).forEach((e)=>{
    arr.forEach((element)=>{
        const node = document.createElement("img");
        node.src = element;
    
        node.style.width = "160px";
        node.style.height = "160px";
    
        e.appendChild(node);
    })
})




