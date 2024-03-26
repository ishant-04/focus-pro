interface inputProps{
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

const Input = ({name, type, placeholder, value}: inputProps ) => {
  return(
    <>
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      className='w-full p-2 border border-gray-300 rounded'
    />
    </>
  )
};

export default Input;
