import React, { useState } from 'react';
import BuildingLocationPicker from '../../../components/BuildingLocationPicker';

const Location = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buildingName, setBuildingName] = useState('');
  const [streetName, setStreetName] = useState('');
  const [distinctiveMark, setDistinctiveMark] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [savedAddresses, setSavedAddresses] = useState([
    {
      id: 1,
      address: 'الرياض، حي العليا، شارع الملك فهد',
      buildingName: 'مبنى الرياض',
      streetName: 'شارع الملك فهد',
      distinctiveMark: 'مستشفى'
    },
    {
      id: 2,
      address: 'جدة، حي الصفا، شارع التحلية',
      buildingName: 'مبنى جدة',
      streetName: 'شارع التحلية',
      distinctiveMark: 'صيدلية'
    }
  ]);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleSave = () => {
    if (selectedLocation) {
      const newAddress = {
        id: Date.now(),
        address: selectedLocation.address,
        buildingName: selectedLocation.buildingName || '',
        streetName: selectedLocation.streetName || '',
        distinctiveMark: selectedLocation.distinctiveMark || '',
      };
      setSavedAddresses([...savedAddresses, newAddress]);
      console.log('Saving location:', selectedLocation);
    }
  };

  const handleManualAddressSubmit = () => {
    const manualAddress = {
      id: Date.now(),
      address: `${buildingName}, ${streetName}, ${distinctiveMark}`,
      buildingName,
      streetName,
      distinctiveMark,
    };
    setSavedAddresses([...savedAddresses, manualAddress]);
    console.log('Manual address:', manualAddress);
    setBuildingName('');
    setStreetName('');
    setDistinctiveMark('');
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">الموقع</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <BuildingLocationPicker onLocationSelect={handleLocationSelect} />
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            ادخل العنوان
          </button>
          <button
            onClick={handleSave}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            حفظ
          </button>
        </div>
      </div>

      {/* Modal for manual address entry */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-[480px] text-right">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">إدخال العنوان يدوياً</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-600 hover:text-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">اسم المبنى</label>
                <input
                  type="text"
                  value={buildingName}
                  onChange={(e) => setBuildingName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg text-right"
                  placeholder="أدخل اسم المبنى"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">اسم الشارع</label>
                <input
                  type="text"
                  value={streetName}
                  onChange={(e) => setStreetName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg text-right"
                  placeholder="أدخل اسم الشارع"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">علامة مميزة</label>
                <input
                  type="text"
                  value={distinctiveMark}
                  onChange={(e) => setDistinctiveMark(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg text-right"
                  placeholder="صيدلية - مستشفى - محل تجاري"
                />
              </div>
              <button
                onClick={handleManualAddressSubmit}
                className="w-full bg-yellow-400 text-black py-3 rounded-lg hover:bg-yellow-500 transition-colors"
              >
                تم
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Saved Addresses Section */}
      <div className="bg-white rounded-lg shadow p-6 mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">العناوين المحفوظة</h2>
        {savedAddresses.length > 0 ? (
          <div className="space-y-4">
            {savedAddresses.map((address) => (
              <div key={address.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">{address.address}</p>
                    <div className="text-sm text-gray-600 mt-1">
                      <p>المبنى: {address.buildingName}</p>
                      <p>الشارع: {address.streetName}</p>
                      <p>علامة مميزة: {address.distinctiveMark}</p>
                    </div>
                  </div>
                  <button className="text-red-500 hover:text-red-700 ml-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">لا توجد عناوين محفوظة بعد.</p>
        )}
      </div>
    </div>
  );
};

export default Location;
