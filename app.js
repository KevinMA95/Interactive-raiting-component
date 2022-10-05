"use strict";

const ratings = document.querySelectorAll(".rating");
const ratingSelect = document.querySelector(".rating-select");
const feedbackContainer = document.querySelector(".feedback");
const thanksContainer = document.querySelector(".thanks");
const btnSubmit = document.querySelector(".btn-submit");

let ratingNumber;

const getRating = ()=>{
    for(let rating of ratings) {
        rating.addEventListener("click", ()=>{
            ratingNumber = rating.innerText;
        for(let rating of ratings) {
            if(rating.innerText == ratingNumber) {
                rating.classList.add("clicked");
            } else {
                rating.classList.remove("clicked");
            }
        }
        })
    }
}

btnSubmit.addEventListener("click",()=>{
    getRating();
    ratingSelect.innerText = ratingNumber;
    feedbackContainer.classList.add("active");
    thanksContainer.classList.remove("active");
});

getRating();



