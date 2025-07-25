import { useState } from "react";
import { LateralOverlay } from "../Modal/LateralOverlay";

export function CallUser() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <div className="flex flex-row items-center gap-6">
      <svg
        className="group cursor-pointer h-6 w-6 hidden"
        viewBox="0 0 25 28"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="stroke-white fill-white"
          d="M5.49996 10.5v3.75a1.249966 1.249966 0 0 1-.1325.56L3.77496 18H22.23l-1.595-3.19c-.088-.1736-.1343-.3654-.135-.56V10.5c0-1.98912-.7902-3.89678-2.1967-5.3033C16.8967 3.79018 14.9891 3 13 3c-1.9892 0-3.89682.79018-5.30334 2.1967-1.40653 1.40652-2.1967 3.31418-2.1967 5.3033Zm2.5 10h-6.25c-.21316 0-.42278-.0545-.60893-.1584a1.249274 1.249274 0 0 1-.454643-.4349c-.111983-.1814-.175722-.3884-.185161-.6013a1.250134 1.250134 0 0 1 .131232-.6154l2.367502-4.735V10.5c0-2.65216 1.05357-5.1957 2.92893-7.07107C7.80425 1.55357 10.3478.5 13 .5c2.6521 0 5.1957 1.05357 7.071 2.92893C21.9464 5.3043 23 7.84784 23 10.5v3.455l2.3675 4.735c.0955.1906.1406.4024.1312.6154-.0094.2129-.0732.4199-.1852.6013-.112.1814-.2685.3311-.4546.4349-.1862.1039-.3958.1584-.6089.1584H18c0 1.3261-.5268 2.5979-1.4645 3.5355C15.5978 24.9732 14.326 25.5 13 25.5c-1.3261 0-2.5979-.5268-3.53558-1.4645-.93768-.9376-1.46446-2.2094-1.46446-3.5355Zm7.50004 0h-5c0 .663.2634 1.2989.7322 1.7678C11.701 22.7366 12.3369 23 13 23c.663 0 1.2989-.2634 1.7677-.7322.4689-.4689.7323-1.1048.7323-1.7678Z"
        />
      </svg>

      <svg
        onClick={toggleMenu}
        className="cursor-pointer  p-1 h-10 w-10 bg-[var(--light)] rounded-full transition-colors duration-200"
        id="user-img"
        viewBox="0 0 34 34"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.8204.333374c2.1898 0 4.2898.877976 5.8382 2.440776 1.5484 1.5628 2.4183 3.68242 2.4183 5.89256 0 2.21009-.8699 4.32979-2.4183 5.89259C21.1102 16.1221 19.0102 17 16.8204 17c-2.1898 0-4.2899-.8779-5.8383-2.4407-1.54837-1.5628-2.41825-3.6825-2.41825-5.89259 0-2.21014.86988-4.32976 2.41825-5.89256 1.5484-1.5628 3.6485-2.440776 5.8383-2.440776Zm0 20.833326c9.1235 0 16.5131 3.7292 16.5131 8.3333v4.1667H.307312V29.5c0-4.6041 7.389598-8.3333 16.513088-8.3333Z"
          fill="#000"
        />
      </svg>
      {open && <LateralOverlay onClose={closeMenu} />}
    </div>
  );
}
