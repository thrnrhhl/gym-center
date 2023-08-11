import { IconPlay } from '../../shared/ui'
import { Button } from '../../shared/ui/shadcn/ui/button'
import ImgImageSide from '../../shared/images/image_side.png';
import ImgEllipse1 from '../../shared/images/ellipse_1.png';
import ImgEllipse2 from '../../shared/images/ellipse_2.png';
import ImgEllipse3 from '../../shared/images/ellipse_3.png';

export const HeroSection = () => (
    <section aria-label="hero-section" className="h-[599px] overflow-hidden flex gap-[40px] container">
        <div className="w-[530px] flex flex-col justify-center">
            <h1 className="font-[700] text-[64px] text-[#fff] ff-head">Helps for your ideal body fitness</h1>
            <p className="text-[18px] font-[500] text-[#fff] opacity-[.5] mt-[12px]">Motivate users with benefits and positive reinforcement, and offer modifications and progress tracking.</p>
            <div className="flex gap-[32px] items-center mt-[32px]">
                <Button className="btn__primary">Start Training</Button>
                <div className="flex gap-[12px] items-center">
                    <div className="w-[44px] h-[44px] rounded-full border border-[#fff] flex items-center justify-center">
                        <IconPlay />
                    </div>
                    <p className="text-[16px] text-[#fff]">Watch Demo</p>
                </div>
            </div>
        </div>

        <div className="relative">
            <img src={ImgImageSide} className="relative z-[2]" />
            <div className="absolute ff-head left-[-135px] bottom-[261px] text-[142px] text-[#FFFFFF1C] font-[900] rotate-[-90deg] z-[1]">Fitness</div>

        </div>
        <div className="mt-[66px]">
            <div className="flex mb-[24px]">
                <img src={ImgEllipse1} />
                <img src={ImgEllipse2} className="relative left-[-20.5px]" />
                <img src={ImgEllipse3} className="relative left-[-41px]" />
            </div>
            <p className="text-[18px] font-[500] text-[#fff]">10K+ Satisfied Customer</p>
        </div>
    </section>

);