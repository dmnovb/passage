"use client";

const categories = [
  "Faith",
  "Strength",
  "Courage",
  "Peace",
  "Hope",
  "Wisdom",
  "Perseverance",
];

function Sidemenu() {
  return (
    <div className="bg-[#F5F5F5] rounded-sm h-screen box-content">
      <ul className="flex flex-col justify-evenly flex-1 h-full">
        {categories.map((category, index) => (
          <ol className="text-2xl" key={index}>
            {category}
          </ol>
        ))}
      </ul>
    </div>
  );
}

export default Sidemenu;
