import React, { useEffect } from 'react'

import Status from '../components/home/Status'
import Posts from '../components/home/Posts'
import RightSideBar from '../components/home/RightSideBar'

import { useSelector } from 'react-redux'
import LoadIcon from '../images/loading.gif'
import Sidebar from '../components/SideBar'
import Stories from '../components/Stories'


let scroll = 0;

const Home = () => {
    const { homePosts } = useSelector(state => state)

    window.addEventListener('scroll', () => {
        if(window.location.pathname === '/'){
            scroll = window.pageYOffset
            return scroll;
        }
    })

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({top: scroll, behavior: 'smooth'})
        }, 100)
    },[])

    return (
        <div className="home row mx-0">
            <div className="col-md-3">
                <div className='sidebar'>
                    <Sidebar/>
                </div>
            </div>
            <div className='stories'>
                    <Stories/>
            </div>
            <div className="home">
                {/* <div className='status my-3 d-flex'>
                    <Stories/>
                </div> */}
                {/* <Stories/> */}
                <Status />

                {
                    homePosts.loading 
                    ? <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
                    : (homePosts.result === 0 && homePosts.posts.length === 0)
                        ? <h2 className="text-center">No Post</h2>
                        : <Posts />
                }
                
            </div>
            
            <div className="rightsidebar">
                <RightSideBar />
            </div>
        </div>
    )
}

export default Home
