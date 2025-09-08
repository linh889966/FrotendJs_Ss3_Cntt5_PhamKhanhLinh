interface Props {
  total: number;
  perPage: number;
  current: number;
  onChange: (p: number) => void;
}

export default function Pagination({ total, perPage, current, onChange }: Props) {
  const pages = Math.ceil(total / perPage);
  return (
    <div className="flex justify-between items-center mt-4">
      <p className="text-sm">Tổng: {total} sản phẩm</p>
      <div className="flex gap-2">
        {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => onChange(p)}
            className={`px-3 py-1 rounded ${
              p === current ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}
