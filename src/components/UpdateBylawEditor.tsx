import { useState, useEffect, useTransition } from 'react';
import UpdateBylawCard from './UpdateBylawCard';
import FeaturedBylawEditor from './FeaturedBylawEditor';
import { AdminEditorProps, GetBylawsType } from '@/actions/types';
import { fetchBylawsClient } from '@/actions/apiCalls';
import toast from 'react-hot-toast';
import { getErrorMessage } from '@/utils/errorMsg';
import { Loader2 } from 'lucide-react';

export default function UpdateBylawEditor({
  selectedBylaw,
  setSelectedBylaw,
  featuredContent,
  setFeaturedContent,
  handleEditorChange,
  handleInputChange,
  handleSubmit,
  isPending: parentIsPending,
  isCheckboxChecked,
  setIsCheckboxChecked
}: AdminEditorProps) {
  const [bylaws, setBylaws] = useState<GetBylawsType[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      try {
        const bylaws = await fetchBylawsClient();
        bylaws && setBylaws(bylaws);
      } catch (error) {
        toast.error(getErrorMessage(error));
      }
    });
  }, [startTransition]);

  return (
    <>
      {isPending ? (
        <div className="flex mt-20 justify-center min-w-full">
          <Loader2 className="animate-spin text-blue-600" size={80} />
        </div>
      ) : !selectedBylaw ? (
        <div className="p-2">
          <div className="space-y-4">
            {bylaws?.map(bylaw => (
              <UpdateBylawCard
                key={bylaw.id}
                id={bylaw.id}
                createdAt={bylaw.created_at}
                sectionNumber={bylaw.section_number}
                sectionTitle={bylaw.section_title}
                bylaws={bylaws}
                setSelectedBylaw={setSelectedBylaw}
              />
            ))}
          </div>
        </div>
      ) : (
        <FeaturedBylawEditor
          selectedBylaw={selectedBylaw}
          featuredContent={featuredContent}
          setFeaturedContent={setFeaturedContent}
          handleEditorChange={handleEditorChange}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          isPending={parentIsPending}
          isCheckboxChecked={isCheckboxChecked}
          setIsCheckboxChecked={setIsCheckboxChecked}
        />
      )}
    </>
  );
}
