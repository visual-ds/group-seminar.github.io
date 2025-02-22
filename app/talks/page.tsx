import data from "../data/data.json";

export default function Page() {
    return (
        <div className="space-y-8 p-4">
          {data.historical_events.map((dateGroup, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl font-bold">{dateGroup.date}</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {dateGroup.presentations.map((talk, talkIndex) => (
                  <div 
                    key={talkIndex} 
                    className="p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-lg font-semibold">
                      {talk.speaker}: {talk.title}
                    </h3>
                    <div className="mt-3 space-x-4">
                      {talk.links.recording && (
                        <a 
                          href="#" 
                          className="text-blue-500 hover:text-blue-700"
                        >
                          Recording
                        </a>
                      )}
                      {talk.links.slides && (
                        <a 
                          href="#" 
                          className="text-blue-500 hover:text-blue-700"
                        >
                          Slides
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
};

