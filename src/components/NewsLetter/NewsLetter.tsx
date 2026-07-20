

interface NewsLetterProps{
  news:string;
  title:string;
  description:string;
  btn:string;
  placeholder:string;
  nots:string
}
const NewsLetter = ({news,title,  description,btn,nots,  placeholder}:NewsLetterProps) => {
  return (
    <section className=" px-4  dark:bg-gray-900 transition-colors">
      <div className="max-w-3xl mx-auto md:text-center flex flex-col md:items-center  ">
        
        <span className="text-[#7F56D9] font-semibold text-base  uppercase tracking-wide sm:text-center ">
       {news}
        </span>
 
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-black dark:text-white  md:text-center">
     {title}
        </h2>
        
        <p className="text-[#667085] dark:text-[#C0C5D0] mb-8 max-w-xl sm:text-start md:text-center">
        {description}
        </p>

        
        <form 
          className="flex flex-col sm:flex-row gap-3 w-full max-w-md justify-center" 
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder={  placeholder}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#D0D5DD] bg-white dark:bg-white text-gray-900 dark:text-[#667085] focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#7F56D9] hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
          >{btn}
          </button>
        </form>

       
        <p className="mt-2 text-sm text-gray-500 dark:text-[#C0C5D0] text-start">
         {nots} 
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;
