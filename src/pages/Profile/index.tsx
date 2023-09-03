

import { getUserPosts } from 'api/index';
import { useEffect, useState } from 'react';
import { PostType } from 'types/interfaces';


const Profile: React.FC = () => {
    const [userPost, setUserPost] = useState<PostType[]>([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await getUserPosts();
                const data = response.data
                console.log(data)
                setUserPost(data.data)
            } catch (err) {

            }
        }

        getPosts()
    }, []);

    const renderPosts = userPost?.map(post => {
        return(
            <div>
                {post.postTitle}
            </div>
        )
    })
    return (
        <div>
            {renderPosts}
        </div>
    )
}

export default Profile;