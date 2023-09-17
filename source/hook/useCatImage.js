import { useState, useEffect } from "react";
const CAT_IMAGE_URL = "https://cataas.com";
export function useCatImage({fact}) {
    const [imageUrl, setImageUrl] = useState();
    useEffect(() => {
      if (!fact) return;
      const firstWord = fact.split(" ", 3).join(" ");
      // console.log(firstWord);
  
      fetch(
        `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
      )
        .then((res) => res.json())
        .then((response) => {
          const { url } = response;
          setImageUrl(url);
          console.log(response);
        });
    }, [fact]);
  
    return {imageUrl : `${CAT_IMAGE_URL}${imageUrl}`}
  }
  