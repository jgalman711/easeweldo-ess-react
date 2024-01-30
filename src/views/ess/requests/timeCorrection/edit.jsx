import TimeCorrectionForm from "./components/TimeCorrectionForm";
import { useParams } from 'react-router-dom';

const TimeCorrectionCreate = () => {
  const { correctionId } = useParams();

  return (
    <div className="flex w-full grid grid-cols-1 xl:grid-cols-2 4xl:grid-cols-3 gap-5">
      <div className="w-ful mt-3 flex flex-col gap-5">
        <TimeCorrectionForm correctionId={correctionId}/>
      </div>
    </div>
  )
}

export default TimeCorrectionCreate;