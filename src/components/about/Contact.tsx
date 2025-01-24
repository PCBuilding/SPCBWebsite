"use client";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";
import { LuLoader2 } from "react-icons/lu";

export default function Contact() {
  const [emailState, setEmailState] = useState<
    "inactive" | "loading" | "error" | "sent"
  >("inactive");
  const form = useRef<HTMLFormElement | null>(null);
  const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;
  const service = process.env.NEXT_PUBLIC_EMAIL_SERVICE;
  const template = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE;

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    setEmailState("loading");
    e.preventDefault();
    if (!form.current || !service || !template) return;

    emailjs
      .sendForm(service, template, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setEmailState("sent");
        },
        () => {
          setEmailState("error");
        },
      );
  };
  return (
    <div className="px-6 pb-10 pt-16 sm:pt-24 sm:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="text-white">
          <h2 className="font-Michroma text-2xl sm:text-4xl">
            Connect With Us
          </h2>
          <p className="text-balance pt-6 leading-relaxed sm:text-lg">
            The Society of PC Building's main form of communication is through
            our{" "}
            <a
              href="https://discord.com/invite/jfq9phWqTF"
              className="underline"
              target="_blank"
            >
              discord
            </a>
            . If you'd prefer, feel free to reach out through our contact
            form—we'd be happy to hear from you. For more ways to connect, check
            out the links below!
          </p>
          <form
            action=""
            className="mt-6 flex flex-col gap-5"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="">
              <label htmlFor="email" className="text-sm sm:text-lg">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="user_email"
                required
                className="mt-1 w-full rounded-md border border-gray-700 bg-gray-800 px-2 py-2 outline-none"
                placeholder="email@email.com"
              />
            </div>
            <div className="">
              <label htmlFor="username" className="text-sm sm:text-lg">
                Name
              </label>
              <input
                type="text"
                id="username"
                name="user_name"
                required
                className="mt-1 w-full rounded-md border border-gray-700 bg-gray-800 px-2 py-2 outline-none"
                placeholder="John Doe"
              />
            </div>
            <div className="">
              <label htmlFor="message" className="text-sm sm:text-lg">
                Message
              </label>
              <textarea
                name="message"
                required
                id="message"
                className="resize-x-none mt-1 w-full rounded-md border border-gray-700 bg-gray-800 px-2 py-2 outline-none"
                rows={3}
                placeholder="Your message here"
              ></textarea>
            </div>
            <button
              className="flex justify-center rounded-md bg-light-blue py-2 text-center text-sm text-black"
              type="submit"
            >
              {emailState === "loading" && (
                <span className="animate-spin text-xl">
                  <LuLoader2 />
                </span>
              )}
              {emailState === "inactive" && "Submit"}
              {emailState === "error" && "Error. Please contact us on Discord"}
              {emailState === "sent" &&
                "Success! Feel free to send another message"}
            </button>
          </form>
        </div>
        <figure className="flex justify-center sm:justify-end">
          <a href="https://linktr.ee/pcbuildinguf" target="_blank">
            <Image
              src={"/about-images/mockup.png"}
              width={300}
              height={614}
              alt=""
            />
          </a>
        </figure>
      </div>
    </div>
  );
}
