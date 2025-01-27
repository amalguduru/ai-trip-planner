import { Button } from "../ui/button";
function Header() {
  return (
    <div className="p-3 flex justify-between items-center shadow-md px-5">
      <img src="/logo.svg" />
      <div>
        <Button>Sign in</Button>
      </div>
    </div>
  );
}

export default Header;
