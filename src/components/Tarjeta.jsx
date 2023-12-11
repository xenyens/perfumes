import { currency } from "@/helper/currency";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Tarjeta({
  marca,
  nombre,
  precio,
  disponible,
  imagen,
  capacidad,
}) {
  return (
    <div className="tarjeta flex flex-col justify-center rounded-md p-12 max-w-[300px] h-[500px] ">
      <div className="space-y-3">
        <div>
          <p className="text-xl uppercase font-bold">{marca}</p>
          <p className="uppercase font-thin">{nombre}</p>
          <h4 className="font-bold text-xl">{currency(precio)}</h4>
          <h5>{capacidad} ml</h5>
        </div>

        <div className="flex flex-col space-y-2">
          <small
            className={`${
              disponible
                ? "text-green-600 bg-green-200"
                : "text-red-800 bg-red-100"
            }  uppercase rounded-md p-2 text-center`}
          >
            {disponible ? "Disponible" : "Vendido"}
          </small>

          {disponible && (
            <Link
              className=" bg-red-400  rounded-md hover:bg-red-600 uppercase border-none"
              href={`https://wa.me/526461954586?text=Hola que tal, me interesa este producto:${marca} - ${nombre} - $${precio}`}
            >
              <p className="text-sm p-2 font-semibold text-red-900 hover:text-white text-center">
                INFORMACIÓN
              </p>
            </Link>
          )}
        </div>
      </div>
      <div className="mt-3">
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
