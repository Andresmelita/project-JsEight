import { AiOutlineSearch } from 'react-icons/ai';
// import { useNavigate } from 'react-router-dom'

  // const navigate = useNavigate()

    const submit = (e: any) => {
        e.preventDefault()
        console.log(`${e.target.search.value}`)
        //navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
    }

const InputSearch = () => {
  return (
    <div className="wrapper w-[100%] max-w-[465px] m-1 h400-normal-13px h-[46px]">
      <form className="searchBar w-[100%] flex flex-row items-center rounded-[23px] bg-white h-[100%]" onSubmit={submit}>
        <input
          id="searchInput"
          type="text"
          name="searchInput"
          value={``}
          placeholder="¿Qué quieres ver en tu ciudad?"
          className="w-[100%] bg-transparent ml-[24px]"
        />
        <button
          id="searchSubmit"
          name="searchQuerySubmit"
          className="mr-[20px]"
        >
          <AiOutlineSearch className="lens text-primary-grayDark text-2xl" />
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
