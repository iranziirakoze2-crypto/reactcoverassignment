const products = [
  { name: "Lounge Deep Sofa", sku: "SOF-109", category: "Living room", price: "$1,280", stock: 44 },
  { name: "Curved Back Chair", sku: "CHR-218", category: "Dining", price: "$480", stock: 31 },
  { name: "Janod Alphabet Toy", sku: "KID-072", category: "Kids", price: "$68", stock: 84 },
  { name: "Medoc Swivel Chair", sku: "CHR-331", category: "Office", price: "$620", stock: 19 },
];

function Products() {
  return (
    <section className="page-panel">
      <div className="page-header">
        <div>
          <h1>My Product</h1>
          <p>Manage product listings, pricing, stock levels, and categories.</p>
        </div>
        <button type="button">Add Product</button>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.sku}>
            <span>{product.sku}</span>
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <div>
              <strong>{product.price}</strong>
              <small>{product.stock} in stock</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Products;
