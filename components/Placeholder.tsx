import { CameraIcon } from "./icons";

interface PlaceholderProps {
  label: string;
  className?: string;
  rounded?: boolean;
}

/**
 * Stand-in for a real project photo. The design handoff ships drag-and-drop
 * image slots; drop `next/image` with the real asset in place of these.
 */
export default function Placeholder({ label, className = "", rounded = false }: PlaceholderProps) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden bg-[linear-gradient(135deg,#3f4a44,#5a6b5c_55%,#7d9469)] p-4 text-center ${
        rounded ? "rounded-md" : ""
      } ${className}`}
    >
      <CameraIcon className="h-8 w-8 text-white/70" />
      <span className="font-display text-[12px] font-medium uppercase tracking-[1px] text-white/85">{label}</span>
    </div>
  );
}
