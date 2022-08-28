fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => usersData(data))

function usersData(users){
    const usersContainer = document.getElementById('users-container');
    for (const user of users) {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card')
        userCard.innerHTML = `
            <p>Id : ${user.id}</p>
            <h4>Name : ${user.name}</h4>
            <p>Username : ${user.username}</p>
            <p>Email : ${user.email}</p>
            <hr>
            <strong>Address :</strong>
            <p>street : ${user.address.street}</p>
            <p>suite : ${user.address.suite}</p>
            <p>city : ${user.address.city}</p>
            <p>zipcode : ${user.address.zipcode}</p>
            <hr>
            <strong>geo :</strong>
            <p>lat : ${user.address.geo.lat}</p>
            <p>lng : ${user.address.geo.lng}</p>
            <hr>
            <p>Phone : ${user.phone}</p>
            <p>Website : ${user.website}</p>
            <hr>
            <strong>Company :</strong>
            <p>${user.company.name}</p>
            <p>${user.company.catchPhrase}</p>
            <p>${user.company.bs}</p>
        `

        usersContainer.appendChild(userCard);
    }
}

usersData()