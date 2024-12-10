export function Timeline() {
  const timelineItems = [
    {
      title: "Version 1.0",
      description:
        "Technology for storing and distributing files of any size on a decentralized TON network.",
      status: "completed",
    },
    {
      title: "We're here",
      status: "current",
    },
    {
      title: "Marketplace",
      description:
        "Storage nodes in TON are registered and ranked based on disk size, reputation, geolocation, among other criteria. Customers can consult this registry to find storage nodes that suit their requirements.",
      status: "upcoming",
    },
    {
      title: "Products for users",
      description: "TON Torrents, Dropbox-like Apps, TON Storage API.",
      status: "upcoming",
    },
    {
      title: "Version 2.0",
      description:
        "The storage node receives payment not only for storing files, but also receives micropayments via the TON Payments Network for traffic.",
      status: "upcoming",
    },
  ];

  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-yellow-400 before:via-neutral-800 before:to-transparent">
      {timelineItems.map((item, index) => (
        <div key={index} className="relative flex items-center">
          <div className="flex items-center justify-center">
            <div
              className={`h-10 w-10 rounded-full border-2 ${
                item.status === "completed"
                  ? "border-green-500 bg-green-500"
                  : item.status === "current"
                    ? "border-yellow-400 bg-neutral-900"
                    : "border-neutral-700 bg-neutral-900"
              }`}
            />
          </div>
          <div className="ml-8 space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              {item.status === "current" && (
                <span className="rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-400">
                  Current
                </span>
              )}
            </div>
            {item.description && (
              <p className="text-neutral-400">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
