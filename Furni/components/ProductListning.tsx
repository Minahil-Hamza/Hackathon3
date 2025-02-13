"use client";
import { addToCart } from "@/app/actions/actions";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { oneProductQuery } from "@/sanity/lib/queries";
import { Product } from "@/types/product";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProductListing = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const products: Product[] = await client.fetch(oneProductQuery);
      setAllProducts(products);
    }

    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault(); // Prevent default link behavior
    toast.success(`${product.name} added to cart!`);
    addToCart(product);
  };

  return (
    <>
      {allProducts.map((product) => (
        <section key={product._id}>
          <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
            {/* Main Product Section */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 h-auto">
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    height={800}
                    width={800}
                    alt="chair"
                    className="w-full h-auto object-cover"
                  />
                )}
              </div>
              <div className="w-full md:w-1/2 px-4 md:px-10 py-6 flex flex-col justify-center">
                <div>
                  <p className="text-xl md:text-2xl font-semibold">
                    {product.name}
                  </p>
                  <p className="py-2 text-lg md:text-xl">${product.price}</p>
                </div>
                <div className="text-[#505977] text-sm md:text-base">
                  <h1 className="font-semibold">Description</h1>
                  <div className="my-4 md:my-6">
                    <p>{product.description}</p>
                  </div>
                  <div className="ml-4">
                    <ul className="list-disc space-y-1">
                      {product.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                      {/* <li>Premium material</li>
                    <li>Handmade upholstery</li>
                    <li>Quality timeless classic</li> */}
                    </ul>
                  </div>
                  <div>
                    <div className="my-8">
                      <h1 className="font-semibold">Dimensions</h1>
                    </div>
                    <div className="flex gap-12 md:gap-20 text-sm md:text-base">
                      <div>
                        <h1>Height</h1>
                        <p>{product.dimensions?.height || "N/A"}</p>
                      </div>
                      <div>
                        <h1>Width</h1>
                        <p>{product.dimensions?.width || "N/A"}</p>
                      </div>
                      <div>
                        <h1>Depth</h1>
                        <p>{product.dimensions?.depth || "N/A"}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-between items-center mt-8">
                      <div className="flex items-center gap-4"></div>
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white mt-4 md:mt-0"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ProductListing;
