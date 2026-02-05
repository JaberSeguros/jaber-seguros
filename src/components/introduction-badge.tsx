import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

export function IntroductionBadge({ text }: { text: string }) {
  return (
    <div className="flex items-center">
      <Separator />
      <Badge variant="outline" className="font-semibold text-base lg:text-lg">
        {text}
      </Badge>
    </div>
  );
}
