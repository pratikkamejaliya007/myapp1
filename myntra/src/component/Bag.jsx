import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import ProductCard from './ProductCard';
import Loader from './Loader';
import { addbag , removebag } from '../redux/bagslice';

function Bag() {
  const [data, setData] = useState([
    {
      "id": "101",
      "name": "Men's Solid Casual Shirt",
      "brand": "Roadster",
      "category": "Men's Fashion",
      "price": 1499,
      "discountPrice": 749,
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "color": "Blue",
      "rating": 4.2,
      "productLikes": 102,
      "images": [
        "data:image/jpeg;base64,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",
        "data:image/jpeg;base64,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"
      ]
    },
    {
      "id": "102",
      "name": "Women's A-Line Dress",
      "brand": "DressBerry",
      "category": "Women's Fashion",
      "price": 1999,
      "discountPrice": 999,
      "sizes": [
        "XS",
        "S",
        "M",
        "L"
      ],
      "color": "Red",
      "rating": 4.5,
      "productLikes": 98,
      "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzo91krUj0Nn70HcQl8DtoTPkeZMbDp9CKdQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJ2ABn9-OKlHmnWqmvomaFp8z-WKdOeU43Q&usqp=CAU"
      ]
    },
    {
      "id": "103",
      "name": "Running Shoes",
      "brand": "Nike",
      "category": "Footwear",
      "price": 5999,
      "discountPrice": 4999,
      "sizes": [
        "7",
        "8",
        "9",
        "10"
      ],
      "color": "Black",
      "rating": 4.7,
      "productLikes": 120,
      "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WnBP-1aYoPJ2EViBUUOCMJ3ZFEXrgOAaFg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzs1FHCSzr3HQ38ZYI5XdFk8XpAWI7eIIxQ&usqp=CAU"
      ]
    },
    {
      "id": "104",
      "name": "Women's Printed Kurta",
      "brand": "Biba",
      "category": "Women's Fashion",
      "price": 2499,
      "discountPrice": 1249,
      "sizes": [
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      "color": "Green",
      "rating": 4.3,
      "productLikes": 85,
      "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT91mKlhIvNGn_UJwcw8D-TXVUcjMliu-iuQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0SNxvr1CGfZXp4IDFf1AcXKluJRI54dvrXg&usqp=CAU"
      ]
    },
    {
      "id": "105",
      "name": "Men's Denim Jacket",
      "brand": "Levis",
      "category": "Men's Fashion",
      "price": 3499,
      "discountPrice": 2799,
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "color": "Blue",
      "rating": 4.6,
      "productLikes": 112,
      "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzU8dijA1yE42xidGWW1jwrvb99qImlSdo_w&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzU8dijA1yE42xidGWW1jwrvb99qImlSdo_w&usqp=CAU"
      ]
    },
    {
      "id": "106",
      "name": "Women's Casual Sneakers",
      "brand": "Puma",
      "category": "Footwear",
      "price": 2999,
      "discountPrice": 1999,
      "sizes": [
        "5",
        "6",
        "7",
        "8"
      ],
      "color": "White",
      "rating": 4.4,
      "productLikes": 95,
      "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzeAEY_tPECBXmWbXnMnZkMeWYn3lLUk5Qug&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmX0yZvZnRm-ZXKESj2MiqXqNvt7cu4-Ls2w&usqp=CAU"
      ]
    },
    {
      "id": "107",
      "name": "Men's Slim Fit Jeans",
      "brand": "Spykar",
      "category": "Men's Fashion",
      "price": 1899,
      "discountPrice": 949,
      "sizes": [
        "30",
        "32",
        "34",
        "36"
      ],
      "color": "Black",
      "rating": 4.2,
      "productLikes": 80,
      "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCXRI3pQYc1yPj30VrBm41vdOYc-bbzY8KA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrxWEQaohEUlO1ciwzSn9OGfgPnEMKnnKliQ&usqp=CAU"
      ]
    },
    {
      "id": "108",
      "name": "Women's Maxi Dress",
      "brand": "W",
      "category": "Women's Fashion",
      "price": 2999,
      "discountPrice": 1499,
      "sizes": [
        "XS",
        "S",
        "M",
        "L"
      ],
      "color": "Pink",
      "rating": 4.6,
      "productLikes": 92,
      "images": [
        "data:image/jpeg;base64,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",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcdSVFQb92PnXxPDFvrTmNLusairndgVg23Q&usqp=CAU"
      ]
    },
    {
      "id": "109",
      "name": "Men's Casual Sneakers",
      "brand": "Adidas",
      "category": "Footwear",
      "price": 4999,
      "discountPrice": 3999,
      "sizes": [
        "7",
        "8",
        "9",
        "10",
        "11"
      ],
      "color": "Grey",
      "rating": 4.5,
      "productLikes": 115,
      "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2AJjA_E0Vl__P9_Nxjb34_Dzz7u68f1891Q&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmLgD2uaEDlSg1URSm0iTudWl2y149Z0KPoA&usqp=CAU"
      ]
    },
    {
      "id": "110",
      "name": "Women's Solid Blouse",
      "brand": "Forever 21",
      "category": "Women's Fashion",
      "price": 1299,
      "discountPrice": 649,
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "color": "White",
      "rating": 4.1,
      "productLikes": 78,
      "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4bpQeX3vKDlrJdaDCQi3ObSze_3rNJ9AEjA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKfJudk0hFdj4zm30ebNImTpjrUwl3tDQ_w&usqp=CAU"
      ]
    },
    {
      "id": "111",
      "name": "Men's Printed T-Shirt",
      "brand": "HRX by Hrithik Roshan",
      "category": "Men's Fashion",
      "price": 999,
      "discountPrice": 499,
      "sizes": [
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      "color": "Yellow",
      "rating": 4.3,
      "productLikes": 85,
      "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTywqU9eMNptBprrt0CyUZO5cIcsUiN0dMr2g&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOflq9e6tC1OFvD8JIej7wNcVsYyZP44BhQ&usqp=CAU"
      ]
    },
    {
      "id": "112",
      "name": "Women's High Heels",
      "brand": "Catwalk",
      "category": "Footwear",
      "price": 3499,
      "discountPrice": 1749,
      "sizes": [
        "5",
        "6",
        "7",
        "8",
        "9"
      ],
      "color": "Black",
      "rating": 4.5,
      "productLikes": 100,
      "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9fHv1KhzjL6_eBxWZM6btn0C0Nvyun1Gg9A&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeFHEuwNRQDQB1lIMBjAl_wBR2igsu5VRqgQ&usqp=CAU"
      ]
    },
    {
      "id": "113",
      "name": "Men's Polo T-Shirt",
      "brand": "U.S. Polo Assn.",
      "category": "Men's Fashion",
      "price": 1599,
      "discountPrice": 799,
      "sizes": [
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      "color": "Green",
      "rating": 4.4,
      "productLikes": 87,
      "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmdyHYpCgzEeFThEyZTicuE-Gw6CmahhOZ_g&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRICqGKE4sZMny3agnCtALorvcQ6d-rAvHLTw&usqp=CAU"
      ]
    },
    {
      "id": "114",
      "name": "Women's Ankle Boots",
      "brand": "H&M",
      "category": "Footwear",
      "price": 4499,
      "discountPrice": 2249,
      "sizes": [
        "5",
        "6",
        "7",
        "8"
      ],
      "color": "Brown",
      "rating": 4.3,
      "productLikes": 88,
      "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQO4Dfvhif4f9sqWDFZeX6G5qVQIAXQAkOgA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4g-RzNu6Sas9ocqQAWcG9KQjgpXsZVAJ6EQ&usqp=CAU"
      ]
    },
    {
      "id": "115",
      "name": "Men's Formal Shirt",
      "brand": "Raymond",
      "category": "Men's Fashion",
      "price": 2499,
      "discountPrice": 1249,
      "sizes": [
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      "color": "White",
      "rating": 4.2,
      "productLikes": 82,
      "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWK_XiQGG_US18Cp-U4k0FbwADSWmwECF14w&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgABsfp7oEES2Qn624uSf-JNrAi_TwpHGiVA&usqp=CAU"
      ]
    },
    {
      "id": "116",
      "name": "Women's Handbag",
      "brand": "Lavie",
      "category": "Accessories",
      "price": 2999,
      "discountPrice": 1499,
      "sizes": [
        "One Size"
      ],
      "color": "Black",
      "rating": 4.5,
      "productLikes": 90,
      "images": [
        "data:image/jpeg;base64,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",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB2x-2FC2cZCMWLq_bqkGH8EONnw_TNigSJA&usqp=CAU"
      ]
    },
    {
      "id": "117",
      "name": "Men's Casual Watch",
      "brand": "Fossil",
      "category": "Accessories",
      "price": 9999,
      "discountPrice": 7999,
      "sizes": [
        "One Size"
      ],
      "color": "Silver",
      "rating": 4.6,
      "productLikes": 115,
      "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwh1K6L9GULgGjcg-_sRqQbRdOjYLRKk6WVA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNFag-qvSpvunabM4LcLCkJfep_kurK408g&usqp=CAU"
      ]
    },
    {
      "id": "118",
      "name": "Women's Sunglasses",
      "brand": "Ray-Ban",
      "category": "Accessories",
      "price": 6999,
      "discountPrice": 4999,
      "sizes": [
        "One Size"
      ],
      "color": "Brown",
      "rating": 4.7,
      "productLikes": 120,
      "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhXKgglCQAcQlexwyyonqsXqAQWA5WuSytQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbHlPb7vZKEvAJ-cypabngN8NBDGhL18daKw&usqp=CAU"
      ]
    },
    {
      "id": "119",
      "name": "Men's Leather Belt",
      "brand": "Tommy Hilfiger",
      "category": "Accessories",
      "price": 2499,
      "discountPrice": 1999,
      "sizes": [
        "One Size"
      ],
      "color": "Brown",
      "rating": 4.5,
      "productLikes": 98,
      "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCBVfww3zQQT1zvkOyHSTKBWjZ27n5uXimzQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTum2qhQw_Q-_2BbM0zZgSg150JgcmCk-yPhg&usqp=CAU"
      ]
    },
    {
      "id": "120",
      "name": "Women's Scarf",
      "brand": "Accessorize",
      "category": "Accessories",
      "price": 999,
      "discountPrice": 499,
      "sizes": [
        "One Size"
      ],
      "color": "Multicolor",
      "rating": 4.2,
      "productLikes": 75,
      "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoDgvqdhDzSaWF9vYmFRM2_WLm4zf8qCOQUA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTawewaEtedzBEUtMnFDdHLgX-slmJBh7M1eg&usqp=CAU"
      ]
    },
    {
      "id": "121",
      "name": "Medium 22 L Backpack ",
      "brand": "SAFARI",
      "category": "bag",
      "price": 514,
      "discountPrice": 1699,
      "sizes": [
        "9"
      ],
      "color": "black",
      "rating": "3.5",
      "productLikes": "120",
      "images": [
        "",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/backpack/z/c/i/-original-imah2dbtxjtcmtwd.jpeg?q=70"
      ]
    },
    {
      "id": "122",
      "name": "Fridge Water bottle",
      "brand": "NIRLON",
      "category": "bottle",
      "price": 349,
      "discountPrice": 999,
      "sizes": [
        "7",
        "8"
      ],
      "color": "silver",
      "rating": "4.0",
      "productLikes": "100",
      "images": [
        "",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-bottle/j/t/c/1000-stainless-steel-single-wall-fridge-water-bottle-silver-set-original-imagv2phhu8d8eru.jpeg?q=70"
      ]
    },
    {
      "id": "123",
      "name": "MANFORCE Combo Pack",
      "brand": "MANFORCE",
      "category": "condom",
      "price": 180,
      "discountPrice": 300,
      "sizes": [
        "7"
      ],
      "color": "Strawberry,Chocolate",
      "rating": "4.1",
      "productLikes": "1200",
      "images": [
        "",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-condom/o/z/z/set-30-combo-pack-strawberry-chocolate-litchi-flavoured-3-original-imahybs6fvzj7qhf.jpeg?q=70"
      ]
    }
  ]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const bag = useSelector((state) => state.bag);

  // useEffect(() => {
  //   const fetch = async () => {
  //     try {
  //       const res = await axios.get('http://localhost:8000/products');
  //       setData(res.data);
  //     } catch (error) {
  //       console.error("Error fetching data", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetch();
  // }, []);

  if (loading) {
    return <Loader />;
  }

  function addbagdata(id) {
    const bagdata = data.filter((el) => el.id == id);
    if (bagdata.length > 0) {
      const firstObject = bagdata[0];
      console.log(firstObject);
      dispatch(addbag(firstObject));
    } else {
      console.log("No matching object found");
    }
  }

  function removebagdata(id){
    dispatch(removebag(id))
  }

  return (
    <div className='flex flex-wrap my-10'>
      {data.length > 0 ? (
        data.map((el) => (
          <ProductCard
            key={el.id}
            data={el}
            addbagdata={addbagdata}
            removebagdata={removebagdata}
            isAdded={bag.some((item) => item.id === el.id)}
          />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default Bag;
