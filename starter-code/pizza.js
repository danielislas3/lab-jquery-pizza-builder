// Write your Pizza Builder JavaScript in this file.
//sujetamos llo que vamos a ocupar
const pizza= document.querySelector('#pizza')
const peperoni= document.querySelectorAll('.pep')
const champ= document.querySelectorAll('.mushroom')
const chile= document.querySelectorAll('.green-pepper')
const gluten= document.querySelector('.crust-gluten-free')
const salsa= document.querySelector('.sauce-white')


//botones
const btnPeperoni=document.querySelector('.btn-pepperonni')
const btnChamp=document.querySelector('.btn-mushrooms')
const btnChile=document.querySelector('.btn-green-peppers')
//botones de salsa y glueten
const btnGluten=document.querySelector('.btn-crust')
const btnSalsa=document.querySelector('.btn-sauce')


//funcion principal para ingredientes
const fIngredients=(boton,elem)=>{
  boton.onclick = e =>{
    elem.forEach(e=>{
      if( e.style.visibility == "visible" ){
        e.style.visibility = "hidden"  
        boton.classList.remove("active");//boton animacion
      } else {       
          e.style.visibility = "visible"  
          boton.classList.add("active");//boton animacion
      }
    })
  }
}
const fMasa =(boton,ingrediente,clase)=>{
  boton.onclick = e =>{
    if( ingrediente.classList.item(1) == clase ){
      ingrediente.classList.remove(clase);
    boton.classList.remove("active");//boton animacion
    } else {       
      ingrediente.classList.add(clase); 
      boton.classList.add("active");//boton animacion

    }
  
}}

fIngredients(btnPeperoni,peperoni)
fIngredients(btnChamp,champ)
fIngredients(btnChile,chile)

//funcion para desaparecer la Salsa
btnSalsa.onclick = e =>{
    if( salsa.classList.item(1) == "sauce-white" ){
    salsa.classList.remove("sauce-white");
    btnSalsa.classList.remove("active");//boton animacion
    } else {       
      salsa.classList.add("sauce-white"); 
      btnSalsa.classList.add("active");//boton animacion

    }
}
fMasa(btnSalsa,salsa,"sauce-white")
fMasa(btnGluten,gluten,"crust-gluten-free")








