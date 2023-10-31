/*global kakao*/ 
import React, { useEffect } from 'react'
import { markerdata } from "./markerData";


const Location=()=>{

  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.5014, 127.0368),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    
    markerdata.forEach((el) => {
        // 마커를 생성합니다
        new kakao.maps.Marker({
          //마커가 표시 될 지도
          map: map,
          //마커가 표시 될 위치
          position: new kakao.maps.LatLng(el.lat, el.lng),
          //마커에 hover시 나타날 title
          title: el.title,
        });
      });
    }, [])


    return (
        <div>
        <div id="map" style={{width:"500px", height:"400px"}}></div>
        </div>
    )
}

export default Location;