import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Modal from 'react-modal';
import './Author.css'

function Author() {
    const [author, setAuthor] = useState([]);
    const [posts, setPosts] = useState([]);
    const [modalOpen,setModalOpen] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:3000/profile")
        .then(response => {
            console.log("data in useEffect",response)
            setAuthor(response.data)
        })
    },[])

    const getPosts = (author) => {
        axios.get(`http://localhost:3000/posts?author=${author}`)
        .then(response => {
            setPosts(response.data)
        })
    }
    const showPost = (author) => {
            getPosts(author)
            return(
                <>
                { 
                    posts.map((post)=>(
                        <div className="post-title">{post.title}</div>
                    )) 
                }
                </>
            )
    }

   const openModal = (author) => {
    setModalOpen(true)
    };

    const closeModal = () => {
        setModalOpen(false)
    };

    return (
        <div>
            {author.length===0? <div>loading....</div>: 
                <div className = "author-card" onClick={openModal}>{author.name} </div>
            }
            {author && (
                    <Modal isOpen={modalOpen}
                        onRequestClose={closeModal}>
                            <button className="close-modal right" onClick={closeModal}>x</button>
                            <div className = "author-details">
                                <h2>{author.name}</h2>
                                <div className="author-description">
                                    <p>
                                        <strong>{author.about}</strong>
                                    </p>                                       
                            </div>
                            </div>
                            <hr />
                            <div>  
                               {showPost(author.name)}
                            </div>
                    </Modal>
                )}
        </div>
    )
}

export default Author
