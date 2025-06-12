import {CallUser} from "./CallUser";
import {SearchBar} from "./SearchBar";
import { Carrousel } from "./Carrousel";

export const Header = () => {
  return (

    <header className="h-[130px] sticky top-0 flex flex-col ">
      <div className="h-[70px] flex flex-row justify-between bg-[var(--dark)] items-center gap-4 px-[10%]">
        <div className="flex flex-row items-center">  
          <a href="/">
            <img src="./src/assets/img/logo-dark.png" alt="" className="h-[60px]" />
          </a>
          <div className="hidden md:block">
              <SearchBar />
          </div>
        </div>
        <CallUser />
      </div>

      <Carrousel  />
    </header>


  );
};

export default Header;
