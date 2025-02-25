import { isPastTalk } from "@/lib/utils";
import data from "../data/data.json";

export default function Page() {
  const historical_events = data.group_seminar.filter((seminar) =>
    isPastTalk(seminar.date)
  );

  return (
    <div className="space-y-8 p-4">
      {historical_events.map((dateGroup, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-2xl font-bold">{dateGroup.date}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold">
                {dateGroup.speaker.name}: {dateGroup.speaker.topic}
              </h3>
              <div className="mt-3 space-x-4">
                {dateGroup.speaker.links.recording && (
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    Recording
                  </a>
                )}
                {dateGroup.speaker.links.slides && (
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    Slides
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
