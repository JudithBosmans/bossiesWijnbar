import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const About = () => {
  return (
    <div>
      <div className="max-w-10xl mx-auto py-80">
        {/* Use a grid layout to split the sections into two columns */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-60 w-full mb-8">
          <ShuffleGrid />

          {/* The first column is for the text and the button */}
          <div>
            <h3 className="text-4xl md:text-6xl font-semibold">
              Hey, wij zijn Kjell & Judith!
            </h3>
            <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              nobis in error repellat voluptatibus ad.Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Nam nobis in error repellat
              voluptatibus ad.
            </p>
            <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              nobis in error repellat voluptatibus ad.Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Nam nobis in error repellat
              voluptatibus ad.
            </p>
            <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
              Find a class
            </button>
          </div>
          {/* The second column is for the ShuffleGrid */}
        </section>
      </div>
    </div>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://i.ibb.co/bXJVvMF/0f8776ce-7e46-4458-92af-d24b4ec0c7c7-1.jpg",
  },
  {
    id: 2,
    src: "https://i.ibb.co/k2nGhjp/51b565dd-51d3-4d8f-8d35-9fbce60f3380.jpg",
  },
  {
    id: 3,
    src: "https://i.ibb.co/ryrK7GM/2443ed30-a655-4042-8c54-dbbbe5ceaf42.jpg",
  },
  {
    id: 4,
    src: "https://i.ibb.co/xSXq9T7/b9fc1b05-643f-493f-8a9d-bd0f9b504b2b.jpg",
  },
  {
    id: 5,
    src: "https://i.ibb.co/YQGkDzz/bossies-wijnbar-logo.jpg",
  },
  {
    id: 6,
    src: "https://i.ibb.co/7zX7w3m/IMG-6938.jpg",
  },
  {
    id: 7,
    src: "https://i.ibb.co/jfyS6st/IMG-6946-2.jpg",
  },
  {
    id: 8,
    src: "https://i.ibb.co/7WG0rYv/IMG-6952.jpg",
  },
  {
    id: 9,
    src: "https://i.ibb.co/RbPG9sf/IMG-6959.jpg",
  },
  {
    id: 10,
    src: "https://i.ibb.co/1Qz0HN2/IMG-6941.jpg",
  },
  {
    id: 11,
    src: "https://i.ibb.co/NSGsjPW/2d82d184-b817-4d4f-8208-a6711c9d78df-1.jpg",
  },
  {
    id: 12,
    src: "https://i.ibb.co/bLmLT0j/IMG-6942.jpg",
  },
  {
    id: 13,
    src: "https://i.ibb.co/YXxYz5S/IMG-6976.jpg",
  },
  {
    id: 14,
    src: "https://i.ibb.co/wLdgZSX/IMG-6977.jpg",
  },
  {
    id: 15,
    src: "https://i.ibb.co/XZk74ch/IMG-7165.jpg",
  },
  {
    id: 16,
    src: "https://i.ibb.co/H73kRmV/IMG-7332.jpg",
  },
  {
    id: 17,
    src: "https://i.ibb.co/wsgjXY1/IMG-9335.jpg",
  },
  {
    id: 18,
    src: "https://i.ibb.co/zrsLDMD/IMG-9348.jpg",
  },
  {
    id: 19,
    src: "https://i.ibb.co/qk02v39/IMG-9398.jpg",
  },
  {
    id: 20,
    src: "https://i.ibb.co/5syRxqp/IMG-9425.jpg",
  },
  {
    id: 21,
    src: "https://i.ibb.co/JRCxCxM/IMG-9541.jpg",
  },
  {
    id: 22,
    src: "https://i.ibb.co/RvyhM3J/Screenshot-2023-11-09-at-14-50-39.jpg",
  },
  {
    id: 23,
    src: "https://i.ibb.co/ZWVrphf/Screenshot-2023-11-09-at-14-50-55.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 2, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div>
      <div className="grid grid-cols-3 grid-rows-3 w-[550px] h-[600px] gap-5">
        {squares.map((sq) => sq)}
      </div>
    </div>
  );
};

export default About;
