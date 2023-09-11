import Box from '@mui/material/Box';
import { PostType } from 'types/interfaces';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import 'swiper/css';
import './index.scss';

type Props = {
    postData: PostType
}

const PostSlider: React.FC<Props> = ({ postData }) => {
    const sliderParams = {
        spaceBetween: 12,
        slidesPerView: postData?.mediaFiles?.length > 1 ? 1.3 : 1
    }

    const renderImgs = postData?.mediaFiles?.map((el, index) => {
        return (
            <SwiperSlide key={index}>
                <img
                    className='PostSlider__img'
                    src={el}
                    alt={postData.postTitle}
                />
            </SwiperSlide>
        )
    })

    return (
        <Box
            className="PostSlider"
        >
            <Swiper
                className='PostSlider__swiper-custom'
                {...sliderParams}
            >
                {renderImgs}
            </Swiper>
        </Box>
    )
}

export default PostSlider;