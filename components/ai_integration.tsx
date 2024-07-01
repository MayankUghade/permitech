import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";

export default function AiIntegration() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Task Generator</CardTitle>
        <CardDescription>
          Generate a task using a large language model.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Textarea
            placeholder="Create a hot work permit to carry out grinding of marble stone"
            className="p-4 min-h-[80px] max-w-full"
          />
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="justify-between flex-1">
                  Select Model
                  <ChevronDownIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuItem>GPT-3</DropdownMenuItem>
                <DropdownMenuItem>GPT-4</DropdownMenuItem>
                <DropdownMenuItem>Anthropic</DropdownMenuItem>
                <DropdownMenuItem>Cohere</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="flex-1">Generate Task</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
