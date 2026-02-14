const FormHeader = ({ title, subtitle }) => {
  return (
    <div className="form-header mb-9">
      <h3 className="font-[Poppins] font-semibold md:text-[32px] text-[24px] text-center">
        {title}
      </h3>
      <p className="font-[DM_Sans] text-center text-[#333333AD] md:text-[16px] text-[14px] font-bold">
        {subtitle}
      </p>
    </div>
  );
};

export default FormHeader;
