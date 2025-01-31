var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_tambak_lele_shp_1 = new ol.format.GeoJSON();
var features_tambak_lele_shp_1 = format_tambak_lele_shp_1.readFeatures(json_tambak_lele_shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tambak_lele_shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tambak_lele_shp_1.addFeatures(features_tambak_lele_shp_1);
var lyr_tambak_lele_shp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tambak_lele_shp_1, 
                style: style_tambak_lele_shp_1,
                popuplayertitle: 'tambak_lele_shp',
                interactive: true,
                title: '<img src="styles/legend/tambak_lele_shp_1.png" /> tambak_lele_shp'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_tambak_lele_shp_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_tambak_lele_shp_1];
lyr_tambak_lele_shp_1.set('fieldAliases', {'lintang': 'lintang', 'bujur': 'bujur', 'nama_tamba': 'nama_tamba', });
lyr_tambak_lele_shp_1.set('fieldImages', {'lintang': 'TextEdit', 'bujur': 'TextEdit', 'nama_tamba': 'TextEdit', });
lyr_tambak_lele_shp_1.set('fieldLabels', {'lintang': 'inline label - always visible', 'bujur': 'inline label - always visible', 'nama_tamba': 'inline label - always visible', });
lyr_tambak_lele_shp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});