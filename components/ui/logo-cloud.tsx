import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: string[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={56} reverse speed={40} speedOnHover={15}>
        {logos.map((name) => (
          <span
            key={name}
            className="pointer-events-none select-none text-sm font-semibold tracking-wide text-[#B0ADBE] whitespace-nowrap"
          >
            {name}
          </span>
        ))}
      </InfiniteSlider>
    </div>
  );
}
