import React from 'react';
import s from './Map.module.css';
window.ymaps.ready(() => {
    const localMap = new window.ymaps.Map('map', {center: [51.506863, 45.956584], zoom: 9}, {
      searchControlProvider: 'yandex#search'});
    
    localMap.events.add('click', function (e) {
    	let coords = e.get('coords');
    	console.log(coords);
		});
  });
const Mymap = () => {
    return (
                <div id ='map' className ={s.map}>My awesome application with maps!</div>
        );
}

export default Mymap;