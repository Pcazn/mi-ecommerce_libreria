import React, { useEffect, useState, useMemo } from "react";
import ProductList from '@/components/Productlist';
import { Helmet } from "react-helmet";
import styled from "styled-components";
const SearchInput = styled.input`
  padding: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;
`;

export default function Home({ addToCart }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch("https://68335fe8464b499636ff407d.mockapi.io/api/libros/Libros")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar los libros");
        return res.json();
      })
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredProductos = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return productos.filter((p) =>
      p.Nombre.toLowerCase().includes(term) ||
      (p.Categoria && p.Categoria.toLowerCase().includes(term))
    );
  }, [productos, searchTerm]);

  const totalPages = Math.ceil(filteredProductos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProductos = filteredProductos.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="container mt-4">
      <Helmet>
        <title>Inicio | Librería Online</title>
        <meta name="description" content="Explorá los mejores libros en nuestra tienda" />
      </Helmet>

      <h1 className="text-center mb-4">Librería Vilela</h1>

      <SearchInput
        type="text"
        placeholder="Buscar por nombre o categoría..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading && <p className="text-center">Cargando libros...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      <ProductList productos={currentProductos} addToCart={addToCart} />

      <div className="text-center mt-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="btn btn-outline-secondary me-2"
        >
          Anterior
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`btn btn-sm me-1 ${
              currentPage === i + 1 ? "btn-primary" : "btn-outline-primary"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="btn btn-outline-secondary ms-2"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
