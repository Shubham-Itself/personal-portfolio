import { useEffect, useMemo, useState } from "react";

const Loader = () =>{
    const loadingItem = useMemo(()=>['HTML', 'CSS', 'Javascript', 'React', 'Angular', 'GSAP','Tailwind', 'Bootstrap', 'Git', 'Github','TypeScript','Bitbucket', 'Animation', 'FrontEnd Developer'],[]);
    const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState(loadingItem[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < loadingItem.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setCurrentItem(loadingItem[currentIndex + 1]);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentIndex ,loadingItem]);

    return(
        <div className="loader">
       <div> {currentItem}</div>

        </div>
    )
}

export default Loader;