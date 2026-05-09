'use client';

import { useState, useEffect } from 'react';
import { Car } from '@/types';
import {
  getAllCars,
  addCar,
  updateCar,
  deleteCar,
  getCarStats,
  exportCarsToJSON,
  importCarsFromJSON,
  resetToDefault,
  searchCars,
} from '@/lib/cars-database';

// Predefined options for dropdowns
const MERKEN = [
  'Audi', 'BMW', 'Citroën', 'Fiat', 'Ford', 'Hyundai', 'Kia', 'Mazda', 'Mercedes-Benz',
  'Mini', 'Mitsubishi', 'Nissan', 'Opel', 'Peugeot', 'Renault', 'Seat', 'Skoda',
  'Toyota', 'Volkswagen', 'Volvo'
];

const CARROSSERIEEN = ['Sedan', 'Hatchback', 'Stationwagen', 'SUV', 'Cabriolet', 'Coupé', 'MPV'];
const BRANDSTOFFEN = ['Benzine', 'Diesel', 'Elektrisch', 'Hybride', 'LPG'];
const TRANSMISSIES = ['Handmatig', 'Automaat', 'Semi-automaat'];
const STATUS_OPTIONS = ['beschikbaar', 'gereserveerd', 'verkocht'];

const EMPTY_CAR: Omit<Car, 'id'> = {
  merk: '',
  model: '',
  variant: '',
  bouwjaar: new Date().getFullYear(),
  carrosserie: 'Hatchback',
  brandstof: 'Benzine',
  transmissie: 'Handmatig',
  kilometerstand: 0,
  prijs: 0,
  afbeeldingen: [],
  status: 'beschikbaar',
  apk: new Date().getFullYear().toString(),
  features: [],
  beschrijving: '',
  vermogen: '',
  verbruik: '',
  kenteken: '',
};

export default function AdminOccasionsPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    beschikbaar: 0,
    gereserveerd: 0,
    verkocht: 0,
    gemiddeldePrijs: 0,
    merken: [] as string[],
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCar, setEditingCar] = useState<Car | null>(null);
  const [formData, setFormData] = useState<Omit<Car, 'id'>>(EMPTY_CAR);
  const [newFeature, setNewFeature] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');
  const [importJson, setImportJson] = useState('');
  const [showImportModal, setShowImportModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  // Load cars on mount
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const allCars = getAllCars();
    setCars(allCars);
    setStats(getCarStats());
  };

  // Filter cars based on search and status
  const filteredCars = cars.filter((car) => {
    const matchesSearch =
      searchQuery === '' ||
      car.merk.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.variant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (car.kenteken && car.kenteken.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus = filterStatus === 'all' || car.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  // Open modal for new car
  const handleAddNew = () => {
    setEditingCar(null);
    setFormData(EMPTY_CAR);
    setIsModalOpen(true);
  };

  // Open modal for editing
  const handleEdit = (car: Car) => {
    setEditingCar(car);
    setFormData({ ...car });
    setIsModalOpen(true);
  };

  // Save car (create or update)
  const handleSave = () => {
    if (editingCar) {
      updateCar(editingCar.id, formData);
    } else {
      addCar(formData);
    }
    loadData();
    setIsModalOpen(false);
  };

  // Delete car
  const handleDelete = (id: string) => {
    if (confirm('Weet je zeker dat je deze auto wilt verwijderen?')) {
      deleteCar(id);
      loadData();
    }
  };

  // Add feature
  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setFormData({
        ...formData,
        features: [...formData.features, newFeature.trim()],
      });
      setNewFeature('');
    }
  };

  // Remove feature
  const handleRemoveFeature = (index: number) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index),
    });
  };

  // Add image URL
  const handleAddImage = () => {
    if (newImageUrl.trim()) {
      setFormData({
        ...formData,
        afbeeldingen: [...formData.afbeeldingen, newImageUrl.trim()],
      });
      setNewImageUrl('');
    }
  };

  // Remove image
  const handleRemoveImage = (index: number) => {
    setFormData({
      ...formData,
      afbeeldingen: formData.afbeeldingen.filter((_, i) => i !== index),
    });
  };

  // Export to JSON
  const handleExport = () => {
    const json = exportCarsToJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `carstore-occasions-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Import from JSON
  const handleImport = () => {
    try {
      importCarsFromJSON(importJson);
      loadData();
      setShowImportModal(false);
      setImportJson('');
      alert('Import succesvol!');
    } catch (error) {
      alert('Fout bij importeren: ' + (error as Error).message);
    }
  };

  // Reset to default
  const handleReset = () => {
    if (confirm('Weet je zeker dat je alle auto wilt resetten naar de standaard waarden?')) {
      resetToDefault();
      loadData();
    }
  };

  // Format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Occasions Beheer</h1>
          <p className="text-white/60">Beheer het auto aanbod van Car Store Cuijk</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-[#1a1a1a] rounded-xl p-4 border border-white/10">
            <p className="text-white/40 text-xs mb-1">Totaal</p>
            <p className="text-2xl font-bold">{stats.total}</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-4 border border-white/10">
            <p className="text-white/40 text-xs mb-1">Beschikbaar</p>
            <p className="text-2xl font-bold text-green-500">{stats.beschikbaar}</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-4 border border-white/10">
            <p className="text-white/40 text-xs mb-1">Gereserveerd</p>
            <p className="text-2xl font-bold text-yellow-500">{stats.gereserveerd}</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-4 border border-white/10">
            <p className="text-white/40 text-xs mb-1">Verkocht</p>
            <p className="text-2xl font-bold text-red-500">{stats.verkocht}</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-4 border border-white/10">
            <p className="text-white/40 text-xs mb-1">Gem. Prijs</p>
            <p className="text-2xl font-bold">{formatPrice(stats.gemiddeldePrijs)}</p>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={handleAddNew}
            className="px-6 py-3 bg-[#c8102e] hover:bg-[#a00d24] rounded-lg font-semibold transition-colors"
          >
            + Nieuwe Auto
          </button>
          <button
            onClick={handleExport}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-colors"
          >
            Export JSON
          </button>
          <button
            onClick={() => setShowImportModal(true)}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-colors"
          >
            Import JSON
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-colors text-red-400"
          >
            Reset
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-wrap gap-4 mb-6">
          <input
            type="text"
            placeholder="Zoek op merk, model, kenteken..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 min-w-[300px] px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg focus:outline-none focus:border-[#c8102e]"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg focus:outline-none focus:border-[#c8102e]"
          >
            <option value="all">Alle statussen</option>
            <option value="beschikbaar">Beschikbaar</option>
            <option value="gereserveerd">Gereserveerd</option>
            <option value="verkocht">Verkocht</option>
          </select>
        </div>

        {/* Cars Table */}
        <div className="bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="text-left p-4 font-semibold">Auto</th>
                  <th className="text-left p-4 font-semibold">Bouwjaar</th>
                  <th className="text-left p-4 font-semibold">KM</th>
                  <th className="text-left p-4 font-semibold">Prijs</th>
                  <th className="text-left p-4 font-semibold">Status</th>
                  <th className="text-left p-4 font-semibold">Acties</th>
                </tr>
              </thead>
              <tbody>
                {filteredCars.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-white/40">
                      Geen occasions gevonden
                    </td>
                  </tr>
                ) : (
                  filteredCars.map((car) => (
                    <tr key={car.id} className="border-t border-white/10 hover:bg-white/5">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          {car.afbeeldingen[0] ? (
                            <img
                              src={car.afbeeldingen[0]}
                              alt={`${car.merk} ${car.model}`}
                              className="w-12 h-12 object-cover rounded-lg"
                            />
                          ) : (
                            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white/30">
                              🚗
                            </div>
                          )}
                          <div>
                            <p className="font-semibold">
                              {car.merk} {car.model}
                            </p>
                            <p className="text-sm text-white/50">{car.variant}</p>
                            {car.kenteken && (
                              <p className="text-xs text-white/30">{car.kenteken}</p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="p-4">{car.bouwjaar}</td>
                      <td className="p-4">{car.kilometerstand.toLocaleString('nl-NL')}</td>
                      <td className="p-4 font-semibold">{formatPrice(car.prijs)}</td>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            car.status === 'beschikbaar'
                              ? 'bg-green-500/20 text-green-400'
                              : car.status === 'gereserveerd'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-red-500/20 text-red-400'
                          }`}
                        >
                          {car.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(car)}
                            className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-sm transition-colors"
                          >
                            Bewerk
                          </button>
                          <button
                            onClick={() => handleDelete(car.id)}
                            className="px-3 py-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded text-sm transition-colors"
                          >
                            Verwijder
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-[#1a1a1a] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-white/10">
              <h2 className="text-2xl font-bold">
                {editingCar ? 'Auto Bewerken' : 'Nieuwe Auto'}
              </h2>
            </div>

            <div className="p-6 space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-white/60 mb-2">Merk *</label>
                  <select
                    value={formData.merk}
                    onChange={(e) => setFormData({ ...formData, merk: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[#c8102e]"
                    required
                  >
                    <option value="">Kies merk</option>
                    {MERKEN.map((merk) => (
                      <option key={merk} value={merk}>
                        {merk}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Model *</label>
                  <input
                    type="text"
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[#c8102e]"
                    placeholder="bijv. A4"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Variant</label>
                  <input
                    type="text"
                    value={formData.variant}
                    onChange={(e) => setFormData({ ...formData, variant: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[#c8102e]"
                    placeholder="bijv. 1.6 TDI Sport"
                  />
                </div>
              </div>

              {/* Technical Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm text-white/60 mb-2">Bouwjaar *</label>
                  <input
                    type="number"
                    value={formData.bouwjaar}
                    onChange={(e) => setFormData({ ...formData, bouwjaar: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[#c8102e]"
                    min="1900"
                    max={new Date().getFullYear() + 1}
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Kilometerstand *</label>
                  <input
                    type="number"
                    value={formData.kilometerstand}
                    onChange={(e) => setFormData({ ...formData, kilometerstand: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[#c8102e]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Prijs *</label>
                  <input
                    type="number"
                    value={formData.prijs}
                    onChange={(e) => setFormData({ ...formData, prijs: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[#c8102e]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">APK</label>
                  <input
                    type="text"
                    value={formData.apk}
                    onChange={(e) => setFormData({ ...formData, apk: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[#c8102e]"
                    placeholder="2026"
                  />
                </div>
              </div>

              {/* Car Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm text-white/60 mb-2">Carrosserie</label>
                  <select
                    value={formData.carrosserie}
                    onChange={(e) => setFormData({ ...formData, carrosserie: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[#c8102e]"
                  >
                    {CARROSSERIEEN.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Brandstof</label>
                  <select
                    value={formData.brandstof}
                    onChange={(e) => setFormData({ ...formData, brandstof: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[#c8102e]"
                  >
                    {BRANDSTOFFEN.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Transmissie</label>
                  <select
                    value={formData.transmissie}
                    onChange={(e) => setFormData({ ...formData, transmissie: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[#c8102e]"
                  >
                    {TRANSMISSIES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as Car['status'] })}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[#c8102e]"
                  >
                    {STATUS_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Extra Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/60 mb-2">Kenteken</label>
                  <input
                    type="text"
                    value={formData.kenteken || ''}
                    onChange={(e) => setFormData({ ...formData, kenteken: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[#c8102e]"
                    placeholder="XX-XXX-X"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Vermogen</label>
                  <input
                    type="text"
                    value={formData.vermogen || ''}
                    onChange={(e) => setFormData({ ...formData, vermogen: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[#c8102e]"
                    placeholder="bijv. 150 pk"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm text-white/60 mb-2">Beschrijving</label>
                <textarea
                  value={formData.beschrijving}
                  onChange={(e) => setFormData({ ...formData, beschrijving: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[#c8102e] h-24"
                  placeholder="Beschrijving van de auto..."
                />
              </div>

              {/* Features */}
              <div>
                <label className="block text-sm text-white/60 mb-2">Opties/Features</label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddFeature()}
                    className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[#c8102e]"
                    placeholder="bijv. Navigatie, Climate control..."
                  />
                  <button
                    onClick={handleAddFeature}
                    className="px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    +
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#c8102e]/20 text-[#c8102e] rounded-full text-sm flex items-center gap-2"
                    >
                      {feature}
                      <button
                        onClick={() => handleRemoveFeature(index)}
                        className="hover:text-white"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Images */}
              <div>
                <label className="block text-sm text-white/60 mb-2">Afbeeldingen</label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddImage()}
                    className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[#c8102e]"
                    placeholder="https://... of /cars/foto.jpg"
                  />
                  <button
                    onClick={handleAddImage}
                    className="px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    +
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {formData.afbeeldingen.map((url, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={url}
                        alt={`Foto ${index + 1}`}
                        className="w-full h-20 object-cover rounded-lg"
                      />
                      <button
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-sm"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 border-t border-white/10 flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-colors"
              >
                Annuleren
              </button>
              <button
                onClick={handleSave}
                disabled={!formData.merk || !formData.model}
                className="px-6 py-3 bg-[#c8102e] hover:bg-[#a00d24] rounded-lg font-semibold transition-colors disabled:opacity-50"
              >
                {editingCar ? 'Opslaan' : 'Toevoegen'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Import Modal */}
      {showImportModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-[#1a1a1a] rounded-xl max-w-2xl w-full">
            <div className="p-6 border-b border-white/10">
              <h2 className="text-2xl font-bold">Import JSON</h2>
            </div>
            <div className="p-6">
              <textarea
                value={importJson}
                onChange={(e) => setImportJson(e.target.value)}
                className="w-full h-64 px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[#c8102e] font-mono text-sm"
                placeholder="Plak hier je JSON data..."
              />
              <p className="mt-2 text-sm text-white/40">
                Waarschuwing: Dit overschrijft alle huidige occasions!
              </p>
            </div>
            <div className="p-6 border-t border-white/10 flex justify-end gap-4">
              <button
                onClick={() => setShowImportModal(false)}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-colors"
              >
                Annuleren
              </button>
              <button
                onClick={handleImport}
                className="px-6 py-3 bg-[#c8102e] hover:bg-[#a00d24] rounded-lg font-semibold transition-colors"
              >
                Importeren
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
