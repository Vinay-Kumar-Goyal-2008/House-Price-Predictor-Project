setInterval(async () => {
    await setTimeout(()=>{
        document.querySelector('.titlecaption').style.color='red'
        document.querySelector('.disclaimer>b').style.color='yellow'
    },300)
    document.querySelector('.disclaimer>b').style.color='red'
    document.querySelector('.titlecaption').style.color='Teal'
}, 600);

document.querySelector('#home').addEventListener('click',()=>{
    window.location.href='/mainindex.html'
})

document.querySelector('#contact').addEventListener('click',()=>{
    window.location.href='https://vinaykumargoyalportfolio.netlify.app'
})
document.querySelector('#predict').addEventListener('click',()=>{
    window.location.href='/predict/predictindex.html'
})
