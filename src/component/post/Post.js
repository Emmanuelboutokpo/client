import React,{useEffect,useState} from "react";
import { Link} from "react-router-dom";
import "./post.css";
import { API } from "../../api";
import axios from "axios";
import ReactPaginate from "react-paginate";

export default function Post({posts,setPosts,pages,setPage, setPages, page, search,limit}) {
/*   const token = window.localStorage.getItem("token"); 
  const loc = search.split("?")[1]
  const [selectedCategory, setSelectedCategory] = useState(loc);
  const values = Object.values(posts)[0];

//-----------------------------Get post by category -----------------------------------------
useEffect(() => {
  if (selectedCategory) {
    const fetchData = async () => {
      try {
       const api = API
         if (selectedCategory !== undefined) {
            const res = await axios.get(`${api}/post/getAllPost?${selectedCategory }& page=${page}&limit=${limit}`)
            setPosts(res.data);
            setPage(res.data.page);
            setPages(res.data.totalPage);
         }  
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  } 
  
}, [selectedCategory,setPosts,limit,setPage,page,setPages]); */


//---------------------  Analyse syntaxique de html -------------------------
/* const getText = (html) =>{
  const doc = new DOMParser().parseFromString(html, "text/html")
  return doc.body.textContent.length > 15 ?doc.body.textContent.substring(0,150) +'...' : doc.body.textContent
} */

//------------------- Loading ---------------------------------------------------
/* const changePage = ({ selected }) => {
setPage(selected);
};
 */
return (
  <div className="posts">
      <div className="post">
    {/*    <div className="catArticle">
          <h1 className="nameArticle">cool</h1>
         <button className="cta" onClick={() => setSelectedCategory(post.catName)}>
          <Link className="hover-underline-animation" to={`/?catName=${post.catName}`}> Explorer </Link>
            <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
              <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
            </svg>
          </button>  
        </div> */}
        <div className="postImg">
           <img src="images/car6.jpg" alt="" />
        </div>
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">
               Renault
            </span>
          </div>
           <h4 className="nameArticl">2020 Audi New Generation P00234 </h4> 
          <p className="postDesc">Renault</p>
            <div className="type">
                <p>Sport</p>
                <p>2 Passagers</p>
                <p>Hydride</p>
                <p>Auto</p>
            </div>
        </div>
{/*           <span className="postDate">{post.readtime > 1 ? post.readtime + " minutes de lecture" : post.readtime + " minute de lecture" } </span>
 */}      </div>
       <div className="post">
    {/*    <div className="catArticle">
          <h1 className="nameArticle">cool</h1>
         <button className="cta" onClick={() => setSelectedCategory(post.catName)}>
          <Link className="hover-underline-animation" to={`/?catName=${post.catName}`}> Explorer </Link>
            <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
              <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
            </svg>
          </button>  
        </div> */}
        <div className="postImg">
           <img src="images/car5.jpg" alt="" />
        </div>
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">
               Renault
            </span>
          </div>
           <p className="nameArticl">eesfsfds</p> 
        {/*   <span className="postTitle">
            <Link className="title" to={token === null ? "/login" : `/post/${post.idpost}`}>
              <h1>{post.titlePost}</h1>
            </Link>
          </span> */}
        </div>
          <p className="postDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia veritatis dicta officiis at voluptas porro nulla dolore voluptate sint et fugiat libero, id laboriosam labore quisquam repellendus iste odio quasi!</p>
{/*           <span className="postDate">{post.readtime > 1 ? post.readtime + " minutes de lecture" : post.readtime + " minute de lecture" } </span>
 */}      </div>
       <div className="post">
    {/*    <div className="catArticle">
          <h1 className="nameArticle">cool</h1>
         <button className="cta" onClick={() => setSelectedCategory(post.catName)}>
          <Link className="hover-underline-animation" to={`/?catName=${post.catName}`}> Explorer </Link>
            <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
              <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
            </svg>
          </button>  
        </div> */}
        <div className="postImg">
           <img src="images/car4.jpg" alt="" />
        </div>
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">
               Renault
            </span>
          </div>
           <p className="nameArticl">eesfsfds</p> 
        {/*   <span className="postTitle">
            <Link className="title" to={token === null ? "/login" : `/post/${post.idpost}`}>
              <h1>{post.titlePost}</h1>
            </Link>
          </span> */}
        </div>
          <p className="postDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia veritatis dicta officiis at voluptas porro nulla dolore voluptate sint et fugiat libero, id laboriosam labore quisquam repellendus iste odio quasi!</p>
{/*           <span className="postDate">{post.readtime > 1 ? post.readtime + " minutes de lecture" : post.readtime + " minute de lecture" } </span>
 */}      </div>
       <div className="post">
    {/*    <div className="catArticle">
          <h1 className="nameArticle">cool</h1>
         <button className="cta" onClick={() => setSelectedCategory(post.catName)}>
          <Link className="hover-underline-animation" to={`/?catName=${post.catName}`}> Explorer </Link>
            <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
              <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
            </svg>
          </button>  
        </div> */}
        <div className="postImg">
           <img src="images/car3.jpg" alt="" />
        </div>
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">
               Renault
            </span>
          </div>
           <p className="nameArticl">eesfsfds</p> 
        {/*   <span className="postTitle">
            <Link className="title" to={token === null ? "/login" : `/post/${post.idpost}`}>
              <h1>{post.titlePost}</h1>
            </Link>
          </span> */}
        </div>
          <p className="postDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia veritatis dicta officiis at voluptas porro nulla dolore voluptate sint et fugiat libero, id laboriosam labore quisquam repellendus iste odio quasi!</p>
{/*           <span className="postDate">{post.readtime > 1 ? post.readtime + " minutes de lecture" : post.readtime + " minute de lecture" } </span>
 */}      </div>
      <ReactPaginate
           /*  previousLabel={"< Prev"}
            nextLabel={"Next >"}
            pageCount={Math.min(4, pages)}
            onPageChange={changePage}
            containerClassName={"contPag"}
            pageLinkClassName={"linkPag"}
            previousLinkClassName={"prevPag"}
            nextLinkClassName={"prevPag"}
            activeLinkClassName={""}
            disabledLinkClassName={""} */
          />
  </div>
);
}