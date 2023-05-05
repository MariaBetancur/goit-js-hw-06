const gallery = document.querySelector(".gallery");
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat', 
    width: 300,
    height:300
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish', 
    width: 300,
    height:300
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running', 
    width: 300,
    height:300
  },
];

const imageList = images
  .map((img) => `<li><img class="new-images" src="${img.url}" alt="${img.alt}" width="${img.width}" height="${img.height}"></li>`)
  .join("");

gallery.insertAdjacentHTML("beforeend", imageList);



