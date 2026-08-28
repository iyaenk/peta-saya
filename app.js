// ========================================
// MAPILLARY ACCESS TOKEN
// ========================================

const ACCESS_TOKEN = "MLY|27698961509803868|3726b05f52b983282ba1ecb60850014b";


// ========================================
// PETA
// ========================================

const map = new maplibregl.Map({

    container: "map",

    style: "https://tiles.openfreemap.org/styles/liberty",

    center: [114.591, -3.319],

    zoom: 12
});


// ========================================
// NAVIGASI PETA
// ========================================

map.addControl(
    new maplibregl.NavigationControl(),
    "top-right"
);


// ========================================
// MAPILLARY VIEWER
// ========================================

let viewer = null;


function openViewer(imageId) {

    document.getElementById("viewer").style.display = "block";

    if (viewer) {
        viewer.remove();
    }

    viewer = new mapillary.Viewer({

        accessToken: ACCESS_TOKEN,

        container: "mly",

        imageId: imageId

    });
}


function closeViewer() {

    document.getElementById("viewer").style.display = "none";

    if (viewer) {

        viewer.remove();

        viewer = null;
    }
}
