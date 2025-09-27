export default function Filter({ setFilter }) {
  return (
    <ul className="text-white sm:w-120 gap-4 grid grid-cols-5 sm:grid-cols-4 items-center justify-center">
      <li
        onClick={() => setFilter("Food")}
        className="cursor-pointer hover:scale-105 transition-all duration-100 active:bg-sky-700 active:scale-95 md:active:scale-105 bg-slate-800 flex items-center justify-center px-1.5 py-0.5 rounded-sm col-span-2 sm:col-span-1"
      >
        Food
      </li>
      <li
        onClick={() => setFilter("Cars")}
        className="cursor-pointer hover:scale-105 transition-all duration-100 active:bg-sky-700 active:scale-95 md:active:scale-105 bg-slate-800 flex items-center justify-center px-1.5 py-0.5 rounded-sm col-span-2 sm:col-span-1"
      >
        Cars
      </li>
      <li
        onClick={() => setFilter("Animals")}
        className="cursor-pointer hover:scale-105 transition-all duration-100 active:bg-sky-700 active:scale-95 md:active:scale-105 bg-slate-800 flex items-center justify-center px-1.5 py-0.5 rounded-sm col-span-2 sm:col-span-1 col-start-2"
      >
        Animals
      </li>
      <li
        onClick={() => setFilter("Nature")}
        className="cursor-pointer hover:scale-105 transition-all duration-100 active:bg-sky-700 active:scale-95 md:active:scale-105 bg-slate-800 flex items-center justify-center px-1.5 py-0.5 rounded-sm col-span-2 sm:col-span-1 col-start-4"
      >
        Nature
      </li>
    </ul>
  );
}
