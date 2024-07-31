import Quill from "./Quill";
import { AdminEditorProps } from "@/actions/types";
import SubmitContentBtn from "./SubmitContentBtn";

export default function BoardObservationsEditor({
  boardContent,
  handleEditorChange,
  isPending,
  isCheckboxChecked,
  setIsCheckboxChecked,
  updateBoardContent,
}: AdminEditorProps) {
  return (
    <>
      <div className="w-full flex-grow mb-6">
        <h2 className="text-lg font-bold mb-2">Board Observations:</h2>
        <Quill
          value={boardContent}
          onChange={content => handleEditorChange(content, 'boardObservations')}
        />
      </div>

      <SubmitContentBtn
        onClick={updateBoardContent}
        isPending={isPending}
        isChecked={isCheckboxChecked}
        setIsChecked={setIsCheckboxChecked}
        text="Submit"
      />
    </>
  );
}