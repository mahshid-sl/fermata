import { Card, CardContent } from "../../components/ui/card";
import Image from "next/image";

type ChefCardProps = {
  chef: {
    name: string;
    imagesrc: string;
    bio: string;
  };
};

export default function ChefCard({ chef }: ChefCardProps) {
  return (
    <Card className=" border-0 bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-shadow">
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={chef.imagesrc}
            alt={chef.name}
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 text-center">
          <p className="font-bold text-lg">{chef.name}</p>
        </div>
      </CardContent>
    </Card>
  );
}
