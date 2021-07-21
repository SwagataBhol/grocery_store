// get values

let form=document.getElementById("form")

var tt=document.getElementById('tt');
tt.textContent=0;
let outer=document.getElementById("container")

form.addEventListener("submit",addItem)
var t=0;
function addItem(e){

    e.preventDefault()
    let itemname=document.getElementById("itemname").value
    let unit=document.getElementById("quantity").value
    let price=document.getElementById("price").value
    
    
    let inner=document.createElement("div")
    let item=document.createElement("div")
    let num=document.createElement("div")
    let value=document.createElement("div")
    let total=document.createElement("div")
    let button=document.createElement("button") //delete
    let edit=document.createElement("button") //edit
    
    // button.id="delete"
    inner.className='show'
    item.textContent=itemname
    num.textContent=unit
    value.textContent=price
    total.textContent=unit*price
    button.textContent="x"
    edit.textContent="edit"
    
    
    inner.appendChild(edit) //edit
    inner.appendChild(item)
    inner.appendChild(num)
    inner.appendChild(value)
    inner.appendChild(total)
    inner.appendChild(button) //delete
    outer.appendChild(inner)
    var temp=0;
tt.textContent=parseInt(tt.textContent)+ parseInt(total.textContent);
console.log(tt.textContent)
button.addEventListener("click",function(e){
    e.preventDefault()
    tt.textContent=parseInt(tt.textContent)-parseInt(inner.childNodes[4].textContent)
    outer.removeChild(inner)
    inner.removeChild(button)
})
edit.addEventListener("click",(e)=>{
    e.preventDefault()
    if(e.target.textContent=='edit')
    {
    inner.childNodes[1].contentEditable=true
    inner.childNodes[2].contentEditable=true
    inner.childNodes[3].contentEditable=true
    temp=parseInt(inner.childNodes[4].textContent);
    e.target.textContent='save'
    }
    else{
        inner.childNodes[1].contentEditable=false
        inner.childNodes[2].contentEditable=false
        inner.childNodes[3].contentEditable=false
        tt.textContent=parseInt(tt.textContent)+parseInt((inner.childNodes[2].textContent*inner.childNodes[3].textContent)-temp)
        e.target.textContent='edit'
    }

    
    
})

}





