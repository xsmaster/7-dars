let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];

let container = document.getElementById('container');

let elements = data.map(num => {
    let element = document.createElement('h1');
    element.textContent = num;
    
 
    if (num > 50) {
        element.style.backgroundColor = "green"
        element.style.color = "white"
        element.style.textAlign = 'center'
    } else {
        element.style.backgroundColor = "red"
        element.style.color = "white"
        element.style.textAlign = 'center'
    }
    
    return element;
});


elements.forEach(el => {
    document.body.appendChild(el)
});