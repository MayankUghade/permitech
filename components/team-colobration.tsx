import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  CheckIcon,
  MessageCircleIcon,
  PaperclipIcon,
  SettingsIcon,
  ThumbsUpIcon,
} from "lucide-react";

export default function Component() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className=" flex items-center justify-between p-2 border-b">
        <div className="flex items-center gap-4">
          <Avatar className="w-10 h-10 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-medium">Project Collaboration</h3>
            <p className="text-sm text-muted-foreground">
              Discuss and track progress on project tasks
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <PaperclipIcon className="w-5 h-5" />
            <span className="sr-only">Attach file</span>
          </Button>
          <Button variant="ghost" size="icon">
            <CheckIcon className="w-5 h-5" />
            <span className="sr-only">View tasks</span>
          </Button>
          <Button variant="ghost" size="icon">
            <SettingsIcon className="w-5 h-5" />
            <span className="sr-only">Settings</span>
          </Button>
        </div>
      </CardHeader>
      <ScrollArea className="h-[500px] border-b">
        <div className="p-6 space-y-4">
          <div className="flex items-start gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="grid gap-1 text-sm">
              <div className="flex items-center gap-2">
                <div className="font-medium">Olivia Davis</div>
                <div className="text-muted-foreground">2:39pm</div>
              </div>
              <div>
                <p>
                  Hey everyone, just wanted to give an update on the project
                  timeline. We're on track to deliver the MVP by the end of the
                  month.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <ThumbsUpIcon className="w-4 h-4" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="w-4 h-4" />
                  <span className="sr-only">Comment</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <PaperclipIcon className="w-4 h-4" />
                  <span className="sr-only">Attach file</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="grid gap-1 text-sm">
              <div className="flex items-center gap-2">
                <div className="font-medium">Alex Nguyen</div>
                <div className="text-muted-foreground">2:41pm</div>
              </div>
              <div>
                <p>Sounds good, looking forward to the update!</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <ThumbsUpIcon className="w-4 h-4" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="w-4 h-4" />
                  <span className="sr-only">Comment</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="grid gap-1 text-sm">
              <div className="flex items-center gap-2">
                <div className="font-medium">Sarah Lee</div>
                <div className="text-muted-foreground">2:43pm</div>
              </div>
              <div>
                <p>Great work team, keep it up!</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <ThumbsUpIcon className="w-4 h-4" />
                  <span className="sr-only">Like</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </Card>
  );
}
