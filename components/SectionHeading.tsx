interface SectionHeadingProps {
  children: React.ReactNode;
  /** Bottom margin of the underline in px (default 20). */
  gap?: number;
  as?: "h2" | "h3";
  size?: number;
}

export default function SectionHeading({ children, gap = 20, as = "h2", size = 48 }: SectionHeadingProps) {
  const Tag = as;
  return (
    <>
      <Tag className="m-0 mb-[10px] font-display font-bold text-heading" style={{ fontSize: `${size}px` }}>
        {children}
      </Tag>
      <div className="h-[3px] w-14 bg-brand" style={{ marginBottom: `${gap}px` }} />
    </>
  );
}
