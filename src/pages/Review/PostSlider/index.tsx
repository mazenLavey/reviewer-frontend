import Box from '@mui/material/Box';
import { PostType } from 'types/interfaces';
import { ReactComponent as SliderNavBtn } from "./assets/slider-nav-btn.svg";
import useMedia from 'hooks/useMedia';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './index.scss';

type Props = {
    postData: PostType
}

const PostSlider: React.FC<Props> = ({ postData }) => {
    const { isMobile } = useMedia()
    const sliderParams = {
        spaceBetween: 6,
        slidesPerView: postData?.mediaFiles?.length > 1 ? 1.2 : 1,
        modules: [Navigation],
        navigation: {
            prevEl: '.PostSlider__Prev',
            nextEl: '.PostSlider__Next',
        },
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
            sx={{
                position: "relative"
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    aspectRatio: " 16 / 9",
                    borderRadius: isMobile ? "16px" : "32px",
                    overflow: "hidden",
                }}
            >
                <Swiper
                    className='PostSlider__swiper-custom'
                    {...sliderParams}
                >
                    {renderImgs}
                </Swiper>
            </Box>
            {
                !isMobile &&
                <>
                    <div className="PostSlider__Prev" >
                        <SliderNavBtn />
                    </div>
                    <div className="PostSlider__Next">
                        <SliderNavBtn />
                    </div>
                </>
            }
        </Box>
    )
}

export default PostSlider;