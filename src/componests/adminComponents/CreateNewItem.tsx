import React, { useState } from 'react';
import { X } from 'lucide-react';

interface MenuFormData {
  name: string;
  description: string;
  price: string;
  type: 'food' | 'drinks';
}

interface CreateItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  formData: MenuFormData;
  setFormData: (data: MenuFormData) => void;
  editingId: string | null;
}

const CreateItemModal: React.FC<CreateItemModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  formData,
  setFormData,
  editingId
}) => {
  const [errors, setErrors] = useState({
    name: '',
    description: ''
  });

  if (!isOpen) return null;

  const validateField = (name: string, value: string) => {
    if (value.length < 3) {
      setErrors(prev => ({
        ...prev,
        [name]: 'Must be at least 3 characters long'
      }));
      return false;
    }
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const isNameValid = validateField('name', formData.name);
    const isDescriptionValid = validateField('description', formData.description);

    if (isNameValid && isDescriptionValid) {
      onSubmit(e);
    }
  };

  const handleInputChange = (field: keyof MenuFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (field === 'name' || field === 'description') {
      validateField(field, value);
    }
  }; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <h2 className="text-xl font-semibold text-white mb-4">
          {editingId ? 'Edit Item' : 'Add New Item'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-1">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={e => handleInputChange('name', e.target.value)}
              className="w-full bg-gray-800 text-white rounded px-3 py-2 border border-gray-700 focus:border-blue-500 focus:outline-none"
              required
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">{errors.name}</span>
            )}
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Description</label>
            <textarea
              value={formData.description}
              onChange={e => handleInputChange('description', e.target.value)}
              className="w-full bg-gray-800 text-white rounded px-3 py-2 border border-gray-700 focus:border-blue-500 focus:outline-none"
              rows={3}
              required
            />
            {errors.description && (
              <span className="text-red-500 text-sm mt-1">{errors.description}</span>
            )}
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Price</label>
            <input
              type="number"
              step="0.01"
              value={formData.price}
              onChange={e => handleInputChange('price', e.target.value.toString())}
              className="w-full bg-gray-800 text-white rounded px-3 py-2 border border-gray-700 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Type</label>
            <select
              value={formData.type}
              onChange={e => handleInputChange('type', e.target.value as 'food' | 'drinks')}
              className="w-full bg-gray-800 text-white rounded px-3 py-2 border border-gray-700 focus:border-blue-500 focus:outline-none"
            >
              <option value="food">Food</option>
              <option value="drinks">Drinks</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded py-2 font-medium hover:bg-blue-700 transition-colors"
          >
            {editingId ? 'Update Item' : 'Add Item'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateItemModal;