﻿export class StarRatingView {

    constructor(element) {
        this.element = element;
        this.inputElement = element.querySelector("input");

        this.createUI();
        this.listenForStarMouseEvents();
    }

    createUI() {
        const min = parseInt(this.inputElement.min, 10);
        const max = parseInt(this.inputElement.max, 10);
        this.starElements = [];
        for (let rating = min; rating <= max; rating++) {
            const starElement = this.createStarElement(rating);
            this.element.appendChild(starElement);
            this.starElements.push(starElement);
        }

        this.inputElement.style.display = "none";
    }

    createStarElement(rating) {
        const starElement = document.createElement("div");
        starElement.setAttribute("class", "star");
        starElement.ratingValue = rating;
        return starElement;
    }

    listenForStarMouseEvents() {
        this.element.addEventListener("click", this.starClicked.bind(this), false);
        this.element.addEventListener("mouseover", this.starMousedOver.bind(this), false);
        this.element.addEventListener("mouseout", this.starMousedOut.bind(this), false);
    }

    starClicked(e) {
        const element = e.srcElement || e.target;
        if (!element.classList.contains("star")) return;

        this.setRating(element.ratingValue);
    }

    starMousedOver(e) {
        const element = e.srcElement || e.target;
        if (!element.classList.contains("star")) return;

        this.setHoverState(element.ratingValue);
    }

    starMousedOut(e) {
        const element = e.srcElement || e.target;
        if (!element.classList.contains("star")) return;
        this.removeHoverStates();
    }

    setHoverState(rating) {
        for (let i = 0; i < rating; i++) {
            this.starElements[i].classList.add("hover");
        }
    }

    removeHoverStates() {
        for (let i = 0, length = this.starElements.length; i < length; i++) {
            this.starElements[i].classList.remove("hover");
        }
    }

    setRating(rating) {
        this.inputElement.value = rating;

        let index;
        const max = this.starElements.length;
        for (index = 0; index < rating; index++) {
            this.starElements[index].classList.add("selected");
        }
        for (index = rating; index < max; index++) {
            this.starElements[index].classList.remove("selected");
        }
    }
}
