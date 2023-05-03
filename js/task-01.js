const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('li.item');
const numberCategories = categoriesItems.length;
console.log(`Número de categorías: ${numberCategories}`);

categoriesItems.forEach(item => {
    const categoriesTitle = item.querySelector('h2').textContent;

    const categoriesItems = item.querySelectorAll('li');
    const numberCategoriesItems = categoriesItems.length;
    console.log(`Elements: ${numberCategoriesItems}`);
    console.log(`Category: ${categoriesTitle}`);
});
