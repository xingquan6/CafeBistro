export function CardSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="h-56 animate-pulse bg-espresso/10" />
          <div className="space-y-2 p-5">
            <div className="h-4 w-2/3 animate-pulse rounded bg-espresso/10" />
            <div className="h-3 w-1/2 animate-pulse rounded bg-espresso/10" />
          </div>
        </div>
      ))}
    </div>
  )
}
