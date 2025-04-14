
import { Card, CardContent } from "@/components/ui/card";
import { Film, Plane, Music, Utensils, Coffee, Mountains, Book, Gamepad } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Movies", icon: Film, color: "bg-red-100 text-red-600" },
  { name: "Travel", icon: Plane, color: "bg-blue-100 text-blue-600" },
  { name: "Concerts", icon: Music, color: "bg-purple-100 text-purple-600" },
  { name: "Dining", icon: Utensils, color: "bg-amber-100 text-amber-600" },
  { name: "Coffee", icon: Coffee, color: "bg-brown-100 text-brown-600" },
  { name: "Hiking", icon: Mountains, color: "bg-green-100 text-green-600" },
  { name: "Reading", icon: Book, color: "bg-indigo-100 text-indigo-600" },
  { name: "Gaming", icon: Gamepad, color: "bg-pink-100 text-pink-600" },
];

const CategorySection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Discover by Category</h2>
          <p className="mt-4 text-xl text-gray-600">
            Find activities that match your interests
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link to={`/category/${category.name.toLowerCase()}`} key={category.name}>
              <Card className="category-card border-none">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className={`p-4 rounded-full ${category.color} mb-4`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
