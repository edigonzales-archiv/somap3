var map,
wmtsLayer;

function init() {
    
    
  var options = {
    //controls: [],
    projection: new OpenLayers.Projection("EPSG:21781"),
    units: "m",
    maxExtent:  new OpenLayers.Bounds.fromArray([420000,30000,900000,350000]),
    restrictedExtent:  new OpenLayers.Bounds.fromArray([420000,30000,900000,350000]),
    resolutions: [4000,3750,3500,3250,3000,2750,2500,2250,2000,1750,1500,1250,1000,750,650,500,250,100,50,20,10,5,2.5,2,1.5,1,0.5],
    allOverlays: false
  };
    
  var map = new OpenLayers.Map("map", options);

  map.addLayer( new OpenLayers.Layer.WMTS({
      name: "Luftbild WMTS",
      url: "http://www.catais.org/mapcache/wmts/",
      layer: 'ch.so.agi.orthofoto',
      matrixSet: 'CH1903',
      format: 'image/jpeg',
      style: 'default',
      buffer:0,
      isBaseLayer:true,
      maxExtent: new OpenLayers.Bounds(420000,30000,900000,350000)
    }
  ));
    
 
    
    map.setCenter(new OpenLayers.LonLat(607228.3,228359.2), 25);

}