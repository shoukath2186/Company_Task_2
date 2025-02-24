import React, { useEffect, useState } from 'react';
import { Trash2, Edit, Plus } from 'lucide-react';
import CreateItemModal from './CreateNewItem';
import { CrateMenu, UpdateMenu,TakeAllItems,DeleteItem } from '../../API_handling/apis';

export interface MenuItem {
    _id: string;
    name: string;
    description: string;
    price: string;  // Ensuring price remains a string
    type: 'food' | 'drinks';
}

interface MenuFormData {
    name: string;
    description: string;
    price: string;  // Ensuring price remains a string
    type: 'food' | 'drinks';
}

const MenuHandling = () => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [chenge,setChenge] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState<MenuFormData>({
        name: '',
        description: '',
        price: '',
        type: 'food',
    });
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res:MenuItem[] = await TakeAllItems();
                // console.log(res);
                setMenuItems(res)
                
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    },[chenge])

    const handleAddItem = () => {
        setEditingId(null);
        setFormData({ name: '', description: '', price: '', type: 'food' });
        setIsModalOpen(true);
    };

    const handleEditItem = (item: MenuItem) => {
        setEditingId(item._id);
        setFormData({
            name: item.name,
            description: item.description,
            price: item.price,  // Keeping price as a string
            type: item.type,
        });
        setIsModalOpen(true);
    };

    const handleDeleteItem =async (_id: string) => {
          try {
             await DeleteItem(_id);
             setChenge(!chenge);
          } catch (error) {
            console.log(error);
            
          }
        // setMenuItems(prevItems => prevItems.filter(item => item._id !== _id));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (editingId) {
            try {
                await UpdateMenu({
                    _id: editingId,
                    name: formData.name,
                    description: formData.description,
                    price: formData.price,  // Keeping price as a string
                    type: formData.type,
                });

                setChenge(!chenge);
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                // const newId = Math.max(0, ...menuItems.map(item => item._id)) + 1;

               await CrateMenu({ 
                    name: formData.name,
                    description: formData.description,
                    price: formData.price,  // Keeping price as a string
                    type: formData.type,
                });

                setChenge(!chenge);
            } catch (error) {
                console.error(error);
            }
        }

        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-black p-6 pt-28">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-white text-3xl font-bold">Menu Management</h1>
                    <button
                        onClick={handleAddItem}
                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors"
                    >
                        <Plus size={20} />
                        Add New Item
                    </button>
                </div>

                <div className="grid gap-4">
                    {menuItems.map(item => (
                        <div key={item._id} className="bg-gray-900 p-4 flex justify-between items-center">
                            <div className="flex-1">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-white text-xl font-semibold">{item.name}</h3>
                                    <span className="bg-blue-600 text-white text-sm px-2 py-1 rounded">
                                        {item.type}
                                    </span>
                                </div>
                                <p className="text-gray-400 mt-1">{item.description}</p>
                                <p className="text-blue-500 font-semibold mt-2">
                                    ${parseFloat(item.price).toFixed(2)}  {/* Ensuring proper decimal format */}
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => handleEditItem(item)}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <Edit size={20} />
                                </button>
                                <button
                                    onClick={() => handleDeleteItem(item._id)}
                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <CreateItemModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmit}
                formData={formData}
                setFormData={setFormData}
                editingId={editingId}
            />
        </div>
    );
};

export default MenuHandling;
