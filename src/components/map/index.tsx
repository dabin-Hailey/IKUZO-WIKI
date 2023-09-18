import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const MapComponent = () => {
  const mapScript = document.createElement('script');
  mapScript.async = true;
  mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=9b030ce60bbd0b34fbe467f46bd084a8&autoload=false&libraries=services,clusterer,drawing`;
  document.head.appendChild(mapScript);

  useEffect(() => {
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667,
        );

        const marker = new window.kakao.maps.Marker({
          map,
          position: markerPosition,
        });

        marker.setMap(map);
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);

    return () => {
      mapScript.removeEventListener('load', onLoadKakaoMap);
    };
  }, []);

  return (
    <div
      id="map"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};

export default MapComponent;
