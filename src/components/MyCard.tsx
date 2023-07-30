import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function HoverCardDemo() {
  return (
    <div className="absolute top-5 left-5">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">@srajankumar</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-48 pr-10 pb-5">
          <div className="flex justify-between">
            <div className="space-y-1">
              <div className="flex flex-col">
                <Link
                  className="text-sm hover:underline mb-1 underline-offset-4"
                  href="https://github.com/srajankumar/gitcard"
                  target="_blank"
                >
                  my-profile
                </Link>
                <Link
                  className="text-sm hover:underline underline-offset-4"
                  href="https://github.com/srajankumar/gitcard"
                  target="_blank"
                >
                  source-code
                </Link>
              </div>
              <div className="flex items-center pt-2">
                <span className="text-xs text-muted-foreground">
                  © July 2023
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
