import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";

export default function TimelineComponent({
  direction = "horizontal",
  items,
  title,
}: {
  direction?: "horizontal" | "vertical";
  items: {
    id: number;
    date: string;
    title: string;
    description: string;
    done?: boolean;
  }[];
  title?: string;
}) {
  return (
    <Timeline defaultValue={3} className="px-0" orientation={direction}>
      <h2 className="text-2xl lg:text-xl text-white pr-4 -mt-2">{title}</h2>
      {items.map((item) => (
        <TimelineItem key={item.id} step={item.id}>
          <TimelineHeader>
            <TimelineSeparator
              className={
                item.done ? "bg-yellow-500 border-yellow-500" : "bg-white "
              }
            />
            {/* <TimelineDate>{item.date}</TimelineDate> */}
            <TimelineTitle className="pr-4 max-sm:max-w-xs">
              {item.title}
            </TimelineTitle>
            <TimelineIndicator
              className={
                item.done
                  ? "bg-yellow-500 border-yellow-500"
                  : "bg-transparent "
              }
            />
          </TimelineHeader>
          <TimelineContent className="pr-4">{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
