
import { Button } from "@/components/ui/button";
import { Search, Menu, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                Match&Go
              </span>
            </Link>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              <Link to="/" className="font-medium text-gray-900 px-3 py-2 hover:text-purple-600">
                Home
              </Link>
              <Link to="/activities" className="font-medium text-gray-500 px-3 py-2 hover:text-purple-600">
                Activities
              </Link>
              <Link to="/categories" className="font-medium text-gray-500 px-3 py-2 hover:text-purple-600">
                Categories
              </Link>
              <Link to="/about" className="font-medium text-gray-500 px-3 py-2 hover:text-purple-600">
                About Us
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search activities..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <Button variant="ghost">Sign In</Button>
            <Button>Join Now</Button>
          </div>
          <div className="flex items-center sm:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
