var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_AdmPasirKaliki_1 = new ol.format.GeoJSON();
var features_AdmPasirKaliki_1 = format_AdmPasirKaliki_1.readFeatures(json_AdmPasirKaliki_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdmPasirKaliki_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdmPasirKaliki_1.addFeatures(features_AdmPasirKaliki_1);
var lyr_AdmPasirKaliki_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdmPasirKaliki_1, 
                style: style_AdmPasirKaliki_1,
                popuplayertitle: "Adm Pasir Kaliki",
                interactive: true,
                title: '<img src="styles/legend/AdmPasirKaliki_1.png" /> Adm Pasir Kaliki'
            });
var format_Buffered_2 = new ol.format.GeoJSON();
var features_Buffered_2 = format_Buffered_2.readFeatures(json_Buffered_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_2.addFeatures(features_Buffered_2);
var lyr_Buffered_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_2, 
                style: style_Buffered_2,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_2.png" /> Buffered'
            });
var format_UTMPERINDUKANVEKTOR_3 = new ol.format.GeoJSON();
var features_UTMPERINDUKANVEKTOR_3 = format_UTMPERINDUKANVEKTOR_3.readFeatures(json_UTMPERINDUKANVEKTOR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTMPERINDUKANVEKTOR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTMPERINDUKANVEKTOR_3.addFeatures(features_UTMPERINDUKANVEKTOR_3);
var lyr_UTMPERINDUKANVEKTOR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTMPERINDUKANVEKTOR_3, 
                style: style_UTMPERINDUKANVEKTOR_3,
                popuplayertitle: "UTM PERINDUKAN VEKTOR",
                interactive: true,
                title: '<img src="styles/legend/UTMPERINDUKANVEKTOR_3.png" /> UTM PERINDUKAN VEKTOR'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_AdmPasirKaliki_1.setVisible(true);lyr_Buffered_2.setVisible(true);lyr_UTMPERINDUKANVEKTOR_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_AdmPasirKaliki_1,lyr_Buffered_2,lyr_UTMPERINDUKANVEKTOR_3];
lyr_AdmPasirKaliki_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_Buffered_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_UTMPERINDUKANVEKTOR_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AdmPasirKaliki_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_Buffered_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_UTMPERINDUKANVEKTOR_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_AdmPasirKaliki_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_Buffered_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_UTMPERINDUKANVEKTOR_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_UTMPERINDUKANVEKTOR_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});