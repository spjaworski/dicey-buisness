$(document).ready(function (){
 
    let dieButton = document.createElement('button');
    let dieButtonText= document.createTextNode('Generate Die');
    dieButton.appendChild(dieButtonText);
    document.body.appendChild(dieButton);

    let container = document.createElement('div');
    document.body.appendChild(container)
    let dieRow = document.createElement('div');
    dieRow.className = 'row';
    container.appendChild(dieRow);

    createdDie = [];

 let iter = 1;
 
 class Die {
    constructor() {
        this.div = document.createElement('div');
        this.value = Math.floor(Math.random() * 6) + 1
        this.div.className = 'die';
        this.div.id = `die${iter}`;
        dieRow.appendChild(this.div);
        let valueText = document.createTextNode(this.value);
        this.div.appendChild(valueText)
        console.log(this);
        createdDie.push(Die);
        console.log(createdDie);
        iter ++;

        
    }

    rollDie() {
        
    this.value = Math.floor(Math.random() * 6) + 1
    this.valueText = this.value;
    console.log(`The die rolled a ${this.value}.`)

    //won't update on page
    }
    }




// const die1 = new Die();

// die1.rollDie(); 

    dieButton.addEventListener('click', function(){
        new Die();
    })
   
    let rollButton = document.createElement('button');
    let rollText = document.createTextNode('Roll all die');
    rollButton.appendChild(rollText);
    document.body.appendChild(rollButton);

    let protoDie = new Die();

    rollButton.addEventListener('click', function(){
       protoDie.rollDie();
        })
    })



