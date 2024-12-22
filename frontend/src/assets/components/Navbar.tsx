// src/components/Navbar.tsx
import { useState } from 'react';
import { useNavigate, } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { path: '/Home', label: 'Home' },
        { path: '/Offer', label: 'Offer' },
        { path: '/Global', label: 'Features' },
        { path: '/FAQ', label: 'FAQ' }
    ];

    const handleNavigation = (url: string) => {
        navigate(url);
        setIsOpen(false);
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div 
                        className="flex-shrink-0 cursor-pointer"
                        onClick={() => handleNavigation('/Home')}
                    >
                        <span className="text-xl text-black font-bold">Bull FX</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <div
                                key={item.path}
                                className="text-gray-600 hover:text-gray-900 cursor-pointer 
                                transition-colors duration-200"
                                onClick={() => handleNavigation(item.path)}
                            >
                                {item.label}
                            </div>
                        ))}
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={() => handleNavigation('/Signup')}
                            className="px-4 py-2 rounded-md bg-blue-500 text-white 
                            hover:bg-blue-600 transition-colors duration-200"
                        >
                            Sign up
                        </button>
                        <button
                            onClick={() => handleNavigation('/Signin')}
                            className="px-4 py-2 rounded-md border border-gray-300 
                            text-gray-600 hover:bg-gray-50 transition-colors duration-200"
                        >
                            Sign in
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 
                            rounded-md text-gray-600 hover:text-gray-900 
                            hover:bg-gray-100 focus:outline-none"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
                    {navItems.map((item) => (
                        <div
                            key={item.path}
                            className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 
                            block px-3 py-2 rounded-md text-base cursor-pointer"
                            onClick={() => handleNavigation(item.path)}
                        >
                            {item.label}
                        </div>
                    ))}
                    {/* Mobile Auth Links */}
                    <div className="mt-4 space-y-2 px-3">
                        <button
                            onClick={() => handleNavigation('/Signup')}
                            className="w-full px-4 py-2 rounded-md bg-blue-500 
                            text-white hover:bg-blue-600 transition-colors duration-200"
                        >
                            Sign up
                        </button>
                        <button
                            onClick={() => handleNavigation('/Signin')}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 
                            text-gray-600 hover:bg-gray-50 transition-colors duration-200"
                        >
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;