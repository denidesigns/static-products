const url = "https://kea-alt-del.dk/t7/api/categories"

fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        handleCategories(data);
    });

function handleCategories(data) {
    data.forEach(showCategory);

}

function showCateogry(categories) {
    console.log(categories);

    const template = document.querySelector("categoriesTemplate").content;

    const copy = template.cloneNode(true);

    copy.querySelector(
        ".Accessories"
    ).textContent = `${product.articletype} | ${categories.cateogry}`;
    copy.querySelector("h3").textContent = categories.category;
}