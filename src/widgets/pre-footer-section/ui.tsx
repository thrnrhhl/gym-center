import ImgInstagram from '../../shared/images/instagram.svg';
import ImgTwitter from '../../shared/images/twitter.svg';
import ImgFacebook from '../../shared/images/facebook.svg';
import { IconLogo } from '../../shared/ui';

export const PreFooterSection = () => (
    <section className="container pt-[80px] pb-[100px] flex justify-between">
        <div>
            <div className="flex items-center gap-[8px] text-[20px] font-[600] text-[#fff] mb-[16px]">
                <IconLogo />
                Gym Center
            </div>
            <div className="text-[#fff] text-[14px] font-[500]">Highlight benefits of each <br />exercise, both physical and<br /> mental</div>
        </div>
        <div className="flex gap-[40px]">
            <div className="flex flex-col gap-[16px]">
                <div className="text-[#fff] text-[18px] font-[700]">Sitemap</div>
                <a href="/" className="text-[#fff] text-[16px] font-[500]">About Us</a>
                <a href="/" className="text-[#fff] text-[16px] font-[500]">Promos</a>
                <a href="/" className="text-[#fff] text-[16px] font-[500]">News & Blog</a>
                <a href="/" className="text-[#fff] text-[16px] font-[500]">Help Center</a>
            </div>
            <div className="flex flex-col gap-[16px]">
                <div className="text-[#fff] text-[18px] font-[700]">Support</div>
                <a href="/" className="text-[#fff] text-[16px] font-[500]">FAQ</a>
                <a href="/" className="text-[#fff] text-[16px] font-[500]">Support Center</a>
            </div>
            <div className="flex flex-col gap-[16px]">
                <div className="text-[#fff] text-[18px] font-[700]">Social Media</div>
                <div className="flex gap-[16px]">
                    <img src={ImgInstagram} />
                    <img src={ImgTwitter} />
                    <img src={ImgFacebook} />
                </div>
            </div>

        </div>
    </section>
);