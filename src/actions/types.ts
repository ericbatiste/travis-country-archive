import { ChangeEvent } from 'react';

export type RegFormType = {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
}

export type PostNewFeaturedBylawType = {
  sectionNumber: string;
  sectionTitle: string;
  description: string;
  bylawText: string;
  inANutshell: string;
};

export type BylawParamsType = {
  id: string;
  sectionNumber: string;
  sectionTitle: string;
  description: string;
  bylawText: string;
  inANutshell: string;
}

export type GetBylawsType = {
  id: string;
  created_at: string;
  section_number: string;
  section_title: string;
  description: string;
  bylaw_text: string;
  in_a_nutshell: string;
}

export type FeaturedBylawContentType = {
  bylaw_text?: string;
  in_a_nutshell?: string;
};

export type BoardObservationsContentType = {
  id?: string;
  last_updated?: string;
  content?: string;
};

export type ReturnsErrorMsg = {
  errorMessage: string | null;
}

export type UserType = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  status: string;
};

export type UserRegistrationCardProps = {
  user: UserType;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  onResendCode: (id: string) => void;
};

export type UpdateBylawCardProps = {
  id: string;
  createdAt: string;
  sectionNumber: string;
  sectionTitle: string;
  bylaws: GetBylawsType[];
  setSelectedBylaw?: (bylaw: GetBylawsType) => void;
};

export type AdminEditorProps = {
  selectedBylaw?: GetBylawsType | null;
  setSelectedBylaw?: React.Dispatch<React.SetStateAction<GetBylawsType | null>>;
  featuredContent?: PostNewFeaturedBylawType;
  setFeaturedContent?: React.Dispatch<React.SetStateAction<PostNewFeaturedBylawType>>;
  boardContent?: string;
  handleEditorChange: (content: string, section: string) => void;
  handleInputChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit?: () => void
  isPending: boolean;
  isCheckboxChecked: boolean;
  setIsCheckboxChecked: (checked: boolean) => void;
};

export type SubmitContentBtnProps = {
  onClick?: () => void;
  isPending: boolean;
  isChecked: boolean;
  setIsChecked: (checked: boolean) => void;
  text: string;
};

export type QuillProps = {
  value?: string
  onChange: (content: string) => void;
}