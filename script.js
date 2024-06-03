document.addEventListener('DOMContentLoaded', function() {
    const lernziel = document.getElementById('lernziele');
    const slidersContainer = document.getElementById('sliders-container');
    const deleteButton = document.getElementById('delete-sliders');

    loadSliders();

    lernziel.addEventListener('submit', function(event) {
        event.preventDefault();

        const ziel = document.getElementById('ziel').value;
        if (ziel.trim() !== '') {
            addSlider(ziel);
            saveSlider(ziel);
        }

        lernziel.reset();
    });

    

    deleteButton.addEventListener('click', function() {
        slidersContainer.innerHTML = '';
        localStorage.removeItem('lernziele'); // Löscht die Lernziele aus dem Local Storage
    });


    function addSlider(ziel) {
        const sliderWrapper = document.createElement('div');
        sliderWrapper.className = 'slider-wrapper';

        const label = document.createElement('label');
        label.textContent = ziel;
        sliderWrapper.appendChild(label);

        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = '0';
        slider.max = '100';
        slider.value = '0';

        sliderWrapper.appendChild(slider);
        slidersContainer.appendChild(sliderWrapper);
    }

    function saveSlider(ziel) {
        let lernziele = JSON.parse(localStorage.getItem('lernziele')) || [];
        lernziele.push(ziel);
        localStorage.setItem('lernziele', JSON.stringify(lernziele));
    }

    function loadSliders() {
        const lernziele = JSON.parse(localStorage.getItem('lernziele')) || [];
        lernziele.forEach(ziel => addSlider(ziel));
    }
});
