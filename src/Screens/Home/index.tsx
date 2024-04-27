import CardCmp from "./components/Card"
import Transactions from "./components/Transactions"
import ActivityIcon from "./components/ActivityIcon"
import DollarSignIcon from "./components/DollarSignIcon"

import CreditCardIcon from "./components/CreditCardIcon"
import Header from "./components/Header"
import RecentSales from "./components/RecentSales"

export default function Component() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <CardCmp
            title="Total Revenue"
            contentTitle="$45,231.89"
            contentBody={'+20.1% from last month'}
            icon={
              <DollarSignIcon />
            }
          />
          <CardCmp
            title="Subscriptions"
            contentTitle="+2350"
            contentBody={'+180.1% from last month'}
            icon={
              <DollarSignIcon />
            }
          />
          <CardCmp
            title="Sales"
            contentTitle="+12,234"
            contentBody={'+19% from last month'}
            icon={
              <CreditCardIcon />
            }
          />
          <CardCmp
            title="Active Now"
            contentTitle="+573"
            contentBody={'+201 since last hour'}
            icon={
              <ActivityIcon />
            }
          />
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Transactions />
          <RecentSales />
        </div>
      </main>
    </div>
  )
}
