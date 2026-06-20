const categories = [
  { name: "Living room", products: 42, revenue: "$24.8K", growth: "+12%" },
  { name: "Dining", products: 28, revenue: "$18.6K", growth: "+8%" },
  { name: "Kids", products: 36, revenue: "$11.2K", growth: "+16%" },
  { name: "Office", products: 19, revenue: "$9.7K", growth: "+5%" },
];

function Categories() {
  return (
    <section className="page-panel">
      <div className="page-header">
        <div>
          <h1>Category Pages</h1>
          <p>Review product categories and their performance.</p>
        </div>
        <button type="button">New Category</button>
      </div>
      <div className="category-grid">
        {categories.map((category) => (
          <article className="category-card" key={category.name}>
            <div>
              <h2>{category.name}</h2>
              <span>{category.products} products</span>
            </div>
            <strong>{category.revenue}</strong>
            <em>{category.growth}</em>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Categories;
