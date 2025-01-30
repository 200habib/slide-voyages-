let monImage = document.getElementById('monImage');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let thumbnails_container = document.getElementById('thumbnails_container');

// Array of images
let array = [
    "./static/img/wide/gaby1.jpg",
    "./static/img/wide/gaby2.jpg",
    "./static/img/wide/hiroshima.jpg",
    "./static/img/wide/iceland1.jpg",
    "./static/img/wide/iceland2.jpg",
    "./static/img/wide/japan1.jpg",
    "./static/img/wide/jerusalem.jpg",
    "./static/img/wide/jocelyn.jpg",
    "./static/img/wide/lost.jpg",
    "./static/img/wide/sifnos.jpg"
];


let count = 0;

// Retrieve the saved index from localStorage
const savedCount = localStorage.getItem("count img");
if (savedCount !== null) {
    count = parseInt(savedCount);  // Ensure it's treated as an integer
    monImage.src = array[count];
}

// Event listener for next button
next.addEventListener('click', function() {
    if (count < array.length - 1) {
        count++;
    }
    monImage.src = array[count];
    localStorage.setItem("count img", count);
});

// Event listener for prev button
prev.addEventListener('click', function() {
    if (count > 0) {
        count--;
    }
    monImage.src = array[count];
    localStorage.setItem("count img", count);
});

// Dynamically create thumbnails
array.forEach((element, idx) => {
    let img = document.createElement('img');
    img.src = element;
    img.dataset.index = idx;  // Use data attribute to store the index
    
    // Append to the thumbnails container
    thumbnails_container.appendChild(img);

    // Add event listener for image click
    img.addEventListener('click', function() {
        monImage.src = img.src;
        count = parseInt(img.dataset.index); // Get index from data attribute
        localStorage.setItem("count img", count);
    });
});
