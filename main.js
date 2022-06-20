const postContainer = document.getElementById('container');

const names = ['Angel Garrison','Thomas Johnson','Mr. Douglas Shaw','Tyler Gray','William Hart',
               'Joseph Cuevas','Kevin Morgan','Joseph Olson','Shannon Parks','Charlotte Lucas']

const postPics = ['https://i.picsum.photos/id/184/300/300.jpg?hmac=vhW7YQcLmc_QysIuIuS8uSu6lbXS4Dw9btPbw2cQn90',
                   null,
                  'https://i.picsum.photos/id/1008/300/300.jpg?hmac=5xk7FVRQVS5upnpXga93D7jFjybKWMdMSXPBSfcoK8Q',
                  'https://i.picsum.photos/id/320/300/300.jpg?hmac=Ro-_JH-iriuI8r9qjts__9GxeEuFk3okOh9c3G32eZI',
                   null,
                  'https://i.picsum.photos/id/990/300/300.jpg?hmac=RBbMa6Fhp5W0gv722LkKlqWBk77H6wjLg1EeEM2o354',
                  'https://i.picsum.photos/id/626/300/300.jpg?hmac=8CBe2hb9zx8fCum9bqcOO3K1zrWe-91QrW297fjoG70',
                  'https://i.picsum.photos/id/264/300/300.jpg?hmac=kamEIrwlWwTOX05RMg5JxRzYCY8XA0DQ9GhZWsoDhV0',
                   null,
                  'https://i.picsum.photos/id/1073/300/300.jpg?hmac=wa-RILopuOVt6raNQBFfaUFmlx_4A1fUwzlwWkIGk1g',] 

const profilePics = ['https://i.picsum.photos/id/184/300/300.jpg?hmac=vhW7YQcLmc_QysIuIuS8uSu6lbXS4Dw9btPbw2cQn90',
                     'https://i.picsum.photos/id/915/300/300.jpg?hmac=Zelq3qOGZXPxfFP38dahzBCpAP8llGrGtQtTNI15wPg',
                     'https://i.picsum.photos/id/1008/300/300.jpg?hmac=5xk7FVRQVS5upnpXga93D7jFjybKWMdMSXPBSfcoK8Q',
                     'https://i.picsum.photos/id/320/300/300.jpg?hmac=Ro-_JH-iriuI8r9qjts__9GxeEuFk3okOh9c3G32eZI',
                     'https://i.picsum.photos/id/824/300/300.jpg?hmac=kIWcLr0RPi2ZRIEvyq0jKoiPhfU5ixYeEy8206NoZGQ',
                     'https://i.picsum.photos/id/990/300/300.jpg?hmac=RBbMa6Fhp5W0gv722LkKlqWBk77H6wjLg1EeEM2o354',
                     'https://i.picsum.photos/id/626/300/300.jpg?hmac=8CBe2hb9zx8fCum9bqcOO3K1zrWe-91QrW297fjoG70',
                     'https://i.picsum.photos/id/264/300/300.jpg?hmac=kamEIrwlWwTOX05RMg5JxRzYCY8XA0DQ9GhZWsoDhV0',
                     'https://i.picsum.photos/id/816/300/300.jpg?hmac=L1b8IFOLJKrD9kUMjhcXxsAyAr-bRVZPfjU7evxX16A',
                     'https://i.picsum.photos/id/1073/300/300.jpg?hmac=wa-RILopuOVt6raNQBFfaUFmlx_4A1fUwzlwWkIGk1g',] 

function createDate() {
    month = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    day = Math.floor(Math.random() * (31 - 1 + 1) ) + 1;
    year = Math.floor(Math.random() * (2022 - 2020 + 1) ) + 2020;
    return month+'/'+day+'/'+year;
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// const posts = [
//     {
//         id: null,
//         name: null,
//         profilePic: null,
//         date: null,
//         txt: null,
//         postPic: null
//     }
// ];

for(i=0; i<10; i++) {
    postPic = postPics[i] === null ? '' : `${postPics[i]}`;
    postContainer.innerHTML += `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${profilePics[i]}" alt="${names[i]}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${names[i]}</div>
                        <div class="post-meta__time">${createDate()}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
            <div class="post__image">
            <img src="${postPic}" alt="${postPics[i]}">
            </div>
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
}