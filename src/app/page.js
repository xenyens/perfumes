import Tarjeta from "@/components/Tarjeta";
import { perfumeData } from "@/helper/data";

const HomePage = () => {
  return (
    <main className=" mx-auto w-full md:w-[80%] shadow-lg md:rounded-md">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2 justify-center md:items-center lg:items-center md:p-12 lg:p-12">
        {perfumeData.map((perfume, index) => (
          <Tarjeta
            key={index}
            marca={perfume.marca}
            nombre={perfume.nombre}
            precio={perfume.precio}
            disponible={perfume.disponible}
            imagen={perfume.imagen}
            capacidad={perfume.capacidad}
          />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
