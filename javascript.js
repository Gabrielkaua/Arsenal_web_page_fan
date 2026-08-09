const primeira = document.querySelectorAll('.hidden');


const myObserver = new IntersectionObserver((entries) =>{

    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');
            console.log('funcionando');
        }else{
            entry.target.classList.remove('show');
            entry.target.classList.add('hidden');

        }
    })

})

primeira.forEach((element)=>{
    myObserver.observe(element)
})


const t = document.querySelectorAll('.transforma');



const n = new IntersectionObserver((e) => {
    e.forEach((o)=>{
        if(o.isIntersecting){
            o.target.classList.add('show');
            o.target.classList.remove('hidden');
        }else{
            o.target.classList.add('hidden');
            o.target.classList.remove('show');
        }
    })
})

t.forEach((i)=>{
    n.observe(i);
})

//scrollIntoView()
/*
é um método do JavaScript que faz a pagina rolar até um elemento especifico
*/

const historyLink = document.querySelector("#history-link"); //link menu
const historySection = document.querySelector("#history"); // seção da historia

historyLink.addEventListener("click", function(e){ //sempre que o usuario clicar, essa função sera executada
e.preventDefault(); // não execute a ação padrão desse link

setTimeout(()=>{
    historySection.scrollIntoView({
        behavior:"smooth",
    });
}, 500) //apos um segundo a tela desce

})