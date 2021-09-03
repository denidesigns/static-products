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