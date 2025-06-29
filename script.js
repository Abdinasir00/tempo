
    const category_api = "https://api.escuelajs.co/api/v1/categories";



function getApi2(){
  return axios.get(category_api)
  .then((response) => response.data)
  .catch((error) => console.log(error))
}



    function fullApi(category, index) {
      const mainDiv = document.createElement("div");
      mainDiv.className = "collection-card";

      const imageUrl = category.image && category.image.startsWith("http")
        ? category.image
        : `https://picsum.photos/seed/category${index}/300/300`;
      mainDiv.style.backgroundImage = `url('${imageUrl}')`;

      const overlay = document.createElement("div");
      overlay.className = "overlay";

      const span = document.createElement("span");
      span.className = "icon";

      const moreIcons = ["👕", "🕹️", "🪑", "👟",  "📦", "📱"]; 

  const Icons = moreIcons[index % moreIcons.length];

  span.innerHTML = Icons;

      const h3 = document.createElement("h3");
      h3.textContent = category.name;

      const p = document.createElement("p");
      // p.textContent = category.slug || "No description";

      overlay.appendChild(span);
      overlay.appendChild(h3);
      overlay.appendChild(p);
      mainDiv.appendChild(overlay);

      return mainDiv;
    }

    function displayCategory() {
      getApi2().then((categories) => {
        const collectionGrid = document.querySelector(".collection-grid");
        collectionGrid.innerHTML = "";
       
        //  products.slice(0, 8).forEach((product, index) =>


        categories.slice(0, 4).forEach((category, index) => {
          const card = fullApi(category, index);
          collectionGrid.appendChild(card);
        });
      });
    }

    displayCategory();


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------








const API_url = "https://api.escuelajs.co/api/v1/products";

function getApi() {
  return axios.get(API_url)
    .then((response) => response.data)
    .catch((error) => console.log("API Error:", error));
}



function allApi(product, index) {


/*
<div class="product">
  <div class="top-box">
    <img src="IMAGE_URL" />
    <h3>PRODUCT_TITLE</h3>
    <p>PRODUCT_DESCRIPTION...</p>
    <div class="rating-container">
      <span class="star">&#9733;</span>
      <span class="rating-value">4.9</span>
      <span class="review-count"> (89 reviews) </span>
    </div>
  </div>
  <div class="bottom-box">
    <button>Add To Cart</button>
    <p class="priceTag">$PRICE</p>
  </div>
</div>


*/


// console.log(product.images)

  const Div = document.createElement("div");
  Div.className = "product";

  const img = document.createElement("img");
  img.src = product.images[0]
    // console.log(img)

  const h3 = document.createElement("h3");
  h3.textContent = product.title;

  const p = document.createElement("p");
  p.textContent = product.description.slice(0, 50) + "...";

  const ratingContainer = document.createElement("div");
  ratingContainer.className = "rating-container";

// spans

const spanstar = document.createElement("span");
spanstar.className = "star";
spanstar.innerHTML = "&#9733;";


  const spanRating= document.createElement("span");
  spanRating.className = "rating-value"
  // spanRating.textContent = "4.9"

    const rate = ["6.8", "5.1", "6.5", "9.2", "7.1", "3.5", "2.4" , "9.9"];

    const Rating  = rate[index % rate.length];

     spanRating.innerHTML = Rating;

  const spanreview = document.createElement("span");
  spanreview.className = "review-count";
  // spanreview.textContent = " (89 reviews) "

 const review1 = ["(49 reviews)", "(55 reviews)", "(88 reviews)", "(78 reviews)", "(83 reviews)", " (67 reviews)", "(59 reviews)" , " (98 reviews)"];

 const reviewed = review1[index %review1.length]
  
 spanreview.textContent = reviewed;


  ratingContainer.append(spanstar)
  ratingContainer.append(spanRating)
  ratingContainer.append(spanreview)


  // Top content box
  const topBox = document.createElement("div");

  topBox.className = "top-box";
  topBox.appendChild(img);
  topBox.appendChild(h3);
  topBox.appendChild(p);
  topBox.appendChild(ratingContainer);

  // Bottom content box
  const button = document.createElement("button");
  button.textContent = "Add To Cart";

  const priceTag = document.createElement("p");
  priceTag.className = "priceTag";
  priceTag.textContent = `$${product.price.toFixed(2)}`;

  const bottomBox = document.createElement("div");
  bottomBox.className = "bottom-box";
  bottomBox.appendChild(button);
  bottomBox.appendChild(priceTag);

  // Combine everything
  Div.appendChild(topBox);
  Div.appendChild(bottomBox);

  return Div;
}








function displayApi() {
  getApi().then((products) => {
    const productGrid = document.querySelector(".product-grid");
    productGrid.innerHTML = "";

    products.slice(0, 8).forEach((product, index) => {
      const productElement = allApi(product, index);
      productGrid.appendChild(productElement);
    });
  });
}

displayApi();
