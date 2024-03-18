import DashboardCharts from "@/components/backend/DashboardCharts"
import Heading from "@/components/backend/Heading"
import LargeCards from "@/components/backend/LargeCards"
import SmallCards from "@/components/backend/SmallCards"
import CustomDataTable from "@/components/backend/CustomDataTable";

const page = () => {
  return (
    <div>
      <Heading title={"Dashboard Overview"}/>
      {/* Large Cards */}
      <LargeCards/>
      {/* Small Cards */}
      <SmallCards/>
      {/* Charts */}
      <DashboardCharts/>
      {/* Recent Orders Table */}
      <CustomDataTable/>
    </div>
  )
}

export default page