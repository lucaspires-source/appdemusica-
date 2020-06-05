window.addEventListener("load", ()=>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors= [
        "#60d394",
        "#d3606079",
        "#701881",
        "#e2df08",
        "#042f66",
        "#60b2d3"

    ]

    
    
    //Executar o som aqui
    pads.forEach((pad, index) =>{
        pad.addEventListener("click", function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    //Criar uma função para as bolhas
    const createBubbles = (index) =>{
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation ="jump 1s ease";
        bubble.addEventListener("animationend", function(){
            visual.removeChild(this);
        });
    };
});

