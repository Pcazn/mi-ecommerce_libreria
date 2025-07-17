// src/Pages/BookDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://662844dfb625bf088c08fe69.mockapi.io/libros/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar el libro");
        return res.json();
      })
      .then((data) => setBook(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!book) return <p>Cargando libro...</p>;

  return (
    <div>
      <h2>{book.Nombre}</h2>
      <img src={book.avatar} alt={book.Nombre} style={{ width: 200 }} />
      <p><strong>Precio:</strong> ${book.Precio}</p>
      <p>{book.Descripcion}</p>
    </div>
  );
}

import { Helmet } from "react-helmet";

<Helmet>
  <title>Inicio | Librería Online</title>
  <meta name="description" content="Explorá los mejores libros en nuestra tienda" />
</Helmet>
