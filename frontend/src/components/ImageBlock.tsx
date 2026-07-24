interface Props {
  label: string;
  src?: string;
  ratio?: 'square' | 'landscape' | 'portrait';
  className?: string;
}

const ratioClass: Record<NonNullable<Props['ratio']>, string> = {
  square: 'aspect-square',
  landscape: 'aspect-[4/3]',
  portrait: 'aspect-[3/4]',
};

export default function ImageBlock({
  label,
  src,
  ratio = 'landscape',
  className = '',
}: Props) {
  return (
    <div
      className={`overflow-hidden rounded-card ${ratioClass[ratio]} ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={label}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div
          role="img"
          aria-label={label}
          className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 text-center text-xs font-medium text-primary/60"
        >
          {label}
        </div>
      )}
    </div>
  );
}