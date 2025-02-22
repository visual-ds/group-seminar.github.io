"use client";

import { useState } from "react";
import data from "./data/data.json";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const shouldShowToggle = (text: string) => {
    return text.length > 10
  }
  

  return (
    <div className="max-w-7xl mx-auto text-gray-800 p-4">
      <h1 className="text-4xl font-bold text-center py-6">{data.title}</h1>
      <div className="pb-8">
        <h2 className="text-xl font-semibold">Recent Talk</h2>
        <div className="p-4">
          <p className="py-2">
            <strong>Date:</strong> {data.recent_talk.date}
          </p>
          <Separator />
          <p className="py-2">
            <strong>Time:</strong> {data.recent_talk.time}
          </p>
          <Separator />
          <p className="py-2">
            <strong>Location:</strong> {data.recent_talk.location}
          </p>
          <Separator />
          {data.recent_talk.speakers.map((speaker, index) => (
            <div key={index}>
              <p className="py-2">
                <strong>Speaker {index + 1}:</strong> {speaker.name} -{" "}
                {speaker.topic}
              </p>
              <Separator />
            </div>
          ))}
        </div>
      </div>
      <div className="pb-8">
        <h2 className="text-xl py-2 font-semibold">Talk Details</h2>
        {data.talk_details.map((talk, index) => (
          <div
            key={index}
            className="flex gap-6 items-start text-sm border rounded-lg p-4 mb-4 bg-white shadow"
          >
            <img src={talk.image} className="rounded-full w-40 h-40" />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold md:text-lg text-xs">{talk.topic}</h3>
              <p className="italic md:text-md text-xs">
                {talk.speaker}, Advised by {talk.advisor}
              </p>
              <div className="hidden md:block">
                <p>{talk.description}</p>
              </div>
              <div className="md:hidden text-left text-xs">
              <div className="relative">
                {isExpanded ? (
                  <p>{talk.description}</p>
                ) : (
                  <p>{talk.description.slice(0, 40)}{shouldShowToggle(talk.description) ? '...' : ''}</p>
                )}
                
                {shouldShowToggle(talk.description) && (
                  <button 
                    onClick={toggleExpand}
                    className="text-blue-600 hover:text-blue-800 text-xs mt-1 focus:outline-none"
                  >
                    {isExpanded ? 'Show less' : 'Show more'}
                  </button>
                )}
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="py-8">
        <h2 className="text-xl py-2 font-semibold">Upcoming Events</h2>
         <Table>
           <TableHeader>
             <TableRow className="bg-gray-200">
               <TableHead>Date</TableHead>
               <TableHead>Time</TableHead>
               <TableHead>Location</TableHead>
               <TableHead className="text-right">Speaker</TableHead>
               <TableHead className="text-right">Topic</TableHead>
             </TableRow>
           </TableHeader>
           <TableBody>
             {data.upcoming_events.map((event, index) => (
               <TableRow key={index}>
                 <TableCell>{event.date}</TableCell>
                 <TableCell>{event.time}</TableCell>
                 <TableCell>{event.location}</TableCell>
                 <TableCell className="text-right">
                   {event.speaker || "TBD"}
                 </TableCell>
                 <TableCell className="text-right">
                   {event.topic || "TBD"}
                 </TableCell>
               </TableRow>
             ))}
           </TableBody>
         </Table>
      </div>
    </div>
  );
}
