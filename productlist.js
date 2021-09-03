const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        handleProductList(data);
    });

function handleProductList(data) {
    data.forEach(showProduct);

}

function showProduct(product) {
    console.log(product);

    const template = document.querySelector("#productTemplate").content;

    const copy = template.cloneNode(true);

    copy.querySelector(
        ".brand"
    ).textContent = `${product.articletype} | ${product.brandname}`;
    copy.querySelector("h3").textContent = product.productdisplayname;

    if (product.soldout) {
        copy.querySelector("article").classList.add("ProductSoldOut");
    }

    if (product.discounted) {
        copy.querySelector("article").classList, add(ProductOnSale);
        copy.querySelector(".discounted p").textContent = product.price / product.discount;
    }

    copy.querySelector("img.productImage").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;


    const parent = document.querySelector("main");

    parent.appendChild(copy);
}