/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iSd9zAmR2sk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card } from "@/components/ui/card";
import {
  ArrowRightIcon,
  CameraIcon,
  CpuIcon,
  GaugeIcon,
  LockIcon,
  PlugIcon,
  WifiIcon,
} from "lucide-react";

export default function Integrations() {
  return (
    <Card className="w-full max-w-lg p-6 grid gap-6">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter">
          Powerful Features for Your App
        </h2>
        <p className="text-muted-foreground">
          Discover the cutting-edge capabilities that will take your app to the
          next level.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-primary rounded-md p-3 flex items-center justify-center">
          <PlugIcon className="w-6 h-6 text-primary-foreground" />
        </div>
        <ArrowRightIcon className="w-5 h-5 text-muted-foreground" />
        <div className="bg-muted rounded-md p-3 flex items-center justify-center">
          <LockIcon className="w-5 h-5 text-muted-foreground" />
        </div>
        <div className="bg-muted rounded-md p-3 flex items-center justify-center">
          <CameraIcon className="w-5 h-5 text-muted-foreground" />
        </div>
        <div className="bg-muted rounded-md p-3 flex items-center justify-center">
          <GaugeIcon className="w-5 h-5 text-muted-foreground" />
        </div>
        <div className="bg-muted rounded-md p-3 flex items-center justify-center">
          <CpuIcon className="w-5 h-5 text-muted-foreground" />
        </div>
        <div className="bg-muted rounded-md p-3 flex items-center justify-center">
          <WifiIcon className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </Card>
  );
}
