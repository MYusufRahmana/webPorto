// app/components/common/LoadingSpinner.tsx
export function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-[#19222D] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#C6F10E] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white">Loading portfolio...</p>
      </div>
    </div>
  );
}
