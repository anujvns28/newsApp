import { useEffect, useState } from "react";
import { fetchNews } from "./service/news";
import Card from "./components/Card";

function App() {
  const [news, setNews] = useState();
  const [page,setPage] = useState(1);
  const [pages,setPages] = useState([1, 2, 3, 4, 5]);
  let totalpage 

  const fetchingNews = async () => {
    const data = await fetchNews();
    setNews(data);
    totalpage =  Math.floor(news.length/12) + 1;
  };

  

  const handleBack = () => {
    if(page>1){
      setPage(page-1)
    }
  }

  const handleNext = () =>{
    if(page < news.length/12){
      setPage(page+1)
    }
    handlePaginatiion()
  }

  const handlePaginatiion = () => {
    const arr = []
     if(page>3){
       for(let i=1;i<=5;i++){
        arr.push(i+2);
       }
       setPages(arr);
     }
  }


  useEffect(() => {
    fetchingNews();
  }, []);




  if (!news) {
    return (
      <div className="h-screen w-screen flex items-center text-black justify-center">
        <div className="custom-loader"></div>
      </div>
    );
  }

  return (
    <>
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">News App</h1>
          <p className="text-lg">Stay updated with the latest news</p>
        </div>
      </header>

      <div className="flex items-center justify-center flex-row gap-3 flex-wrap  mx-auto  py-3 ">
        {news.slice(page*12-12,page*12).map((item) => {
          return (
            <div className="w-[30%] ">
              <Card cardData={item} />
            </div>
          );
        })}
      </div>

      {/* pagination */}
      <div className="flex justify-center mt-8">
    <nav>
        <ul className="inline-flex items-center -space-x-px">
           
            <li onClick={handleBack}>
                <p className="block mr-1 px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
                    <span className="sr-only">Previous</span>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M15 10a1 1 0 01-1 1H7.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L7.414 9H14a1 1 0 011 1z" clip-rule="evenodd"></path>
                    </svg>
                </p>
            </li>
            
            
            <div className="flex flex-row gap-1">
              {
                pages.map((item) => {
                  return <li onClick={() => setPage(item)}>
                  <p 
                  aria-current="page" 
                  className={`z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300  hover:bg-blue-100 hover:text-blue-700 ${item == page && "bg-blue-100"}`}>
                    {item}
                  </p>
              </li>
                })
              }
            </div>
            
           
            <li onClick={handleNext}>
                <p className="block ml-1 px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
                    <span className="sr-only">Next</span>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h6.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L12.586 11H6a1 1 0-1-1z" clip-rule="evenodd"></path>
                    </svg>
                </p>
            </li>
        </ul>
    </nav>
</div>


      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 News App. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
