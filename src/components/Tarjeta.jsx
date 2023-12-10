import { currency } from "@/helper/currency";
import Image from "next/image";
import React from "react";

export default function Tarjeta({ marca, nombre, precio, disponible, imagen }) {
  return (
    <div className="tarjeta flex flex-col items-center justify-center rounded-md p-12 min-w-[300px] min-h-[400px]">
      <div>
        <div>
          <p className="text-xl uppercase font-bold">{marca}</p>
          <p className="uppercase font-thin">{nombre}</p>
          <h4 className="font-bold text-xl">{currency(precio)}</h4>
        </div>
        <small
          className={`${
            disponible ? "text-green-300" : "text-red-800"
          } font-bold uppercase`}
        >
          {disponible ? "Disponible" : "Agostado"}
        </small>
      </div>
      <div className="">
        <Image
          alt="perfume"
          className="object-cover rounded-xl"
          src={imagen}
          width={270}
          height={270}
        />
      </div>
    </div>
  );
}
