import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import AnimatedShinyText from "./ui/animated-shiny-text";

const reviews = [
  {
    name: "Musab",
    username: "CEO, AMA Marbles",
    body: "Permitech helped us identify emerging risks and increased our EHS compliance by 90%.",
    img: "https://avatar.vercel.sh/Musab",
  },
  {
    name: "Mansour Al Qousomi",
    username: "President, JUPC",
    body: "Permitech has the potential to radically transform the way we manage safety and risk.",
    img: "https://avatar.vercel.sh/Mansour",
  },
  {
    name: "Anton",
    username: "Plant Manager, Radian",
    body: "Permitech solution reduces response time significantly, helping us reduce downtime.",
    img: "https://avatar.vercel.sh/Anton",
  },
  {
    name: "Aannie",
    username: "CEO, Jane company",
    body: "Permitech solution streamlines communication, allowing teams to collaborate more effectively and achieve better results.",
    img: "https://avatar.vercel.sh/Annie",
  },
  {
    name: "Javed Khan",
    username: "President, JKCP",
    body: "Permitech solution reduces response time significantly, helping us reduce downtime.",
    img: "https://avatar.vercel.sh/Khan",
  },
  {
    name: "James Arthur",
    username: "CTO, James Softwre",
    body: "Permitech solution enhances operational efficiency, ensuring smoother workflows and higher productivity.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export const MarqueeDemo = () => {
  return (
    <div className=" relative flex w-full h-screen flex-col items-center justify-center overflow-hidden md:shadow-xl mt-[80px] mb-10 ">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨Testmonials</span>
        </AnimatedShinyText>
      </div>
      <p className="text-3xl text-center sm:text-5xl md:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 md:w-[800px]">
        Our customes love Permitech
      </p>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="sm:flex hidden pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="sm:flex hidden pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};
