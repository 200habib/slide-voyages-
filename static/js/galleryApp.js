let monImage = document.getElementById('monImage');
let mesImage = document.getElementById('mesImage');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let elements = document.querySelectorAll('.thumbnails-container > img');
let thumbnails_container = document.getElementById('thumbnails_container');

let array = ["./static/img/wide/gaby1.jpg","./static/img/wide/gaby2.jpg","./static/img/wide/hiroshima.jpg","./static/img/wide/iceland1.jpg","./static/img/wide/iceland2.jpg"]

let count= 0;
let count2 = 0

const cat = localStorage.getItem("count img");
console.log(cat)

if (cat.trim()!== "") {
    count =cat
    monImage.src= array[count];
}

next.addEventListener('click', function() {
    if (count<4) {
         count++;
    }
    monImage.src= array[count];
    console.log(count);
    localStorage.setItem("count img", count);
});

prev.addEventListener('click', function() {
    if (count>0) {
        count--;
   }
    monImage.src= array[count];
    console.log(count);
    localStorage.setItem("count img", count);
});



array.forEach((element, idx) => {
    console.log(idx);
   let img = document.createElement('img');
    img.src = element;
    thumbnails_container.appendChild(img);
    img.data= count2++
    
    img.addEventListener('click', function() {
        console.log(img.src);
        monImage.src= img.src;
        console.log(img.data)
        count=img.data
        localStorage.setItem("count img", count);
})
});



