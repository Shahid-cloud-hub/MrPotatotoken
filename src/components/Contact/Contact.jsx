import React from "react";
import axios from "axios";
import { ContactContainer } from "./Contact.style";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Owner Images //
import OwnerImg_1 from "../../assets/images/contact/owner_1.webp";
import OwnerImg_2 from "../../assets/images/contact/owner_2.webp";

// Social Icons //
import IconImg_1 from "../../assets/images/contact/contact_1.webp";
import IconImg_3 from "../../assets/images/contact/contact_3.webp";
import { contactFormApi } from "../../api/API";
import SEO from "../SEO/SEO";

const Contact = () => {
  const form = useForm({
    defaultValues: {
      ric: {
        mail: "shahid@webevis.com",
        msg: "",
      },
      tho: {
        mail: "thomas@mrpotatonft.com",
        msg: "",
      },
    },
  });

  const { register, handleSubmit, watch, reset, isDirty } = form;

  let userMessage = {
    mail: "",
    message: "",
  };

  const richardMsg = watch("ric.msg");
  const thomasMsg = watch("tho.msg");

  const onSubmit = async ({ ric, tho }) => {
    if (!richardMsg == "") {
      userMessage = {
        mail: ric.mail,
        message: ric.msg,
      };
    } else if (!thomasMsg == "") {
      userMessage = { mail: tho.mail, message: tho.msg };
    }

    try {
      const res = await axios.post(contactFormApi, {
        userMessage,
      });
      if (res.status === 200) {
        reset();
        toast.success("Messages Sent Successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SEO
        title="Contact | Mr Potato NFT Marketplace | Buy, Sell & Trade NFTs"
        description="Get in touch with us at Mr Potato NFT Marketplace. Learn about our unique NFTs, services, and more. Contact us today if you have any queries or to get started with NFTs."
      />
      <ContactContainer onSubmit={handleSubmit(onSubmit)} onValidate>
        <ToastContainer />
        <div className="background">
          {thomasMsg == "" && (
            <div className="contact--wrapper">
              <div className="Owner--info">
                <div>
                  <img src={OwnerImg_1} alt="CEO" />
                </div>
                <span>CEO</span>
                <div className="social--icons">
                  <img src={IconImg_1} alt="Telegram" />
                  <img src={IconImg_3} alt="Mail" />
                </div>
              </div>
              <textarea
                type="text"
                id="ric"
                placeholder="Type Message"
                {...register("ric.msg", { maxLength: 500 })}
              />
              <div className="check-box">
                <button
                  className={!richardMsg == "" ? "enabled-btn" : "disabled-btn"}
                  disabled={!richardMsg == "" ? false : true}
                  type="submit"
                >
                  {!richardMsg == "" ? "Send Message" : "Type Message"}
                </button>
              </div>
            </div>
          )}
          {richardMsg == "" && (
            <div className="contact--wrapper">
              <div className="Owner--info">
                <div>
                  <img src={OwnerImg_2} alt="CEO" />
                </div>
                <span>CFO</span>
                <div className="social--icons">
                  <img src={IconImg_1} alt="Telegram" />
                  <img src={IconImg_3} alt="Mail" />
                </div>
              </div>
              <textarea
                text="text"
                id="tho"
                placeholder="Type Message"
                {...register("tho.msg", { maxLength: 500 })}
              />
              <div className="check-box">
                <button
                  className={!thomasMsg == "" ? "enabled-btn" : "disabled-btn"}
                  disabled={!thomasMsg == "" ? false : true}
                  type="submit"
                >
                  {!thomasMsg == "" ? "Send Message" : "Type Message"}
                </button>
              </div>
            </div>
          )}
        </div>
      </ContactContainer>
    </>
  );
};

export default Contact;
