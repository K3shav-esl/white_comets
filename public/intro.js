console.log('script working')

function delayFunction(){
    setTimeout(() => {
        const introName = document.getElementById('introName')
        const introWelcome = document.getElementById('introWelcome')
        introName.parentNode.removeChild(introName)
        introWelcome.parentNode.removeChild(introWelcome)
        console.log('element removed')
    }, 10000);
}

delayFunction()

setTimeout(() => {
    location.href = '/Main'
}, 10500);