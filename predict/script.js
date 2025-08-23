setInterval(async ()=>{
    await setTimeout(()=>{
        document.querySelector('.heading').style.backgroundColor='lightblue'
        document.querySelector('.heading').style.color='#333333'
    },300)
    document.querySelector('.heading').style.backgroundColor='white'
    document.querySelector('.heading').style.color='black'
},600)
document.querySelector('#home').addEventListener('click',()=>{
    window.location.href='/'
})

document.querySelector('#contact').addEventListener('click',()=>{
    window.location.href='https://vinaykumargoyalportfolio.netlify.app'
})
document.querySelector('#predict').addEventListener('click',()=>{
    window.location.href='/predict'
})

document.querySelector('.showbutton>button').addEventListener('click',()=>{
    document.querySelector('.form').classList.add('visible')
    document.querySelector('.form').classList.remove('hidden')
    document.querySelector('.showbutton>button').classList.add('hidden')
})

document.querySelector('form').addEventListener('submit',async (e)=>{
    l=['overallqual','livingarea','garagecap','garagear','basear','firstar','fullbath','totrooms','yrbuilt','rebuilt']
    let overallqual=document.querySelector('#overallqual').value
    let livingarea=document.querySelector('#livingarea').value
    let garagecap=document.querySelector('#garagecap').value
    let garagear=document.querySelector('#garagear').value
    let basear=document.querySelector('#basear').value
    let firstar=document.querySelector('#firstar').value
    let fullbath=document.querySelector('#fullbath').value
    let totrooms=document.querySelector('#totrooms').value
    let yrbuilt=document.querySelector('#yrbuilt').value
    let rebuilt=document.querySelector('#rebuilt').value
    l.forEach(element => {
        document.querySelector(`#${element}`).disabled=true
    });
    if (overallqual>=1 && overallqual<=10){
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
                    overallqual:overallqual,
                    livingarea:livingarea,
                    garagecap:garagecap,
                    garagear:garagear,
                    basear:basear,
                    firstar:firstar,
                    fullbath:fullbath,
                    totrooms:totrooms,
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
    }else{
        alert('Please Enter correct overall finish quality')
    }
})