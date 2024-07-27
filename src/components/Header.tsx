import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="bg-custom_blue text-white">
      <div className="p-2">
        <p className="text-center sm:text-left m-2 sm:m-3 text-xl font-semibold">
          Wellness Retreats
        </p>
      </div>
    </header>
  );
};

export default Header;
