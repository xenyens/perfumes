import Tarjeta from "@/components/Tarjeta";
import { perfumeData } from "@/helper/data";

const HomePage = () => {
  return (
    <main className=" mx-auto w-full md:w-[80%] shadow-lg md:rounded-md">
      <div className="grid gap-5 md:grid-cols-3 justify-center md:items-center p-12">
        {perfumeData.map((perfume, index) => (
          <Tarjeta
            key={index}
            nombre={perfume.nombre}
            precio={perfume.precio}
            disponible={perfume.disponible}
            imagen={perfume.imagen}
          />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
