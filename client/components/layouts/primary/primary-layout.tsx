import PrimaryHeader from "@/components/headers/primary/primary-header";
import PrimaryFooter from "@/components/footers/primary/primary-footer";

const PrimaryLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <PrimaryHeader />
      {children}
      <PrimaryFooter />
    </>
  );
};

export default PrimaryLayout;
