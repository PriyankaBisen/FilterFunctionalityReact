import React, { useState } from "react";
import Product from "../Product.json";
import'../App.css'

export default function ProductFilter() {
  const [items, setItems] = useState(Product);

  console.log(items);

  const filterItems=(catItem)=>{
    const updateItems=Product.filter((curItem)=>{
        return curItem.category === catItem
    });
    setItems(updateItems);
  }
  return (
    <div className="container mt-5">
      <h1>All Product</h1>
      <button type="button" class="btn btn-danger me-3" onClick={()=>setItems(Product)}>
        All Product
      </button>
      <button type="button" class="btn btn-danger me-3" onClick={()=>filterItems("men's clothing")}>
      men's clothing
      </button>
      <button type="button" class="btn btn-danger me-3" onClick={()=>filterItems("jewelery")}>
      jewelery
      </button>
      <button type="button" class="btn btn-danger me-3" onClick={()=>filterItems("electronics")}>
      electronics
      </button>
      <button type="button" class="btn btn-danger me-3" onClick={()=>filterItems("women's clothing")}>
      women's clothing
      </button>
<hr></hr>
      <div className="row">
        {items.map((val) => (
          <div className="col-md-3">
            <div class="card">
              <img src={val.image} class="card-img-top img-fluid" alt="..." />
              <div class="card-body">
                <h5>
                  {val.title.substring(0, 15)}{" "}
                  <span class="badge bg-primary">{val.category}</span>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
