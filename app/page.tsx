"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Control } from "react-hook-form";
import { SpectralSc } from "./font";
import Image from "next/image";
import clsx from "clsx";

import { InputFieldPhoneNo } from "./components/form/InputFieldPhoneNo";
import { TextAreaField } from "./components/form/TextAreaField";
import { contactUsSchema } from "./utils/validationSchema";
import { InputField } from "./components/form/InputField";
import { Button } from "./components/elements/Button";
import { ContactUsForm } from "./types";

export default function Home() {
  const STATS_DATA = [
    {
      stat: "34M+",
      description: "Food distribution programs",
    },
    {
      stat: "32",
      description: "African, European & South American Countries Reached",
    },
    {
      stat: "1200+",
      description: "Orphans educated and progressive children",
    },
  ];

  const HELPERS_DATA = [
    {
      name: "Emergency Medical Assistance",
      description:
        "Our Emergency Medical Assistance swiftly delivers crucial aid in crises, saving lives with expert care and compassion. Join us in our mission to provide urgent relief to those in need.",
      id: "1",
      img: "/help1.png",
    },
    {
      name: "Financial Support for Medical Bills",
      description:
        "Our financial aid programs offer crucial support, empowering individuals and communities to overcome barriers and build brighter futures. Join us in making a lasting difference through economic empowerment.",
      id: "2",
      img: "/help2.png",
    },
    {
      name: "Medical aid and councelling",
      description:
        "Our medical counselling services offer compassionate support and guidance, helping individuals navigate health challenges with confidence and resilience. Join us in promoting well-being and empowerment through expert guidance.",
      id: "3",
      img: "/help3.png",
    },
  ];
  const DONATE_DATA = [
    {
      name: "Clothing Support",
      id: "1",
      img: "/donate1.png",
    },
    {
      name: "Food Aid 7 Supply",
      id: "2",
      img: "/donate2.png",
    },
    {
      name: "Medical Aid initiative",
      id: "3",
      img: "/donate3.png",
    },
  ];

  const CORE_PACKAGE = [
    {
      name: "Basic Care Package",
      id: "1",
      img: "/donate3.png",
    },
    {
      name: "Educational Support",
      id: "2",
      img: "/help7.png",
    },
    {
      name: "Community Engagement & Empowerment",
      id: "3",
      img: "/help8.png",
    },
    {
      name: "Family Reintegration & Foster Care Package",
      id: "4",
      img: "/help3.png",
    },
    {
      name: "Health and Wellness Package",
      id: "5",
      img: "/help4.png",
    },
    {
      name: "Life Skills & Vocational Training",
      id: "6",
      img: "/help5.png",
    },
  ];

  const STORIES_IMG = [
    "/story1.png",
    "/story2.png",
    "/story3.png",
    "/story4.png",
    "/story5.png",
    "/story6.png",
    "/story7.png",
  ];

  const STORIES_TELL = [
    {
      name: "Marsha Conroy",
      id: "1",
      img: "/human1.png",
      testimony:
        "As a volunteer with [Orphanage Outreach Program], I've witnessed first-hand the transformative power of love and support. Every child deserves to feel valued and cherished, and this program makes that possible.",
    },
    {
      name: "Jorge Pfannerstill",
      id: "2",
      img: "/human2.png",
      testimony:
        "The team at [Orphanage Outreach Program] goes above and beyond to ensure the well-being of every child in their care. Their dedication and compassion are truly inspiring, and I feel honoured to be a part of their mission.",
    },
    {
      name: "Kayla King",
      id: "3",
      img: "/human3.png",
      testimony:
        "I've seen the impact of [Orphanage Outreach Program] firsthand in my community. Children who once felt alone and abandoned are now thriving, thanks to the support and guidance they receive. This program truly changes lives.",
    },
    {
      name: "Jonathon Borer",
      id: "4",
      img: "/human4.png",
      testimony:
        "Donating to [Orphanage Outreach Program] has been one of the best decisions I've made. Knowing that my contribution helps provide essentials and opportunities to children in need fills my heart with joy.",
    },
    {
      name: "Kyle Durgan",
      id: "5",
      img: "/human5.png",
      testimony:
        "Thanks to the educational support I received from [Orphanage Outreach Program], I was able to pursue my dreams of higher education. Now, I'm studying to become a nurse, and I owe it all to the opportunities provided by this incredible program.",
    },
    {
      name: "Minnie Harber.",
      id: "6",
      img: "/human6.png",
      testimony:
        "The impact of [Orphanage Outreach Program] extends far beyond the walls of their facility. Their dedication to advocacy and community engagement is inspiring, and I am proud to support their mission.",
    },
  ];

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUsForm>({
    resolver: yupResolver(contactUsSchema),
  });

  const onSubmit = (value: ContactUsForm) => {
    console.log(value);
  };

  return (
    <main className="">
      <section className="bg-black/40 h-screen relative">
        <Image
          fill
          src="/hero.png"
          alt="hero"
          className="absolute object-cover -z-[1]"
        />
        <div className="container py-14">
          <Image width={189} height={56.85} src="/logo.svg" alt="org-logo" />
          <div className="xl:w-[1100px] mx-auto text-center  py-20">
            <h1 className="text-[32px] sm:text-[48px] md:text-[64px] mt-24">
              How <span className="text-[#DE002D]">USAID&apos;s</span> Orphanage
              Outreach Program is Touching Lives with Love and Support.
            </h1>
            <p className="md:w-[640px] mx-auto text-[14px] sm:text-[20px] mt-10">
              With care and compassion, USAID&apos;s Orphanage Outreach program
              brings hope to vulnerable children, transforming lives with love
              and support, Join us in spreading joy.
            </p>
            <Button href="/" className="sm:w-[337px] mt-10 flex mx-auto">
              Donate Now
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-primary py-20 overflow-hidden">
        <div className="container">
          <h3 className="font-[600] text-[32px] md:text-[36px] text-white text-center sm:text-left sm:w-[494px]">
            Touching Stories Of Positive Change And Compassion
          </h3>
          <div className="grid sm:grid-cols-5 w-full gap-10 mt-10 relative">
            <Image
              width={767}
              height={820}
              src="/hug.png"
              alt="org-logo"
              className="col-span-3 w-full"
            />
            <div className="relative col-span-2">
              <Image
                width={498}
                height={507}
                src="/hug2.png"
                alt="org-logo"
                className="rounded-md w-full aspect-square"
              />
              <Image
                width={424}
                height={424}
                src="/heart.svg"
                alt="org-logo"
                className="absolute sm:top-20 -top-[162px] left-[200px] sm:left-[-200px] z-2"
              />
            </div>
          </div>
          <div className="grid gap-20 sm:grid-cols-2 md:grid-cols-3 py-20 justify-items-center">
            {STATS_DATA.map((content, index) => {
              return (
                <div
                  key={content.stat}
                  className={clsx(
                    "text-center max-w-[317px]",
                    index === 2 && "sm:col-span-2 md:col-span-1"
                  )}
                >
                  <p
                    className={`${SpectralSc.className} text-[70px] lg:text-[96px] leading-[70px] lg:leading-[90px]`}
                  >
                    {content.stat}
                  </p>
                  <p className="text-[20px] text-center w-full mx-auto">
                    {content.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container text-black">
          <div className="xl:w-[1100px] text-center mx-auto">
            <h3 className="text-center text-[32px] sm:text-[48px]">
              Helping Those In Needs
            </h3>
            <p className="sm:text-[24px]">
              With care and compassion, USAID's Orphanage Outreach program
              brings hope to vulnerable children, transforming lives with love
              and support. Join us in spreading joy.
            </p>
          </div>
          <div className="grid gap-10 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-20 justify-center">
            {HELPERS_DATA.map((content) => (
              <div key={content.id} className={clsx("w-full")}>
                <Image
                  width={420}
                  height={410}
                  src={content.img}
                  alt="need-img"
                />
                <h3 className="text-[24px] font-bold mt-4">{content.name}</h3>
                <p className="mt-1">{content.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-primary py-20">
        <div className="container">
          <h3 className="font-[600] text-[48px] md:text-[36px] text-white text-center sm:text-left md:w-[602px]">
            Donate To Add Values To Their Live’s.{" "}
          </h3>

          <div className="grid gap-10 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-20 justify-center">
            {DONATE_DATA.map((content, index) => (
              <div
                key={content.id}
                className={clsx(
                  " rounded-[20px] overflow-hidden pb-10 w-full relative"
                )}
              >
                <Image
                  width={420}
                  height={310}
                  src={content.img}
                  alt="need-img"
                  className="w-full"
                />
                <div
                  className={clsx(
                    "px-4 absolute bottom-0 w-full pb-8",
                    index === 1 ? "bg-[#00873C]" : "bg-[#0F1687]"
                  )}
                >
                  <h3 className="text-[24px] font-bold mt-4">{content.name}</h3>
                  <Button variant="outline" className={clsx("mt-4 w-[183px]")}>
                    Donate
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container text-black">
          <h3 className="font-[600] text-[34px] sm:text-[48px] text-center mx-auto md:text-[36px]">
            Our Core Packages{" "}
          </h3>
          <p className="sm:text-[24px] mt-2 text-center mx-auto xl:w-[1100px]">
            With care and compassion, USAID's Orphanage Outreach program brings
            hope to vulnerable children, transforming lives with love and
            support. Join us in spreading joy.
          </p>

          <div className="grid gap-10 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-20 justify-center">
            {CORE_PACKAGE.map((content) => (
              <div
                key={content.id}
                className={clsx(
                  " rounded-[20px] overflow-hidden w-full relative"
                )}
              >
                <Image
                  width={420}
                  height={310}
                  src={content.img}
                  alt="need-img"
                  className="w-full h-full"
                />
                <div className="px-4 bg-[#002F6CD6] bg-opacity-85 h-[118px] absolute w-full bottom-0 text-white">
                  <p className="text-[24px] mt-4">{content.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container text-black">
          <h3 className="font-[600] text-[34px] sm:text-[48px] text-center mx-auto md:text-[36px]">
            Our Stories Through Their Eyes{" "}
          </h3>
          <p className="sm:text-[24px] md:text-[20px] mt-2 text-center mx-auto xl:w-[1100px]">
            With care and compassion, USAID's Orphanage Outreach program brings
            hope to vulnerable children, transforming lives with love and
            support. Join us in spreading joy.
          </p>
        </div>
        <div className="flex mt-20 gap-0 ">
          {STORIES_IMG.slice(0, 4).map((pic, index) => {
            return (
              <div key={pic}>
                <img src={pic} alt="need-img" className={clsx("w-full")} />
              </div>
            );
          })}
        </div>
        <div className="flex mt-20 px-10">
          {STORIES_IMG.slice(4, 8).map((pic) => {
            return (
              <div key={pic}>
                <img
                  src={pic}
                  alt="need-img"
                  className="w-full max-h-[550px] aspect-square"
                />
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-primary py-20">
        <div className="container">
          <h3 className="font-[600] text-[32px] md:text-[48px] text-white text-center">
            Our Stories Tell Them Selves
          </h3>
          <div className="grid gap-10 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-20 justify-center">
            {STORIES_TELL.map((content) => (
              <div
                key={content.id}
                className={clsx(
                  " py-6 px-4 rounded-[10px] border border-[#DADADA] overflow-hidden w-full relative"
                )}
              >
                <Image
                  width={54}
                  height={54}
                  src={content.img}
                  alt="need-img"
                  className=""
                />
                <div className=" w-full bottom-0 text-white">
                  <h3 className="text-[20px] font-medium">{content.name}</h3>
                  <p className=" mt-4 text-[#DADADA] font-[300]">
                    {content.testimony}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white container py-20">
        <div className="relative h-[800px]">
          <Image src="/map.png" alt="map-pic" fill className="object-cover" />
        </div>
      </section>
      <section className="bg-primary py-20">
        <div className="container">
          <h3 className="font-[600] text-[32px] md:text-[48px] text-white text-center">
            Get In Touch
          </h3>
          <p className="sm:text-[24px] md:text-[20px] text-[#EAEAEA] mt-2 text-center mx-auto xl:w-[783px]">
            Thank you for your interest in our orphanage outreach program.
            Whether you're looking to volunteer, donate, or simply learn more
            about how you can support our cause, we'd love to hear from you.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-black pt-6 text-[16px] sm:text-[20px] col-span-3 p-8 mt-10 bg-white"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 sm:gap-x-8 text-[18px]">
              <div className="mt-8">
                <p className="">Name</p>
                <InputField
                  registration={{ ...register("name") }}
                  hasError={errors.name}
                  className="mt-2 sm:mt-4"
                  isRequired
                />
              </div>
              <div className="mt-8">
                <p className="">Email Address</p>
                <InputField
                  registration={{ ...register("email") }}
                  hasError={errors.email}
                  className="mt-2 sm:mt-4"
                  isRequired
                />
              </div>
              <div className="mt-8">
                <p className="">Address</p>
                <InputField
                  registration={{ ...register("address") }}
                  hasError={errors.address}
                  className="mt-2 sm:mt-4"
                  isRequired
                />
              </div>
              <div className="mt-8 sm:col-span-3">
                <p className="">Message</p>
                <TextAreaField
                  id="message"
                  registration={{ ...register("message") }}
                  hasError={errors.message}
                  className="mt-2 sm:mt-4 resize-none rounded-md"
                  isRequired
                  placeholder="Write your message here..."
                  limit={1500}
                />
              </div>
            </div>
            <Button type="submit" className="mt-4 sm:w-[415px] mx-auto">
              Submit
            </Button>
          </form>
        </div>
      </section>
      <footer className="bg-white pt-28 pb-10">
        <div className="container flex flex-col md:flex-row items-start gap-24">
          <div className="text-sm text-black w-[285px]">
            <h3 className="opacity-40">About US</h3>
            <p className="mt-4">
              Arbitration We're passionate about nurturing orphaned children,
              providing them with love and support to flourish. Join us in
              making a difference today.
            </p>
          </div>
          <div className="text-sm text-black">
            <Image width={107} height={32.18} src="/logo.svg" alt="org-logo" />
            <p className="mt-4">+1 999 888-76-54</p>
            <p className="">usaidorphangeoutreach@gov.us</p>
          </div>
        </div>
        <p className="text-center mt-40 text-black/40 text-xs">
          © 2024 — USAID Orphanage Outreach
        </p>
      </footer>
    </main>
  );
}
