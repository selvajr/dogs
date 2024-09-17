var arr=[]
async function api_call() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    for (let i = 0; i < 5; i++) {
        const response = await fetch("https://dog.ceo/api/breeds/image/random", requestOptions);
        const data = await response.json();
        arr.push(data.message)
        img=document.getElementById(`img${i}`)
        img.style.backgroundImage=`url(${data.message})`
    }
}
(api_call())


const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}