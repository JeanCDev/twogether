import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Package2Icon from "./Package2Icon";
import { Button } from "@/components/ui/button";
import MenuIcon from "./MenuIcon";
import SearchIcon from "./SearchIcon";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import UsersCircleIcon from "./UserCircleIcon";
import Database from "@/firebase/Database";
import { useAuth } from "@/Contexts/Auth";

const Header = props => {
  const {user} = useAuth();

  const saveData = async() => {
    const database = new Database;

    const data = await database.save(`user`, {
      id: user?.uid,
      uid: user?.uid,
    }, [user?.uid]);

    console.log(user?.uid);
    console.log(data);
  }

  const getData = async() => {
    const database = new Database;

    const data = await database.fetch('user', [user?.uid]);

    console.log(data);

    /* database.insert('user', {
      name: 'teste 2'
    }) */
  }

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <div className="flex items-center gap-2 text-lg font-semibold md:text-base">
            <Package2Icon />
            <span className="sr-only">Acme Inc</span>
          </div>
          <div className="text-foreground transition-colors hover:text-foreground">
            Dashboard
          </div>
          <div className="text-muted-foreground transition-colors hover:text-foreground">
            Orders
          </div>
          <div className="text-muted-foreground transition-colors hover:text-foreground">
            Products
          </div>
          <div className="text-muted-foreground transition-colors hover:text-foreground">
            Customers
          </div>
          <div className="text-muted-foreground transition-colors hover:text-foreground">
            Analytics
          </div>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="shrink-0 md:hidden" size="icon" variant="outline">
              <MenuIcon />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Package2Icon />
                <span className="sr-only">Acme Inc</span>
              </div>
              <div className="hover:text-foreground">
                Dashboard
              </div>
              <div className="text-muted-foreground hover:text-foreground">
                Orders
              </div>
              <div className="text-muted-foreground hover:text-foreground">
                Products
              </div>
              <div className="text-muted-foreground hover:text-foreground">
                Customers
              </div>
              <div className="text-muted-foreground hover:text-foreground">
                Analytics
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <SearchIcon />
              <Input
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                placeholder="Search products..."
                type="search"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full" size="icon" variant="secondary">
                <UsersCircleIcon />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={saveData}>Settings</DropdownMenuItem>
              <DropdownMenuItem onClick={getData}>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
  );
};

export default Header