export default function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
      />
    </div>
  );
}
