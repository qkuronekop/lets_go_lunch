import React, { useState, useEffect } from "react"
import { Shop } from "../models/Shop";
import searchService from "../service/SearchService";

export default function Contents() {

  const [shops, setShops] = useState<Array<Shop>>();
  
  useEffect(() => {
    searchService.getShops()
    .then(response => setShops(response.shop))
    .catch(error => alert("エラーです"));
  });

  return (
    <div className="w-full fixed top-20 left-4">
      <p>Body</p>
    </div>
  )
}