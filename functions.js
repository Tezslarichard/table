/**
 * 
 * @param {'td'|'th'} type 
 * @param {string} tartalom 
 * @param {HTMLTableRowElement} hely 
 * @returns {   HTMLElement}
 */
function automata(type,tartalom,hely){
    const gep = document.createElement(type);
    gep.innerHTML = tartalom;
    hely.appendChild(gep);
    return gep
}
/**
 * 
 * @param {*} tag 
 * @param {*} id 
 * @param {*} parentElement 
 */


function createHtmlElement(tag,id,parentElement){
    const htmlelement = document.createElement(tag);
        htmlelement.id = id;
        parentElement.appendChild(htmlelement);

}

function createHtmlElementWithParentId(tag,id,parentid){
    const htmlelemntwithparentid = document.getElementById(parentid);
    if(htmlelemntwithparentid != undefined){
        createHtmlElement(tag,id,htmlelemntwithparentid);
    }

}


function renderTableHeader(){
    const tableheader = document.getElementById("perstr");
    automata("th","Vezetéknév",tableheader);
    const keresztnev_row = automata("th", "Keresztnév",tableheader);
    keresztnev_row.colSpan = 2
    automata("th","Házas?",tableheader)
    automata("th","állat",tableheader)
    
    
}



function rendertable(persarray){
    const tbody = document.getElementById("perstbody");
    tbody.innerHTML = '';

    for (const pers of persarray) {
        const tr_body = document.createElement('tr');

    
    automata("td",pers.lastname, tr_body)
    const firstname1_cell = automata("td",pers.firstname1,tr_body)

    if (pers.firstname2 === undefined) {
        firstname1_cell.colSpan = 2;
        } else {
            automata("td",pers.firstname2,tr_body)
        }
    

        automata("td", pers.married ? "igen" : "nem", tr_body)
        automata("td", pers.pet, tr_body)


        tbody.appendChild(tr_body);


        tr_body.addEventListener('click', function(e) {
        const selected_row = tbody.querySelector(".selected");
        if (selected_row != undefined) {
            selected_row.classList.remove('selected');
        }
        console.log("click");
        e.currentTarget.classList.add('selected');
    });

    }
}
renderTableHeader();
rendertable(array);






