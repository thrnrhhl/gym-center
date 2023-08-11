import ImgTransform1 from '../../shared/images/transform_1.png';
import ImgTransform2 from '../../shared/images/transform_2.png';
import ImgTransform3 from '../../shared/images/transform_3.png';
import ImgGalochka from '../../shared/images/galochka.svg';
import { Button } from '../../shared/ui/shadcn/ui/button';

export const TranformSection = () => (
    <section className="py-[120px] container flex items-center justify-between">
        <div className="bg-[#00000020] w-[660px] h-[519px] relative">
            <img src={ImgTransform1} className="absolute top-[-24.5px]" />
            <img src={ImgTransform2} className="absolute top-[108px] right-[43.15px]" />
            <img src={ImgTransform3} className="absolute bottom-[-24.5px] left-[127.5px]" />
        </div>
        <div className="w-[480px]">
            <h2 className="text-[56px] font-[700] ff-head text-[#fff] mb-[24px]">Transform your physique with our  fitness plan.</h2>
            <div className="text-[16px] font-[500] text-[#fff] flex items-center gap-[16px] mb-[16px]">
                <img src={ImgGalochka} />
                Increase Muscle and Strength
            </div>
            <div className="text-[16px] font-[500] text-[#fff] flex items-center gap-[16px] mb-[16px]">
                <img src={ImgGalochka} />
                Be Healthier than before
            </div>
            <div className="text-[16px] font-[500] text-[#fff] flex items-center gap-[16px]">
                <img src={ImgGalochka} />
                Increase Stamina
            </div>
            <div className="flex items-center gap-[16px] mt-[24px]">
                <Button className="btn__primary">Join now</Button>
                <Button variant="ghost" className="text-[#fff]">Contact us</Button>
            </div>
        </div>
    </section>

);