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
import { basePath, isFutureTalk, isRecentTalk } from "@/lib/utils";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const futureTalks = data.group_seminar.filter((seminar) =>
    isFutureTalk(seminar.date)
  );
  const recentTalks = data.group_seminar.filter((seminar) =>
    isRecentTalk(seminar.date)
  );

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const shouldShowToggle = (text: string) => {
    return text.length > 10;
  };

  return (
    <div className="max-w-7xl mx-auto text-gray-800 p-4">
      <h1 className="text-4xl font-bold text-center py-6">{data.title}</h1>
      <>
        {recentTalks.map((seminar, index) => (
          <div key={index}>
            {/* RECENT  TALKS*/}
            <div className="pb-8">
              <h2 className="text-xl font-semibold">Recent Talk</h2>
              <div className="p-4">
                <p className="py-2">
                  <strong>Date:</strong> {seminar.date}
                </p>
                <Separator />
                <p className="py-2">
                  <strong>Time:</strong> {seminar.time}
                </p>
                <Separator />
                <p className="py-2">
                  <strong>Location:</strong> {data.location}
                </p>
                <Separator />
                {/*
                      {seminar.speaker.map((speak, index) => (
                      <div key={index}>
                        <p className="py-2">
                          <strong>Speaker {index + 1}:</strong> {speak.name} -{" "}
                          {speak.topic}
                        </p>
                        <Separator />
                      </div>
                    ))}
                    */}
                <p className="py-2">
                  <strong>Speaker {index + 1}:</strong> {seminar.speaker.name} -{" "}
                  {seminar.speaker.topic}
                </p>
                <Separator />
              </div>
            </div>

            {/* MORE INFORMATION*/}
            <div className="pb-8">
              <h2 className="text-xl py-2 font-semibold">Talk Details</h2>
              <div className="flex gap-6 items-start text-sm border rounded-lg p-4 mb-4 bg-white shadow">
                <img
                  src={`${basePath}/${seminar.speaker.image}`}
                  className="rounded-full w-40 h-40"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold md:text-lg text-xs">
                    {seminar.speaker.topic}
                  </h3>
                  <p className="italic md:text-md text-xs">
                    {seminar.speaker.name}, Advised by {seminar.speaker.advisor}
                  </p>
                  <div className="hidden md:block">
                    <p>{seminar.speaker.description}</p>
                  </div>
                  <div className="md:hidden text-left text-xs">
                    <div className="relative">
                      {isExpanded ? (
                        <p>{seminar.speaker.description}</p>
                      ) : (
                        <p>
                          {seminar.speaker.description.slice(0, 40)}
                          {shouldShowToggle(seminar.speaker.description)
                            ? "..."
                            : ""}
                        </p>
                      )}

                      {shouldShowToggle(seminar.speaker.description) && (
                        <button
                          onClick={toggleExpand}
                          className="text-blue-600 hover:text-blue-800 text-xs mt-1 focus:outline-none"
                        >
                          {isExpanded ? "Show less" : "Show more"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>

      {/* FUTURE TALKS*/}
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
            {futureTalks.map((seminar, index) => (
              <TableRow key={index}>
                <TableCell>{seminar.date}</TableCell>
                <TableCell>{seminar.time}</TableCell>
                <TableCell>{data.location}</TableCell>
                <TableCell className="text-right">
                  {seminar.speaker.name || "TBD"}
                </TableCell>
                <TableCell className="text-right">
                  {seminar.speaker.topic || "TBD"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
