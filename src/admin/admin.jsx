import React, { useState, useEffect } from 'react';
import './admin.css'; // assuming you're using external styles

function AdminDashboard({ onLogout }) {
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        category: '',
        image: '',
        description: ''
    });
    const portfolioItem = [
        {
            id: 1,
            image: 'https://source.unsplash.com/400x300/?abstract',
            title: 'Product Admin Dashboard',
            category: 'UI-UX DESIGN',
        },
        {
            id: 2,
            image: 'https://source.unsplash.com/400x300/?technology',
            title: 'E-Commerce Admin Dashboard',
            category: 'UI-UX DESIGN',
        },
        {
            id: 3,
            image: 'https://source.unsplash.com/400x300/?laptop',
            title: 'Finance Analytics Panel',
            category: 'UI-UX DESIGN',
        },
        {
            id: 4,
            image: 'https://source.unsplash.com/400x300/?office',
            title: 'Team Collaboration Interface',
            category: 'UI-UX DESIGN',
        },
        {
            id: 5,
            image: 'https://source.unsplash.com/400x300/?toy',
            title: 'Inventory Management UI',
            category: 'UI-UX DESIGN',
        },
        {
            id: 6,
            image: 'https://source.unsplash.com/400x300/?flower',
            title: 'Creative Portfolio Template',
            category: 'UI-UX DESIGN',
        },
    ];
    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure you want to delete this item?');
        if (confirm) {
            setPortfolioItems((prev) => prev.filter(item => item.id !== id));
        }
    };

    // 🧠 Fetch data from backend (replace with your backend endpoint)
    useEffect(() => {
        fetch('http://localhost:5000/portfolio') // Change to your backend URL
            .then(res => res.json())
            .then(data => setPortfolioItems(data))
            .catch(err => console.error('Error fetching portfolio:', err));
    }, []);

    // ✏️ Handle form inputs
    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'image') {
            const file = files[0];
            setFormData(prev => ({
                ...prev,
                image: file // save actual File object
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };


    // 📤 Submit to backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:5000/portfolio', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const newItem = await res.json();
            setPortfolioItems(prev => [...prev, newItem]); // Update UI
            setFormData({ title: '', category: '', image: '' }); // Reset form
        } catch (err) {
            console.error('Upload failed:', err);
        }
    };
    // ✅ Handle logout

    return (
        <div className="admin-dashboard">
            <h1>Admin Panel</h1>
            <button onClick={onLogout} className="logout-btn">Logout</button>
            <p>Welcome, Admin! Upload and manage your portfolio items here.</p>
            <div className="portfolio-list">
                <h2>Portfolio</h2>
                {portfolioItem.map((item) => (
                    <div key={item.id} className="portfolio_con">
                        <img src={item.image} alt={item.title} width="100" />
                        <div>{item.title}</div>
                        <button onClick={() => {
                            setSelectedItem(item);
                            setShowModal(true);
                        }}>View</button>

                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                ))}
            </div>
            {/* ✅ Upload Form */}
            <form className="upload-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    required
                />

                <button type="submit">Upload</button>
            </form>

            {/* ✅ Portfolio Grid */}
            {showModal && selectedItem && (
                <div className="adminmodal-overlay" onClick={() => setShowModal(false)}>
                    <div className="adminmodal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedItem.image} alt={selectedItem.title} />
                        <h2>{selectedItem.title}</h2>
                        <p><strong>Category:</strong> {selectedItem.category}</p>
                        <p><strong>Description:</strong> Viarums eleifend convallis ante, non pharetra libero molestie laoreet.</p>
                        <button onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}


        </div>
    );
}

export default AdminDashboard;
