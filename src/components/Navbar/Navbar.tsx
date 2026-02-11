import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Gallery", path: "/gallery" },
    { name: "News/Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `transition font-medium ${
      isActive
        ? "text-accent border-b-2 border-accent"
        : "text-primary hover:text-accent"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-secondary shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="School Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-heading font-bold text-primary">
            BrightPath Academy
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink to={link.path} className={linkClass}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <NavLink
            to="/admissions"
            className="bg-accent text-primary px-5 py-2 rounded-lg font-heading hover:opacity-90 transition"
          >
            Apply Now
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary border-t">
          <ul className="flex flex-col items-center gap-6 py-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg ${
                      isActive
                        ? "text-accent font-semibold"
                        : "text-primary hover:text-accent"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            <NavLink
              to="/admissions"
              onClick={() => setIsOpen(false)}
              className="bg-accent text-primary px-6 py-3 rounded-lg font-heading"
            >
              Apply Now
            </NavLink>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
