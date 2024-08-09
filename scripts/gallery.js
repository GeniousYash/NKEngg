const images = [
    {
        src: './images/gallery/1.1.jpg',          
    },
    {
        src: './images/gallery/1.2.jpg',          
    },
    {
        src: './images/gallery/1.jpg',          
    },
    {
        src: './images/gallery/2.jpg',          
    },
    {
        src: './images/gallery/3.jpg',          
    },
    {
        src: './images/gallery/4.jpg',          
    },
    {
        src: './images/gallery/5.jpg',          
    },
    {
        src: './images/gallery/6.jpg',          
    },
    {
        src: './images/gallery/7.jpg',          
    },
    {
        src: './images/gallery/8.jpg',          
    },
    {
        src: './images/gallery/9.jpg',          
    },
    {
        src: './images/gallery/10.jpg',          
    },
    {
        src: './images/gallery/11.jpg',          
    },
    {
        src: './images/gallery/12.jpg',          
    },
    {
        src: './images/gallery/13.jpg',          
    },
    {
        src: './images/gallery/14.jpg',          
    },
    {
        src: './images/gallery/15.jpg',          
    },
    {
        src: './images/gallery/16.jpg',          
    },
    {
        src: './images/gallery/17.jpg',          
    },
    {
        src: './images/gallery/18.jpg',          
    },
    {
        src: './images/gallery/19.jpg',          
    },
    {
        src: './images/gallery/20.jpg',          
    },
    {
        src: './images/gallery/21.jpg',          
    },
    {
        src: './images/gallery/22.jpg',          
    },
    {
        src: './images/gallery/23.jpg',          
    },
    {
        src: './images/gallery/24.jpg',          
    },
    {
        src: './images/gallery/25.jpg',          
    },
    {
        src: './images/gallery/26.jpg',          
    },
    {
        src: './images/gallery/27.jpg',          
    },
    {
        src: './images/gallery/28.jpg',          
    },
    {
        src: './images/gallery/29.jpg',          
    },
    {
        src: './images/gallery/30.jpg',          
    },
    {
        src: './images/gallery/31.jpg',          
    },
    {
        src: './images/gallery/32.jpg',          
    },
    {
        src: './images/gallery/33.jpg',          
    },
    {
        src: './images/gallery/34.jpg',          
    },
    {
        src: './images/gallery/35.jpg',          
    },
    {
        src: './images/gallery/36.jpg',          
    },
    {
        src: './images/gallery/37.jpg',          
    },
    {
        src: './images/gallery/38.jpg',          
    },
    {
        src: './images/gallery/39.jpg',          
    },
    {
        src: './images/gallery/40.jpg',          
    },
    {
        src: './images/gallery/41.jpg',          
    },
     {
         src: './images/gallery/1.jpeg',          
     },
     {
         src: './images/gallery/2.jpeg',          
     },
     {
         src: './images/gallery/3.jpeg',          
     },
     {
         src: './images/gallery/4.jpeg',          
     },
     {
         src: './images/gallery/5.jpeg',          
     },
     {
         src: './images/gallery/6.jpeg',          
     },
     {
         src: './images/gallery/7.jpeg',          
     },
     {
         src: './images/gallery/8.jpeg',          
     },
     {
         src: './images/gallery/9.jpeg',          
     },
     {
         src: './images/gallery/10.jpeg',          
     },
     {
         src: './images/gallery/11.jpeg',          
     },
     {
         src: './images/gallery/12.jpeg',          
     },
     {
         src: './images/gallery/13.jpeg',          
     },
     {
         src: './images/gallery/14.jpeg',          
     },
     {
         src: './images/gallery/15.jpeg',          
     },
     {
         src: './images/gallery/16.jpeg',          
     },
     {
         src: './images/gallery/17.jpeg',          
     },
     {
         src: './images/gallery/18.jpeg',          
     },
     {
         src: './images/gallery/19.jpeg',          
     },
     {
         src: './images/gallery/20.jpeg',          
     },
     {
         src: './images/gallery/21.jpeg',          
     },
     {
         src: './images/gallery/22.jpeg',          
     },
     {
         src: './images/gallery/23.jpeg',          
     },
     {
         src: './images/gallery/24.jpeg',          
     },
     {
         src: './images/gallery/25.jpeg',          
     },
     {
         src: './images/gallery/26.jpeg',          
     },
];



 images.map((item,index)=>{
    const galleryItem = document.createElement('div');
    galleryItem.className = "gallery-item"
    let arr=[];
    for(let i=0; i<images.length; i++){
        arr+=images[i]
    }
    galleryItem.addEventListener('click',()=>openModal(index))

    const imagediv = document.createElement('img');
    imagediv.className = "gallery-image"
    imagediv.src = `${item.src}`;

    galleryItem.append(imagediv);

    document.querySelector(".gallery").append(galleryItem);
 })

 let currentIndex = 0;
 
 function openModal(index) {
     currentIndex = index;
     document.getElementById('modal-img').src = images[index].src;
     document.getElementById('modal-text').innerText = images[index].text;
     document.getElementById('modal').style.display = 'block';
 }
 
 function closeModal() {
     document.getElementById('modal').style.display = 'none';
 }
 
 function prevImage() {
     currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
     updateModal();
 }
 
 function nextImage() {
     currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
     updateModal();
 }
 
 function updateModal() {
     document.getElementById('modal-img').src = images[currentIndex].src;
     document.getElementById('modal-text').innerText = images[currentIndex].text;
 }