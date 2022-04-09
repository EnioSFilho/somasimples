
const btn = document.getElementById('btn')


function soma(){
   
    const n1 = document.getElementById('n1').value
    const n2 = document.getElementById('n2').value
    const resultado = document.getElementById('resultado');
    
      const n3 = parseInt(n1)
      const n4 = parseInt(n2)
      const calc = n3 + n4
    

    resultado.textContent=(calc)

}

btn.addEventListener('click', soma)
