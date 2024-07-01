import { MagicCard, MagicContainer } from "@/components/ui/magic-card";
import { PiTreeStructureFill } from "react-icons/pi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { ImDatabase } from "react-icons/im";
import { UserCheck, Wind } from "lucide-react";
import AnimatedShinyText from "./ui/animated-shiny-text";
import { cn } from "@/lib/utils";

const data = [
  {
    image: <PiTreeStructureFill className="text-xl" />,
    title: "Unparalleled Collaboration",
    description:
      "Our platform offers a centralised space for communication, issue tracking, and document sharing, ensuring that everyone stays on the same page.",
  },
  {
    image: <AiFillSafetyCertificate className="text-xl" />,
    title: "Scale with Confidence",
    description:
      "Our platform is designed to scale, handling projects of any size while maintaining performance, security and reliability.",
  },
  {
    image: <PiPlugsConnectedFill className="text-xl" />,
    title: "Seamless Integrations",
    description:
      "We offer effortless integrations with multiple platforms. You can create a fully integrated ecosystem that aligns with your workflow.",
  },
  {
    image: <ImDatabase className="text-xl" />,
    title: "Data-Driven Insights",
    description:
      "Make informed decisions with powerful analytics and reporting. Visualise your data for a clearer picture of your business.",
  },
  {
    image: <Wind className="text-xl" />,
    title: "Work on the Go",
    description:
      "Access Permitech anytime, anywhere with our mobile web app. Stay productive even when you're on the move.",
  },
  {
    image: <UserCheck className="text-xl" />,
    title: "Tailormade for You",
    description:
      "Personalise Permitech to fit your unique business needs. Customise workflows, templates, and branding.",
  },
];

export function Features() {
  return (
    <div className="flex flex-col items-center justify-center h-screen lg:container mt-10">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨product features</span>
        </AnimatedShinyText>
      </div>
      <p className="text-3xl text-center sm:text-5xl md:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 md:[w-800px]">
        Empower your teams and transform your workflow
      </p>
      <h1 className="font-semibold text-xs sm:text-md md:text-xl text-center mt-[-10px] sm:mt-2 mb-5">
        Our platform is designed to enhance team performance, streamline safety
        management, and foster safety culture innovation within your
        organisation.
      </h1>
      <MagicContainer
        className={
          "flex flex-wrap h-[300px] w-full gap-4 lg:h-[350px] lg:flex-row"
        }
      >
        {data.map((item, index) => (
          <MagicCard
            key={index}
            borderWidth={3}
            className="flex w-full lg:w-[48%] xl:w-[32%] cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-20 shadow-2xl"
          >
            <div className="w-70 h-70 mb-3">{item.image}</div>

            <h1 className="z-10 whitespace-nowrap text-3xl font-medium text-gray-800 dark:text-gray-200">
              {item.title}
            </h1>
            <p className="text-center mt-3">{item.description}</p>
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          </MagicCard>
        ))}
      </MagicContainer>
    </div>
  );
}
