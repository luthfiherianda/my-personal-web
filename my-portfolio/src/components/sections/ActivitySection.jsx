import RecentActivity from "./RecentActivity";
import AvailabilityCard from "./AvailabilityCard";
import DownloadCVCard from "./DownloadCVCard";

export default function ActivitySection() {
  return (
    <section
      aria-label="Recent activity and availability"
      className="mt-3 sm:mt-4 md:mt-5"
    >
      <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-5 lg:items-start lg:gap-5">
        <div className="lg:col-span-3">
          <RecentActivity />
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 lg:col-span-2">
          <AvailabilityCard />
          <DownloadCVCard />
        </div>
      </div>
    </section>
  );
}
