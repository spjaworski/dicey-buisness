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
        nextDie.div.addEventListener('click', () => {
            nextDie.roll();
        })
        nextDie.div.addEventListener('dblclick', () => {
            dieRow.removeChild(nextDie.div);
            removedDie = createdDie.indexOf(nextDie.div.id)
            createdDie.splice(removedDie, 1);
        })
        createdDie.push(nextDie);
        rollButton.addEventListener('click', () => {

            for (const instance in createdDie) {
                nextDie.roll();
            }

        });
    })

    

    let totalbtn = document.createElement('button');
    let totaltext = document.createTextNode("Add all Dice");
    totalbtn.appendChild(totaltext);
    document.body.appendChild(totalbtn);

    totalbtn.addEventListener('click', function() {
        let dieTotal = 0;
        createdDie.forEach(function(die) {
            dieTotal += die.value;
        })
        alert(dieTotal);
    })

})


// Add a feature where double clicking on a die on the page causes that die to be removed from the page

//     Be careful to take appropriate measures so that the sumDice function still reports the correct sum after you delete a die. You need to not only remove the on-screen representation of the Die on the screen, but also remove the Die object from the array as well.
