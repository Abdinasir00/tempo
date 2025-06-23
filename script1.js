// CATEGORY SECTION
const category_api = "https://api.escuelajs.co/api/v1/categories";

function getApi2() {
  return axios.get(category_api)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

function fullApi(category, index) {
  const mainDiv = document.createElement("div");
  mainDiv.className = "collection-card";

  const imageUrl = category.image && category.image.startsWith("http")
    ? category.image
    : `https://picsum.photos/seed/category${index}/300/300`;

  // Default image load
  mainDiv.style.backgroundImage = `url('${imageUrl}')`;

  // Fallback on error
  const testImage = new Image();
  testImage.src = imageUrl;
  testImage.onerror = () => {
    mainDiv.style.backgroundImage = `url('https://picsum.photos/seed/fallbackCat${index}/300/300')`;
  };

  const overlay = document.createElement("div");
  overlay.className = "overlay";

  const span = document.createElement("span");
  span.className = "icon";
  span.innerHTML = "🧭";

  const h3 = document.createElement("h3");
  h3.textContent = category.name;

  const p = document.createElement("p");
  p.textContent = "Explore our collection";

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
    categories.slice(0, 4).forEach((category, index) => {
      const card = fullApi(category, index);
      collectionGrid.appendChild(card);
    });
  });
}

displayCategory();


// PRODUCT SECTION
const API_url = "https://api.escuelajs.co/api/v1/products";

function getApi() {
  return axios.get(API_url)
    .then((response) => response.data)
    .catch((error) => console.log("API Error:", error));
}

function allApi(product, index) {
  const Div = document.createElement("div");
  Div.className = "product";

  const img = document.createElement("img");
  img.src = (product.images && product.images.length > 0 && product.images[0].startsWith("http"))
    ? product.images[0]
    : `https://picsum.photos/seed/product${index}/300/300`;

  img.onerror = function () {
    this.src = `https://picsum.photos/seed/fallback${index}/300/300`;
  };

  const h3 = document.createElement("h3");
  h3.textContent = product.title;

  const p = document.createElement("p");
  p.textContent = product.description.slice(0, 50) + "...";

  const ratingContainer = document.createElement("div");
  ratingContainer.className = "rating-container";

  const spanstar = document.createElement("span");
  spanstar.className = "star";
  spanstar.innerHTML = "&#9733;";

  const spanRating = document.createElement("span");
  spanRating.className = "rating-value";
  spanRating.textContent = "4.9";

  const spanreview = document.createElement("span");
  spanreview.className = "review-count";
  spanreview.textContent = " (89 reviews) ";

  ratingContainer.append(spanstar, spanRating, spanreview);

  const topBox = document.createElement("div");
  topBox.className = "top-box";
  topBox.appendChild(img);
  topBox.appendChild(h3);
  topBox.appendChild(p);
  topBox.appendChild(ratingContainer);

  const button = document.createElement("button");
  button.textContent = "Add To Cart";

  const priceTag = document.createElement("p");
  priceTag.className = "priceTag";
  priceTag.textContent = `$${product.price.toFixed(2)}`;

  const bottomBox = document.createElement("div");
  bottomBox.className = "bottom-box";
  bottomBox.appendChild(button);
  bottomBox.appendChild(priceTag);

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
