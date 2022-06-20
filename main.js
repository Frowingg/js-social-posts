const postContainer = document.getElementById('container');

const info = [
    {
        id : 1,
        name : 'Angel Garrison',
        postPic : 'https://i.picsum.photos/id/524/300/300.jpg?hmac=MpxUkv6gcBsbfdS64thmQBCSgpyfNIXq2Y8_Gx3SupA',
        profilePic: null
    },
    {
        id: 2,
        name: 'Thomas Johnson',
        postPic: null,
        profilePic: 'https://i.picsum.photos/id/915/300/300.jpg?hmac=Zelq3qOGZXPxfFP38dahzBCpAP8llGrGtQtTNI15wPg'
    },
    {
        id : 3,
        name : 'Douglas Shaw',
        postPic : 'https://i.picsum.photos/id/1008/300/300.jpg?hmac=5xk7FVRQVS5upnpXga93D7jFjybKWMdMSXPBSfcoK8Q',
        profilePic: 'https://i.picsum.photos/id/203/300/300.jpg?hmac=6IV-xNj_b0zmc0InlHbs23VYvUky2xCitu-hYsGr1wo'
    },
    {
        id: 4,
        name: 'Carlo Bologna',
        postPic: null,
        profilePic: null
    },
    {
        id: 5,
        name: 'Tyler Gray',
        postPic: 'https://i.picsum.photos/id/13/300/300.jpg?hmac=KpKrVHSxw7oTYqaH6Go7ulaMqAocY3zzej1sqIi6fRQ',
        profilePic: 'https://i.picsum.photos/id/162/300/300.jpg?hmac=YYwB3vsUblmGV6TR8Jrt46RA6O7v3rhcMTT3iUFC7LQ'
    },
    {
        id: 6,
        name: 'William Hart',
        postPic: null,
        profilePic: 'https://i.picsum.photos/id/816/300/300.jpg?hmac=L1b8IFOLJKrD9kUMjhcXxsAyAr-bRVZPfjU7evxX16A'
    },
    {
        id: 7,
        name: 'Joseph Cuevas',
        postPic: 'https://i.picsum.photos/id/798/300/300.jpg?hmac=ETO_5YWlif6jmti0UsKJ0xhQr5WgGEKvLc5jTYjgPk4',
        profilePic:  'https://i.picsum.photos/id/1073/300/300.jpg?hmac=wa-RILopuOVt6raNQBFfaUFmlx_4A1fUwzlwWkIGk1g'
    }
]

function createDate() {
    month = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    day = Math.floor(Math.random() * (31 - 1 + 1) ) + 1;
    year = Math.floor(Math.random() * (2022 - 2020 + 1) ) + 2020;
    return month+'/'+day+'/'+year;
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

for(i=0; i<info.length; i++) {
    // POST PICTURE
    postPicture = info[i].postPic === null ? '' : `
    <div class="post__image">
        <img src="${info[i].postPic}" alt="">
    </div>`;

    // PROFILE PICTURE
    profilePicture = info[i].profilePic === null ? `${isolateInizial(info[i].name)}` : `
    <div class="post-meta__icon">
        <img class="profile-pic" src="${info[i].profilePic}" alt="${info[i].name}">                    
    </div>
    `
    // POST
    post = `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    ${profilePicture}
                    <div class="post-meta__data">
                        <div class="post-meta__author">${info[i].name}</div>
                        <div class="post-meta__time">${createDate()}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
            ${postPicture}
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${getRndInteger(0, 80)}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `   
    postContainer.innerHTML += post;
    // console.log(post)
}

function isolateInizial(words) {
    word = words.split(' ')
    return `${word[0][0]}.${word[1][0]}.`
}

const btnsLike = document.querySelectorAll('.js-like-button');

for(i=0; i<btnsLike.length; i++) {
    btnsLike[i].addEventListener('click',
    function() {
        this.classList.toggle('clicked')
    }    
    );
}
