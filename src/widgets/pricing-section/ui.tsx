
import ImgGalochkaWhite from '../../shared/images/galochka_white.svg';
import { Button } from '../../shared/ui/shadcn/ui/button';

export const PricingSection = () => (
    <section className="container py-[80px]">
        <div className="text-center text-[#097FD9] text-[18px] font-[600] mb-[16px]">Pricing</div>
        <div className="ff-head text-center text-[#fff] text-[48px] font-[700] mb-[32px]">Our List Packages</div>
        <div className="bg-[#fff] p-[12px_8px] rounded-[14px] w-[310px] m-auto flex justify-center mb-[40px]">
            <div className="bg-[#090707] text-[#EEEEEE] text-[16px] p-[11px_24px] rounded-[12px]">Billed Montly</div>
            <div className="bg-[#fff] text-[#09070760] text-[16px] p-[11px_24px] rounded-[12px]">Billed Yearly</div>
        </div>
        <div className="grid grid-cols-4 items-center gap-[24px]">
            <div className="bg-[#0D0D0D] p-[24px_29px]  rounded-[16px] max-h-[552px]">
                <div className="ff-head text-[20px] font-[600] text-[#fff] text-[#097FD9] mb-[24px]">Basic Package</div>
                <div className="ff-head text-[#fff] text-[56px] font-[600]">$25</div>
                <div className="text-[#878787] text-[16px] font-[400] mb-[24px]">per month,bill annualy</div>
                <div className="flex flex-col gap-[16px]">
                    {
                        ["Unlimited Gym Access", "2x Fitness Consultant", "Nutrition Tracking", "1x Free Suplement", "3 Days per week", "Personal Trainer"].map((key, index) => (
                            <div key={index} className="text-[16px] font-[500] text-[#fff] flex items-center gap-[16px]">
                                <img src={ImgGalochkaWhite} />
                                {key}
                            </div>
                        ))
                    }
                </div>
                <Button className="btn__primary !font-['Poppins'] !font-[500] text-[16px] py-[10px] h-[56px] w-full mt-[38px]">Register Now</Button>
            </div>

            <div className="relative bg-[#097FD9] p-[50px_29px] overflow-hidden rounded-[16px]">
                <div className="bg-[#fff] p-[10px] ff-head text-[18px] font-[600] absolute w-[180px] text-center rotate-45 right-[-50px] top-[21px]">Best Offer</div>
                <div className="ff-head text-[20px] font-[600] text-[#fff] mb-[24px]">Mid Package</div>
                <div className="ff-head text-[#fff] text-[56px] font-[600]">$55</div>
                <div className="text-[#fff] text-[16px] font-[400] mb-[24px]">per month,bill annualy</div>
                <div className="flex flex-col gap-[16px]">
                    {
                        ["Unlimited Gym Access", "4x Fitness Consultant", "Nutrition Tracking", "3x Free Suplement", "5 Days per week", "Personal Trainer"].map((key, index) => (
                            <div key={index} className="text-[16px] font-[500] text-[#fff] flex items-center gap-[16px]">
                                <img src={ImgGalochkaWhite} />
                                {key}
                            </div>
                        ))
                    }
                </div>
                <Button className="btn__primary !bg-[#090707] !text-[#fff] !font-['Poppins'] !font-[500] text-[16px] py-[10px] h-[56px] w-full mt-[64px]">Register Now</Button>
            </div>

            <div className="bg-[#0D0D0D] p-[24px_29px]  rounded-[16px] max-h-[552px]">
                <div className="ff-head text-[20px] font-[600] text-[#fff] text-[#097FD9] mb-[24px]">Pro Package</div>
                <div className="ff-head text-[#fff] text-[56px] font-[600]">$75</div>
                <div className="text-[#878787] text-[16px] font-[400] mb-[24px]">per month,bill annualy</div>
                <div className="flex flex-col gap-[16px]">
                    {
                        ["Unlimited Gym Access", "7x Fitness Consultant", "Nutrition Tracking", "5x Free Suplement", "Gym Card", "Personal Trainer"].map((key, index) => (
                            <div key={index} className="text-[16px] font-[500] text-[#fff] flex items-center gap-[16px]">
                                <img src={ImgGalochkaWhite} />
                                {key}
                            </div>
                        ))
                    }
                </div>
                <Button className="btn__primary !font-['Poppins'] !font-[500] text-[16px] py-[10px] h-[56px] w-full mt-[38px]">Register Now</Button>
            </div>

            <div className="bg-[#0D0D0D] p-[24px_29px]  rounded-[16px] max-h-[552px]">
                <div className="ff-head text-[20px] font-[600] text-[#fff] text-[#097FD9] mb-[24px]">Athlete Package</div>
                <div className="ff-head text-[#fff] text-[56px] font-[600]">$105</div>
                <div className="text-[#878787] text-[16px] font-[400] mb-[24px]">per month,bill annualy</div>
                <div className="flex flex-col gap-[16px]">
                    {
                        ["Unlimited Gym Access", "Free Clothes", "All Training Program", "Free Fitness Consultant", "Free Suplement", "Gym Card"].map((key, index) => (
                            <div key={index} className="text-[16px] font-[500] text-[#fff] flex items-center gap-[16px]">
                                <img src={ImgGalochkaWhite} />
                                {key}
                            </div>
                        ))
                    }
                </div>
                <Button className="btn__primary !font-['Poppins'] !font-[500] text-[16px] py-[10px] h-[56px] w-full mt-[38px]">Register Now</Button>
            </div>
        </div>
    </section>

);