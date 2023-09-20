import { useEffect, useState } from 'react';
import { getUserPosts } from 'api/index';
import { PostType } from 'types/interfaces';
import PostsTable from './PostsTable';

const Profile: React.FC = () => {
    const [userPosts, setUserPosts] = useState<PostType[]>([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await getUserPosts();
                const data = response.data;
                setUserPosts(data.data)
                
            } catch (err) {

            }
        }
        getPosts()
    }, []);


    return (
        <div>
            <PostsTable postsData={userPosts}/>
        </div>
    )
}

export default Profile;