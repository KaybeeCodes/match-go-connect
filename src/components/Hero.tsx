
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Find Your Perfect Activity Partner
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Connect with people who share your interests. Discover new experiences, 
              make lasting connections, and enjoy activities together.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-purple-700 hover:bg-gray-100 font-medium px-6 py-3 rounded-full text-lg">
                Explore Activities
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/20 px-6 py-3 rounded-full text-lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2089&q=80"
              alt="Friends enjoying activities together" 
              className="rounded-lg shadow-xl object-cover h-96 w-full"
            />
          </div>
        </div>
      </div>
      <div className="bg-white w-full h-16 rounded-t-[50%] transform translate-y-1"></div>
    </div>
  );
};

export default Hero;
