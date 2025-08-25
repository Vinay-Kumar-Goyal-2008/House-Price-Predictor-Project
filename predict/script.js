setInterval(async ()=>{
    await setTimeout(()=>{
        document.querySelector('.heading').style.backgroundColor='lightblue'
        document.querySelector('.heading').style.color='#333333'
    },300)
    document.querySelector('.heading').style.backgroundColor='white'
    document.querySelector('.heading').style.color='black'
},600)
document.querySelector('#home').addEventListener('click',()=>{
    window.location.href='/index.html'
})

document.querySelector('#contact').addEventListener('click',()=>{
    window.location.href='https://vinaykumargoyalportfolio.netlify.app'
})
document.querySelector('#predict').addEventListener('click',()=>{
    window.location.href='/predict/predictindex.html'
})

document.querySelector('.showbutton>button').addEventListener('click',()=>{
    document.querySelector('.form').classList.add('visible')
    document.querySelector('.form').classList.remove('hidden')
    document.querySelector('.showbutton>button').classList.add('hidden')
})

document.querySelector('form').addEventListener('submit',async (e)=>{
    l=['livingarea','basear','firstar','yrbuilt','rebuilt']
    let livingarea=document.querySelector('#livingarea').value
    let basear=document.querySelector('#basear').value
    let firstar=document.querySelector('#firstar').value
    let yrbuilt=document.querySelector('#yrbuilt').value
    let rebuilt=document.querySelector('#rebuilt').value
    l.forEach(element => {
        document.querySelector(`#${element}`).disabled=true
    });
        if (rebuilt<yrbuilt){
            alert('Remodeling Year should not be less than built year')
            e.preventDefault()
        }else{
            e.preventDefault()
            await fetch('https://house-price-predictor-backend-m0r4.onrender.com/submitval',{
                method:'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    livingarea:livingarea,
                    basear:basear,
                    firstar:firstar,
                    yrbuilt:yrbuilt,
                    rebuilt:rebuilt
                })
            }).then((r)=>{
                return r.json()
            }).then((data)=>{
if ( data['status']==200){
                document.querySelector('.answer').innerText=`Predicted House Price:- ${data['ans']}`
                document.querySelector('.answer').style.backgroundColor='lightgreen'
                document.querySelector('.answer').style.color='darkblue'
                document.querySelector('button').disabled=true
            }else{
                document.querySelector('.answer').style.backgroundColor='red'
                document.querySelector('.answer').style.color='white'
                document.querySelector('.answer').innerText=data['desc']
            }
            })
            
        }
})