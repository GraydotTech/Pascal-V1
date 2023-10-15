
const Input = ({...props} : React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
      <input
        className="flex w-full h-[3.5rem] text-dark rounded-md border border-gray1 focus:border-2 focus:border-brand bg-[#EFEFEF] py-2 px-3 text-sm placeholder:text-[#9A9A9A] focus:outline-none disabled:cursor-not-allowed"
        {...props}
      />
    );
}
 
export default Input;