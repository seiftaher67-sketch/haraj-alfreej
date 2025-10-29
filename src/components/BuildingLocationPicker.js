import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// أيقونة مخصصة للموقع
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const LocationMarker = ({ position, setPosition, setAddress, onLocationSelect }) => {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      fetchAddress(e.latlng, setAddress, onLocationSelect);
    },
  });
  return position ? <Marker position={position} icon={markerIcon} /> : null;
};

// دالة لتحليل العنوان إلى مكونات
const parseAddress = (address) => {
  return {
    province: address.state || address.region || '',
    city: address.city || address.town || address.village || '',
    district: address.suburb || address.neighbourhood || address.quarter || '',
    street: address.road || address.pedestrian || '',
  };
};

// دالة لتحويل الإحداثيات إلى عنوان نصي
const fetchAddress = async (latlng, setAddress, onLocationSelect) => {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latlng.lat}&lon=${latlng.lng}&format=json`
    );
    const data = await res.json();
    const address = data.display_name || "لم يتم العثور على عنوان";
    setAddress(address);
    const components = parseAddress(data.address || {});
    onLocationSelect({
      latitude: latlng.lat,
      longitude: latlng.lng,
      address,
      ...components
    });
  } catch (err) {
    console.error("❌ فشل في جلب العنوان:", err);
  }
};



const BuildingLocationPicker = ({ onLocationSelect }) => {
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState("");

  return (
    <div className="space-y-4 bg-white p-4 rounded-xl shadow-md h-100">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        📍 حدد الموقع 
      </h2>

      {/* خريطة OpenStreetMap */}
      <div className="h-60 rounded-xl overflow-hidden border border-gray-200 relative z-0">
        <MapContainer
          center={[24.7136, 46.6753]} // الرياض كموقع افتراضي
          zoom={13}
          style={{ height: '100%', width: '100%', zIndex: 1 }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker
            position={position}
            setPosition={setPosition}
            setAddress={setAddress}
            onLocationSelect={onLocationSelect}
          />
        </MapContainer>
      </div>



      {/* عرض العنوان المستخرج */}
      {address && (
        <div className="bg-blue-50 border border-blue-200 text-blue-800 p-2 rounded-lg text-sm">
          <strong>العنوان المحدد:</strong> {address}
        </div>
      )}
    </div>
  );
};

export default BuildingLocationPicker;
