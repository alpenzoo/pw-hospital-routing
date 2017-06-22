import {Component, OnInit} from '@angular/core';

import {GoogleMapsAPIWrapper} from '@agm/core';

declare var google:any;

@Component({
  selector: 'app-map-content',
  template: ''
})
export class MapContentComponent implements OnInit {

  constructor(public mapApiWrapper:GoogleMapsAPIWrapper) {

  }

  ngOnInit() {

    this.mapApiWrapper.getNativeMap()
      .then((map: any)=> {

        // I have been manually updating core/services/google-maps-types.d.ts to include things they didn't include.
        console.log(map.getZoom());

        let position = new google.maps.LatLng(45.521, -122.677);

        var cityCircle = new google.maps.Circle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
          map: map,
          center: position,
          radius: 10000
        });
        console.log(map.data);
        map.data.addListener('click', function(event) {
          map.data.revertStyle();
          console.log(event);
          map.data.overrideStyle(event.feature,
            {strokeWeight: 2, strokeColor: 'yellow', fillColor: 'yellow'}); 
        });

      });

  }

}