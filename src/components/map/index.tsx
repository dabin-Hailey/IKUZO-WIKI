import React, { useState, useEffect } from 'react';
import * as S from './Map.styled';

declare const window: typeof globalThis & {
  kakao: any;
};

interface MapComponentProps {
  onAddressSelect: (address: string) => void;
  onPlaceSelect?: (place: string) => void;
  initialValue?: string;
}

const MapComponent = ({
  onAddressSelect,
  onPlaceSelect,
  initialValue,
}: MapComponentProps) => {
  const [search, setSearch] = useState('');

  let markers: any = [];
  let map: any;
  let places: any;
  let infoWindow: any;

  const handlePlaceClick = (place: string, address: string) => {
    onAddressSelect(address);
    if (onPlaceSelect) {
      onPlaceSelect(place);
    }
  };

  const searchPlaces = () => {
    const keyword = (document.getElementById('keyword') as HTMLInputElement)
      ?.value;
    if (!keyword) {
      alert('검색어를 입력해주세요!');
      return false;
    }
    if (places) {
      places.keywordSearch(keyword, placesSearchCB);
    }

    return true;
  };

  const placesSearchCB = (data: any, status: string, pagination: object) => {
    if (status === window.kakao.maps.services.Status.OK) {
      displayPlaces(data);
      displayPagination(pagination);
    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      alert('검색 결과가 존재하지 않습니다.');
    } else if (status === window.kakao.maps.services.Status.ERROR) {
      alert('검색 결과 중 오류가 발생했습니다.');
    }
  };

  const displayPlaces = (places: any) => {
    const listEl = document.getElementById('places-list');
    const menuEl = document.getElementById('menu-container') as HTMLElement;
    const fragment = document.createDocumentFragment();
    const bounds = new window.kakao.maps.LatLngBounds();

    removeAllChildNodes(listEl);
    removeMarker();

    for (let i = 0; i < places.length; i += 1) {
      const placePosition = new window.kakao.maps.LatLng(
        places[i].y,
        places[i].x,
      );
      const marker = addMarker(placePosition, i, places[i]);
      const itemEl = getListItem(placePosition, i, places[i]);

      bounds.extend(placePosition);

      ((marker, title) => {
        window.kakao.maps.event.addListener(marker, 'mouseover', () => {
          displayInfowindow(marker, title);
        });

        window.kakao.maps.event.addListener(marker, 'mouseout', () => {
          infoWindow.close();
        });

        // itemEl.onmouseover = () => {
        //   displayInfowindow(marker, title);
        // };

        // itemEl.onmouseout = () => {
        //   infoWindow.close();
        // };
      })(marker, places[i].place_name);

      fragment.appendChild(itemEl);
    }

    listEl?.appendChild(fragment);
    menuEl.scrollTop = 0;

    if (map) {
      map.setBounds(bounds);
    }
  };

  function getListItem(position: any, index: any, places: any) {
    const el = document.createElement('li');
    let itemStr =
      `<span class="markerbg marker_${index + 1}"></span>` +
      `<div class="info">` +
      `<h5>${places.place_name}</h5>`;
    if (places.road_address_name) {
      itemStr +=
        `<span>${places.road_address_name}</span>` +
        `<span class="jibun gray">` +
        `<img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_jibun.png" />${places.address_name}</span>`;
    } else {
      itemStr += `<span>${places.address_name}</span>`;
    }

    itemStr += `  <span class="tel">${places.phone}</span></div>`;

    el.innerHTML = itemStr;
    el.className = 'item';

    el.addEventListener('click', () => {
      console.log(places.place_name);
      handlePlaceClick(places.place_name, places.address_name);
      map.setCenter(position);
      map.setLevel(5);
    });

    return el;
  }

  function addMarker(position: any, idx: any, place: any) {
    const imageSrc =
      'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png';
    const imageSize = new window.kakao.maps.Size(36, 37);
    const imgOptions = {
      spriteSize: new window.kakao.maps.Size(36, 691),
      spriteOrigin: new window.kakao.maps.Point(0, idx * 46 + 10),
      offset: new window.kakao.maps.Point(13, 37),
    };

    const markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imgOptions,
    );

    const marker = new window.kakao.maps.Marker({
      position,
      image: markerImage,
    });

    window.kakao.maps.event.addListener(marker, 'click', () => {
      handlePlaceClick(place.place_name, place.address_name);
      map.setCenter(position);
      map.setLevel(5);
    });

    marker.setMap(map);
    markers.push(marker);

    return marker;
  }

  function removeMarker() {
    for (let i = 0; i < markers.length; i += 1) {
      markers[i].setMap(null);
    }
    markers = [];
  }

  function removeAllChildNodes(el: any) {
    while (el.hasChildNodes()) {
      el.removeChild(el.lastChild);
    }
  }

  function displayPagination(pagination: any) {
    const paginationEl = document.getElementById('pagination');
    const fragment = document.createDocumentFragment();
    let i: number;

    if (paginationEl) {
      while (paginationEl.hasChildNodes()) {
        if (paginationEl.lastChild) {
          paginationEl.removeChild(paginationEl.lastChild);
        }
      }
    }

    for (i = 1; i <= pagination.last; i += 1) {
      const el = document.createElement('a');
      el.href = '#';
      el.innerHTML = i.toString();

      if (i === pagination.current) {
        el.className = 'on';
      } else {
        el.onclick = (i => {
          return () => {
            pagination.gotoPage(i);
          };
        })(i);
      }

      fragment.appendChild(el);
    }
    if (paginationEl) {
      paginationEl.appendChild(fragment);
    }
  }

  function displayInfowindow(marker: any, title: any) {
    const content = `<div style="padding:5px;z-index:1;">${title}</div>`;

    infoWindow.setContent(content);
    infoWindow.open(map, marker);
  }

  useEffect(() => {
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(38.2313466, 128.2139293),
          level: 3,
        };

        map = new window.kakao.maps.Map(container, options);
        places = new window.kakao.maps.services.Places();
        infoWindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

        const searchForm = document.getElementById('form');
        searchForm?.addEventListener('submit', e => {
          e.preventDefault();
          searchPlaces();
        });
      });
      if (initialValue) {
        setSearch(initialValue);
        console.log(search);
        setTimeout(() => {
          searchPlaces();
        }, 100);
      }
    };

    const script = document.createElement('script');
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=9b030ce60bbd0b34fbe467f46bd084a8&libraries=services&autoload=false';
    document.head.appendChild(script);
    script.addEventListener('load', onLoadKakaoMap);

    return () => {
      script.removeEventListener('load', onLoadKakaoMap);
    };
  }, []);

  const handleChange = (e: any) => {
    setSearch(e?.target.value);
  };

  return (
    <S.MapContainer>
      <S.Map id="map"></S.Map>
      <S.MenuContainer id="menu-container">
        <S.Option>
          <form
            id="form"
            onSubmit={searchPlaces}
          >
            <input
              type="text"
              id="keyword"
              size={15}
              value={search}
              onChange={handleChange}
            />
            <button type="submit">검색하기</button>
          </form>
        </S.Option>
        <hr />
        <S.PlaceList id="places-list"></S.PlaceList>
        <S.Pagination id="pagination"></S.Pagination>
      </S.MenuContainer>
    </S.MapContainer>
  );
};

MapComponent.defaultProps = {
  onPlaceSelect: undefined,
  initialValue: '',
};

export default MapComponent;
