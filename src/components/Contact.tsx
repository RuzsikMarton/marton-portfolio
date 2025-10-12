import { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [result, setResult] = useState("");
  const { t } = useTranslation();

  const { heading, description, name, content, message, send, sending, success } = t("contact", { returnObjects: true }) as {
    heading: string;
    description: string;
    name: string;
    content: string;
    message: string;
    send: string;
    sending: string;
    success: string;
  };

  const onSubmit = async (e : any) => {
    e.preventDefault();
    setResult(sending);
    const formData = new FormData(e.target);
    formData.append("access_key", "2a681d75-6180-4fe8-8f89-6bea1dd3c47c");
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.success) {
      setResult(success);
      e.target.reset();
    } else {
      console.error("Error:", data);
      setResult(data.message);
    }
    console.log(result);
  }
  return (
    <div id="contact" className="basecontainer w-full h-full max-w-3xl mx-auto rounded-none md:rounded-2xl p-4 md:p-8">
      <div className="">
      <h1 className="relative inline-block text-xl font-bold text-white/80">{heading} <span className="absolute bottom-0 right-0 w-full h-0.5 bg-accent"></span></h1>
      </div>
      <span className="text-sm text-white/60">
        {description}
      </span>
      <form className="my-8" onSubmit={onSubmit}>
        <input
          type="hidden"
          name="access_key"
          value="2a681d75-6180-4fe8-8f89-6bea1dd3c47c"
        />
        <div className="flex flex-col md:flex-row mb-4 space-y-2 md:space-y-0 md:space-x-4">
          <div className="flex flex-col w-full space-y-2">
            <label
              className="text-sm font-medium leading-0 peer-disabled:opacity-70 peer-disabled:cursor-not-allowed"
              htmlFor="name"
            >
              {name}
            </label>
            <div className="p-1 rounded-lg">
              <input
                className="peer flex w-full h-10 bg-zinc-800 rounded text-white px-3 py-2 text-sm placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600  disabled:cursor-not-allowed disabled:opacity-50"
                placeholder={name}
                type="text"
                name="name"
                id="name"
                required
              />
            </div>
          </div>
          <div className="flex flex-col w-full space-y-2">
            <label
              className="block text-sm font-medium leading-0 peer-disabled:opacity-70 peer-disabled:cursor-not-allowed"
              htmlFor="email"
            >
              Email
            </label>
            <div className="p-1 rounded-lg">
              <input
                className="peer flex w-full h-10 bg-zinc-800 rounded text-white px-3 py-2 text-sm placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600  disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Email"
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-8 space-y-2">
          <label
            className="block text-sm font-medium leading-0 peer-disabled:opacity-70 peer-disabled:cursor-not-allowed"
            htmlFor="message"
          >
            {content}
          </label>
          <div className="p-1 rounded-lg">
            <textarea
              className="peer flex w-full border-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600 bg-zinc-800 rounded text-white px-3 py-2 text-sm placeholder:text-white/50 resize-none disabled:cursor-not-allowed disabled:opacity-50"
              placeholder={message}
              name="message"
              id="message"
              rows={4}
              required
              minLength={10}
            ></textarea>
          </div>
        </div>
        <button className="w-full border-none block bg-zinc-800 text-white rounded-md h-10 font-medium cursor-pointer active:bg-zinc-900">{send}</button>
        {result && (
          <div className="mt-4 p-3 rounded-md bg-zinc-800 text-white text-sm">
            {result}
          </div>
        )}
      </form>
      <span className="bg-neutral-900 text-sm w-full block rounded-md p-2">Email: r.marton5@gmail.com</span>
    </div>
  );
};

export default Contact;
