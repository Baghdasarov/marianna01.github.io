jQuery(function(e) {
	"use strict";
	google.maps.event.addDomListener(window, "load", function() {
		var e, l, t = {
				zoom: 15,
				draggable: !0,
				scrollwheel: !1,
				animation: google.maps.Animation.DROP,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				center: new google.maps.LatLng(40.1894954,44.5212747),
				styles: [{
					elementType: "geometry",
					stylers: [{
						color: "#212121",
						height: "30px"
					}]
				}, {
					elementType: "labels.icon",
					stylers: [{
						visibility: "off"
					}]
				}, {
					elementType: "labels.text.fill",
					stylers: [{
						color: "#757575"
					}]
				}, {
					elementType: "labels.text.stroke",
					stylers: [{
						color: "#212121"
					}]
				}, {
					featureType: "administrative",
					elementType: "geometry",
					stylers: [{
						color: "#757575"
					}]
				}, {
					featureType: "administrative.country",
					elementType: "labels.text.fill",
					stylers: [{
						color: "#9e9e9e"
					}]
				}, {
					featureType: "administrative.land_parcel",
					elementType: "labels",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "administrative.locality",
					elementType: "labels.text.fill",
					stylers: [{
						color: "#bdbdbd"
					}]
				}, {
					featureType: "poi",
					elementType: "labels.text",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "poi",
					elementType: "labels.text.fill",
					stylers: [{
						color: "#757575"
					}]
				}, {
					featureType: "poi.business",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "poi.park",
					elementType: "geometry",
					stylers: [{
						color: "#181818"
					}]
				}, {
					featureType: "poi.park",
					elementType: "labels.text",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "poi.park",
					elementType: "labels.text.fill",
					stylers: [{
						color: "#616161"
					}]
				}, {
					featureType: "poi.park",
					elementType: "labels.text.stroke",
					stylers: [{
						color: "#1b1b1b"
					}]
				}, {
					featureType: "road",
					elementType: "geometry.fill",
					stylers: [{
						color: "#2c2c2c"
					}]
				}, {
					featureType: "road",
					elementType: "labels.text.fill",
					stylers: [{
						color: "#8a8a8a"
					}]
				}, {
					featureType: "road.arterial",
					elementType: "geometry",
					stylers: [{
						color: "#373737"
					}]
				}, {
					featureType: "road.highway",
					elementType: "geometry",
					stylers: [{
						color: "#3c3c3c"
					}]
				}, {
					featureType: "road.highway.controlled_access",
					elementType: "geometry",
					stylers: [{
						color: "#4e4e4e"
					}]
				}, {
					featureType: "road.local",
					elementType: "labels",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "road.local",
					elementType: "labels.text.fill",
					stylers: [{
						color: "#616161"
					}]
				}, {
					featureType: "transit",
					elementType: "labels.text.fill",
					stylers: [{
						color: "#757575"
					}]
				}, {
					featureType: "water",
					elementType: "geometry",
					stylers: [{
						color: "#000000"
					}]
				}, {
					featureType: "water",
					elementType: "labels.text.fill",
					stylers: [{
						color: "#3d3d3d"
					}]
				}]
			},
			o = document.getElementById("map"),
			r = new google.maps.Map(o, t),
			s = [
				['<p"class="logomap">Way2Up</p>', 40.1894954,44.5212747, "images/pin3.gif"]
			],
			a = new google.maps.InfoWindow;
		for (l = 0; l < s.length; l++) e = new google.maps.Marker({
			position: new google.maps.LatLng(s[l][1], s[l][2]),
			animation: google.maps.Animation.BOUNCE,
			map: r,
			icon: s[l][3]
		}), google.maps.event.addListener(e, "click", function(e, l) {
			return function() {
				a.setContent(s[l][0]), a.open(r, e)
			}
		}(e, l))
	})
});
