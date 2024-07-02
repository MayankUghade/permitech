import Meteors from "@/components/ui/meteors";
import { CircleCheckBig } from "lucide-react";
import { Button } from "./ui/button";

export function MeteorDemo() {
  return (
    <div className="flex items-center justify-center mb-[80px]">
      <div className="relative flex flex-col h-full w-full max-w-5xl items-center justify-center overflow-hidden rounded-3xl border bg-background sm:p-20 p-10 md:shadow-xl">
        <Meteors number={30} />
        <p className="z-10 whitespace-pre-wrap text-center sm:text-5xl text-3xl font-medium tracking-tighter text-black dark:text-white">
          Embrace the future of work
        </p>
        <h1 className="mt-3 sm:text-lg text-sm font-semibold text-center text-muted-foreground">
          Play around with it first. Add your team and pay later.
        </h1>

        <div className="mt-7 flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <CircleCheckBig />
            Incident Management
          </div>
          <div className="flex items-center gap-2">
            <CircleCheckBig />
            Team collaboration
          </div>
          <div className="flex items-center gap-2">
            <CircleCheckBig />
            KPI Reporting
          </div>
        </div>

        <Button className="bg-blue-500 sm:text-xl mt-7 text-white">
          Get started
        </Button>
      </div>
    </div>
  );
}
