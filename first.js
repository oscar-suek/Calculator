toggle = document.querySelector('.slider')
calc = document.querySelector('#e1')
theme = document.querySelector('#e2')
p1 = document.querySelector('#p1')
boddy = document.querySelector('#body')
slider = document.querySelector('.slider')
div3 = document.querySelector('#div3')
div2 = document.querySelector('#div2')
num = document.querySelectorAll('.num')
del = document.querySelector('.spe')
reset = document.querySelector('.spe2')
equ = document.querySelector('.equ')

function changeSlider(){
    toggle.addEventListener('input', function(){
        if(toggle.value == '2'){
            calc.style.color = 'hsl(60, 10%, 19%)'
            theme.style.color = 'hsl(60, 10%, 19%)'
            p1.style.color = 'hsl(60, 10%, 19%)'
            boddy.style.backgroundColor = 'hsl(0, 0%, 90%)'
            slider.style.backgroundColor = 'hsl(0, 5%, 81%)'
            slider.style.setProperty('--SliderColor', 'hsl(25, 98%, 40%)')
            div3.style.backgroundColor = 'hsl(0, 5%, 81%)'
            div2.style.backgroundColor = 'hsl(0, 0%, 93%)'
            div2.style.color = 'hsl(60, 10%, 19%)'
            del.style.backgroundColor = 'hsl(185, 42%, 37%)'
            reset.style.backgroundColor = 'hsl(185, 42%, 37%)'
            equ.style.backgroundColor = 'hsl(25, 98%, 40%)'
            del.style.borderColor = 'hsl(185, 58%, 25%)'
            reset.style.borderColor = 'hsl(185, 58%, 25%)'
            equ.style.borderColor = 'hsl(25, 99%, 27%)'
            num.forEach(btn => {
                btn.style.backgroundColor = 'hsl(45, 7%, 89%)'
                btn.style.color = 'hsl(60, 10%, 19%)'
                btn.style.borderColor = 'hsl(35, 11%, 61%)'
            })
            console.log('ddd')
        }
        else if (toggle.value == '3'){
            calc.style.color = 'hsl(52, 100%, 62%)'
            theme.style.color = 'hsl(52, 100%, 62%)'
            p1.style.color = 'hsl(52, 100%, 62%)'
            boddy.style.backgroundColor = 'hsl(268, 75%, 9%)'
            slider.style.backgroundColor = 'hsl(268, 71%, 12%)'  
            slider.style.setProperty('--SliderColor', 'hsl(176, 100%, 44%)') 
            div3.style.backgroundColor = 'hsl(268, 71%, 12%)'
            div2.style.backgroundColor = 'hsl(268, 71%, 12%)' 
            div2.style.color = 'hsl(52, 100%, 62%)' 
            del.style.backgroundColor = 'hsl(281, 89%, 26%)'                   
            reset.style.backgroundColor = 'hsl(281, 89%, 26%)'  
            equ.style.backgroundColor = 'hsl(176, 100%, 44%)' 
            del.style.borderColor = 'hsl(285, 91%, 52%)'                
            reset.style.borderColor = 'hsl(285, 91%, 52%)'
            equ.style.borderColor = 'hsl(177, 92%, 70%)' 
            num.forEach(btn => {
                btn.style.backgroundColor = 'hsl(268, 47%, 21%)'
                btn.style.color = 'hsl(52, 100%, 62%)'
                btn.style.borderColor = 'hsl(290, 70%, 36%)'
            })               
        }
        else if (toggle.value == '1'){
            calc.style.color = 'white'
            theme.style.color = 'white'
            p1.style.color = 'white'
            boddy.style.backgroundColor = 'hsl(222, 26%, 31%)'
            slider.style.backgroundColor = 'hsl(223, 31%, 20%)'
            slider.style.setProperty('--SliderColor', 'hsl(6, 63%, 50%)')
            div3.style.backgroundColor = 'hsl(223, 31%, 20%)'
            div2.style.backgroundColor = 'hsl(224, 36%, 15%)'
            div2.style.color = 'white'
            del.style.backgroundColor = 'hsl(225, 21%, 49%)'
            reset.style.backgroundColor = 'hsl(225, 21%, 49%)'
            equ.style.backgroundColor = 'hsl(6, 63%, 50%)'
            del.style.borderColor = 'hsl(225, 21%, 34%)'
            reset.style.borderColor = 'hsl(225, 21%, 34%)'
            equ.style.borderColor = 'hsl(6, 63%, 35%)'
            num.forEach(btn => {
                btn.style.backgroundColor = 'hsl(45, 7%, 89%)'
                btn.style.color = 'hsl(224, 28%, 30%)'
                btn.style.borderColor = 'hsl(45, 7%, 74%)'
            })  
        }
    })
}

function writeValue(){
    num.forEach(numb => {
        numb.addEventListener('click', function(){
            div2.value += numb.value
        })
    })

    del.addEventListener('click', function(){
        div2.value = div2.value.slice(0,-1)
    })

    reset.addEventListener('click', function(){
        div2.value = ''
    })  
}

function calcValue(){
    equ.addEventListener('click', function(){
        if(div2.value === ''){
            console.log('Nothing to evaluate yet')
        }else{
            x = math.evaluate(div2.value)
            div2.value = x
        }
    })
}

changeSlider()
writeValue()
calcValue()

