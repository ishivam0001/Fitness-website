document.getElementById("calculate-btn").addEventListener("click", function() {
    let sex = document.getElementById("sex").value;
    let age = parseInt(document.getElementById("age").value);
    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let activity = parseFloat(document.getElementById("activity").value);
    let goal = document.getElementById("goal").value;

    if (isNaN(age) || isNaN(height) || isNaN(weight)) {
        alert("Please enter valid numbers!");
        return;
    }

    let bmr;

    if (sex === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Mifflin-St Jeor
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161; // Mifflin-St Jeor for women
    }

    let calories = bmr * activity;

    if (goal === "loss") {
        calories -= 500; // Reduce for weight loss
    } else if (goal === "fast-loss") {
        calories -= 1000; // Extreme weight loss
    } else if (goal === "gain") {
        calories += 500; // Increase for weight gain
    } else if (goal === "fast-gain") {
        calories += 1000; // Fast weight gain
    }

    document.getElementById("result").innerText = `Your daily calorie intake should be around ${Math.round(calories)} kcal.`;
});




const reviews = [
    {
        name: "Rahul",
        location: "Maharashtra",
        text: "I've tried dozens of fitness websites, but this one actually keeps me coming back. The personalized workout plans and progress tracker are game-changers. I lost 8 kg in three months.",
        image: "p.jpg"
    },
    {
        name: "Kunal",
        location: "Delhi",
        text: "There guidance helped me throughout my pregnancy journey. Diet plan was amazing and my energy levels were great!",
        image: "p.jpg"
    },
    {
        name: "Aisha",
        location: "Punjab",
        text: "There meal plans are effective and easy to follow. My baby and I are both doing great!",
        image: "p.jpg"
    },
];

let currentIndex = 0;

// Select Elements
const testimonialText = document.getElementById("testimonial-text");
const reviewerName = document.getElementById("reviewer-name");
const reviewerLocation = document.getElementById("reviewer-location");
const reviewerImage = document.getElementById("reviewer-image");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Load Review Data
function loadReview(index) {
    testimonialText.textContent = reviews[index].text;
    reviewerName.textContent = reviews[index].name;
    reviewerLocation.textContent = reviews[index].location;
    reviewerImage.src = reviews[index].image;
}

// Load First Review
loadReview(currentIndex);

// Next Review
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    loadReview(currentIndex);
});

// Previous Review
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    loadReview(currentIndex);
});
