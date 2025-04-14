
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MapPin, Users } from "lucide-react";

interface ActivityCardProps {
  title: string;
  category: string;
  location: string;
  date: string;
  image: string;
  attendees: number;
  hostName: string;
  hostImage?: string;
}

const ActivityCard = ({
  title,
  category,
  location,
  date,
  image,
  attendees,
  hostName,
  hostImage,
}: ActivityCardProps) => {
  return (
    <Card className="activity-card overflow-hidden border-none shadow">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-3 left-3 bg-purple-600">{category}</Badge>
      </div>
      <CardHeader className="p-4 pb-0">
        <h3 className="font-bold text-lg line-clamp-1">{title}</h3>
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="h-4 w-4 mr-1 text-gray-400" />
          <span className="line-clamp-1">{location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="h-4 w-4 mr-1 text-gray-400" />
          <span>{date}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center">
          <Avatar className="h-6 w-6 mr-2">
            <AvatarImage src={hostImage} />
            <AvatarFallback>{hostName.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{hostName}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Users className="h-4 w-4 mr-1" />
          <span>{attendees} going</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ActivityCard;
