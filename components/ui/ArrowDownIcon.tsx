type ArrowDownIconProps = {
  className?: string;
};

export function ArrowDownIcon({ className = "h-[31px] w-[30px]" }: ArrowDownIconProps) {
  return (
    <svg
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M0.752576 13L14.7526 29L28.7526 13"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M14.7526 0L14.7526 29" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
