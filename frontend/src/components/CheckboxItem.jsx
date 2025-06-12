const CheckboxItem = ({ label }) => {
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox"/>
      <p>{label}</p>
    </div>
  );
};

export default CheckboxItem;
