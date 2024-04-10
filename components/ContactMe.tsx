"use client";
import { motion } from "framer-motion";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useSectionInView } from "@/lib/hooks";
import { useForm, ValidationError } from "@formspree/react";

type Props = {};

function ContactMe({}: Props) {
  const { ref } = useSectionInView("Contact");
  const [state, handleSubmit] = useForm(`${process.env.FORMSPREE}`);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen py-24 flex text-center mx-auto flex-col overflow-hidden max-w-7xl pl-[70px] pr-[20px] sm:pr-[40px]"
    >
      <h3 className="uppercase tracking-[10px] text-xl md:text-2xl md:tracking-[20px] pb-10">
        Contact me
      </h3>
      <div className="flex flex-col items-center justify-center grow bg-light rounded-lg">
        <div className="text-sm pb-8">
          Let&apos;s connect and make things happen!
        </div>
        <form
          onSubmit={handleSubmit}
          className="md:text-l !leading-[3rem] w-4/5 mx-auto"
        >
          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="md:w-5/12 md:text-right">Hi Elke, my name is</div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="my name"
              className="md:w-2/5 border border-brownish rounded h-[38px] px-2 pt-1 text-sm mt-1"
            />
            <ValidationError
              prefix="Message"
              field="name"
              errors={state.errors}
            />
          </div>
          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="md:w-5/12 md:text-right">and email</div>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="my email"
              className="md:w-2/5 border border-brownish rounded h-[38px] px-2 pt-1 text-sm mt-1"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="md:w-5/12 md:text-right">
              I would like to talk to you about
            </div>
            <textarea
              id="message"
              name="message"
              placeholder="my message"
              className="md:w-2/5 border border-brownish rounded h-[120px] px-2 pt-3 text-sm mt-1"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="flex flex-col md:flex-row md:gap-4 pt-3 md:pt-1">
            <div className="md:w-5/12"></div>
            <div className="md:w-2/5 md:text-right">
              <button
                className="hero-button items-center bg-white"
                type="submit"
                disabled={state.submitting}
              >
                Send
                <ArrowRightIcon className="w-5 h-5 stroke-1 inline ml-3" />
              </button>
            </div>
          </div>
        </form>
        {state.succeeded && <p>Submitted successfully!</p>}
      </div>
    </motion.div>
  );
}

export default ContactMe;
