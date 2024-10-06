const planets = [
    {
        name: "Kepler-16b",
        image: "images/planet1.2.png",
        description: "Kepler-16b is an intriguing exoplanet located about 200 light-years from Earth in the constellation Cygnus. It orbits two stars, making it a circumbinary planet, which means its skies feature two suns.",
        details: [
            { label: "Discovery date", value: "December 5, 2011" },
            { label: "Radius", value: "2.4 times that of Earth (estimated)" },
            { label: "Mass", value: "Around 10 to 20 times Earth's mass" },
            { label: "Distance from Earth", value: "About 600 light-years away" },
            { label: "Surface temperature", value: "Around -100°C (-148°F)" }
        ]
    },
    {
        name: "51 Pegasi b",
        image: "images/planet2-removebg-preview.png",
        description: "51 Pegasi b, also known as 'Dimidium,' was the first exoplanet discovered orbiting a Sun-like star, 51 Pegasi, located about 50 light-years away in the constellation Pegasus. Discovered in 1995, it marked a major breakthrough in astronomy.",
        details: [
            { label: "Discovery Date", value: "October 6, 1995" },
            { label: "Radius", value: "About 1.07 Earth radii" },
            { label: "Mass", value: "About 0.47 Jupiter masses" },
            { label: "Distance from Earth", value: "About 50 light-years" },
            { label: "Surface Temperature", value: "Around 1,200 K (927 °C; 1,700 °F)" }
        ]
    },
    {
        name: "PSO J318.5-22",
        image: "images/planet3-removebg-preview.png",
        description: "PSO J318.5-22 is a free-floating rogue planet located about 80 light-years away in the constellation Capricornus. It doesn't orbit a star and is part of the Beta Pictoris moving group.",
        details: [
            { label: "Discovery Date", value: "November 2013" },
            { label: "Radius", value: "Estimated to be similar to that of Jupiter" },
            { label: "Mass", value: "Approximately 6.5 Jupiter masses" },
            { label: "Distance from Earth", value: "About 80 light-years away" },
            { label: "Surface Temperature", value: "Around 1,500 K (1,227 °C; 2,240 °F)" }
        ]
    },
    {
        name: "TRAPPIST-1e",
        image: "images/pngtree-a-planet-in-space-photo-png-image_11490676.png",
        description: "TRAPPIST-1e is one of the seven Earth-sized exoplanets orbiting the ultracool dwarf star TRAPPIST-1, located about 39 light-years away in the constellation Aquarius.",
        details: [
            { label: "Discovery Date", value: "February 2017" },
            { label: "Radius", value: "Approximately 1.03 times that of Earth." },
            { label: "Mass", value: "About 0.8 times the mass of Earth." },
            { label: "Distance from Earth", value: "About 40 light-years away" },
            { label: "Surface Temperature", value: "Around 210 K (-63 °C; -82 °F)" }
        ]
    },
    {
        name: "WASP-12b",
        image: "images/wasp12.png",
        description: "WASP-12b is an exoplanet orbiting the star WASP-12, located about 870 light-years away in the constellation Auriga. It is known for its incredibly close orbit and its status as one of the hottest known exoplanets.",
        details: [
            { label: "Discovery Date", value: "April 2008" },
            { label: "Radius", value: "Approximately 1.9 times that of Jupiter" },
            { label: "Mass", value: "About 1.4 times the mass of Jupiter" },
            { label: "Distance from Earth", value: "About 870 light-years away" },
            { label: "Surface Temperature", value: "Around 2,500 K (2,227 °C; 4,040 °F)" }
        ]
    },
    {
        name: "Gliese 581g",
        image: "images/gplanet.png",
        description: "Gliese 581g is an exoplanet orbiting the red dwarf star Gliese 581, located about 20 light-years away in the constellation Libra. It has garnered attention for potentially being within the habitable zone, where liquid water could exist on its surface.",
        details: [
            { label: "Discovery Date", value: "September 2010 (disputed)" },
            { label: "Radius", value: "Approximately 1.5 times that of Earth" },
            { label: "Mass", value: "About 3 to 4 times the mass of Earth" },
            { label: "Distance from Earth", value: "About 20 light-years away" },
            { label: "Surface Temperature", value: "Estimated to be between 228 K to 318 K (-45 °C to 45 °C)" }
        ]
    },
    {
        name: "55 Cancri e",
        image: "images/55.png",
        description: "55 Cancri e is an exoplanet located about 41 light-years away in the constellation Cancer. It orbits very close to its parent star, making it one of the hottest known rocky planets.",
        details: [
            { label: "Discovery Date", value: "August 2004" },
            { label: "Radius", value: "Approximately 1.9 times that of Earth" },
            { label: "Mass", value: "About 8 times the mass of Earth" },
            { label: "Distance from Earth", value: "About 41 light-years away" },
            { label: "Surface Temperature", value: "Over 2,400 K (2,100 °C; 3,800 °F)" }
        ]
    },
    {
        name: "LHS 1140 b",
        image: "images/LH.png",
        description: "LHS 1140 b is a rocky exoplanet orbiting the red dwarf star LHS 1140, located about 41 light-years away in the constellation Cetus. It is situated in the habitable zone of its host star, making it one of the best candidates for finding liquid water and potentially life.",
        details: [
            { label: "Discovery Date", value: "April 2017" },
            { label: "Radius", value: "Approximately 1.4 times that of Earth" },
            { label: "Mass", value: "About 6.6 times the mass of Earth" },
            { label: "Distance from Earth", value: "About 41 light-years away" },
            { label: "Surface Temperature", value: "Estimated to be between 210 K to 250 K (-63 °C to -23 °C)" }
        ]
    }
    // Add more planets here if needed
];


let currentPlanetIndex = 0;

function displayPlanet(index) {
    const planet = planets[index];
    document.getElementById('planet-img').src = planet.image;
    document.getElementById('planet-name').textContent = planet.name;
    document.getElementById('planet-description').textContent = planet.description;

    const detailsContainer = document.getElementById('planet-details');
    detailsContainer.innerHTML = '';
    planet.details.forEach(detail => {
        const detailElement = document.createElement('div');
        detailElement.className = 'detail-item';
        detailElement.innerHTML = `<p>${detail.label}</p><p>${detail.value}</p>`;
        detailsContainer.appendChild(detailElement);
    });
}

document.getElementById('prev-planet').addEventListener('click', () => {
    currentPlanetIndex = (currentPlanetIndex - 1 + planets.length) % planets.length;
    displayPlanet(currentPlanetIndex);
});

document.getElementById('next-planet').addEventListener('click', () => {
    currentPlanetIndex = (currentPlanetIndex + 1) % planets.length;
    displayPlanet(currentPlanetIndex);
});

// Initial display
displayPlanet(currentPlanetIndex);