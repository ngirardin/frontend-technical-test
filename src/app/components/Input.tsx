type Props = {
  type: "search" | "text";
  placeholder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
};
export const Input = (props: Props) => {
  return (
    <input
      type={props.type}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={props.placeholder}
      onChange={props.onChange}
      onKeyUp={props.onKeyUp}
      value={props.value}
    />
  );
};
