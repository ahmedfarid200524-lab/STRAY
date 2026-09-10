const testimonials = [
  {
    name: "JAMES C.",
    av:"main-img/av-man.png",
    state: "California",
    product: "product-img/boxytee.png",
    productName: "Essential Boxy Tee",
   testimonial: `The quality is insane. <br>
    The fit is perfect <br>
     and I've already ordered another one.`,
  },
  {
    name: "SOPHIA M.",
    av:"main-img/av-girl (1).png",
    state: "Texas",
    product: "product-img/test1.png",
    productName: "Wide Leg Cargo Pants",
     testimonial: `Super comfortable and premium. <br>
      It feels even better than <br>
       it looks in the photos.`,
  },
  {
    name: "ETHAN B.",
     av:"main-img/av-man.png",
    state: "New York",
    product: "product-img/087366BB-2773-48CC-9217-9842BAD9CB46.png",
    productName: "Boxy Zip Jacket",
    testimonial: `The zipper is easily my favorite detail on this jacket. <br>
     premium look that makes the whole piece stand out. <br>
       people notice it and ask where I got the jacket.`,
  },
  {
    name: "OLIVIA W.",
    av:"main-img/av-girl (1).png",
    state: "Florida",
    product: "product-img/boxy-j-test.png",
    productName: "Boxy Zip Jacket",
    testimonial: `The attention to detail is incredible. <br>
    I've gotten compliments <br>
     every time I wear it.`,
  },
  {
    name: "NOAH A.",
    av:"main-img/av-man.png",
    state: "Illinois",
    product: "product-img/test1.png",
    productName: "Wide Leg Cargo Pants",
     testimonial: `Exactly what I was looking for. <br>
      Premium quality, fast shipping, <br>
      and worth every penny.`,
  },
   {
    name: "AIDEN  F.",
    av:"main-img/av-man.png",
    state: "TORONTO.  CA",
    product: "product-img/test1.png",
    productName: "Wide Leg Cargo Pants",
    testimonial: `The quality is insane. <br>
     You can feel the difference   
    as soon as you put it on. <br>
    STRAY nailed the details`,
  }
  
];
function changetestmoials(){ 

var i = Math.floor(Math.random() * 5);
document.getElementById("TESTIMONIALS").innerHTML=`
  <div class="test-head d-flex justify-content-lg-between justify-content-center">
            <div><h2 class=" text-white fw-bold fs-1">TESTIMONIALS</h2></div>
            <div class="test-head-p">
                <p class="mb-0 text-secondary fs-12">REAL PEOPLE. REAL REVIEWS.</p>
                <p class="mb-0 text-secondary fs-12">STRAY ISN'T JUS CLOTHING.</p>
                <p class="mb-0 text-secondary fs-12 ms-5"> IT'S A MOVEMENT</p>
            </div>
        </div>
        <div class="test-main">
            <div class="test-card">
            <div class="av-det d-flex justify-content-between">
                <div class="d-flex g-5" style="gap: 10px;">
                    <div class="av-img">
                        <img src="${testimonials[i].av}" alt="" class="" style="width: 50px; border-radius: 100px;">
                    </div>
                    <div class="av-name">
                        <p class="text-white mb-0">${testimonials[i].name}</p>
                        <p class="text-secondary mb-0">${testimonials[i].state}</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center me-3">
                    <i class="fa-solid fa-star text-white fs-12"></i>
                    <i class="fa-solid fa-star text-white fs-12"></i>
                    <i class="fa-solid fa-star text-white fs-12"></i>
                    <i class="fa-solid fa-star text-white fs-12"></i>
                    <i class="fa-solid fa-star text-white fs-12"></i>
                </div>
            </div>
           
            <div class="test-dis">
                <p class="fs-6 text-white mt-3 "> ${testimonials[i].testimonial}</p>
            </div>
            <div class="test-product">
                <img src="${testimonials[i].product}" alt="" class="test-product-img"  >
            </div>
            
            <div class="d-flex justify-content-between align-items-center mt-3">
                    <p class="mb-0 text-secondary">${testimonials[i].productName}</p>
                    <i class="fa-solid fa-arrow-up-right-from-square text-secondary"></i>
            </div>
            </div>            
            <div class="test-card-lg">
            <div class="av-det d-flex justify-content-between">
                <div class="d-flex g-5" style="gap: 10px;">
                    <div class="av-img">
                        <img src="${testimonials[i+1].av}" alt="" class="" style="width: 50px; border-radius: 100px;">
                    </div>
                    <div class="av-name">
                        <p class="text-white mb-0">${testimonials[i+1].name}</p>
                        <p class="text-secondary mb-0">${testimonials[i+1].state} </p>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center me-3">
                    <i class="fa-solid fa-star text-white fs-12"></i>
                    <i class="fa-solid fa-star text-white fs-12"></i>
                    <i class="fa-solid fa-star text-white fs-12"></i>
                    <i class="fa-solid fa-star text-white fs-12"></i>
                    <i class="fa-solid fa-star text-white fs-12"></i>
                </div>
            </div>
           
            <div class="test-dis">
                <p class="fs-6 text-white mt-3 "> ${testimonials[i+1].testimonial}</p>
            </div>
            <div class="test-product">
                <img src="${testimonials[i+1].product}" alt="" class="test-product-img"  >
            </div>
            
            <div class="d-flex justify-content-between align-items-center mt-3">
                    <p class="mb-0 text-secondary">${testimonials[i+1].productName}</p>
                    <i class="fa-solid fa-arrow-up-right-from-square text-secondary"></i>
            </div>
            </div>
            <div class="test-card-lg">
            <div class="av-det d-flex justify-content-between">
                <div class="d-flex g-5" style="gap: 10px;">
                    <div class="av-img">
                        <img src="${testimonials[i+2].av}" alt="" class="" style="width: 50px; border-radius: 100px;">
                    </div>
                    <div class="av-name">
                        <p class="text-white mb-0">${testimonials[i+2].name}</p>
                        <p class="text-secondary mb-0">${testimonials[i+2].state}</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center me-3">
                    <i class="fa-solid fa-star text-white fs-12"></i>
                    <i class="fa-solid fa-star text-white fs-12"></i>
                    <i class="fa-solid fa-star text-white fs-12"></i>
                    <i class="fa-solid fa-star text-white fs-12"></i>
                    <i class="fa-solid fa-star text-white fs-12"></i>
                </div>
            </div>
           
            <div class="test-dis">
                <p class="fs-6 text-white mt-3 "> ${testimonials[i+2].testimonial}</p>
            </div>
            <div class="test-product">
                <img src="${testimonials[i+2].product}" alt="" class="test-product-img"  >
            </div>
            
            <div class="d-flex justify-content-between align-items-center mt-3">
                    <p class="mb-0 text-secondary">${testimonials[i+2].productName}</p>
                    <i class="fa-solid fa-arrow-up-right-from-square text-secondary"></i>
            </div>
        </div>

        </div>
        

        </div>
        <div class="change-test">
            <button onclick=" changetestmoials()">MORE</button>
        </div>

       
`
}
const prod_buy = document.querySelectorAll(".product-card");


prod_buy.forEach(function(card) {
  card.addEventListener("click", function() {
    console.log(card);
  });
});



const mainpage= document.getElementById("main-page");
const prodPage = document.getElementById("prod-page");

prod_buy.forEach(function(card) {
  card.addEventListener("click", function(e) {
    // don't trigger when clicking the heart/like icon
    if (e.target.closest(".like")) return;

    const img = card.querySelector(".product-card-img").src;
    const name = card.querySelector(".product-name").textContent;
    const price = card.querySelector(".product-price").textContent;

    // populate the detail page
    prodPage.querySelector(".prod-page-img").src = img;
    prodPage.querySelector("h2").textContent = name;
    prodPage.querySelector("h3").textContent = price;

    // show the detail page
    prodPage.classList.remove("d-none");
    mainpage.classList.add("d-none");
  });
});


const backbtn =document.getElementById("backbtn");

backbtn.addEventListener("click",function(){
    prodPage.classList.add("d-none");
    mainpage.classList.remove("d-none");
});
const size= document.querySelectorAll(".size");
console.log(size);

size.forEach(function(s) {
  s.addEventListener("click", function() {
    size.forEach(function(el) {
      el.classList.remove("active-size");
    });
    s.classList.add("active-size");
  });
});

document.getElementById("contactSubmitBtn").addEventListener("click", function() {
  const nameInput = document.getElementById("contactName");
  const emailInput = document.getElementById("contactEmail");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) {
    alert("Please fill in both name and email.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // At this point name/email are valid — send them somewhere.
  console.log("Submitting:", { name, email });

  // Example: send to a backend endpoint
  // fetch("/api/contact", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ name, email })
  // });

  // Close the modal and reset the form
  const modalEl = document.getElementById("contactModal");
  const modalInstance = bootstrap.Modal.getInstance(modalEl);
  modalInstance.hide();

  nameInput.value = "";
  emailInput.value = "";

  alert("Thanks! We'll be in touch.");
});