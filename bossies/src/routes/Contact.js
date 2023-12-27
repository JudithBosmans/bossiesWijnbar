import React from "react";
import { FiFacebook, FiMail, FiInstagram, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="max-w-10xl mx-auto pt-40">
      <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-5xl mt-5 tracking-tight text-green">
            Contact
          </h2>
          <p className="text-neutral-500 text-xl mt-3 flex justify-center items-center">
            Zit je met een vraag of wil je gewoon eens onze socials bekijken?
            Twijfel niet!
          </p>
        </div>
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mt-20 text-green">
          <Card
            title="@Bossies_Wijbar"
            subtitle="Bekijk onze instagram pagina!"
            href="https://www.instagram.com/bossies_wijnbar/"
            Icon={FiInstagram}
          />
          <Card
            title="@Kjell Bosmans"
            subtitle="Bekijk onze facebook pagina!"
            href="https://www.facebook.com/kjell.bosmans?locale=nl_NL"
            Icon={FiFacebook}
          />
          <Card
            title="+0494 36 42 61"
            subtitle="Stuur een berichtje of bel!"
            href="tel:0494364261"
            Icon={FiPhone}
          />
          <Card
            title="KjellBosmans@gmail.com"
            subtitle="Stuur gerust een mail!"
            href="mailto:KjellBosmans@gmail.com"
            Icon={FiMail}
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default Contact;
