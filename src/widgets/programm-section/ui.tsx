import { ProgrammCard } from "../../entities/programm-card";
import { IconArrowLeft, IconArrowRight } from "../../shared/ui/";
import ImgCardio from '../../shared/images/cardio.svg';
import ImgFatLose from '../../shared/images/fat_lose.svg';
import ImgMuscleGain from '../../shared/images/muscle_gain.svg';
import ImgNutritions from '../../shared/images/nutritions.svg';

export const ProgrammSection = () => (
    <section>
        <div className="flex items-center justify-between pt-[80px] pb-[48px] relative container">
            <span className="absolute left-[-130px] top-[-20px] ff-head text-[142px] font-[900] text-[#fff] opacity-[.11]">Program</span>
            <h2 className="ff-head font-[700] text-[56px] text-[#fff]">Explore Our Program</h2>
            <div className="flex items-center gap-[10px]">
                <div className="w-[52px] h-[52px] rounded-full border border-[#fff] flex items-center justify-center">
                    <IconArrowLeft />
                </div>
                <div className="w-[52px] h-[52px] rounded-full border border-[#097FD9] flex items-center justify-center bg-[#097FD9]">
                    <IconArrowRight />
                </div>
            </div>
        </div>
        <div className="flex gap-[26px] pt-[40px] pb-[64px] overflow-auto ">
            <ProgrammCard
                icon={<img src={ImgCardio} />}
                name="Cardio Strength"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra."
            />
            <ProgrammCard
                icon={<img src={ImgCardio} />}
                name="Cardio Strength"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra."
                isActive
            />
            <ProgrammCard
                icon={<img src={ImgFatLose} />}
                name="Fat Lose"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra."
            />
            <ProgrammCard
                icon={<img src={ImgMuscleGain} />}
                name="Muscle Gain"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra."
            />
            <ProgrammCard
                icon={<img src={ImgNutritions} />}
                name="Nutritions"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra."
            />
            <ProgrammCard
                icon={<img src={ImgNutritions} />}
                name="Nutritions"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra."
            />
            <ProgrammCard
                icon={<img src={ImgNutritions} />}
                name="Nutritions"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra."
            />

        </div>

    </section>

);