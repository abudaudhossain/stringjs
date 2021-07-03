let reset = document.createElement('button');
reset.addEventListener('click',Rset);
reset.textContent = 'Reset';
document.body.append(reset);

let solution = document.createElement('button');
solution.textContent = 'Show solution';

solution.style.margin ='12px';
document.body.append(solution);

const list = document.querySelector('.output ul');
list.innerHTML = "";

let greeting = ['Happy Birthday',
                'Merry Christmas my love',
                'A happy Christmas to all family',
                'You\'re  all I want for Christmas',
                'Get well soon'];

for(let i = 0; i < greeting.length; i++) {
    let input = greeting[i];
    if(greeting[i]) {
        let listItem = document.createElement('li');
        listItem.textContent = input;
        // listItem.style.textDecoration = "none";
        list.appendChild(listItem);''
    }
}




function show_output(){
    list.innerHTML = "";

    for(let i = 0; i < greeting.length; i++){
        let input = greeting[i];
        if(greeting[i].indexOf('Christmas') !== -1 ) {
            let result = input;
            let listItem = document.createElement('li');
        listItem.textContent = input;
        // listItem.style.textDecoration = "none";
        list.appendChild(listItem);
        }
    }

    solution.textContent = 'hedden solution';
    solution.addEventListener('click',Rset);
}

function Rset() {
    list.innerHTML = "";

    for(let i = 0; i < greeting.length; i++) {
    let input = greeting[i];
    if(greeting[i]) {
        let listItem = document.createElement('li');
        listItem.textContent = input;
        // listItem.style.textDecoration = "none";
        list.appendChild(listItem);
    }
}
document.body.append(solution);

solution.addEventListener('click',show_output);
solution.textContent = 'Show solution';



}
