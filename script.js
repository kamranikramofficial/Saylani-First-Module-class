const themeToggle = document.getElementById('theme-toggle');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

themeToggle.addEventListener('click', () => {
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        button.classList.add('active');
        
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});
function saveThemePreference() {
    const isDarkTheme = document.body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDarkTheme);
}
function loadThemePreference() {
    const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    if (isDarkTheme) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}
themeToggle.addEventListener('click', saveThemePreference);
let datahtmlarr = [
    {
        img: 'img/html-1.png',
        no: "1",
        title: "HTML First Assignment",
        description: "Write a latter with simple html tag",
        liveLink: "https://saylani-first-module-class.vercel.app/html/assignment-first/",
        codeLink: "https://github.com/kamranikramofficial/Saylani-First-Module-class/tree/main/html/assignment-first"
    },
    {
        img: 'img/html-2.png',
        no: "2",
        title: "HTML Seconde Assignment",
        description: "This is practise of angchar tag and list or nested list",
        liveLink: "https://saylani-first-module-class.vercel.app/html/assignment-second/",
        codeLink: "https://github.com/kamranikramofficial/Saylani-First-Module-class/tree/main/html/assignment-second"
    },
    {
        img: 'img/html-3.png',
        no: "3",
        title: "HTML Third Assignment",
        description: "This is practise of angchar tag with singal page and maltiple pages",
        liveLink: "https://saylani-first-module-class.vercel.app/html/assignment-third/",
        codeLink: "https://github.com/kamranikramofficial/Saylani-First-Module-class/tree/main/html/assignment-third"
    },
    {
        img: 'img/html-4.png',
        no: "4",
        title: "HTML Four Assignment",
        description: "This is practise for table tages",
        liveLink: "https://saylani-first-module-class.vercel.app/html/assignment-fourth/",
        codeLink: "https://github.com/kamranikramofficial/Saylani-First-Module-class/tree/main/html/assignment-fourth"
    },
    {
        img: 'img/html-5.png',
        no: "5",
        title: "HTML five Assignment",
        description: "This is practise of form tages",
        liveLink: "https://saylani-first-module-class.vercel.app/html/assignment-fifth/",
        codeLink: "https://github.com/kamranikramofficial/Saylani-First-Module-class/tree/main/html/assignment-fifth"
    },
    {
        img: 'img/html-6.png',
        no: "6",
        title: "HTML six Assignment",
        description: "create webside only using html",
        liveLink: "https://saylani-first-module-class.vercel.app/html/assignment-six/",
        codeLink: "https://github.com/kamranikramofficial/Saylani-First-Module-class/tree/main/html/assignment-six"
    },
    {
        img: 'img/html-7.png',
        no: "7",
        title: "use all tages in form",
        description: "Write a latter with simple html tag",
        liveLink: "https://saylani-first-module-class.vercel.app/html/assignment-seven/",
        codeLink: "https://github.com/kamranikramofficial/Saylani-First-Module-class/tree/main/html/assignment-seven"
    },
   
];

let forjason = document.getElementById("jsjason");

datahtmlarr.forEach(item => {
    forjason.innerHTML += `
    <div class="card">
        <div class="card-image">
            <img src="${item.img}" alt="Assignment ${item.no} Preview">
        </div>
        <div class="card-content">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="card-links">
                <a href="${item.liveLink}" class="btn primary"><i class="fas fa-eye"></i> Live Preview</a>
                <a href="${item.codeLink}" class="btn secondary"><i class="fas fa-code"></i> View Code</a>
            </div>
        </div>
    </div>
    `;
})

