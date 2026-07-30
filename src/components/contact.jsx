import { IoCompassSharp } from "react-icons/io5";
const Contact = () => {

  

  return (
    <section id="contact" className="py-10 ">
        <div className="font-mono ">
          <span className="lg:[word-spacing:-1.5rem] text-4xl lg:text-7xl font-bold italic ">U WANNA BUILD</span>
          <br />
          <span className="lg:[word-spacing:-1.5rem] text-4xl lg:text-7xl font-bold ">GREAT WEB SITE?</span>
          <br />
          <span className="mt-2 text-5xl lg:text-9xl font-black lg:[word-spacing:-2.0rem] ">BETTER TALK ME</span>

           
        
        </div> 
        <div className="lg:w-[430px] w-[330px] font-mono relative top-10 flex gap-2 items-center cursor-pointer rounded-full py-4 px-10 border-indigo-600 border-2 lg:text-2xl hover:bg-indigo-600 hover:border-black transition-colors duration-700 ">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aymansiraj089@gmail.com" target="_blank" rel="noopener noreferrer" className="">aymansiraj089@gmail.com</a>
            <IoCompassSharp  size={50} className=""/>
        </div>
    </section>
  );
};

export default Contact;