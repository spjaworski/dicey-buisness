$(document).ready(function () {

    let dieButton = document.createElement('button');
    let dieButtonText = document.createTextNode('Generate Die');
    dieButton.appendChild(dieButtonText);
    document.body.appendChild(dieButton);

    let container = document.createElement('div');
    document.body.appendChild(container)
    let dieRow = document.createElement('div');
    dieRow.className = 'row';
    container.appendChild(dieRow);

    let createdDie = [];

    let iter = 1;

    class Die {
        constructor() {
            this.div = document.createElement('div');
            this.value = Math.floor(Math.random() * 6) + 1;
            this.div.className = 'die';
            this.div.id = `die${iter}`;
            dieRow.appendChild(this.div);
            console.log(this);
            console.log(createdDie);
        }

        roll() {


            this.value = Math.floor(Math.random() * 6) + 1;
            this.div.innerHTML = this.value;
            console.log(`The die rolled a ${this.value}.`);
        }
    }




    let rollButton = document.createElement('button');
    let rollText = document.createTextNode('Roll all dice');
    rollButton.appendChild(rollText);
    document.body.appendChild(rollButton);




    dieButton.addEventListener('click', () => {
        const nextDie = new Die();
        iter++;
        nextDie.roll();

        createdDie.push(nextDie);
        rollButton.addEventListener('click', () => {

            for (const instance in createdDie) {
                ;

                nextDie.roll();
            }

        });
    })



})