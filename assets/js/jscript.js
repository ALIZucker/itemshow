//variable
const tableRow = document.getElementById('createtable');
const Username = document.getElementById('nameuser');
const mobile = document.getElementById('mobile');
const man = document.getElementById('man');
const woman = document.getElementById('woman');

//main Code

const customer = defultValue()
showTable(customer)

//function
function addPerson() {
    let p;
    if (man.checked) {
        p = createPerson(Username.value, mobile.value, "assets/image/pic5.jpg")
    } else {
        p = createPerson(Username.value, mobile.value, "assets/image/pic6.jpg")
    }
    customer.push(p)
    showTable(customer)
}

function defultValue() {
    const customer = []
    customer.push(createPerson("Chris Hemsworth", "+989372642124", "assets/image/pic1.jpg"))
    customer.push(createPerson("Anne Hathaway", "+98935412124", "assets/image/pic2.jpg"))
    customer.push(createPerson("Cillian Murphy", "+989372674584", "assets/image/pic4.jpg"))
    customer.push(createPerson("angelina jolie", "+989314273654", "assets/image/pic3.jpg"))
    return customer;
}

function createPerson(name, number, addressimg) {
    let person = {FirstName: "", phone: "", srcimg: ""};
    person.FirstName = name;
    person.phone = number;
    person.srcimg = addressimg;

    return person;
}

function showTable(myCustom) {

    textStr = `<table class=\"tabledy\"> <tr class=\"headertable\">
<th>Id</th> <th>Photo</th><th>Name</th><th>Mobile</th><th>button</th>
</tr>`
    myCustom.forEach((value, index) => {
        textStr += `<tr class="table-r" ><td><span>${index + 1}</span></td>
                <td class=" py-3 lg:pl-[2vw]"><img class="table-image"
                                                  src="${value.srcimg}"></td>
                 <td><span>${value.FirstName}</span></td>
                <td><span>${value.phone}</span></td>
                  <td><img class="table-trush" src="assets/image/bin.png"></td>
</tr> \n`

    });
    textStr += ` </table>`
    console.log(textStr)
    tableRow.innerHTML = textStr
}