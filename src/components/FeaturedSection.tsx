
import { Button } from "@/components/ui/button";
import ActivityCard from "./ActivityCard";
import { ArrowRight } from "lucide-react";

const featuredActivities = [
  {
    id: 1,
    title: "Weekend Hiking Adventure at Eagle Mountain",
    category: "Hiking",
    location: "Eagle Mountain Trail, Colorado",
    date: "Sat, Jun 12 • 8:00 AM",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    attendees: 12,
    hostName: "Alex K.",
    hostImage: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    title: "Outdoor Movie Night: Summer Classics",
    category: "Movies",
    location: "Riverside Park",
    date: "Fri, Jun 18 • 8:30 PM",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    attendees: 28,
    hostName: "Maria L.",
    hostImage: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    title: "Coffee & Conversation: Book Club Meetup",
    category: "Reading",
    location: "Beans & Books Café",
    date: "Sun, Jun 20 • 10:00 AM",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    attendees: 8,
    hostName: "David R.",
    hostImage: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    id: 4,
    title: "Live Jazz at Blue Note Club",
    category: "Concerts",
    location: "Blue Note Jazz Club",
    date: "Sat, Jun 19 • 7:00 PM",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    attendees: 16,
    hostName: "Sophie J.",
    hostImage: "https://randomuser.me/api/portraits/women/25.jpg"
  },
];

const FeaturedSection = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Activities</h2>
          <Button variant="ghost" className="text-purple-600 flex items-center">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredActivities.map((activity) => (
            <ActivityCard
              key={activity.id}
              title={activity.title}
              category={activity.category}
              location={activity.location}
              date={activity.date}
              image={activity.image}
              attendees={activity.attendees}
              hostName={activity.hostName}
              hostImage={activity.hostImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
