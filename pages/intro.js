import Router, {useRouter} from "next/router" ;

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
    Router.push('/Main')
}, 10500);