console.log("%cWelcome to this exercise :)", "background-color: #FFDAC1; color: black");
console.log("%cMade with ♥ by Cinpis!", "background-color: #FFDAC1; color: black");

/* Global Variables */
let input = 0;
let countDevs = 0;
let searcher = null;
let allDevs = [];
let devBox = null;

window.addEventListener('load', () => {

    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
    });

    getElements();
    fetchDevs();
});

const getElements = () => {

    input = document.querySelector('#search');
    countDevs = document.querySelector('.countDevs');
    searcher = document.querySelector('#searcher');

    devForm = document.querySelector('#formSearch');
    searchContainer = document.querySelector('#searchContainer');
    devBox = document.querySelector('#devBox');
}

async function fetchDevs() {

   try {

    const response = await fetch('http://localhost:3001/devs');
    const data = await response.json();

    allDevs = data.map((dev) => {

        const { id, name, picture, programmingLanguages } = dev;
        return {
            id,
            name,
            picture,
            programmingLanguages
        }
    }); 

    //console.log(allDevs);
    render();
   }
   catch (err) {
       response.status(400).send({ error: err.message });
   }
}

const render = (devName) => {
    renderDevList(devName);
    renderSearchDev();
}

const renderDevList = (devName) => {

    let devs = '<div>';
    let filterDevs = handleFilter(devName).sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    if(filterDevs.length === 0){
        countDevs.textContent = '0 Devs found';
    } else {
        countDevs.textContent = `${filterDevs.length} Dev(s) Found.`;
        filterDevs.map((dev) => {

            const { name, picture, programmingLanguages } = dev;
            const showData = `
                <div class="devBoard">
                    <img src="${picture}" alt=${name} class="devImage">
                    <p>${name}</p>
                    <p>${programmingLanguages}</p>
                </div>
            `;
            devs += showData;
        });
        devs += '</div>';
        devBox.innerHTML = devs;
        console.log(countDevs);
    }
}

const handleFilter = (data) => {
    
    let filtering = allDevs.filter((dev) => {
        return dev.name.toLowerCase().indexOf(data) !== -1;
    });

    return filtering;
}

const renderSearchDev = () => {

    searcher.addEventListener('click', () => {

        let devName = input.value.toLowerCase().trim();

        if (input.value === '' || input.value === null){       
            return;
        }

        render(devName);
    });

    input.addEventListener('keyup', () => {

        let devName = input.value.toLowerCase();

        if (devName.key == 'Enter' && inputName.target.value === ''){
            searcher.disabled = true;
            render([]);
        } else if (devName.key == 'Enter' && devName.target.value != '') {
            searcher.classList.remove('disabled');
            searcher.disabled = false;
            render(devName);
        }
    });
}

const languagesToSelect = document.querySelectorAll(".language-grid li");

for (const languages of languagesToSelect){
    languages.addEventListener("click", handleLanguage);
};

const markedLanguages = document.querySelector("input[name=languages]");

let selectedLanguages = [];

function handleLanguage(e){

    const itemLanguage = e.target;
    itemLanguage.classList.toggle("selected");

    const languagesID = itemLanguage.dataset.id;
    console.log("language id", languagesID);

    const alreadySelected = selectedLanguages.findIndex(lang => {
        const languageFound = lang == languagesID;
        return languageFound;
    });
    console.log("already selected", alreadySelected);

    if(alreadySelected >= 0){
        const filteredLanguages = selectedLanguages.filter(lang => {
            const langIsDifferent = lang != languagesID;
            return langIsDifferent;
        });
        selectedLanguages = filteredLanguages;
    } else {
        selectedLanguages.push(languagesID);
    }
    console.log('selectedLaguages', selectedLanguages);
    markedLanguages.value = selectedLanguages;
}


