fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then(data => allPhotos(data))

function allPhotos(photos){
    const photosContainer = document.getElementById('photos-container');
    for (const photodata of photos) {
        const photoCard = document.createElement('div');
        photoCard.classList.add('photo-card');
        photoCard.innerHTML = `
            <h4>ID : ${photodata.id}</h4>
            <p>Title : ${photodata.title}</p>
            <div class="img-div">
                <img src="${photodata.url}" width='150'/>
                <img src="${photodata.thumbnailUrl}" width='150'/>
            </div>
        `

        photosContainer.appendChild(photoCard);
    }
}

allPhotos()