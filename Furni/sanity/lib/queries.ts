import { groq } from 'next-sanity';



export const oneProductQuery = groq`*[_type == "product" && "hero" in tags]`;

export const fourProductsQuery = groq`*[_type == "product"][0..3]`;

export const ourpopularproductsquery = groq`*[_type == "product"][10..13]`;

export const allProductsQuery = groq`*[_type == "product"]`;

export const allCategoriesQuery = groq`*[_type == "category"]`;

export const bannerQuery = groq`*[_type == 'banner' && "banner" in tags]`;

