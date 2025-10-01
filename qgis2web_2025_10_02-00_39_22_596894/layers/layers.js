var wms_layers = [];

var format_PenggunaanLahan_0 = new ol.format.GeoJSON();
var features_PenggunaanLahan_0 = format_PenggunaanLahan_0.readFeatures(json_PenggunaanLahan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PenggunaanLahan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PenggunaanLahan_0.addFeatures(features_PenggunaanLahan_0);
var lyr_PenggunaanLahan_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PenggunaanLahan_0, 
                style: style_PenggunaanLahan_0,
                popuplayertitle: 'Penggunaan Lahan',
                interactive: true,
                title: '<img src="styles/legend/PenggunaanLahan_0.png" /> Penggunaan Lahan'
            });

lyr_PenggunaanLahan_0.setVisible(true);
var layersList = [lyr_PenggunaanLahan_0];
lyr_PenggunaanLahan_0.set('fieldAliases', {'REMARK': 'REMARK', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Skor_PL': 'Skor_PL', });
lyr_PenggunaanLahan_0.set('fieldImages', {'REMARK': '', 'Shape_Leng': '', 'Shape_Area': '', 'Skor_PL': '', });
lyr_PenggunaanLahan_0.set('fieldLabels', {'REMARK': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', 'Skor_PL': 'inline label - visible with data', });
lyr_PenggunaanLahan_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});