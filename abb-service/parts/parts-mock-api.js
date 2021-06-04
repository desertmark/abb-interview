class PartsMockedApi {
    constructor() {
        this.parts = getParts();
    }

    getParts() {
        this.parts.forEach(part => {
            part.features.forEach(feature => {
                feature.controls = feature.controls.map(control => {
                    return {
                        ...control,
                        dev: randomDev(),
                        devOutTotal: randomDevOutTotal(),
                        statusCode: randomStatusCode(),
                    }
                });
            });
        });
        return this.parts;
    }
}

module.exports = {
    PartsMockedApi,
}



function getParts() {
    return [
        {
            name: 'Part A',
            features: randomFeatures(),
        },
        {
            name: 'Part B',
            features: randomFeatures(),
        },
        {
            name: 'Part C',
            features: randomFeatures(),
        }
    ];
}

function randomFeatures() {
    const featureNames = ['Seam', 'Hole', 'Slot'];
    const featuresCount = randomBetween(1,10);
    const features = [];
    for (let i = 0; i<featuresCount; i++) {
        features.push({
            name: `${featureNames[i%featureNames.length]} ${i}`,
            controls: randomControls(),
            statusCode: randomStatusCode(),
        });
    }
    return features;
}

function randomControls() {
    const controlNames = ['X', 'Y', 'Z', 'Diameter', 'Length'];
    const controlsCount = randomBetween(1,10);
    const features = [];
    for (let i = 0; i<controlsCount; i++) {
        features.push({
            name: `${controlNames[i % controlNames.length]} ${i}`,
            dev: randomDev(),
            devOutTotal: randomDevOutTotal(),
            statusCode: randomStatusCode(),
        });
    }
    return features;
}

function randomDev() {
    return Math.random();
}

function randomDevOutTotal() {
    return randomBetween(0,10) + Math.random();
}

function randomStatusCode() {
    return randomBetween(0,3);
}

function randomBetween(min, max) {
    return Math.floor(Math.random() * max) + min
}