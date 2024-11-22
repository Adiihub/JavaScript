const form = document.querySelector('form')
// this usecase will give you empty
// const weight = parseInt(document.querySelector('#Weight').value)


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.getElementById('Height').value) // values stirng me milti h to parse krenge
    const weight = parseInt(document.querySelector('#Weight').value) // Convert weight to number
    const results = document.querySelector('#results');

    if(height <= 0 || isNaN(height)){
        results.innerHTML = "Please give a Valid Height."
        return;
    }
    else if(weight <= 0 || isNaN(weight)){
        results.innerHTML = "Please give a Valid Weight."
        return;
    }
    results.innerHTML = "";
    const bmi = (weight / height*height).toFixed(2)

    //showing the result
    results.innerHTML = `<span>${bmi}</span>`;
    document.getElementById('Height').value = '';
    document.getElementById('Weight').value = '';

    if(bmi < 18.6){
        results.innerHTML += `<p>Underweight</p>`
    }
    else if(bmi < 24.9){
        results.innerHTML += `<p>Normal Range</p>`
    }
    else{
        results.innerHTML += `<p>Overweight</p>`
    }

})