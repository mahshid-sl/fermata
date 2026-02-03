export default function SubCategoryPills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 px-4">
      <span
        className="rounded-full border border-primary-300
            px-4 py-1.5 text-sm
            text-primary-700
            bg-primary-50
            hover:bg-primary-500 hover:text-white
            transition-colors cursor-pointer"
      >
        همه
      </span>
      {items.map((item) => (
        <span
          key={item}
          className="
            rounded-full border border-primary-300
            px-4 py-1.5 text-sm
            text-primary-700
            bg-primary-50
            hover:bg-primary-500 hover:text-white
            transition-colors cursor-pointer
          "
        >
          {item}
        </span>
      ))}
    </div>
  );
}
