import type { JSX } from 'preact';


type CheckboxProps = JSX.IntrinsicElements['input'] & {
  label: string;
};

export default function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <label className="flex items-center space-x-3">
      <input
        type="checkbox"
        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        {...props}
      />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
}