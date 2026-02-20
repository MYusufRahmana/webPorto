// app/components/common/ErrorDisplay.tsx
interface ErrorDisplayProps {
  message: string;
}

export function ErrorDisplay({ message }: ErrorDisplayProps) {
  return (
    <div className="min-h-screen bg-[#19222D] flex items-center justify-center">
      <div className="text-center text-red-500">
        <p className="text-xl mb-2">Error loading data</p>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
}
