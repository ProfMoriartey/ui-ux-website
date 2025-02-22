import Image from "next/image";
import BlurArrow from "../../public/assets/blue-button.svg";
import Gradiant from "../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import Trustpilot from "../../public/assets/Trustpilot.svg";
import Cnn from "../../public/assets/CNN.svg";
import Clutch from "../../public/assets/Clutch.svg";

export default function Hero() {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-80 ">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
          Start monitoring your website like a pro
        </h1>
        <p className="text-center pt-6 text-[#36485C]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta animi
          magnam dolores, nostrum consequuntur explicabo! Tenetur tempore quae
          facilis veritatis nam! Commodi et quisquam, consequatur provident
          asperiores nam voluptates iure?
        </p>
        <div className="flex w-full pt-8">
          <button className="bg-[#4328EB] w-1/2 px-8 py-4 text-white rounded-[4px]">
            Try for free
          </button>
          <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-2">
            View Pricing{" "}
            <span>
              <Image src={BlurArrow} alt={""} />
            </span>
          </button>
        </div>
      </div>
      <div className="relative flex h-full w-full justify-center">
        <Image
          src={Gradiant}
          alt={"Greadient background"}
          className="min-h-[500px] w-full object-cover"
        />
        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image
            src={HeroImage}
            alt={"Hero Image"}
            className="-ml-4 h-[310px]"
          />
          <div className="flex w-full flex-col items-center">
            <p className="text-[#FFFFFF] text-center">
              Trusted by these compnies
            </p>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle">
              <Image src={Google} alt={""} />
              <Image src={Slack} alt={""} />
              <Image src={Trustpilot} alt={""} />
              <Image src={Cnn} alt={""} />
              <Image src={Clutch} alt={""} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
