/* 
*    Return common layers used in different examples
*/
function getCommonBaseLayers(map){
    var osmLayer = L.tileLayer('https://maps.tilehosting.com/c/fb41e62e-d71c-48ad-bb57-54fe8ee6daa1/styles/streets/{z}/{x}/{y}.png?key=6oDCiCawBNvqnyDDgs3s', {
        attribution: '<a href="https://www.maptiler.com/license/maps/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright'
    });
    var bathymetryLayer = L.tileLayer.wms("http://ows.emodnet-bathymetry.eu/wms", {
        layers: 'emodnet:mean_atlas_land',
        format: 'image/png',
        transparent: true,
        attribution: "EMODnet Bathymetry",
        opacity: 0.8
    });
    var coastlinesLayer = L.tileLayer.wms("http://ows.emodnet-bathymetry.eu/wms", {
        layers: 'coastlines',
        format: 'image/png',
        transparent: true,
        attribution: "EMODnet Bathymetry",
        opacity: 0.8
    });
    var bathymetryGroupLayer = L.layerGroup([bathymetryLayer, coastlinesLayer]);    
    bathymetryGroupLayer.addTo(map);
    return {
        "EMODnet Bathymetry": bathymetryGroupLayer,
        "OSM": osmLayer
    };
}