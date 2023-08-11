import { Button } from '../../shared/ui/shadcn/ui/button';

export const SubscribeSection = () => (
    <section className="container py-[96px]">
        <div className="bg-[#097FD9] rounded-[24px] py-[33px]">
            <div className="w-[640px] m-auto">
                <div className="ff-head text-[32px] text-[#fff] font-[700] text-center mb-[10px]">Subscribe our fitness tips</div>
                <div className="text-[16px] text-[#fff] font-[200] text-center mb-[24px]">Clearly communicate the benefits of subscribing, such as exclusive content and breaking news.</div>
                <div className="relative">
                    <input type="text" className="w-full h-[76px] rounded-[14px] text-[18px] pl-[24px] pr-[190px]" placeholder="Enter your email address" />
                    <Button className="btn__primary absolute right-[8px] top-[9px] !bg-[#090707] !text-[#fff] !font-['Poppins'] !font-[500] text-[16px] py-[10px] h-[60px] w-[180px]">Register Now</Button>
                </div>
            </div>
        </div>
    </section>
);