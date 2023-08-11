import ImgEllipse1 from '../../shared/images/ellipse_1.png';
import ImgEllipse2 from '../../shared/images/ellipse_2.png';
import ImgEllipse3 from '../../shared/images/ellipse_3.png';
import ImgUserOtziv from '../../shared/images/user_otziv.png';
import ImgStar from '../../shared/images/star.svg';
import { IconArrowRight } from '../../shared/ui';

export const CustomerSection = () => (
    <section className="container py-[80px]">
        <div className="flex justify-between relative">
            <div className="text-[#FFFFFF1C] text-[142px] font-[900] absolute left-[-367px] top-[-93px]">Testimonial</div>
            <div className="w-[396px] flex-shrink-0">
                <div className="text-[40px] font-[700] text-[#fff] ff-head">What Our Member Say About Us?</div>
                <div className="mt-[146px]">
                    <div className="flex mb-[24px]">
                        <img src={ImgEllipse1} />
                        <img src={ImgEllipse2} className="relative left-[-20.5px]" />
                        <img src={ImgEllipse3} className="relative left-[-41px]" />
                    </div>
                    <p className="text-[18px] font-[500] text-[#fff] ff-head">10K+ Satisfied Customer</p>
                </div>
            </div>

            <div className="relative bg-[#0D0D0D] p-[44px_52px] rounded-[12px] w-full max-h-[338px] w-[664px]">
                <div className="absolute bg-[#fff] w-[52px] h-[52px] rounded-full flex items-center justify-center right-[-26px] top-[50%] translate-y-[-50%] cursor-pointer">
                    <IconArrowRight fill="#097FD9" />
                </div>
                <div className="flex justify-end mb-[35px]">
                    <div className="flex items-center gap-[5px]">
                        <img src={ImgStar} />
                        <img src={ImgStar} />
                        <img src={ImgStar} />
                        <img src={ImgStar} />
                        <img src={ImgStar} />
                    </div>
                </div>
                <div className="text-[#fff] text-[18px] mb-[24px]">“ Join this fitness member, the best choice that I’ve. They’re very professional and give you suggestion about what food and nutrition that you can eat”</div>
                <div className="flex items-center gap-[16px] mb-[28px]">
                    <img src={ImgUserOtziv} className="bg-[#757575] w-[64px] h-[64px] rounded-full" />
                    <div>
                        <div className="text-[#fff] text-[18px] font-[600]">Jonathan Edward</div>
                        <div className="text-[#757575] text-[16px] font-[600]">Office Worker</div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex items-center gap-[8px]">
                        <div className="w-[16px] h-[16px] rounded-full bg-[#05A6C2]"></div>
                        <div className="w-[12px] h-[12px] rounded-full bg-[#757575]"></div>
                        <div className="w-[12px] h-[12px] rounded-full bg-[#757575]"></div>
                    </div>
                </div>
            </div>

        </div>
    </section>

);