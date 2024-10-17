let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]

const table = document.createElement('table')
document.body.appendChild(table)

const tablehead = document.createElement('thead')
table.appendChild(tablehead)

const tableheadrow = document.createElement('tr')
tablehead.appendChild(tableheadrow)

const th = document.createElement('th')
tableheadrow.appendChild(th)

const th2 = document.createElement('th')
tableheadrow.appendChild(th2)

const th3 = document.createElement('th')
tableheadrow.appendChild(th3)

const th4 = document.createElement('th')
tableheadrow.appendChild(th4)

const tablebody = document.createElement('tbody')
table.appendChild(tablebody)

th.innerHTML="Veznev"
th2.innerHTML="Kernev"
th2.colSpan = 2
th3.innerHTML="Házas-e"
th4.innerHTML="Háziállat"



const form = document.getElementById('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const lastname = document.getElementById("lastname") 
    const firstname = document.getElementById("firstname1") 
    const firstname2 = document.getElementById("firstname2") 
    const married = document.getElementById("married") 
    const pet = document.getElementById("pet") 
        
    const lastnamevalue = lastname.value
    const firstname1value = firstname.value
    let firstname2value = firstname2.value
    const marriedvalue = married.checked
    const petvalue = pet.value

    if(firstname2value===""){
        firstname2value = undefined
    }


    
    

    if(validatefields(lastname,firstname,pet)){
        const newPerson =
    {
        firstname1: firstname1value,
        firstname2: firstname2value,
        lastname: lastnamevalue,
        married: marriedvalue,
        pet: petvalue

    }

        array.push(newPerson)
        console.log(array)
        
        
        rendertable();
    }





   
})
rendertable();

function validatefields(lastname,firstname1,pet){
    let result = true
    if(lastname.value === ""){
        const apa = lastname.parentElement
        const error =  apa.querySelector(".error")
        error.innerHTML = "kőtelező"
        
        result = false
        
    }

    if(firstname1.value === ""){
        const apa1 = firstname1.parentElement
        const error1 = apa1.querySelector(".error")
        error1.innerHTML = "kőtelező"
    
        result = false
    }


    if(pet.value === ""){
        const apa2 = pet.parentElement
        const error2 = apa2.querySelector(".error")
        error2.innerHTML = "kőtelező"    
    
        result = false
    }
    return result
}





function rendertable(){
    tablebody.innerHTML = "";

        for(const person of array){
            const tr = document.createElement('tr')
            const lastname = document.createElement('td')
            tablebody.appendChild(tr)
            tr.appendChild(lastname)
            lastname.innerHTML = person.lastname
            const firstname = document.createElement('td')
            tablebody.appendChild(tr)
            tr.appendChild(firstname)
            firstname.innerHTML = person.firstname1
            
            
            tablebody.appendChild(tr)
            
            tr.addEventListener('click',function(e){
                console.log('click')
                
        
                const ez = tablebody.querySelector('.selected')
                if(ez!=undefined){
                    ez.classList.remove('selected')
                }
                e.currentTarget.classList.add('selected')
            })
        
            if(person.firstname2===undefined){
                firstname.colSpan = 2
            }
            else{
                const firstname2 = document.createElement('td')
                firstname2.innerHTML = person.firstname2
                tr.appendChild(firstname2)
        
            }
        
        
            const married = document.createElement('td')
            tablebody.appendChild(tr)
            tr.appendChild(married)
            married.innerHTML = person.married
        
            if(person.married === true){
                married.innerHTML = "igen"
            }else{
                married.innerHTML = "nem"
            }
            
        
            const pet = document.createElement('td')
            tablebody.appendChild(tr)
            tr.appendChild(pet)
            pet.innerHTML = person.pet
            
        }

}