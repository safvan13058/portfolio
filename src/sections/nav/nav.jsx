import React, { useEffect, useState } from "react";
import Toggle from "../common/toggle"; // Import Toggle component
import "./nav.css";
import "../common/colour.css";
import AdminDashboard from "../../admin/admin";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [showLogin, setShowLogin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [credentials, setCredentials] = useState({ username: "", password: "" });
    // Function to toggle dark mode
    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);

        document.body.classList.toggle("dark-mode", newMode);
        localStorage.setItem("darkMode", newMode ? "enabled" : "disabled");
    };

    // Function to check system/browser theme
    const checkSystemTheme = () => {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.body.classList.add("dark-mode");
            setDarkMode(true);
        }
    };

    // Effect to load theme on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem("darkMode");

        if (savedTheme === "enabled") {
            document.body.classList.add("dark-mode");
            setDarkMode(true);
        } else if (savedTheme === null) {
            // If no theme is saved, follow system preference
            checkSystemTheme();
        }

        // Listen for system theme change
        const systemThemeListener = window.matchMedia("(prefers-color-scheme: dark)");
        systemThemeListener.addEventListener("change", (e) => {
            if (e.matches) {
                document.body.classList.add("dark-mode");
                setDarkMode(true);
            } else {
                document.body.classList.remove("dark-mode");
                setDarkMode(false);
            }
        });

        // Cleanup event listener on unmount
        return () => systemThemeListener.removeEventListener("change", () => { });
    }, []);

    // Effect to listen for shortcut key (Ctrl + Shift + D)
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.ctrlKey && event.shiftKey && event.key === "D") {
                toggleDarkMode();
            }
        };

        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [darkMode]);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false); // Close menu after clicking (on mobile)
        }
    };
    // Handle clicking the logo
    const handleLogoClick = () => {
        const newCount = clickCount + 1;
        setClickCount(newCount);

        if (newCount >= 5) {
            setShowLogin(true);
            setClickCount(0); // Reset counter after showing popup
        }
    };

    // Handle login form submission
    const handleLogin = (e) => {
        e.preventDefault();
    
        // Sample check — in real applications, you'd check against a server
        const validUsername = 'safvan@13058';
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const validPassword = `${hours}safvan${minutes}`; //
    
        if (credentials.username === validUsername && credentials.password === validPassword) {
          alert(`Logging in as ${credentials.username}`);
          setShowLogin(false);
          setClickCount(0);
          setIsLoggedIn(true);
          setIsAdmin(true);
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('isAdmin', 'true');
         
        } else {
          alert('Invalid username or password');
        }
      };
    const handleH2Click = () => {
        if (clickCount + 1 === 3) {
            setClickCount(0); // Reset click counter
            document.getElementById("admin-login-form").requestSubmit();
        } else {
            setClickCount(prevCount => prevCount + 1);
        }
    };
    useEffect(() => {
        const storedLogin = localStorage.getItem('isLoggedIn');
        const storedAdmin = localStorage.getItem('isAdmin');
        if (storedLogin === 'true' && storedAdmin === 'true') {
          setIsLoggedIn(true);
          setIsAdmin(true);
        }
      }, []);

      const handleLogout = () => {
        setIsLoggedIn(false);
        setIsAdmin(false);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('isAdmin');
      };
    
    if (isLoggedIn && isAdmin) {
         return (<>
            <button onClick={handleLogout} style={{ marginTop: '20px' }}>Logout</button>
      <AdminDashboard onLogout={handleLogout} />
      </>

      );
    }
    return (
        <nav className="navbar">
            <div className="stars"></div>
            {/* <div className="moon"></div> */}
            <div className="nav">
                <div className="logo" onClick={handleLogoClick}>
                    <div className="img"><img src="" alt="" /></div>
                    <div className="name">Mohamed Safvan VP</div>
                </div>

                {/* Mobile Menu Button */}
                <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </div>

                {/* Navigation Links */}
                <div className={`nav-links ${isOpen ? "open" : ""}`}>

                    {/* Dark Mode Toggle Component */}
                    <Toggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

                    <a onClick={() => scrollToSection("home")}>Home</a>
                    <a onClick={() => scrollToSection("about")}>About</a>
                    <a onClick={() => scrollToSection("process")}>Process</a>
                    <a onClick={() => scrollToSection("portfolio")}>Portfolio</a>
                    <a onClick={() => scrollToSection("services")}>Services</a>
                    <a className="contact-btn" onClick={() => scrollToSection("contact")}>Contact</a>
                </div>
            </div>
            {/* Login Popup */}
            {showLogin && (
                <div className="popup">

                    <div className="popup-content">
                        <div className="close"><button className="close-btns" onClick={() => setShowLogin(false)}>✖</button></div>


                        <div className="forms">
                            <form onSubmit={handleLogin} id="admin-login-form">
                                <h2 onClick={handleH2Click}>
                                    Admin Login 
                                </h2>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={credentials.username}
                                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                                    required
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={credentials.password}
                                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                    required
                                />
                                <button type="button">Login</button>
                            </form>
                        </div>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
