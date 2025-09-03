function Exercise05() {
  return (
    <div className="relative w-[420px] h-[200px] rounded-xl border border-sky-200 bg-sky-50 p-6 shadow-sm">
      <div className="h-full w-full rounded-lg bg-sky-100 p-4">
        <p className="text-sky-700 font-medium">Relative parent</p>
      </div>
      <div className="absolute left-6 bottom-6 px-4 py-2 rounded-full bg-sky-600 text-white shadow-md">
        Absolute child
      </div>
    </div>
  );
}
