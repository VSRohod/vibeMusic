var btnPlayFooter = $("#btnPlayFooter");
var btnPlayModal = $(".btnPlayModal");
var tempoDaMusica = 10000;

btnPlayFooter.on('click', function(){
    if(btnPlayFooter.hasClass("play")){
        document.querySelector("#btnPlayFooter").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="whitesmoke" class="bi bi-pause-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/></svg>`;
        document.querySelector(".btnPlayModal").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="black" class="bi bi-pause-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/></svg>`;
        document.querySelector("#btnPlayFooter").classList.replace("play","pause");
        
        $(".progress-bar").animate({width : "100%"},{duration : tempoDaMusica});
    }else{
        document.querySelector("#btnPlayFooter").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="whitesmoke" class="bi bi-play-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/></svg>`;
        document.querySelector(".btnPlayModal").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="black" class="bi bi-play-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/></svg>`;
        document.querySelector("#btnPlayFooter").classList.replace("pause","play");
        $(".progress-bar").stop();
    }
});

btnPlayModal.on('click', function(){
    if(btnPlayModal.hasClass("play")){
        document.querySelector("#btnPlayFooter").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="whitesmoke" class="bi bi-pause-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/></svg>`;
        document.querySelector(".btnPlayModal").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="black" class="bi bi-pause-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/></svg>`;
        document.querySelector(".btnPlayModal").classList.replace("play","pause");
        
        $(".progress-bar").animate({width : "100%"},{duration : tempoDaMusica});
    }else{
        document.querySelector(".btnPlayModal").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="black" class="bi bi-play-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/></svg>`;
        document.querySelector("#btnPlayFooter").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="whitesmoke" class="bi bi-play-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/></svg>`;
        document.querySelector(".btnPlayModal").classList.replace("pause","play");
        $(".progress-bar").stop();
    }
});