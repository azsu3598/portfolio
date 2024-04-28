const EducationItem = ({
  name,
  description,
  period,
}: {
  name: string;
  description: string;
  period: string[];
}) => {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <h3>{name}</h3>
          <span>{`${period[0]}${period[1] ? " - " + period[1] : ""}`}</span>
        </div>
        <span className="whitespace-pre-wrap">{`${description}`}</span>
      </div>
    </div>
  );
};

export default EducationItem;
