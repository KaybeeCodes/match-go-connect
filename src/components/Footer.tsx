
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                Match&Go
              </span>
            </Link>
            <p className="mt-3 text-gray-400">
              Connect with people who share your interests and discover new experiences together.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link to="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/activities" className="text-gray-400 hover:text-white">Activities</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-white">Categories</Link></li>
              <li><Link to="/popular" className="text-gray-400 hover:text-white">Popular</Link></li>
              <li><Link to="/nearby" className="text-gray-400 hover:text-white">Nearby</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="/press" className="text-gray-400 hover:text-white">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-white">Support</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Match&Go. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
