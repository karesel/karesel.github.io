function addrow() {
    let lotsbox = document.getElementById('lots');
    let pricebox = document.getElementById('price');
    let tablebody = document.querySelector('tbody');

    if (Number.isNaN((parseInt(lotsbox.value))) || Number.isNaN((parseInt(pricebox.value)))) {
        alert('Please enter valid numbers');
        return;
    }

    let newtr = document.createElement('tr');
    newbutton = document.createElement('button');
    newbutton.innerHTML = 'delete';
    newbutton.addEventListener("click", (ev) => {
        ev.currentTarget.parentNode.remove()
        calculateavg()
    });

    let newtrlots = document.createElement('td');
    newtrlots.innerText = lotsbox.value;
    newtr.appendChild(newtrlots);

    let newtrprice = document.createElement('td');
    newtrprice.innerText = pricebox.value;
    newtr.appendChild(newtrprice);

    newtr.appendChild(newbutton)
    tablebody.appendChild(newtr);

    lotsbox.value = "";
    pricebox.value = "";
    lotsbox.focus();

    calculateavg();
}

function calculateavg() {
    let avgcell = document.getElementById('avg');
    let rows = document.querySelector('tbody').querySelectorAll('tr');
    if (rows.length == 0) {
        avgcell.innerText = "";
        return;
    }

    let sum = 0;
    let totallots = 0;
    for (let i = 0; i < rows.length; i++) {
        rowlots = (parseFloat(rows[i].innerText.split('\t')[0]));
        roworice = (parseFloat(rows[i].innerText.split('\t')[1]));
        sum += (rowlots * roworice);
        totallots += rowlots;
    }
    avgcell.innerText = (sum / totallots).toFixed(2);
}