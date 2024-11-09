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
];





createHtmlElement("table","perstable", document.body);
createHtmlElementWithParentId("thead","persthead","perstable");
createHtmlElementWithParentId("tr","perstr","persthead");
createHtmlElementWithParentId("tbody","perstbody","perstable");

rendertable(array);

function validatefields(lasthtml,firsthtml,pethtml){
    let result = true
    if(lasthtml.value === ""){
        const parent_element = lasthtml.parentElement;
        const error = parent_element.querySelector('.error');
        error.innerHTML = "Szép munka, de ki kell tölteni";
        
        result = false;

    }
    if(firsthtml.value === ""){
        const parent_element = firsthtml.parentElement;
        const error = parent_element.querySelector('.error');
        error.innerHTML = "Szép munka, de ki kell tölteni";
        result = false;
        
    }
    if(pet.value === ""){
        const parent_element = pethtml.parentElement;
        const error = parent_element.querySelector('.error');
        error.innerHTML = "Szép munka, de ki kell tölteni";
        result = false;
        
    }

    return result;
}


const form = document.getElementById('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const firstname1 = document.getElementById('firstname1');
    const firstname2 = document.getElementById('firstname2');
    const lastname = document.getElementById('lastname');
    const married = document.getElementById('married');
    const pet = document.getElementById('pet');
    const lastnamevalue = lastname.value;


    const firstname1value = firstname1.value;
    let firstname2value = firstname2.value;
    const marriedvalue = married.checked;
    const petvalue = pet.value;
    
    


    
        if(validatefields(lastname,firstname1,pet)){
            if(firstname2value == "" ){
                    firstname2value = undefined;
                }

        const newpers = {
            lastname: lastnamevalue,
            firstname1: firstname1value,
            married: marriedvalue,
            pet: petvalue
        }
        array.push(newpers);
        console.log(array)
        rendertable(array)
        form.reset()
    }
})




