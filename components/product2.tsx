import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  HamburgerMenuIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import {
  ArrowRightIcon,
  BrainCircuit,
  Calendar,
  CalendarPlus,
  Edit2Icon,
  Share2Icon,
} from "lucide-react";
import { BiCustomize, BiNotification } from "react-icons/bi";
import { IoText } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import PieChartComponent from "./PieChart";
import { VscDebugDisconnect } from "react-icons/vsc";
import Integrations from "./integration";
import Colabration from "./team-colobration";
import AiIntegration from "./ai_integration";
import { AnimatedListDemo } from "./notification";
import AnimatedShinyText from "./ui/animated-shiny-text";
import { cn } from "@/lib/utils";

const features = [
  {
    Icon: Edit2Icon,
    name: "Fully customisable incident reporting",
    description:
      "Get AI-driven recommendations to improve your processes and make data-backed decisions.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="p-5 flex items-center justify-center flex-col opacity-60 absolute transform transition-transform duration-200 hover:scale-105  [mask-image:linear-gradient(to_top,transparent_5%,#000_80%)]">
        <h1 className="font-semibold text-xl mr-auto">Create A Field</h1>
        <p className="text-sm text-muted-foreground">
          Drag A field type to one of the sections on the to create a custom
          field for the issue type
        </p>
        <div className="flex gap-2 mt-5">
          <div className="w-[130px] h-[100px] border-2 rounded-lg p-2 flex flex-col items-center justify-center">
            <IoText className="w-[20px] h-[20px]" />
            <h1 className="font-bold text-lg">Short Text</h1>
          </div>
          <div className="w-[130px] h-[100px] border-2 rounded-lg p-2 flex flex-col items-center justify-center">
            <HamburgerMenuIcon className="w-[20px] h-[20px]" />
            <h1 className="font-bold text-lg">Paragraph</h1>
          </div>
          <div className="w-[130px] h-[100px] border-2 rounded-lg p-2 flex flex-col items-center justify-center">
            <CalendarPlus className="w-[20px] h-[20px]" />
            <h1 className="font-bold text-lg">Date</h1>
          </div>
        </div>
      </div>
    ),
  },
  {
    Icon: InputIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="p-5 w-full opacity-60 absolute transform transition-transform duration-300 hover:scale-105  [mask-image:linear-gradient(to_top,transparent_54%,#000_80%)] ">
        <Colabration />
      </div>
    ),
  },
  {
    Icon: VscDebugDisconnect,
    name: "Powerful integrations",
    description:
      "Integrate popular security software, Connected cameras, IoT devices as well as popular ERP solutions effortlessly.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className=" p-5 flex items-center justify-center w-full opacity-60 absolute transform transition-transform duration-300 hover:scale-105  [mask-image:linear-gradient(to_top,transparent_5%,#000_80%)]">
        <Integrations />
      </div>
    ),
  },
  {
    Icon: MdOutlineSpaceDashboard,
    name: "Leading and lagging KPI indicators",
    description:
      "Aggregate and share all industry standard KPIs and create a project control centre with customisable dashboards",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex items-center justify-center w-full flex-col p-5 opacity-60 absolute transform transition-transform duration-300 hover:scale-105  [mask-image:linear-gradient(to_top,transparent_5%,#000_80%)]">
        <h1 className="font-bold text-xl mr-auto">Incidents</h1>
        <PieChartComponent />
      </div>
    ),
  },
  {
    Icon: BiNotification,
    name: "Actionable Insights",
    description:
      "Real-time push notifications help you and your team be more proactive and resolve issues before they turn into incidents.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex items-center justify-center w-full flex-col p-5 opacity-60 absolute transform transition-transform duration-300 hover:scale-105  [mask-image:linear-gradient(to_top,transparent_5%,#000_80%)]">
        <AnimatedListDemo />
      </div>
    ),
  },
  {
    Icon: BrainCircuit,
    name: "Generative AI driven workflow automation",
    description:
      "No more complicated templates. Easily integrate LLMs like ChatGPT and complete tasks in no time.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className=" p-5 flex items-center justify-center w-full opacity-60 absolute transform transition-transform duration-300 hover:scale-105 [mask-image:linear-gradient(to_top,transparent_5%,#000_80%)]">
        <AiIntegration />
      </div>
    ),
  },
];

export function BentoDemo() {
  return (
    <div className="flex items-center justify-center flex-col sm:mt-[100px] ">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Cool product features</span>
        </AnimatedShinyText>
      </div>
      <p className="text-3xl text-center sm:text-5xl md:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 md:[w-800px]">
        Cutting-edge Features Designed to Boost Efficiency
      </p>
      <h1 className="font-semibold text-xs sm:text-md md:text-xl text-center mt-[-10px] sm:mt-2 mb-5">
        Discover a Seamless Experience with Mint - Boosting Productivity,
        Efficiency, and Collaboration in Every Click.
      </h1>
      <BentoGrid className="p-5 lg:w-[1300px]">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
