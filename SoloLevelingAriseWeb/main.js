
//Characters
document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navList = document.querySelector("nav ul");
    const characterGrid = document.querySelector(".character-grid");
    const characterDetails = document.getElementById("character-details");
    const characterName = document.getElementById("character-name");
    const characterDescription = document.getElementById("character-description");
    const scrollLeftBtn = document.getElementById("scrollLeftBtn");
    const scrollRightBtn = document.getElementById("scrollRightBtn");

    hamburgerMenu.addEventListener("click", () => {
        navList.style.display = navList.style.display === "flex" ? "none" : "flex";
    });

    scrollLeftBtn.addEventListener("click", () => {
        characterGrid.scrollBy({
            top: 0,
            left: -150,
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener("click", () => {
        characterGrid.scrollBy({
            top: 0,
            left: 150,
            behavior: 'smooth'
        });
    });


    window.showCharacter = function(character) {
        // Charakterdetails
        const characters = {
            'Sung Jinwoo': {
                name: 'Sung Jinwoo',
                image:'../Sources/Solo_Leveling_Sung_Jin_Woo_Jacket__68040.jpg',
                description: 'Beschreibung für Charakter 1' 
            },
            'Charakter 2': {
                name: 'Charakter 2',
                description: 'Beschreibung für Charakter 2'
            },
            'Charakter 3': {
                name: 'Charakter 3',
                description: 'Beschreibung für Charakter 3'
            },
            'Charakter 4': {
                name: 'Charakter 4',
                description: 'Beschreibung für Charakter 4'
            },
            'Charakter 5': {
                name: 'Charakter 5',
                description: 'Beschreibung für Charakter 5'
            },
            'Charakter 6': {
                name: 'Charakter 6',
                description: 'Beschreibung für Charakter 6'
            },
            'Charakter 7': {
                name: 'Charakter 7',
                description: 'Beschreibung für Charakter 7'
            },
            'Charakter 8': {
                name: 'Charakter 8',
                description: 'Beschreibung für Charakter 8'
            },
            'Charakter 9': {
                name: 'Charakter 9',
                description: 'Beschreibung für Charakter 9'
            },
            'Charakter 10': {
                name: 'Charakter 10',
                description: 'Beschreibung für Charakter 10'
            },
            'Charakter 11': {
                name: 'Charakter 11',
                description: 'Beschreibung für Charakter 11'
            },
        };

        const selectedCharacter = characters[character];
        if (selectedCharacter) {
            characterName.textContent = selectedCharacter.name;
            characterDescription.textContent = selectedCharacter.description;
            characterDetails.style.display = 'block';
            characterDetails.scrollIntoView({ behavior: "smooth" });
        }
    };

    window.searchCharacter = function() {
        const searchInput = document.getElementById("searchInput").value;
        showCharacter(searchInput);
        characterDetails.scrollIntoView({ behavior: "smooth" });
    };

    document.getElementById('burgerMenu').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');

    
});

const weaponGrid = document.getElementById('weaponGrid');
const scrollPoints = document.getElementById('scrollPoints').children;

Array.from(scrollPoints).forEach(point => {
    point.addEventListener('click', function() {
        let index = parseInt(this.getAttribute('data-index'));
        weaponGrid.scrollTo({
            top: index * weaponGrid.clientHeight,
            behavior: 'smooth'
        });
        updateActivePoint(index);
    });
});

weaponGrid.addEventListener('scroll', function() {
    let index = Math.round(weaponGrid.scrollTop / weaponGrid.clientHeight);
    updateActivePoint(index);
});

function updateActivePoint(index) {
    Array.from(scrollPoints).forEach(point => {
        point.classList.remove('active');
    });
    scrollPoints[index].classList.add('active');
}

const weapons = document.querySelectorAll('.weapon');
const weaponDetails = document.getElementById('weaponDetails');

weapons.forEach(weapon => {
    weapon.addEventListener('click', function() {
        const weaponName = this.getAttribute('data-name');
        const weaponSection = document.createElement('div');
        weaponSection.innerHTML = `<h2>${weaponName}</h2><p>Details about ${weaponName}...</p>`;
        weaponSection.classList.add('weapon-details');
        document.querySelector('.main-content').appendChild(weaponSection);
        window.scrollTo({
            top: weaponSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.getElementById('searchButton').addEventListener('click', function() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const foundWeapon = Array.from(weapons).find(weapon => weapon.getAttribute('data-name').toLowerCase() === searchQuery);
    if (foundWeapon) {
        foundWeapon.click();
    } else {
        alert('Weapon not found');
    }
});

});

document.getElementById('burgerMenu').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');
});

const weaponGrid = document.getElementById('weaponGrid');
const scrollPoints = document.getElementById('scrollPoints').children;

Array.from(scrollPoints).forEach(point => {
    point.addEventListener('click', function() {
        let index = parseInt(this.getAttribute('data-index'));
        weaponGrid.scrollTo({
            top: index * weaponGrid.clientHeight,
            behavior: 'smooth'
        });
        updateActivePoint(index);
    });
});

weaponGrid.addEventListener('scroll', function() {
    let index = Math.round(weaponGrid.scrollTop / weaponGrid.clientHeight);
    updateActivePoint(index);
});

function updateActivePoint(index) {
    Array.from(scrollPoints).forEach(point => {
        point.classList.remove('active');
    });
    scrollPoints[index].classList.add('active');
}

const weapons = document.querySelectorAll('.weapon');
const weaponDetails = document.getElementById('weaponDetails');

weapons.forEach(weapon => {
    weapon.addEventListener('click', function() {
        const weaponName = this.getAttribute('data-name');
        weaponDetails.innerHTML = `<h2>${weaponName}</h2><p>Details about ${weaponName}...</p>`;
        weaponDetails.style.display = 'block';
        window.scrollTo({
            top: weaponDetails.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.getElementById('searchButton').addEventListener('click', function() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const foundWeapon = Array.from(weapons).find(weapon => weapon.getAttribute('data-name').toLowerCase() === searchQuery);
    if (foundWeapon) {
        foundWeapon.click();
    } else {
        alert('Weapon not found');
    }
});


