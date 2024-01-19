import BankInformation from "./components/BankInformation";
import Banner from "./components/Banner";
// import EmergencyContact from "./components/EmergencyContact";
import IdentificationNumbers from "./components/IdentificationNumbers";
import PersonalInformation from "./components/PersonalInformation";
import WorkInformation from "./components/WorkInformation";

const ProfileOverview = () => {
  return (
    <div className="flex w-full grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="w-ful mt-3 flex flex-col gap-5">
        <Banner />
        <PersonalInformation />
        <IdentificationNumbers />
      </div>
      <div className="w-full mt-3 flex flex-col gap-5">
        <WorkInformation />
        <BankInformation />
        {/* <EmergencyContact /> */}
      </div>
    </div>
  );
};

export default ProfileOverview;
