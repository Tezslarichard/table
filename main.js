const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]
const table = document.createElement("table");
const thead = document.createElement("thead");
const tr = document.createElement("tr")
const td = document.createElement("td")
const th_firstname1 = document.createElement("firstname1");
const th_lastname = document.createElement("lastname");

document.body.appendChild("table");
table.appendChild("thead")
thead.appendChild("tr")
tr.appendChild("td")


th_firstname1.innerHTML = "Keresztnév"
th_lastname.innerHTML = "Vezetéknév"
tr.appendChild(th_firstname1)
tr.appendChild(th_lastname)