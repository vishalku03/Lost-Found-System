import api from "../api/axios";

export default function ItemCard({ item }) {

  const resolveItem = async () => {
    if (!confirm("Mark this item as resolved?")) return;

    await api.delete(`/items/${item._id}`);
    window.location.reload();
  };

  return (
    <div className="bg-white border border-slate-200 rounded-md p-4 hover:shadow-sm transition">

      <h3 className="font-medium text-slate-900 mb-1">
        {item.title}
      </h3>

      <p className="text-sm text-slate-600 mb-3">
        {item.description}
      </p>

      <div className="flex justify-between items-center">
        <span
          className={`text-xs px-2 py-1 rounded border
          ${
            item.type === "lost"
              ? "border-red-300 text-red-700 bg-red-50"
              : "border-green-300 text-green-700 bg-green-50"
          }`}
        >
          {item.type.toUpperCase()}
        </span>

        {/* ✅ RESOLVE BUTTON */}
        <button
          onClick={resolveItem}
          className="text-xs text-slate-500 hover:text-red-600"
        >
          Mark as resolved
        </button>
      </div>

    </div>
  );
}
