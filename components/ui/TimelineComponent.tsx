import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import img1 from "@/public/assets/images/img1.png"
import img2 from "@/public/assets/images/img2.png"
import img3 from "@/public/assets/images/img3.png"
import img4 from "@/public/assets/images/img4.png"
import img5 from "@/public/assets/images/img5.png"

export function TimelineDemo() {
  const data = [
    {
      title: "Best Collaborative Editing Tool",
      content: (
        <div className="overflow-hidden">
          <p className="text-white text-xl md:text-2xl font-normal mb-8">
          Edit documents simultaneously with your team, ensuring real-time updates and seamless collaboration.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src={img1}
              alt="startup template"
              width={900}
              height={900}
              className="rounded-lg z-50 h-full w-full "
            />
            
            
          </div>
        </div>
      ),
    },
    {
      title: "Instant Feedback and Comments",
      content: (
        <div>
          <p className="text-white text-xl md:text-2xl font-normal mb-8">
          Add comments and suggestions in real time for smooth, interactive collaboration.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src={img3}
              alt="hero template"
              width={900}
              height={900}
              className="rounded-lg z-50 h-full w-full"
            />
            <Image
            src={img2}
            alt="startup template"
            width={900}
            height={900}
            className="rounded-lg z-50 h-full w-full"
          />
          </div>
        </div>
      ),
    },
    {
      title: "Seamless Cloud Integration",
      content: (
        <div>
          <p className="text-white text-xl md:text-2xl font-normal mb-8">
          Keep your documents synced in the cloud, making them available whenever you need them.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={img4}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg z-50 h-full w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Advanced Formatting Options",
      content: (
        <div>
          <p className="text-white text-xl md:text-2xl font-normal mb-8">
          Craft beautifully formatted documents with intuitive and powerful editing features.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={img5}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg z-50 h-full w-full"
            />
           
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
