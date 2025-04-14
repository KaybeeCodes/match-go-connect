
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, CalendarDays, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <CategorySection />
      
      <FeaturedSection />
      
      {/* How It Works Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How Match&Go Works</h2>
            <p className="mt-4 text-xl text-gray-600">
              Find your perfect activity partner in 3 easy steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Create Your Profile</h3>
              <p className="text-gray-600">
                Sign up and tell us about your interests, preferences, and the activities you enjoy.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CalendarDays className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Discover Activities</h3>
              <p className="text-gray-600">
                Browse through various activities and events that match your interests.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Connect & Meet Up</h3>
              <p className="text-gray-600">
                Join activities, connect with like-minded people, and enjoy real-world experiences.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-lg px-8 py-6 rounded-full">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
            <p className="mt-4 text-xl text-gray-600">
              Real experiences from the Match&Go community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <img
                  src="https://randomuser.me/api/portraits/women/32.jpg"
                  alt="Testimonial"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">Movie Enthusiast</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Match&Go helped me find a great group of movie lovers in my area. Now we meet every week for movie nights!"
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="Testimonial"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Michael Brown</h4>
                  <p className="text-gray-500 text-sm">Hiking Enthusiast</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I was new to the city and wanted to explore hiking trails. Thanks to Match&Go, I found amazing hiking buddies!"
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Testimonial"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Priya Sharma</h4>
                  <p className="text-gray-500 text-sm">Concert Lover</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Going to concerts alone was intimidating. With Match&Go, I found people who share my music taste. Best decision ever!"
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Activity Partner?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of users who are already connecting and enjoying activities together. 
            Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-white text-purple-700 hover:bg-gray-100 font-medium px-8 py-3 rounded-full text-lg">
              Sign Up Now
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/20 px-8 py-3 rounded-full text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
