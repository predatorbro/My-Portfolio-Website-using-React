import React, { useEffect, useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useDarkMode();

    // Debug logging for Nav component
    console.log('Nav component theme:', theme);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 10);
            setShowScrollTop(scrollY > 200);

            const sections = document.querySelectorAll("section");
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top < 100 && rect.bottom > 100) {
                    setActiveLink(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            {/* Header Navbar */}
            <header
                className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${isScrolled
                    ? `shadow-md h-16 ${theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`
                    : "h-24"
                    } ${theme === 'dark' ? 'bg-gray-800/90' : 'bg-white/80'}`}
            >
                <div className="max-w-[110rem] px-20 mx-auto relative flex justify-between items-center h-full">
                    {/* Logo */}
                    <div className="relative">
                        <a
                            href="/"
                            className="text-3xl font-semibold transition-all hover:opacity-80 text-[var(--primary)]"
                        >
                            <span className="text-4xl tracking-wider">Prasad B</span>hai
                        </a>
                        <div className="absolute -top-[6px] -left-3 w-0 h-0 border-t-4 border-l-4 border-[var(--primary)] transition-all opacity-0 hover:w-4/5 hover:h-full hover:opacity-100" />
                        <div className="absolute -bottom-[6px] -right-3 w-0 h-0 border-b-4 border-r-4 border-[var(--primary)] transition-all opacity-0 hover:w-4/5 hover:h-full hover:opacity-100" />
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex">
                        <ul className="flex gap-5 xl:gap-10 list-none text-sm lg:text-lg  ">
                            {[
                                "home",
                                "about",
                                "experties",
                                "services",
                                "projects",
                                "testimonial",
                                "contact",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className={`relative uppercase font-medium transition-all cursor-pointer ${activeLink === item
                                        ? "text-[var(--primary)]"
                                        : ""
                                        }`}
                                    style={activeLink === item ? {} : { color: theme === 'dark' ? '#d1d5db' : '#1f2937' }}
                                    onClick={() => scrollToSection(item)}
                                >
                                    {item}
                                    <span
                                        className={`absolute left-0 top-[-3px] h-[2px] rounded-full bg-[var(--primary)] transition-all duration-300 ${activeLink === item ? "w-[110%]" : "w-0"
                                            }`}
                                    ></span>
                                    <span
                                        className={`absolute right-0 bottom-[-3px] h-[2px] rounded-full bg-[var(--primary)] transition-all duration-300 ${activeLink === item ? "w-[110%]" : "w-0"
                                            }`}
                                    ></span>
                                </li>
                            ))}
                        </ul>
                    </nav>


                    {/* Nav for mobile */}
                    {/* Nav for mobile */}
                    <nav
                        className={`absolute -bottom-[28rem] right-16 md:hidden transition-all duration-300`}
                    >
                        <ul className="flex flex-col gap-2 lg:gap-5 xl:gap-10 list-none">
                            {[
                                "home",
                                "about",
                                "experties",
                                "services",
                                "projects",
                                "testimonial",
                                "contact",
                            ].map((item, index) => (
                                <li
                                    key={item}
                                    className={`text-center px-3 py-4 shadow-md relative uppercase font-medium text-md cursor-pointer
          transform transition-all duration-500 ease-out
          ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-[150%] opacity-0"}
          ${activeLink === item ? "text-[var(--primary)]" : theme === 'dark' ? "text-gray-100 bg-gray-800" : "text-gray-800 bg-white"}`}
                                    style={{
                                        transitionDelay: `${index * 100}ms`,
                                    }}
                                    onClick={() => {
                                        scrollToSection(item);
                                        setIsMobileMenuOpen(false);
                                    }}
                                >
                                    {item}
                                    <span
                                        className={`absolute left-0 top-[-3px] h-[2px] rounded-full bg-[var(--primary)] transition-all duration-300 ${activeLink === item ? "w-[110%]" : "w-0"
                                            }`}
                                    ></span>
                                    <span
                                        className={`absolute right-0 bottom-[-3px] h-[2px] rounded-full bg-[var(--primary)] transition-all duration-300 ${activeLink === item ? "w-[110%]" : "w-0"
                                            }`}
                                    ></span>
                                </li>
                            ))}
                        </ul>
                    </nav>



                    {/* Dark Mode Toggle & Mobile menu */}
                    <div className="flex items-center gap-4">
                        {/* Dark Mode Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className={`w-10 h-10 text-2xl rounded-full aspect-square flex items-center justify-center transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'}`}
                            aria-label="Toggle dark mode"
                        >
                            {theme === 'dark' ? (
                                <i className="fa-solid fa-sun "></i>
                            ) : (
                                <i className="fa-solid fa-moon text-gray-600"></i>
                            )}
                        </button>

                        {/* Mobile menu icon */}
                        <div className="md:hidden cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? (
                                <i className={`fa-solid fa-xmark text-3xl ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}></i>) : (<i className={`fa-solid fa-bars text-2xl ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}></i>)}
                        </div>
                    </div>
                </div>
            </header>

            {/* Scroll to Top Button */}
            <div
                className={`fixed right-5 bottom-7 shadow-lg text-white z-[999] text-[2.5rem] h-14 w-14 flex items-center justify-center rounded bg-[var(--primary)] cursor-pointer transition-all duration-300 ${showScrollTop
                    ? "opacity-100 visible"
                    : "opacity-0 invisible right-[-100px]"
                    }`}
                onClick={() =>
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    })
                }
            >
                <i className="fa-solid fa-arrow-up"></i>
            </div>
        </>
    );
};

export default Header;
