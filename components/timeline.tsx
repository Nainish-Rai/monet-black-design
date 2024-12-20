import { motion } from "framer-motion";

interface TimelineItem {
  title: string;
  description?: string;
  status: "completed" | "current" | "upcoming";
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.4,
          },
        },
      }}
      className="relative w-full space-y-8 sm:space-y-16 before:absolute before:inset-0 before:ml-3 sm:before:ml-4 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-yellow-500 before:via-neutral-800 before:to-transparent"
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: {
              opacity: 0,
              x: -100,
              scale: 0.9,
            },
            visible: {
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                duration: 0.6,
                ease: [0.2, 0.65, 0.3, 0.9],
              },
            },
          }}
          whileHover={{
            scale: 1,
            transition: { duration: 0.2 },
          }}
          className="relative flex items-start sm:items-center"
        >
          <motion.div
            className="absolute left-0"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              className={`h-6 w-6 sm:h-8 sm:w-8 rounded-full border-2 ${
                item.status === "completed"
                  ? "border-green-500 bg-green-500"
                  : item.status === "current"
                    ? "border-yellow-400 bg-neutral-900"
                    : "border-neutral-700 bg-neutral-900"
              }`}
              animate={
                item.status === "current"
                  ? {
                      scale: [1, 1.1, 1],
                      borderWidth: ["2px", "1px", "2px"],
                    }
                  : {}
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          <motion.div
            className="ml-10 sm:ml-16 flex w-full flex-col sm:flex-row sm:items-center sm:gap-8 cursor-crosshair"
            whileHover={{
              x: 10,
              transition: { duration: 0.2 },
            }}
          >
            <div className="min-w-0 sm:min-w-[200px] flex-shrink-0 space-y-1">
              <div className="flex items-center gap-2">
                {item.status != "current" && (
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-white">
                    {item.title}
                  </h3>
                )}
                {item.status === "current" && (
                  <span className="rounded-xl bg-[#2D2D2D] px-3 py-1 sm:px-4 sm:py-2 text-sm lg:text-lg text-white">
                    We&apos;re here
                  </span>
                )}
              </div>
            </div>
            {item.description && (
              <p className="mt-4 sm:mt-0 text-sm sm:text-base lg:text-lg text-neutral-400">
                {item.description}
              </p>
            )}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
