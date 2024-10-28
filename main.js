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

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const tr = document.createElement("tr");
const th_firstname1 = document.createElement("th");
const th_lastname = document.createElement("th");
const married = document.createElement("th");
const pet = document.createElement("th");

document.body.appendChild(table);
table.appendChild(thead);
thead.appendChild(tr);
tr.appendChild(th_lastname);
tr.appendChild(th_firstname1);
tr.appendChild(pet);
tr.appendChild(married);
table.appendChild(tbody);


th_firstname1.innerHTML = "Keresztnév";
th_lastname.innerHTML = "Vezetéknév";
married.innerHTML = "Házas-e";
pet.innerHTML = "Állat";
th_firstname1.colSpan = 2;



for (const pers of array) {
    const tr_body = document.createElement('tr');

    tr_body.addEventListener('click', function(e) {
        const selected_row = tbody.querySelector(".selected");
        if (selected_row != undefined) {
            selected_row.classList.remove('selected');
        }
        console.log("click");
        e.currentTarget.classList.add('selected');
    });
    tbody.appendChild(tr_body);
    const td_lastname = document.createElement('td');
    tr_body.appendChild(td_lastname);
    td_lastname.innerHTML = pers.lastname;
    

    const td_firstname1 = document.createElement('td');
    td_firstname1.innerHTML = pers.firstname1;
    tr_body.appendChild(td_firstname1);

    if (pers.firstname2 === undefined) {
        td_firstname1.colSpan = 2;
        } else {
            const td_firstname2 = document.createElement('td');
            td_firstname2.innerHTML = pers.firstname2;
            tr_body.appendChild(td_firstname2);
        }
    
    const td_pet = document.createElement('td');
    td_pet.innerHTML = pers.pet;
    tr_body.appendChild(td_pet);


    const td_married = document.createElement('td');
    td_married.innerHTML = pers.married ? 'Igen' : 'Nem';
    tr_body.appendChild(td_married);
    
    
}

    