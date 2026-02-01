"use client";

export default function ProductSkeleton() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 animate-pulse">
        {/* Image */}
        <div className="bg-white rounded-xl p-6 shadow border">
          <div className="aspect-square bg-slate-200 rounded-lg" />
        </div>

        {/* Text */}
        <div className="space-y-6">
          <div className="h-6 w-40 bg-slate-200 rounded" />
          <div className="h-10 w-3/4 bg-slate-200 rounded" />

          <div className="space-y-3">
            <div className="h-4 w-full bg-slate-200 rounded" />
            <div className="h-4 w-5/6 bg-slate-200 rounded" />
            <div className="h-4 w-4/6 bg-slate-200 rounded" />
          </div>

          <div className="flex gap-3">
            <div className="h-9 w-24 bg-amber-200 rounded-lg" />
            <div className="h-9 w-24 bg-slate-200 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
