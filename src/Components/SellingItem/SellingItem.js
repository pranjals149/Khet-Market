import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { db } from '../../firebase';
import SellingPost from './SellingPost/SellingPost'
import './SellingItem.css'


const SellingItem = () => {

    const [{ user }, dispatch] = useStateValue();
    const history = useHistory();

    const [post, setPost] = useState([])

    useEffect(() => {
        if (user) {
            let unsubscribe = db.collection('SellingUsers').onSnapshot((snapshot) => {
                setPost(snapshot.docs.map((doc) => doc.data()))
            })

            return () => unsubscribe();
        }
    }, [user])

    console.log(post)

    return (
        <div className='sellingItem'>
            <h2 style={{ color: 'black', fontWeight: '600', letterSpacing: '4px' }}>Congratulations <strong>{user?.email}</strong> your item is saved with us </h2>

            <button className='sellingItem__button' onClick={() => history.push('/sell')}>Go Back to Sell Page</button>

            <button className='sellingItem__button' onClick={() => history.push('/buyorsell')}>Go Back to Main Page</button>

            <div className="sellingItem__post">
                {post.map((item) => (
                    <SellingPost classData={item} />
                ))}
            </div>

        </div>
    )
}

export default SellingItem
